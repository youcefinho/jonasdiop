/**
 * Detects copy that still contains validation placeholders (e.g.
 * `[À VALIDER JONAS — anecdote personnelle]`) or internal dev comments
 * (`[GHL Blog API headless Sprint 5...]`, `[Formulaire wire Sprint 6...]`).
 *
 * Used to guard against client-visible leaks of unvalidated content.
 * Components that render content should call `isUnvalidatedContent(text)`
 * and either hide the section or render a graceful fallback.
 *
 * The matcher is strict on the LEAKED literal patterns — never matches
 * legitimate user text containing brackets.
 */

const UNVALIDATED_PATTERNS = [
  /\[À VALIDER\b/i,
  /\[TO VALIDATE\b/i,
  /\[Formulaire wire\b/i,
  /\[Form wire\b/i,
  /\[Grid articles\b/i,
  /\[Section case study\b/i,
  /Sprint [56789]\)/i,
  /\bGHL Blog API\b/i,
  /\bArticleRenderer avec D[0-9]/i
] as const;

export function isUnvalidatedContent(value: string | null | undefined): boolean {
  if (!value || typeof value !== 'string') return false;
  return UNVALIDATED_PATTERNS.some((pattern) => pattern.test(value));
}

/**
 * Removes `[À VALIDER ...]` substrings from mixed copy, leaving the
 * surrounding real content. If the result is empty (was pure placeholder),
 * returns null so the caller can decide to hide.
 *
 * Example :
 *   "Depuis [À VALIDER JONAS — année], j'ai accompagné..."
 *     → "Depuis , j'ai accompagné..." (caller should clean orphan punctuation)
 */
export function stripUnvalidatedSegments(value: string): string | null {
  if (!value) return null;
  const cleaned = value
    .replace(/\[À VALIDER[\s\S]*\]/gi, '')
    .replace(/\[TO VALIDATE[\s\S]*\]/gi, '')
    .replace(/\s+,/g, ',')
    .replace(/\s+\./g, '.')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return cleaned.length > 0 ? cleaned : null;
}
