# Jonas Diop — Instructions locales pour Claude Code

> Auto-loadé par Claude Code dès qu'on bosse dans ce dossier.
> Couche 2 du garde-fou anti-dérive skills (cf. `feedback_jonas_diop_skill_triggers` + section "Skills × unicité Jonas" dans `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md`).

## 🎯 Principe directeur unique

**Jonas Diop doit être UNIQUE, PAS reproductible des autres Intralys** (Buteau / EGSF / Mathis / Serujan / Océanne).

Positionnement : "Platinum Executive Authority" (Dark luxe Silver primary + Gold rare 7 usages stricts), audience consulting premium 20-50K range, méthodologie propriétaire CDT™.

## 🛠 Skills À INVOQUER pour ce projet

| Action | Skills |
|---|---|
| Hero / atomiques / sections signature | `soft-skill` + `frontend-design` + `emil-design-eng` |
| Page CDT™, About story | `soft-skill` + `emil-design-eng` + `superpowers:brainstorming` |
| LPs programmes | `soft-skill` + `frontend-design` + `design-taste-frontend` (audit fin) |
| Audit fin sprint visuel | `impeccable` + `gemini-collaboration` |
| Pipeline GHL / Blog headless | `intralys-v6-pipeline` + `frontend-design` |
| Bug | `superpowers:systematic-debugging` |
| Nouvelle feature | `superpowers:brainstorming` |
| Avant claim "fait" | `superpowers:verification-before-completion` |
| Perf / tokens / bundle | `intralys-perf-playbook` |
| 2nd opinion fin sprint | `gemini-collaboration` (3.1-pro cascade 3-flash) |

## 🚫 Skills INTERDITS pour ce projet (reproduisent patterns Intralys reconnaissables)

- `intralys-cream-surface-pitfalls` (Jonas = dark luxe pas cream)
- `intralys-editorial-scroll-rail` (déjà partout)
- `intralys-mobile-engagement-patterns` (Jonas a son mobile sticky bar custom dans Stitch)
- `intralys-sections-edito-templates` (reproduction)
- `intralys-edito-magazine` (banni — AUCUN SectionNumeral/ChapterMarker/Fleuron/Marginalia/drop cap/pull quote asymétrique)
- `intralys-fusion-strategy` / `intralys-gatineau-portage` (pas applicable greenfield)

## ✅ Hard rules cross-Intralys à TOUJOURS appliquer

- `feedback_responsive_clamp_first` : clamp() dès 1er composant (déjà dans tokens.css)
- `feedback_text_stability_modern_css` : text-balance / pretty / min-w-0 / hyphens-auto (déjà dans globals.css)
- `feedback_ban_magazine_editorial_default` : interdit absolu
- `feedback_wrangler_no_autobuild_critical` : wrangler.jsonc DOIT avoir `[build]` step (déjà OK Sprint 0)
- `feedback_brief_first_before_copy_rewrites` : LIRE brief Jonas + scan jonasdiop.com AVANT de drafter copy (Sprint 2.5)
- `feedback_seo_htmlrewriter_ssr_pattern` : meta + Schema.org via worker HTMLRewriter (Sprints 2, 5, 8)
- `feedback_quality_over_speed` : filtre 5 questions avant action à enjeu
- `feedback_playwright_first_diagnostic` : si live KO 2x après deploy, dispatch Playwright direct
- `feedback_no_client_copypaste` : s'inspirer du toolkit (i18n pattern, stack), JAMAIS copy-paste depuis Buteau/Oceanne/etc.

## 📚 Docs maîtres à lire avant d'agir

- `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md` — doc maître reprise session
- `C:/Users/rochdi/jonas-diop-scan/BRIEF-FINAL.md` — brief consolidé 15 sections
- `C:/Users/rochdi/jonas-diop-scan/PLAN-TECHNIQUE.md` — plan v2 (sprints embedded skill blocks)
- `C:/Users/rochdi/jonas-diop-scan/INTRALYS-CLIENT-AUTONOMY-PATTERN.md` — pattern GHL Blog headless

## 🎨 Stitch assets (LOCKED, ne pas regénérer)

- Path : `./stitch/` (à côté du code)
- 23 PNGs (4 moodboards + 12 sections + 5 logos + 2 photos placeholders)
- Design system VALIDATED : `assets/c8e19035824949a8b1b2f6606d5a2245` (Platinum Executive Authority v2 silver)
- Project Stitch ID : `projects/827945161524600200`
- State : voir `./stitch/STATE.md`
- Unlock UNIQUEMENT si Jonas refuse un board OU nouvelle section non couverte

## 🔑 Mot-clé de rappel verbal (Rochdi → Claude)

Si Rochdi dit **"filtre Jonas"** ou **"check skills"** : Claude relit cette section, dit quels skills il aurait dû charger, corrige le tir.

## 🚦 Stack technique en place (Sprint 0)

- Bun · Vite 8 · React 19 · TanStack Router (file-based) · TS 6 strict
- Tailwind v4 · Motion · Lenis · Fontsource (Space Grotesk + Inter)
- Vitest 4 · Biome · Husky · lint-staged · GitHub Actions
- Cloudflare Workers + KV (D1 décision en fin Sprint 0 — H11)
- i18n : `BilingualLax<T>` + `ta()` + `useT()` + LanguageProvider + routing FR default + `/en/` mirror

## 📞 Client

- Jonas Diop, Président, DIOP Stratégies Internationales Inc.
- Email : `contact@jonasdiop.com`
- Téléphone : `+1 438 356 7746`
- Timezone : America/Toronto (GMT-04:00)
