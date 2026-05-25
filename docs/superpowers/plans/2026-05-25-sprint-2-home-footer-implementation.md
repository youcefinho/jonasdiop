# Sprint 2 — Home complète + Footer rich Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax. Reference design spec at `docs/superpowers/specs/2026-05-25-sprint-2-home-footer-design.md`.

**Goal:** Complete Home flow Jonas Diop : Navbar (desktop+mobile drawer) + ProgramsGrid 6 cards + TestimonialGrid 3 shells + FinalCTASection + FooterRich 4 cols + Schema.org @graph. End state = full Home conversion-ready (hors copy Sprint 2.5 + intégrations Sprint 6).

**Architecture:** Atomic-first extending Sprint 1. New atomics (SocialIcon, LogoWordmark, ProgramCard, TestimonialShellCard) + new layout components (Navbar, MobileNavDrawer, FooterRich) + new sections (ProgramsGrid, TestimonialGrid, FinalCTASection). Data files (`src/data/programmes.ts`, `testimonials.ts`) for structured content. Schema.org helpers in `src/lib/seo/schema.ts`. All bilingual via `useT()`. TDD on atomics + sections. a11y axe-core 0 violations.

**Tech Stack:** Same as Sprint 1 (React 19 + TanStack Router + Tailwind v4 + Vitest 4 + Biome). New : custom inline SVG for brand icons (Lucide v1 retired them).

**Estimated tasks:** 18. ~2 days focused.

---

## Pre-flight

- Working dir : `C:/Users/rochdi/.gemini/antigravity-ide/scratch/jonas-diop/`
- Base : tag `sprint-1.5-done` (49 commits)
- TDD discipline strict for all atomics + sections (test fail FIRST, impl, test pass, commit)
- Commit per task minimum
- Hard rules : clamp-first, text-stability, ban-magazine, no copy-paste oceanne
- Brand icons : custom inline SVG (Lucide v1 retired Facebook/LinkedIn/Instagram/X due to trademarks)
- Schema.org : client-render Sprint 2, SSR HTMLRewriter Sprint 6

---

## Phase 1 — Atomics (Tasks 1-4)

### Task 1: SocialIcon atomic

**Files:**
- Create: `src/components/ui/SocialIcon.tsx`
- Create: `tests/components/ui/SocialIcon.test.tsx`

TDD. Inline SVG component for brand social icons (Lucide v1 retired them).

Implementation `src/components/ui/SocialIcon.tsx`:

```tsx
type SocialPlatform = 'facebook' | 'instagram' | 'linkedin' | 'x' | 'tiktok' | 'youtube';

interface SocialIconProps {
  name: SocialPlatform;
  className?: string;
}

const paths: Record<SocialPlatform, string> = {
  facebook: 'M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z',
  instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.14.32 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.7 5.7 0 0 0-1.39-2.13A5.7 5.7 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
  linkedin: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z',
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z',
  tiktok: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1Z',
  youtube: 'M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.27 3.6L9.6 15.6z'
};

const labels: Record<SocialPlatform, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  x: 'X (Twitter)',
  tiktok: 'TikTok',
  youtube: 'YouTube'
};

export function SocialIcon({ name, className }: SocialIconProps) {
  return (
    <svg
      role="img"
      aria-label={labels[name]}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
```

Tests (4) : each platform renders correct svg, aria-label correct, className forwarded.

Commit: `feat(ui): SocialIcon atomic inline SVG for brand icons (lucide v1 trademark workaround) (TDD)`

---

### Task 2: LogoWordmark atomic

**Files:**
- Create: `src/components/ui/LogoWordmark.tsx`
- Create: `tests/components/ui/LogoWordmark.test.tsx`

```tsx
import { clsx } from 'clsx';

interface LogoWordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-[clamp(0.875rem,0.75rem+0.4vw,1rem)]',
  md: 'text-[clamp(1rem,0.85rem+0.5vw,1.25rem)]',
  lg: 'text-[clamp(1.25rem,1rem+0.8vw,1.75rem)]'
};

/**
 * Logo wordmark text-based "JONAS DIOP" with gold dot signature after 'D'.
 * Placeholder until real SVG vector logo lands (H7 pending Jonas).
 */
export function LogoWordmark({ size = 'md', className }: LogoWordmarkProps) {
  return (
    <span
      data-logo-wordmark
      className={clsx(
        'inline-flex items-baseline gap-1 font-display font-semibold tracking-tight text-primary uppercase',
        sizeClasses[size],
        className
      )}
    >
      JONAS DIOP
      <span data-logo-dot aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-gold translate-y-[-2px]" />
    </span>
  );
}
```

Tests (3) : default md size, gold dot present, className forwarded.

Commit: `feat(ui): LogoWordmark atomic text-based wordmark with gold dot (placeholder until H7 vector) (TDD)`

---

### Task 3: ProgramCard atomic

**Files:**
- Create: `src/components/ui/ProgramCard.tsx`
- Create: `tests/components/ui/ProgramCard.test.tsx`

