interface MeshGradientProps {
  /** Variant selects the blob layout + colors. */
  variant?: 'warm-cream' | 'silver-gold' | 'deep-gold';
  /** Override opacity (default 0.18). Range 0..1. */
  opacity?: number;
}

/**
 * MeshGradient — atmospheric backdrop for section depth.
 *
 * Multi-blob radial gradients overlapping for a soft "mesh" look. GPU-safe :
 * only `background-position` animates slowly via CSS keyframes (defined inline
 * via style with custom keyframes registered globally in globals.css).
 *
 * Use as absolute fill inside a relative+overflow-hidden section parent.
 * Apply `aria-hidden` + `pointer-events-none` so it never blocks interaction.
 *
 * Inspired by soft-skill skill "Ethereal Glass" archetype : "radial mesh
 * gradients (e.g. subtle glowing purple/emerald orbs) in the background".
 * Tuned for our Platinum palette (cream + silver + gold rare).
 */

const VARIANTS: Record<NonNullable<MeshGradientProps['variant']>, string> = {
  // Warm cream wash + silver halo + soft gold center
  'warm-cream': `
    radial-gradient(ellipse 60% 50% at 20% 35%, oklch(0.88 0.014 80 / 1) 0%, transparent 65%),
    radial-gradient(ellipse 70% 50% at 80% 65%, oklch(0.82 0.008 270 / 0.7) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 50% 50%, oklch(0.74 0.085 75 / 0.4) 0%, transparent 60%)
  `,
  // Silver dominant + gold accent
  'silver-gold': `
    radial-gradient(ellipse 70% 55% at 30% 30%, oklch(0.84 0.008 270 / 1) 0%, transparent 65%),
    radial-gradient(ellipse 55% 45% at 70% 70%, oklch(0.74 0.085 75 / 0.5) 0%, transparent 70%)
  `,
  // Deeper gold + cream tertiary
  'deep-gold': `
    radial-gradient(ellipse 65% 55% at 50% 40%, oklch(0.74 0.085 75 / 1) 0%, transparent 65%),
    radial-gradient(ellipse 55% 45% at 20% 80%, oklch(0.88 0.018 80 / 0.6) 0%, transparent 70%),
    radial-gradient(ellipse 55% 45% at 80% 80%, oklch(0.82 0.008 270 / 0.4) 0%, transparent 70%)
  `
};

export function MeshGradient({ variant = 'warm-cream', opacity = 0.18 }: MeshGradientProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 animate-mesh-drift"
      style={{
        opacity,
        backgroundImage: VARIANTS[variant],
        backgroundSize: '180% 180%',
        backgroundPosition: '0% 0%'
      }}
    />
  );
}
