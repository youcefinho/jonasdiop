import { describe, expect, it } from 'vitest';
import { getArticle } from '@/lib/content/getArticle';
import { listArticles } from '@/lib/content/listArticles';

describe('content adapters — Sprint 5 scaffolding stubs', () => {
  it('getArticle returns null when GHL credentials unset (Sprint 5 state)', async () => {
    const result = await getArticle('inaugural-post', 'fr');
    expect(result).toBeNull();
  });

  it('getArticle supports both locales', async () => {
    const fr = await getArticle('test-slug', 'fr');
    const en = await getArticle('test-slug', 'en');
    expect(fr).toBeNull();
    expect(en).toBeNull();
  });

  it('listArticles returns empty result with hasMore=false', async () => {
    const result = await listArticles({ locale: 'fr' });
    expect(result.items).toEqual([]);
    expect(result.total).toBe(0);
    expect(result.hasMore).toBe(false);
  });

  it('listArticles accepts limit/offset/categoryId options', async () => {
    const result = await listArticles({
      locale: 'en',
      limit: 3,
      offset: 0,
      categoryId: 'architecture'
    });
    expect(result.items).toEqual([]);
  });
});
