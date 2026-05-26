/**
 * Cookie consent types — Loi 25 (Québec) compliant.
 *
 * Three categories :
 *   - necessary  : always enabled (cannot be refused per Loi 25 carve-out for
 *                  essential site function : security, language preference,
 *                  consent record itself, CSRF tokens)
 *   - analytics  : opt-in (GA4, Clarity, internal metrics)
 *   - marketing  : opt-in (Meta Pixel, ad retargeting)
 *
 * Storage : versioned localStorage key. Bump CONSENT_SCHEMA_VERSION when the
 * shape changes so older records are treated as "no decision yet" and the
 * banner re-shows.
 */

export const CONSENT_SCHEMA_VERSION = 1;
export const CONSENT_STORAGE_KEY = 'jonas-diop-consent-v1';

/** Expiry per Loi 25 typical : 13 months from decision. */
export const CONSENT_EXPIRY_MS = 13 * 30 * 24 * 60 * 60 * 1000;

export interface ConsentCategories {
  readonly necessary: true;
  readonly analytics: boolean;
  readonly marketing: boolean;
}

export interface ConsentDecision {
  readonly version: number;
  readonly categories: ConsentCategories;
  /** ISO 8601 timestamp of the decision. */
  readonly decidedAt: string;
}

export type ConsentState =
  | { readonly status: 'undecided' }
  | { readonly status: 'decided'; readonly decision: ConsentDecision };

export const ACCEPT_ALL: ConsentCategories = {
  necessary: true,
  analytics: true,
  marketing: true
} as const;

export const REJECT_ALL: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false
} as const;
