# Hero direction C — Design Spec

**Date** : 2026-05-25
**Sprint** : 1 (UI core + Hero)
**Status** : Approved — ready for implementation plan
**Component scope** : `<Hero />` (sections/) + atomics (`Eyebrow`, `MaskRevealHeading`, `CTAPill`, `ScrollCue`, `StatNumber`) + `<TrustBand />` (sections/)
**Reference visual** : `./stitch/sections/2026-05-25-round1/05-hero-platinum-executive.png` (Stitch board VALIDATED, design system "Platinum Executive Authority")

---

## Goal

Implémenter le composant Hero de la home Jonas Diop selon la direction C validée (typo-led centered + VSL emplacement section 2). Le Hero est LE moment signature du site — première impression, hook conversion. Il doit traduire le positionnement "Platinum Executive Authority" (Dark luxe Silver primary + Gold rare 7 usages stricts) sans tomber dans les anti-patterns AI-generated ou agency-portfolio.

Les atomics créés ici (Eyebrow, MaskRevealHeading, CTAPill, ScrollCue, StatNumber) sont réutilisables sur les 16 autres pages de l'écosystème — c'est la fondation visuelle Sprint 1.

---

## Decisions tranchées (brainstorm 2026-05-25)

| # | Sujet | Décision | Rationale |
|---|---|---|---|
| 1 | Eyebrow ornement | • gold dot signature (6×6px rounded-full, gap 0.5em) | Cohérent avec brief "composants signature" cross-Jonas. Custom controllable. Pattern réutilisable About/CDT/LPs. |
| 2 | H1 entrance animation | Mask reveal vertical (overflow:hidden + translateY 100%→0, 800ms ease-out-expo) | Effet "horloger luxe" (Patek-style). Anti-AI-look (le word-by-word stagger est devenu un anti-pattern). |
| 3 | CTA primary halo | Hover-only gold-glow box-shadow + scale 1.02, 280ms | Sobriété idle + signature au survol. Anti-pattern "neon gaming permanent" évité. |
| 4 | Scroll cue | Mini chevron 16px silver-dim opacity 0.6, bottom-center, breathe loop (scale 1↔1.05, 2s) | Signal discreet sans tomber dans "instructional tutorial". Click smooth-scroll vers section 2. |
| 5 | CountUp stats | 1.8s ease-out-expo + IntersectionObserver threshold 0.4 + run once | Dramatic mais pas overdone. Run once = anti-bug `useCountUp startTsRef reset` documenté mémoire EGSF. |

Décisions évidentes (pas re-débattues) :
- **Hero height** : `100vh` desktop / `min-h-svh` mobile (safe-area iOS). Board full-viewport l'impose.
- **VSL section 2** : placeholder Sprint 1 (carte 16:9 dark "VSL bientôt"). Vrai embed Sprint 2.
- **Mobile H1 wrap** : `clamp(2.5rem, 1.5rem + 4.5vw, 6rem)` fait le job, naturellement 3-4 lignes mobile.

---

## Architecture / Component breakdown

### Component tree

```
src/components/
├── ui/                              # Atomics réutilisables cross-site
│   ├── Eyebrow.tsx                  # Label uppercase + optional gold dot signature
│   ├── MaskRevealHeading.tsx        # H1/H2/H3 avec mask reveal vertical animation
│   ├── CTAPill.tsx                  # Pill button (gold-primary / silver-secondary / silver-outline)
│   ├── ScrollCue.tsx                # Mini chevron breathe + smooth scroll
│   └── StatNumber.tsx               # CountUp number avec suffix + label
└── sections/
    ├── Hero.tsx                     # Compose Eyebrow + MaskRevealHeading + Sub + CTAs + ScrollCue
    └── TrustBand.tsx                # Compose 3× StatNumber horizontaux

src/hooks/
├── useCountUp.ts                    # IntersectionObserver + RAF count loop + reduced-motion bypass
├── useMaskReveal.ts                 # Trigger H1 mask animation on mount
└── useSmoothScroll.ts               # Lenis-based smooth scroll to anchor

src/lib/motion/
└── presets.ts                       # Easings + durations exports (ease-out-expo, ease-out-cubic, durations)
```

