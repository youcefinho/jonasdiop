#!/usr/bin/env bun
/**
 * audit-i18n.ts — Flags untranslated EN entries in src/data/copy/**\/*.ts.
 *
 * Detects:
 *   1. DUPLICATE_FR_AS_EN  — fr == en (case+trim normalized) on long strings (>30 chars)
 *      that are NOT brand whitelist (trademarks, proper nouns, code names, currencies).
 *   2. EMPTY_EN            — en === '' but fr !== ''.
 *
 * Exit code 0 always (informational). Use as pre-commit signal.
 *
 * Run: bun run scripts/audit-i18n.ts
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const COPY_ROOT = resolve(import.meta.dir, '..', 'src', 'data', 'copy');
const PROJECT_ROOT = resolve(import.meta.dir, '..');
const MIN_LEN = 30; // ignore short labels (CTAs, ASCII numbers, headers)

// Brand whitelist — verbatim FR=EN tolerated.
// Matches: any TM/® term, the bootcamp brand names, the umbrella methods, Jonas, places,
// frameworks/registries (OPIC, CIPO, MBTI, DISC, SWOT, Ikigaï, Pomodoro, Notion, Upbase, Stripe, GHL),
// pure money/numeric strings, and proper nouns that ship identically in both locales.
const BRAND_PATTERNS: readonly RegExp[] = [
  /™|®/,
  /\bAn Army of One\b/i,
  /\bThe Edge\b/i,
  /\bThe Activation\b/i,
  /\bGame Changer Protocol\b/i,
  /\bRISE\b/,
  /\bCDT\b/,
  /\bIOS\b/,
  /\bESD\b/,
  /\bECO\b/,
  /\bDIOP Strat[ée]gies Internationales\b/i,
  /\bGamechanger Scaling\b/i,
  /\bJonas Diop\b/i,
  /\bMontr[ée]al\b/i,
  /\bOPIC\b/,
  /\bCIPO\b/,
  /\bFIRE\b/,
  /\bMBTI\b/,
  /\bDISC\b/,
  /\bSWOT\b/,
  /\bIkigaï?\b/i,
  /\bPomodoro\b/,
  /\bNotion\b/,
  /\bUpbase\b/i,
  /\bStripe\b/,
  /\bGHL\b/,
  /\bPARA\b/,
  /\bNorth Star\b/i,
  /\bIdentity Shift\b/i,
  /\bLife OS\b/i,
  /\bPersonal Operating System\b/i,
  /\bAuthority (Perception Audit|Stack|Asset Stack|Ecosystem|Asset|Narrative)\b/i,
  /\bProximity Monetization Model\b/i,
  /\bDominant Positioning Statement\b/i,
  /\bPrestige Positioning Framework\b/i,
  /\bFounder Authority Story\b/i,
  /\bOmnipresence (Blueprint|Engineering)\b/i,
  /\bThought Leadership (Matrix)?\b/i,
  /\bReputation (Domination Plan|Engineering)\b/i,
  /\bSignature Concepts\b/i,
  /\bThe Edge Expansion Plan\b/i,
  /\bEpic Speech\b/i,
  /\bSharp State\b/i,
  /\bMonk Mode\b/i,
  /\bMiracle Morning\b/i,
  /\bMarathon Morning\b/i,
  /\bFocus Mate\b/i,
  /\b12 Week Year\b/i,
  /\bOKR\b/,
  /\bSMARTER\b/,
  /\bSOS\b/,
  /\bSIS\b/,
  /\bGPS\b/,
  /\bChatGPT\b/i,
  /\bLinkedIn\b/i,
  /\bYouTube\b/i,
  /\bZoom\b/i,
  /\bSlack\b/i,
  /\bDan Martell\b/i,
  /\bAlex Hormozi\b/i,
  /\bNaval\b/i,
  /\bThorstein Veblen\b/i,
  /\bVeblen\b/i,
  /\bThe Game Changer\b/i,
  // Proprietary English framework / module codenames Jonas uses verbatim in FR copy.
  // These ARE the brand — translating them would erase the signature.
  /\bIdentity & Domination Framework\b/i,
  /\bEnergy,? & Cognitive Optimization\b/i,
  /\bEnergy, Recovery & Scaling Capacity\b/i,
  /\bIdentity Shifting & Hero'?s Loop\b/i,
  /\bExecution System vs Productivity System\b/i,
  /\bAuthority Content & Thought Leadership\b/i,
  /\bPremium Offers & Proximity Value\b/i,
  /\bInfluence, Communication & Presence\b/i,
  /\bVeblen Effect & Prestige Positioning\b/i,
  /\bStorytelling & Authority Narrative\b/i,
  /\bIdentity & Power Positioning\b/i,
  // Pure money/number/code lines
  /^[\s\d\W $€£.,/+\-()xX™®]+$/,
  // Plain email/url placeholders
  /^[a-z0-9.+-]+@[a-z0-9.-]+\.[a-z]+$/i,
  /^https?:\/\//i,
  /^[+\d\s\-()]+$/ // phone numbers
];

type Flag = {
  file: string;
  line: number;
  fr: string;
  en: string;
  kind: 'DUPLICATE_FR_AS_EN' | 'EMPTY_EN';
};

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else if (s.isFile() && full.endsWith('.ts')) out.push(full);
  }
  return out;
}

function isBrand(s: string): boolean {
  return BRAND_PATTERNS.some((re) => re.test(s));
}

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Parses { fr: 'X', en: 'Y' } pairs across multi-line declarations.
 * Tolerant of: single quotes, double quotes, escaped apostrophes (\'), trailing comma,
 * `satisfies BilingualLax<...>` suffixes, and arbitrary whitespace between fr/en.
 *
 * We rely on a single regex with the `s` flag to span the lines between `fr:` and `en:`.
 * For each match we resolve the line number of the `fr:` token in the source.
 */
