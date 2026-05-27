import { TrustBand } from '@/components/sections/TrustBand';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { aboutCopy } from '@/data/copy/about';
import { useParallax } from '@/hooks/useParallax';
import { useT } from '@/lib/i18n/useT';

/**
 * AboutPage — full /a-propos page. Inspired by Stitch boards 15 + 22.
 *
 * Structure :
 *   Hero (real portrait Jonas contemplative + ImageReveal slide-up + parallax)
 *   Stats band gold
 *   Chapters 1+2 — Insight + Échec (ScrollReveal + StaggerReveal chapters)
 *   📷 Watch movement signature break (ImageReveal expand)
 *   Chapters 3+4 — Naissance CDT + Aujourd'hui (ScrollReveal + StaggerReveal)
 *   📷 Architectural building signature break (ImageReveal expand)
 *   Chapter 5 — Mission (ScrollReveal)
 *   TrustBand gold stats
 *   FinalCTA
 */
export function AboutPage() {
  const { t, locale } = useT();
  const heroParallaxRef = useParallax({ speed: 0.12 });

  return (
    <>
      {/* ─── HERO with Jonas portrait — REAL CONTEMPLATIVE photo ────────────── */}
      <section
        aria-label={t(aboutCopy.hero.eyebrow)}
        className="relative min-h-[80vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          {/* Text col */}
          <div className="lg:col-span-7 flex flex-col items-start gap-md max-w-[var(--container-content)]">
            <Eyebrow>{t(aboutCopy.hero.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h1">
              <span className="text-shimmer">{t(aboutCopy.hero.h1)}</span>
            </MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[55ch]">
              {t(aboutCopy.hero.sub)}
            </p>
          </div>
          {/* Portrait col — REAL Jonas contemplative photo + parallax + ImageReveal slide-up */}
          <div ref={heroParallaxRef} className="lg:col-span-5 relative">
            <ImageReveal
              direction="slide-up"
              duration={1000}
              className={[
                'relative aspect-[3/4] rounded-[clamp(1rem,1vw+0.5rem,1.75rem)] overflow-hidden',
                'ring-1 ring-silver/15',
                'shadow-haptic-focal',
                'bg-elevated'
              ].join(' ')}
            >
              <picture>
                <source srcSet="/photos/jonas-portrait-contemplative.avif" type="image/avif" />
                <source srcSet="/photos/jonas-portrait-contemplative.webp" type="image/webp" />
                <img
                  src="/photos/jonas-portrait-contemplative.jpg"
                  alt={t({
                    fr: "Jonas Diop, Architecte d'affaires, fondateur de DIOP Stratégies Internationales Inc.",
                    en: 'Jonas Diop, Business Architect, founder of DIOP Stratégies Internationales Inc.'
                  })}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/40 via-transparent to-transparent"
              />
            </ImageReveal>
            <p className="mt-sm text-eyebrow uppercase tracking-widest text-silver opacity-60 font-display text-center">
              {t({ fr: 'Jonas Diop · Montréal · 2026', en: 'Jonas Diop · Montréal · 2026' })}
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS BAND (inline gold) ──────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t({ fr: 'Chiffres clés', en: 'Key figures' })}
          className="py-xl bg-elevated border-y border-silver/10"
        >
          <div className="max-w-content mx-auto px-md">
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-xl sm:gap-2xl">
              {aboutCopy.stats.items.map((item) => (
                <li key={item.value.fr} className="flex flex-col items-center text-center gap-xs">
                  <span className="text-gold font-display text-[clamp(2.25rem,1.7rem+2.5vw,3.5rem)] tracking-tight leading-none">
                    {t(item.value)}
                  </span>
                  <span className="text-eyebrow uppercase tracking-widest text-silver opacity-75 font-display">
                    {t(item.label)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CHAPTERS 1 & 2 — Insight fondateur + L'échec ──────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t({ fr: 'Histoire (partie 1)', en: 'Story (part 1)' })}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="02" position="left" />
          <StaggerReveal
            as="div"
            className="relative max-w-content mx-auto px-md flex flex-col gap-2xl"
            staggerMs={150}
          >
            {aboutCopy.sections.slice(0, 2).map((chapter) => (
              <article key={chapter.id} className="flex flex-col gap-sm max-w-[72ch]">
                <Eyebrow>{t(chapter.eyebrow)}</Eyebrow>
                <h2 className="text-h2 text-primary font-display text-balance">
                  {t(chapter.title)}
                </h2>
                <p className="text-body-lg text-silver opacity-85 text-pretty whitespace-pre-line">
                  {t(chapter.body)}
                </p>
              </article>
            ))}
          </StaggerReveal>
        </section>
      </ScrollReveal>

      {/* ─── 📷 SIGNATURE BREAK 1 — Watch movement ─────────────────────────── */}
      <section
        aria-label={t({
          fr: 'Mécanique horlogère — symbole CDT',
          en: 'Watch mechanism — CDT symbolism'
        })}
        className="relative bg-base"
      >
        <div className="relative w-full max-w-default mx-auto px-md py-xl">
          <figure className="relative">
            <ImageReveal
              direction="expand"
              duration={1000}
              className={[
                'relative aspect-[16/9] sm:aspect-[21/9] rounded-[clamp(0.75rem,0.8vw+0.4rem,1.5rem)] overflow-hidden',
                'ring-1 ring-silver/10',
                'shadow-haptic-focal'
              ].join(' ')}
            >
              <img
                src="/photos/watch-movement.png"
                alt={t({
                  fr: 'Mécanique horlogère suisse — métaphore de la précision systémique au cœur de la méthodologie CDT™ (Compression Dynamique du Temps).',
                  en: 'Swiss watch movement — metaphor for the systemic precision at the heart of the CDT™ methodology (Dynamic Time Compression).'
                })}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/30"
              />
            </ImageReveal>
            <figcaption className="mt-md flex items-center justify-center gap-sm text-eyebrow uppercase tracking-widest font-display">
              <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span className="text-silver opacity-75">
                {t({
                  fr: 'Compression Dynamique du Temps — précision mécanique',
                  en: 'Dynamic Time Compression — mechanical precision'
                })}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ─── CHAPTERS 3 & 4 — Naissance CDT + Aujourd'hui ──────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t({ fr: 'Histoire (partie 2)', en: 'Story (part 2)' })}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="03" position="right" />
          <StaggerReveal
            as="div"
            className="relative max-w-content mx-auto px-md flex flex-col gap-2xl"
            staggerMs={150}
          >
            {aboutCopy.sections.slice(2, 4).map((chapter) => (
              <article key={chapter.id} className="flex flex-col gap-sm max-w-[72ch]">
                <Eyebrow>{t(chapter.eyebrow)}</Eyebrow>
                <h2 className="text-h2 text-primary font-display text-balance">
                  {t(chapter.title)}
                </h2>
                <p className="text-body-lg text-silver opacity-85 text-pretty whitespace-pre-line">
                  {t(chapter.body)}
                </p>
              </article>
            ))}
          </StaggerReveal>
        </section>
      </ScrollReveal>

      {/* ─── 📷 SIGNATURE BREAK 2 — Architectural building ──────────────────── */}
      <section
        aria-label={t({
          fr: "Architecture d'affaires — métaphore visuelle",
          en: 'Business architecture — visual metaphor'
        })}
        className="relative bg-base"
      >
        <div className="relative w-full max-w-default mx-auto px-md py-xl">
          <figure className="relative">
            <ImageReveal
              direction="expand"
              duration={1000}
              className={[
                'relative aspect-[16/9] sm:aspect-[21/9] rounded-[clamp(0.75rem,0.8vw+0.4rem,1.5rem)] overflow-hidden',
                'ring-1 ring-silver/10',
                'shadow-haptic-focal'
              ].join(' ')}
            >
              <img
                src="/photos/architectural-building.png"
                alt={t({
                  fr: "Architecture moderne en acier et verre — métaphore visuelle de l'architecture d'affaires : structure, lignes de force, beauté de la précision.",
                  en: 'Modern steel-and-glass architecture — visual metaphor for business architecture : structure, lines of force, the beauty of precision.'
                })}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/30"
              />
            </ImageReveal>
            <figcaption className="mt-md flex items-center justify-center gap-sm text-eyebrow uppercase tracking-widest font-display">
              <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span className="text-silver opacity-75">
                {t({
                  fr: "Architecture d'affaires — structure, levier, précision",
                  en: 'Business architecture — structure, leverage, precision'
                })}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ─── CHAPTER 5 — La mission ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t({ fr: 'La mission', en: 'The mission' })}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-content mx-auto px-md">
            {aboutCopy.sections.slice(4, 5).map((chapter) => (
              <article key={chapter.id} className="flex flex-col gap-sm max-w-[72ch]">
                <Eyebrow>{t(chapter.eyebrow)}</Eyebrow>
                <h2 className="text-h2 text-primary font-display text-balance">
                  {t(chapter.title)}
                </h2>
                <p className="text-body-lg text-silver opacity-85 text-pretty whitespace-pre-line">
                  {t(chapter.body)}
                </p>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── TRUST BAND ──────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <TrustBand />
      </ScrollReveal>

      {/* ─── FINAL CTA ──────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(aboutCopy.finalCta.eyebrow)}
          className="py-2xl bg-elevated border-t border-silver/10"
        >
          <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(aboutCopy.finalCta.eyebrow)}</Eyebrow>
            <h2 className="text-h2 text-primary font-display text-balance">
              {t(aboutCopy.finalCta.title)}
            </h2>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[50ch]">
              {t(aboutCopy.finalCta.sub)}
            </p>
            <div className="mt-md">
              <CTAPill variant="silver-primary" href={ROUTES.contact[locale]}>
                {t(aboutCopy.finalCta.ctaLabel)}
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