### Atomic units — responsibilities

**`<Eyebrow goldDot? children />`**
- Props : `goldDot?: boolean` (default true), `children: ReactNode`, `className?: string`
- Renders : `<span>` avec `text-eyebrow uppercase tracking-widest text-silver` + conditional `<span class="dot">` 6×6 rounded-full bg-gold mr-2
- Used : Hero + About + CDT + tous LPs + Footer (eyebrows partout)

**`<MaskRevealHeading as="h1|h2|h3" delay={0} children />`**
- Props : `as: 'h1' | 'h2' | 'h3'`, `delay?: number` (ms before animation), `children: ReactNode`
- Renders : `<Heading>` avec `text-hero/h1/h2`, wrapped in `overflow-hidden` div + inner `<span>` qui translateY de 100% → 0 sur 800ms ease-out-expo
- Respects `prefers-reduced-motion` → skip animation, show final state immediately
- Used : Hero H1 + About H1 + CDT H1 + LPs H1 (signature pattern)

**`<CTAPill variant="..." href? onClick? children />`**
- Props : `variant: 'gold-primary' | 'silver-secondary' | 'silver-outline'`, `href?: string` (TanStack Link if provided), `onClick?: () => void`, `children: ReactNode`
- Renders :
  - `gold-primary` : `bg-gold text-base px-md py-sm rounded-pill font-display tracking-wider hover:shadow-gold-glow hover:scale-[1.02]`
  - `silver-secondary` : `bg-transparent border border-silver-dim text-silver px-md py-sm rounded-pill font-display tracking-wider hover:border-silver hover:bg-silver/5`
  - `silver-outline` : (Sprint 2+, variante footer/nav)
- Auto wraps in `<Link>` if href provided, else `<button>`
- Transitions : `transition-all duration-base ease-out-cubic`
- Used : Hero CTAs + Final CTA section + Navbar CTA + Pricing CTAs

**`<ScrollCue href />`**
- Props : `href: string` (anchor like `#methodologie`)
- Renders : `<button>` absolute bottom-md left-1/2 -translate-x-1/2, contains `<ChevronDown />` 16px silver-dim opacity 0.6
- Animation : `@keyframes breathe { 0%,100% { transform: scale(1) }, 50% { transform: scale(1.05) } }` 2s ease-in-out infinite
- Hover : opacity 0.6 → 1
- onClick : smooth-scroll vers `href` via `useSmoothScroll` hook (uses Lenis)
- aria-label : "Faire défiler vers la méthodologie" (i18n via useT)

**`<StatNumber value suffix? label />`**
- Props : `value: number` (target final), `suffix?: string` (e.g., "+", "M$+", " ANS"), `label: BilingualLax<string>`
- Renders : 
  - `<span class="text-stat-number">` (giant, `text-gold` color, ~36-44px via clamp)
  - `<span class="text-eyebrow uppercase tracking-widest text-silver-dim">` (label below)
- Logic : `useCountUp(value, { duration: 1800, threshold: 0.4 })` returns current animated value
- Triggers : on-scroll-into-view (IntersectionObserver), run once, respects reduced-motion

### Home page composition (Sprint 1 scope)

L'ordre des sections sur `/` (et `/en`) en Sprint 1 :

```tsx
// src/routes/index.tsx (FR home, Sprint 1 final state)
<>
  <Hero />                                            {/* full-viewport, hero direction C */}
  <VslPlaceholderSection id="methodologie" />         {/* placeholder VSL Sprint 1, vrai embed Sprint 2 */}
  <TrustBand />                                       {/* CountUp stats, IntersectionObserver triggers */}
</>
```

