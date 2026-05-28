import { ArrowRight, Star } from 'lucide-react';
import { CountUp } from '@/components/ui/CountUp';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { MeshGradient } from '@/components/ui/MeshGradient';
import { MouseFollowSpotlight } from '@/components/ui/MouseFollowSpotlight';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { ROUTES } from '@/config/routes';
import { useScrollFade } from '@/hooks/useScrollFade';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useT } from '@/lib/i18n/useT';
import { heroEntranceTimings } from '@/lib/motion/presets';

/** 3 client portraits utilisés pour le social proof avatars sous H1.
 * Inspiration : jonasdiop.com template CoachVerse + boards 04/07/26 Stitch. */
const SOCIAL_AVATARS = [
  { src: '/photos/sophie-martin.png', alt: 'Sophie Martin — cliente CDT™' },
  { src: '/photos/marc-lefebvre.png', alt: 'Marc Lefebvre — client CDT™' },
  { src: '/photos/david-chen.png', alt: 'David Chen — client CDT™' }
] as const;

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
  // Cinematic scroll-fade : H1 + sub + CTAs + stats fade out + translateY up
  // as the user scrolls past the first viewport. Atmospheric layers (mesh,
  // spotlight, light beam) stay anchored for depth contrast.
  const contentFadeRef = useScrollFade<HTMLDivElement>({ distance: 520, maxOffset: 36 });

  return (
    <section
      aria-label={t({ fr: 'Section principale', en: 'Hero section' })}
      className="relative min-h-[78svh] flex flex-col items-center justify-center text-center px-md py-2xl overflow-hidden"
    >
      {/* Atmospheric mesh gradient drift behind everything — slow 24s loop. */}
      <MeshGradient variant="warm-cream" opacity={0.12} />

      {/* Mouse-follow spotlight — cursor-tracked radial light reveals as the
          user moves over the Hero. Premium polish signature (touch + reduced
          motion fall back to static centered). */}
      <MouseFollowSpotlight color="oklch(0.88 0.012 80)" size={360} intensity={0.08} />

      {/* Diagonal light beam shaft — subtle stage-lighting cinematic feel.
          Linear-gradient at -25deg, narrow band of cream light cutting across
          the section from top-right to bottom-left. GPU-safe pseudo-only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-1/4 -right-1/4 w-[80%] h-[150%] origin-top-right"
          style={{
            background:
              'linear-gradient(115deg, transparent 40%, oklch(0.88 0.012 80 / 0.07) 48%, oklch(0.92 0.012 80 / 0.09) 50%, oklch(0.88 0.012 80 / 0.07) 52%, transparent 60%)',
            transform: 'rotate(-12deg)'
          }}
        />
      </div>

      {/* Silver/cream "stage spotlight" centré sur la zone CTAs — Stitch board 13.
          Composition 2 couches concentrées exactement sur les CTAs (~55%Y du section) :
            L1 — bright silver/cream core (ellipse 30%×16% at 50% 55%) @ 32% opacity
                 → halo focal lumineux directement sous/autour des CTAs
            L2 — soft outer bloom (ellipse 55%×30% at 50% 55%) @ 14% opacity
                 → wrap autour pour le fade naturel
          Pas de wash global ni de top ambient — focus exclusif sur la zone CTAs
          comme dans le board 13 (effet "spotlight" théâtral). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 55% 30% at 50% 45%, oklch(0.86 0.012 80 / 0.09) 0%, oklch(0.84 0.010 80 / 0.03) 50%, transparent 78%)'
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 30% 16% at 50% 45%, oklch(0.88 0.008 270 / 0.20) 0%, oklch(0.84 0.008 270 / 0.07) 45%, transparent 78%)'
        }}
      />

      <div
        ref={contentFadeRef}
        className="relative flex flex-col items-center gap-md max-w-[var(--container-default)]"
      >
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
          {/* Shimmer span — wraps the H1 text. Placed INSIDE the MaskReveal
              inner span so the gradient stays in sync with the text (not the
              wrapper's translateY animation). */}
          <span className="text-shimmer">
            {t({
              fr: "Ajouter un zéro à votre chiffre d'affaires.",
              en: 'Add a zero to your revenue.'
            })}
          </span>
        </MaskRevealHeading>

        <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
          {t({
            fr: "Architecture d'affaires & scaling stratégique pour entrepreneurs ambitieux.",
            en: 'Business architecture & strategic scaling for ambitious entrepreneurs.'
          })}
        </p>

        {/* Social proof : 3 avatars overlap + rating stars + microcopy.
            Inspiration jonasdiop.com (template CoachVerse) — placés AVANT les CTAs
            pour renforcer la crédibilité immédiate above the fold. */}
        <div className="flex items-center gap-sm mt-sm">
          <ul className="flex items-center -space-x-2.5">
            {SOCIAL_AVATARS.map((avatar) => (
              <li
                key={avatar.src}
                className={[
                  'relative h-9 w-9 rounded-full overflow-hidden',
                  'ring-2 ring-base shadow-[0_4px_12px_oklch(0_0_0/0.4)]'
                ].join(' ')}
              >
                <img
                  src={avatar.src}
                  alt={avatar.alt}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start gap-0.5">
            <div
              role="img"
              aria-label={t({ fr: '5 étoiles sur 5', en: '5 stars out of 5' })}
              className="flex items-center gap-0.5"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-3 w-3 max-w-none fill-gold text-gold"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-80 font-display text-[10px]">
              {t({
                fr: '857+ entrepreneurs accompagnés',
                en: '857+ entrepreneurs supported'
              })}
            </span>
          </div>
        </div>

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
            <CountUp
              to={857}
              suffix="+"
              className="text-gold font-display font-normal text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] tracking-tight leading-none tabular-nums"
            />
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-75 font-display text-[10px] sm:text-xs leading-tight max-w-[18ch]">
              {t({ fr: 'Entrepreneurs accompagnés', en: 'Entrepreneurs supported' })}
            </span>
          </li>
          <li className="flex flex-col items-center text-center gap-2">
            <CountUp
              to={31}
              suffix="M$+"
              className="text-gold font-display font-normal text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] tracking-tight leading-none tabular-nums"
            />
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-75 font-display text-[10px] sm:text-xs leading-tight max-w-[18ch]">
              {t({ fr: 'Généré pour nos clients', en: 'Generated for clients' })}
            </span>
          </li>
          <li className="flex flex-col items-center text-center gap-2">
            <CountUp
              to={15}
              suffix="+ ANS"
              className="text-gold font-display font-normal text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] tracking-tight leading-none tabular-nums"
            />
            <span className="text-eyebrow uppercase tracking-widest text-silver opacity-75 font-display text-[10px] sm:text-xs leading-tight max-w-[20ch]">
              {t({
                fr: "D'expérience en stratégie d'affaires",
                en: 'Of business strategy experience'
              })}
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
