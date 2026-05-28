import { ArrowRight, Check, X } from 'lucide-react';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import type { consultationsPriveesCopy } from '@/data/copy/services-consultations-privees';
import { useT } from '@/lib/i18n/useT';

// ---------------------------------------------------------------------------
// Types — shaped to match consultationsPriveesCopy structure exactly
// ---------------------------------------------------------------------------

type ConsultationsCopy = typeof consultationsPriveesCopy;

interface LPConsultationsTemplateProps {
  copy: ConsultationsCopy;
  ctaVariant?: 'gold-primary' | 'silver-secondary';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * LPConsultationsTemplate — Custom layout for Consultations Privées LP.
 *
 * Consultations Privées has a fundamentally different structure than group/training LPs:
 *   - No modules (it's 1:1 engagement, not a curriculum)
 *   - No FAQ (by-invitation format with qualification call)
 *   - Has: positioning, forWho (qualif + disqualif + body), format (dl), process (steps), finalCta
 *
 * DA Platinum Executive Authority — dark luxe, silver primary, gold rare.
 * Tone: sobre, sélectif, sans pression commerciale — ton premium tier.
 */
export function LPConsultationsTemplate({
  copy,
  ctaVariant = 'gold-primary'
}: LPConsultationsTemplateProps) {
  const { t, locale } = useT();

  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                              */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(copy.hero.eyebrow)}
          className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
        >
          <div className="flex flex-col items-center gap-md max-w-content mx-auto">
            <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>

            <MaskRevealHeading as="h1">{t(copy.hero.h1)}</MaskRevealHeading>

            <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(copy.hero.sub)}
            </p>

            {copy.hero.badge && (
              <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-sm">
                {t(copy.hero.badge)}
              </p>
            )}

            <div className="mt-md">
              <CTAPill variant={ctaVariant} href={ROUTES.contact[locale]}>
                {t(copy.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* POSITIONING — "Ce que c'est, ce que ce n'est pas"               */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(copy.positioning.eyebrow)}
          className="py-2xl bg-elevated border-y border-silver/10"
        >
          <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
              <Eyebrow>{t(copy.positioning.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.positioning.title)}</MaskRevealHeading>
            </div>
            <div className="max-w-[65ch]">
              {t(copy.positioning.body)
                .split('\n\n')
                .map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="text-body text-silver opacity-80 text-pretty mb-md last:mb-0"
                  >
                    {para}
                  </p>
                ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* QUALIFICATION SPLIT — Pour vous ✓ | Pas pour vous ×              */}
        {/* ---------------------------------------------------------------- */}
        <section aria-label={t(copy.forWho.eyebrow)} className="py-2xl bg-base">
          <div className="max-w-default mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <Eyebrow>{t(copy.forWho.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.forWho.title)}</MaskRevealHeading>
            </div>

            {/* forWho.body — sélectivité explicite */}
            <div className="max-w-[65ch] mx-auto mb-xl text-center">
              {t(copy.forWho.body)
                .split('\n\n')
                .map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="text-body text-silver opacity-75 text-pretty mb-md last:mb-0"
                  >
                    {para}
                  </p>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {/* Pour toi */}
              <div className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg">
                <h3 className="text-h3 text-primary font-display text-balance">
                  {t({ fr: 'Pour toi si...', en: 'For you if...' })}
                </h3>
                <ul
                  className="flex flex-col gap-sm mt-sm"
                  aria-label={t({ fr: 'Critères de sélection', en: 'Selection criteria' })}
                >
                  {copy.forWho.qualif.map((item) => (
                    <li
                      key={item.fr.slice(0, 40)}
                      className="flex items-start gap-3 text-body text-silver"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-gold"
                      >
                        <Check className="h-5 w-5 max-w-none" />
                      </span>
                      <span className="text-pretty">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pas pour toi */}
              <div className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg">
                <h3 className="text-h3 text-primary font-display text-balance opacity-70">
                  {t({ fr: 'Pas pour toi si...', en: 'Not for you if...' })}
                </h3>
                <ul
                  className="flex flex-col gap-sm mt-sm"
                  aria-label={t({ fr: 'Non-admissibles', en: 'Not eligible' })}
                >
                  {copy.forWho.disqualif.map((item) => (
                    <li
                      key={item.fr.slice(0, 40)}
                      className="flex items-start gap-3 text-body text-silver opacity-60"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-silver/50"
                      >
                        <X className="h-5 w-5 max-w-none" />
                      </span>
                      <span className="text-pretty">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Honnêteté radicale disclaimer */}
          <p className="text-sm text-silver/50 text-center mt-xl max-w-content mx-auto px-md text-pretty">
            {t({
              fr: "Honnêteté radicale. Si tu n'es pas un bon fit, on te le dira directement.",
              en: 'Radical honesty. If you are not a good fit, we will tell you directly.'
            })}
          </p>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* FORMAT — dl/dt/dd with gold border-l                            */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(copy.format.eyebrow)}
          className="py-2xl bg-elevated border-y border-silver/10"
        >
          <div className="max-w-default mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <Eyebrow>{t(copy.format.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.format.title)}</MaskRevealHeading>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md max-w-default mx-auto">
              {copy.format.details.map((detail) => (
                <div
                  key={detail.label.fr}
                  className="flex flex-col gap-2 p-md border-l-2 border-gold/30 bg-base rounded-r-lg"
                >
                  <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                    {t(detail.label)}
                  </dt>
                  <dd className="text-body text-primary font-display font-medium">
                    {t(detail.value)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PROCESS — 4-step application journey                             */}
        {/* ---------------------------------------------------------------- */}
        <section aria-label={t(copy.process.eyebrow)} className="py-2xl bg-base">
          <div className="max-w-content mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <Eyebrow>{t(copy.process.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.process.title)}</MaskRevealHeading>
            </div>

            <ol className="flex flex-col gap-md" aria-label={t(copy.process.title)}>
              {copy.process.steps.map((step, idx) => (
                <li
                  key={step.number}
                  className="flex items-start gap-md p-md bg-elevated border border-silver/15 rounded-lg"
                >
                  {/* Gold step number filigrane */}
                  <span
                    aria-hidden="true"
                    className="text-[2.5rem] font-display font-bold text-gold/15 leading-none select-none shrink-0 w-12 text-center"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-2 min-w-0">
                    <h3 className="text-h3 text-primary font-display text-balance">
                      {t(step.title)}
                    </h3>
                    <p className="text-body text-silver opacity-70 text-pretty">{t(step.body)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* FINAL CTA                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(copy.finalCta.eyebrow)}
          className="py-2xl bg-elevated border-t border-silver/10"
        >
          <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>

            <MaskRevealHeading as="h2">{t(copy.finalCta.title)}</MaskRevealHeading>

            <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
              {t(copy.finalCta.sub)}
            </p>

            <div className="mt-md">
              <CTAPill variant={ctaVariant} href={ROUTES.contact[locale]}>
                {t(copy.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>

            {copy.finalCta.footnote && (
              <p className="text-xs text-silver/40 text-center mt-sm text-pretty max-w-[50ch]">
                {t(copy.finalCta.footnote)}
              </p>
            )}
          </div>
        </section>
      </main>
      <FooterRich />
    </>
  );
}
