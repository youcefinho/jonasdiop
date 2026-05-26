import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { ROUTES } from '@/config/routes';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useT } from '@/lib/i18n/useT';
import { heroEntranceTimings } from '@/lib/motion/presets';

/**
 * Hero direction C — typo-led centered, matching Stitch board 13 (platinum-executive-hero).
 *
 * Composition :
 *   Eyebrow (gold dot) → H1 (mask reveal, medium weight, tight tracking) → Sub →
 *     2 CTAs (gold-primary + silver-outline) over ambient silver glow →
 *     Divider thin silver → 3 stats GOLD inline → ScrollCue
 *
 * Stitch fidelity changes 2026-05-26 :
 *   - min-h reduced 78svh → 62svh for board 13 compactness
 *   - H1 weight 700 → 500, tracking -0.04em, size reduced via override
 *   - Sub opacity 80 → 65 for refined hierarchy
 *   - Ambient silver radial gradient under CTA zone (luminous "stage" effect)
 *   - Stats moved INLINE (3 stats below CTAs) instead of separate TrustBand
 *   - Gold-primary CTA uses warm gold halo (CTAPill variant handles)
 */
export function Hero() {
  const { t, locale } = useT();
  const scrollTo = useSmoothScroll();

  return (
    <section
      aria-label={t({ fr: 'Section principale', en: 'Hero section' })}
      className="relative min-h-[62svh] flex flex-col items-center justify-center text-center px-md py-2xl overflow-hidden"
    >
      {/* Ambient silver/cream radial — luminous "stage" light behind the CTA zone.
          Stitch board 13 signature : soft silver bloom centered slightly below
          the H1, fades to transparent. GPU-only (background gradient), no blur. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 65%, oklch(0.79 0.005 270 / 0.07) 0%, oklch(0.79 0.005 270 / 0.03) 35%, transparent 70%)'
        }}
      />

      <div className="relative flex flex-col items-center gap-md max-w-content">
        <Eyebrow>{t({ fr: "Architecte d'affaires", en: 'Business Architect' })}</Eyebrow>

        <MaskRevealHeading
          as="h1"
          delay={heroEntranceTimings.h1MaskReveal}
          className="font-medium tracking-[-0.04em] text-[clamp(2rem,1.2rem+3.2vw,4rem)] leading-[1.08] max-w-[18ch]"
        >
          {t({
            fr: "Ajouter un zéro à votre chiffre d'affaires.",
            en: 'Add a zero to your revenue.'
          })}
        </MaskRevealHeading>

        <p className="text-body text-silver opacity-65 text-pretty max-w-[58ch]">
          {t({
            fr: "Architecture d'affaires & scaling stratégique pour entrepreneurs ambitieux.",
            en: 'Business architecture & strategic scaling for ambitious entrepreneurs.'
          })}
        </p>

        <div className="flex flex-col sm:flex-row gap-sm mt-md">
          <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
            {t({ fr: 'Prendre rendez-vous', en: 'Book a call' })}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </CTAPill>
          <CTAPill variant="silver-secondary" onClick={() => scrollTo('#methodologie')}>
            {t({ fr: 'Découvrir la méthode CDT™', en: 'Discover the CDT™ method' })}
          </CTAPill>
        </div>

        {/* Divider thin silver — separates CTAs from inline stats (Stitch board 13) */}
        <div
          aria-hidden="true"
          className="mt-xl w-full max-w-[640px] h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent"
        />

        {/* Stats inline — 3 gold numbers + labels uppercase silver, all visible
            in same viewport as Hero per Stitch board 13. */}
        <ul className="mt-md grid grid-cols-3 gap-md sm:gap-xl w-full max-w-[640px]">
          <li className="flex flex-col items-center text-center gap-1">
            <span className="text-gold font-display text-[clamp(1.5rem,1.1rem+1.5vw,2.25rem)] tracking-tight leading-none">
              857+
            </span>
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-60 font-display text-[10px] sm:text-xs">
              {t({ fr: 'Entrepreneurs', en: 'Entrepreneurs' })}
            </span>
          </li>
          <li className="flex flex-col items-center text-center gap-1">
            <span className="text-gold font-display text-[clamp(1.5rem,1.1rem+1.5vw,2.25rem)] tracking-tight leading-none">
              31M$+
            </span>
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-60 font-display text-[10px] sm:text-xs">
              {t({ fr: 'Générés', en: 'Generated' })}
            </span>
          </li>
          <li className="flex flex-col items-center text-center gap-1">
            <span className="text-gold font-display text-[clamp(1.5rem,1.1rem+1.5vw,2.25rem)] tracking-tight leading-none">
              15 ANS
            </span>
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-60 font-display text-[10px] sm:text-xs">
              {t({ fr: 'Expertise', en: 'Expertise' })}
            </span>
          </li>
        </ul>
      </div>

      <ScrollCue
        href="#methodologie"
        ariaLabel={t({ fr: 'Faire défiler vers la méthodologie', en: 'Scroll to methodology' })}
      />
    </section>
  );
}
