import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { temoignagesCopy } from '@/data/copy/temoignages';
import { useT } from '@/lib/i18n/useT';

/**
 * TemoignagesPage — composite landing page section for /temoignages (FR) and /en/testimonials.
 *
 * Sections : Hero → Methodology (selection process) → Filters (disabled, Sprint 6 wire)
 *         → Grid 3 shells (H3 [À VALIDER JONAS] placeholders) → Disclaimer + legal
 *         → CaseStudy placeholder → FinalCta
 *
 * DA Platinum Executive Authority. Shells marqués "À venir" — vrais témoignages H3 pending.
 */
export function TemoignagesPage() {
  const { t, locale } = useT();

  return (
    <>
      {/* HERO */}
      <section
        aria-label={t(temoignagesCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(temoignagesCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(temoignagesCopy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(temoignagesCopy.hero.sub)}
          </p>
        </div>
      </section>

      {/* METHODOLOGY — How testimonials are selected */}
      <section
        aria-label={t(temoignagesCopy.methodology.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(temoignagesCopy.methodology.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(temoignagesCopy.methodology.title)}</MaskRevealHeading>
          </div>
          <div className="max-w-[65ch]">
            {t(temoignagesCopy.methodology.body)
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

      {/* FILTERS — Disabled (Sprint 6 wire) */}
      <section aria-label={t(temoignagesCopy.filters.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(temoignagesCopy.filters.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(temoignagesCopy.filters.title)}</MaskRevealHeading>
            <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch]">
              {t(temoignagesCopy.filters.placeholder)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {[
              temoignagesCopy.filters.categories.byProgram,
              temoignagesCopy.filters.categories.byRevenue,
              temoignagesCopy.filters.categories.byIndustry
            ].map((cat) => (
              <div key={cat.label.fr} className="flex flex-col gap-2">
                <label
                  htmlFor={`filter-${cat.label.fr.replace(/\s/g, '-').toLowerCase()}`}
                  className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                >
                  {t(cat.label)}
                </label>
                <select
                  id={`filter-${cat.label.fr.replace(/\s/g, '-').toLowerCase()}`}
                  disabled
                  className="px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
                >
                  {cat.options.map((opt) => (
                    <option key={opt.fr} value={opt.fr}>
                      {t(opt)}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID — 3 shells [À VALIDER JONAS] */}
      <section
        aria-label={t(temoignagesCopy.grid.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(temoignagesCopy.grid.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(temoignagesCopy.grid.title)}</MaskRevealHeading>
          </div>

          <div data-shells-grid className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
            {temoignagesCopy.grid.shells.map((shell) => (
              <article
                key={shell.id}
                data-shell-card
                className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg"
              >
                <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
                  {t(shell.program)}
                </p>
                <p className="text-h3 text-primary font-display text-balance">{t(shell.result)}</p>
                <blockquote className="text-body text-silver opacity-70 text-pretty italic mt-sm border-l-2 border-gold/20 pl-md">
                  {t(shell.quote)}
                </blockquote>
                <div className="mt-auto pt-md border-t border-silver/10">
                  <p className="text-body text-primary font-display font-medium">{shell.name}</p>
                  <p className="text-sm text-silver/60 text-pretty">{t(shell.title)}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-xl text-center flex flex-col items-center gap-sm max-w-[65ch] mx-auto">
            <p className="text-sm text-silver/60 text-pretty">
              {t(temoignagesCopy.disclaimer.body)}
            </p>
            <p className="text-xs text-silver/40 text-pretty">
              {t(temoignagesCopy.disclaimer.legal)}
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY placeholder */}
      <section aria-label={t(temoignagesCopy.caseStudy.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(temoignagesCopy.caseStudy.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(temoignagesCopy.caseStudy.title)}</MaskRevealHeading>
          </div>
          <div className="border border-dashed border-silver/20 rounded-lg p-xl bg-elevated/50 flex flex-col gap-md">
            <p className="text-body text-silver opacity-80 text-pretty">
              {t(temoignagesCopy.caseStudy.teaser)}
            </p>
            <p className="text-sm text-silver/50 italic text-pretty">
              {t(temoignagesCopy.caseStudy.placeholder)}
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        aria-label={t(temoignagesCopy.finalCta.eyebrow)}
        className="py-2xl bg-elevated border-t border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(temoignagesCopy.finalCta.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(temoignagesCopy.finalCta.title)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(temoignagesCopy.finalCta.sub)}
          </p>
          <div className="mt-md">
            <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
              {t(temoignagesCopy.finalCta.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>
    </>
  );
}
