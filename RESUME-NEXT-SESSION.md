# RESUME — Next session pointer (post-compact 2026-05-28 SOIR)

> **Lit ce fichier en premier après /compact pour reprendre exactement où on s'est arrêté.**

## ⚡ État LIVE au 2026-05-28 fin journée (3 deploys aujourd'hui)

### URL live active
**https://jonas-diop.intralysqc.workers.dev/**

### Git state
- Branch : `main` synced avec origin/main
- HEAD : `3902946` (enrichissement vidéos Jonas)
- Tags créés aujourd'hui :
  - `pre-audit-fix-2026-05-28` (avant Phase 1 anti-leak)
  - `pre-brief-alignment-2026-05-28` (avant fixes brief alignment)
  - `pre-jonas-videos-enrichment-2026-05-28` (avant enrichissement vidéos)
- Working tree clean

### Stack metrics (post 3 commits)
- 430/430 tests vitest pass
- Typecheck clean
- Lint clean (1 warning)
- Bundle 110 kB gzip · headroom 3.88 kB
- 94 chunks dist · **0 placeholder leaks** (check:no-leaks PASS)
- Lighthouse desktop : A11y 100 · BP 100 · SEO 100 · Agentic 99

## 🎯 Sprint accompli aujourd'hui — 3 commits LIVE

### Commit 1 — `898c2d7` : Phase 1 anti-leak + reliability
**Trigger** : audit 18 screenshots Playwright via Claude + Codex GPT-5.5 high reasoning (Gemini OAuth KO depuis 25/05, on a pivoté combo).

**Bugs critiques résolus** :
1. **Placeholders `[À VALIDER JONAS]` leaked en LIVE** sur 5 pages :
   - À propos (anecdote fondatrice)
   - Témoignages (TOUTE la page : 3 cards + étude de cas)
   - Ressources (dev comment `[Grid articles — GHL Blog API headless Sprint 5...]`)
   - Contact (iframe Cal.com placeholder)
   - Livre (4 placeholders statut/structure/sortie/formats)
2. **Témoignages shells** : refactor flag `pending: true` structurel + fallback "Cas clients sur demande"
3. **Contact iframe Cal.com** : remplacé par message "Réservation en ligne — bientôt disponible"
4. **CountUp Hero** : `useState(to)` initial (SSR-safe, ne plus afficher 0+/0M$/0 ANS)
5. **ScrollReveal + StaggerReveal** : safety fallback 5s force reveal si IO ne fire jamais
6. **Services comparatif table** → cards stack sous `md:` (mobile garde INTENSITÉ + IDEAL POUR)
7. **Ressources finalCta** → drive vers /contact qualification (au lieu de doublon newsletter)

