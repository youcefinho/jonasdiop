import type { ArticleSource } from '@/lib/content/types';

/**
 * Content source config — drives the adapter selection for each content type.
 *
 * Cross-Intralys pattern : flip a single value to migrate a content type
 * from MDX-managed (Intralys) to client-autonomous (GHL admin) — no code
 * changes required in routes or components.
 *
 * Jonas Diop default :
 *   - articles: 'ghl'    — Jonas publishes in GHL admin autonomously (H10 validated)
 *   - faq:      'mdx'    — Intralys-managed, rarely changes
 *
 * Sprint 5 = scaffolding ; Sprint 6 = real GHL wire (locationId + auth + webhook).
 */
export interface ContentConfig {
  readonly articles: ArticleSource;
  readonly faq: ArticleSource;
}

export const contentConfig: ContentConfig = {
  articles: 'ghl',
  faq: 'mdx'
} as const;