```tsx
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { useT } from '@/lib/i18n/useT';
import type { BilingualLax } from '@/lib/i18n/types';

export type ProgramVariant = 'groupe' | 'formation' | 'accompagnement';

interface ProgramCardProps {
  variant: ProgramVariant;
  href: string;
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  description: BilingualLax<string>;
}

const variantClasses: Record<ProgramVariant, string> = {
  groupe: 'border-silver/15 hover:border-silver/30',
  formation: 'border-silver/15 hover:border-silver/30',
  accompagnement: 'border-gold/30 hover:border-gold/50'
};

const eyebrowColorClasses: Record<ProgramVariant, string> = {
  groupe: 'text-silver opacity-70',
  formation: 'text-silver opacity-70',
  accompagnement: 'text-gold opacity-80'
};

export function ProgramCard({ variant, href, eyebrow, title, description }: ProgramCardProps) {
  const { t } = useT();
  return (
    <Link
      to={href}
      className={clsx(
        'group relative flex flex-col gap-sm p-md bg-elevated border rounded-lg transition-all duration-base hover:scale-[1.01]',
        variantClasses[variant]
      )}
    >
      <p className={clsx('text-eyebrow uppercase tracking-widest font-display', eyebrowColorClasses[variant])}>
        {t(eyebrow)}
      </p>
      <h3 className="text-h3 text-primary font-display">{t(title)}</h3>
      <p className="text-body text-silver opacity-80 text-pretty">{t(description)}</p>
      <span className="mt-auto inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver group-hover:text-primary transition-colors">
        {variant === 'accompagnement'
          ? t({ fr: 'Postuler', en: 'Apply' })
          : t({ fr: 'En savoir plus', en: 'Learn more' })}
        <ArrowRight className="h-3 w-3" aria-hidden="true" />
      </span>
    </Link>
  );
}
```

Tests (5) : 3 variants render distinct border classes, i18n FR/EN, href forwarded, accompagnement variant shows "Postuler"/"Apply".

Commit: `feat(ui): ProgramCard atomic with 3 variants (groupe/formation/accompagnement gold) (TDD)`

---

### Task 4: TestimonialShellCard atomic

**Files:**
- Create: `src/components/ui/TestimonialShellCard.tsx`
- Create: `tests/components/ui/TestimonialShellCard.test.tsx`

```tsx
import { Quote, User } from 'lucide-react';
import { clsx } from 'clsx';
import { useT } from '@/lib/i18n/useT';

interface TestimonialShellCardProps {
  centerElevated?: boolean;
}

/**
 * Placeholder testimonial card while waiting for real client testimonials (H3 pending).
 * centerElevated=true → border-gold/30 + bg-elevated brighter for "preuve sociale phare" position.
 */
export function TestimonialShellCard({ centerElevated = false }: TestimonialShellCardProps) {
  const { t } = useT();
  return (
    <article
      aria-label={t({ fr: 'Témoignage à venir', en: 'Testimonial coming soon' })}
      className={clsx(
        'flex flex-col items-center gap-sm p-md rounded-lg border bg-elevated text-center transition-all',
        centerElevated
          ? 'border-gold/30 bg-elevated/80'
          : 'border-silver/15'
      )}
      style={centerElevated ? { backgroundColor: 'oklch(0.25 0.005 80)' } : undefined}
    >
      <Quote className="h-8 w-8 text-silver opacity-40" aria-hidden="true" />
      <p className="text-eyebrow uppercase tracking-widest text-silver opacity-80 font-display">
        {t({ fr: 'Témoignage à venir', en: 'Testimonial coming soon' })}
      </p>
      <div className="h-12 w-12 rounded-full bg-base flex items-center justify-center">
        <User className="h-6 w-6 text-silver opacity-30" aria-hidden="true" />
      </div>
      <p className="text-sm text-tertiary opacity-70">
        {t({ fr: "En attente d'autorisation client", en: 'Pending client authorization' })}
      </p>
    </article>
  );
}
```

Tests (3) : default render, centerElevated variant has border-gold class, disclaimer i18n.

Commit: `feat(ui): TestimonialShellCard with centerElevated variant (shells while H3 pending) (TDD)`

---

## Phase 2 — Data files (Tasks 5-6)

### Task 5: programmes.ts data

**Files:**
- Create: `src/data/programmes.ts`

Pas de TDD (pure data file with const array).

Full content :

