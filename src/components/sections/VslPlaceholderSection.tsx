import { Play } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { useT } from '@/lib/i18n/useT';

interface VslPlaceholderSectionProps {
  id: string;
}

/**
 * VSL Placeholder Section — premium "YouTube Idle" video card per
 * jonasdiop.com extraction (Inner Circle + Big container nested pattern).
 *
 * Composition :
 *   - Outer container : eyebrow + headline above the video player
 *   - Video card : nested double-bezel (outer shell + inner core 16:9)
 *   - Center : large play button with gold glow halo (Inner Circle pattern)
 *   - Idle state badge : "VSL bientôt disponible" pulse dot
 *
 * Real video embed will replace the inner core block when VSL received.
 */
export function VslPlaceholderSection({ id }: VslPlaceholderSectionProps) {
  const { t } = useT();
  return (
    <section
      id={id}
      className="relative min-h-[60vh] flex items-center justify-center px-md py-2xl bg-section-base overflow-hidden"
      aria-label={t({ fr: 'Vidéo méthodologie', en: 'Methodology video' })}
    >
      <FiligraneNumber number="03" position="right" />

      <div className="relative max-w-default mx-auto w-full flex flex-col items-center gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>{t({ fr: 'Vidéo · 3 min', en: 'Video · 3 min' })}</Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[22ch]">
            {t({
              fr: 'La méthode CDT™ expliquée par Jonas.',
              en: 'The CDT™ method, explained by Jonas.'
            })}
          </h2>
        </div>

        {/* Outer shell (Big container per Framer extraction) */}
        <div
          className={[
            'relative w-full max-w-[1080px] mx-auto',
            'rounded-[clamp(1rem,1vw+0.5rem,1.75rem)] overflow-hidden',
            'bg-elevated ring-1 ring-silver/15',
            'shadow-haptic-focal'
          ].join(' ')}
        >
          {/* Inner core 16:9 (nested double-bezel) */}
          <div className="relative aspect-video bg-base ring-1 ring-silver/10 rounded-[calc(clamp(1rem,1vw+0.5rem,1.75rem)-6px)] m-1.5 overflow-hidden">
            {/* Subtle radial gold ambient behind play button */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 40% 50% at 50% 50%, oklch(0.74 0.085 75 / 0.15) 0%, transparent 65%)'
              }}
            />

            {/* Inner Circle play button — gold ring + bright core + breathing pulse */}
            <button
              type="button"
              aria-label={t({ fr: 'Lecture vidéo (à venir)', en: 'Play video (coming soon)' })}
              disabled
              className={[
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'group flex items-center justify-center',
                'w-[clamp(60px,7vw,96px)] h-[clamp(60px,7vw,96px)] rounded-full',
                'bg-gold/90 text-base',
                'ring-1 ring-gold/40',
                'shadow-haptic-focal',
                'disabled:cursor-not-allowed transition-all duration-base'
              ].join(' ')}
            >
              {/* Pulse ring */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full ring-2 ring-gold/40 animate-ping opacity-70"
              />
              <Play className="h-7 w-7 max-w-none ml-1" fill="currentColor" aria-hidden="true" />
            </button>

            {/* Bottom status bar — VSL coming soon idle state */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-md py-sm bg-base/80 backdrop-blur-md border-t border-silver/15">
              <div className="flex items-center gap-sm">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse"
                />
                <span className="text-eyebrow uppercase tracking-widest text-silver opacity-75 font-display text-xs">
                  {t({ fr: 'VSL bientôt disponible', en: 'VSL coming soon' })}
                </span>
              </div>
              <span className="text-eyebrow uppercase tracking-widest text-silver opacity-50 font-display text-xs">
                {t({ fr: '3 min · CDT™', en: '3 min · CDT™' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