**Anti-régression** :
- Helper `src/lib/content/isUnvalidatedContent.ts` + 11 tests unit
- `scripts/check-no-leaks.ts` scan dist/assets/*.js post-build, fail si leak
- `bun run check:no-leaks` ajouté à package.json

### Commit 2 — `0d95940` : brief alignment + SEO enrichissement
**Trigger** : vérification exhaustive site vs brief PDF formulaire signé Jonas 21/05/2026.

**Corrections éditoriales** :
1. Hero stat #3 : "15 ANS" → **"15+ ANS"** (cohérent avec 857+/31M$+)
2. Hero stat #3 label : "D'expertise stratégique" → **"D'expérience en stratégie d'affaires"** (verbatim brief)
3. FAQ Q2 verbatim restauré : "En quoi votre approche est-elle différente **des autres consultants en croissance** ?"
4. FAQ Q5 verbatim restauré : "**Quels sont vos formats** d'accompagnement ?"
5. SEO meta enrichis (5 pages) avec mots-clés brief manquants : "scaling stratégique Montréal", "coachs et experts", "Montréal/Québec/Worldwide", "6 à 7 figures", "30/60-90 jours"

### Commit 3 — `3902946` : enrichissement 2 vidéos Jonas
**Trigger** : user envoie 2 transcriptions vidéos Jonas (The Game Changer System) — direction "Full" choisie.

**Ajouts (zéro retrait Sprint 10)** :
1. **PullQuote component** + 5 verbatim quotes Jonas (`src/data/copy/quotes.ts`)
   - "Les entrepreneurs ne sont pas bloqués par leur niveau, ils sont bloqués par leur système" → Home (entre AboutPreview et MethodologieCDT preview)
   - "Tu es le poumon et le cœur de ton activité" → About (après chapitres 1-2)
   - "Ce n'est pas en faisant plus que tu vas gagner plus, c'est en faisant mieux" → Méthodologie CDT (après 4 phases)
   - "La personne qui manque de planifier planifie son échec" → Services (avant qualification split)
   - Benjamin Franklin "die at 25, buried at 75" → Final CTA
2. **Section "Les 3 S de la CDT™"** sur Méthodologie CDT (Structure · Stratégie · Système)
3. **Section "La méthode DIOP"** sur Contact (Diagnostic · Implémentation · Optimisation · Propulser)
4. **Section "La loi de l'impact"** sur Méthodologie CDT (axes Échelle × Monétisation + diagramme SVG)
5. **Nouveau composant** `LoiImpactDiagram.tsx` (SVG GPU-safe)
6. **FR + EN mirror** appliqué partout

## 🆕 BRIEF v3.0 (mai 2026 finale) reçu en fin de journée

**Document** : `Brief_Site_Web_Architecte_Affaires.pdf` (27 pages, prep agence marketing)

### Contradictions apparentes avec brief #1 (formulaire signé)

| Sujet | Brief #1 signé (21/05) | Brief v3 spec | Décision unifiée proposée |
|---|---|---|---|
| Méthodologie chapeau | CDT™ (Force 3) | Game Changer Protocol | **Coexistence** : GCP=brand processus, CDT™=framework technique |
| Catalogue | 6 programmes | 3 phares (Shift/Closing/Flow) | **3 pages publiques** + mentions sous-texte des 3 autres |
| Stats | **857+** signé | "ex: +150" (= placeholder exemple) | **857+** (signé reste vérité) |
| CTA | "Prendre rendez-vous" | "Réserver mon appel stratégique" | **"Réserver mon appel stratégique"** (brief v3, meilleur copy) |
| Tone | Non spécifié | TU par défaut, VOUS Conférences | **TU partout** sauf page Conférences |
| Sitemap | Méthodologie standalone | 8 onglets parent+sub + Conférences | Garder Méthodo CDT + **AJOUTER Conférences** + arbo brief v3 |
| VSL | Non mentionné | OBLIGATOIRE sur pages programmes | À activer (2 vidéos Jonas reçues) |

### Plan d'unification 3 vagues (J-11 avant launch 08/06)

**🔴 Vague 1 — Critique J-1 à J-3 (~6-8h)** : tutoiement global · CTA wording · H1 "Ajoute un zéro à ton" · sous-headline brief v3 · Game Changer Protocol brand chapeau · section "Pour qui / Problème"

**🟡 Vague 2 — J-4 à J-7 (~4-6h)** : page Conférences (NOUVELLE B2B) · VSL Home + pages programmes · bannière sticky event · pop-up exit-intent + lead magnet · restructure menu nav 8 onglets

**🟢 Vague 3 — post-launch sem 1-3** : sub-pages Évenements/Livres · lead magnets per page · tracking GA4/Meta/LinkedIn/GTM (H9 pending) · Schema étendu (Book/Event/Podcast)

## ❓ 5 QUESTIONS critiques à Jonas AVANT Vague 1

1. **3 ou 6 programmes affichés ?** Si 3 publics + 3 mentionnés sous-texte = OK Vague 1.
2. **Game Changer Protocol vs CDT™** : valider pattern "GCP=chapeau, CDT™=technique" ou autre relation ?
3. **3ème VSL** : Jonas peut tourner 1 vidéo pour le 3ème programme ? Ou dupliquer une des 2 reçues ?
4. **Date launch 2026-06-08 confirmée** ou glisse ?
5. **Conférences B2B** : Jonas a logos clients/refs + bio + photos scène prêts ?

## 🎥 2 vidéos Jonas (VSL material)

- `C:/Users/rochdi/Downloads/Video/Video01.mp4` (572 MB, **2:58**)
  - Contenu : "The Game Changer System" intro + Les 3 S (Structure/Stratégie/Système) + 3 entrées (Protocole/Call/System)
- `C:/Users/rochdi/Downloads/Video/Video02.mp4` (421 MB, **3:56**)
  - Contenu : Parcours Jonas (**13 ans** — pas 15 ! à creuser) + Loi de l'impact (échelle × monétisation) + 4 choix DIOP

**Transcriptions** : fournies par user, capturées dans conv compactée. Re-extraire si besoin.

**Hébergement à décider** : Cloudflare Stream recommandé (CF Workers déjà) · Vimeo Plus alternative · YouTube unlisted dernier choix.

## 🚦 Items pending CLIENT (H-series étendue brief v3)

### Pending depuis brief #1 (signé 21/05)
- H3 : témoignages réels (3 placeholders Sophie/Marc/David)
- H6 : photos pros restantes (3 reçues partiel)
- H7 : logo final vectoriel
- H8 : GHL credentials + Cal.com URL + timezone
- H9 : Pixels Meta + GA4 + Clarity
- H11 : décision D1 vs KV
- H17 : podcast statut + URLs Spotify/Apple/YouTube
- Range prix programmes (décision brief : non-affichés publics)
- NEQ + DPO + anecdote fondatrice À propos

### NEW depuis brief v3 (mai 2026)
- H18 : closer/commercial pour mener appels stratégiques
- H19 : photographe pour shooting pro (avant semaine 4)
- H20 : vidéaste pour 3ème VSL (Focus & Flow ou autre)
- H21 : plateforme email marketing (ConvertKit / ActiveCampaign / Mailerlite)
- H22 : lead magnet principal (PDF stratégique ou chapitre livre)
- H23 : logos clients/refs Conférences B2B
- H24 : bio courte (50 mots) + bio longue (200 mots) pour kit media Conférences
- H25 : extracts vidéo conférences passées (showreel)
- H26 : fiche technique scénique (Conférences)
- H27 : liste Livres + ISBN + accès Amazon
- H28 : calendar events (Bootcamps / Retraites / Masterclass) — si applicable

## 🤖 État infrastructure tooling

- **Gemini OAuth** : EXPIRÉ depuis 2026-05-25, à refresh quand besoin (procédure : `gemini --skip-trust` → Y → login `intralys.dev@gmail.com`)
- **Codex CLI** : fonctionne OAuth ChatGPT Plus (testé aujourd'hui)
- **Playwright MCP** : opérationnel
- **Firecrawl MCP** : opérationnel (LinkedIn bloqué = pas supporté)
- **Cloudflare Workers** :
  - Compte staging : Rochdi (`intralysqc`) → `https://jonas-diop.intralysqc.workers.dev`
  - KV staging : `ARTICLE_CACHE` = `57d2b354179442d2985ec8e9045fcdc9`
  - Compte prod client : à créer côté Jonas pour livraison

## 📝 Workflow recommandé prochaine session

1. **READ** ce RESUME-NEXT-SESSION.md en premier
2. **AUTO-LOADÉ** : memory globale `project_jonas_diop_handoff_2026-05-25.md`
3. **AUTO-LOADÉ** : CLAUDE.md local Jonas (skills + interdits + hard rules)
4. **CONFIRMER avec Rochdi** : Jonas a-t-il répondu aux 5 questions critiques ? Sinon, on attend.
5. Si Jonas répond → **EXÉCUTER Vague 1** d'un trait selon plan unifié
6. Si Jonas tarde → proposer d'attaquer items orphelins (Vague 1 partie mécanique : tutoiement + CTA wording = peuvent tourner sans validation Jonas car déjà dans brief signé)
7. **APPLIQUER les hard rules** : test `bun run build && bun run preview` AVANT push (`feedback_dev_vs_prod_validation`)

## 📚 Sources critiques

### Repo
- `C:/Users/rochdi/.gemini/antigravity-ide/scratch/jonas-diop/`

### Docs maîtres
- **HANDOFF.md** (à jour 2026-05-28 fin journée) : `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md`
- Brief original formulaire signé Jonas (21/05) : `C:/Users/rochdi/jonas-diop-scan/form_submission_*.pdf` ou via conv
- **Brief v3.0 finale (28/05)** : reçu via user en fin journée, `Brief_Site_Web_Architecte_Affaires.pdf`
- BRIEF-FINAL.md : `C:/Users/rochdi/jonas-diop-scan/BRIEF-FINAL.md`
- PLAN-TECHNIQUE.md : `C:/Users/rochdi/jonas-diop-scan/PLAN-TECHNIQUE.md`

### Memory project
- `C:/Users/rochdi/.claude/projects/C--Users-rochdi/memory/project_jonas_diop_handoff_2026-05-25.md` (auto-loadé)

### Audit du jour
- `C:/Users/rochdi/jonas-diop-scan/audit-2026-05-28-gemini/` :
  - `desktop/01-09.jpeg` + `mobile/01-09.jpeg` (18 screenshots scroll-through reveals)
  - `claude-findings.md` (audit Claude Opus 4.7)
  - `codex-response.md` (validation Codex GPT-5.5 high reasoning)
  - `SYNTHESE-FINALE.md` (consensus Claude+Codex + fix plan)
  - `after/` (screenshots post-Phase 1 + post-enrichissement)
  - `prompt.md` (prompt Gemini préparé, jamais envoyé car OAuth KO)

### Memory feedback files (cross-projet) — déjà créées sessions précédentes
- `feedback_lightning_css_shorthand_wipe.md`
- `feedback_dev_vs_prod_validation.md`
- `feedback_intersection_observer_clip_path.md`
- `feedback_no_unilateral_visual_tradeoffs.md`

### Helpers + scripts ajoutés aujourd'hui
- Commit 898c2d7 :
  - `src/lib/content/isUnvalidatedContent.ts` + test
  - `scripts/check-no-leaks.ts`
- Commit 3902946 :
  - `src/components/ui/PullQuote.tsx`
  - `src/components/ui/LoiImpactDiagram.tsx`
  - `src/data/copy/quotes.ts`

## ⚠️ Pré-flight check avant toute modif visuelle/CSS

```bash
# Routine obligatoire (cross-Intralys hard rule)
bun run build && bun run preview
# Puis ouvrir http://localhost:4173/ et tester
# PAS bun run dev (mode dev permissif, masque bugs prod-only)
```

**Pas de trade-offs visuels unilatéraux** : sacrifier un effet existant pour fixer un bug → **PROPOSER OPTIONS A/B/C au user AVANT de coder** (`feedback_no_unilateral_visual_tradeoffs`).

## 🎯 Décision macro à clarifier avec Rochdi prochaine session

**Brief #1 (signé 21/05) vs Brief v3.0 (finale 28/05)** :

Le pattern unifié proposé (GCP=chapeau, CDT™=technique, 857+ signé, TU partout, 3 programmes publics + 3 mentionnés sous-texte, ajout page Conférences B2B, VSL activé) DOIT être validé par Jonas avant Vague 1.

Si Jonas valide → Vague 1 mécanique d'un trait (~6-8h), zéro risque.

Si Jonas tergiverse → priorité aux 5 questions critiques. Risque timing : launch 08/06 = J-11.

## 🆘 Si Claude post-compact a perdu du contexte

Source de vérité dans cet ordre :
1. Ce fichier (RESUME-NEXT-SESSION.md)
2. HANDOFF.md (canonical session log)
3. `git log --oneline -20` (les 3 commits du jour visibles)
4. Memory `project_jonas_diop_handoff_2026-05-25.md` (auto-loadé)
5. CLAUDE.md local Jonas (auto-loadé)
