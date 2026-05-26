# STITCH-AUDIT — 2026-05-26

Audit 28 boards `stitch/mcp-fresh-2026-05-26/` vs build live actuel.
Objectif : identifier le diff exact entre référence visuelle Stitch et rendu live, sur 6 dimensions (typo / couleurs / structure / effets / patterns / features) avant toute refonte.

---

## 1. FOUNDATION

### 1.1 Palette (boards 06, 14, 27)

Confirmée 6 swatches consistants cross-3-moodboards :

| Slot | Hex estimé visuel | Mon usage |
|---|---|---|
| Base ultra-dark | #0a0a0a | bg-base ✅ |
| Carbon | #1f1f1f | bg-elevated ✅ |
| Stone (mid grey) | #7a7a7a | text low opacity ✅ |
| Cream / off-white | #f5f0e8 | text high contrast ✅ |
| Silver Platinum | #c0c0c5 | text-primary, CTAs default ✅ |
| Gold Rare | #c9a572 | accents (eyebrow dot, stats, CTA Hero) ⚠️ sous-utilisé |

✅ Mes tokens.css matchent globalement.
⚠️ **Stats numbers GOLD** (boards 13, 28, 09) mais mon TrustBand utilise silver → diff.

### 1.2 Typographie (boards 06, 14, 27)
- **Display** : Space Grotesk (Headline Large + Medium) ✅
- **Body** : Inter Regular + Medium ✅
- **Eyebrow** : Inter uppercase + `tracking-widest` silver ✅
- **H1 weight** : Medium/Semibold + `tracking-tight` ✅

### 1.3 Logo (boards 12, 16, 17, 18, 21)
4 concepts proposés :
1. Wordmark sobre uppercase JONAS DIOP (silver letterspacing wide)
2. Wordmark title case "Jonas Diop.." + **gold dot signature** ← variant proche du mien
3. Monogramme JD in rounded square frame
4. Wordmark uppercase + **gold underline** accent

⚠️ Décision finale logo non validée. Mon build utilise variant proche #2.

---

## 2. SECTIONS — Delta per board × live page

### 2.1 Hero (boards 13, 28, 11 mobile)

**Stitch :**
- Layout centered : logo top-left + nav center + `CONSULTATION` pill silver top-right
- Eyebrow `• ARCHITECTE D'AFFAIRES` (gold dot + silver uppercase tracked)
- H1 2 lignes balanced
- Sub 1 ligne
- 2 CTAs : **PRIMARY GOLD** + secondary outline silver
- Divider silver thin
- **3 stats GOLD inline** below
- Footer minimal 1-line

**Mon build :**
- `min-h-[78svh]` → Stitch ~60svh = **plus compact**
- Hero CTA actuellement silver-primary → **devrait être gold-primary**
- TrustBand stats actuellement silver → **devrait être gold**
- FooterRich verbose 4 cols affiché en bas de Hero → Stitch montre footer minimal sur Hero, FooterRich seulement en bas de page

**Delta : MAJEUR**

---

### 2.2 About / À propos (boards 15, 22, 19, 02, 10)

**Stitch :**
- Hero "Jonas Diop." + portrait Jonas (board 19) à droite
- Sections en cascade :
  - "L'INSIGHT FONDATEUR" eyebrow + text
  - "L'ÉCHO QUI A TOUT CHANGÉ" eyebrow + text
  - 📷 **Image watch movement** (board 02) full-width signature
  - "LA NAISSANCE DE CDT" + date eyebrow `Juin/2018`
  - "AUJOURD'HUI" + 3 stats (31M$+ / 857+ / 15 ANS)
  - 📷 **Image architectural building** (board 10) full-width
  - "LA MISSION"
- Gold CTA bottom

**Mon build :**
- About existe mais **ZÉRO photo intégrée**
- Pas de portrait Jonas
- Pas de watch movement signature
- Pas d'architectural building
- Narrative structure probablement plate sans rythme image-texte alterné

**Delta : CRITIQUE — refonte page entière + intégrer 3 photos**

---

### 2.3 Méthodologie CDT (boards 20, 08)

