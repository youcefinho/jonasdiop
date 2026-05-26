/**
 * Cloudflare KV cache helpers — stale-while-revalidate pattern.
 *
 * Sprint 5 : stub interface (in-memory fallback for SSR build + dev).
 * Sprint 6 : real KV binding via wrangler.jsonc `kv_namespaces.ARTICLE_CACHE`.
 *
 * Stale-while-revalidate :
 *   1. cache hit → return cached value immediately
 *   2. if cached value past `staleAfterSec`, schedule revalidation in background
 *      (waitUntil) — next request reads fresh value
 *   3. cache miss → fetch fresh, cache, return
 *
 * Webhook `/api/webhooks/ghl-blog` POSTs invalidation on publish/edit/delete.
 */

export interface CacheEntry<T> {
  readonly value: T;
  readonly cachedAt: number;
  readonly staleAfterSec: number;
}

const inMemoryCache = new Map<string, CacheEntry<unknown>>();

export interface CacheGetOptions {
  /** Seconds after which the entry is considered stale (still returned, but triggers revalidate). */
  readonly staleAfterSec?: number;
}

export async function cacheGet<T>(key: string): Promise<CacheEntry<T> | null> {
  // TODO Sprint 6: try CF KV binding first (env.ARTICLE_CACHE.get), fallback in-memory.
  const entry = inMemoryCache.get(key) as CacheEntry<T> | undefined;
  return entry ?? null;
}

export async function cacheSet<T>(
  key: string,
  value: T,
  options: CacheGetOptions = {}
): Promise<void> {
  const entry: CacheEntry<T> = {
    value,
    cachedAt: Date.now(),
    staleAfterSec: options.staleAfterSec ?? 300
  };
  inMemoryCache.set(key, entry);
  // TODO Sprint 6: also write to CF KV binding
}

export async function cacheInvalidate(key: string): Promise<void> {
  inMemoryCache.delete(key);
  // TODO Sprint 6: also delete from CF KV binding
}

export function isStale(entry: CacheEntry<unknown>): boolean {
  const ageSec = (Date.now() - entry.cachedAt) / 1000;
  return ageSec > entry.staleAfterSec;
}

/** Test-only escape hatch — clears in-memory cache. */
export function _resetCache(): void {
  inMemoryCache.clear();
}
