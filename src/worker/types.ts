/**
 * Worker Env + API contract types
 *
 * Centralizes the Cloudflare bindings + API payload shapes shared between
 * `src/worker.ts` (router entry) and `src/worker/api-waitlist.ts` handler.
 *
 * Keep this file free of runtime code — types only, so it can be imported
 * from tests without pulling Worker-only globals (KVNamespace, Fetcher).
 */

export interface Env {
  /** SPA assets binding (set by wrangler `assets` block). */
  ASSETS: Fetcher;

  /** Cached GHL blog articles (Sprint 6). Optional during pre-launch. */
  ARTICLE_CACHE?: KVNamespace;

  /**
   * Pre-launch waitlist KV namespace.
   * Required for /api/waitlist; missing binding → 503 from handler.
   *
   * Setup (run once on Jonas's CF account):
   *   bun wrangler kv namespace create WAITLIST
   *   bun wrangler kv namespace create WAITLIST --preview
   * Then paste returned IDs into wrangler.jsonc `kv_namespaces`.
   */
  WAITLIST?: KVNamespace;

  ENVIRONMENT?: 'staging' | 'production';
  GHL_LOCATION_ID?: string;
  GHL_TRACKING_ID?: string;
}

/**
 * Source attribution — where the user submitted the email from.
 * Used for funnel analysis when Jonas exports KV → GHL.
 *
 * Allowlist enforced server-side (api-waitlist.ts WAITLIST_SOURCES).
 */
export type WaitlistSource =
  | 'hero' // Bootcamp page hero CTA
  | 'final' // Bootcamp page final CTA section
  | 'popup' // ExitIntentPopup
  | 'footer' // FooterRich newsletter
  | 'edge-app' // The Edge™ specific app variant
  | 'evenements-hub'; // /evenements/bootcamps hub page

/**
 * Route allowlist — which page initiated the submission.
 * Matches the 4 valid pre-launch capture surfaces per brief v3:
 *   - 3 Trilogie LPs + 1 hub + Home (Footer/Popup) + sentinel "/" for Home routes.
 *
 * NOTE: when /api/waitlist is called from FooterRich or ExitIntentPopup,
 * `route` should be the current pathname (e.g. "/", "/cdt", "/about")
 * NOT necessarily a bootcamp route. The allowlist below is permissive on
 * non-bootcamp routes (any path starting with `/` is accepted) but strict
 * on bootcamp URLs (must match exact slugs).
 */
export type WaitlistRoute = string;

/**
 * Stored KV value shape.
 * Key = lowercased trimmed email (deduplication granularity).
 * additionalRoutes[] = history if same user submits from multiple surfaces.
 */
export interface WaitlistEntry {
  email: string;
  route: WaitlistRoute;
  source: WaitlistSource;
  /** ISO 8601 timestamp of FIRST submission. */
  ts: string;
  /** 'fr' | 'en' resolved from route prefix client-side. */
  locale: 'fr' | 'en';
  /**
   * Loi 25 Quebec explicit consent flag.
   * MUST be true to write — Loi 25 (sept 2023) requires opt-in for any
   * lead capture in QC. UI checkbox should default unchecked.
   */
  consent: boolean;
  /** Submission count for rate limiting + funnel analysis. */
  count: number;
  /** Track every (route, source, ts) triple user submitted from. */
  history: Array<{
    route: WaitlistRoute;
    source: WaitlistSource;
    ts: string;
  }>;
  /** Last submission timestamp for rate-limit window. */
  lastTs: string;
  /** Was this entry ever pushed to GHL? (Set later by H8 sync job.) */
  ghlSynced?: boolean;
}

/**
 * Inbound request payload from frontend.
 * `website` is the honeypot — bots fill it, humans don't see it.
 */
export interface WaitlistRequestBody {
  email: string;
  route: string;
  source: string;
  locale?: string;
  consent?: boolean;
  /** Honeypot. MUST be empty/undefined for legit submissions. */
  website?: string;
}

export type WaitlistApiResponse = { ok: true } | { ok: false; error: string };
