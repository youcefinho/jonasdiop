import { ArrowRight, Check, Headphones } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { clientConfig } from '@/config/clientConfig';
import { podcastCopy } from '@/data/copy/podcast';
import { useT } from '@/lib/i18n/useT';

/**
 * PodcastPage — composite landing page section for /podcast (FR) and /en/podcast.
 *
 * Driven by clientConfig.podcast.status :
 *   - 'live'         → renders PodcastPageLive (Scenario A : about + episodes + platforms + transcriptions + finalCta)
 *   - 'coming_soon'  → renders PodcastPageWaitlist (Scenario B : comingSoon + formatPrevu + premierEpisode + waitlist + finalCta)
 *
 * H17 pending Jonas. Switch to 'live' once platforms + episode list confirmed.
 */
export function PodcastPage() {
  if (clientConfig.podcast.status === 'live') {
    return <PodcastPageLive />;
  }
  return <PodcastPageWaitlist />;
}

// ============================================================================
// SCENARIO A — Podcast live (active platforms + episodes)
// ============================================================================

export function PodcastPageLive() {
  const { t } = useT();
  const a = podcastCopy.scenarioA;
  const platforms = a.platforms.items;
  const platformUrlMap: Record<string, string | null> = {
    Spotify: clientConfig.podcast.spotifyUrl,
    'Apple Podcasts': clientConfig.podcast.applePodcastsUrl,
    YouTube: clientConfig.podcast.youtubeUrl
  };

  return (
    <>
      {/* HERO */}
      <section
        aria-label={t(podcastCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(podcastCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(podcastCopy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(podcastCopy.hero.subA)}
          </p>
        </div>
      </section>

      {/* ABOUT — body + 3 specs */}
      <section
        aria-label={t(a.about.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(a.about.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(a.about.title)}</MaskRevealHeading>
          </div>
          <div className="max-w-[65ch]">
            {t(a.about.body)
              .split('\n\n')
              .map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-body text-silver opacity-80 text-pretty mb-md last:mb-0"
                >
                  {para}
                </p>
              ))}
          </div>

          <dl data-podcast-specs className="grid grid-cols-1 md:grid-cols-3 gap-md mt-md">
            {a.about.specs.map((spec) => (
              <div
                key={spec.label.fr}
                className="flex flex-col gap-2 p-md border-l-2 border-gold/30 bg-base rounded-r-lg"
              >
                <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                  {t(spec.label)}
                </dt>
                <dd className="text-body text-primary font-display font-medium text-pretty">
                  {t(spec.value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* EPISODES placeholder (Sprint 5 / Sprint 6 embeds wire) */}
      <section aria-label={t(a.episodes.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(a.episodes.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(a.episodes.title)}</MaskRevealHeading>
          </div>
          <div className="border border-dashed border-silver/20 rounded-lg p-xl bg-elevated/50 text-center">
            <p className="text-sm text-silver/50 italic text-pretty">{t(a.episodes.placeholder)}</p>
          </div>
        </div>
      </section>

      {/* PLATFORMS — 3 listening links */}
      <section
        aria-label={t(a.platforms.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(a.platforms.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(a.platforms.title)}</MaskRevealHeading>
          </div>
          <ul
            data-platforms-list
            className="grid grid-cols-1 md:grid-cols-3 gap-md"
            aria-label={t(a.platforms.title)}
          >
            {platforms.map((p) => {
              const url = platformUrlMap[p.platform];
              return (
                <li
                  key={p.platform}
                  className="flex flex-col items-center text-center gap-sm p-md bg-base border border-silver/15 rounded-lg"
                >
                  <span
                    aria-hidden="true"
                    className="h-8 w-8 max-w-none shrink-0 text-gold/70 flex items-center justify-center"
                  >
                    <Headphones className="h-5 w-5 max-w-none" />
                  </span>
                  <p className="text-h3 text-primary font-display font-medium text-pretty">
                    {p.platform}
                  </p>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-gold/80 hover:text-gold transition-colors duration-base font-display text-xs"
                    >
                      <span>{t({ fr: 'Écouter', en: 'Listen' })}</span>
                      <ArrowRight className="h-3 w-3 max-w-none shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="text-xs text-silver/40 italic text-pretty">{p.url}</p>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-silver/50 italic text-center mt-lg text-pretty max-w-[55ch] mx-auto">
            {t(a.platforms.placeholder)}
          </p>
        </div>
      </section>

      {/* TRANSCRIPTIONS placeholder */}
      <section aria-label={t(a.transcriptions.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(a.transcriptions.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(a.transcriptions.title)}</MaskRevealHeading>
          </div>
          <p className="text-body text-silver opacity-80 text-pretty max-w-[65ch]">
            {t(a.transcriptions.body)}
          </p>
        </div>
      </section>

      {/* FINAL CTA — Scenario A */}
      <section
        aria-label={t(podcastCopy.finalCta.scenarioA.eyebrow)}
        className="py-2xl bg-elevated border-t border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(podcastCopy.finalCta.scenarioA.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(podcastCopy.finalCta.scenarioA.title)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(podcastCopy.finalCta.scenarioA.sub)}
          </p>
          <div className="mt-md">
            <CTAPill
              variant="silver-primary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const list = document.querySelector(
                    '[data-platforms-list]'
                  ) as HTMLElement | null;
                  if (list) {
                    list.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
            >
              {t(podcastCopy.finalCta.scenarioA.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================================
// SCENARIO B — Podcast coming soon (waitlist capture)
// ============================================================================

export function PodcastPageWaitlist() {
  const { t } = useT();
  const b = podcastCopy.scenarioB;

  return (
    <>
      {/* HERO */}
      <section
        aria-label={t(podcastCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(podcastCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(podcastCopy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(podcastCopy.hero.subB)}
          </p>
        </div>
      </section>

      {/* COMING SOON — body */}
      <section
        aria-label={t(b.comingSoon.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(b.comingSoon.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(b.comingSoon.title)}</MaskRevealHeading>
          </div>
          <div className="max-w-[65ch]">
            {t(b.comingSoon.body)
              .split('\n\n')
              .map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-body text-silver opacity-80 text-pretty mb-md last:mb-0"
                >
                  {para}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* FORMAT PRÉVU — 4 expectations */}
      <section aria-label={t(b.formatPrevu.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(b.formatPrevu.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(b.formatPrevu.title)}</MaskRevealHeading>
          </div>
          <ul
            data-format-list
            className="flex flex-col gap-sm max-w-[65ch] mx-auto"
            aria-label={t(b.formatPrevu.title)}
          >
            {b.formatPrevu.items.map((item) => (
              <li
                key={item.fr.slice(0, 40)}
                className="flex items-start gap-3 text-body text-silver"
              >
                <span aria-hidden="true" className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-gold">
                  <Check className="h-5 w-5 max-w-none" />
                </span>
                <span className="text-pretty">{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PREMIER ÉPISODE estimated date */}
      <section
        aria-label={t(b.premierEpisode.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(b.premierEpisode.eyebrow)}</Eyebrow>
          <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch]">
            {t(b.premierEpisode.placeholder)}
          </p>
        </div>
      </section>

      {/* WAITLIST — email capture mockup */}
      <section aria-label={t(b.waitlist.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(b.waitlist.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(b.waitlist.title)}</MaskRevealHeading>
            <p className="text-body text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(b.waitlist.sub)}
            </p>
          </div>

          <form
            data-podcast-waitlist-form
            className="flex flex-col sm:flex-row gap-sm max-w-[42ch] mx-auto"
            aria-label={t(b.waitlist.title)}
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="podcast-waitlist-email" className="sr-only">
              {t(b.waitlist.emailPlaceholder)}
            </label>
            <input
              id="podcast-waitlist-email"
              name="email"
              type="email"
              disabled
              placeholder={t(b.waitlist.emailPlaceholder)}
              className="flex-1 px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
            />
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-silver text-base disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
            >
              {t(b.waitlist.submitLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </button>
          </form>

          <p className="text-xs text-silver/40 text-center mt-md italic">
            {t(b.waitlist.confirmationMessage)}
          </p>
        </div>
      </section>

      {/* FINAL CTA — Scenario B */}
      <section
        aria-label={t(podcastCopy.finalCta.scenarioB.eyebrow)}
        className="py-2xl bg-elevated border-t border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(podcastCopy.finalCta.scenarioB.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(podcastCopy.finalCta.scenarioB.title)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(podcastCopy.finalCta.scenarioB.sub)}
          </p>
          <div className="mt-md">
            <CTAPill
              variant="silver-primary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const form = document.querySelector(
                    '[data-podcast-waitlist-form]'
                  ) as HTMLElement | null;
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
            >
              {t(podcastCopy.finalCta.scenarioB.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>
    </>
  );
}
