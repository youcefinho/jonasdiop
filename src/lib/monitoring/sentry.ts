import { clientConfig } from '@/config/clientConfig';

/**
 * Sentry — dynamic import wrapper to keep the 137kB @sentry/react chunk
 * out of the initial bundle when DSN is empty (Sprint 6 default state).
 *
 * Why dynamic : a sync `import * as Sentry from '@sentry/react'` makes the
 * Sentry chunk a hard dependency of the entry bundle (it ships even when
 * DSN is empty and Sentry init is a no-op). Switching to a dynamic
 * `import('@sentry/react')` inside each call site lets Rollup tree-shake
 * Sentry out entirely when no DSN is configured, saving ~137kB / ~46kB gz
 * from the initial render-blocking chain — directly improves LCP.
 *
 * When DSN is provisioned later, the dynamic import resolves in parallel
 * with React mount instead of blocking the entry bundle.
 *
 * Sampling defaults (init only) :
 *   - tracesSampleRate 0.1 (10% transactions)
 *   - replaysSessionSampleRate 0 (off, opt-in privacy-sensitive)
 *   - replaysOnErrorSampleRate 0 (off, same)
 *
 * Re-tune sampling once production volume is known.
 */
export function initSentry(): boolean {
  const { dsn, environment, release } = clientConfig.sentry;
  if (dsn.length === 0) {
    return false;
  }

  // Fire-and-forget : keep signature sync (callers don't need to await).
  void import('@sentry/react').then((Sentry) => {
    Sentry.init({
      dsn,
      environment,
      release,
      tracesSampleRate: 0.1,
      integrations: [Sentry.browserTracingIntegration()],
      // Tag every event with locale for slicing in Sentry UI
      beforeSend(event) {
        const locale =
          typeof document !== 'undefined' ? document.documentElement.lang || 'fr-CA' : 'fr-CA';
        return {
          ...event,
          tags: { ...event.tags, locale }
        };
      }
    });
  });

  return true;
}

/**
 * Capture an error explicitly. No-op when Sentry is not initialised (DSN empty).
 * Always logs to console.error so dev observation works regardless.
 */
export function captureError(error: unknown, context?: Record<string, unknown>): void {
  // biome-ignore lint/suspicious/noConsole: intentional — Sentry pattern logs to console.error in addition to forwarding
  console.error(error, context);
  if (clientConfig.sentry.dsn.length === 0) return;
  void import('@sentry/react').then((Sentry) => {
    Sentry.captureException(error, context ? { extra: context } : undefined);
  });
}
