# RESUME NEXT SESSION — Jonas Diop · session 2026-05-29/30

> Doc pour reprise après /compact. Single source of truth pour le prochain agent.

## 🎯 Live state actuel

**URL** : https://jonas-diop.intralysqc.workers.dev
**Worker version** : `1ced7cb3-8f3c-49e1-b023-3d8b4becf24f`
**HEAD** : `f365e97` (A11y fix footer newsletter contrast)
**Lighthouse mobile 6 pages** : **100/100/100/100** (A11y/BP/SEO/Agentic) ✅
**Schema markup wired live** : FAQPage (/faq, /conferences) · Book + WebPage (/livre) ✅

## 📜 Session 2026-05-29/30 — 15 commits net cumulés

| # | Commit | Phase | Net win |
|---|---|---|---|
| 1 | `0fe478a` | Vague 1A — tutoiement FR + CTA "Réserver mon appel stratégique" + H1 "Ajoute un zéro à ton chiffre d'affaires" | Brief v3 mécanique |
| 2 | `d6f0f02` | Vague 1B — 3 phares + PourQuiSection + Game Changer Protocol brand chapeau | Brief v3 structurel |
| 3 | `2b1223a` | Vague 2 shell — page `/conferences` B2B (FR + EN) 9 sections | Vague 2 start |
| 4 | `1bb888c` | A11y polish 6 bumps contrast | Lighthouse 96→100 mobile |
| 5 | `78f8c38` | Perf V1 — Sentry lazy + MaskRevealHeading priority=lcp | architectural |
| 6 | `0e3926b` | Perf V2 — self-host fonts + preload latin | architectural |
| 7 | `ffa6a02` | Perf V3 — critical CSS + asyncMainCss Vite plugin | RenderBlocking eliminated |
| 8 | `a55aad5`→`32cda4f` | Perf V4 — modulePreload filter retire markdown+sentry | −93kB gz eager fetch |
| 9 | `1522836` | T-lite + Perf V5 — Conférences link Navbar/Footer + critical Hero H1 inline | T-lite + V5 |
| 10 | `c4b6458` | Handoff docs fin journée 2026-05-29 | Docs refresh |
| 11 | `60ea13e` | **Nav restructure 8 onglets** brief v3 sitemap (Programmes/Évènements/Ressources dropdowns) + MobileNavDrawer 3 groupes intention (Travailler avec moi / Apprendre & s'inspirer / Découvrir) | Brief v3 §2 sitemap |
| 12 | `87b34b2` | **Home 3 sections wireframe** (LivrePreview Section 6 + ConferencierPreview Section 8 + EvenementsUpcoming Section 9) | Brief v3 §3.1 §6/§8/§9 |
| 13 | `ed268d7` | **Phase 3 workflow output** (8 builders parallèles + 8 verifiers + completeness critic 1.76M tokens) : Footer newsletter capture + Exit-intent popup + Schema markup helpers + Beef-up 5 pages (Livres 9 sections + Évènements 8 sections + Ressources 5 sections + About sections 5+6 Médias/Valeurs + LP-VSL prop videoEmbedUrl) + sub-page templates + route /livre/$slug | Brief v3 §2/§3.2/§3.5/§3.7/§3.9 |
| 14 | `0e32585` | **Phase 3.5 Schema wire** (8 pages + 13 LP callers + 2 tests) : SchemaScript injection sur FAQPage/LivrePage/EvenementsPage/PodcastPage/AboutPage/ContactPage/ConferencesPage/LPProgramTemplate + LPProgramTemplate routeKey prop requise | Brief v3 §6 SEO On-Page |
| 15 | `f365e97` | A11y fix footer newsletter `text-silver/55` → `/75` (4.02:1 → pass 4.5+) | Lighthouse Home A11y 97→100 |

## ✅ Réponses Jonas brief v3 (4/5 acquises)

1. **6 programmes affichés** avec hiérarchie 3 phares (The Shift · Master Closing · Focus & Flow)
2. **GCP + CDT™ coexistent** (brand chapeau D-I-O-P + framework signature technique)
3. **3ème VSL parkée**
4. **Date launch 08/06 relâchée** (qualité > vitesse)
5. **Q5 kit Conférences B2B** : ⏸ PENDING (logos · photos scène · bio speaker · refs · sujets)

## 🆕 NOUVEAU 2026-05-30 — Trilogie bootcamps reçue (3 PDFs)

Rochdi a reçu 3 pages de vente complètes (VSL scripts 12-14 min + 17 sections chacune) :

| Bootcamp | Audience | Blocage | Prix | Places |
|---|---|---|---|---|
| 🪖 **An Army of One™** | Solo 5-25K$/mois | Chaos interne · Life OS Notion | 997 $ | 20 max |
| 🖤 **The Edge™** | Coach/expert 5-20K$/mois | Invisibilité · autorité (Effet Veblen) | 1 997$ (lancement 1 497$) | 15 max + **application requise** |
| ⚡ **The Activation™** | Établi 15-50K$/mois | Plafond · IOS+ESD+ECO | 1 997$ (lancement 1 497$) | 20 max |

**Méthode RISE™** (Reset · Ignite · Scale · Elevate) — **NOUVELLE brand framework** distincte de CDT™+GCP.

### ⚠️ Contradictions critiques avec brief v3 (NON RÉSOLUES)

| Sujet | Brief v3 | PDFs Trilogie | Statut |
|---|---|---|---|
| Programmes catalog | 6 listés (Gamechanger Scaling / The Shift / Master Closing / Focus & Flow / Cash & Scale™ / Consultations Privées) | + 3 NOUVEAUX bootcamps 3 jours intensifs | **AJOUT ou REMPLACEMENT ?** |
| Méthodologie | CDT™ + Game Changer Protocol™ | + Méthode RISE™ | **AJOUT** brand framework |
| Pricing | brief v3 §3.4 : "PAS de prix affiché → Sur application / accessible via appel stratégique" | **Prix affichés** 997/1497/1997$ + countdown + early bird | **CONTRADICTION** |
| Funnel | brief v3 §1 Objectif #1 : "Générer des appels stratégiques qualifiés (CTA unique sur tout le site)" | CTAs paiement direct sans appel | **CONTRADICTION** |
| Audience range | 100K-1M$ CA annuel | 5-50K$/mois (60K-600K$/an) | **différente** — ciblage plus bas |
| Cross-sell | (n/a) | Bootcamps mentionnent **The Shift + Gamechanger Scaling** en cross-sell post → cohérent | Cohabitation OK |

### 7 questions à trancher avec Jonas AVANT toute intégration

1. Les 3 bootcamps **remplacent** quels programmes existants ? Ou **s'ajoutent** comme nouvelle ligne ?
2. **Statut** : pages publiques / cohortes test fermées / funnel pub Meta/LinkedIn ?
3. **Méthode RISE™** : remplace/complète CDT™+GCP comme brand chapeau ?
4. **Pricing affiché** : vraie stratégie ou test ? (contradiction directe brief v3)
5. **CTA paiement direct** : contredit "CTA unique appel" brief v3
6. **Cohortes calendrier** : dates programmées ? Récurrent mensuel ? One-shot lancement ?
7. **VSL tournées** ? Les scripts existent — les vidéos ?

**Pattern réconciliation** : [[feedback-two-briefs-reconciliation-pattern]] — ne PAS supposer que le nouveau remplace l'ancien. Mapping + classification + validation Jonas AVANT exécution.

## 🧱 État launch readiness (post-Phase 3.5)

| Item | État |
|---|---|
| Vague 1A tutoiement + CTA + H1 | ✅ live |
| Vague 1B 3 phares + PourQui + GCP | ✅ live |
| Vague 2 shell `/conferences` B2B | ✅ live (placeholders Q5 pending) |
| A11y mobile 6 pages 100/100/100/100 | ✅ live |
| Perf V1-V5 architectural | ✅ live |
| Nav restructure 8 onglets brief v3 | ✅ `60ea13e` |
| Home 3 sections wireframe (Livre/Conférencier/Évènements) | ✅ `87b34b2` |
| **Phase 3 — Footer newsletter + Exit-intent popup + Schema helpers + Beef-up 5 pages** | ✅ `ed268d7` |
| **Phase 3.5 — Schema markup wired 8 pages (FAQPage + Book + WebPage + Breadcrumb)** | ✅ `0e32585` |
| A11y fix footer newsletter contrast | ✅ `f365e97` |
| **Trilogie bootcamps (An Army of One / The Edge / The Activation)** | ⏸ **NON-INTÉGRÉ** — 7 questions Jonas pending |
| Q5 kit Conférences B2B (Jonas) | ⏸ pending |
| Plateforme email (Mailchimp/Beehiiv/GHL/ConvertKit) | ⏸ pending Jonas |
| Calendly URL | ⏸ pending Jonas |
| Tracking GA4/Meta/LinkedIn/GTM IDs | ⏸ pending Jonas |
| GHL pipeline V6 (sous-compte + locationId + trackingId + formIds) | ⏸ pending Jonas |
| Lead magnet PDF "Les 7 leviers" réel | ⏸ pending production |
| HTMLRewriter SSR worker meta+schema (Sprint 6 target) | ⏸ autonome Claude ~3h |
| Sitemap.xml | ⏸ autonome Claude ~1h |
| OG images custom per page | ⏸ pending Jonas brand + Claude |

**Brief v3 coverage estimé** :
- 🟢 **Livré fonctionnel** : ~70% (structure 17 pages × 2 langues, design, A11y/Perf, footer enrichi, exit-intent popup, **Schema markup wired**, navbar 8 onglets, Home 17 sections wireframe, 5 pages beef-up complètes, sub-page templates)
- 🟡 **Placeholder structuré** : ~20% (forms `action="#" disabled`, Calendly placeholder, podcast 2 scénarios, livre bonus, conferences sections "pending", trilogie bootcamps non-intégrée)
- 🔴 **Manque complet** : ~10% (tracking GA4/Pixel/LinkedIn/GTM **0%**, GHL pipeline V6 **0%**, sitemap.xml absent, lead magnet PDF réel inexistant, SSR worker HTMLRewriter absent, OG images custom absentes)

## 📍 Pickup options pour next session

**A. TRANCHER LA TRILOGIE** (BLOCKER stratégique) — drafter le message à Jonas avec les 7 questions + attendre réponse avant toute intégration. Sans ces réponses, risque de tout refondre dans 2 semaines.

**B. HTMLRewriter SSR worker meta + Schema** (autonome Claude, ~3h) — élimine le gap "Twitter/Facebook OG + GPTBot ne voient pas meta/schema". Critic flag HIGH SEO impact.

**C. Sitemap.xml generation** (autonome Claude, ~1h) — script build Vite plugin, route enumeration. Critic flag HIGH SEO.

**D. Lead magnet PDF "Les 7 leviers"** (Claude peut le rédiger, ~2h drafting + ~1h wire) — couvre l'exit-intent + footer newsletter promise.

**E. Wait Jonas Q5 kit Conférences** → fill Conferences shell avec real content quand kit reçu.

**F. Wait Jonas plateformes** → wire forms newsletter + exit-intent + livre + évènements + Calendly + tracking.

**G. Beef-up Programmes parent page** (brief v3 §3.3 — 5 sections + FAQ commune) — current /services hub a comparatif + qualif mais pas FAQ commune.

**H. Sous-pages Évènements** (brief v3 §3.6 template per event) — EvenementSousPageTemplate.tsx existe, créer 3 routes shells exemples (Bootcamp / Retraite / Masterclass).

## 🛡 Stack technique en place (inchangée)

- Bun · Vite 8 · React 19 · TanStack Router (file-based) · TS 6 strict
- Tailwind v4 (self-host fonts Space Grotesk + Inter Variable via `src/styles/fonts.css`)
- Vitest 4 · Biome · Husky · lint-staged · GitHub Actions
- Cloudflare Workers + KV staging (compte intralysqc)
- 435/435 tests · 100 chunks · 0 leaks · typecheck clean · lint clean (1 warning pré-existant !important globals.css)
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
- **Pattern réconciliation 2 briefs** : NE PAS supposer que le nouveau remplace l'ancien. Mapping + classification + validation client AVANT exécution. Référence : `feedback_two_briefs_reconciliation_pattern.md` (cas vécu Jonas brief v3 + maintenant Trilogie bootcamps).
