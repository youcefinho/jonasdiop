import { useT } from '@/lib/i18n/useT';

/**
 * TrustedLogosBar — "Trusted by" marquee placeholder.
 *
 * Inspiration : jonasdiop.com Framer "company-proof" + "logos" + "row-1" /
 * "row-2" pattern (8 logos demo brands rotating).
 *
 * Pour Jonas : pas encore de logos clients réels publics (H6 partiel pending).
 * On affiche 6 TEXT placeholders en attendant — quand Jonas envoie ses vrais
 * logos clients ou médias (Forbes, Entrepreneur Quebec, Les Affaires, Radio-
 * Canada, etc.), on swap les <span> text par des <img> ou SVG logos.
 *
 * Marquee infinite loop seamless (×2 duplicate). Edge fade masks left+right.
 * Pause on hover. Respects reduced-motion via globals.css .animate-marquee
 * override.
 */

const PLACEHOLDER_LOGOS = [
  { fr: 'Les Affaires', en: 'Les Affaires' },
  { fr: 'Forbes', en: 'Forbes' },
  { fr: 'Entrepreneur Québec', en: 'Entrepreneur Quebec' },
  { fr: 'Radio-Canada', en: 'Radio-Canada' },
  { fr: 'BNN Bloomberg', en: 'BNN Bloomberg' },
  { fr: 'La Presse', en: 'La Presse' }
] as const;

export function TrustedLogosBar() {
  const { t } = useT();
  const doubled = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section
      aria-label={t({ fr: 'Mentions médias', en: 'Media mentions' })}
      className="relative py-xl bg-base border-y border-silver/10 overflow-hidden"
    >
      {/* Header — small eyebrow centered above the marquee */}
      <div className="max-w-content mx-auto px-md text-center mb-md">
        <span className="text-eyebrow uppercase tracking-widest text-silver opacity-60 font-display text-xs">
          {t({
            fr: 'Vu dans · cités par · partenariats médias',
            en: 'As seen in · cited by · media partnerships'
          })}
        </span>
      </div>

      {/* Edge fade masks — left + right fade to bg-base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-base to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-base to-transparent"
      />

      {/* Marquee track — slow 80s loop */}
      <div
        className="flex animate-marquee hover:[animation-play-state:paused] gap-2xl w-max items-center"
        style={{ animationDuration: '80s' }}
      >
        {doubled.map((logo, idx) => (
          <div
            key={`${logo.fr}-${idx < PLACEHOLDER_LOGOS.length ? 'a' : 'b'}`}
            className="shrink-0 px-md py-2 flex items-center"
          >
            {/* Text placeholder — replace with <img src="/logos/X.svg" /> when received */}
            <span
              className={[
                'text-eyebrow uppercase tracking-widest font-display',
                'text-silver opacity-70 hover:opacity-95 transition-opacity duration-base',
                'text-sm sm:text-base whitespace-nowrap'
              ].join(' ')}
            >
              {t(logo)}
            </span>
          </div>
        ))}
      </div>

      {/* Disclaimer microcopy — clarifies placeholders are illustrative */}
      <div className="max-w-content mx-auto px-md text-center mt-md">
        <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
          {t({
            fr: 'Logos illustratifs · vraies mentions médias à venir',
            en: 'Illustrative logos · real media mentions coming'
          })}
        </span>
      </div>
    </section>
  );
}
