# RESUME — Next session pointer (post-compact 2026-05-28)

> **Lit ce fichier en premier après /compact pour reprendre exactement où on s'est arrêté.**

## ⚡ État au 2026-05-28 (Sprint 10 LIVE deployed)

### URL live active
**https://jonas-diop.intralysqc.workers.dev/**
- Cloudflare Worker `jonas-diop` sur compte Rochdi (`intralysqc`)
- KV namespace `ARTICLE_CACHE` : `57d2b354179442d2985ec8e9045fcdc9` (staging isolé)
- Worker startup 11-22ms

### Git
- Branch : `main` synced avec origin
- HEAD : `b1ac891` (text-shimmer fix Lightning CSS)
- 53 commits poussés cette session vs Sprint 9 baseline (`02c70a0` = sprint-10-visual-done tag)
- Working tree clean

### Lighthouse desktop
- **A11y 100 · Best Practices 100 · SEO 100 · Agentic Browsing 99**
- LCP **450ms** (top 1%) · CLS **0.05** · TTFB **58ms**
- 420/420 tests · bundle PASS **5.13 kB headroom**

## 🎯 Ce qui a été fait Sprint 10 (résumé)

### Sprints 10A-10G visuels (Direction A "plus d'effets")
30+ effets ajoutés intacts sur LIVE :
- 10A : CustomCursor desktop + CDT SVG paths + ReadingProgress + View Transitions
- 10B : CountUp Hero stats + Timeline SVG draw-in + hover-zoom + cursor arrow
- 10C : SectionDivider × 3 + hover-border-sweep + gold scrollbar + Hero scroll-fade
- 10D : Marquee polish + CTA halo pulse breathing + HeadingAccent × 3 + cursor label
- 10E : CTA ink fill + image grain portraits + link sweep + footer gold thread
- 10F : StickyFloatingCTA pulse + Eyebrow dot pulse + sibling dim `:has()` + ClickRipple
- 10G : input focus premium + TestimonialGrid sibling dim + footer link-sweep

### Groupe 1 polish (`109cf3a`)
- SkipToMain (WCAG 2.1 SC 2.4.1) + `#main-content` target wrappant Outlet
- NotFoundPage refonte premium (mesh + spotlight + light beam + shimmer 404)
- ContactPage form submit state machine (idle/loading/success/error, prêt H8 GHL)

### 🔴 3 bugs critiques résolus (et leurs leçons cross-projet)

**Bug #1 — Lightning CSS shorthand wipe** (commit `b1ac891`)
- Symptôme : H1 "Ajouter un zéro..." invisible sur LIVE seulement (rectangle metallic visible mais texte invisible)
- Cause : Vite Lightning CSS minifier génère duplicate rule fallback pour `oklch()` qui utilise `background:` shorthand → WIPE `-webkit-background-clip: text`
- Fix : `background:` → `background-image:` dans `.text-shimmer`
- Leçon : `feedback_lightning_css_shorthand_wipe.md` (hard rule cross-Intralys)

**Bug #2 — IntersectionObserver + clip-path trap** (commit `e337bfd`)
- Symptôme : Portraits Jonas (AboutPreview + Methodologie preview) stuck invisibles
- Cause : Chrome IO respecte clip-path pour intersectionRatio. `clip-path: inset(100%)` = ratio:0 forever = callback ne fire jamais
- Fix : Observer le PARENT non-clippé dans ImageReveal (`el.parentElement ?? el`)
- Leçon : `feedback_intersection_observer_clip_path.md`

**Bug #3 — lazy loading prod-strict** (commit `5f7d949`)
- Symptôme : `img.complete: false, naturalWidth: 0` sur portraits Home
- Cause : Browser native `loading="lazy"` STRICT en prod → image jamais demandée si user scrolle pas
- Fix : `loading="eager"` + `fetchPriority="high"` sur portraits Home critiques

### 2 hard rules acquises session (cross-projet)

1. **TEST `bun run build && bun run preview` :4173 AVANT push** — `bun run dev` :5173 est PERMISSIF, masque les bugs prod-only (Lightning CSS, lazy loading strict, HMR re-mounts). Memory : `feedback_dev_vs_prod_validation.md`
2. **PAS DE TRADE-OFFS VISUELS UNILATÉRAUX** — JAMAIS sacrifier un effet existant pour fixer un bug sans demander au user d'abord. Proposer options A/B/C. Memory : `feedback_no_unilateral_visual_tradeoffs.md`

## 🚦 Infra état

### Cloudflare
- Compte Rochdi (`intralysqc`) = env dev/preview (URL `*.intralysqc.workers.dev`)
- Livraison client = manuel local : `wrangler login` sur compte client + `bun run deploy:prod` (réutilise worker name `jonas-diop` sur autre compte, 0 conflit)
- KV staging créé. Prod KV à créer côté client lors de la livraison.

### GitHub Actions
- `ci.yml` + `deploy-staging.yml` **supprimés** (spam fails sans secrets CF, livraison manuelle de toute façon)
- `deploy-prod.yml` dormant (`workflow_dispatch` manuel only, jamais auto-fail)

