import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { faqCopy } from '@/data/copy/faq';
import { useT } from '@/lib/i18n/useT';
import { FaqSchemaScript, SchemaScript } from '@/lib/seo/SchemaScript';

/**
 * FAQPage — composite landing page section for /faq (FR) and /en/faq.
 *
 * Sections : Hero → 5 Categories (each with native <details> accordion) → FinalCta
 *
 * DA Platinum Executive Authority. Native <details>/<summary> = a11y native, zero JS deps,
 * + gold + → × rotation pattern (cohérent LPProgramTemplate FAQ).
 * Q1-Q5 verbatim brief Jonas. 14 items total répartis sur 5 catégories.
 */
export function FAQPage() {
  const { t, locale } = useT();

  // ── Schema.org wiring — FAQPage (full 14-item catalog) + WebPage
  // Items pre-sorted by category order (Google uses the first N for the rich
  // result, so the order in faq.ts already mirrors strategic importance).
  const faqItems = faqCopy.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      question: t(item.question),
      answer: t(item.answer)
    }))
  );

  return (
    <>
      <SchemaScript
        locale={locale}
        options={{
          webPage: {
            routeKey: 'faq',
            name: t(faqCopy.meta.title),
            description: t(faqCopy.meta.description)
          }
        }}
      />
      <FaqSchemaScript locale={locale} items={faqItems} routeKey="faq" />
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section
        aria-label={t(faqCopy.hero.eyebrow)}
        className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(faqCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">
            <span className="text-shimmer">{t(faqCopy.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(faqCopy.hero.sub)}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 5 CATEGORIES with native <details> accordions                    */}
      {/* ---------------------------------------------------------------- */}
      {faqCopy.categories.map((cat, catIdx) => (
        <ScrollReveal key={cat.id}>
          <section
            aria-label={t(cat.title)}
            className={`py-2xl ${catIdx % 2 === 0 ? 'bg-elevated border-y border-silver/10' : 'bg-base'}`}
          >
            <div className="max-w-content mx-auto px-md">
              <div className="flex flex-col gap-sm mb-xl">
                <Eyebrow>
                  {String(catIdx + 1).padStart(2, '0')} · {t({ fr: 'Catégorie', en: 'Category' })}
                </Eyebrow>
                <h2 className="text-h2 text-primary font-display text-balance">{t(cat.title)}</h2>
              </div>

              <StaggerReveal staggerMs={80} className="flex flex-col gap-sm">
                {cat.items.map((item) => (
                  <details
                    key={item.id}
                    className={`hover-lift group p-md border border-silver/15 rounded-lg ${
                      catIdx % 2 === 0 ? 'bg-base' : 'bg-elevated'
                    }`}
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
                    <div className="mt-md text-body text-silver opacity-75 text-pretty space-y-md">
                      {t(item.answer)
                        .split('\n\n')
                        .map((para) => (
                          <p key={para.slice(0, 40)}>{para}</p>
                        ))}
                    </div>
                  </details>
                ))}
              </StaggerReveal>
            </div>
          </section>
        </ScrollReveal>
      ))}

      {/* ---------------------------------------------------------------- */}
      {/* FINAL CTA                                                         */}
      {/* ---------------------------------------------------------------- */}
      <ScrollReveal>
        <section
          aria-label={t(faqCopy.finalCta.eyebrow)}
          className="py-2xl bg-elevated border-t border-silver/10"
        >
          <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(faqCopy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(faqCopy.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
              {t(faqCopy.finalCta.sub)}
            </p>
            <div className="mt-md">
              <CTAPill variant="silver-primary" href={ROUTES.contact[locale]}>
                {t(faqCopy.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
