import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { CDTDiagram } from '@/components/sections/CDTDiagram';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { methodologieCdtCopy } from '@/data/copy/methodologie-cdt';
import { useT } from '@/lib/i18n/useT';

/**
 * /methodologie-cdt — Page signature CDT™
 * Sections : Hero → Définition → 3 Piliers (CDTDiagram) → 4 Phases → Résultats → CTA
 *
 * Gold usages : CDTDiagram center pillar halo (#1/7), phase filigrane numbers (#2/7).
 */
function MethodologieCdtPage() {
  const { t, locale } = useT();
  const copy = methodologieCdtCopy;

  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        {/* ─── HERO ──────────────────────────────────────────────────────────── */}
        <section
          aria-label={t(copy.hero.eyebrow)}
          className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-[clamp(1rem,4vw,3rem)] py-[clamp(3rem,6vw,6rem)]"
        >
          {/* Ambient background grain — fixed pointer-events-none, GPU-safe */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-[clamp(1rem,2vw,1.5rem)] max-w-[var(--container-content)]">
            <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h1">
              <span className="text-shimmer">{t(copy.hero.h1)}</span>
            </MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[52ch]">
              {t(copy.hero.sub)}
            </p>
          </div>
        </section>

        {/* ─── DÉFINITION ────────────────────────────────────────────────────── */}
        <ScrollReveal>
          <section
            aria-label={t(copy.definition.eyebrow)}
            className="relative py-[clamp(3rem,6vw,7rem)] bg-section-elevated border-y border-silver/10"
          >
            <FiligraneNumber number="02" position="left" />
            <div className="relative max-w-[var(--container-content)] mx-auto px-[clamp(1rem,4vw,3rem)] flex flex-col gap-[clamp(0.75rem,1.5vw,1.25rem)]">
              <Eyebrow>{t(copy.definition.eyebrow)}</Eyebrow>
              <h2 className="text-h2 text-primary font-display text-balance">
                {t(copy.definition.title)}
              </h2>
              <div className="flex flex-col gap-[clamp(0.875rem,1.5vw,1.25rem)] max-w-[72ch]">
                {t(copy.definition.body)
                  .split('\n\n')
                  .map((paragraph, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: static copy, stable order
                    <p key={i} className="text-body-lg text-silver opacity-80 text-pretty">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ─── 3 PILIERS (CDTDiagram) ────────────────────────────────────────── */}
        <ScrollReveal>
          <section
            aria-label={t(copy.pillars.eyebrow)}
            className="relative py-[clamp(3.5rem,7vw,8rem)] bg-base overflow-hidden"
          >
            <FiligraneNumber number="03" position="right" />
            <div className="relative max-w-[var(--container-default)] mx-auto px-[clamp(1rem,4vw,3rem)] text-center flex flex-col items-center gap-[clamp(0.75rem,1.5vw,1.25rem)] mb-[clamp(2rem,4vw,4rem)]">
              <Eyebrow>{t(copy.pillars.eyebrow)}</Eyebrow>
              <h2 className="text-h2 text-primary font-display text-balance max-w-[var(--container-content)]">
                {t(copy.pillars.title)}
              </h2>
            </div>
            <CDTDiagram />
          </section>
        </ScrollReveal>

        {/* ─── 4 PHASES ──────────────────────────────────────────────────────── */}
        <ScrollReveal>
          <section
            aria-label={t(copy.phases.eyebrow)}
            className="py-[clamp(3.5rem,7vw,8rem)] bg-section-elevated border-y border-silver/10"
          >
            <div className="max-w-[var(--container-default)] mx-auto px-[clamp(1rem,4vw,3rem)]">
              {/* Section header */}
              <div className="text-center flex flex-col items-center gap-[clamp(0.75rem,1.5vw,1.25rem)] mb-[clamp(2rem,4vw,4rem)]">
                <Eyebrow>{t(copy.phases.eyebrow)}</Eyebrow>
                <h2 className="text-h2 text-primary font-display text-balance max-w-[var(--container-content)]">
                  {t(copy.phases.title)}
                </h2>
              </div>

              {/* 4 phase cards — 2-col on md, 4-col on lg (StaggerReveal) */}
              <StaggerReveal
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(0.75rem,1.5vw,1.5rem)]"
                staggerMs={110}
              >
                {copy.phases.items.map((phase) => (
                  <article
                    key={phase.id}
                    aria-label={t(phase.title)}
                    className={[
                      'relative flex flex-col gap-[clamp(0.75rem,1.2vw,1rem)]',
                      'px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(1.5rem,2.5vw,2.25rem)]',
                      'rounded-[clamp(0.75rem,1vw,1.25rem)]',
                      'ring-1 ring-silver/10 bg-base',
                      'hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base'
                    ].join(' ')}
                  >
                    {/* Filigrane number — gold (#2/7 usage) */}
                    <span
                      aria-hidden="true"
                      className={[
                        'font-display leading-none tracking-[-0.04em] select-none',
                        'text-[clamp(2.25rem,1.8rem+2.2vw,3.5rem)]',
                        'text-gold opacity-70'
                      ].join(' ')}
                    >
                      {phase.number}
                    </span>

                    {/* Phase eyebrow label */}
                    <span className="text-eyebrow uppercase tracking-widest text-silver opacity-50 font-display text-[clamp(0.625rem,0.58rem+0.22vw,0.75rem)]">
                      {t(phase.phase)}
                    </span>

                    {/* Phase title */}
                    <h3 className="text-h3 text-primary font-display text-balance leading-[1.15]">
                      {t(phase.title)}
                    </h3>

                    {/* Phase body */}
                    <p className="text-body text-silver opacity-70 text-pretty hyphens-auto">
                      {t(phase.body)}
                    </p>
                  </article>
                ))}
              </StaggerReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* ─── RÉSULTATS ─────────────────────────────────────────────────────── */}
        <ScrollReveal>
          <section
            aria-label={t(copy.results.eyebrow)}
            className="py-[clamp(3.5rem,7vw,8rem)] bg-section-base"
          >
            <div className="max-w-[var(--container-default)] mx-auto px-[clamp(1rem,4vw,3rem)]">
              {/* Section header */}
              <div className="text-center flex flex-col items-center gap-[clamp(0.75rem,1.5vw,1.25rem)] mb-[clamp(2rem,4vw,4rem)]">
                <Eyebrow>{t(copy.results.eyebrow)}</Eyebrow>
                <h2 className="text-h2 text-primary font-display text-balance max-w-[var(--container-content)]">
                  {t(copy.results.title)}
                </h2>
                <p className="text-sm text-silver opacity-50 text-pretty max-w-[55ch]">
                  {t(copy.results.disclaimer)}
                </p>
              </div>

              {/* 3 milestone cards (StaggerReveal) */}
              <StaggerReveal
                className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(0.75rem,1.5vw,1.5rem)]"
                staggerMs={110}
              >
                {copy.results.milestones.map((milestone, idx) => (
                  <article
                    // biome-ignore lint/suspicious/noArrayIndexKey: static milestones, stable order
                    key={idx}
                    aria-label={t(milestone.label)}
                    className={[
                      'flex flex-col gap-[clamp(0.625rem,1vw,0.875rem)]',
                      'px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(1.5rem,2.5vw,2.25rem)]',
                      'rounded-[clamp(0.75rem,1vw,1.25rem)]',
                      'ring-1 ring-silver/10 bg-elevated',
                      'hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base'
                    ].join(' ')}
                  >
                    <span className="text-eyebrow uppercase tracking-widest text-silver opacity-50 font-display text-[clamp(0.625rem,0.58rem+0.22vw,0.75rem)]">
                      {t(milestone.timeframe)}
                    </span>
                    <h3 className="text-h3 text-primary font-display text-balance">
                      {t(milestone.label)}
                    </h3>
                    <p className="text-body text-silver opacity-70 text-pretty hyphens-auto">
                      {t(milestone.body)}
                    </p>
                  </article>
                ))}
              </StaggerReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
        <ScrollReveal>
          <section
            aria-label={t(copy.finalCta.eyebrow)}
            className="py-[clamp(3.5rem,7vw,8rem)] bg-section-elevated border-t border-silver/10"
          >
            <div className="max-w-[var(--container-content)] mx-auto px-[clamp(1rem,4vw,3rem)] text-center flex flex-col items-center gap-[clamp(0.875rem,1.8vw,1.5rem)]">
              <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>
              <h2 className="text-h2 text-primary font-display text-balance">
                {t(copy.finalCta.title)}
              </h2>
              <p className="text-body-lg text-silver opacity-70 text-pretty max-w-[50ch]">
                {t(copy.finalCta.sub)}
              </p>
              <div className="mt-[clamp(0.5rem,1vw,1rem)]">
                <CTAPill variant="silver-primary" href={ROUTES.contact[locale]}>
                  {t(copy.finalCta.ctaLabel)}
                </CTAPill>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/methodologie-cdt')({
  component: MethodologieCdtPage
});
