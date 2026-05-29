# RESUME NEXT SESSION — Jonas Diop · session 2026-05-30/31

> Doc pour reprise après /compact. Single source of truth pour le prochain agent.

## 🎯 Live state actuel

**URL** : https://jonas-diop.intralysqc.workers.dev
**HEAD local** : `2a5901d` (Trilogie bootcamps RISE pre-launch + waitlist KV — wave 1+2+3)
**Push origin/main** : ⚠️ **DEFERRED** — push to main bloqué par auto-mode classifier. Commit local prêt, à pusher en début next session avec autorisation explicite Rochdi.
**Tests** : **605/605** ✅
**Lighthouse mobile 6 pages (last known)** : 100/100/100/100 (A11y/BP/SEO/Agentic)
**Schema markup wired live** : FAQPage (/faq, /conferences) · Book + WebPage (/livre) · Event + Course per bootcamp

## 📜 Session 2026-05-30/31 — Wave 1+2+3 Trilogie + Waitlist KV

| # | Commit | Wave | Net win |
|---|---|---|---|
| 1 | `a1f44df` | Handoff 2026-05-29/30 | Docs refresh + Trilogie PDFs reçues |
| 2 | `2a5901d` | **Wave 1+2+3 fusionnée** | Trilogie scaffolding + polish + verify (62 fichiers, +13600/-164) |

### Wave 1 — Trilogie scaffolding
- **7 composants partagés** sous `src/components/sections/bootcamps/` : BootcampStickyBar, MirrorChecklistSection, DeliverablesTable, BonusList, ValuePriceTable, TrilogieFooterCrossLink, EdgeApplicationFormShell
- **4 routes FR + 4 EN mirrors** : `/evenements/bootcamps` (hub) + `an-army-of-one` + `the-edge` + `the-activation`
- **BootcampsAlternativeNudge** micro-section sur Home (altitude tertiaire, ghost link, anti-cannibalisation brief v3 §5)
- **Copy verbatim PDFs reçus 2026-05-30** : `src/data/copy/bootcamps/*.ts` + `evenementsBootcamps.ts` (méthode RISE™, prix 997$/1497$/1997$)
- **Schema.org Event + Course per bootcamp** (offers.availability=PreOrder, sentinelle 2027-03-15)
- **+22 tests Schema** (39 schema tests total)

### Wave 2 — Polish + infra pre-launch
- **A11y polish** : 33 issues fixed (contrast WCAG, heading hierarchy, aria-label uniqueness, BootcampStickyBar locale-aware, aria-disabled cohérent, placeholder bumps)
- **Lint biome** : 29 `noArrayIndexKey` errors fixed (stable IDs)
- **public/sitemap.xml** + `scripts/generate-sitemap.ts` (50 URLs FR+EN avec hreflang fr-CA/en-CA/x-default)
- **Navbar 8 onglets preserved** + Bootcamps dropdown restructure vers 4 real routes
- **Worker `/api/waitlist`** + KV WAITLIST binding (honeypot + email regex + route allowlist + rate limit 5/24h + Loi 25 consent + CORS)
- **Forms wired** (Hero + Final + EdgeApplicationFormShell + ExitIntentPopup route-aware + FooterRich newsletter) vers `submitWaitlist()`
- **EN translation audit** (`scripts/audit-i18n.ts`, 0 dupes, brand whitelist v1)
- **+141 tests** (605/605 total)

### Wave 3 — Final polish + verify
- **5 honeypot a11y blockers** fixed (aria-hidden-focus pattern : input avec `aria-hidden + tabIndex=-1 + autoComplete=off + CSS off-screen`)
- **6 contrast fix** silver/60 → silver/85 sur bg-elevated (Loi 25 notices + EvenementsBootcampsPage desktop table headers + mobile stack + RISE pillar sourceBootcamp)
- **aria-disabled cleanup** EdgeApplicationFormShell (article → fieldset disabled)
- **placeholder EN locale fix** TheEdgePage VSL form
- **check-bundle-size** `KNOWN_LAZY_PREFIXES` updated avec Trilogie chunks
- **EvenementsBootcampsPage overflow-x-auto** wrapper : tabIndex=0 + aria-label
- **Final verify** : lint 0 errors, typecheck clean, tests green, bundle PASS