Le `<VslPlaceholderSection>` :
- Sert d'**anchor target** pour le smooth-scroll (`#methodologie`) déclenché par CTA secondary et ScrollCue
- Visuel placeholder : carte 16:9 ratio, bg dark, border silver-subtle, texte center "VSL bientôt disponible" + petit play icon silver-dim
- Min-height = 60vh pour garder le scroll visible
- Sera remplacé par vrai embed Vimeo/Wistia en Sprint 2

Sections complémentaires (ProgramsGrid, TestimonialGrid, FinalCTA, Footer) = Sprint 2 (Task PLAN-TECHNIQUE Sprint 2).

### Sections — composition

**`<Hero />`** (sections/)
```tsx
<section className="hero min-h-svh flex flex-col items-center justify-center text-center px-hero relative">
  <Eyebrow goldDot>{t({ fr: "Architecte d'affaires", en: "Business Architect" })}</Eyebrow>
  <MaskRevealHeading as="h1" delay={400}>
    {t({ fr: "Ajouter un zéro à votre chiffre d'affaires.", en: "Add a zero to your revenue." })}
  </MaskRevealHeading>
  <p className="hero-sub text-body-lg text-secondary max-w-content text-pretty mt-md">
    {t({ fr: "Architecture d'affaires & scaling stratégique pour entrepreneurs ambitieux.", en: "..." })}
  </p>
  <div className="hero-ctas flex gap-sm mt-lg flex-col sm:flex-row">
    <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
      {t({ fr: "Prendre rendez-vous", en: "Book a call" })} <ArrowRight />
    </CTAPill>
    <CTAPill variant="silver-secondary" onClick={() => smoothScrollTo('#methodologie')}>
      {t({ fr: "Découvrir la méthode CDT™", en: "Discover the CDT™ method" })}
    </CTAPill>
  </div>
  <ScrollCue href="#methodologie" />
</section>
```

**`<TrustBand />`** (sections/)
```tsx
<section className="trust-band py-xl border-y border-subtle" role="region" aria-label={t({ fr: "Chiffres clés", en: "Key figures" })}>
  <div className="container grid grid-cols-1 md:grid-cols-3 gap-lg">
    <StatNumber value={857} suffix="+" label={{ fr: "Entrepreneurs accompagnés", en: "Entrepreneurs guided" }} />
    <StatNumber value={31} suffix="M$+" label={{ fr: "Généré pour nos clients", en: "Generated for our clients" }} />
    <StatNumber value={15} suffix=" ANS" label={{ fr: "D'expertise stratégique", en: "Of strategic expertise" }} />
  </div>
</section>
```

---

## Animation choreography (entrance sequence)

```
t=0ms      Page mount
           - All elements opacity:0 (or H1 behind translateY 100% mask)
           - prefers-reduced-motion: reduce → skip all, show final state

t=200ms    Eyebrow fade-in + slide-up subtle (translateY 8px → 0, opacity 0 → 1, 400ms ease-out-cubic)

t=400ms    H1 MaskReveal begins
           - Inner span translateY 100% → 0
           - 800ms cubic-bezier(0.16, 1, 0.3, 1) (ease-out-expo)
           - Outer overflow:hidden creates the curtain effect

t=900ms    Sub-headline fade-in (opacity 0 → 1, 500ms ease-out-cubic)

t=1100ms   CTAs cascade fade-in-up
           - Primary : translateY 12px → 0 + opacity 0 → 1, 400ms ease-out-cubic
           - Secondary : same animation, delay 100ms after primary

t=1400ms   ScrollCue fade-in (opacity 0 → 0.6, 400ms)
           - Then start breathe loop (scale 1 ↔ 1.05, 2s ease-in-out infinite)

[on scroll → TrustBand 40% visible]
           - CountUp stats animation begins
           - Per-stat : 0 → final value over 1800ms ease-out-expo
           - Run ONCE per page-load (no reset on re-entry, avoids EGSF bug)
           - Respects reduced-motion → show final value instantly
```

Total entrance budget : ~1.4s avant que tout soit présent. Acceptable LCP (Hero H1 visible at t=400ms+800ms = 1.2s même avec animation).

