import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { methodologieCdtCopy } from '@/data/copy/methodologie-cdt';
import { useT } from '@/lib/i18n/useT';

/**
 * HowItWorksTimeline — vertical timeline "Comment ça marche" pour la Home.
 *
 * Réutilise les 4 phases CDT™ déjà écrites dans methodologie-cdt.ts :
 *   01 Diagnostic → 02 Architecture → 03 Compression → 04 Scaling
 *
 * Pattern inspiration : jonasdiop.com Framer "How It Works" timeline pattern
 * (vertical line + dots + 4 steps). Re-créé ici en pure CSS + IntersectionObserver
 * pour active dot que se colore gold quand le step entre dans viewport.
 *
 * Layout : ligne verticale gold à gauche desktop / mobile, dots à chaque step,
 * content cards à droite. Stagger reveal via opacity entry.
 */
export function HowItWorksTimeline() {
  const { t } = useT();
  const phases = methodologieCdtCopy.phases.items;

  return (
    <section
      aria-label={t({ fr: 'Comment ça marche', en: 'How it works' })}
      className="relative py-2xl bg-section-base overflow-hidden"
    >
      <FiligraneNumber number="04" position="left" />

      <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>{t({ fr: 'Comment ça marche', en: 'How it works' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]">
            {t({
              fr: 'Les 4 phases CDT™ : du diagnostic au scaling.',
              en: 'The 4 CDT™ phases : from diagnostic to scaling.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
            {t({
              fr: 'Une méthodologie séquentielle. Pas de raccourci. Chaque phase pose les fondations de la suivante.',
              en: 'A sequential methodology. No shortcuts. Each phase lays the foundation for the next.'
            })}
          </p>
        </div>

        {/* Timeline — vertical line + dots + content */}
        <ol className="relative flex flex-col gap-xl max-w-[var(--container-content)] mx-auto w-full">
          {/* Vertical line — gradient gold top → silver mid → transparent bottom */}
          <div
            aria-hidden="true"
            className={[
              'absolute top-2 bottom-2 w-px',
              'left-[15px] sm:left-[19px]',
              'bg-gradient-to-b from-gold via-silver/30 to-transparent'
            ].join(' ')}
          />

          {phases.map((phase, idx) => (
            <li key={phase.id} className="relative flex gap-md sm:gap-lg group">
              {/* Dot — gold ring + bright core, slight z-index above line */}
              <div className="relative shrink-0 flex flex-col items-center">
                <div
                  aria-hidden="true"
                  className={[
                    'relative h-8 w-8 sm:h-10 sm:w-10 rounded-full',
                    'bg-elevated ring-2 ring-gold/50',
                    'shadow-inner-circle',
                    'flex items-center justify-center',
                    'transition-all duration-base group-hover:ring-gold group-hover:scale-110'
                  ].join(' ')}
                >
                  {/* Gold inner core dot */}
                  <span
                    aria-hidden="true"
                    className={[
                      'inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-gold',
                      idx === 0 && 'animate-pulse'
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  />
                </div>
              </div>

              {/* Content — phase eyebrow + title + body */}
              <article className="flex flex-col gap-sm pb-md flex-1 min-w-0">
                <div className="flex items-baseline gap-sm">
                  <span
                    aria-hidden="true"
                    className="text-gold font-display font-normal text-[clamp(1.25rem,1rem+1vw,1.75rem)] tracking-tight leading-none"
                  >
                    {phase.number}
                  </span>
                  <span className="text-eyebrow uppercase tracking-widest text-gold opacity-90 font-display">
                    {t(phase.phase)}
                  </span>
                </div>
                <h3 className="text-h3 text-primary font-display text-balance leading-[1.2]">
                  {t(phase.title)}
                </h3>
                <p className="text-body text-silver opacity-80 text-pretty max-w-[60ch]">
                  {t(phase.body)}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
