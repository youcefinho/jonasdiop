# RESUME NEXT SESSION — Jonas Diop · session 2026-05-29

> Doc pour reprise après /compact. Single source of truth pour le prochain agent.

## 🎯 Live state actuel

**URL** : https://jonas-diop.intralysqc.workers.dev
**Worker version** : `71503e1d-5f35-491c-b87d-fadf1deb460e`
**HEAD** : `1522836` (T-lite + Perf V5)
**Lighthouse mobile 4 pages** : **100/100/100/100** (A11y/BP/SEO/Agentic) ✅

## 📜 Session 2026-05-29 — commits (chronologique)

| # | Commit | Phase | Net win |
|---|---|---|---|
| 1 | `0fe478a` | Vague 1A — tutoiement FR + CTA "Réserver mon appel stratégique" + H1 "Ajoute un zéro à ton chiffre d'affaires" | Brief v3 mécanique |
| 2 | `d6f0f02` | Vague 1B — 3 phares (The Shift · Master Closing · Focus & Flow) + nouvelle section "Pour qui / Problème" + Game Changer Protocol brand chapeau (Home + About chapter) | Brief v3 structurel |
| 3 | `2b1223a` | Vague 2 shell — page `/conferences` B2B (FR + EN) avec 9 sections (Hero · Why invite · Formats · Subjects · Speaker bio · References · Gallery · FAQ · Final CTA), tone VOUS exception, pending flags pour 5 inputs Jonas | Vague 2 start |
| 4 | `1bb888c` | A11y polish — 6 bumps contrast (TrustedLogosBar opacity 40→70, services badges gold/50→/80, table headers silver/60→/85, disqualif opacity-60→/80) | Lighthouse 96→100 mobile |
| 5 | `78f8c38` | Perf V1 — Sentry sync→dynamic import + MaskRevealHeading `priority="lcp"` Hero H1 skip animation | architectural |
| 6 | `0e3926b` | Perf V2 — Self-host 4 WOFF2 variable fonts (Space Grotesk + Inter, latin + latin-ext) + preload latin + drop Fontsource JS imports | architectural |
| 7 | `ffa6a02` | Perf V3 — Critical CSS inline (~500 bytes) + Vite plugin `asyncMainCss` (preload-onload trick) | RenderBlocking insight eliminated |
| 8 | `a55aad5` → `32cda4f` | Perf V4 — `modulePreload.resolveDependencies` filter retire markdown (155kB) + sentry (138kB) du preload chain Home. cv-defer attempted then reverted (LCP régression non-causée par cv-defer). | −93kB gz eager fetch |
| 9 | `1522836` | T-lite + Perf V5 — Conférences link in Navbar desktop + mobile drawer + Footer (FR/EN) + critical Hero H1 inline CSS (`hero-h1-lcp` class avec font-size clamp + tracking + line-height inline pour éliminer LCP repaint) | T-lite + V5 |

## ✅ Réponses Jonas brief v3 (4/5)

1. **3 ou 6 programmes affichés** → 6 avec **hiérarchie visuelle 3 phares** (The Shift · Master Closing · Focus & Flow taggés "phare" dot gold + tag eyebrow gold)
2. **GCP vs CDT™** → **coexistence validée** : GCP = brand chapeau (parcours D-I-O-P visible), CDT™ = framework technique signature interne. Analogie Apple iOS+iPhone.
3. **3ème VSL** → **parkée** (on travaille avec 2 vidéos existantes Jonas)
4. **Date launch 08/06** → **relâchée** (qualité > vitesse selon Jonas)

## ⏸ BLOCKER actuel — Q5 kit Conférences B2B

Page `/conferences` est **shell prêt avec placeholders** mais a besoin de Jonas pour 5 inputs :

1. **Logos** entreprises clientes (PNG/SVG fond transparent)
2. **Photos** Jonas sur scène (haute résolution paysage)
3. **Bio "speaker"** ton corporate, distincte de la bio coach (max 150 mots)
4. **Références événements passés** : sujet · audience · année · lien vidéo public si dispo
5. **Sujets de conférences** validés : titre · durée (45min / 60min / 90min / journée) · format (keynote / atelier / panel)

**Message draft prêt à envoyer à Jonas** (déjà composé dans la conversation précédente, à copier-coller depuis le scrollback).

## 🧱 État launch readiness

