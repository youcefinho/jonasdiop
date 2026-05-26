import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MeshGradient } from '@/components/ui/MeshGradient';
import { ROUTES } from '@/config/routes';
import { useParallax } from '@/hooks/useParallax';
import { useT } from '@/lib/i18n/useT';

interface Pillar {
  number: string;
  title: { fr: string; en: string };
  body: { fr: string; en: string };
}

const PILLARS: ReadonlyArray<Pillar> = [
  {
    number: '01',
    title: { fr: "Architecture d'affaires", en: 'Business architecture' },
    body: {
      fr: "Structure de l'offre, du système de vente et de la chaîne de livraison à fort levier.",
      en: 'High-leverage offer, sales system, and delivery chain structure.'
    }
  },
  {
    number: '02',
    title: { fr: 'Ingénierie systémique', en: 'Systemic engineering' },
    body: {
      fr: "Automatisation et délégation pour que l'opération tourne avec ou sans vous.",
      en: 'Automation and delegation so operations run with or without you.'
    }
  },
  {
    number: '03',
    title: { fr: 'Levier stratégique', en: 'Strategic leverage' },
    body: {
      fr: 'Identifier où votre temps produit 3 à 5× plus de résultats. Tout le reste se délègue.',
      en: 'Identify where your time produces 3 to 5× more results. Everything else is delegated.'
    }
  }
];

/**
 * MethodologieCDTPreviewSection — preview section on Home linking to /methodologie-cdt.
 *
 * Composition :
 *   - Eyebrow gold "CDT™" + H2 "Compression Dynamique du Temps"
 *   - Sub : définition condensée 2 lignes
 *   - 3 piliers inline grid avec gold numbers
 *   - Signature image speaking + CTA "Découvrir la méthode complète"
 */
export function MethodologieCDTPreviewSection() {
  const { t, locale } = useT();
  const parallaxRef = useParallax<HTMLElement>({ speed: 0.1 });
  return (
    <section
      id="methodologie"
      aria-label={t({ fr: 'Méthodologie CDT™', en: 'CDT™ Methodology' })}
      className="relative py-2xl bg-base overflow-hidden"
    >
      <MeshGradient variant="deep-gold" opacity={0.08} />
      <FiligraneNumber number="02" position="left" />
      <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>
            {t({ fr: 'Méthodologie propriétaire · CDT™', en: 'Proprietary methodology · CDT™' })}
          </Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]">
            {t({
              fr: 'Compression Dynamique du Temps.',
              en: 'Dynamic Time Compression.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
            {t({
              fr: "Chaque heure investie dans une entreprise bien architecturée produit 3 à 5× plus de résultats qu'une heure investie dans une entreprise mal câblée. C'est l'ingénierie qui change la donne, pas l'effort.",
              en: 'Every hour invested in a well-architected business produces 3 to 5× more output than an hour invested in a poorly wired one. Engineering makes the difference, not effort.'
            })}
          </p>
        </div>

        {/* Signature image — Jonas speaking authority shot (real photo 2026-05-26).
            Parallax subtle drift on scroll (speed 0.10). */}
        <figure ref={parallaxRef} className="relative max-w-[var(--container-default)] mx-auto">
          <div
            className={[
              'relative aspect-[16/9] rounded-[clamp(0.75rem,0.8vw+0.4rem,1.5rem)] overflow-hidden',
              'ring-1 ring-silver/10',
              'shadow-[0_32px_80px_-16px_oklch(0_0_0/0.5)]'
            ].join(' ')}
          >
            <picture>
              <source srcSet="/photos/jonas-speaking.avif" type="image/avif" />
              <source srcSet="/photos/jonas-speaking.webp" type="image/webp" />
              <img
                src="/photos/jonas-speaking.jpg"
                alt={t({
                  fr: "Jonas Diop devant un public d'entrepreneurs — présentation de la méthodologie CDT™.",
                  en: 'Jonas Diop in front of an entrepreneur audience — presenting the CDT™ methodology.'
                })}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent"
            />
          </div>
        </figure>

        {/* 3 piliers inline grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.number}
              className={[
                'flex flex-col gap-sm p-md rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)]',
                'bg-elevated ring-1 ring-silver/15',
                'shadow-[inset_0_1px_1px_oklch(1_0_0/0.04)]'
              ].join(' ')}
            >
              <span
                aria-hidden="true"
                className="text-gold font-display font-normal text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] tracking-tight leading-none opacity-90"
              >
                {pillar.number}
              </span>
              <h3 className="text-h3 text-primary font-display text-balance leading-[1.15]">
                {t(pillar.title)}
              </h3>
              <p className="text-body text-silver opacity-80 text-pretty">{t(pillar.body)}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAPill variant="silver-outline" href={ROUTES['methodologie-cdt'][locale]}>
            {t({ fr: 'Découvrir la méthode complète', en: 'Discover the full method' })}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </CTAPill>
        </div>
      </div>
    </section>
  );
}
