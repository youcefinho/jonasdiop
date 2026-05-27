import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { HeadingAccent } from '@/components/ui/HeadingAccent';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { faqCopy } from '@/data/copy/faq';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

/**
 * FAQHomeSection — preview section on Home linking to /faq.
 *
 * Affiche seulement les 5 questions les plus importantes (sélectionnées à
 * travers les 5 catégories pour couvrir : Fit / Timing / Investment / Honesty
 * / Geography). La FAQ complète (14 Q/A) reste sur la page standalone /faq.
 *
 * Sélection :
 *   1. pour-qui (avant-engager) — fit qualification
 *   2. resultats-temps (avant-engager) — credibility timing
 *   3. tarifs (investissement) — investment posture
 *   4. garanties (resultats-garanties) — honesty filter
 *   5. lieu (logistique) — reach geographic
 */

interface PreviewItem {
  readonly id: string;
  readonly question: BilingualLax<string>;
  readonly answer: BilingualLax<string>;
}

const PREVIEW_IDS: ReadonlySet<string> = new Set([
  'pour-qui',
  'resultats-temps',
  'tarifs',
  'garanties',
  'lieu'
]);

export function FAQHomeSection() {
  const { t, locale } = useT();

  // Extract the 5 preview items from faqCopy.categories[*].items by id.
  // Cast through unknown : faqCopy is `as const` so item ids are literal-typed,
  // which prevents structural narrowing through a `.filter` type-guard.
  const previewItems: ReadonlyArray<PreviewItem> = faqCopy.categories.flatMap(
    (cat) =>
      cat.items.filter((item) => PREVIEW_IDS.has(item.id)) as unknown as ReadonlyArray<PreviewItem>
  );

  return (
    <section
      id="faq"
      aria-label={t({
        fr: 'Questions fréquentes (aperçu)',
        en: 'Frequently asked questions (preview)'
      })}
      className="relative py-2xl bg-section-elevated border-y border-silver/10 overflow-hidden"
    >
      <FiligraneNumber number="07" position="right" />
      <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>{t(faqCopy.hero.eyebrow)}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]">
            {t({
              fr: 'Les 5 questions qu’on nous pose le plus.',
              en: 'The 5 questions we get asked the most.'
            })}
          </h2>
          <HeadingAccent variant="gold" align="center" />
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[55ch]">
            {t({
              fr: 'Aperçu. La FAQ complète est sur la page dédiée.',
              en: 'Preview. The full FAQ is on the dedicated page.'
            })}
          </p>
        </div>

        {/* 5 accordions flat — no categories + stagger reveal 90ms */}
        <StaggerReveal
          as="div"
          className="flex flex-col gap-sm max-w-[var(--container-content)] mx-auto w-full"
          staggerMs={90}
        >
          {previewItems.map((item) => (
            <details
              key={item.id}
              className="group p-md bg-base border border-silver/15 rounded-lg"
            >
              <summary className="cursor-pointer flex items-center justify-between gap-sm text-body text-primary font-display font-medium list-none [&::-webkit-details-marker]:hidden">
                <span className="text-pretty">{t(item.question)}</span>
                <span
                  aria-hidden="true"
                  className="text-gold text-xl font-bold shrink-0 transition-transform duration-base group-open:rotate-45 select-none"
                >
                  +
                </span>
              </summary>
              <div className="mt-md text-body text-silver opacity-85 text-pretty space-y-md">
                {t(item.answer)
                  .split('\n\n')
                  .map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
              </div>
            </details>
          ))}
        </StaggerReveal>

        {/* CTA → full FAQ page */}
        <div className="flex justify-center">
          <CTAPill variant="silver-outline" href={ROUTES.faq[locale]}>
            {t({ fr: 'Voir toutes les questions', en: 'View all questions' })}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </CTAPill>
        </div>
      </div>
    </section>
  );
}
