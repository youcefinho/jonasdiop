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
      className="relative min-h-[78svh] flex flex-col items-center justify-center text-center px-md py-2xl overflow-hidden"
    >
      {/* Ambient cream/silver "stage" light — Stitch board 13 luminous signature.
          Multi-layer to actually be VISIBLE on dark base (was 7% → noyé) :
            Layer 1 — broad warm cream wash over lower 60% of Hero
            Layer 2 — concentrated silver "spotlight" right under CTAs
            Layer 3 — subtle edge ambient (top corners) for depth
          GPU-only (background gradients only, no blur on scrolling container). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% 75%, oklch(0.88 0.018 80 / 0.14) 0%, oklch(0.85 0.012 80 / 0.06) 40%, transparent 75%)'
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 45% 28% at 50% 68%, oklch(0.82 0.008 270 / 0.18) 0%, oklch(0.82 0.008 270 / 0.06) 50%, transparent 80%)'
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 35% at 50% 25%, oklch(0.79 0.005 270 / 0.05) 0%, transparent 70%)'
        }}
      />

      <div className="relative flex flex-col items-center gap-md max-w-[var(--container-default)]">
        <Eyebrow>{t({ fr: "Architecte d'affaires", en: 'Business Architect' })}</Eyebrow>

        {/* H1 size + width tuned to force 2 lignes balanced per Stitch board 13 :
            - max-w-[26ch] permet "Ajouter un zéro à votre" (23) + "chiffre d'affaires." (19)
            - clamp 2.5→5rem = impact visuel matching Stitch (impactful, pas timide)
            - font-normal + tracking serré = poids visuel light/élégant pas bold/lourd */}
        <MaskRevealHeading
          as="h1"
          delay={heroEntranceTimings.h1MaskReveal}
          className="font-normal tracking-[-0.045em] text-[clamp(2.5rem,1.5rem+3.5vw,5rem)] leading-[1.05] max-w-[26ch]"
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
          className="mt-2xl w-full max-w-[820px] h-px bg-gradient-to-r from-transparent via-silver/25 to-transparent"
        />

        {/* Stats inline — 3 gold numbers (BIG per Stitch board 13) + full labels
            uppercase silver, all visible in same viewport as Hero. */}
        <ul className="mt-md grid grid-cols-3 gap-md sm:gap-xl w-full max-w-[820px]">
          <li className="flex flex-col items-center text-center gap-2">
            <span className="text-gold font-display font-normal text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] tracking-tight leading-none">
              857+
            </span>
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-55 font-display text-[10px] sm:text-xs leading-tight max-w-[18ch]">
              {t({ fr: 'Entrepreneurs accompagnés', en: 'Entrepreneurs supported' })}
            </span>
          </li>
          <li className="flex flex-col items-center text-center gap-2">
            <span className="text-gold font-display font-normal text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] tracking-tight leading-none">
              31M$+
            </span>
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-55 font-display text-[10px] sm:text-xs leading-tight max-w-[18ch]">
              {t({ fr: 'Généré pour nos clients', en: 'Generated for clients' })}
            </span>
          </li>
          <li className="flex flex-col items-center text-center gap-2">
            <span className="text-gold font-display font-normal text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] tracking-tight leading-none">
              15 ANS
            </span>
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-55 font-display text-[10px] sm:text-xs leading-tight max-w-[18ch]">
              {t({ fr: "D'expertise stratégique", en: 'Of strategic expertise' })}
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
