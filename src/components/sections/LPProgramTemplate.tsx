import { ArrowRight, Check, X } from 'lucide-react';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

// ---------------------------------------------------------------------------
// Types — shaped to match actual copy file structure (services-*.ts)
// ---------------------------------------------------------------------------

interface LPMeta {
  title: BilingualLax<string>;
  description: BilingualLax<string>;
}

interface LPHero {
  eyebrow: BilingualLax<string>;
  h1: BilingualLax<string>;
  sub: BilingualLax<string>;
  badge?: BilingualLax<string>;
}

interface LPPromise {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  body: BilingualLax<string>;
}

interface LPForWho {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  qualif: ReadonlyArray<BilingualLax<string>>;
  disqualif: ReadonlyArray<BilingualLax<string>>;
}

interface LPModuleItem {
  id?: string;
  weeks: BilingualLax<string>;
  title: BilingualLax<string>;
  body: BilingualLax<string>;
}

interface LPModules {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  items: ReadonlyArray<LPModuleItem>;
}

interface LPFormatDetail {
  label: BilingualLax<string>;
  value: BilingualLax<string>;
}

interface LPFormat {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  details: ReadonlyArray<LPFormatDetail>;
}

interface LPMilestone {
  timeframe: BilingualLax<string>;
  label: BilingualLax<string>;
}

interface LPResults {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  disclaimer: BilingualLax<string>;
  milestones: ReadonlyArray<LPMilestone>;
}

interface LPFaqItem {
  id?: string;
  question: BilingualLax<string>;
  answer: BilingualLax<string>;
}

interface LPFaq {
  title: BilingualLax<string>;
  items: ReadonlyArray<LPFaqItem>;
}

interface LPFinalCta {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  sub: BilingualLax<string>;
  ctaLabel: BilingualLax<string>;
}

/**
 * LPCopy — full structure matching services-*.ts copy files.
 * All sections optional except hero + forWho + modules + format + faq + finalCta.
 * Optional fields (meta, promise, results) render gracefully when missing.
 */
export interface LPCopy {
  meta?: LPMeta;
  hero: LPHero;
  promise?: LPPromise;
  forWho: LPForWho;
  modules: LPModules;
  format: LPFormat;
  results?: LPResults;
  faq: LPFaq;
  finalCta: LPFinalCta;
}

