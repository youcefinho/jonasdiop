/**
 * fonts.ts — placeholder (kept for import-compat with main.tsx).
 *
 * Self-hosted WOFF2 via @font-face in src/styles/fonts.css since Perf Vague 2.
 * No JS imports needed — fonts load via CSS unicode-range + <link rel="preload">
 * in index.html for the latin (primary) variants.
 *
 * Reason for keeping the file : main.tsx imports './lib/fonts' which used to
 * trigger Fontsource side-effect imports. We keep the empty file to avoid
 * touching main.tsx and to leave a clear pointer to the new self-host pattern.
 */
export {};
