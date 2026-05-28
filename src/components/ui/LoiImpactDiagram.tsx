import { useT } from '@/lib/i18n/useT';

interface LoiImpactAxes {
  readonly x: {
    readonly label: { fr: string; en: string };
    readonly sub: { fr: string; en: string };
  };
  readonly y: {
    readonly label: { fr: string; en: string };
    readonly sub: { fr: string; en: string };
  };
}

interface LoiImpactDiagramProps {
  readonly axes: LoiImpactAxes;
}

/**
 * LoiImpactDiagram — minimalist 2-axis SVG sketch matching Jonas's
 * "loi de l'impact" framing : Scale (X) × Monetization (Y).
 *
 * Pure SVG, no motion deps. Stroke uses currentColor so the gold accent
 * can be inherited via wrapping a `text-gold` parent. Sized via CSS so
 * it adapts to whichever section it lives in.
 */
export function LoiImpactDiagram({ axes }: LoiImpactDiagramProps) {
  const { t } = useT();
  return (
    <figure className="w-full max-w-[480px] mx-auto flex flex-col items-center gap-md">
      <svg
        viewBox="0 0 320 240"
        role="img"
        aria-label={t({
          fr: "Loi de l'impact — axes Échelle (X) et Monétisation (Y)",
          en: 'Law of impact — Scale (X) and Monetization (Y) axes'
        })}
        className="w-full h-auto text-silver/60"
      >
        {/* Background grid */}
        <g stroke="currentColor" strokeWidth="0.5" opacity="0.15">
          {[40, 80, 120, 160].map((y) => (
            <line key={`hgrid-${y}`} x1="40" y1={y} x2="280" y2={y} />
          ))}
          {[80, 120, 160, 200, 240].map((x) => (
            <line key={`vgrid-${x}`} x1={x} y1="40" x2={x} y2="200" />
          ))}
        </g>

        {/* Y axis */}
        <line x1="40" y1="40" x2="40" y2="200" stroke="currentColor" strokeWidth="1.2" />
        {/* X axis */}
        <line x1="40" y1="200" x2="280" y2="200" stroke="currentColor" strokeWidth="1.2" />

        {/* Multiplier curve — diagonal accent showing scale × monetization combined growth */}
        <path
          d="M 40 200 Q 130 180, 180 130 T 280 40"
          stroke="oklch(0.74 0.085 75)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 3"
          opacity="0.7"
        />
        <circle cx="280" cy="40" r="3.5" fill="oklch(0.74 0.085 75)" />

        {/* Y label */}
        <text
          x="32"
          y="120"
          textAnchor="middle"
          transform="rotate(-90 32 120)"
          fontSize="10"
          fill="currentColor"
          opacity="0.7"
          fontFamily="serif"
        >
          {t(axes.y.label)}
        </text>
        {/* X label */}
        <text
          x="160"
          y="225"
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
          opacity="0.7"
          fontFamily="serif"
        >
          {t(axes.x.label)}
        </text>
      </svg>

      <figcaption className="flex items-center justify-center gap-lg text-eyebrow uppercase tracking-widest text-silver opacity-60 font-display text-[10px] flex-wrap">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-gold/60" />
          {t(axes.x.sub)}
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-silver/40" />
          {t(axes.y.sub)}
        </span>
      </figcaption>
    </figure>
  );
}
