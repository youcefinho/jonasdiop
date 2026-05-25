/**
 * Motion presets — Jonas Diop animation timings and easings.
 * Used by hooks (useCountUp, useMaskReveal) and direct CSS-in-JS in components.
 * Aligned with tokens.css --duration-* and --ease-* values.
 */

export const easings = {
  outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  outCubic: 'cubic-bezier(0.33, 1, 0.68, 1)'
} as const;

export const durations = {
  fast: 180,
  base: 280,
  slow: 520,
  maskReveal: 800,
  countUp: 1800
} as const;

/**
 * Hero entrance sequence (delays from mount, in ms).
 * See spec : 2026-05-25-hero-direction-c-design.md Animation choreography
 */
export const heroEntranceTimings = {
  eyebrow: 200,
  h1MaskReveal: 400,
  sub: 900,
  ctaPrimary: 1100,
  ctaSecondary: 1200,
  scrollCue: 1400
} as const;