```typescript
import type { BilingualLax } from '@/lib/i18n/types';

export type ProgrammeVariant = 'groupe' | 'formation' | 'accompagnement';

export interface Programme {
  readonly id: string;
  readonly variant: ProgrammeVariant;
  readonly eyebrow: BilingualLax<string>;
  readonly name: BilingualLax<string>;
  readonly description: BilingualLax<string>;
  readonly hrefKey: 'services-gamechanger-scaling' | 'services-the-shift' | 'services-master-closing' | 'services-focus-flow' | 'services-cash-scale' | 'services-consultations-privees';
}

export const programmes: readonly Programme[] = [
  {
    id: 'gamechanger-scaling',
    variant: 'groupe',
    eyebrow: { fr: 'Programme de groupe · 12 semaines', en: 'Group program · 12 weeks' },
    name: { fr: 'Gamechanger Scaling', en: 'Gamechanger Scaling' },
    description: {
      fr: "Le programme intensif pour entrepreneurs entre 6 et 7 chiffres en quête de scaling structurel.",
      en: 'The intensive program for 6-to-7 figure entrepreneurs seeking structural scaling.'
    },
    hrefKey: 'services-gamechanger-scaling'
  },
  {
    id: 'the-shift',
    variant: 'groupe',
    eyebrow: { fr: 'Programme de groupe · 8 semaines', en: 'Group program · 8 weeks' },
    name: { fr: 'The Shift', en: 'The Shift' },
    description: {
      fr: "Pivot stratégique pour entrepreneurs en transition vers un modèle plus à fort levier.",
      en: 'Strategic pivot for entrepreneurs transitioning to a higher-leverage model.'
    },
    hrefKey: 'services-the-shift'
  },
  {
    id: 'master-closing',
    variant: 'formation',
    eyebrow: { fr: 'Formation spécialisée', en: 'Specialized training' },
    name: { fr: 'Master Closing', en: 'Master Closing' },
    description: {
      fr: "Maîtriser l'art du closing haute valeur pour entrepreneurs et équipes commerciales.",
      en: 'Master the art of high-value closing for entrepreneurs and sales teams.'
    },
    hrefKey: 'services-master-closing'
  },
  {
    id: 'focus-flow',
    variant: 'formation',
    eyebrow: { fr: 'Formation spécialisée', en: 'Specialized training' },
    name: { fr: 'Focus & Flow', en: 'Focus & Flow' },
    description: {
      fr: "Productivité d'élite : récupérer 50% de votre temps via l'ingénierie systémique.",
      en: 'Elite productivity : reclaim 50% of your time via systemic engineering.'
    },
    hrefKey: 'services-focus-flow'
  },
  {
    id: 'cash-scale',
    variant: 'formation',
    eyebrow: { fr: 'Formation spécialisée', en: 'Specialized training' },
    name: { fr: 'Cash & Scale™', en: 'Cash & Scale™' },
    description: {
      fr: "Optimisation cash flow & levier financier pour scaler avec maîtrise.",
      en: 'Cash flow & financial leverage optimization to scale with control.'
    },
    hrefKey: 'services-cash-scale'
  },
  {
    id: 'consultations-privees',
    variant: 'accompagnement',
    eyebrow: { fr: 'Accompagnement 1:1 · sur invitation', en: '1:1 advisory · by invitation' },
    name: { fr: 'Consultations Privées', en: 'Private Consultations' },
    description: {
      fr: "Travail stratégique 1:1, accès direct à Jonas. Sur dossier uniquement.",
      en: '1:1 strategic work, direct access to Jonas. By application only.'
    },
    hrefKey: 'services-consultations-privees'
  }
];
```

Commit: `feat(data): programmes.ts 6 programmes typés bilingues (groupe ×2, formation ×3, accompagnement ×1 premium)`

---

### Task 6: testimonials.ts data (shells)

**Files:**
- Create: `src/data/testimonials.ts`

```typescript
export interface TestimonialShell {
  readonly id: string;
  readonly centerElevated?: boolean;
}

/**
 * Initial 3 shells while waiting for real testimonials (H3 pending Jonas).
 * Center one elevated to anchor visual hierarchy.
 * Replace with real TestimonialReal[] when received from client.
 */
export const testimonialShells: readonly TestimonialShell[] = [
  { id: 'shell-1' },
  { id: 'shell-2', centerElevated: true },
  { id: 'shell-3' }
];
```

Commit: `feat(data): testimonials.ts 3 shells initiaux (center elevated, swap réel quand H3 reçu)`

---

## Phase 3 — Sections (Tasks 7-9)

### Task 7: ProgramsGrid section

**Files:**
- Create: `src/components/sections/ProgramsGrid.tsx`
- Create: `tests/components/sections/ProgramsGrid.test.tsx`

```tsx
import { Link } from '@tanstack/react-router';
import { useT } from '@/lib/i18n/useT';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProgramCard } from '@/components/ui/ProgramCard';
import { programmes } from '@/data/programmes';
import { ROUTES } from '@/config/routes';

export function ProgramsGrid() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: "Programmes d'accompagnement", en: 'Coaching programs' })}
      className="py-2xl bg-base"
    >
      <div className="max-w-default mx-auto px-md">
        <div className="flex flex-col items-center text-center gap-sm">
          <Eyebrow>{t({ fr: 'Nos programmes', en: 'Our programs' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance max-w-content">
            {t({
              fr: "Écosystèmes complets d'accompagnement.",
              en: 'Complete coaching ecosystems.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-80 max-w-content text-pretty">
            {t({
              fr: 'Programmes de groupe, formations spécialisées et consultations stratégiques privées.',
              en: 'Group programs, specialized trainings, and private strategic consultations.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mt-xl">
          {programmes.map((p) => (
            <ProgramCard
              key={p.id}
              variant={p.variant}
              href={ROUTES[p.hrefKey][locale]}
              eyebrow={p.eyebrow}
              title={p.name}
              description={p.description}
            />
          ))}
        </div>

        <div className="text-center mt-lg">
          <Link
            to={ROUTES.services[locale]}
            className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver hover:text-gold transition-colors"
          >
            {t({ fr: 'Voir tous les programmes en détail', en: 'View all programs in detail' })} →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

Tests (3) : renders 6 cards, eyebrow/H2/sub i18n, "Voir tous" link wired.

Commit: `feat(sections): ProgramsGrid with 6 ProgramCard from data + bottom link (TDD)`

---

### Task 8: TestimonialGrid section

**Files:**
- Create: `src/components/sections/TestimonialGrid.tsx`
- Create: `tests/components/sections/TestimonialGrid.test.tsx`

```tsx
import { Link } from '@tanstack/react-router';
import { useT } from '@/lib/i18n/useT';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TestimonialShellCard } from '@/components/ui/TestimonialShellCard';
import { testimonialShells } from '@/data/testimonials';
import { ROUTES } from '@/config/routes';