## ⏸ 11 Blockers Jonas (pending confirmation client)

| # | Item | Catégorie | Impact |
|---|---|---|---|
| 1 | Calendly URL réelle | Wire | CTA primaire site-wide |
| 2 | Dates cohortes Trilogie (sentinelle 2027-03-15 actuellement) | Copy | Schema.org Event validity |
| 3 | Stripe Price IDs (997/1497/1997) | Payment | Activer Stripe Checkout |
| 4 | GHL webhook endpoint (forward async depuis KV waitlist) | Infra | Pipeline V6 |
| 5 | VSL tournage Jonas (scripts existent) | Video | TheEdge VSL placeholder |
| 6 | Photos pro Jonas (hero/about/conferences/bootcamps) | Assets | Remplace placeholders |
| 7 | Témoignages cohorte 1 (post-livraison) | Copy | Remplace "Première édition en cours" |
| 8 | Clarification Cash & Scale™ (programme existant vs new) | Stratégie | Catalogue programmes |
| 9 | KV namespace creation (`bun wrangler kv namespace create WAITLIST`) sur compte CF Jonas | Infra | Active /api/waitlist en prod |
| 10 | Domain jonasdiop.com (DNS pointing) | Infra | Custom domain Worker |
| 11 | OG images per bootcamp (3 PNG 1200×630) | Assets | Social share |

## ⏸ 11 Sprint 6 postponed (autonome Claude, ordonné par valeur)

| # | Item | Estimé | Critic flag |
|---|---|---|---|
| 1 | HTMLRewriter SSR worker meta + Schema | ~3h | HIGH SEO/social |
| 2 | Lead magnets PDF "Les 7 leviers" + "RISE Audit" (drafting + wire) | ~3h | MEDIUM funnel |
| 3 | iCal export (.ics generation per bootcamp date) | ~1h | LOW UX bonus |
| 4 | GHL forward async (KV → webhook async via Workflow/Queue) | ~2h | dépend du #4 blockers Jonas |
| 5 | Refactor `BootcampLongPage` generic (3 pages partagent 80% structure) | ~2h | DX maintenance |
| 6 | BootcampsAlternativeNudge clone sur `/services` (parent page programmes) | ~1h | MEDIUM cross-sell |
| 7 | `/api/og` dynamic (Worker OG generation runtime) | ~3h | LOW si #11 blockers fait manuel |
| 8 | Stripe Checkout integration (post Price IDs) | ~2h | dépend du #3 blockers Jonas |
| 9 | VSL player custom (post tournage) | ~2h | dépend du #5 blockers Jonas |
| 10 | Sentry + Posthog production wiring | ~1h | observability |
| 11 | Sitemap dynamic (Worker route enumeration) | ~1h | actuellement static 50 URLs |

## 🆕 Sources de vérité (cumulées)

| Doc | Rôle | État |
|---|---|---|
| Brief v3 (PDF Jonas 2026-05-28) | Sitemap 17 pages + structure 2 colonnes + tone éditorial + sub-page templates | ✅ 70% livré + 20% placeholder + 10% manque |
| Formulaire signé (BRIEF-FINAL.md) | Identité + 6 programmes + signature client | ✅ Verbatim respecté |
| **PDFs Trilogie (3 PDFs reçus 2026-05-30)** | An Army of One™ 997$ + The Edge™ 1497-1997$ + The Activation™ 1497-1997$ + méthode RISE™ | ✅ **Intégrés Wave 1** verbatim copy + Schema |

### Pattern réconciliation 2 briefs appliqué (Trilogie)