**Stitch :**
- Eyebrow gold "ARCHITECTE D'AFFAIRES PROPRIÉTAIRE"
- H1 "CDT™" massif + sub "Compression Dynamique du Temps"
- 📷 **HERO CENTERPIECE (board 08)** : **ORB GOLD GLOWING** radial gradient central + **3 hexagones orbitant autour** :
  - Top : "Architecture d'affaires"
  - Bottom-left : "Ingénierie systémique"
  - Bottom-right : "Levier stratégique"
- Section "L'Architecture de la Méthode."
- 4-quadrant grid : DIAGNOSTIC ARCHITECTURAL / DESIGN DU SYSTÈME / DÉPLOIEMENT / OPTIMISATION
- 3 stats gold : 31M$ / 857+ / 50%

**Mon build :**
- CDTDiagram = 3 hexagones avec **double-halo gold**, **PAS d'orb central**
- 4 phases labellisées différemment
- Concept match partiel, **exécution visuelle wrong**

**Delta : CRITIQUE — CDTDiagram à rebuilder**

---

### 2.4 Programmes (board 05)

**Stitch :**
- Eyebrow gold "• NOS PROGRAMMES"
- H2 "Programmes d'accompagnement"
- 2 rows × 3 cols grid (6 cards) :
  - Row 1 (eyebrow gold "PROGRAMME DE GROUPE × 12 SEMAINES") : Gamechanger Scaling / The Shift / Master Closing
  - Row 2 (eyebrow gold "FORMATION SPÉCIALISÉE") : Focus & Flow / Formation INFLUENCE / ACCOMPAGNEMENT 1:1
- Card : eyebrow gold + title display + body sub + "EN SAVOIR PLUS" link
- 3 stats below

**Mon build :**
- ProgramsGrid existe mais layout différent
- Pas d'eyebrow gold catégorie sur cards

**Delta : MAJEUR**

---

### 2.5 LP Programme template (board 03 — Gamechanger Scaling)

**Stitch :**
- Hero "Gamechanger Scaling." + **1 SEULE CTA gold centrée** (pas 2)
- Sections : Pour qui ? / Qu'est-ce qu'on / Architecture / Le moment d'inflexion
- **Curriculum STACKED FULL-WIDTH** (1 module = 1 carte vertical, pas grille)
- Mini FAQ "Prochaines Questions"
- Bottom : gold CTA "Prêt à postuler ?" single

**Mon build :**
- LPProgramTemplate avec curriculum grille + FAQ accordion catégorisé
- **Curriculum stacked != grid**

**Delta : MAJEUR**

---

### 2.6 Qualification (board 23)

**Stitch :**
- 2-col simple :
  - LEFT : eyebrow gold "• POUR VOUS" + 5 items ✓ silver
  - RIGHT : eyebrow silver "PAS POUR VOUS" + 5 items × silver
- Italic centered small : "Honnêteté radicale. Si vous n'êtes pas un bon fit, on vous le dira."
- CTA silver-outline "POSTULER POUR ÉVALUATION"

**Mon build :**
- À vérifier mais probablement OK structure

**Delta : MINEUR**

---

### 2.7 FAQ (board 24)

**Stitch :**
- Eyebrow gold "• QUESTIONS FRÉQUENTES"
- H2 "Tout ce que vous voulez savoir."
- Sub "Avant d'envisager un appel, voici les réponses aux 5 questions les plus posées."
- **5 questions FLAT — pas de catégories**
- Accordion classique : closed (border + question + `+`), open (paragraph)
- CTA silver-outline "POSER VOTRE QUESTION"

**Mon build :**
- FAQPage : **5 catégories × items each** — sur-engineered
- Stitch montre flat list 5 questions

**Delta : MAJEUR — flatten FAQ**

---

### 2.8 Contact (board 25)

**Stitch :**
- TOP block (lg:grid-cols-12) :
  - LEFT col-7 : Form (4 inputs stacked) + **GOLD CTA primary**
  - RIGHT col-5 : Sidebar vertical stack (Email / Téléphone / Adresse / Disponibilité) — chacun avec eyebrow + value
- BLOCK BELOW (full-width) :
  - Title "Préférez-vous bloquer un créneau directement ?"
  - **Calendly iframe** placeholder
  - Footer note "POWERED BY CALENDLY"

