# Design tokens — Jonas Diop "Platinum Executive Authority"

## Palette OKLCH

| Token | OKLCH | HEX approx | Usage |
|---|---|---|---|
| `--bg-base` | `oklch(0.16 0.005 80)` | `#0a0a0a` | Background principal |
| `--bg-elevated` | `oklch(0.22 0.005 80)` | `#141414` | Cards, sections élevées |
| `--text-primary` | `oklch(0.94 0.008 85)` | `#f5f5f0` | Texte principal (ivoire warm) |
| `--text-secondary` | `oklch(0.71 0.012 70)` | `#a8a39a` | Texte muted |
| `--text-tertiary` | `oklch(0.59 0.014 65)` | `#8a8377` | Texte hint |
| `--accent-silver` | `oklch(0.79 0.005 270)` | `#c0c0c5` | **PRIMARY** (CTAs, focus, hover) |
| `--accent-gold` | `oklch(0.74 0.085 75)` | `#c9a572` | **RARE** — 7 usages stricts uniquement |

## Contraste WCAG

- Silver sur base : ~12:1 (AAA ✅)
- Primary text sur base : ~17:1 (AAA ✅)
- Secondary sur base : ~7.5:1 (AAA ✅)
- Tertiary sur base : ~5.2:1 (AA ✅, presque AAA)

## Typo

- Display : Space Grotesk Variable (latin)
- Body : Inter Variable (latin)
- Eyebrow : Space Grotesk uppercase tracking 0.2em + gold dot signature

## Spacing fluide

8px grid base. Tous spacings via `clamp()` de mobile (~320px) à desktop (~1920px).

## Motion

- ease-out-expo : `cubic-bezier(0.16, 1, 0.3, 1)` — animations entrance
- ease-out-cubic : `cubic-bezier(0.33, 1, 0.68, 1)` — hover/state transitions
- Durées : fast 180ms / base 280ms / slow 520ms
- `prefers-reduced-motion` respecté → toutes durées passent à 0ms
