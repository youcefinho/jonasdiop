import type { CSSProperties } from 'react';

export type BootcampVariant = 'army' | 'edge' | 'activation';

interface BootcampHeroPatternProps {
  readonly variant: BootcampVariant;
  /** Optional opacity override (defaults: 0.06–0.10 per variant). */
  readonly opacity?: number;
  /** Optional className passthrough for positioning. */
  readonly className?: string;
}

/**
 * BootcampHeroPattern — fond signature par bootcamp Trilogie.
 *
 * Trois langages visuels distincts qui découlent directement des PDFs :
 *  - `army`      → grille tactique + coordonnées GPS subtiles (steel)
 *  - `edge`      → filigrane damassé or-sur-noir (bronze, Effet Veblen)
 *  - `activation`→ onde pulse énergétique gradient animé (platinum)
 *
 * Rendu via SVG inline `<defs><pattern>` pour scale crisp toutes tailles.
 * `pointer-events-none` + `aria-hidden` — purement décoratif, jamais
 * focusable / lu par AT.
 */
export function BootcampHeroPattern({
  variant,
  opacity,
  className = ''
}: BootcampHeroPatternProps) {
  const baseStyle: CSSProperties = {
    opacity: opacity ?? defaultOpacity[variant]
  };
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={baseStyle}
    >
      {variant === 'army' ? <ArmyTacticalGrid /> : null}
      {variant === 'edge' ? <EdgeDamaskFiligrane /> : null}
      {variant === 'activation' ? <ActivationEnergyPulse /> : null}
    </div>
  );
}

const defaultOpacity: Record<BootcampVariant, number> = {
  army: 0.08,
  edge: 0.07,
  activation: 0.1
};

// ─── ARMY — tactical grid + GPS coordinates ──────────────────────────────
function ArmyTacticalGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
    >
      <defs>
        <pattern
          id="bootcamp-army-grid"
          x="0"
          y="0"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          {/* Fine grid lines — steel */}
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="oklch(0.65 0.04 250)" strokeWidth="0.5" />
          {/* Crosshair tick marks at intersections */}
          <line x1="0" y1="0" x2="6" y2="0" stroke="oklch(0.7 0.04 250)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="oklch(0.7 0.04 250)" strokeWidth="1" />
        </pattern>
        <pattern
          id="bootcamp-army-coords"
          x="0"
          y="0"
          width="192"
          height="192"
          patternUnits="userSpaceOnUse"
        >
          {/* Sparse coordinate labels */}
          <text
            x="6"
            y="14"
            fill="oklch(0.65 0.04 250)"
            fontSize="7"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.1em"
          >
            45.5089°N
          </text>
          <text
            x="100"
            y="100"
            fill="oklch(0.65 0.04 250)"
            fontSize="7"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.1em"
          >
            73.5617°W
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bootcamp-army-grid)" />
      <rect width="100%" height="100%" fill="url(#bootcamp-army-coords)" />
    </svg>
  );
}

// ─── EDGE — damask filigrane gold-on-black (Veblen prestige) ─────────────
function EdgeDamaskFiligrane() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
    >
      <defs>
        <pattern
          id="bootcamp-edge-damask"
          x="0"
          y="0"
          width="96"
          height="96"
          patternUnits="userSpaceOnUse"
        >
          {/* Damask quatrefoil — ornement luxe */}
          <g fill="none" stroke="oklch(0.62 0.08 60)" strokeWidth="0.6" strokeLinecap="round">
            <circle cx="48" cy="48" r="14" />
            <path d="M 48 20 Q 60 32 48 48 Q 36 32 48 20" />
            <path d="M 48 76 Q 60 64 48 48 Q 36 64 48 76" />
            <path d="M 20 48 Q 32 36 48 48 Q 32 60 20 48" />
            <path d="M 76 48 Q 64 36 48 48 Q 64 60 76 48" />
            <circle cx="48" cy="48" r="2" fill="oklch(0.62 0.08 60)" />
            {/* Corner accents */}
            <circle cx="0" cy="0" r="1.5" fill="oklch(0.62 0.08 60)" />
            <circle cx="96" cy="0" r="1.5" fill="oklch(0.62 0.08 60)" />
            <circle cx="0" cy="96" r="1.5" fill="oklch(0.62 0.08 60)" />
            <circle cx="96" cy="96" r="1.5" fill="oklch(0.62 0.08 60)" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bootcamp-edge-damask)" />
    </svg>
  );
}

// ─── ACTIVATION — energy pulse wave (biohacking / RISE) ──────────────────
function ActivationEnergyPulse() {
  return (
    <svg
      className="absolute inset-0 h-full w-full motion-safe:animate-[activation-pulse-shift_18s_ease-in-out_infinite]"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
    >
      <defs>
        <radialGradient id="bootcamp-activation-pulse-a" cx="20%" cy="30%" r="60%">
          <stop offset="0%" stopColor="oklch(0.85 0.02 240)" stopOpacity="0.55" />
          <stop offset="60%" stopColor="oklch(0.85 0.02 240)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="oklch(0.85 0.02 240)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bootcamp-activation-pulse-b" cx="80%" cy="70%" r="55%">
          <stop offset="0%" stopColor="oklch(0.78 0.09 200)" stopOpacity="0.45" />
          <stop offset="55%" stopColor="oklch(0.78 0.09 200)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="oklch(0.78 0.09 200)" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="bootcamp-activation-wave"
          x="0"
          y="0"
          width="320"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* Sine wave — performance pulse */}
          <path
            d="M 0 40 Q 40 10 80 40 T 160 40 T 240 40 T 320 40"
            fill="none"
            stroke="oklch(0.85 0.02 240)"
            strokeWidth="0.8"
            opacity="0.55"
          />
          <path
            d="M 0 50 Q 40 80 80 50 T 160 50 T 240 50 T 320 50"
            fill="none"
            stroke="oklch(0.85 0.02 240)"
            strokeWidth="0.5"
            opacity="0.35"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bootcamp-activation-pulse-a)" />
      <rect width="100%" height="100%" fill="url(#bootcamp-activation-pulse-b)" />
      <rect width="100%" height="100%" fill="url(#bootcamp-activation-wave)" />
    </svg>
  );
}
