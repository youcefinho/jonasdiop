import type { BilingualLax, Locale, Translatable } from './types';
import { DEFAULT_LOCALE } from './types';

/**
 * ta() — safe bilingual access helper.
 * - Si valeur est BilingualLax<T> : retourne la version locale (fallback FR si EN manque).
 * - Si valeur est plain string/T : passthrough.
 * - Si valeur est null/undefined : retourne '' (safe pour rendering).
 *
 * Usage :
 *   ta(content.hero.headline, locale) → string
 *   ta('plain', locale) → 'plain'
 */
export function ta<T = string>(
  value: Translatable<T> | null | undefined,
  locale: Locale
): T | string {
  if (value === null || value === undefined) return '';

  if (typeof value === 'object' && 'fr' in value) {
    const bilingual = value as BilingualLax<T>;
    const localized = bilingual[locale];
    // Fallback FR if EN missing (BilingualLax behavior)
    return localized !== undefined ? localized : bilingual.fr;
  }

  return value as T;
}

/** Detect locale from pathname (e.g., '/en/about' → 'en', '/about' → 'fr'). */
export function localeFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  return DEFAULT_LOCALE;
}

/** Build a locale-aware path (e.g., 'about' + 'en' → '/en/about'). */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (locale === 'fr') return `/${clean}`;
  return `/en/${clean}`;
}
