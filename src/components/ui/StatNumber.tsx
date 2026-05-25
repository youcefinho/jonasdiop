import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

interface StatNumberProps {
  value: number;
  suffix?: string;
  label: BilingualLax<string>;
}

/**
 * Big number with animated CountUp + label below.
 * Number in gold (one of the 7 strict gold usages: trust band stats).
 * Label in silver uppercase tracking-widest.
 */
export function StatNumber({ value, suffix = '', label }: StatNumberProps) {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const animated = useCountUp(value, { duration: 1800, threshold: 0.4, ref });

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-xs">
      <span
        aria-live="polite"
        aria-atomic="true"
        className="text-gold font-display text-[clamp(2.25rem,1.7rem+2.5vw,3.5rem)] tracking-tight leading-none"
      >
        {animated}
        {suffix}
      </span>
      <span className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
        {t(label)}
      </span>
    </div>
  );
}
