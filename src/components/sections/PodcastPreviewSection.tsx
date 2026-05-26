import { ArrowRight, Headphones } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

interface Platform {
  name: string;
  description: { fr: string; en: string };
}

const PLATFORMS: ReadonlyArray<Platform> = [
  {
    name: 'Spotify',
    description: { fr: 'Streaming · épisodes longs', en: 'Streaming · long-form episodes' }
  },
  {
    name: 'Apple Podcasts',
    description: { fr: 'iOS · auto-download', en: 'iOS · auto-download' }
  },
  {
    name: 'YouTube',
    description: { fr: 'Vidéo · transcriptions', en: 'Video · transcriptions' }
  }
];

/**
 * PodcastPreviewSection — preview section on Home linking to /podcast.
 *
 * Composition :
 *   - Eyebrow gold "Podcast" + H2 "The Game Changer"
 *   - Sub : positionnement éditorial 2 lignes
 *   - 3 platform cards (Spotify / Apple / YouTube) avec icon Headphones
 *   - CTA "Écouter le podcast" → /podcast
 *
 * Note : H17 pending Jonas → page /podcast a 2 scenarios (live vs coming soon).
 * Cette preview reste générique (présente le concept) jusqu'à ce que H17 confirmé.
 */
export function PodcastPreviewSection() {
  const { t, locale } = useT();
  return (
    <section
      aria-label={t({ fr: 'Podcast The Game Changer', en: 'The Game Changer Podcast' })}
      className="relative py-2xl bg-base overflow-hidden"
    >
      <FiligraneNumber number="06" position="left" />
      <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
          <Eyebrow>
            {t({ fr: 'Podcast · The Game Changer', en: 'Podcast · The Game Changer' })}
          </Eyebrow>
          <h2 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[22ch]">
            {t({
              fr: 'Des conversations sans filet avec des entrepreneurs qui exécutent.',
              en: 'Unscripted conversations with entrepreneurs who execute.'
            })}
          </h2>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[58ch]">
            {t({
              fr: "Pas de motivation générique. Des chiffres, des décisions difficiles, et les leviers qui ont fait la différence. Architecture, scaling, closing, cash flow — l'exécution réelle.",
              en: 'No generic motivation. Numbers, tough decisions, and the levers that made the difference. Architecture, scaling, closing, cash flow — real execution.'
            })}
          </p>
        </div>

        {/* Platforms grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-[var(--container-content)] mx-auto w-full">
          {PLATFORMS.map((platform) => (
            <article
              key={platform.name}
              className={[
                'flex flex-col items-center text-center gap-sm p-md rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)]',
                'bg-elevated ring-1 ring-silver/15',
                'shadow-[inset_0_1px_1px_oklch(1_0_0/0.04)]',
                'transition-all duration-base hover:ring-silver/30'
              ].join(' ')}
            >
              <span
                aria-hidden="true"
                className={[
                  'inline-flex items-center justify-center h-12 w-12 rounded-full',
                  'bg-base ring-1 ring-silver/15 text-silver'
                ].join(' ')}
              >
                <Headphones className="h-5 w-5 max-w-none" />
              </span>
              <h3 className="text-h3 text-primary font-display tracking-tight">{platform.name}</h3>
              <p className="text-sm text-silver opacity-65 text-pretty">
                {t(platform.description)}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAPill variant="silver-outline" href={ROUTES.podcast[locale]}>
            {t({ fr: 'Écouter le podcast', en: 'Listen to the podcast' })}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </CTAPill>
        </div>
      </div>
    </section>
  );
}
