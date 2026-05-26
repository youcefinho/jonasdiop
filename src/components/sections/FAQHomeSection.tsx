import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { faqCopy } from '@/data/copy/faq';
import { useT } from '@/lib/i18n/useT';

/**
 * FAQHomeSection — full FAQ inline on Home (no standalone /faq page).
 *
 * Migration de l'ancienne FAQPage composite : on garde l'intégralité des 5
 * catégories × items, mais sans Hero ni FinalCta (qui clashaient avec le reste
 * de la composition Home).
 *
 * Stitch board 24 baseline = flat 5 questions, mais user override : keep les
 * 5 catégories premium institutional (positionnement consulting).
 */
export function FAQHomeSection() {
  const { t } = useT();
  return (
    <section
      id="faq"
      aria-label={t({ fr: 'Questions fréquentes', en: 'Frequently asked questions' })}
      className="relative py-2xl bg-elevated border-y border-silver/10 overflow-hidden"
    >
      <FiligraneNumber number="07" position="right" />
      <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>{t(faqCopy.hero.eyebrow)}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]">
            {t(faqCopy.hero.h1)}
          </h2>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(faqCopy.hero.sub)}
          </p>
        </div>

        {/* 5 catégories en colonnes — chaque catégorie avec son titre + accordions native */}
        <div className="flex flex-col gap-xl max-w-[var(--container-content)] mx-auto w-full">
          {faqCopy.categories.map((cat, catIdx) => (
            <div key={cat.id} className="flex flex-col gap-md">
              {/* Category header — gold dot signature + label */}
              <div className="flex items-center gap-sm">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
                />
                <span className="text-eyebrow uppercase tracking-widest text-gold opacity-90 font-display">
                  {String(catIdx + 1).padStart(2, '0')} · {t(cat.title)}
                </span>
                <span
                  aria-hidden="true"
                  className="flex-1 h-px bg-gradient-to-r from-gold/30 via-silver/10 to-transparent"
                />
              </div>

              {/* Accordions */}
              <div className="flex flex-col gap-sm">
                {cat.items.map((item) => (
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
                    <div className="mt-md text-body text-silver opacity-75 text-pretty space-y-md">
                      {t(item.answer)
                        .split('\n\n')
                        .map((para) => (
                          <p key={para.slice(0, 40)}>{para}</p>
                        ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
