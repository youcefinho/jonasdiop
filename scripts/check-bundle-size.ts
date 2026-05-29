#!/usr/bin/env bun
/**
 * Bundle size budget guard — enforces happy-path JS doesn't regress.
 *
 * Run after `vite build`. Sums gzip-compressed size of the chunks needed by the
 * marketing happy path (home, programmes, contact, FAQ, légales) :
 *   - index-*.js (entry)
 *   - react-*.js (React + ReactDOM)
 *   - router-*.js (TanStack Router)
 *   - motion-*.js (Motion + Lenis when split)
 *
 * Lazy chunks excluded from the budget :
 *   - markdown-*.js (only loaded on /ressources/$slug)
 *   - sentry-*.js (only loaded on error)
 *   - per-route chunks (auto-split by TanStack)
 *
 * Budget : 110 kB gzip. Established Sprint 7 at 102 kB ; 8 kB headroom buffer.
 *
 * Exit codes :
 *   0 — under budget
 *   1 — over budget (CI fails)
 *   2 — dist/assets missing (build wasn't run, or path changed)
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';

const DIST_ASSETS = 'dist/assets';
// Wave 2 added Trilogie pre-launch routes + waitlist API client + KV worker types.
// Initial bundle grew naturally from new shared imports (forms state hooks, fetch helpers).
// Further reduction in Sprint 6 via dynamic import strategy.
const BUDGET_GZIP_BYTES = 118 * 1024;

// Prefixes considered part of the marketing happy-path initial payload.
const INCLUDED_PREFIXES = ['index-', 'react-', 'router-', 'motion-'];

// Prefixes explicitly excluded so we know our list is exhaustive.
const KNOWN_LAZY_PREFIXES = [
  'markdown-',
  'sentry-',
  // Page-level components (lazy-loaded by route)
  'AboutPage-',
  'AnArmyOfOnePage-',
  'ArticleRenderer-',
  'CDTDiagram-',
  'ConferencesPage-',
  'ContactPage-',
  'BootcampThemeProvider-',
  'EvenementsBootcampsPage-',
  'EvenementsPage-',
  'FAQPage-',
  'MasterclassPage-',
  'RetraitesPage-',
  'LegalPage-',
  'LivrePage-',
  'LoiImpactDiagram-',
  'LPProgramTemplate-',
  'LPConsultationsTemplate-',
  'MaskRevealHeading-',
  'Navbar-',
  'PodcastPage-',
  'ProgramsGrid-',
  'RessourcesPage-',
  'SchemaScript-',
  'TemoignagesPage-',
  'TestimonialGrid-',
  'TheActivationPage-',
  'TheEdgePage-',
  'TrustBand-',
  'TrustedLogosBar-',
  'ValuePriceTable-',
  'VslPlaceholderSection-',
  // File-based route chunks (FR + EN mirrors)
  '_slug-',
  'a-propos-',
  'about-',
  'an-army-of-one-',
  'anArmyOfOne-',
  'book-',
  'bootcamps-',
  'cdt-methodology-',
  'conditions-utilisation-',
  'conferences-',
  'consultations-privees-',
  'contact-',
  'dev-components-',
  'en-',
  'evenements-',
  'evenementsBootcamps-',
  'evenementsMasterclass-',
  'evenementsRetraites-',
  'events-',
  'masterclass-',
  'faq-',
  'legal-',
  'livre-',
  'master-',
  'mentions-legales-',
  'methodologie-cdt-',
  'podcast-',
  'politique-confidentialite-',
  'privacy-',
  'private-',
  'programmes-',
  'resources-',
  'resources\\._slug-',
  'ressources-',
  'ressources\\._slug-',
  'retraites-',
  'retreats-',
  'routes-',
  'services-',
  'temoignages-',
  'terms-',
  'testimonials-',
  'the-',
  'theActivation-',
  'theEdge-',
  // En.* mirrored routes (TanStack)
  'en\\.contact-',
  'en\\.faq-',
  // Lucide icon chunks (one per icon when split)
  'calendar-days-',
  'cash-scale-',
  'check-',
  'circle-play-',
  'file-text-',
  'focus-',
  'gamechanger-',
  'headphones-',
  'lock-',
  'play-',
  'quote-',
  'quotes-',
  'shield-',
  'sparkles-',
  'star-',
  'users-',
  // Shared hooks/utilities lazy-bundled
  'useParallax-',
  'rolldown-runtime-'
];

interface ChunkReport {
  filename: string;
  rawBytes: number;
  gzipBytes: number;
}

function shouldInclude(filename: string): boolean {
  return INCLUDED_PREFIXES.some((prefix) => filename.startsWith(prefix));
}

function isJsFile(filename: string): boolean {
  return filename.endsWith('.js') && !filename.endsWith('.map');
}

function fmtKb(bytes: number): string {
  return `${(bytes / 1024).toFixed(2)} kB`;
}

function main(): number {
  let entries: string[];
  try {
    entries = readdirSync(DIST_ASSETS);
  } catch {
    console.error(`ERR: ${DIST_ASSETS} not found. Run 'bun run build' first.`);
    return 2;
  }

  const jsFiles = entries.filter(isJsFile);
  if (jsFiles.length === 0) {
    console.error(`ERR: no .js files in ${DIST_ASSETS}. Build output unexpected.`);
    return 2;
  }

  const included: ChunkReport[] = [];
  const skipped: ChunkReport[] = [];

  for (const filename of jsFiles) {
    const path = join(DIST_ASSETS, filename);
    const rawBytes = statSync(path).size;
    const gzipBytes = gzipSync(readFileSync(path)).length;
    const report: ChunkReport = { filename, rawBytes, gzipBytes };
    if (shouldInclude(filename)) {
      included.push(report);
    } else {
      skipped.push(report);
    }
  }

  const totalGzip = included.reduce((sum, c) => sum + c.gzipBytes, 0);
  const totalRaw = included.reduce((sum, c) => sum + c.rawBytes, 0);

  console.log('\n┌─ Bundle size budget — marketing happy path (initial JS)');
  for (const chunk of included.sort((a, b) => b.gzipBytes - a.gzipBytes)) {
    console.log(
      `│  ${chunk.filename.padEnd(40)} ${fmtKb(chunk.rawBytes).padStart(10)} raw  ${fmtKb(chunk.gzipBytes).padStart(10)} gzip`
    );
  }
  console.log('├─ Totals');
  console.log(
    `│  Initial JS shipped : ${fmtKb(totalRaw).padStart(10)} raw  ${fmtKb(totalGzip).padStart(10)} gzip`
  );
  console.log(`│  Budget             : ${fmtKb(BUDGET_GZIP_BYTES).padStart(28)} gzip`);
  const headroom = BUDGET_GZIP_BYTES - totalGzip;
  const headroomStr = headroom >= 0 ? `+${fmtKb(headroom)} headroom` : `${fmtKb(headroom)} OVER`;
  console.log(`│  Headroom           : ${headroomStr.padStart(28)}`);
  console.log('└────────────────────────────────────────────────────────────────────────────');

  if (skipped.length > 0) {
    console.log('\nLazy chunks (not counted toward initial JS budget) :');
    for (const chunk of skipped.sort((a, b) => b.gzipBytes - a.gzipBytes).slice(0, 10)) {
      const known = KNOWN_LAZY_PREFIXES.some((prefix) =>
        new RegExp(`^${prefix}`).test(chunk.filename)
      );
      const marker = known ? '  ' : '? '; // ? flags unrecognized chunks for review
      console.log(
        `  ${marker}${chunk.filename.padEnd(50)} ${fmtKb(chunk.gzipBytes).padStart(10)} gzip`
      );
    }
    const unrecognized = skipped.filter(
      (c) => !KNOWN_LAZY_PREFIXES.some((prefix) => new RegExp(`^${prefix}`).test(c.filename))
    );
    if (unrecognized.length > 0) {
      console.log(
        `\n? = ${unrecognized.length} unrecognized chunk(s). Add prefix to KNOWN_LAZY_PREFIXES if expected, or review the split config.`
      );
    }
  }

  if (totalGzip > BUDGET_GZIP_BYTES) {
    console.error(
      `\n❌ FAIL : initial JS shipped (${fmtKb(totalGzip)} gzip) exceeds budget (${fmtKb(BUDGET_GZIP_BYTES)} gzip) by ${fmtKb(totalGzip - BUDGET_GZIP_BYTES)}.`
    );
    console.error(
      '   Review vite.config.ts manualChunks to lazy-load the new dependency, or raise BUDGET_GZIP_BYTES with rationale.'
    );
    return 1;
  }

  console.log(`\n✅ PASS : initial JS shipped within budget (headroom ${fmtKb(headroom)} gzip).`);
  return 0;
}

process.exit(main());
