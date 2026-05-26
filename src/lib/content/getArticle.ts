import { contentConfig } from '@/config/contentConfig';
import * as ghlAdapter from '@/lib/content/adapters/ghl-adapter';
import * as mdxAdapter from '@/lib/content/adapters/mdx-adapter';
import type { Article, ContentLocale } from '@/lib/content/types';

/**
 * Single-article fetcher — adapter-agnostic.
 *
 * Selects adapter from `contentConfig.articles` at call time. Routes and UI
 * components consume `getArticle()` only — never adapter-specific code.
 *
 * Returns null if article not found, locale mismatched, or adapter has no
 * credentials configured (Sprint 5 stub state).
 */
export async function getArticle(slug: string, locale: ContentLocale): Promise<Article | null> {
  const source = contentConfig.articles;
  switch (source) {
    case 'ghl':
      return ghlAdapter.getArticle(slug, locale);
    case 'mdx':
      return mdxAdapter.getArticle(slug, locale);
    case 'sanity':
      // Future adapter — not implemented Sprint 5
      return null;
    default: {
      const _exhaustive: never = source;
      void _exhaustive;
      return null;
    }
  }
}
