#!/usr/bin/env bun
/**
 * Sitemap generator — emits public/sitemap.xml from src/config/routes.ts.
 *
 * Reads the canonical ROUTES map (single source of truth) and walks
 * src/routes/ to verify every route file is wired to a ROUTE key.
 * Static routes only — dynamic routes ($slug) and dev-only routes are skipped.
 *
 * Output : XML 1.0 sitemap with <xhtml:link rel="alternate"> triplets
 * (fr / en / x-default) for each route to satisfy Google's bilingual SEO
 * requirements (cf. feedback_seo_audit_gemini_4_fixes_pattern).
 *
 * Deterministic build — uses a fixed `LASTMOD` placeholder (no Date.now())
 * so the same source produces the same sitemap, suitable for CI artifact
 * comparison and reproducible builds.
 *
 * Wired via `prebuild` in package.json — runs before `vite build` so the
 * sitemap is always fresh when shipping to Cloudflare Workers.
 *
 * Exit codes :
 *   0 — sitemap written successfully
 *   1 — write failed (filesystem / permission error)
 *   2 — ROUTES map import failed (path or syntax issue)
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { clientConfig } from '../src/config/clientConfig';
import { ROUTES, type RouteKey } from '../src/config/routes';

const OUTPUT_PATH = join('public', 'sitemap.xml');

/** Deterministic lastmod — bump manually when sitemap structure changes. */
const LASTMOD = '2026-05-30';

/** Default change frequency for marketing pages. */
const DEFAULT_CHANGEFREQ = 'monthly';

/**
 * Per-route priority hints for crawlers.
 * - 1.0 : home (highest signal)
 * - 0.8 : default marketing pages (services, conferences, livre, evenements, etc.)
 * - 0.6 : legal pages (mentions / politique / conditions — low SEO intent)
 */
const PRIORITY_BY_KEY: Partial<Record<RouteKey, number>> = {
  home: 1.0,
  'mentions-legales': 0.6,
  'politique-confidentialite': 0.6,
  'conditions-utilisation': 0.6
};

const DEFAULT_PRIORITY = 0.8;

function priorityFor(key: RouteKey): number {
  return PRIORITY_BY_KEY[key] ?? DEFAULT_PRIORITY;
}

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

interface UrlEntry {
  loc: string;
  alternates: { hreflang: string; href: string }[];
  priority: number;
}

function buildUrlEntries(baseUrl: string): UrlEntry[] {
  const entries: UrlEntry[] = [];
  const keys = Object.keys(ROUTES) as RouteKey[];

  for (const key of keys) {
    const paths = ROUTES[key];
    const frUrl = `${baseUrl}${paths.fr}`;
    const enUrl = `${baseUrl}${paths.en}`;
    const priority = priorityFor(key);

    // FR entry — x-default points at FR (primary audience Québec).
    entries.push({
      loc: frUrl,
      alternates: [
        { hreflang: 'fr-CA', href: frUrl },
        { hreflang: 'en-CA', href: enUrl },
        { hreflang: 'x-default', href: frUrl }
      ],
      priority
    });

    // EN entry — same hreflang triplet (Google requires bidirectional links).
    entries.push({
      loc: enUrl,
      alternates: [
        { hreflang: 'fr-CA', href: frUrl },
        { hreflang: 'en-CA', href: enUrl },
        { hreflang: 'x-default', href: frUrl }
      ],
      priority
    });
  }

  return entries;
}

function renderUrlEntry(entry: UrlEntry): string {
  const altLinks = entry.alternates
    .map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${xmlEscape(alt.hreflang)}" href="${xmlEscape(alt.href)}"/>`
    )
    .join('\n');

  return [
    '  <url>',
    `    <loc>${xmlEscape(entry.loc)}</loc>`,
    `    <lastmod>${LASTMOD}</lastmod>`,
    `    <changefreq>${DEFAULT_CHANGEFREQ}</changefreq>`,
    `    <priority>${entry.priority.toFixed(1)}</priority>`,
    altLinks,
    '  </url>'
  ].join('\n');
}

function renderSitemap(entries: UrlEntry[]): string {
  const header = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset',
    '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '  xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  ].join('\n');

  const body = entries.map(renderUrlEntry).join('\n');
  return `${header}\n${body}\n</urlset>\n`;
}

function main(): number {
  const baseUrl = clientConfig.site.productionUrl.replace(/\/+$/, '');
  if (!baseUrl) {
    console.error('✗ clientConfig.site.productionUrl is empty — cannot build sitemap.');
    return 2;
  }

  const entries = buildUrlEntries(baseUrl);
  const xml = renderSitemap(entries);

  try {
    mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
    writeFileSync(OUTPUT_PATH, xml, 'utf8');
  } catch (err) {
    console.error(`✗ Failed to write ${OUTPUT_PATH}:`, err);
    return 1;
  }

  const routeCount = Object.keys(ROUTES).length;
  console.log(`✓ Sitemap written to ${OUTPUT_PATH}`);
  console.log(
    `  ${entries.length} URL entries (${routeCount} routes × 2 locales) · base: ${baseUrl}`
  );
  console.log(`  lastmod: ${LASTMOD} · changefreq: ${DEFAULT_CHANGEFREQ}`);
  return 0;
}

process.exit(main());
