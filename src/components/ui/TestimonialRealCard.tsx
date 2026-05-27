import { clsx } from 'clsx';
import { Quote } from 'lucide-react';
import type { TestimonialReal } from '@/data/testimonials';
import { useTilt3D } from '@/hooks/useTilt3D';
import { useT } from '@/lib/i18n/useT';

interface TestimonialRealCardProps {
  testimonial: TestimonialReal;
  /** Focal card variant — larger padding, gold ring, bigger quote font. */
  focal?: boolean;
}

/**
 * TestimonialRealCard — single client testimonial with portrait, quote, name/role
 * and metric chip. Matches Stitch board 09 (testimonials-institutional-grid).
 *
 * Two visual variants :
 *   - flank (default) : silver ring, compact, smaller quote
 *   - focal (centerElevated) : gold ring, generous padding, bigger quote, gold chip
 *
 * Portraits are AI-generated per Stitch boards 04 / 07 / 26 — to be replaced with
 * real photos once H3 (testimonials réels Jonas) confirmed.
 */
export function TestimonialRealCard({ testimonial, focal = false }: TestimonialRealCardProps) {
  const { t } = useT();
  // 3D tilt mouse follow uniquement sur card focal (1× max per page pour ne
  // pas surstimuler). Subtle 5deg max + perspective 1200.
  const tiltRef = useTilt3D<HTMLElement>({ maxTilt: 5, perspective: 1200, glowIntensity: 0 });
  return (
    <article
      ref={focal ? tiltRef : undefined}
      aria-label={t({
        fr: `Témoignage de ${testimonial.name}`,
        en: `Testimonial from ${testimonial.name}`
      })}
      className={clsx(
        'group relative flex flex-col overflow-hidden rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)]',
        'bg-elevated transition-all duration-base',
        // hover-lift uniquement sur flank cards (focal a son propre tilt 3D)
        !focal && 'hover-lift',
        // Haptic depth shadows extracted jonasdiop.com — focal card uses
        // gold-glow focal shadow + animated rotating gold border ; flank cards
        // use multi-layer card shadow.
        focal
          ? 'ring-1 ring-gold/30 shadow-haptic-focal border-glow'
          : 'ring-1 ring-silver/15 shadow-haptic-card shadow-haptic-card-hover'
      )}
    >
      {/* Portrait — aspect square focal card, slightly portrait on flanks */}
      <div className={clsx('relative overflow-hidden', focal ? 'aspect-[4/3]' : 'aspect-square')}>
        <img
          src={testimonial.photo}
          alt={t(testimonial.photoAlt)}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
        />
        {/* Vignette bottom for caption legibility cohesion */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-elevated via-transparent to-transparent"
        />
        {/* Metric chip overlay top-right */}
        <span
          aria-hidden="true"
          className={clsx(
            'absolute top-sm right-sm px-sm py-1 rounded-full text-eyebrow uppercase tracking-widest font-display backdrop-blur-md',
            focal
              ? 'bg-gold/90 text-base ring-1 ring-gold/40'
              : 'bg-base/80 text-silver ring-1 ring-silver/20'
          )}
        >
          {t(testimonial.metric)}
        </span>
      </div>

      {/* Quote + meta */}
      <div className={clsx('relative flex flex-col gap-sm', focal ? 'p-lg' : 'p-md')}>
        <Quote
          className={clsx(
            'shrink-0',
            focal
              ? 'h-7 w-7 max-w-none text-gold opacity-80'
              : 'h-5 w-5 max-w-none text-silver opacity-50'
          )}
          aria-hidden="true"
        />
        <p
          className={clsx(
            'text-pretty leading-[1.5] text-silver',
            focal ? 'text-[clamp(1rem,0.9rem+0.5vw,1.25rem)] opacity-95' : 'text-body opacity-85'
          )}
        >
          {t(testimonial.quote)}
        </p>
        <div className="mt-auto pt-sm border-t border-silver/10 flex flex-col gap-1">
          <p
            className={clsx(
              'font-display text-primary tracking-tight',
              focal ? 'text-[clamp(1rem,0.85rem+0.65vw,1.25rem)]' : 'text-body'
            )}
          >
            {testimonial.name}
          </p>
          <p className="text-eyebrow uppercase tracking-widest text-silver opacity-60 font-display">
            {t(testimonial.role)}
          </p>
        </div>
      </div>
    </article>
  );
}