---

## Mobile behavior

- **Hero height** : `min-h-svh` (safe-area iOS notch + bottom bar)
- **H1** : `clamp(2.5rem, 1.5rem + 4.5vw, 6rem)` → naturellement 3-4 lignes mobile (320-640px), 2 lignes tablet (640-1024px), 2 lignes desktop (1024px+)
- **CTAs** : `flex-col gap-sm` < `sm:` breakpoint (640px), `flex-row` au-dessus. Largeur 100% mobile vs auto desktop
- **ScrollCue** : présent mobile aussi (opacity 0.5 plus discreet), z-index garantit pas masqué par les CTAs si overlap
- **TrustBand** : `grid-cols-1 md:grid-cols-3` → 3 stats stackées verticalement mobile, gap-md
- **Padding** : `--space-hero` = `clamp(var(--space-lg), 8vw, var(--space-2xl))` horizontal, génère breathing room fluide

---

## Accessibility

- `<h1>` unique sur la page (validé par Lighthouse + axe-core)
- ScrollCue `<button>` avec `aria-label` traduit FR/EN via useT
- CTAs : texte présent (pas icône seule) donc pas besoin d'`aria-label` supplémentaire. ArrowRight icon dans CTA primary est decoratif, `aria-hidden="true"`
- Focus visible : silver outline 2px (déjà dans `:focus-visible` globals.css)
- TrustBand : `role="region"` + `aria-label="Chiffres clés"` (i18n)
- CountUp : respecte `prefers-reduced-motion` → affiche valeur finale direct, `aria-live="polite"` pour SR
- MaskReveal : respecte `prefers-reduced-motion` → animation skipped, texte affiché en état final
- Hero section : `role="banner"` (implicite avec `<section>` qui devrait être `<header>` ? Vérifier sémantique — probablement `<section aria-label="Hero">` est plus correct)
- Contraste : H1 ivory sur dark base = 17:1 (AAA), sub silver sur dark = 7.5:1 (AAA), CTAs gold sur dark suffisant + texte CTAs bien lisible (gold bg + dark text contraste fort)

---

## Interactions

- **CTA primary "PRENDRE RENDEZ-VOUS →"** → `<Link to={ROUTES.contact[locale]}>` (TanStack)
  - Hover : box-shadow gold-glow soft + scale 1.02 (280ms)
  - Click : navigate to `/contact` (FR) ou `/en/contact` (EN)
- **CTA secondary "DÉCOUVRIR LA MÉTHODE CDT™"** → smooth scroll vers `#methodologie` (section 2 même page)
  - Hover : border silver-dim → silver + bg silver/5% (280ms)
  - Click : `useSmoothScroll` Lenis-based scroll vers anchor
- **ScrollCue** → identique CTA secondary (smooth scroll vers `#methodologie`)
- **Hero section** entrance triggered au mount via `useMaskReveal` hook
- **TrustBand** entrance triggered via IntersectionObserver dans `useCountUp`

---

## Testing strategy

### Vitest unit tests (mandatory, TDD)

- `tests/components/ui/Eyebrow.test.tsx` — props rendering, goldDot variant, className passthrough, i18n via useT
- `tests/components/ui/CTAPill.test.tsx` — 3 variants render distinct classes, href vs onClick branching, hover state classes
- `tests/components/ui/StatNumber.test.tsx` — props rendering, label i18n, final value display
- `tests/components/ui/ScrollCue.test.tsx` — aria-label i18n, click triggers smooth scroll (mock useSmoothScroll)
- `tests/components/ui/MaskRevealHeading.test.tsx` — renders heading semantic correct, applies mask classes, respects reduced-motion (mock matchMedia)
- `tests/hooks/useCountUp.test.ts` — count starts at 0, ends at value, respects duration + easing, IntersectionObserver mock trigger, reduced-motion bypass

### Vitest integration

