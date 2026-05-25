# Sprint 2 — Home complète + Footer rich Design Spec

**Date** : 2026-05-25
**Sprint** : 2 (Home complète + Footer rich)
**Status** : Approved — ready for implementation plan
**Reference visuals** :
- `stitch/sections/2026-05-25-round1/15-programmes-section.png` (Programmes grid 3×2)
- `stitch/sections/2026-05-25-round1/14-testimonials-grid.png` (Testimonials grid 3 cards + center elevated)
- `stitch/sections/2026-05-25-round1/16-footer-rich.png` (Footer 4 columns)
- `stitch/sections/2026-05-25-round1/05-hero-platinum-executive.png` (Navbar top reference)

---

## Goal

Compléter la Home Jonas Diop avec : Navbar (desktop + mobile drawer) · ProgramsGrid 6 cards · TestimonialGrid 3 shells · FinalCTA standalone · Footer rich 4 colonnes · Schema.org @graph foundational. À la fin du Sprint 2, le site = complete Home flow conversion-ready (hors copy bulk Sprint 2.5 et intégrations GHL/tracking Sprint 6).

---

## Decisions tranchées (brainstorm 2026-05-25)

| # | Sujet | Décision |
|---|---|---|
| 1 | Testimonials cards | Shells anonymes propres : icon quote silver-dim + label "Témoignage à venir" + disclaimer "En attente d'autorisation client". Aucun nom inventé. Disclaimer pied section H3 pending. |
| 2 | FinalCTA structure | Section dédiée AVANT footer. Footer reste 4 colonnes mais slim (pas de mini-Hero header). |
| 3 | Navbar mobile | Drawer slide-from-right (hamburger top-right, drawer full-screen depuis droite, links uppercase + CTA bottom). |
| 4 | Center testimonial highlight | Border 1px gold/30 + bg-elevated +5% lumin. Subtle frame "preuve sociale phare" sans showcase grossier. |

Évidents (pas redébattus) :
- Programmes data en `src/data/programmes.ts` (typage strict + bilingual via BilingualLax)
- Testimonials data en `src/data/testimonials.ts` (shells initiaux, swap réel quand reçus)
- Schema.org @graph foundational : Organization + Person + WebSite (Sprint 2). FAQPage/Service/Article = sprints ultérieurs.
- Lucide v1 sans brand icons → inline SVG custom (Facebook, Instagram, LinkedIn, X, TikTok, YouTube si présent)

---

## Architecture / Component breakdown

### Component tree

```
src/components/
├── ui/                              # Atomics existants (Sprint 1) + nouveaux
│   ├── (Sprint 1) Eyebrow.tsx
│   ├── (Sprint 1) MaskRevealHeading.tsx
│   ├── (Sprint 1) CTAPill.tsx
│   ├── (Sprint 1) ScrollCue.tsx
│   ├── (Sprint 1) StatNumber.tsx
│   ├── ProgramCard.tsx              # NEW : eyebrow + h3 + desc + CTA link (3 variants : groupe, formation, accompagnement)
│   ├── TestimonialShellCard.tsx     # NEW : quote icon + "Témoignage à venir" + author silhouette + variant center-elevated
│   ├── SocialIcon.tsx               # NEW : inline SVG component (Facebook/Instagram/LinkedIn/X/TikTok)
│   └── LogoWordmark.tsx             # NEW : "JONAS DIOP" wordmark text-based (real SVG vector quand Jonas valide H7)
├── layout/                          # NEW : Navbar + MobileDrawer + Footer
│   ├── Navbar.tsx                   # NEW : sticky top, logo + nav + CTA, scroll-shrink subtle
│   ├── MobileNavDrawer.tsx          # NEW : hamburger trigger + drawer slide-from-right
│   └── FooterRich.tsx               # NEW : 4 columns + bottom bar copyright/NEQ/credit
└── sections/
    ├── (Sprint 1) Hero.tsx
    ├── (Sprint 1) TrustBand.tsx
    ├── (Sprint 1) VslPlaceholderSection.tsx
    ├── ProgramsGrid.tsx             # NEW : 6 ProgramCard composed from programmes.ts data
    ├── TestimonialGrid.tsx          # NEW : 3 TestimonialShellCard (center elevated) + disclaimer
    └── FinalCTASection.tsx          # NEW : eyebrow + H2 + 1 CTA gold + (optional sub-line)

src/data/                            # NEW : structured content
├── programmes.ts                    # NEW : 6 programmes (id, eyebrow, name, desc, link, variant)
└── testimonials.ts                  # NEW : 3 shells initiaux (id, status='pending', sera real array quand reçus)

src/lib/seo/                         # NEW : Schema.org helpers
└── schema.ts                        # NEW : buildSchemaGraph(locale) → Organization + Person + WebSite

src/routes/
├── index.tsx                        # UPDATE : add Navbar + new sections + FinalCTA + Footer
└── en/index.tsx                     # UPDATE : same composition EN
```

