import * as Sentry from '@sentry/react';
import { clientConfig } from '@/config/clientConfig';

/**
 * Sentry init — no-op when DSN is empty (Sprint 6 default state).
 *
 * Once Rochdi provisions a Sentry project and fills `clientConfig.sentry.dsn`,
 * this initializes SDK with conservative defaults :
 *   - tracesSampleRate 0.1   (10% transactions)
 *   - replaysSessionSampleRate 0     (off — opt-in privacy-sensitive)
 *   - replaysOnErrorSampleRate 0.0   (off — same)
 *
 * Re-tune sampling once production volume is known.
 */
export function initSentry(): boolean {
  const { dsn, environment, release } = clientConfig.sentry;
  if (dsn.length === 0) {
    return false;
  }

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
  Sentry.captureException(error, context ? { extra: context } : undefined);
}
