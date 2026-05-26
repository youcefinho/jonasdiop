import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { useT } from '@/lib/i18n/useT';

/**
 * MarqueeTestimonials — infinite horizontal scroll of testimonial mini-cards.
 *
 * Below the asymmetric focal grid (TestimonialGrid). Duplicates the list to
 * create seamless loop via CSS keyframes translateX from 0 → -50%.
 *
 * GPU-safe (transform only). Pauses on hover. Respects reduced-motion.
 *
 * Inspired by editorial agency sites (Awwwards-tier) where social proof
 * is reinforced via a slow marquee under the main grid.
 */
export function MarqueeTestimonials() {
  const { t } = useT();

  // Duplicate list ×2 for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      aria-label={t({
        fr: 'Bandeau témoignages défilant',
        en: 'Testimonials marquee strip'
      })}
      className="relative py-xl bg-base border-y border-silver/10 overflow-hidden"
    >
      {/* Edge fade masks — soft fade to bg-base on left + right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-base to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-base to-transparent"
      />

      {/* Marquee track — animated translateX, pauses on hover */}
      <div className="flex animate-marquee hover:[animation-play-state:paused] gap-md w-max">
        {doubled.map((testimonial, idx) => (
          <article
            // Each item appears twice in `doubled` (×2 for seamless loop) ;
            // the id alone collides between the 1st and 2nd half, so we
            // append a copy-half marker derived from `idx`. Order is stable.
            key={`${testimonial.id}-${idx < testimonials.length ? 'a' : 'b'}`}
            className={[
              'flex items-start gap-sm shrink-0 w-[clamp(280px,32vw,420px)]',
              'p-md bg-elevated rounded-[clamp(0.5rem,0.5vw+0.3rem,0.875rem)]',
              'ring-1 ring-silver/15',
              'shadow-[inset_0_1px_1px_oklch(1_0_0/0.04)]'
            ].join(' ')}
          >
            {/* Small portrait */}
            <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden ring-2 ring-base">
              <img
                src={testimonial.photo}
                alt={t(testimonial.photoAlt)}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mini quote + meta */}
            <div className="flex flex-col gap-1 min-w-0 flex-1">
              <Quote
                className="h-3 w-3 max-w-none text-gold opacity-70 shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm text-silver opacity-90 text-pretty leading-snug line-clamp-2">
                {t(testimonial.quote)}
              </p>
              <p className="text-eyebrow uppercase tracking-widest text-silver opacity-55 font-display text-[10px] mt-1">
                {testimonial.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
