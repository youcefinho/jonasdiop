import { clientConfig } from '@/config/clientConfig';
import type {
  Article,
  ArticleListItem,
  ListArticlesOptions,
  ListArticlesResult
} from '@/lib/content/types';

/**
 * GHL Blog API adapter — stub Sprint 5, real wire Sprint 6.
 *
 * Once H8 confirmed (GHL locationId + private integration token), this adapter
 * will fetch from:
 *   - GET /blogs/posts/list?locationId=<id>&limit=<n>&offset=<n>
 *   - GET /blogs/posts/<id>?locationId=<id>
 *
 * with auth header: `Authorization: Bearer <token>` + `Version: 2021-07-28`.
 *
 * Response shape will be normalized to canonical `Article` / `ArticleListItem`.
 * Cache via Cloudflare KV stale-while-revalidate (see `cache.ts`). Webhook
 * `/api/webhooks/ghl-blog` invalidates KV on publish/edit/delete.
 *
 * Until then : returns empty results so RessourcesPage renders its empty
 * state without throwing.
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';

function hasCredentials(): boolean {
  return clientConfig.ghl.locationId.length > 0;
}

export async function getArticle(slug: string, _locale: 'fr' | 'en'): Promise<Article | null> {
  if (!hasCredentials()) {
    return null;
  }
  // TODO Sprint 6: GET ${GHL_API_BASE}/blogs/posts/list filtered by slug, then GET full post
  void GHL_API_BASE;
  void slug;
  return null;
}

export async function listArticles(opts: ListArticlesOptions): Promise<ListArticlesResult> {
  if (!hasCredentials()) {
    return { items: [], total: 0, hasMore: false };
  }
  // TODO Sprint 6: GET ${GHL_API_BASE}/blogs/posts/list + normalize to canonical
  void opts;
  const items: ReadonlyArray<ArticleListItem> = [];
  return { items, total: 0, hasMore: false };
}
