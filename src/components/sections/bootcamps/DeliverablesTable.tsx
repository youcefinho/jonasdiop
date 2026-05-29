import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface DeliverableRow {
  /** Numéro affiché (généralement 1..N, accent gold tabulaire). */
  readonly n: number;
  /** Nom court du livrable (1 ligne idéale). */
  readonly name: string;
  /** Description du livrable (1-3 lignes). */
  readonly description: string;
}

interface DeliverablesTableProps {
  /** Eyebrow uppercase (déjà traduit). */
  readonly eyebrow: string;
  /** Headline H2 (déjà traduit). */
  readonly headline: string;
  /** Sous-titre court sous le H2 (déjà traduit). */
  readonly subtitle: string;
  /** Livrables — verbatim PDF Trilogie §6 "Ce que tu obtiens". */
  readonly items: readonly DeliverableRow[];
  /** Label colonne # (a11y). */
  readonly columnNumberLabel?: string;
  /** Label colonne Livrable. */
  readonly columnNameLabel?: string;
  /** Label colonne Description. */
  readonly columnDescriptionLabel?: string;
}

/**
 * DeliverablesTable — table "Ce que tu obtiens concrètement".
 *
 * Table sémantique `<table>` accessible (caption + thead + tbody) avec lignes
 * alternées subtiles, numéros gold tabular-nums, hover state row.
 *
 * Layout : tableau vrai sur >= md, list-cards stack en mobile (la table reste
 * sémantique mais styled-flex pour rester lisible sous 720px).
 */
export function DeliverablesTable({
  eyebrow,
  headline,
  subtitle,
  items,
  columnNumberLabel = '#',
  columnNameLabel = 'Livrable',
  columnDescriptionLabel = 'Description'
}: DeliverablesTableProps) {
  return (
    <ScrollReveal>
      <section aria-label={eyebrow} className="relative py-2xl bg-section-base">
        <div className="relative max-w-default mx-auto px-md">
          <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
            <Eyebrow>{eyebrow}</Eyebrow>
            <MaskRevealHeading as="h2">{headline}</MaskRevealHeading>
            {subtitle ? (
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="max-w-[72rem] mx-auto bg-elevated border border-silver/15 rounded-lg overflow-hidden shadow-haptic-card">
            <table className="w-full border-collapse">
              <caption className="sr-only">{headline}</caption>
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-silver/15">
                  <th
                    scope="col"
                    className="w-[8%] px-md py-sm text-left text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                  >
                    {columnNumberLabel}
                  </th>
                  <th
                    scope="col"
                    className="w-[28%] px-md py-sm text-left text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                  >
                    {columnNameLabel}
                  </th>
                  <th
                    scope="col"
                    className="px-md py-sm text-left text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                  >
                    {columnDescriptionLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => (
                  <tr
                    key={`del-${row.n}-${row.name.slice(0, 20)}`}
                    className="flex flex-col md:table-row border-t border-silver/10 first:border-t-0 md:first:border-t md:odd:bg-base/30 hover:bg-base/50 transition-colors duration-base"
                  >
                    <td className="px-md pt-sm md:py-md align-top">
                      <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs md:hidden">
                        {columnNumberLabel}{' '}
                      </span>
                      <span className="text-body text-gold font-display font-medium tabular-nums">
                        {String(row.n).padStart(2, '0')}
                      </span>
                    </td>
                    <td className="px-md py-sm md:py-md align-top">
                      <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-xs block md:hidden mb-1">
                        {columnNameLabel}
                      </span>
                      <span className="text-body text-primary font-display font-medium text-balance leading-snug">
                        {row.name}
                      </span>
                    </td>
                    <td className="px-md pb-md md:py-md align-top">
                      <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-xs block md:hidden mb-1">
                        {columnDescriptionLabel}
                      </span>
                      <span className="text-body text-silver opacity-85 text-pretty leading-relaxed">
                        {row.description}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