const PAIR_RE = /\bfr\s*:\s*(['"])((?:\\.|(?!\1).)*)\1\s*,\s*en\s*:\s*(['"])((?:\\.|(?!\3).)*)\3/gs;

function unescapeLiteral(raw: string, quote: string): string {
  // Restore characters JS string literal would resolve at runtime.
  return raw
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\\\/g, '\\')
    .replace(new RegExp(`\\\\${quote}`, 'g'), quote);
}

function lineOfOffset(src: string, offset: number): number {
  let line = 1;
  for (let i = 0; i < offset && i < src.length; i++) if (src.charCodeAt(i) === 10) line++;
  return line;
}

function auditFile(path: string): Flag[] {
  const src = readFileSync(path, 'utf8');
  const rel = relative(PROJECT_ROOT, path).replace(/\\/g, '/');
  const flags: Flag[] = [];

  PAIR_RE.lastIndex = 0;
  for (let m = PAIR_RE.exec(src); m !== null; m = PAIR_RE.exec(src)) {
    const fr = unescapeLiteral(m[2] ?? '', m[1] ?? "'");
    const en = unescapeLiteral(m[4] ?? '', m[3] ?? "'");
    const lineNo = lineOfOffset(src, m.index);

    if (fr.length === 0) continue;

    if (en.length === 0) {
      flags.push({ file: rel, line: lineNo, fr, en, kind: 'EMPTY_EN' });
      continue;
    }

    if (normalize(fr) === normalize(en) && fr.length > MIN_LEN && !isBrand(fr)) {
      flags.push({ file: rel, line: lineNo, fr, en, kind: 'DUPLICATE_FR_AS_EN' });
    }
  }

  return flags;
}

function main(): void {
  const files = walk(COPY_ROOT);
  const allFlags: Flag[] = [];
  for (const f of files) allFlags.push(...auditFile(f));

  const dupes = allFlags.filter((f) => f.kind === 'DUPLICATE_FR_AS_EN');
  const empties = allFlags.filter((f) => f.kind === 'EMPTY_EN');

  console.log('═══════════════════════════════════════════════════════════════════');
  console.log(' i18n audit — src/data/copy/**/*.ts');
  console.log('═══════════════════════════════════════════════════════════════════');
  console.log(`Files scanned : ${files.length}`);
  console.log(`Duplicate FR-as-EN (>${MIN_LEN} chars, non-brand) : ${dupes.length}`);
  console.log(`Empty EN (with non-empty FR) : ${empties.length}`);
  console.log('───────────────────────────────────────────────────────────────────');

  if (dupes.length > 0) {
    console.log('\n[DUPLICATE_FR_AS_EN]');
    for (const f of dupes) {
      console.log(`\n  ${f.file}:${f.line}`);
      console.log(`    fr: ${truncate(f.fr)}`);
      console.log(`    en: ${truncate(f.en)}`);
    }
  }

  if (empties.length > 0) {
    console.log('\n[EMPTY_EN]');
    for (const f of empties) {
      console.log(`\n  ${f.file}:${f.line}`);
      console.log(`    fr: ${truncate(f.fr)}`);
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════════');
  console.log(` Result: ${dupes.length} duplicate(s), ${empties.length} empty EN`);
  console.log('═══════════════════════════════════════════════════════════════════');
}

function truncate(s: string, n = 140): string {
  const oneLine = s.replace(/\s+/g, ' ').trim();
  return oneLine.length <= n ? oneLine : `${oneLine.slice(0, n)}…`;
}

main();
