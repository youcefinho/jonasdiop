import { Gift } from 'lucide-react';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';

interface BonusItem {
  /** Nom du bonus (1 ligne). */
  readonly name: string;
  /** Description courte (1-2 lignes). */
  readonly description: string;
  /** Valeur estimée formatée (ex. "997$" — affichée en pill gold). */
  readonly value: string;
}

interface BonusListProps {
  /** Headline H2 (déjà traduit). */
  readonly headline: string;
  /** Liste des bonus — verbatim PDF Trilogie §7 (6 bonus typiques). */
  readonly items: readonly BonusItem[];
  /** Label sr-only pour le pill valeur (a11y). */
  readonly valueLabel?: string;
}

/**
 * BonusList — section "Bonus inclus".
 *
 * Stacked premium cards (1 par ligne desktop & mobile, gap large). Chaque card
 * a un icon Gift en haut-gauche, nom + description à gauche, value pill gold à
 * droite. Hover lift discret. Pattern dark luxe, AUCUN néon ni gradient
 * tape-à-l'oeil — juste le gold en accent rare.
 */
export function BonusList({ headline, items, valueLabel = 'Valeur' }: BonusListProps) {
  return (
    <ScrollReveal>
      <section
        aria-label={headline}
        className="relative py-2xl bg-section-elevated border-y border-silver/10"
      >
        <div className="relative max-w-default mx-auto px-md">
          <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
            <MaskRevealHeading as="h2">{headline}</MaskRevealHeading>
          </div>

          <StaggerReveal
            as="ul"
            className="flex flex-col gap-sm max-w-[64rem] mx-auto list-none"
            staggerMs={80}
            data-card-group="bootcamp-bonus"
          >
            {items.map((item) => (
              <li
                key={`bonus-${item.name.slice(0, 48)}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-sm sm:gap-md p-md bg-base border border-silver/15 rounded-lg shadow-haptic-card hover-lift hover:border-gold/30 transition-colors duration-base"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-md border border-gold/25 bg-gold/5 text-gold/90"
                >
                  <Gift className="h-5 w-5 max-w-none shrink-0" aria-hidden="true" />
                </span>

                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <h3 className="text-h3 text-primary font-display text-balance leading-tight text-[1.0625rem]">
                    {item.name}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <p
                  role="note"
                  aria-label={`${valueLabel} — ${item.value}`}
                  className="shrink-0 self-start sm:self-center inline-flex items-baseline gap-2 px-3 py-1.5 rounded-pill border border-gold/30 bg-gold/5 m-0"
                >
                  <span
                    aria-hidden="true"
                    className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px]"
                  >
                    {valueLabel}
                  </span>
                  <span className="text-body text-gold font-display font-medium tabular-nums">
                    {item.value}
                  </span>
                </p>
              </li>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </ScrollReveal>
  );
}