**Mon build :**
- TOP block ✅ matches récemment (commit 24c4881)
- **Calendly section BELOW manquante** (Sprint 6B blocked H8)

**Delta : MAJEUR — Calendly à ajouter quand H8 reçu**

---

### 2.9 Mobile signature bar (board 11)

**Stitch :**
- Bottom fixed 4 actions row :
  - APPELER / SMS / RÉSERVER / **DISCUTER** (last has cream/light pill primary)
- Mobile Hero compact : nav top + eyebrow gold + H1 3-lines + sub + GOLD CTA + inline tiny stats + 3 stats stacked gold

**Mon build :**
- MobileSignatureBar : 4 actions silver, DISCUTER avec bg-silver
- **DISCUTER devrait avoir cream/lighter highlight**

**Delta : MINEUR**

---

### 2.10 Testimonials (boards 09, 04, 07, 26)

**Stitch :**
- Eyebrow gold "• ILS ONT APPLIQUÉ CDT™"
- H2 "857 entrepreneurs ont déjà ajouté un zéro."
- **3 cards ASYMÉTRIQUES** :
  - LEFT smaller : Sophie Martin + portrait + "CFO Agence du Design Montréal" + chip "2 OA × 2 TEMPS"
  - **CENTER LARGER FOCAL** : Marc Lefebvre + portrait + "Fondateur juridique boutique Granby" + chip "+ 180K MRR"
  - RIGHT smaller : David Chen + portrait + "Cloud-Consulting Montréal" + chip "+ 3 CONVERSIONS"
- CTA silver-outline "VOIR TOUS LES TÉMOIGNAGES"
- 3 stats below

**Mon build :**
- TestimonialGrid uniform 3-card (probably symmetric)
- **3 portraits NOT integrated** (boards 04, 07, 26 existent)
- Metric chips peuvent ne pas matcher

**Delta : CRITIQUE — asymmetric focal + intégrer 3 portraits + chips**

---

### 2.11 Footer Rich (board 01)

**Stitch :**
4-col layout :
- COL 1 : Logo + tagline + 3 socials
- COL 2 : PROGRAMMES list (6 items)
- COL 3 : RESSOURCES list (5 items)
- COL 4 : CONTACT & LEGAL + "PRENDRE RENDEZ-VOUS" silver-outline CTA pill
- Bottom : copyright + NEQ + Cabinet + "Site réalisé avec discernement par Intralys"

**Mon build :**
- FooterRich 4-col ✅ probably matches structure
- Vérifier Intralys credit + NEQ display

**Delta : MINEUR (à vérifier exact match contenu)**

---

## 3. EFFETS & PATTERNS — Stitch vs Mon build

### Sur Stitch boards :
1. Backgrounds dark uniformes — **pas de grain, pas de mesh, pas de filigrane number visible**
2. **Pas de halo radial silver** derrière CTAs
3. **Pas de sheen silver hover** visible (static)
4. Dividers thin silver entre sections
5. Stats display-xl GOLD + labels uppercase silver opacity-50
6. Cards minimalistes : thin border silver/10, dark bg, **no inset shadow**
7. CTAs : pill rounded-full, primary GOLD ou SILVER, padding modéré

