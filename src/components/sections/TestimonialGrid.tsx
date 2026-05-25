import { Link } from '@tanstack/react-router';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TestimonialShellCard } from '@/components/ui/TestimonialShellCard';
import { ROUTES } from '@/config/routes';
import { testimonialShells } from '@/data/testimonials';
import { useT } from '@/lib/i18n/useT';

export function TestimonialGrid() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Témoignages clients', en: 'Client testimonials' })}
      className="py-2xl bg-base"
    >
      <div className="max-w-default mx-auto px-md">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-xl items-stretch">
          {testimonialShells.map((shell) => (
            <TestimonialShellCard key={shell.id} centerElevated={shell.centerElevated ?? false} />
          ))}
        </div>

        <p className="text-sm text-tertiary text-center mt-lg opacity-70">
          {t({
            fr: 'Témoignages clients réels disponibles bientôt.',
            en: 'Real client testimonials coming soon.'
          })}
        </p>

        <div className="text-center mt-md">
          <Link
            to={ROUTES.temoignages[locale]}
            className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver hover:text-gold transition-colors"
          >
            {t({ fr: 'Voir tous les témoignages', en: 'View all testimonials' })} →
          </Link>
        </div>
      </div>
    </section>
  );
}
