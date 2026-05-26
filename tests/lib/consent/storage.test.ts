import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { clearConsent, readConsent, writeConsent } from '@/lib/consent/storage';
import {
  ACCEPT_ALL,
  CONSENT_EXPIRY_MS,
  CONSENT_SCHEMA_VERSION,
  CONSENT_STORAGE_KEY,
  REJECT_ALL
} from '@/lib/consent/types';

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

describe('consent storage — readConsent', () => {
  it('returns undecided when no entry is stored', () => {
    expect(readConsent()).toEqual({ status: 'undecided' });
  });

  it('returns undecided when stored JSON is malformed', () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, '{not json');
    expect(readConsent()).toEqual({ status: 'undecided' });
  });

  it('returns undecided when schema version mismatches', () => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_SCHEMA_VERSION + 99,
        categories: ACCEPT_ALL,
        decidedAt: new Date().toISOString()
      })
    );
    expect(readConsent()).toEqual({ status: 'undecided' });
  });

  it('returns undecided when decidedAt is past expiry', () => {
    const expired = new Date(Date.now() - CONSENT_EXPIRY_MS - 1000).toISOString();
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_SCHEMA_VERSION,
        categories: ACCEPT_ALL,
        decidedAt: expired
      })
    );
    expect(readConsent()).toEqual({ status: 'undecided' });
  });

  it('returns decided when stored decision is fresh', () => {
    const decidedAt = new Date().toISOString();
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_SCHEMA_VERSION,
        categories: ACCEPT_ALL,
        decidedAt
      })
    );
    const state = readConsent();
    expect(state.status).toBe('decided');
    if (state.status === 'decided') {
      expect(state.decision.categories).toEqual(ACCEPT_ALL);
    }
  });
});

describe('consent storage — writeConsent', () => {
  it('persists ACCEPT_ALL decision', () => {
    const decision = writeConsent(ACCEPT_ALL);
    expect(decision.version).toBe(CONSENT_SCHEMA_VERSION);
    expect(decision.categories).toEqual(ACCEPT_ALL);

    const reread = readConsent();
    expect(reread.status).toBe('decided');
    if (reread.status === 'decided') {
      expect(reread.decision.categories).toEqual(ACCEPT_ALL);
    }
  });

  it('persists REJECT_ALL decision with necessary still true', () => {
    const decision = writeConsent(REJECT_ALL);
    expect(decision.categories.necessary).toBe(true);
    expect(decision.categories.analytics).toBe(false);
    expect(decision.categories.marketing).toBe(false);
  });
});

describe('consent storage — clearConsent', () => {
  it('removes stored decision', () => {
    writeConsent(ACCEPT_ALL);
    expect(readConsent().status).toBe('decided');
    clearConsent();
    expect(readConsent().status).toBe('undecided');
  });
});
