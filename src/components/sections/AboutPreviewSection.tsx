import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

/**
 * AboutPreviewSection — preview section on Home linking to /a-propos.
 * Split 12-col : portrait direct Jonas (col-5) + intro + CTA (col-7).
 * Photo : jonas-portrait-direct (Stitch validated 2026-05-26, real).
 */
export function AboutPreviewSection() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({
        fr: "L'architecte derrière la méthode",
        en: 'The architect behind the method'
      })}
      className="relative py-2xl bg-elevated border-y border-silver/10 overflow-hidden"
    >
      <FiligraneNumber number="01" position="right" />
      <div className="relative max-w-default mx-auto px-md grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
        {/* Portrait */}
        <div className="lg:col-span-5 relative">
          <div
            className={[
              'relative aspect-[3/4] rounded-[clamp(1rem,1vw+0.5rem,1.75rem)] overflow-hidden',
              'ring-1 ring-silver/15',
              'shadow-[0_24px_72px_-12px_oklch(0_0_0/0.6),_inset_0_1px_1px_oklch(1_0_0/0.05)]',
              'bg-base'
            ].join(' ')}
          >
            <picture>
              <source srcSet="/photos/jonas-portrait-direct.avif" type="image/avif" />
              <source srcSet="/photos/jonas-portrait-direct.webp" type="image/webp" />
              <img
                src="/photos/jonas-portrait-direct.jpg"
                alt={t({
                  fr: "Jonas Diop, Architecte d'affaires, fondateur de DIOP Stratégies Internationales Inc.",
                  en: 'Jonas Diop, Business Architect, founder of DIOP Stratégies Internationales Inc.'
                })}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/40 via-transparent to-transparent"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7 flex flex-col gap-md">
          <Eyebrow>
            {t({ fr: "L'architecte derrière la méthode", en: 'The architect behind the method' })}
          </Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1]">
            {t({
              fr: 'Jonas Diop. 15 ans à observer ce qui scale réellement.',
              en: 'Jonas Diop. 15 years observing what actually scales.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[60ch]">
            {t({
              fr: "Architecte d'affaires basé à Montréal. 857+ entrepreneurs accompagnés. 31M$+ générés pour ses clients. La méthodologie CDT™ — Compression Dynamique du Temps — est née de 15 ans d'observation : les entrepreneurs qui réussissent le mieux sont aussi ceux qui s'épuisent le plus.",
              en: 'Business architect based in Montréal. 857+ entrepreneurs supported. $31M+ generated for clients. The CDT™ methodology — Dynamic Time Compression — was born from 15 years of observation : the entrepreneurs who succeed the most are also the ones who burn out the hardest.'
            })}
          </p>
          <p className="text-body text-silver opacity-75 text-pretty max-w-[60ch]">
            {t({
              fr: "Pas une théorie. Une approche d'ingénierie systémique pour ajouter un zéro à votre chiffre d'affaires en récupérant 50% de votre temps.",
              en: 'Not a theory. A systemic engineering approach to add a zero to your revenue while reclaiming 50% of your time.'
            })}
          </p>
          <div className="mt-sm">
            <CTAPill variant="silver-outline" href={ROUTES.about[locale]}>
              {t({ fr: "Lire l'histoire complète", en: 'Read the full story' })}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </div>
    </section>
  );
}
