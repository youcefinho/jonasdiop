import type { BootcampVariant } from './BootcampHeroPattern';

interface BootcampSectionNumberProps {
  readonly variant: BootcampVariant;
  /** 1-indexed numeric section position (1..N). */
  readonly index: number;
  /** Total sections — used by `army` style "01 / 17". */
  readonly total?: number;
  /** Optional className for positioning (default block, parent positions). */
  readonly className?: string;
}

/**
 * BootcampSectionNumber — eyebrow numbering distinct per bootcamp.
 *
 *  - `army`       → `01 / 17` mission briefing style (tactical, monospace tracking)
 *  - `edge`       → roman `I · II · III` (editorial, italic serif)
 *  - `activation` → `1.0 / 2.0` OS versioning (echoes IOS/ESD/ECO concept)
 *
 * Rendered as a small uppercase eyebrow line — typographic signal, never the
 * page heading. Decorative numerals are aria-hidden when paired with a real
 * section title elsewhere; this component exposes the raw text content.
 */
export function BootcampSectionNumber({
  variant,
  index,
  total,
  className = ''
}: BootcampSectionNumberProps) {
  const safeIndex = Math.max(1, Math.floor(index));
  const text = formatNumber(variant, safeIndex, total);
  return (
    <span
      className={`inline-block font-display text-eyebrow uppercase tracking-[0.28em] ${variantClass[variant]} ${className}`}
    >
      {text}
    </span>
  );
}

const variantClass: Record<BootcampVariant, string> = {
  // Steel monospace tabular — feels like a mission slate
  army: 'text-[oklch(0.78_0.04_250)]/85 tabular-nums [font-variant-numeric:tabular-nums] tracking-[0.32em]',
  // Bronze italic serif — editorial prestige
  edge: 'text-[oklch(0.7_0.08_60)]/90 italic [font-feature-settings:"smcp"]',
  // Platinum versioning — performance lab telemetry
  activation: 'text-[oklch(0.88_0.02_240)]/85 tabular-nums [font-variant-numeric:tabular-nums]'
};

function formatNumber(variant: BootcampVariant, index: number, total?: number): string {
  if (variant === 'army') {
    const cur = index.toString().padStart(2, '0');
    const tot = (total ?? 17).toString().padStart(2, '0');
    return `${cur} / ${tot}`;
  }
  if (variant === 'edge') {
    return toRoman(index);
  }
  // activation — OS-style version (1.0, 2.0, …)
  return `${index}.0`;
}

// Roman numerals up to 50 (sections per page never exceed ~20 in practice).
function toRoman(n: number): string {
  const map: ReadonlyArray<readonly [number, string]> = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let remaining = n;
  let out = '';
  for (const [value, symbol] of map) {
    while (remaining >= value) {
      out += symbol;
      remaining -= value;
    }
  }
  return out;
}