### Wrangler.jsonc
- `env.staging.name` = `jonas-diop` (URL clean, pas de "-staging" suffix)
- GHL placeholders restent : `GHL_LOCATION_ID: "REPLACE_AT_END"` + `GHL_TRACKING_ID: "REPLACE_AT_END"` (à filler avec H8)

## 🎯 Prochaine session — directions possibles

**A — Continue effets visuels** : à éviter, on est en haut du budget bundle + risque saturation visual. Sprint 10 = signature complète. Peut-être 1-2 micro-polish max.

**B — Livraison custom domain `jonas-diop.intralys.dev`**
- Touche DNS partagé intralys.dev (autres clients là)
- Decision séparée à valider avec Rochdi
- Setup `routes` dans wrangler.jsonc + DNS CNAME Cloudflare

**C — GHL wires (Sprint 6B)** dès H8 reçu
- Form Contact réel : POST `external-tracking/events` (pattern V6 Intralys)
- Cal.com embed iframe (URL Jonas + timezone America/Toronto)
- Tracking pixels Meta + GA4 + Clarity (conditional cookie consent)
- Newsletter capture footer (GHL custom field tag)
- Webhook GHL handler KV invalidation articles

**D — Copy refinement** [À VALIDER JONAS] 60+ markers
- Anecdote fondatrice About (chapitre 2 "the-failure")
- Range prix programmes
- Date lancement programmes formels
- DPO contact pour Loi 25
- NEQ DIOP Stratégies Internationales Inc.
- Témoignages réels (3 actuels = AI Stitch placeholders)

**E — Gemini 2nd opinion audit fin** (Sprint 10 final)
- Screenshots Playwright 5-10 pages
- Pipe vers `gemini-3.1-pro-preview` pour cohérence + identifier gaps subtils
- Pattern validé sur autres clients Intralys

**F — Bascule autre projet Intralys**
- Buteau / EGSF / Mathis / Serujan / Océanne
- Appliquer les hard rules acquises (test prod preview, Lightning CSS audit, etc.)

## 🔒 Hypothèses Jonas pending (inchangées)

- **H8** : GHL credentials (locationId + integration token + formId Contact + URL Cal.com + timezone)
- **H9** : Pixel IDs (Meta + GA4 + Clarity)
- **H17** : Podcast statut + URLs Spotify/Apple/YouTube
- H3 : témoignages réels (3 portraits AI placeholders en attendant)
- H6 : photos pros restantes (3 reçues partiel, manque autres)
- H7 : logo final vector
- H11 : D1 décision
- Range prix programmes formels
- NEQ + DPO + anecdotes À propos

## 📝 Workflow recommandé prochaine session

1. **READ** ce RESUME-NEXT-SESSION.md (ce fichier) en premier
2. **AUTO-LOADÉ** : memory globale `project_jonas_diop_handoff_2026-05-25.md` (via MEMORY.md)
3. **AUTO-LOADÉ** : CLAUDE.md local Jonas (skills + interdits + hard rules)
4. **CONFIRMER** avec Rochdi quelle direction (A/B/C/D/E/F) AVANT toute action
5. **APPLIQUER les hard rules acquises** : test prod preview AVANT push, pas de trade-offs visuels unilatéraux, etc.
6. **EXÉCUTER** selon règle absolue (reformuler → wait go → execute d'un trait)

## 📚 Sources critiques

- Repo : `C:/Users/rochdi/.gemini/antigravity-ide/scratch/jonas-diop/`
- CLAUDE.md local : auto-loadé (filtre Jonas + skills + interdits)
- HANDOFF.md v9 (à jour 2026-05-28) : `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md`
- Brief : `C:/Users/rochdi/jonas-diop-scan/BRIEF-FINAL.md`
- Plan : `C:/Users/rochdi/jonas-diop-scan/PLAN-TECHNIQUE.md`
- Memory : `C:/Users/rochdi/.claude/projects/C--Users-rochdi/memory/project_jonas_diop_handoff_2026-05-25.md`
- 4 feedback memories nouvelles cette session :
  - `feedback_lightning_css_shorthand_wipe.md`
  - `feedback_dev_vs_prod_validation.md`
  - `feedback_intersection_observer_clip_path.md`
  - `feedback_no_unilateral_visual_tradeoffs.md`
- Screenshots audit live : `C:/Users/rochdi/jonas-diop-scan/audit-2026-05-28/`
- Photos Jonas RÉELLES : `public/photos/jonas-portrait-*.{avif,webp,jpg}` (3 photos × 3 formats)
- Stitch boards : `stitch/mcp-fresh-2026-05-26/` (28 PNGs)

## ⚠️ Pré-flight check avant toute modif visuelle/CSS

```bash
# Routine obligatoire
bun run build && bun run preview
# Puis ouvrir http://localhost:4173/ et tester
# PAS bun run dev (mode dev permissif, masque bugs prod)
```

Si je dois sacrifier un effet visuel existant pour fixer un bug → **PROPOSER OPTIONS A/B/C au user AVANT de coder**.