- `tests/components/sections/Hero.test.tsx` — full Hero render, i18n switch FR/EN, all atomics present, CTAs href correct per locale
- `tests/components/sections/TrustBand.test.tsx` — 3 StatNumber rendered, role + aria-label present

### a11y axe-core

- `tests/a11y/hero.test.ts` — axe scan sur Hero isolé + TrustBand isolé, 0 violations
- `tests/a11y/dev-components.test.ts` — axe scan sur `/dev-components` page complète

### Manual testing

- Page `/dev-components` (privée, non listée dans nav) liste tous les atomics + sections en isolation
- Test reduced-motion : DevTools → Rendering → emulate `prefers-reduced-motion: reduce` → animations skipped
- Test FR/EN switch sur Hero via `/` ↔ `/en`
- Test mobile responsive 320/375/640/1024/1920px
- Test Lighthouse Perf sur Home avec Hero (cible : 95+ desktop, 90+ mobile)

---

## Out of scope (deferred to later sprints)

- **VSL embed réel** : Sprint 2 (Hero adjacent section avec video embed Vimeo/Wistia + lazy load)
- **Logo final** : Sprint 1 placeholder (option 2 wordmark + gold dot du HTML envoyé à Jonas), vrai logo SVG vectorisé quand Jonas confirme choix (H7)
- **Photo Jonas portrait** : pas dans Hero direction C (typo-led, pas image-led). About page (Sprint 3) inclura portrait.
- **HTMLRewriter SSR meta** : Sprint 6 (Schema.org @graph injection via worker, pas dans Sprint 1)
- **Pixel/GA4/Clarity tracking** : Sprint 6 (consent-gated, pas dans Sprint 1)
- **Form GHL real submission** : Sprint 6, CTA primary navigate to `/contact` qui affiche un placeholder form en Sprint 1

---

## Acceptance criteria (DoD)

- ✅ Page `/` affiche le Hero qui match le board Stitch `05-hero-platinum-executive.png` à 95%
- ✅ Animations entrance jouent correctement (mask reveal H1, cascade eyebrow/sub/CTAs/ScrollCue)
- ✅ TrustBand CountUp s'anime au scroll into view (run once)
- ✅ CTAs hover effects fonctionnent (gold halo primary, border secondary)
- ✅ ScrollCue smooth-scroll vers `#methodologie` placeholder
- ✅ `prefers-reduced-motion: reduce` respecté (animations skipped)
- ✅ Switch FR/EN fonctionne sur Hero (eyebrow, H1, sub, CTAs, stats labels, ScrollCue aria-label)
- ✅ Mobile responsive 320-1920px sans débordement ni texte cropped
- ✅ Lighthouse Perf 95+ desktop / 90+ mobile sur Home avec Hero
- ✅ axe-core 0 violations sur Hero + TrustBand
- ✅ Tous tests Vitest pass (atomics unit + sections integration + a11y)
- ✅ Page `/dev-components` accessible, montre tous atomics en isolation
- ✅ Acceptance Rochdi via Slack screenshot (et Jonas si possible)

---

## References

- Stitch board : `./stitch/sections/2026-05-25-round1/05-hero-platinum-executive.png` (FINAL ref)
- Stitch board variant : `./stitch/moodboards/2026-05-25-round1/03-hero-section.png` (early, scroll cue + stats anciens)
- BRIEF-FINAL : `C:/Users/rochdi/jonas-diop-scan/BRIEF-FINAL.md` section 3 Design System + section 6 Composants signature
- PLAN-TECHNIQUE : `C:/Users/rochdi/jonas-diop-scan/PLAN-TECHNIQUE.md` Sprint 1 bloc embedded
- CLAUDE.md (auto-loadé) : `./CLAUDE.md` skills × unicité Jonas
- Hard rules : `feedback_responsive_clamp_first`, `feedback_text_stability_modern_css`, `feedback_ban_magazine_editorial_default`
- Bug avoidance : `feedback_useCountUp_startTsRef_reset_bug` (EGSF) → run once pattern
