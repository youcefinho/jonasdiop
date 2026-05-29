/**
 * Waitlist API client — POST email captures to the Cloudflare Worker
 * `/api/waitlist` endpoint (created in a sibling Phase 3 task).
 *
 * Honest pre-launch wiring : Stripe is not connected yet, but every email
 * capture form across the site (hero capture, final CTA, exit-intent popup,
 * footer newsletter, EdgeApplicationFormShell mini-notify) routes through
 * this single helper so we have ONE place to evolve when GHL / Mailchimp /
 * Beehiiv / Resend is selected as the email backend.
 *
 * Contract :
 *   - POST application/json
 *   - Honeypot field `website` ALWAYS sent empty — server discards if filled.
 *   - Returns { ok, error? } where `error` is already user-friendly + localized.
 *   - Network / 5xx / unknown → generic "réessayer plus tard" message.
 *   - 429 → "trop de tentatives" message.
 *   - 400 → "email invalide" message.
 *   - 200/201/204 → ok=true.
 *
 * Source taxonomy (matches sibling Worker handler) :
 *   hero · final · edge-app · evenements-hub · popup · popup-bootcamp · footer
 *
 * Locale is forwarded so the Worker can localize confirmation emails when
 * the email platform is wired.
 */

export type WaitlistSource =
  | 'hero'
  | 'final'
  | 'edge-app'
  | 'evenements-hub'
  | 'popup'
  | 'popup-bootcamp'
  | 'footer';

export interface WaitlistSubmission {
  readonly email: string;
  /** Pathname at submit time — used by Worker for attribution. */
  readonly route: string;
  /** Where in the page the capture happened. */
  readonly source: WaitlistSource;
  /** Locale for confirmation emails — 'fr' default. */
  readonly locale: 'fr' | 'en';
  /** Loi 25 explicit consent flag — `true` when user accepted notification. */
  readonly consent: boolean;
  /** Optional context tag (e.g. bootcamp slug for popup-bootcamp variant). */
  readonly context?: string;
}

export interface WaitlistResult {
  readonly ok: boolean;
  readonly error?: string;
}

const ENDPOINT = '/api/waitlist';

const ERROR_MESSAGES = {
  fr: {
    invalid: 'Adresse courriel invalide. Vérifie et réessaie.',
    rateLimit: 'Trop de tentatives — réessaie dans quelques minutes.',
    network: 'Connexion impossible. Vérifie ta connexion et réessaie.',
    generic: 'Une erreur est survenue. Réessaie dans quelques instants.',
    consent: 'Le consentement est requis pour t’inscrire (Loi 25).'
  },
  en: {
    invalid: 'Invalid email address. Please double-check and try again.',
    rateLimit: 'Too many attempts — please try again in a few minutes.',
    network: 'Connection failed. Check your network and retry.',
    generic: 'Something went wrong. Please try again in a moment.',
    consent: 'Consent is required to subscribe (Quebec Law 25).'
  }
} as const;

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Submit a waitlist email capture to the Worker.
 * NEVER throws — always returns a `WaitlistResult` so the caller renders
 * a friendly error toast / inline message instead of an unhandled rejection.
 */
export async function submitWaitlist(submission: WaitlistSubmission): Promise<WaitlistResult> {
  const msgs = ERROR_MESSAGES[submission.locale] ?? ERROR_MESSAGES.fr;

  // Client-side guards — keep them cheap, the Worker re-validates.
  const trimmed = submission.email.trim();
  if (!trimmed || !EMAIL_RX.test(trimmed)) {
    return { ok: false, error: msgs.invalid };
  }
  if (!submission.consent) {
    return { ok: false, error: msgs.consent };
  }

  const body = {
    email: trimmed,
    route: submission.route,
    source: submission.source,
    locale: submission.locale,
    consent: submission.consent,
    context: submission.context ?? null,
    // Honeypot — humans never fill this, bots usually do.
    website: ''
  };

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      credentials: 'same-origin'
    });

    if (response.ok) return { ok: true };
    if (response.status === 429) return { ok: false, error: msgs.rateLimit };
    if (response.status === 400 || response.status === 422) {
      return { ok: false, error: msgs.invalid };
    }
    return { ok: false, error: msgs.generic };
  } catch {
    // AbortError, TypeError (offline), DNS — all bucketed as network.
    return { ok: false, error: msgs.network };
  }
}

/**
 * Detect the bootcamp slug currently in the URL (used by ExitIntentPopup
 * route-aware variant). Returns null when not on a bootcamp sub-page.
 */
export function detectBootcampSlugFromPath(
  pathname: string
): 'an-army-of-one' | 'the-edge' | 'the-activation' | null {
  if (pathname.includes('/an-army-of-one')) return 'an-army-of-one';
  if (pathname.includes('/the-edge')) return 'the-edge';
  if (pathname.includes('/the-activation')) return 'the-activation';
  return null;
}