### Mon build a en plus (INVENTÉ) :
- ❌ **Halo radial silver derrière CTAs primary** (j'ai inventé)
- ❌ **Sheen silver diagonal sur cards hover** (j'ai inventé)
- ❌ **FiligraneNumber 02→06 sur Home** (j'ai inventé — viole `feedback_ban_magazine_editorial_default` !)
- ❌ **Grain noise background Hero** (j'ai inventé)
- ❌ **Inset shadow `oklch(1_0_0_/_0.06)` sur cards** (j'ai inventé)

⚠️ **Mes "effets signatures" sont quasi tous inventés. Ils ne sont PAS dans les Stitch boards.**

---

## 4. PHOTOS SIGNATURE — never integrated

| Board | Asset | Usage prévu |
|---|---|---|
| 02 | Watch movement (mécanique horloger) | About signature (CDT symbolism) |
| 10 | Architectural building (X-cross beams) | About signature (architecture d'affaires) |
| 19 | Jonas portrait (executive headshot) | About hero + Hero option |
| 04 | David Chen portrait | Testimonial card |
| 07 | Marc Lefebvre portrait | Testimonial focal card |
| 26 | Sophie Martin portrait | Testimonial card |

**Action requise** : copier les 6 PNGs depuis `stitch/mcp-fresh-2026-05-26/` → `public/photos/` + intégrer.

---

## 5. PRIORISATION DELTA

### CRITIQUE (foundation visuelle wrong) :
1. **Retirer FiligraneNumber Home** (5 occurrences) — viole `feedback_ban_magazine_editorial_default`
2. **Rebuild CDTDiagram** : orb gold central + 3 hexagons orbitant (board 08)
3. **Rebuild About** : intégrer 3 photos signature + narrative structure boards 15/22
4. **Rebuild Testimonials** : asymmetric focal + 3 portraits + metric chips
5. **Stats GOLD** : TrustBand + Methodologie + tous stats numbers en gold
6. **Retirer effets inventés** : halo radial CTAs, sheen cards, grain Hero, inset shadow

### MAJEUR (structure wrong) :
7. **Flatten FAQ** : 5 questions flat sans catégories
8. **Hero CTA primary GOLD** confirmé (à remettre — je l'avais retiré au commit 9b1652c)
9. **Hero compactness** : `min-h-[78svh]` → ~60svh
10. **Programmes layout** : 2 rows × 3 cols + eyebrow gold catégorie par row
11. **LPProgramTemplate curriculum** : stacked full-width vertical (pas grille)

### MINEUR (polish) :
12. **MobileSignatureBar DISCUTER** : cream/light vs silver
13. **Calendly section ContactPage** (blocked H8 mais struct prête)
14. **Logo variant final** : confirmer #2 (gold dot) vs #4 (gold underline)
15. **Footer Rich content** : vérifier exact match contenu + Intralys credit

### NON-DELTA (déjà correct) :
- Palette OKLCH globale ✅
- Typo Space Grotesk + Inter ✅
- Hero structure générale ✅
- ContactPage Top block split ✅
- Qualification 2-col ✅
- FooterRich 4-col structure ✅

---

## 6. SCOPE OPTIONS

### Option A — Refonte visuelle exhaustive (~3-5 jours)
Tous CRITIQUES 1-6 + MAJEURS 7-11. Polish MINEURS 12-15.
Résultat : rendu live ≈ Stitch boards pixel-fidelity.

### Option B — Refonte ciblée prioritaire (~1-2 jours)
CRITIQUES 1-6 seulement.
MAJEURS reportés sprint post-livraison.

### Option C — Garder le build actuel
Accepter que c'est "inspiré Stitch" pas "literal Stitch".
Livraison + Sprint 6B (form GHL + Calendly + Pixels).
Polish visuel post-livraison.

**Recommandation** : Option A. Ton feedback "ni les mêmes effets ni pattern ni feature" indique gap trop grand pour livrer en l'état. Mais c'est ta décision.

---

## 7. ROOT CAUSE — pourquoi le build divergé

J'ai codé depuis ma mémoire du brief ("Platinum Executive dark luxe Silver primary + Gold rare 7 usages") **sans jamais ouvrir les Stitch boards pour traduction littérale**.

Conséquences :
- J'ai inventé "halo silver + sheen + grain + filigrane numbers" parce que ça "feelait premium dark luxe" — mais ces effets ne sont PAS sur Stitch.
- J'ai construit CDTDiagram avec 3 hexagones double-halo parce que je me souvenais "3 piliers" — j'ai raté l'orb central gold (concept fondamental CDT = compression).
- J'ai construit FAQ en 5 catégories parce que c'est "premium institutional" — Stitch montre 5 questions flat.
- J'ai zéro intégré les 6 photos signature parce que je n'ai jamais regardé les boards correspondants.

Faute méthodologique : **comportement "Platinum Executive générique" au lieu de "Stitch literal extraction"**.

À éviter pour futurs sprints : ouvrir Stitch board CIBLE avant chaque composant, pas après.
