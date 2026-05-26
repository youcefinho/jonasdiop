import { Link } from '@tanstack/react-router';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { ProgramCard } from '@/components/ui/ProgramCard';
import { ROUTES } from '@/config/routes';
import { type ProgrammeVariant, programmes } from '@/data/programmes';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

/**
 * Row grouping by variant — matches Stitch board 05 pattern of "eyebrow gold
 * category → 3 cards row" instead of one flat grid. Each variant gets its own
 * row eyebrow with gold accent and the programmes filter through.
 */
interface VariantRow {
  readonly variant: ProgrammeVariant;
  readonly eyebrow: BilingualLax<string>;
}

const VARIANT_ROWS: readonly VariantRow[] = [
  {
    variant: 'groupe',
    eyebrow: {
      fr: 'Programmes de groupe',
      en: 'Group programs'
    }
  },
  {
    variant: 'formation',
    eyebrow: {
      fr: 'Formations spécialisées',
      en: 'Specialized trainings'
    }
  },
  {
    variant: 'accompagnement',
    eyebrow: {
      fr: 'Accompagnement privé',
      en: 'Private advisory'
    }
  }
] as const;

export function ProgramsGrid() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: "Programmes d'accompagnement", en: 'Coaching programs' })}
      className="relative py-2xl bg-base"
    >
      <FiligraneNumber number="04" position="right" />
      <div className="relative max-w-default mx-auto px-md">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-sm mb-xl">
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

        {/* Rows by variant — each with gold eyebrow then 3-col grid */}
        <div className="flex flex-col gap-2xl">
          {VARIANT_ROWS.map((row) => {
            const cards = programmes.filter((p) => p.variant === row.variant);
            if (cards.length === 0) return null;
            return (
              <div
                key={row.variant}
                data-program-row={row.variant}
                className="flex flex-col gap-md"
              >
                {/* Row eyebrow — gold dot signature, uppercase tracked */}
                <div className="flex items-center gap-sm">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
                  />
                  <span className="text-eyebrow uppercase tracking-widest text-gold opacity-90 font-display">
                    {t(row.eyebrow)}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-1 h-px bg-gradient-to-r from-gold/30 via-silver/10 to-transparent"
                  />
                </div>

                {/* Cards grid — auto-fit 1/2/3 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                  {cards.map((p) => (
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
              </div>
            );
          })}
        </div>

        <div className="text-center mt-xl">
          <Link
            to={ROUTES.services[locale]}
            className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver hover:text-gold transition-colors"
          >
            {t({ fr: 'Voir tous les programmes en détail', en: 'View all programs in detail' })}{' '}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
