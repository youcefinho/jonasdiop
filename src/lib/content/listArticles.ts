import { contentConfig } from '@/config/contentConfig';
import * as ghlAdapter from '@/lib/content/adapters/ghl-adapter';
import * as mdxAdapter from '@/lib/content/adapters/mdx-adapter';
import type { ListArticlesOptions, ListArticlesResult } from '@/lib/content/types';

/**
 * Listing fetcher — adapter-agnostic. Drives ressources hub + future
 * categories filter pages.
 */
export async function listArticles(opts: ListArticlesOptions): Promise<ListArticlesResult> {
  const source = contentConfig.articles;
  switch (source) {
    case 'ghl':
      return ghlAdapter.listArticles(opts);
    case 'mdx':
      return mdxAdapter.listArticles(opts);
    case 'sanity':
      return { items: [], total: 0, hasMore: false };
    default: {
      const _exhaustive: never = source;
      void _exhaustive;
      return { items: [], total: 0, hasMore: false };
    }
  }
}
