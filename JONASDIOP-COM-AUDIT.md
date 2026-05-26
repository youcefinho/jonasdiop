# JONASDIOP.COM — Audit Live · 2026-05-26

Audit du site live de Jonas Diop à `https://jonasdiop.com`. Capture Playwright
1440×900 (desktop) + 390×844 (mobile) + extraction DOM (computed styles).

Source pages auditées :
- `/` (Home) — `jonasdiop-com-desktop-fullpage.png`
- `/about` — `jonasdiop-com-about-fullpage.png`
- `/contact` — `jonasdiop-com-contact-fullpage.png`
- Mobile viewport — `jonasdiop-com-mobile-viewport.png`

---

## 🚨 Finding #1 : le site est un TEMPLATE Framer brut, peu customisé

Le site actuel n'est PAS un build custom. C'est le **template Framer "CoachVerse"** (revendu à `buy.polar.sh/polar_cl_q0Pn0MakHT1eK40eIVeMQ8ZRiwjCknwbNsrVr39iTZN`).

**Évidence :**
- Logo top-left : **"CoachVerse"** (script font cursive), pas "Jonas Diop"
- CTA top-right : **"Get Template Now"** → pointe vers Polar.sh (template store)
- Hero H1 : **"PROVEN PATH TO SCALE AGENCY"** (placeholder template, pas le brief Jonas)
- About H1 : **"The architects of agency's growth"** (template copy générique)
- Contact embed : **Cal.com** avec timezone `Africa/Lagos` (pas Montréal/Toronto)
- 8 logos demo brands : Catalog / Sisyphus / Command+R / Hourglass / Circooles / Layers (= template marketing brands)
- Footer credit : **"© 2025 CoachVerse All rights reserved"**

**Customisation faite par Jonas (mince) :**
- Meta `<title>` + `description` traduits en FR (méthode CDT™ mentionnée)
- Photo "About" remplacée par un portrait noir/blanc (peut-être Jonas, peut-être template)

**Conclusion** : on n'extrait pas la "marque Jonas" depuis ce site. On extrait le template CoachVerse — utile pour comprendre les patterns que Jonas a probablement vus et appréciés en achetant ce template.

---

## 🎨 Palette extraite (DOM computed styles)

14 couleurs uniques sur la page :

| Slot | RGB | Hex | Usage observé |
|---|---|---|---|
| Base | rgb(10, 10, 10) | `#0a0a0a` | body bg |
| Elevated | rgb(20, 20, 20) | `#141414` | cards |
| Elevated alt | rgb(31, 31, 31) | `#1f1f1f` | cards plus sombres |
| Carbon | rgb(41, 41, 41) | `#292929` | borders |
| Outline | rgb(51, 51, 51) | `#333333` | borders subtle |
| Text primary | rgba(245, 245, 245, 0.96) | `#f5f5f5` | titles + body |
| Text secondary | rgb(204, 204, 204) | `#cccccc` | sub copy |
| Text tertiary | rgb(138, 138, 138) | `#8a8a8a` | hints |
| Border white/32 | rgba(255, 255, 255, 0.32) | translucent | dividers |
| White full | rgb(255, 255, 255) | `#ffffff` | accent |
| **Gold/Amber** | **rgb(225, 157, 20)** | **`#e19d14`** | accent CTAs + accents |
| Link blue (default) | rgb(0, 0, 238) | `#0000ee` | unstyled links |

