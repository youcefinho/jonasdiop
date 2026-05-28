import type { JonasQuote } from '@/data/copy/quotes';
import { useT } from '@/lib/i18n/useT';

interface PullQuoteProps {
  readonly source: JonasQuote;
  /** Bilingual eyebrow above the quote. Optional, defaults to "En direct du founder". */
  readonly eyebrowFr?: string;
  readonly eyebrowEn?: string;
  /** Reduced-emphasis variant for inline placement (no surrounding panel). */
  readonly variant?: 'panel' | 'inline';
}

/**
 * PullQuote — typographic quote block voicing Jonas Diop verbatim.
 *
 * The site copy is written in "vous" (institutional voice). Quotes are
 * written in "tu" (Jonas's own video voice). This component clearly
 * frames the tone shift so the mix reads as intentional — italic body,
 * silver/cream display serif, gold opening glyph, attribution line.
 *
 * Honours Sprint 10 visual signature : no new animations introduced —
 * the parent ScrollReveal/StaggerReveal handles entrance. GPU-safe.
 */
export function PullQuote({
  source,
  eyebrowFr = 'En direct du founder',
  eyebrowEn = 'Straight from the founder',
  variant = 'panel'
}: PullQuoteProps) {
  const { t } = useT();
  const wrapperClass =
    variant === 'panel'
      ? 'relative max-w-[68ch] mx-auto px-md py-2xl flex flex-col items-center text-center gap-md bg-elevated/40 border-y border-silver/10'
      : 'relative max-w-[58ch] mx-auto px-md py-lg flex flex-col items-center text-center gap-sm';

  return (
    <figure className={wrapperClass}>
      <span className="text-eyebrow uppercase tracking-[0.2em] text-gold/70 font-display text-[10px]">
        {t({ fr: eyebrowFr, en: eyebrowEn })}
      </span>

      <blockquote className="relative">
        {/* Decorative opening glyph (large gold quote, top-left of the block) */}
        <span
          aria-hidden="true"
          className="absolute -top-md -left-md text-gold/30 font-display text-[clamp(3rem,2rem+2.5vw,5rem)] leading-none select-none"
        >
          “
        </span>
        <p
          className={[
            'relative text-pretty italic font-display font-normal text-primary',
            'leading-[1.25]',
            variant === 'panel'
              ? 'text-[clamp(1.25rem,0.9rem+1.4vw,2rem)]'
              : 'text-[clamp(1.1rem,0.85rem+1vw,1.5rem)]'
          ].join(' ')}
        >
          {t(source.quote)}
        </p>
      </blockquote>

      <figcaption className="flex flex-col items-center gap-1 mt-sm">
        <span className="text-body text-primary font-display font-medium">
          {source.attribution}
        </span>
        <span className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
          {t(source.role)}
        </span>
      </figcaption>
    </figure>
  );
}
