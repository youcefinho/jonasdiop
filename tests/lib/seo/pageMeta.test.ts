import { beforeEach, describe, expect, it } from 'vitest';
import { applyPageMeta, lookupRouteKey, resolvePageMeta } from '@/lib/seo/pageMeta';

beforeEach(() => {
  // Reset document.head between tests — happy-dom shares document across tests
  document.head.innerHTML = '';
  document.title = '';
  document.documentElement.lang = '';
});

describe('lookupRouteKey', () => {
  it('resolves FR home', () => {
    expect(lookupRouteKey('/')).toEqual({ key: 'home', locale: 'fr' });
  });

  it('resolves EN home', () => {
    expect(lookupRouteKey('/en')).toEqual({ key: 'home', locale: 'en' });
  });

  it('resolves FR about', () => {
    expect(lookupRouteKey('/a-propos')).toEqual({ key: 'about', locale: 'fr' });
  });

  it('resolves EN about', () => {
    expect(lookupRouteKey('/en/about')).toEqual({ key: 'about', locale: 'en' });
  });

  it('resolves FR services LP', () => {
    expect(lookupRouteKey('/services/gamechanger-scaling')).toEqual({
      key: 'services-gamechanger-scaling',
      locale: 'fr'
    });
  });

  it('resolves EN services LP', () => {
    expect(lookupRouteKey('/en/services/private-consultations')).toEqual({
      key: 'services-consultations-privees',
      locale: 'en'
    });
  });

  it('returns null for unknown path', () => {
    expect(lookupRouteKey('/non-existent-page')).toBeNull();
  });

  it('returns null for article detail with $slug', () => {
    // /ressources/$slug placeholder doesn't match any registry route
    expect(lookupRouteKey('/ressources/my-article')).toBeNull();
  });

  it('strips trailing slash', () => {
    expect(lookupRouteKey('/contact/')).toEqual({ key: 'contact', locale: 'fr' });
  });
});

describe('resolvePageMeta (async with dynamic imports)', () => {
  it('returns FR title/description for /a-propos', async () => {
    const meta = await resolvePageMeta('/a-propos');
    expect(meta.locale).toBe('fr');
    expect(meta.title).toContain('Jonas');
    expect(meta.description.length).toBeGreaterThan(50);
  });

  it('returns EN title/description for /en/about', async () => {
    const meta = await resolvePageMeta('/en/about');
    expect(meta.locale).toBe('en');
    expect(meta.title).toContain('Jonas');
  });

  it('returns canonical absolute URL', async () => {
    const meta = await resolvePageMeta('/contact');
    expect(meta.canonical).toMatch(/^https?:\/\//);
    expect(meta.canonical).toContain('/contact');
  });

  it('returns hreflang alternates pointing to both locales', async () => {
    const meta = await resolvePageMeta('/contact');
    expect(meta.alternates.fr).toContain('/contact');
    expect(meta.alternates.en).toContain('/en/contact');
  });

  it('returns DEFAULT_META for home (no per-route override)', async () => {
    const meta = await resolvePageMeta('/');
    expect(meta.title.length).toBeGreaterThan(20);
    expect(meta.description.length).toBeGreaterThan(50);
  });

  it('returns DEFAULT_META for unknown routes', async () => {
    const meta = await resolvePageMeta('/totally-unknown');
    expect(meta.title).toContain('Jonas Diop');
  });
});

describe('applyPageMeta', () => {
  it('sets document.title', async () => {
    const meta = await resolvePageMeta('/contact');
    applyPageMeta(meta);
    expect(document.title).toBe(meta.title);
  });

  it('sets <html lang> for FR routes', async () => {
    applyPageMeta(await resolvePageMeta('/contact'));
    expect(document.documentElement.lang).toBe('fr-CA');
  });

  it('sets <html lang> for EN routes', async () => {
    applyPageMeta(await resolvePageMeta('/en/contact'));
    expect(document.documentElement.lang).toBe('en');
  });

  it('creates meta[name=description]', async () => {
    applyPageMeta(await resolvePageMeta('/contact'));
    const desc = document.head.querySelector('meta[name="description"]');
    expect(desc).not.toBeNull();
    expect(desc?.getAttribute('content')?.length).toBeGreaterThan(20);
  });

  it('creates OpenGraph tags', async () => {
    applyPageMeta(await resolvePageMeta('/services'));
    expect(document.head.querySelector('meta[property="og:title"]')).not.toBeNull();
    expect(document.head.querySelector('meta[property="og:description"]')).not.toBeNull();
    expect(document.head.querySelector('meta[property="og:url"]')).not.toBeNull();
    expect(document.head.querySelector('meta[property="og:type"]')).not.toBeNull();
    expect(document.head.querySelector('meta[property="og:locale"]')).not.toBeNull();
    expect(document.head.querySelector('meta[property="og:site_name"]')).not.toBeNull();
  });

  it('og:locale = fr_CA for French routes', async () => {
    applyPageMeta(await resolvePageMeta('/contact'));
    const og = document.head.querySelector('meta[property="og:locale"]');
    expect(og?.getAttribute('content')).toBe('fr_CA');
  });

  it('og:locale = en_US for English routes', async () => {
    applyPageMeta(await resolvePageMeta('/en/contact'));
    const og = document.head.querySelector('meta[property="og:locale"]');
    expect(og?.getAttribute('content')).toBe('en_US');
  });

  it('creates Twitter card tags', async () => {
    applyPageMeta(await resolvePageMeta('/services'));
    expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe(
      'summary_large_image'
    );
  });

  it('creates canonical link', async () => {
    applyPageMeta(await resolvePageMeta('/contact'));
    const canonical = document.head.querySelector('link[rel="canonical"]:not([hreflang])');
    expect(canonical).not.toBeNull();
    expect(canonical?.getAttribute('href')).toContain('/contact');
  });

  it('creates 3 hreflang alternates (fr-CA + en + x-default)', async () => {
    applyPageMeta(await resolvePageMeta('/contact'));
    const alts = document.head.querySelectorAll('link[rel="alternate"][hreflang]');
    expect(alts.length).toBe(3);
    const hreflangs = Array.from(alts).map((el) => el.getAttribute('hreflang'));
    expect(hreflangs).toContain('fr-CA');
    expect(hreflangs).toContain('en');
    expect(hreflangs).toContain('x-default');
  });

  it('replaces hreflang alternates on second call (no leak)', async () => {
    applyPageMeta(await resolvePageMeta('/contact'));
    applyPageMeta(await resolvePageMeta('/en/contact'));
    const alts = document.head.querySelectorAll('link[rel="alternate"][hreflang]');
    expect(alts.length).toBe(3);
  });

  it('updates title on second call', async () => {
    applyPageMeta(await resolvePageMeta('/contact'));
    const firstTitle = document.title;
    applyPageMeta(await resolvePageMeta('/services'));
    expect(document.title).not.toBe(firstTitle);
  });
});