export function TestimonialGrid() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Témoignages clients', en: 'Client testimonials' })}
      className="py-2xl bg-base"
    >
      <div className="max-w-default mx-auto px-md">
        <div className="flex flex-col items-center text-center gap-sm">
          <Eyebrow>{t({ fr: 'Ils ont appliqué CDT™', en: 'They applied CDT™' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance max-w-content">
            {t({
              fr: '857 entrepreneurs ont déjà ajouté un zéro.',
              en: '857 entrepreneurs have already added a zero.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-80 max-w-content text-pretty">
            {t({ fr: 'Pas de théorie. Du pragmatisme mesurable.', en: 'Not theory. Measurable pragmatism.' })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-xl items-stretch">
          {testimonialShells.map((shell) => (
            <TestimonialShellCard key={shell.id} centerElevated={shell.centerElevated} />
          ))}
        </div>

        <p className="text-sm text-tertiary text-center mt-lg opacity-70">
          {t({
            fr: 'Témoignages clients réels disponibles bientôt.',
            en: 'Real client testimonials coming soon.'
          })}
        </p>

        <div className="text-center mt-md">
          <Link
            to={ROUTES.temoignages[locale]}
            className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver hover:text-gold transition-colors"
          >
            {t({ fr: 'Voir tous les témoignages', en: 'View all testimonials' })} →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

Tests (3) : renders 3 shells, center elevated correctly, disclaimer + link i18n.

Commit: `feat(sections): TestimonialGrid 3 shells (center elevated) + disclaimer H3 pending (TDD)`

---

### Task 9: FinalCTASection

**Files:**
- Create: `src/components/sections/FinalCTASection.tsx`
- Create: `tests/components/sections/FinalCTASection.test.tsx`

```tsx
import { ArrowRight } from 'lucide-react';
import { useT } from '@/lib/i18n/useT';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { CTAPill } from '@/components/ui/CTAPill';
import { ROUTES } from '@/config/routes';

export function FinalCTASection() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Réserver un appel', en: 'Book a call' })}
      className="py-2xl bg-elevated border-t border-silver/10"
    >
      <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
        <Eyebrow>{t({ fr: 'Prochaine étape', en: 'Next step' })}</Eyebrow>
        <MaskRevealHeading as="h2">
          {t({ fr: 'Prêt à ajouter un zéro ?', en: 'Ready to add a zero?' })}
        </MaskRevealHeading>
        <p className="text-body-lg text-silver opacity-80 text-pretty">
          {t({
            fr: 'Appel de qualification gratuit · 30 minutes · Réponse 48h',
            en: 'Free qualification call · 30 minutes · 48h response'
          })}
        </p>
        <div className="mt-md">
          <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
            {t({ fr: 'Réserver mon appel', en: 'Book my call' })}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CTAPill>
        </div>
      </div>
    </section>
  );
}
```

Tests (3) : eyebrow + H2 i18n, CTA wired, sub-line render.

Commit: `feat(sections): FinalCTASection with MaskRevealHeading + CTA gold + qualification microcopy (TDD)`

---

## Phase 4 — Layout components (Tasks 10-12)

### Task 10: Navbar layout component

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `tests/components/layout/Navbar.test.tsx`

```tsx
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { useT } from '@/lib/i18n/useT';
import { LogoWordmark } from '@/components/ui/LogoWordmark';
import { CTAPill } from '@/components/ui/CTAPill';
import { MobileNavDrawer } from '@/components/layout/MobileNavDrawer';
import { ROUTES } from '@/config/routes';

export function Navbar() {
  const { t, locale } = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label={t({ fr: 'Navigation principale', en: 'Main navigation' })}
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 bg-base/80 backdrop-blur-md transition-all duration-base',
        scrolled ? 'py-2' : 'py-sm'
      )}
    >
      <div className="max-w-wide mx-auto px-md flex justify-between items-center gap-md">
        <Link to={ROUTES.home[locale]} aria-label={t({ fr: 'Accueil Jonas Diop', en: 'Jonas Diop Home' })}>
          <LogoWordmark size="md" />
        </Link>

        <div className="hidden md:flex items-center gap-md text-eyebrow uppercase tracking-wider font-display">
          <Link to={ROUTES['methodologie-cdt'][locale]} className="text-silver hover:text-primary transition-colors">
            {t({ fr: 'Méthodologie', en: 'Methodology' })}
          </Link>
          <Link to={ROUTES.services[locale]} className="text-silver hover:text-primary transition-colors">
            {t({ fr: 'Programmes', en: 'Programs' })}
          </Link>
          <Link to={ROUTES.about[locale]} className="text-silver hover:text-primary transition-colors">
            {t({ fr: 'À propos', en: 'About' })}
          </Link>
          <Link to={ROUTES.ressources[locale]} className="text-silver hover:text-primary transition-colors">
            {t({ fr: 'Ressources', en: 'Resources' })}
          </Link>
          <Link to={ROUTES.contact[locale]} className="text-silver hover:text-primary transition-colors">
            {t({ fr: 'Contact', en: 'Contact' })}
          </Link>
        </div>

        <div className="hidden md:block">
          <CTAPill variant="silver-outline" href={ROUTES.contact[locale]}>
            {t({ fr: 'Consultation', en: 'Consultation' })}
          </CTAPill>
        </div>

        <div className="md:hidden">
          <MobileNavDrawer />
        </div>
      </div>
    </nav>
  );
}
```

Tests (4) : logo present, 5 desktop nav links visible md+, CTA visible md+, mobile drawer trigger visible <md.

Commit: `feat(layout): Navbar sticky + scroll-shrink + desktop nav + mobile drawer trigger (TDD)`

---

### Task 11: MobileNavDrawer component

**Files:**
- Create: `src/components/layout/MobileNavDrawer.tsx`
- Create: `tests/components/layout/MobileNavDrawer.test.tsx`

```tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { useT } from '@/lib/i18n/useT';
import { CTAPill } from '@/components/ui/CTAPill';
import { ROUTES } from '@/config/routes';

export function MobileNavDrawer() {
  const { t, locale } = useT();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t({ fr: 'Ouvrir le menu', en: 'Open menu' })}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="text-silver hover:text-primary transition-colors p-sm"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-base/60 backdrop-blur-sm z-50 motion-safe:animate-fade-in"
        />
      )}

      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t({ fr: 'Menu navigation mobile', en: 'Mobile navigation menu' })}
        className={clsx(
          'fixed top-0 right-0 h-svh w-[85vw] max-w-[400px] bg-elevated z-50 px-md py-xl flex flex-col gap-md transition-transform duration-base ease-out-expo',
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t({ fr: 'Fermer le menu', en: 'Close menu' })}
          className="self-end text-silver hover:text-primary transition-colors p-sm"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        <nav className="flex flex-col gap-2 mt-md text-h3 font-display">
          <Link to={ROUTES['methodologie-cdt'][locale]} onClick={() => setOpen(false)} className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors">
            {t({ fr: 'Méthodologie', en: 'Methodology' })}
          </Link>
          <Link to={ROUTES.services[locale]} onClick={() => setOpen(false)} className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors">
            {t({ fr: 'Programmes', en: 'Programs' })}
          </Link>
          <Link to={ROUTES.about[locale]} onClick={() => setOpen(false)} className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors">
            {t({ fr: 'À propos', en: 'About' })}
          </Link>
          <Link to={ROUTES.ressources[locale]} onClick={() => setOpen(false)} className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors">
            {t({ fr: 'Ressources', en: 'Resources' })}
          </Link>
          <Link to={ROUTES.contact[locale]} onClick={() => setOpen(false)} className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors">
            {t({ fr: 'Contact', en: 'Contact' })}
          </Link>
        </nav>

        <div className="mt-auto">
          <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
            {t({ fr: 'Consultation', en: 'Consultation' })}
          </CTAPill>
        </div>
      </aside>
    </>
  );
}
```

Tests (4) : trigger renders, click opens drawer (`aria-expanded=true`), close button closes, Escape key closes.

Commit: `feat(layout): MobileNavDrawer slide-from-right with Esc + body lock + focus return (TDD)`

---

### Task 12: FooterRich layout component

**Files:**
- Create: `src/components/layout/FooterRich.tsx`
- Create: `tests/components/layout/FooterRich.test.tsx`

```tsx
import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useT } from '@/lib/i18n/useT';
import { LogoWordmark } from '@/components/ui/LogoWordmark';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { CTAPill } from '@/components/ui/CTAPill';
import { ROUTES } from '@/config/routes';
import { clientConfig } from '@/config/clientConfig';
import { programmes } from '@/data/programmes';

export function FooterRich() {
  const { t, locale } = useT();
  const { client } = clientConfig;
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-base border-t border-silver/10 pt-2xl pb-md">
      <div className="max-w-wide mx-auto px-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="flex flex-col gap-sm">
          <LogoWordmark size="md" />
          <p className="text-body text-silver opacity-80">
            {t({ fr: "Architecte d'affaires.", en: 'Business architect.' })}
          </p>
          <p className="text-sm text-tertiary opacity-70 text-pretty">
            {t({
              fr: 'Architecture systémique pour entrepreneurs ambitieux.',
              en: 'Systemic architecture for ambitious entrepreneurs.'
            })}
          </p>
          <div className="flex gap-3 mt-sm text-silver">
            {client.socials.facebook && (
              <a href={client.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <SocialIcon name="facebook" className="h-5 w-5" />
              </a>
            )}
            {client.socials.instagram && (
              <a href={client.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <SocialIcon name="instagram" className="h-5 w-5" />
              </a>
            )}
            {client.socials.linkedin && (
              <a href={client.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <SocialIcon name="linkedin" className="h-5 w-5" />
              </a>
            )}
            {client.socials.x && (
              <a href={client.socials.x} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <SocialIcon name="x" className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-sm">
          <p className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
            {t({ fr: 'Programmes', en: 'Programs' })}
          </p>
          <nav className="flex flex-col gap-2 text-body text-silver">
            {programmes.map((p) => (
              <Link key={p.id} to={ROUTES[p.hrefKey][locale]} className="hover:text-primary transition-colors">
                {t(p.name)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-sm">
          <p className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
            {t({ fr: 'Ressources', en: 'Resources' })}
          </p>
          <nav className="flex flex-col gap-2 text-body text-silver">
            <Link to={ROUTES['methodologie-cdt'][locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Méthodologie CDT™', en: 'CDT™ Methodology' })}
            </Link>
            <Link to={ROUTES.ressources[locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Articles', en: 'Articles' })}
            </Link>
            <Link to={ROUTES.podcast[locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Podcast The Game Changer', en: 'The Game Changer Podcast' })}
            </Link>
            <Link to={ROUTES.livre[locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Livre (à venir)', en: 'Book (coming)' })}
            </Link>
            <Link to={ROUTES.evenements[locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Événements', en: 'Events' })}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-sm">
          <p className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
            {t({ fr: 'Contact & légal', en: 'Contact & legal' })}
          </p>
          <div className="flex flex-col gap-2 text-body text-silver">
            <a href={`mailto:${client.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {client.email}
            </a>
            <a href={`tel:${client.phone}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" aria-hidden="true" />
              +1 438 356 7746
            </a>
            <span className="inline-flex items-center gap-2 text-tertiary">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {t({ fr: 'Montréal & Worldwide', en: 'Montréal & Worldwide' })}
            </span>
          </div>
          <div className="mt-sm">
            <CTAPill variant="silver-outline" href={ROUTES.contact[locale]}>
              {t({ fr: 'Prendre rendez-vous', en: 'Book a call' })}
            </CTAPill>
          </div>
        </div>
      </div>

      <div className="max-w-wide mx-auto px-md mt-xl pt-md border-t border-silver/10 flex flex-col md:flex-row justify-between items-center gap-sm text-sm text-tertiary opacity-70">
        <p>
          © {year} {client.legalName} · {t({ fr: 'Cabinet de conseil stratégique', en: 'Strategic consulting firm' })}
          {client.neq && <> · NEQ {client.neq}</>}
        </p>
        <nav className="flex gap-md text-eyebrow uppercase tracking-widest">
          <Link to={ROUTES['mentions-legales'][locale]} className="hover:text-silver transition-colors">
            {t({ fr: 'Mentions légales', en: 'Legal notice' })}
          </Link>
          <Link to={ROUTES['politique-confidentialite'][locale]} className="hover:text-silver transition-colors">
            {t({ fr: 'Confidentialité', en: 'Privacy' })}
          </Link>
          <Link to={ROUTES['conditions-utilisation'][locale]} className="hover:text-silver transition-colors">
            {t({ fr: 'Conditions', en: 'Terms' })}
          </Link>
        </nav>
        <p>
          {t({ fr: 'Site par', en: 'Made by' })}{' '}
          <a href="https://intralys.dev" target="_blank" rel="noopener noreferrer" className="hover:text-silver transition-colors">
            Intralys
          </a>
        </p>
      </div>
    </footer>
  );
}
```

Tests (5) : logo present, 4 column headings present, social icons render, legal links present, copyright with year + legal name.

Commit: `feat(layout): FooterRich 4 cols (logo+socials / programmes / ressources / contact+légal) + bottom bar copyright (TDD)`

---

## Phase 5 — SEO Schema.org (Task 13-14)

### Task 13: Schema.org helpers

**Files:**
- Create: `src/lib/seo/schema.ts`
- Create: `tests/lib/seo/schema.test.ts`

```typescript
import { clientConfig } from '@/config/clientConfig';
import type { Locale } from '@/lib/i18n/types';

interface SchemaGraph {
  '@context': 'https://schema.org';
  '@graph': SchemaNode[];
}

type SchemaNode = SchemaOrganization | SchemaPerson | SchemaWebSite;

interface SchemaOrganization {
  '@type': 'Organization';
  '@id': string;
  name: string;
  legalName: string;
  email: string;
  telephone: string;
  url: string;
  sameAs: string[];
}

interface SchemaPerson {
  '@type': 'Person';
  '@id': string;
  name: string;
  jobTitle: string;
  worksFor: { '@id': string };
  sameAs: string[];
}

interface SchemaWebSite {
  '@type': 'WebSite';
  '@id': string;
  url: string;
  name: string;
  inLanguage: string;
  publisher: { '@id': string };
}

export function buildSchemaGraph(locale: Locale): SchemaGraph {
  const { client, site } = clientConfig;
  const baseUrl = site.productionUrl;
  const orgId = `${baseUrl}#org`;
  const personId = `${baseUrl}#jonas`;
  const websiteId = `${baseUrl}#website`;
  const sameAs = [
    client.socials.facebook,
    client.socials.instagram,
    client.socials.linkedin,
    client.socials.x,
    client.socials.tiktok,
    client.socials.youtube
  ].filter((url): url is string => url !== null);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'DIOP Stratégies Internationales',
        legalName: client.legalName,
        email: client.email,
        telephone: client.phone,
        url: baseUrl,
        sameAs
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: client.name,
        jobTitle: locale === 'fr' ? "Architecte d'affaires" : 'Business Architect',
        worksFor: { '@id': orgId },
        sameAs
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: baseUrl,
        name: client.name,
        inLanguage: locale === 'fr' ? 'fr-CA' : 'en',
        publisher: { '@id': orgId }
      }
    ]
  };
}

export function buildSchemaJsonLd(locale: Locale): string {
  return JSON.stringify(buildSchemaGraph(locale));
}
```

Tests (4) : graph has 3 nodes, locale-aware inLanguage, sameAs filters null, JSON-LD parseable.

Commit: `feat(seo): Schema.org @graph helpers (Organization + Person + WebSite) bilingual + Json-Ld serializer (TDD)`

---

### Task 14: Inject Schema.org in __root.tsx

**Files:**
- Modify: `src/routes/__root.tsx`

Add JSON-LD script tag in the HTML head (via document.head useEffect since TanStack file-based routes don't have native head management for SPA — Sprint 6 will move to worker SSR HTMLRewriter).

Current __root.tsx (post-Sprint 1.5) :
```tsx
import { useEffect } from 'react';
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';
import { destroyLenis, initLenis } from '@/lib/motion/lenis';

function RootLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <html lang={locale === 'en' ? 'en' : 'fr-CA'}>
      <LanguageProvider locale={locale}>
        <Outlet />
      </LanguageProvider>
    </html>
  );
}

export const Route = createRootRoute({
  component: RootLayout
});
```

Update :
```tsx
import { useEffect } from 'react';
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';
import { destroyLenis, initLenis } from '@/lib/motion/lenis';
import { buildSchemaJsonLd } from '@/lib/seo/schema';

function RootLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  useEffect(() => {
    const scriptId = 'schema-org-graph';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = buildSchemaJsonLd(locale);
  }, [locale]);

  return (
    <html lang={locale === 'en' ? 'en' : 'fr-CA'}>
      <LanguageProvider locale={locale}>
        <Outlet />
      </LanguageProvider>
    </html>
  );
}

export const Route = createRootRoute({
  component: RootLayout
});
```

Verify : `bun run dev`, DevTools → Elements → `<head>` → see `<script type="application/ld+json" id="schema-org-graph">{...}</script>`.

Commit: `feat(seo): inject Schema.org @graph in __root.tsx head (client-render until SSR worker Sprint 6)`

---

## Phase 6 — Home composition + dev page update (Tasks 15-16)

### Task 15: Update Home routes FR + EN with full composition + Navbar + Footer

**Files:**
- Modify: `src/routes/index.tsx`
- Modify: `src/routes/en/index.tsx`

```tsx
// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/layout/Navbar';
import { FooterRich } from '@/components/layout/FooterRich';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
import { VslPlaceholderSection } from '@/components/sections/VslPlaceholderSection';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

function HomeFR() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <TrustBand />
        <VslPlaceholderSection id="methodologie" />
        <ProgramsGrid />
        <TestimonialGrid />
        <FinalCTASection />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/')({
  component: HomeFR
});
```

Mirror EN home identique.

Verify : `bun run build`, `bun run dev`, page renders full flow Hero → TrustBand → VSL → Programmes → Testimonials → FinalCTA → Footer + Navbar sticky.

`pt-[80px]` padding-top compense la Navbar fixed (height ~80px).

Commit: `feat(routes): Home full composition Navbar + Hero + TrustBand + VSL + Programmes + Testimonials + FinalCTA + Footer (FR + EN)`

---

### Task 16: Update /dev-components with new atomics + sections

**Files:**
- Modify: `src/routes/dev-components.tsx`

Add sections for new atomics + sections : SocialIcon (6 platforms), LogoWordmark (3 sizes), ProgramCard (3 variants), TestimonialShellCard (default + center), ProgramsGrid, TestimonialGrid, FinalCTASection, Navbar (in isolation OR just description "see live on /"), FooterRich.

Commit: `feat(dev): /dev-components updated with Sprint 2 atomics + sections gallery`

---

## Phase 7 — a11y + DoD + tag (Tasks 17-18)

### Task 17: a11y axe-core tests Sprint 2 sections

**Files:**
- Create: `tests/a11y/sprint-2.test.tsx`

```tsx
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { FooterRich } from '@/components/layout/FooterRich';

