import {
  CONSENT_EXPIRY_MS,
  CONSENT_SCHEMA_VERSION,
  CONSENT_STORAGE_KEY,
  type ConsentCategories,
  type ConsentDecision,
  type ConsentState
} from '@/lib/consent/types';

/**
 * Consent storage helpers — localStorage read/write with versioned schema +
 * 13-month expiry. SSR-safe (returns 'undecided' when window absent).
 */

export function readConsent(): ConsentState {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return { status: 'undecided' };
  }

  let raw: string | null;
  try {
    raw = localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    // Storage access may throw (private mode, quota, disabled cookies)
    return { status: 'undecided' };
  }
  if (raw === null) return { status: 'undecided' };

  let parsed: ConsentDecision;
  try {
    parsed = JSON.parse(raw) as ConsentDecision;
  } catch {
    return { status: 'undecided' };
  }

  if (parsed.version !== CONSENT_SCHEMA_VERSION) {
    return { status: 'undecided' };
  }

  const decidedAtMs = Date.parse(parsed.decidedAt);
  if (Number.isNaN(decidedAtMs)) return { status: 'undecided' };

  if (Date.now() - decidedAtMs > CONSENT_EXPIRY_MS) {
    return { status: 'undecided' };
  }

  return { status: 'decided', decision: parsed };
}

export function writeConsent(categories: ConsentCategories): ConsentDecision {
  const decision: ConsentDecision = {
    version: CONSENT_SCHEMA_VERSION,
    categories,
    decidedAt: new Date().toISOString()
  };

  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return decision;
  }
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(decision));
  } catch {
    // Storage may be disabled — decision still returned for the in-memory provider.
  }
  return decision;
}

export function clearConsent(): void {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }
}
