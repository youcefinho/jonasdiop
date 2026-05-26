import { Link } from '@tanstack/react-router';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { TestimonialRealCard } from '@/components/ui/TestimonialRealCard';
import { ROUTES } from '@/config/routes';
import { testimonials } from '@/data/testimonials';
import { useT } from '@/lib/i18n/useT';

/**
 * TestimonialGrid — asymmetric focal grid matching Stitch board 09.
 *
 * Layout :
 *   - Desktop (lg) : 12-col grid, flank cards col-span-3, focal card col-span-6
 *     vertically centered, with focal card slightly elevated above flanks.
 *   - Tablet (md) : 3 equal cols, focal card uses focal variant (gold ring).
 *   - Mobile : single column stack, focal first.
 *
 * Cards : `TestimonialRealCard` with portrait + quote + name/role + metric chip.
 * Photos from Stitch boards 04 (David), 07 (Marc, focal), 26 (Sophie).
 */
export function TestimonialGrid() {
  const { t, locale } = useT();

  // Order: flank (Sophie) — focal (Marc) — flank (David), per Stitch board 09.
  const flankLeft = testimonials.find((t) => t.id === 'sophie-martin');
  const focal = testimonials.find((t) => t.centerElevated);
  const flankRight = testimonials.find((t) => t.id === 'david-chen');

  if (!flankLeft || !focal || !flankRight) {
    return null;
  }

  return (
    <section
      aria-label={t({ fr: 'Témoignages clients', en: 'Client testimonials' })}
      className="relative py-2xl bg-base"
    >
      <FiligraneNumber number="05" position="left" />
      <div className="relative max-w-default mx-auto px-md">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-sm">
          <Eyebrow>{t({ fr: 'Ils ont appliqué CDT™', en: 'They applied CDT™' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance max-w-content">
            {t({
              fr: '857 entrepreneurs ont déjà ajouté un zéro.',
              en: '857 entrepreneurs have already added a zero.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-80 max-w-content text-pretty">
            {t({
              fr: 'Pas de théorie. Du pragmatisme mesurable.',
              en: 'Not theory. Measurable pragmatism.'
            })}
          </p>
        </div>

        {/* Asymmetric focal grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md mt-xl items-center">
          {/* Flank LEFT — Sophie Martin */}
          <div className="md:col-span-3 md:translate-y-3">
            <TestimonialRealCard testimonial={flankLeft} />
          </div>

          {/* FOCAL CENTER — Marc Lefebvre (larger, gold ring) */}
          <div className="md:col-span-6 md:-translate-y-3">
            <TestimonialRealCard testimonial={focal} focal />
          </div>

          {/* Flank RIGHT — David Chen */}
          <div className="md:col-span-3 md:translate-y-3">
            <TestimonialRealCard testimonial={flankRight} />
          </div>
        </div>

        {/* Disclaimer + CTA */}
        <p className="text-sm text-tertiary text-center mt-xl opacity-60 max-w-[55ch] mx-auto">
          {t({
            fr: 'Portraits et témoignages illustratifs — versions clients réelles publiées à mesure des autorisations reçues.',
            en: 'Illustrative portraits and quotes — real client versions published as authorizations are received.'
          })}
        </p>

        <div className="text-center mt-md">
          <Link
            to={ROUTES.temoignages[locale]}
            className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver hover:text-gold transition-colors"
          >
            {t({ fr: 'Voir tous les témoignages', en: 'View all testimonials' })}{' '}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
