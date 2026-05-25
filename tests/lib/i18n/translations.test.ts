import { describe, it, expect } from 'vitest';
import { ta } from '@/lib/i18n/translations';

describe('ta() — safe bilingual cast', () => {
  it('returns the FR value when locale is fr', () => {
    const value = { fr: 'Bonjour', en: 'Hello' };
    expect(ta(value, 'fr')).toBe('Bonjour');
  });

  it('returns the EN value when locale is en', () => {
    const value = { fr: 'Bonjour', en: 'Hello' };
    expect(ta(value, 'en')).toBe('Hello');
  });

  it('falls back to FR when EN missing (BilingualLax behavior)', () => {
    const value = { fr: 'Bonjour' };
    expect(ta(value as never, 'en')).toBe('Bonjour');
  });

  it('returns the plain string when value is not bilingual (string passthrough)', () => {
    expect(ta('plain' as never, 'fr')).toBe('plain');
  });

  it('returns empty string when value is null/undefined', () => {
    expect(ta(null as never, 'fr')).toBe('');
    expect(ta(undefined as never, 'fr')).toBe('');
  });
});
