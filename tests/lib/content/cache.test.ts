import { afterEach, describe, expect, it } from 'vitest';
import { _resetCache, cacheGet, cacheInvalidate, cacheSet, isStale } from '@/lib/content/cache';

afterEach(() => {
  _resetCache();
});

describe('cache — in-memory stub', () => {
  it('cacheGet returns null when key not set', async () => {
    const result = await cacheGet<string>('nonexistent');
    expect(result).toBeNull();
  });

  it('cacheSet then cacheGet returns the cached value', async () => {
    await cacheSet('key-1', { title: 'Test' }, { staleAfterSec: 60 });
    const entry = await cacheGet<{ title: string }>('key-1');
    expect(entry?.value.title).toBe('Test');
  });

  it('cacheSet defaults staleAfterSec to 300', async () => {
    await cacheSet('key-2', 'val');
    const entry = await cacheGet<string>('key-2');
    expect(entry?.staleAfterSec).toBe(300);
  });

  it('cacheInvalidate removes the entry', async () => {
    await cacheSet('key-3', 'val');
    await cacheInvalidate('key-3');
    const result = await cacheGet('key-3');
    expect(result).toBeNull();
  });

  it('isStale returns false for fresh entries', async () => {
    await cacheSet('key-4', 'val', { staleAfterSec: 60 });
    const entry = await cacheGet('key-4');
    expect(entry).not.toBeNull();
    if (entry) expect(isStale(entry)).toBe(false);
  });

  it('isStale returns true when cachedAt is older than staleAfterSec', () => {
    const entry = {
      value: 'val',
      cachedAt: Date.now() - 10_000,
      staleAfterSec: 5
    };
    expect(isStale(entry)).toBe(true);
  });
});
