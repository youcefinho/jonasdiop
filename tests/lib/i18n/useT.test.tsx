import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { useT } from '@/lib/i18n/useT';
import type { ReactNode } from 'react';

const wrapper = (locale: 'fr' | 'en') => ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale={locale}>{children}</LanguageProvider>
);

describe('useT() — bilingual hook', () => {
  it('returns current locale', () => {
    const { result } = renderHook(() => useT(), { wrapper: wrapper('fr') });
    expect(result.current.locale).toBe('fr');
  });

  it('translates bilingual value with ta()', () => {
    const { result } = renderHook(() => useT(), { wrapper: wrapper('en') });
    const translated = result.current.t({ fr: 'Bonjour', en: 'Hello' });
    expect(translated).toBe('Hello');
  });

  it('falls back to FR when EN missing', () => {
    const { result } = renderHook(() => useT(), { wrapper: wrapper('en') });
    const translated = result.current.t({ fr: 'Bonjour' } as never);
    expect(translated).toBe('Bonjour');
  });
});
