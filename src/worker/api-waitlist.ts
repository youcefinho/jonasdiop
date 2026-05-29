/**
 * POST /api/waitlist — pre-launch email capture handler.
 *
 * MODE PRÉ-LANCEMENT (brief v3 §3.6 + Trilogie reconciliation):
 *   - Stripe buttons are dormant; users tap "Sois notifié des inscriptions"
 *     instead → this endpoint records intent into KV.
 *   - GHL sync is deferred to H8 (Jonas provides endpoint). For now, KV is
 *     the single source of truth Jonas can export to GHL via wrangler CLI.
 *
 * SECURITY MODEL:
 *   1. Honeypot: hidden `website` field → if filled, return silent 200 (don't
 *      tip off the bot that we know). No KV write.
 *   2. Email regex: conservative RFC-5322-lite (catches 99% of real emails).
 *   3. Allowlist: route + source enums prevent KV pollution from CSRF/forged
 *      submissions hitting random surfaces.
 *   4. Rate limit: max 5 submissions per email per 24h window. Resets via
 *      sliding window based on `lastTs` (NOT a per-IP limit — that would
 *      need Workers Rate Limiting API + binding, out of scope pre-launch).
 *   5. Loi 25 QC: requires `consent: true` to write. Logged in entry for
 *      audit trail.
 *
 * CORS:
 *   - Allow production custom domain + workers.dev preview + localhost dev.
 *   - Strict same-origin in prod; same worker serves SPA + API so most
 *     submissions are same-origin. The headers are belt-and-braces for the
 *     case where Jonas embeds the form on an external page (e.g. landing
 *     page on jonasdiop.com pointing at this Worker).
 *
 * RESPONSE CONTRACT:
 *   - 200 { ok: true }  — accepted (or honeypot silent success)
 *   - 400 { ok: false, error: '...' } — validation failure (email/route/source/consent)
 *   - 405 { ok: false, error: '...' } — wrong method
 *   - 429 { ok: false, error: '...' } — rate limited
 *   - 503 { ok: false, error: '...' } — KV binding missing (config error)
 */

import type { Env, WaitlistEntry, WaitlistRequestBody, WaitlistSource } from './types';

/* -------------------------------------------------------------------------- */
/*                              VALIDATION CONSTANTS                          */
/* -------------------------------------------------------------------------- */

const WAITLIST_SOURCES: ReadonlyArray<WaitlistSource> = [
  'hero',
  'final',
  'popup',
  'footer',
  'edge-app',
  'evenements-hub'
] as const;

/**
 * Bootcamp-specific routes that MUST be valid (anti-cannibalisation:
 * waitlist signups belong to the bootcamp funnel, not generic site forms).
 * Other valid sources (footer, popup) can submit from any path — we accept
 * that path as-is but validate it's a reasonable pathname.
 */
const BOOTCAMP_ROUTES: ReadonlyArray<string> = [
  '/evenements/bootcamps',
  '/evenements/bootcamps/an-army-of-one',
  '/evenements/bootcamps/the-edge',
  '/evenements/bootcamps/the-activation',
  // EN mirrors
  '/en/events/bootcamps',
  '/en/events/bootcamps/an-army-of-one',
  '/en/events/bootcamps/the-edge',
  '/en/events/bootcamps/the-activation'
] as const;

/** Conservative email regex — accepts standard formats, rejects obvious junk. */
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/;

/** Generous pathname check — must start with `/`, max 200 chars, no whitespace/protocol. */
const PATHNAME_RE = /^\/[^\s?#]{0,199}$/;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 24h

/* -------------------------------------------------------------------------- */
/*                                CORS HELPERS                                */
/* -------------------------------------------------------------------------- */

/** Origins allowed to call /api/waitlist. */
const ALLOWED_ORIGINS = new Set<string>([
  'https://jonas-diop.intralys.dev',
  'https://jonas-diop.intralysqc.workers.dev',
  'https://jonasdiop.com',
  'https://www.jonasdiop.com',
  'http://localhost:5173',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:4173'
]);

function corsHeaders(origin: string | null): Record<string, string> {
  const allowOrigin =
    origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://jonas-diop.intralys.dev';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin'
  };
}

