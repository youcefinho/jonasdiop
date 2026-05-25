import type { Translatable } from './types';
import { ta } from './translations';
import { useLanguageContext } from './LanguageContext';

/**
 * useT() — bilingual hook for components.
 * Returns { locale, t } where t() = ta(value, locale).
 * Use this in EVERY component that renders text.
 */
export function useT() {
  const { locale } = useLanguageContext();
  return {
    locale,
    t: <T = string>(value: Translatable<T> | null | undefined) => ta(value, locale)
  };
}
