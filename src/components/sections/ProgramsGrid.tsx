import { Link } from '@tanstack/react-router';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { ProgramCard } from '@/components/ui/ProgramCard';
import { ROUTES } from '@/config/routes';
import { programmes } from '@/data/programmes';
import { useT } from '@/lib/i18n/useT';

export function ProgramsGrid() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: "Programmes d'accompagnement", en: 'Coaching programs' })}
      className="relative py-2xl bg-base"
    >
      <FiligraneNumber number="04" position="right" />
      <div className="relative max-w-default mx-auto px-md">
        <div className="flex flex-col items-center text-center gap-sm">
          <Eyebrow>{t({ fr: 'Nos programmes', en: 'Our programs' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance max-w-content">
            {t({
              fr: "Écosystèmes complets d'accompagnement.",
              en: 'Complete coaching ecosystems.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-80 max-w-content text-pretty">
            {t({
              fr: 'Programmes de groupe, formations spécialisées et consultations stratégiques privées.',
              en: 'Group programs, specialized trainings, and private strategic consultations.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mt-xl">
          {programmes.map((p) => (
            <ProgramCard
              key={p.id}
              variant={p.variant}
              href={ROUTES[p.hrefKey][locale]}
              eyebrow={p.eyebrow}
              title={p.name}
              description={p.description}
            />
          ))}
        </div>

        <div className="text-center mt-lg">
          <Link
            to={ROUTES.services[locale]}
            className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver hover:text-gold transition-colors"
          >
            {t({ fr: 'Voir tous les programmes en détail', en: 'View all programs in detail' })} →
          </Link>
        </div>
      </div>
    </section>
  );
}
