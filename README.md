# Jonas Diop — DIOP Stratégies Internationales Inc.

Site web premium consulting bilingue FR/EN.

## Stack

Bun · Vite 8 · React 19 · TanStack Router · TypeScript 6 strict · Tailwind v4 (OKLCH) · Motion · Lenis · Cloudflare Workers · Vitest 4 · Biome

## Dev local

```bash
bun install
bun run dev          # http://localhost:5173
```

## Scripts

| Commande | Description |
|---|---|
| `bun run dev` | Dev server Vite |
| `bun run build` | Build production dans `dist/` |
| `bun run preview` | Preview du build local |
| `bun run test` | Vitest watch mode |
| `bun run test:run` | Vitest single run (CI) |
| `bun run test:ui` | Vitest UI |
| `bun run lint` | Biome lint check |
| `bun run lint:fix` | Biome auto-fix |
| `bun run typecheck` | TypeScript check sans emit |
| `bun run deploy:staging` | Deploy `jonas-diop-staging.intralys.dev` |
| `bun run deploy:prod` | Deploy `jonas-diop.intralys.dev` (use GitHub Actions manual trigger préférablement) |

## Architecture

```
src/
├── routes/              # File-based TanStack Router (FR default + /en/ mirror)
│   ├── __root.tsx
│   ├── index.tsx
│   ├── en.tsx           # Layout EN
│   └── en/
│       └── index.tsx
├── components/
│   ├── ui/              # Atomiques (CTAPill, Eyebrow, Logo, etc.)
│   ├── layout/          # Nav, MobileNav, Footer
│   ├── sections/        # Hero, TrustBand, ProgramsGrid, CDTDiagram, etc.
│   └── lp/              # LPProgramTemplate (réutilisable 6 LPs)
├── lib/
│   ├── i18n/            # BilingualLax + ta + useT + LanguageProvider
│   ├── ghl/             # Form submit + Blog headless (Sprint 5+)
│   ├── tracking/        # Meta Pixel + GA4 + Clarity (Sprint 6)
│   ├── seo/             # Schema.org + meta helpers
│   ├── motion/          # Lenis init + presets
│   └── utils/           # cn, format, etc.
├── config/
│   ├── clientConfig.ts  # IDs externes (vides initialement)
│   └── routes.ts        # Type-safe paths 17 pages bilingues
├── styles/
│   ├── tokens.css       # OKLCH palette + clamp() typo/spacing
│   └── globals.css      # text-stability + reset léger
├── styles.css           # Tailwind v4 entry
├── main.tsx
├── router.tsx
└── worker.ts            # Cloudflare Worker entry (SSR meta Sprint 6+)
```

## Design system

Voir `C:/Users/rochdi/jonas-diop-scan/BRIEF-FINAL.md` section 3.

- Palette : Dark warm `oklch(0.16 0.005 80)` base + Silver primary `oklch(0.79 0.005 270)` + Gold rare `oklch(0.74 0.085 75)` (7 usages stricts : logo dot / CDT™ marker / stats trust band / hero primary CTA / final CTA / checkmarks qualification / footer Consultations Privées)
- Typo : Space Grotesk display + Inter body (self-host Fontsource)
- Stitch boards VALIDATED : `./stitch/` (NE PAS regénérer)

## i18n

Pattern `BilingualLax<T>` :

```tsx
const { t, locale } = useT();
return <h1>{t({ fr: 'Bonjour', en: 'Hello' })}</h1>;
```

FR par défaut (Québec), EN sur `/en/` mirror.

## Compliance

- Loi 25 Québec (cookie banner + DPO + NEQ footer)
- Pas AMF / OACIQ (consulting non-régulé)

## Deploy

- Staging : push sur `main` → auto-deploy via GitHub Actions
- Production : trigger manuel via GitHub Actions `workflow_dispatch`

## Documentation projet

Tous les docs de planification dans `C:/Users/rochdi/jonas-diop-scan/` :

- `HANDOFF.md` — reprise de session
- `BRIEF-FINAL.md` — brief consolidé
- `PLAN-TECHNIQUE.md` — plan 12 sprints
- `INTRALYS-CLIENT-AUTONOMY-PATTERN.md` — pattern GHL Blog headless
- `sprint-0-implementation-plan.md` — ce plan d'exécution