### New atomics — responsibilities

**`<ProgramCard variant href title eyebrow description />`**
- Props : `variant: 'groupe' | 'formation' | 'accompagnement'` (eyebrow color/style), `href: string`, `title: BilingualLax<string>`, `eyebrow: BilingualLax<string>`, `description: BilingualLax<string>`
- Renders : card with eyebrow uppercase (silver pour formations, gold dim pour groupe, gold dim pour accompagnement premium), H3 program name, 2-3 lines description, "EN SAVOIR PLUS →" link bottom
- Premium variant (`accompagnement`) : border-gold/30 subtle au lieu de border-silver/15
- Hover : border opacity up + subtle scale 1.01 + sheen silver diagonal

**`<TestimonialShellCard centerElevated? />`**
- Props : `centerElevated?: boolean` (default false). Pas de quote/author content (c'est un shell).
- Renders : Quote icon top (silver-dim 32px), label "Témoignage à venir" uppercase tracking-widest centered, silhouette generic placeholder (rounded-full bg-elevated), "En attente d'autorisation client" subtle below
- `centerElevated=true` : border-gold/30 1px + bg-elevated brighter +5% + scale 1 (pas physically bigger, juste visually distinct)
- Réutilisable plus tard avec vrais contenus (props quote/author/result optional)

**`<SocialIcon name="facebook|instagram|linkedin|x|tiktok|youtube" />`**
- Props : `name` (union string)
- Renders : inline SVG 24px (height/width), text-silver opacity 0.7, hover opacity 1 + scale 1.1
- Each icon = simple custom path SVG (Lucide v1 retired brand icons → inline custom)
- Wrapped in `<a href={url} aria-label="...">` (URL from clientConfig.client.socials[name])

**`<LogoWordmark size="sm|md|lg" />`**
- Props : `size` (mapping to clamp font-size)
- Renders : `<span>` "JONAS DIOP" font-display tracking-tight bold text-primary + small gold dot après le D (signature)
- Sera replacé par vrai SVG logo quand Jonas valide H7

### Layout components

**`<Navbar />`**
- Sticky top (`fixed top-0 left-0 right-0 z-50`)
- Background : `bg-base/80 backdrop-blur-md` (frosted glass premium subtle)
- Layout : `flex justify-between items-center px-md py-sm max-w-wide mx-auto`
- Left : `<LogoWordmark size="md">`
- Center (desktop) : nav links MÉTHODOLOGIE | PROGRAMMES | À PROPOS | RESSOURCES | CONTACT (uppercase tracking-wider text-silver hover:text-primary)
- Right : `<CTAPill variant="silver-outline" href={ROUTES.contact[locale]}>CONSULTATION</CTAPill>`
- Mobile (< md breakpoint) : hide nav links + CTA, show `<MobileNavDrawer />` trigger (hamburger icon top-right)
- Scroll-shrink subtle : py-md initially → py-sm après scroll > 20px (transition 280ms)

**`<MobileNavDrawer />`**
- Trigger : hamburger `<Menu />` icon 24px text-silver top-right
- Open state : drawer slides from right (`translate-x-full → translate-x-0`, 320ms ease-out-expo)
- Drawer content : `fixed top-0 right-0 h-svh w-[85vw] max-w-[400px] bg-elevated z-50 px-md py-xl flex flex-col`
- Inside : Close button top-right (`<X />` icon) + nav links vertically stacked (text-h3 silver, py-sm border-bottom silver/10) + CTA pill bottom
- Backdrop : `fixed inset-0 bg-base/60 backdrop-blur-sm z-40` (close on click)
- prefers-reduced-motion : skip slide animation, instant show/hide
- Focus trap : when open, Tab cycles within drawer (Sprint 7 if not built-in via Radix Dialog)
- a11y : `<dialog>` element or `<div role="dialog" aria-modal="true" aria-label="Menu navigation">`

**`<FooterRich />`**
- 4 columns layout (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg`) :
  - **Col 1** : `<LogoWordmark size="md">` + tagline "Architecte d'affaires." + sub "Architecture systémique pour entrepreneurs ambitieux." + social icons row (6 max)
  - **Col 2** : eyebrow "PROGRAMMES" (silver tracking-widest no dot) + 6 program links (silver hover gold)
  - **Col 3** : eyebrow "RESSOURCES" + Méthodologie CDT™ / Articles / Podcast The Game Changer / Livre (à venir) / Événements
  - **Col 4** : eyebrow "CONTACT & LÉGAL" + email + phone + "Montréal & Worldwide" + small CTA pill silver "PRENDRE RENDEZ-VOUS"
- Bottom bar (separator border-t silver/10 mt-xl pt-md) :
  - Left : © 2026 DIOP Stratégies Internationales · NEQ pending · Cabinet de conseil stratégique
  - Center : Mentions légales · Politique de confidentialité · Conditions d'utilisation (links uppercase tracking-widest text-tertiary)
  - Right : "Made by [Intralys](https://intralys.dev)" credit subtle text-tertiary

### New section components

**`<ProgramsGrid />`**
- Section wrapper : `py-2xl bg-base`
- Container : `max-w-default mx-auto px-md`
- Eyebrow centered : "• NOS PROGRAMMES" (gold dot)
- H2 centered : "Écosystèmes complets d'accompagnement."
- Sub centered : "Programmes de groupe, formations spécialisées et consultations stratégiques privées." (max-w-content)
- Grid : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mt-xl`
- 6 cards from `programmes.ts` mapped via `programmes.map(p => <ProgramCard key={p.id} {...p} />)`
- Bottom link : "Voir tous les programmes en détail →" (silver hover gold) centered mt-lg

**`<TestimonialGrid />`**
- Section wrapper : `py-2xl bg-base relative`
- Container : `max-w-default mx-auto px-md`
- Eyebrow centered : "• ILS ONT APPLIQUÉ CDT™" (gold dot) — note : even with shells, eyebrow shows the section purpose
- H2 centered : "857 entrepreneurs ont déjà ajouté un zéro." (real stat from trust band)
- Sub centered : "Pas de théorie. Du pragmatisme mesurable."
- Grid : `grid grid-cols-1 md:grid-cols-3 gap-md mt-xl items-center`
- 3 TestimonialShellCard, middle one with `centerElevated`
- Disclaimer below grid : `<p className="text-sm text-tertiary text-center mt-lg">{t({ fr: 'Témoignages clients réels disponibles bientôt.', en: 'Real client testimonials coming soon.' })}</p>`

**`<FinalCTASection />`**
- Section wrapper : `py-2xl bg-elevated border-t border-silver/10` (slight bg shift creates visual separator)
- Container : `max-w-content mx-auto px-md text-center`
- Eyebrow centered : "• PROCHAINE ÉTAPE" (gold dot)
- H2 centered (MaskRevealHeading) : "Prêt à ajouter un zéro ?"
- Sub centered : "Appel de qualification gratuit · 30 minutes · Réponse 48h" (silver muted)
- 1 CTA centered : `<CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>RÉSERVER MON APPEL →</CTAPill>`

### Data files

**`src/data/programmes.ts`**
```typescript
import type { BilingualLax } from '@/lib/i18n/types';

export type ProgrammeVariant = 'groupe' | 'formation' | 'accompagnement';

export interface Programme {
  readonly id: string;
  readonly variant: ProgrammeVariant;
  readonly eyebrow: BilingualLax<string>;
  readonly name: BilingualLax<string>;
  readonly description: BilingualLax<string>;
  readonly href: string; // FR canonical, EN computed via ROUTES
  readonly hrefKey: 'services-gamechanger-scaling' | 'services-the-shift' | 'services-master-closing' | 'services-focus-flow' | 'services-cash-scale' | 'services-consultations-privees';
}

export const programmes: readonly Programme[] = [
  {
    id: 'gamechanger-scaling',
    variant: 'groupe',
    eyebrow: { fr: 'Programme de groupe · 12 semaines', en: 'Group program · 12 weeks' },
    name: { fr: 'Gamechanger Scaling', en: 'Gamechanger Scaling' },
    description: { fr: "Le programme intensif pour entrepreneurs entre 6 et 7 chiffres en quête de scaling structurel.", en: 'The intensive program for 6-7 figure entrepreneurs seeking structural scaling.' },
    href: '/services/gamechanger-scaling',
    hrefKey: 'services-gamechanger-scaling'
  },
  // ... 5 more (The Shift, Master Closing, Focus & Flow, Cash & Scale, Consultations Privées)
];
```

(Full 6 entries written in plan.)

**`src/data/testimonials.ts`**
```typescript
export interface TestimonialShell {
  readonly id: string;
  readonly centerElevated?: boolean;
}

export const testimonialShells: readonly TestimonialShell[] = [
  { id: 'shell-1' },
  { id: 'shell-2', centerElevated: true },
  { id: 'shell-3' }
];
```

(Real testimonials shape — Sprint 5+ when received from Jonas H3 — sera : `{id, quote: BilingualLax<string>, author, role, result, photoUrl}`.)

### Schema.org @graph

**`src/lib/seo/schema.ts`**
```typescript
import { clientConfig } from '@/config/clientConfig';
import type { Locale } from '@/lib/i18n/types';

export function buildSchemaGraph(locale: Locale): string {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganization(),
      buildPerson(),
      buildWebSite(locale)
    ]
  };
  return JSON.stringify(graph);
}

function buildOrganization() { /* ... DIOP Stratégies Internationales Inc. */ }
function buildPerson() { /* ... Jonas Diop, founder/architect */ }
function buildWebSite(locale: Locale) { /* ... site, locale inLanguage */ }
```

Injected in `<head>` via `<script type="application/ld+json">{buildSchemaGraph(locale)}</script>` from `__root.tsx`. Worker SSR injection = Sprint 6 (HTMLRewriter). Sprint 2 = client-render via React (still indexed by Google after JS execute).

---

## Animation choreography

- **Navbar** : entrance fade-in 200ms on mount. Scroll-shrink : `py-md → py-sm` transition 280ms on scroll > 20px (window scroll listener, debounced)
- **MobileNavDrawer** : open = translate-x-full → translate-x-0 + backdrop fade-in (320ms ease-out-expo). Close = reverse.
- **ProgramsGrid cards** : on-view stagger fade-in-up (delay per card 80ms cascade)
- **TestimonialGrid cards** : on-view stagger fade-in (less dramatic since shells)
- **FinalCTASection H2** : MaskRevealHeading (reuse Sprint 1 atomic)
- **ProgramCard hover** : border opacity up + subtle scale 1.01 + sheen silver diagonal (Sprint 1 pattern)
- **TestimonialShellCard center** : subtle gold pulse on the border opacity (0.3 ↔ 0.5 over 4s ease-in-out infinite, very subtle, paused if reduced-motion)
- All animations respect `prefers-reduced-motion: reduce` → skipped

---

## Mobile behavior

- Navbar : desktop nav hidden < `md` (768px), hamburger visible. Logo + hamburger horizontal split.
- ProgramsGrid : 1 column < `md`, 2 cols `md`, 3 cols `lg+`
- TestimonialGrid : 1 column < `md` (all 3 stacked, center elevation visual via border only), 3 cols `md+`
- FooterRich : 1 col < `md` (logo+social on top), 2 cols `md`, 4 cols `lg+`
- All touch targets ≥ 44×44px (hamburger, social icons, CTAs)
- Safe area inset bottom respected for fixed CTAs (none in Sprint 2)

---

## Accessibility

- Navbar : `<nav role="navigation" aria-label="Navigation principale">`. Skip-to-content link first child (visually hidden until focused).
- MobileNavDrawer : `<div role="dialog" aria-modal="true" aria-label="Menu navigation mobile">`. Focus trap (Tab cycles within). Esc closes. Focus returns to hamburger on close.
- ProgramsGrid : `<section aria-label="Programmes d'accompagnement">`. Each card has accessible name via H3.
- TestimonialGrid : `<section aria-label="Témoignages clients">`. Shell cards have `aria-label="Témoignage à venir"`.
- FinalCTASection : `<section aria-label="Réserver un appel">`.
- FooterRich : `<footer role="contentinfo">`. Each column has heading. Social icons each have `aria-label="Suivre sur [platform]"`.
- All links have visible focus state (silver outline from Sprint 1).
- Schema.org @graph injected → enriches SEO + screen reader landmarks.

---

## Interactions

- Navbar nav link click → smooth scroll (Lenis) to anchor on Home, OR navigate via `<Link>` if external route
- Navbar CTA "CONSULTATION" → `<Link to={ROUTES.contact[locale]}>` (TanStack)
- Hamburger click → toggle drawer open/close (state via useState in Navbar parent)
- Drawer link click → close drawer + smooth scroll OR navigate
- ProgramCard click → `<Link to={ROUTES[hrefKey][locale]}>` navigate to LP (Sprint 4 will build LPs)
- "Voir tous les programmes" bottom link → `<Link to={ROUTES.services[locale]}>`
- "Voir tous les témoignages" bottom link → `<Link to={ROUTES.temoignages[locale]}>`
- FinalCTA "Réserver mon appel" → `<Link to={ROUTES.contact[locale]}>`
- Footer "Prendre rendez-vous" → same
- Social icons → `<a href={url} target="_blank" rel="noopener noreferrer">` to external socials
- Footer legal links → `<Link to={ROUTES.mentions-legales[locale]}>` etc. (Sprint 5 will build legal pages)

---

## Testing strategy

### Vitest unit (TDD)

- `tests/components/ui/ProgramCard.test.tsx` — 3 variants render, i18n FR/EN, href forwarding, hover state
- `tests/components/ui/TestimonialShellCard.test.tsx` — default + centerElevated variants, disclaimer text
- `tests/components/ui/SocialIcon.test.tsx` — each platform renders correct SVG path, aria-label
- `tests/components/ui/LogoWordmark.test.tsx` — sizes render, gold dot present
- `tests/components/layout/Navbar.test.tsx` — desktop links visible md+, hamburger visible <md, CTA wired
- `tests/components/layout/MobileNavDrawer.test.tsx` — open/close state, focus trap, esc closes
- `tests/components/layout/FooterRich.test.tsx` — 4 cols structure, social icons present, legal links

### Vitest integration

- `tests/components/sections/ProgramsGrid.test.tsx` — renders 6 cards from data, eyebrow + H2 i18n
- `tests/components/sections/TestimonialGrid.test.tsx` — 3 shells, center elevated, disclaimer
- `tests/components/sections/FinalCTASection.test.tsx` — eyebrow + H2 + CTA wired

### Schema.org

- `tests/lib/seo/schema.test.ts` — buildSchemaGraph returns valid JSON, contains Organization + Person + WebSite, locale-aware inLanguage

### a11y axe-core

- `tests/a11y/home-sprint-2.test.tsx` — Navbar + ProgramsGrid + TestimonialGrid + FinalCTA + FooterRich (FR + EN) = 0 violations

### Manual

- `/dev-components` updated with new atomics + sections
- Lighthouse Home Perf 95+ desktop / 90+ mobile (Sprint 7 will refine, baseline here)

---

## Out of scope (deferred)

- Real testimonials data : Sprint 5+ when Jonas envoie H3
- Real LP routes for /services/gamechanger-scaling etc. : Sprint 4
- /a-propos, /methodologie-cdt routes : Sprint 3
- /faq, /contact, /podcast, /ressources : Sprint 5
- Schema.org Service per LP + FAQPage : Sprints 4, 5
- HTMLRewriter SSR Schema.org injection (vs client-render React) : Sprint 6
- Form GHL real wiring on contact CTA : Sprint 6
- Calendly embed on /contact : Sprint 6
- Real logo SVG vector (Sprint 1 placeholder) : when Jonas valide H7

---

## Acceptance criteria (DoD)

- Navbar visible sticky top, desktop nav links + CTA fonctionnels
- Mobile drawer s'ouvre/ferme propre, focus trap, esc closes
- ProgramsGrid affiche 6 cards depuis data file, FR + EN swappent
- TestimonialGrid 3 shells avec center elevated, disclaimer visible
- FinalCTASection MaskRevealHeading + CTA gold wired
- FooterRich 4 columns desktop, 1 col mobile, all links wired (placeholders pour routes Sprint 3-5)
- Schema.org @graph injected in `<head>`, Google Rich Results Test valid
- Hero → TrustBand → VslPlaceholder → ProgramsGrid → TestimonialGrid → FinalCTA → FooterRich = full Home flow
- prefers-reduced-motion respected partout
- a11y axe-core 0 violations sur Home complète
- Tous tests Vitest TDD pass
- Lighthouse desktop 95+ / mobile 90+ (baseline, refine Sprint 7)
- Tag `sprint-2-done` + push GitHub