interface LPProgramTemplateProps {
  copy: LPCopy;
  /** CTA variant — default gold-primary (postuler/réserver appel) */
  ctaVariant?: 'gold-primary' | 'silver-secondary';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * LPProgramTemplate — Reusable landing page template for 6 Jonas Diop programmes.
 *
 * Sections:
 *   Hero → Promise (opt) → Qualification Split → Modules → Format → Results (opt) → FAQ → Final CTA
 *
 * Design DA: Platinum Executive Authority — dark luxe silver primary, gold rare (7 strict usages).
 * Qualification split = signature "Pour vous / Pas pour vous" Dan Martell pattern.
 * Modules grid 3-col desktop / 2-col tablet / 1-col mobile, gold number filigrane.
 * Format = dl/dt/dd with gold border-l.
 * FAQ = native <details>/<summary> with animated + → ×.
 * Dual CTA gold-primary (Hero + Final CTA).
 */
export function LPProgramTemplate({ copy, ctaVariant = 'gold-primary' }: LPProgramTemplateProps) {
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
        {/* PROMISE (optional)                                               */}
        {/* ---------------------------------------------------------------- */}
        {copy.promise && (
          <section
            aria-label={t(copy.promise.eyebrow)}
            className="py-2xl bg-elevated border-y border-silver/10"
          >
            <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
              <div className="flex flex-col gap-sm">
                <Eyebrow>{t(copy.promise.eyebrow)}</Eyebrow>
                <MaskRevealHeading as="h2">{t(copy.promise.title)}</MaskRevealHeading>
              </div>
              <div className="max-w-[65ch]">
                {t(copy.promise.body)
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
        )}

        {/* ---------------------------------------------------------------- */}
        {/* QUALIFICATION SPLIT — signature Dan Martell pattern              */}
        {/* Pour vous ✓ gold  |  Pas pour vous × silver-dim                 */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t({ fr: 'Critères de qualification', en: 'Qualification criteria' })}
          className="py-2xl bg-base"
        >
          <div className="max-w-default mx-auto px-md grid grid-cols-1 md:grid-cols-2 gap-xl">
            {/* Pour vous */}
            <div className="flex flex-col gap-sm">
              <Eyebrow>{t(copy.forWho.eyebrow)}</Eyebrow>
              <h2 className="text-h3 text-primary font-display text-balance">
                {t(copy.forWho.title)}
              </h2>
              <ul className="flex flex-col gap-sm mt-md" aria-label={t(copy.forWho.eyebrow)}>
                {copy.forWho.qualif.map((item) => (
                  <li
                    key={item.fr.slice(0, 40)}
                    className="flex items-start gap-3 text-body text-silver"
                  >
                    <span
                      data-qualif-check
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

            {/* Pas pour vous */}
            <div className="flex flex-col gap-sm">
              <Eyebrow goldDot={false}>
                {t({ fr: 'Pas pour vous si...', en: 'Not for you if...' })}
              </Eyebrow>
              <h2 className="text-h3 text-primary font-display text-balance">
                {t({ fr: "Ce n'est pas pour vous si vous...", en: "This isn't for you if you..." })}
              </h2>
              <ul
                className="flex flex-col gap-sm mt-md"
                aria-label={t({ fr: 'Pas pour vous si...', en: 'Not for you if...' })}
              >
                {copy.forWho.disqualif.map((item) => (
                  <li
                    key={item.fr.slice(0, 40)}
                    className="flex items-start gap-3 text-body text-silver opacity-60"
                  >
                    <span
                      data-disqualif-x
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

          {/* Honnêteté radicale disclaimer — signature Jonas */}
          <p className="text-sm text-silver/50 text-center mt-xl max-w-content mx-auto px-md text-pretty">
            {t({
              fr: "Honnêteté radicale. Si vous n'êtes pas un bon fit, on vous le dira.",
              en: "Radical honesty. If you're not a good fit, we'll tell you."
            })}
          </p>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* MODULES — 6 piliers / 3-col desktop grid                        */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(copy.modules.eyebrow)}
          className="py-2xl bg-elevated border-y border-silver/10"
        >
          <div className="max-w-default mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <Eyebrow>{t(copy.modules.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.modules.title)}</MaskRevealHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {copy.modules.items.map((module, idx) => (
                <article
                  key={module.id ?? idx}
                  data-module-card
                  className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg transition-all duration-base hover:border-silver/30"
                >
                  {/* Gold number filigrane */}
                  <span
                    aria-hidden="true"
                    className="text-[2.5rem] font-display font-bold text-gold/15 leading-none select-none"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <p className="text-eyebrow uppercase tracking-widest text-silver/50 font-display text-xs">
                    {t(module.weeks)}
                  </p>

                  <h3 className="text-h3 text-primary font-display text-balance">
                    {t(module.title)}
                  </h3>

                  <p className="text-body text-silver opacity-70 text-pretty">{t(module.body)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* FORMAT — dl/dt/dd with gold border-l                            */}
        {/* ---------------------------------------------------------------- */}
        <section aria-label={t(copy.format.eyebrow)} className="py-2xl bg-base">
          <div className="max-w-default mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <Eyebrow>{t(copy.format.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.format.title)}</MaskRevealHeading>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md max-w-default mx-auto">
              {copy.format.details.map((detail) => (
                <div
                  key={detail.label.fr}
                  className="flex flex-col gap-2 p-md border-l-2 border-gold/30 bg-elevated rounded-r-lg"
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
        {/* RESULTS (optional) — milestone timeline                         */}
        {/* ---------------------------------------------------------------- */}
        {copy.results && (
          <section
            aria-label={t(copy.results.eyebrow)}
            className="py-2xl bg-elevated border-y border-silver/10"
          >
            <div className="max-w-content mx-auto px-md">
              <div className="text-center flex flex-col items-center gap-sm mb-xl">
                <Eyebrow>{t(copy.results.eyebrow)}</Eyebrow>
                <MaskRevealHeading as="h2">{t(copy.results.title)}</MaskRevealHeading>
              </div>

              <ol className="flex flex-col gap-sm" aria-label={t(copy.results.title)}>
                {copy.results.milestones.map((milestone) => (
                  <li
                    key={milestone.timeframe.fr}
                    className="flex items-start gap-md p-md bg-base border border-silver/15 rounded-lg"
                  >
                    <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs shrink-0 pt-0.5 min-w-[5rem]">
                      {t(milestone.timeframe)}
                    </span>
                    <p className="text-body text-silver opacity-80 text-pretty">
                      {t(milestone.label)}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="text-xs text-silver/40 text-center mt-lg text-pretty">
                {t(copy.results.disclaimer)}
              </p>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FAQ — native <details> accordion                                 */}
        {/* ---------------------------------------------------------------- */}
        <section aria-label={t(copy.faq.title)} className="py-2xl bg-base">
          <div className="max-w-content mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <MaskRevealHeading as="h2">{t(copy.faq.title)}</MaskRevealHeading>
            </div>

            <div className="flex flex-col gap-sm">
              {copy.faq.items.map((item, idx) => (
                <details
                  key={item.id ?? idx}
                  className="group p-md bg-elevated border border-silver/15 rounded-lg"
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
                  <p className="text-body text-silver opacity-75 text-pretty mt-md">
                    {t(item.answer)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* FINAL CTA                                                        */}
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
          </div>
        </section>
      </main>
      <FooterRich />
    </>
  );
}
