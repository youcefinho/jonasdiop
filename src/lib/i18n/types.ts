/**
 * i18n types — Jonas Diop bilingual FR/EN
 * Pattern : BilingualLax<T> permet FR-only fallback safe (pour drafting progressif).
 * Strict version : BilingualStrict<T> oblige les 2 langues (à activer Sprint 7.5 final).
 */

export type Locale = 'fr' | 'en';

export const SUPPORTED_LOCALES: readonly Locale[] = ['fr', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'fr';

/** Bilingual lax : EN optional, FR fallback automatique côté `ta()`. */
export type BilingualLax<T = string> = {
  fr: T;
  en?: T;
};

/** Bilingual strict : les 2 langues OBLIGATOIRES (à activer en fin de Sprint 7.5). */
export type BilingualStrict<T = string> = {
  fr: T;
  en: T;
};

/** Discriminated union pour valeurs qui peuvent être plain string OU bilingual. */
export type Translatable<T = string> = T | BilingualLax<T>;