| Item | État |
|---|---|
| Vague 1A — tutoiement + CTA + H1 brief v3 | ✅ live |
| Vague 1B — 3 phares + Pour qui + GCP brand chapeau | ✅ live |
| Vague 2 shell `/conferences` B2B | ✅ live (placeholders) |
| A11y mobile 4 pages 100/100/100/100 | ✅ live |
| Perf V1-V5 architecturals (Sentry/fonts/CSS/preload/Hero) | ✅ live |
| **Q5 kit Conférences (Jonas)** | ⏸ pending |
| Vague 2 reste — Navbar restructure 8 onglets parent-subs | ⏸ pending Jonas validation brief v3 sitemap |
| Vague 2 reste — VSL Home injection (hosting decision) | ⏸ pending Jonas (Cloudflare Stream vs Vimeo vs YouTube) |
| Vague 2 reste — Sticky event banner | ⏸ pending event |
| Vague 2 reste — Pop-up exit-intent | ⏸ contradictoire brief #1 NO vs brief v3 OUI |
| Vague 3 — Tracking GA4 / Meta / LinkedIn / GTM | ⏸ post-launch + Jonas account IDs |
| Vague 3 — Schema.org Book/Event/Podcast étendu | ⏸ post-launch + Jonas data |
| Vague 3 — Lead magnets | ⏸ contradictoire brief #1 NO vs brief v3 OUI |
| Perf — CrUX field data | ⏸ post-traffic real-world |
| SEO — meta SSR `/conferences` (HTMLRewriter pattern) | ⏸ polish item |

## 📍 Pickup options pour next session

**A. Wait Jonas Q5** → quand il envoie le kit, remplir Conferences shell avec real content (bio + photos + logos + refs + sujets validés).

**B. SEO polish `/conferences`** → wire meta title/description SSR via HTMLRewriter pattern (référence `feedback_seo_htmlrewriter_ssr_pattern`). Currently la page affiche le default site title.

**C. Vague 3 tracking start** → si Jonas envoie les IDs (GA4 measurement ID, Meta Pixel ID, LinkedIn Insight Tag), wire le tracking. Aucune dépendance autre que les IDs.

**D. Restructure Navbar 8 onglets parent-subs** → si Jonas valide sitemap brief v3 (parent + sub-pages, ex : Programmes parent avec subs 3 phares). Plus complexe que T-lite déjà fait.

**E. Real-world LCP test** → demander à Jonas (ou friend) de tester sur device réel (Android 4G normal) et reporter LCP perçu. Lab Slow4G+4xCPU est punishing, real-world should be <2.5s.

**F. Refine PourQuiSection / GCP wording** → si Jonas a feedback sur les 3 problem cards ou la méthode DIOP wording, raffinement copy possible.

## 🛡 Stack technique en place (inchangée)

- Bun · Vite 8 · React 19 · TanStack Router (file-based) · TS 6 strict
- Tailwind v4 (self-host fonts Space Grotesk + Inter Variable via `src/styles/fonts.css`)
- Vitest 4 · Biome · Husky · lint-staged · GitHub Actions
- Cloudflare Workers + KV staging (compte intralysqc)
- 430/430 tests · 97 chunks · 0 leaks
- i18n : `BilingualLax<T>` + `ta()` + `useT()` + LanguageProvider + routing FR default + `/en/` mirror

## 📂 Docs maîtres à connaître

- `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md` — historique complet
- `C:/Users/rochdi/jonas-diop-scan/BRIEF-FINAL.md` — brief consolidé 15 sections (signed)
- `C:/Users/rochdi/jonas-diop-scan/PLAN-TECHNIQUE.md` — plan v2 sprints
- `C:/Users/rochdi/jonas-diop-scan/INTRALYS-CLIENT-AUTONOMY-PATTERN.md` — pattern GHL Blog headless

## 📞 Client

- **Jonas Diop**, Président, DIOP Stratégies Internationales Inc.
- **Email** : `contact@jonasdiop.com`
- **Téléphone** : `+1 438 356 7746`
- **Timezone** : America/Toronto (GMT-04:00)

## ⚠️ Rappels CLAUDE.md local critiques

- Jonas Diop **DOIT être UNIQUE**, pas reproductible des autres Intralys
- **INTERDIT** : `intralys-cream-surface-pitfalls`, `intralys-editorial-scroll-rail`, `intralys-mobile-engagement-patterns`, `intralys-edito-magazine`, `intralys-fusion-strategy`, `intralys-gatineau-portage`
- Stitch design system **LOCKED** : `assets/c8e19035824949a8b1b2f6606d5a2245` (Platinum Executive Authority v2 silver)
- Mot-clé Rochdi : "filtre Jonas" → relire ce fichier
