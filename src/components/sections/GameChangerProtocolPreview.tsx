import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { gameChangerProtocolCopy } from '@/data/copy/game-changer-protocol';
import { useT } from '@/lib/i18n/useT';

/**
 * GameChangerProtocolPreview — Home brand-chapeau block (brief v3).
 *
 * Frames the Game Changer Protocol as the visible client journey (D-I-O-P phases),
 * with CDT™ noted as the internal technical signature framework.
 *
 * Position : between MethodologieCDTPreviewSection and ProgramsGrid.
 *
 * Composition :
 *   Eyebrow → H2 (mask reveal) → Sub → 4 phase cards (D-I-O-P, StaggerReveal)
 *   → CDT note panel (gold rail) → CTA pill linking to /methodologie-cdt.
 */
export function GameChangerProtocolPreview() {
  const { t, locale } = useT();
  const { homePreview, steps } = gameChangerProtocolCopy;
  return (
    <section
      aria-label={t(homePreview.eyebrow)}
      className="relative py-2xl bg-section-elevated border-y border-silver/10 overflow-hidden"
    >
      <FiligraneNumber number="02" position="right" />
      <div className="relative max-w-default mx-auto px-md">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
          <Eyebrow>{t(homePreview.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h2"
            className="text-h2 text-primary font-display text-balance leading-[1.1]"
          >
            {t(homePreview.title)}
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
            {t(homePreview.sub)}
          </p>
        </div>

        {/* 4 phase cards — D-I-O-P */}
        <StaggerReveal
          as="div"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl"
          staggerMs={100}
          data-card-group="gcp-phases"
        >
          {steps.map((step) => (
            <article
              key={step.letter}
              className="group relative flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg shadow-haptic-card hover:border-gold/30 transition-colors duration-base overflow-hidden"
            >
              {/* Subtle gold sheen on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,oklch(0.74_0.085_75/0.06)_50%,transparent_70%)] bg-[length:200%_200%] bg-[position:200%_0] transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[position:-50%_0]"
              />
              {/* Large gold letter D / I / O / P */}
              <span
                aria-hidden="true"
                className="text-gold font-display font-normal text-[clamp(2.75rem,2rem+2vw,4rem)] leading-none tracking-tight opacity-90"
              >
                {step.letter}
              </span>
              <h3 className="text-h3 text-primary font-display text-balance">{t(step.title)}</h3>
              <p className="text-body text-silver opacity-80 text-pretty">{t(step.body)}</p>
            </article>
          ))}
        </StaggerReveal>

        {/* CDT note panel — explains the relationship GCP ↔ CDT™ */}
        <aside
          aria-label={t({
            fr: 'Le framework technique à l’intérieur du protocole',
            en: 'The technical framework inside the protocol'
          })}
          className="relative max-w-[68ch] mx-auto p-md bg-base/40 border-l-2 border-gold/40 rounded-r-lg mb-xl"
        >
          <span
            aria-hidden="true"
            className="text-eyebrow uppercase tracking-widest text-gold opacity-80 font-display text-xs"
          >
            {t({ fr: 'Le levier technique', en: 'The technical lever' })}
          </span>
          <p className="mt-2 text-body text-silver opacity-85 text-pretty">
            {t(homePreview.cdtNote)}
          </p>
        </aside>

        {/* CTA */}
        <div className="text-center">
          <CTAPill variant="silver-outline" href={ROUTES['methodologie-cdt'][locale]}>
            {t(homePreview.ctaLabel)}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </CTAPill>
        </div>
      </div>
    </section>
  );
}
