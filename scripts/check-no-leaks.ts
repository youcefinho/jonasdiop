#!/usr/bin/env bun
/**
 * Build-time guard against client-visible placeholder leaks.
 *
 * Scans every JS chunk under `dist/assets/` for string literals that
 * still contain unvalidated copy markers (e.g. `[À VALIDER JONAS — ...]`)
 * or internal dev comments (`[GHL Blog API ...]`, `[Formulaire wire ...]`).
 *
 * Detection targets STRING LITERALS only — the regex patterns inside
 * `src/lib/content/isUnvalidatedContent.ts` are intentionally ignored
 * because they are the detection patterns themselves, not leaked copy.
 *
 * Exit codes :
 *   0 — no leaks
 *   1 — leak(s) found (CI fails)
 *   2 — dist/assets missing (build wasn't run)
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST_ASSETS = 'dist/assets';

/**
 * Each pattern matches the placeholder INSIDE a JS string literal
 * (preceded by a quote character) so legitimate regex literals like
 * `/\[À VALIDER\b/` in `isUnvalidatedContent.ts` are ignored.
 */
const LEAK_PATTERNS: { name: string; regex: RegExp }[] = [
  { name: 'À VALIDER JONAS placeholder', regex: /['"`]\[À VALIDER\b[\s\S]*?\]/g },
  { name: 'TO VALIDATE WITH JONAS placeholder', regex: /['"`]\[TO VALIDATE\b[\s\S]*?\]/g },
  { name: 'Formulaire wire dev comment', regex: /['"`]\[Formulaire wire\b[\s\S]*?\]/g },
  { name: 'Form wire dev comment', regex: /['"`]\[Form wire\b[\s\S]*?\]/g },
  { name: 'Grid articles dev comment', regex: /['"`]\[Grid articles\b[\s\S]*?\]/g },
  { name: 'Section case study dev comment', regex: /['"`]\[Section case study\b[\s\S]*?\]/g },
  { name: 'GHL Blog API dev comment', regex: /['"`][^'"`]*GHL Blog API[^'"`]*['"`]/g },
  {
    name: 'ArticleRenderer DA reference',
    regex: /['"`][^'"`]*ArticleRenderer avec D[0-9][^'"`]*['"`]/g
  }
];

let distFiles: string[] = [];
try {
  distFiles = readdirSync(DIST_ASSETS).filter((name) => name.endsWith('.js'));
} catch {
  console.error(`✗ ${DIST_ASSETS} not found — run \`bun run build\` first.`);
  process.exit(2);
}

let leakCount = 0;
const leakReport: { file: string; pattern: string; sample: string }[] = [];

for (const fileName of distFiles) {
  const filePath = join(DIST_ASSETS, fileName);
  const content = readFileSync(filePath, 'utf8');

  for (const { name, regex } of LEAK_PATTERNS) {
    const matches = content.match(regex);
    if (matches && matches.length > 0) {
      for (const match of matches) {
        // Skip identifiers that look like regex source preserved by minifier
        if (match.includes('\\[')) continue;
        leakCount++;
        leakReport.push({
          file: fileName,
          pattern: name,
          sample: match.length > 120 ? `${match.slice(0, 117)}...` : match
        });
      }
    }
  }
}

if (leakCount === 0) {
  console.log(`✓ dist/assets clean — no placeholder leaks across ${distFiles.length} JS chunks.`);
  process.exit(0);
}

console.error(`✗ ${leakCount} placeholder leak(s) found in dist/assets:\n`);
for (const { file, pattern, sample } of leakReport.slice(0, 30)) {
  console.error(`  · ${file}\n      [${pattern}] ${sample}`);
}
if (leakReport.length > 30) {
  console.error(`  ... and ${leakReport.length - 30} more`);
}
console.error(
  '\nClean the source copy or guard the section with `isUnvalidatedContent()` / `pending: true`.'
);
process.exit(1);