function jsonResponse(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...corsHeaders(origin)
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                              VALIDATION HELPERS                            */
/* -------------------------------------------------------------------------- */

function isValidEmail(value: unknown): value is string {
  return typeof value === 'string' && value.length <= 254 && EMAIL_RE.test(value);
}

function isValidSource(value: unknown): value is WaitlistSource {
  return typeof value === 'string' && (WAITLIST_SOURCES as ReadonlyArray<string>).includes(value);
}

/**
 * Route validation:
 *   - hero/final/edge-app/evenements-hub MUST submit from a BOOTCAMP_ROUTES path
 *     (anti-cannibalisation + anti-CSRF guard).
 *   - footer/popup may submit from any well-formed pathname (these surfaces
 *     are sitewide).
 */
function isValidRoute(value: unknown, source: WaitlistSource): value is string {
  if (typeof value !== 'string' || !PATHNAME_RE.test(value)) return false;
  const requiresBootcampRoute =
    source === 'hero' || source === 'final' || source === 'edge-app' || source === 'evenements-hub';
  if (requiresBootcampRoute) {
    return (BOOTCAMP_ROUTES as ReadonlyArray<string>).includes(value);
  }
  return true;
}

function normalizeLocale(value: unknown): 'fr' | 'en' {
  return value === 'en' ? 'en' : 'fr';
}

/* -------------------------------------------------------------------------- */
/*                                  HANDLER                                   */
/* -------------------------------------------------------------------------- */

export async function handleWaitlist(request: Request, env: Env): Promise<Response> {
  const origin = request.headers.get('Origin');

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, error: 'method_not_allowed' }, 405, origin);
  }

  if (!env.WAITLIST) {
    // Config error — KV binding missing. Return 503 so frontend can surface
    // a generic "service temporarily unavailable" UX without leaking detail.
    return jsonResponse({ ok: false, error: 'service_unavailable' }, 503, origin);
  }

  // Parse JSON safely
  let body: WaitlistRequestBody;
  try {
    const raw = await request.json();
    if (!raw || typeof raw !== 'object') {
      return jsonResponse({ ok: false, error: 'invalid_payload' }, 400, origin);
    }
    body = raw as WaitlistRequestBody;
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_json' }, 400, origin);
  }

  // HONEYPOT — silent success (don't reveal we caught the bot)
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return jsonResponse({ ok: true }, 200, origin);
  }

  // Validate email
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!isValidEmail(email)) {
    return jsonResponse({ ok: false, error: 'invalid_email' }, 400, origin);
  }

  // Validate source
  if (!isValidSource(body.source)) {
    return jsonResponse({ ok: false, error: 'invalid_source' }, 400, origin);
  }
  const source: WaitlistSource = body.source;

  // Validate route (depends on source)
  if (!isValidRoute(body.route, source)) {
    return jsonResponse({ ok: false, error: 'invalid_route' }, 400, origin);
  }
  const route: string = body.route;

  // Loi 25 QC: explicit consent required
  if (body.consent !== true) {
    return jsonResponse({ ok: false, error: 'consent_required' }, 400, origin);
  }

  const locale = normalizeLocale(body.locale);
  const now = new Date();
  const nowIso = now.toISOString();

  // Load existing entry (if any) for rate-limit + history merge
  const existingRaw = await env.WAITLIST.get(email);
  let existing: WaitlistEntry | null = null;
  if (existingRaw) {
    try {
      existing = JSON.parse(existingRaw) as WaitlistEntry;
    } catch {
      // Corrupt entry — overwrite. Log via observability if Jonas wires Logpush.
      existing = null;
    }
  }

  // Rate limit: if count >= MAX and lastTs within window → 429
  if (existing) {
    const lastTime = Date.parse(existing.lastTs);
    const withinWindow =
      Number.isFinite(lastTime) && now.getTime() - lastTime < RATE_LIMIT_WINDOW_MS;
    if (withinWindow && existing.count >= RATE_LIMIT_MAX) {
      return jsonResponse({ ok: false, error: 'rate_limited' }, 429, origin);
    }
  }

  // Compute next entry. Preserve `ts` (first submission) and `consent`
  // (once granted, stays granted — withdrawal requires separate endpoint).
  const next: WaitlistEntry = {
    email,
    route,
    source,
    ts: existing?.ts ?? nowIso,
    locale,
    consent: true,
    count: (existing?.count ?? 0) + 1,
    history: [...(existing?.history ?? []), { route, source, ts: nowIso }].slice(-20), // cap history to last 20 submissions (KV value size hygiene)
    lastTs: nowIso,
    ghlSynced: existing?.ghlSynced ?? false
  };

  // Write to KV. No TTL — pre-launch list is permanent intent.
  await env.WAITLIST.put(email, JSON.stringify(next), {
    metadata: { source, route, locale }
  });

  return jsonResponse({ ok: true }, 200, origin);
}