// Mock TanStack router Link to avoid Router context requirement
vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual<typeof import('@tanstack/react-router')>('@tanstack/react-router');
  return {
    ...actual,
    Link: ({ to, children, ...rest }: { to: string; children: React.ReactNode; [k: string]: unknown }) => (
      <a href={to} {...rest}>{children}</a>
    )
  };
});

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));
vi.mock('@/hooks/useCountUp', () => ({ useCountUp: (v: number) => v }));
vi.mock('@/hooks/useSmoothScroll', () => ({ useSmoothScroll: () => vi.fn() }));

describe('a11y — Sprint 2 sections', () => {
  for (const locale of ['fr', 'en'] as const) {
    it(`Navbar has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <Navbar />
        </LanguageProvider>
      );
      // @ts-expect-error vitest-axe matcher
      expect(await axe(container)).toHaveNoViolations();
    });

    it(`ProgramsGrid has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <ProgramsGrid />
        </LanguageProvider>
      );
      // @ts-expect-error vitest-axe matcher
      expect(await axe(container)).toHaveNoViolations();
    });

    it(`TestimonialGrid has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <TestimonialGrid />
        </LanguageProvider>
      );
      // @ts-expect-error vitest-axe matcher
      expect(await axe(container)).toHaveNoViolations();
    });

    it(`FinalCTASection has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <FinalCTASection />
        </LanguageProvider>
      );
      // @ts-expect-error vitest-axe matcher
      expect(await axe(container)).toHaveNoViolations();
    });

    it(`FooterRich has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <FooterRich />
        </LanguageProvider>
      );
      // @ts-expect-error vitest-axe matcher
      expect(await axe(container)).toHaveNoViolations();
    });
  }
});
```

10 tests (5 sections × 2 locales). All 0 violations.

Commit: `test(a11y): axe-core scans for Sprint 2 sections (Navbar/ProgramsGrid/TestimonialGrid/FinalCTA/FooterRich) FR+EN 0 violations`

---

### Task 18: Final DoD + tag sprint-2-done + push

```bash
cd "C:/Users/rochdi/.gemini/antigravity-ide/scratch/jonas-diop"
bun install
bun run typecheck
bun run lint
bun run test:run
bun run build
bun run dev  # smoke test < 5s + Ctrl+C
```

Update `C:/Users/rochdi/jonas-diop-scan/HANDOFF.md` Status line :
```
**Status** : Sprint 2 (Home complète + Footer rich) ✅ DONE 2026-05-25 — Home flow live (Navbar + Hero + TrustBand + VSL + Programmes 6 cards + Testimonials 3 shells + FinalCTA + FooterRich) + 4 new atomics (SocialIcon inline SVG, LogoWordmark, ProgramCard, TestimonialShellCard) + MobileNavDrawer + Schema.org @graph injected + ~90 tests TDD + a11y 0 violations. Tag `sprint-2-done`. Prêt **Sprint 2.5 (Copy FR bulk 17 pages)** ou **Sprint 3 (À propos + CDT™)**.
```

```bash
git commit --allow-empty -m "chore: Sprint 2 complete — Home flow + Navbar + Footer + Schema.org, ~90 tests"
git tag -a sprint-2-done -m "Sprint 2 (Home complète + Footer rich) complete 2026-05-25 — Home flow + Navbar + MobileNav + Footer + Schema.org + ~90 tests TDD + 10 a11y FR+EN 0 violations. DoD validated."
git push origin main
git push origin sprint-2-done
```

---

## Self-review

### Spec coverage
- Navbar (T10), MobileNavDrawer (T11), FooterRich (T12) ✓
- ProgramsGrid (T7), TestimonialGrid (T8), FinalCTASection (T9) ✓
- Atomics SocialIcon (T1), LogoWordmark (T2), ProgramCard (T3), TestimonialShellCard (T4) ✓
- Data files programmes (T5), testimonials shells (T6) ✓
- Schema.org @graph (T13-14) ✓
- Home composition update (T15) ✓
- /dev-components update (T16) ✓
- a11y (T17), DoD + tag (T18) ✓

### Placeholder scan
Zero "TBD" / "TODO" / vague. Tous les snippets de code sont complets.

### Type consistency
- `BilingualLax<string>` partout pour i18n
- `ProgramVariant = 'groupe' | 'formation' | 'accompagnement'` cohérent T3 + T5
- `SocialPlatform` union cohérent T1 + T12
- `Locale = 'fr' | 'en'` from Sprint 0 réutilisé
- `ROUTES` from `src/config/routes.ts` (Sprint 0) réutilisé partout

---

## Execution Handoff

Plan complete at `docs/superpowers/plans/2026-05-25-sprint-2-home-footer-implementation.md`.

Subagent-driven execution recommended (same pattern as Sprints 0+1).