- ✅ **CONTRADICTION pricing** brief v3 "PAS de prix" vs PDFs "997/1497/1997$" → **résolu** : Stripe buttons remplacés par "Sois notifié des inscriptions" (waitlist KV holding pattern) — prix affichés mais paiement bloqué
- ✅ **CONTRADICTION CTA** brief v3 "CTA unique appel" vs PDFs "paiement direct" → **résolu** : site-wide CTA primary reste "Prendre rendez-vous", "Sois notifié / Réserver ma place" autorisé uniquement sous `/evenements/bootcamps/*`
- ✅ **AJOUT méthode RISE™** : coexiste avec CDT™ + Game Changer Protocol™ comme brand framework distinct des bootcamps
- ✅ **AJOUT 3 programmes** : `/evenements/bootcamps/*` nouvelle section, n'écrase pas les 6 programmes existants
- ✅ **Audience range** (5-50K$/mois bootcamps vs 100K-1M$/an site) : segments tertiaires distincts assumés

Référence pattern : `feedback_two_briefs_reconciliation_pattern.md`

## 📍 Pickup options pour next session

**A. Push commit `2a5901d` à origin/main** (5 sec — demander go Rochdi car bloqué par classifier session précédente)
   - Une fois pushé, vérifier deploy Worker Cloudflare + smoke test prod 4 routes Trilogie + verify Schema.org Rich Results

**B. WAIT JONAS** (état défaut si pas d'autres priorités) — drafter le message à Jonas avec les 11 blockers + 7 questions Trilogie (cf. memo 2026-05-30) + attendre réponses

**C. Sprint 6 autonome — HTMLRewriter SSR meta + Schema** (~3h) — élimine le gap "Twitter/Facebook OG + GPTBot ne voient pas meta/schema" sans dépendre de Jonas

**D. Lead magnets PDF rédaction + wire** (~3h) — `feedback_brief_first_before_copy_rewrites` : lire brief + scan jonasdiop.com avant drafter. Couvre exit-intent + footer newsletter promise.

**E. Polish further if user requests** — A11y déjà 100/100, mais possibles :
   - Vérifier Lighthouse Trilogie 4 nouvelles routes mobile+desktop
   - Audit Gemini 3.1-pro fin sprint (cf. `feedback_audit_compliance_early` — AMF irrelevant ici mais best practice 2nd opinion fin sprint)
   - Visual polish bootcamp pages (deferred jusqu'à photos pro Jonas)

## 🛡 Stack technique en place (inchangée)

- Bun · Vite 8 · React 19 · TanStack Router (file-based) · TS 6 strict
- Tailwind v4 (self-host fonts Space Grotesk + Inter Variable)
- Vitest 4 · Biome · Husky · lint-staged · GitHub Actions
- Cloudflare Workers + KV (binding `WAITLIST`, IDs `REPLACE_AFTER_CREATE*` jusqu'à provisioning Jonas)
- **605/605 tests** · typecheck clean · lint clean (1 warning pré-existant `!important` globals.css)
- i18n : `BilingualLax<T>` + `ta()` + `useT()` + LanguageProvider + routing FR default + `/en/` mirror

## 📂 Docs maîtres à connaître

- `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md` — historique complet
- `C:/Users/rochdi/jonas-diop-scan/BRIEF-FINAL.md` — brief consolidé 15 sections (formulaire signé)
- `C:/Users/rochdi/jonas-diop-scan/PLAN-TECHNIQUE.md` — plan v2 sprints
- `C:/Users/rochdi/jonas-diop-scan/INTRALYS-CLIENT-AUTONOMY-PATTERN.md` — pattern GHL Blog headless
- `./HANDOFF-WAITLIST.md` — handoff API waitlist Sprint 3.5 (KV setup, contrat API, ENV)

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
- **Pattern réconciliation 2 briefs** : NE PAS supposer que le nouveau remplace l'ancien. Validation client AVANT exécution. Référence : `feedback_two_briefs_reconciliation_pattern.md` (cas vécu 2x : brief v3 puis Trilogie bootcamps — Trilogie résolue Wave 1)
- **Anti-cannibalisation CTA** : "Prendre rendez-vous" reste primary site-wide ; "Sois notifié" / "Réserver ma place" autorisé seulement sous `/evenements/bootcamps/*`
- **Pre-launch mode** : Stripe NOT functional, dates sentinelle 2027-03-15, témoignages placeholder, VSL placeholder. Tout passe par waitlist KV jusqu'à provisioning Jonas.
