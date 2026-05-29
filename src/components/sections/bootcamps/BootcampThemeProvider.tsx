import type { ReactNode } from 'react';
import type { BootcampVariant } from './BootcampHeroPattern';

interface BootcampThemeProviderProps {
  readonly variant: BootcampVariant;
  readonly children: ReactNode;
}

/**
 * BootcampThemeProvider — wraps a bootcamp page in a `data-bootcamp="…"`
 * attribute that activates per-variant CSS vars + cascade overrides defined
 * in `globals.css`.
 *
 * Concretely this means every `.text-gold/X`, `.border-gold/X`, `.bg-gold/X`,
 * `.outline-gold` descendant — across all sections, all shared components,
 * all inline classNames — automatically adopts the variant accent (steel /
 * bronze / platinum) without any per-component refactor.
 *
 * Also paints a subtle radial-gradient atmospheric tint on the wrapper
 * background, so each page reads as a distinct universe even before
 * scrolling — addresses the "tout se ressemble" feedback by changing the
 * overall page warmth/coolness/luminance.
 *
 * Pages outside the bootcamp scope are unaffected — the cascade only
 * targets descendants of `[data-bootcamp]`.
 *
 * Rendered as a simple `<div>` (not a fragment) because sticky descendants
 * (BootcampStickyBar) need a positioned ancestor that is not a fragment.
 * The div has no layout impact — no padding/margin/transform/overflow.
 */
export function BootcampThemeProvider({ variant, children }: BootcampThemeProviderProps) {
  return <div data-bootcamp={variant}>{children}</div>;
}