**Comparaison vs notre build :**
- bg-base **identique** (#0a0a0a) ✅
- bg-elevated chez Jonas = `#141414` / chez nous = `#262626` (post-sprint contrast)
- text-primary **identique** (#f5f5f5) ✅
- **Gold chez Jonas = `#e19d14` (orange/amber vif)** vs **nous = `#c9a572` (warm gold doux)**.
  → Jonas a un gold plus orange/agressif (proche orange amber)
  → Nous avons un gold plus champagne/refined

---

## 🔤 Fonts utilisées (extraites Framer asset URLs)

```
"Times New Roman" (fallback)
sans-serif (fallback)
Satisfy, sans-serif                          ← logo script "CoachVerse"
"Inter Display", "Inter Display Placeholder" ← body text
"Space Grotesk", "Space Grotesk Placeholder" ← display titles ✅ MATCH OURS
"General Sans", "General Sans Placeholder"   ← alt display
```

**Comparaison vs notre build :**
- Space Grotesk display ✅ identique
- Inter Display (Jonas) ≈ Inter Variable (nous) → quasi-identique
- General Sans en plus chez Jonas — qu'on n'a pas
- Satisfy script pour le logo "CoachVerse" — on n'en a pas besoin (pas notre logo)

---

## 🏗 Architecture pages (nav extraite)

```
Home                  → /
Solution              → /#benefits (anchor)
Success Stories       → /case-studies
About                 → /about
Pricing               → /#pricing (anchor)
Contact               → /contact
[Get Template Now]    → polar.sh (template store)
```

**5 pages publiques + 2 anchors** sur la home (#benefits + #pricing).

**Comparaison vs notre build (10 pages publiques) :**
- ✅ Home / About / Contact présents chez les deux
- ✅ Pricing = chez Jonas anchor home / chez nous = section ProgramsGrid + 6 LPs dédiés
- ❌ Pas de Méthodologie CDT™ dédiée chez Jonas (CDT™ juste mentionné dans meta)
- ❌ Pas de FAQ standalone
- ❌ Pas de Ressources/Blog
- ❌ Pas de Podcast/Évènements/Livre
- ✅ Success Stories ≈ notre /temoignages

**Notre build couvre 2× plus de surface SEO + content.**

---

## 🧱 Sections HOME (par data-framer-name extraction)

Ordre des sections sur jonasdiop.com Home :

1. **Hero** — H1 "PROVEN PATH TO SCALE AGENCY" + shimmering effect + CTA + social (Avatars)
2. **Trusted by** — 8 logos demo template (Catalog/Sisyphus/Command+R/Hourglass/Circooles/Layers)
3. **Struggling to Get Clients?** — "THE PROBLEM" eyebrow + 4 cards (Unpredictable Clients / Inconsistent Sales / Endless Outreach / Burnout & Stress) + 4 solutions cards (Automated Lead Generation / Conversion-Focused Website / Inbound Client Qualification / Scalable Client Acquisition)
4. **What If Clients Came to You?** — punchline single line
5. **Everything you need to Scale** — proven business system desc
6. **How It Works** — vertical timeline 4 steps avec dots
7. **Why this coaching?** — text + image
8. **Stats** : 50% / 50+ / 50x / 0+ (4 stats row)
9. **Are you a right fit?** — section + arrow
10. **What People Say** — testimonials avec photo + quote card + video
11. **View all Case Studies** — CTA
12. **Simple Pricing, Powerful Results** — pricing tabs
13. **Frequently Asked Questions** — FAQ accordion
14. **Ready to Get More Clients & Scale Your Agency?** — final CTA banner avec testimonial mini-cards
15. **Footer** — 4-col + brand

**Comparaison vs notre build :**

| Section Jonas template | Notre équivalent |
|---|---|
| Hero "Proven Path" | Hero "Ajouter un zéro" ✅ |
| Trusted by 8 logos | (manquant — on a pas de logos clients) |
| Struggling to Get Clients (problem/solution 8 cards) | Pas exactement. On a ProgramsGrid (6 programmes par variant) |
| What If / Everything you need | (Pas d'équivalent direct, on a MethodologieCDTPreview à la place) |
| How It Works 4 steps | Pas inline Home. Page /methodologie-cdt a "4 phases" |
| Why this coaching | AboutPreviewSection ≈ |
| Stats 4 numbers | TrustBand removed, **stats inline Hero (3 numbers)** ✅ |
| Are you a right fit? | Pas inline Home. Page /contact a "Qualification" |
| What People Say | TestimonialGrid asymmetric focal ✅ |
| Simple Pricing | ProgramsGrid (3 variants × cards) ✅ |
| FAQ | FAQHomeSection preview 5 questions + lien /faq ✅ |
| Final CTA banner + testimonial mini | FinalCTASection ✅ |

→ **Notre build a une couverture comparable et même plus riche** (MethodologieCDT preview + Ressources + Podcast en plus).

---

## ✨ Effects/Patterns/Features observés (à inspirer si pertinents)

### EFFETS visuels notables

1. **Shimmering effect sur H1 Hero** (data-framer-name="shimmering") — animation de brillance qui passe sur le titre. **Pattern à considérer** pour notre H1 Hero.
2. **Avatars sociaux empilés** sous le H1 (3 avatars overlap + rating stars + "Top reviews"). **Pas chez nous** — on a déplacé les stats inline à la place.
3. **Video player overlay** avec icon play centré sur thumbnail vidéo. Style premium.
4. **Backdrop blur subtle** sur la navbar sticky (effet glass).
5. **Cal.com embed** avec full calendar grid + time slots (pas Calendly comme on a placeholder).

### PATTERNS de composition

1. **Hero centered + avatars + rating** = social proof at the top, pas en bas
2. **8-card problem/solution grid** (4 problèmes en gauche + 4 solutions en droite) — moins efficient que notre 3-row ProgramsGrid
3. **Vertical timeline 4 steps** avec dots connectés — différent de notre 4-quadrant Methodologie
4. **Pricing tabs** (Annuel/Mensuel toggle) — on a juste affichage statique
5. **Cal.com embed direct sur Contact** — Jonas a wired le calendar live (à clarifier H8)
6. **Footer 4-col + script logo "CoachVerse"** + cursive font Satisfy

### FEATURES techniques observées

1. **Framer hosting** = ils gèrent everything (CDN, fonts, optimisations)
2. **Cal.com integration** native dans le Contact page (15 Min Meeting / Cal Video / timezone configurable)
3. **Polar.sh checkout** pour vendre le template (= eCommerce minimal)
4. **og:image hébergée Framer** : `framerusercontent.com/images/E69NFZVhIOCt5ym0vnYsQRks.png`
5. **Mobile responsive** OK (le hamburger menu et le stack vertical fonctionne)

---

## 🎯 Choses à RETENIR pour notre build

### ✅ À garder (notre build a déjà ces patterns ou plus rich)
- Dark theme + gold accent ✅
- Space Grotesk + Inter ✅
- Hero typo-led centered ✅
- Stats inline ✅
- Testimonial cards ✅
- FAQ accordion ✅
- Final CTA banner ✅

### ⭐ À considérer pour ajouter chez nous (inspirations valides)

1. **Shimmering effect sur H1 Hero** — animation subtile de brillance qui passe sur le titre. Très "premium" et signature template. Possible via CSS `background-clip: text` + `linear-gradient` animé. **Effort : 1h**.

2. **Avatars sociaux sous H1 Hero** — 3 portraits clients overlap + rating stars + microcopy "857+ entrepreneurs accompagnés". Renforce social proof immédiat. **Effort : 1h** (on a déjà 3 portraits testimonials).

3. **Video player overlay** dans le Hero — si Jonas a une vidéo VSL, on a déjà VslPlaceholderSection. À polir si video reçue. **Effort : selon video Jonas**.

4. **Cal.com vs Calendly** — H8 pending mais Jonas utilise déjà Cal.com (pas Calendly). À swap notre placeholder. **Effort : 30min quand creds reçus**.

5. **Pricing tabs** Annuel/Mensuel — pertinent pour Cash & Scale ou Consultations Privées si plans récurrents. **Effort : 2h** (mais besoin pricing data réel).

### 🚫 À PAS reproduire (anti-patterns)

1. **"PROVEN PATH TO SCALE AGENCY"** = positionnement template générique. Notre "Architecte d'affaires + CDT™" est unique et brand-distinctive. **Garder le nôtre**.

2. **8 logos "Trusted by" demo brands** — Jonas n'a pas vrais logos clients. On n'a pas non plus. **Skip cette section** tant qu'on n'a pas de logos clients réels.

3. **Gold orange agressif #e19d14** — trop saturé, fait template. **Garder notre champagne gold #c9a572** plus refined Platinum Executive.

4. **Logo script Satisfy "CoachVerse"** — cursif type marriage card. Pas du tout "Architecte d'affaires" sober. **Notre wordmark Space Grotesk uppercase = correct**.

5. **Africa/Lagos timezone Cal.com par défaut** — Jonas a oublié de set Montréal. **Note pour H8 quand on wire** : timezone = America/Toronto.

6. **"Get Template Now" → polar.sh** — évidemment à drop (vente du template).

---

## 🔬 Verdict global

Le site `jonasdiop.com` actuel est un **template Framer CoachVerse à 90% par défaut**. Jonas a customisé uniquement les meta tags FR + (possiblement) la photo About. Tout le reste = placeholder template anglais générique "agency growth".

**Notre build custom (Stack B Intralys) :**
- Couvre 10 pages publiques + 6 LPs services dédiés (vs 5 pages chez Jonas)
- Use copy verbatim brief Jonas (Méthodologie CDT™, mission DIOP, FAQ Q1-Q5)
- Photos réelles Jonas (3 reçues today, intégrées)
- Stack performant (101 kB gzip bundle, 420 tests, Cloudflare Workers)
- DA Platinum Executive Authority (silver primary + gold rare) = positionnement consulting premium distinct du template "agency coaching" générique

→ Notre build est **substantiellement meilleur** que jonasdiop.com actuel sur tous les axes (content, brand, tech, SEO, conversion). 3 inspirations valides à intégrer (shimmer H1 + avatars sous Hero + Cal.com embed quand creds).

---

## 📦 Screenshots disponibles

Localisés dans `C:/Users/rochdi/` :
- `jonasdiop-com-desktop-fullpage.png` (1440×~12000)
- `jonasdiop-com-desktop-viewport.png` (1440×900)
- `jonasdiop-com-about-fullpage.png` (1440×~2400)
- `jonasdiop-com-contact-fullpage.png` (1440×~1700)
- `jonasdiop-com-mobile-viewport.png` (390×~3500)
