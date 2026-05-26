import type {
  Article,
  ArticleListItem,
  ListArticlesOptions,
  ListArticlesResult
} from '@/lib/content/types';

/**
 * MDX adapter — stub Sprint 5, fallback adapter pattern.
 *
 * Future: reads MDX files from `src/content/articles/<locale>/<slug>.mdx`
 * with frontmatter parsed via gray-matter + body via vite-plugin-mdx import.
 *
 * Returns empty results until at least one MDX article is added.
 */

export async function getArticle(slug: string, _locale: 'fr' | 'en'): Promise<Article | null> {
  // TODO: read /src/content/articles/<_locale>/<slug>.mdx + parse frontmatter
  void slug;
  return null;
}

export async function listArticles(opts: ListArticlesOptions): Promise<ListArticlesResult> {
  // TODO: glob /src/content/articles/<opts.locale>/*.mdx + parse frontmatter, sort by date desc
  void opts;
  const items: ReadonlyArray<ArticleListItem> = [];
  return { items, total: 0, hasMore: false };
}
