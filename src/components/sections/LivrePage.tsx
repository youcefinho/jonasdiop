import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { livreCopy } from '@/data/copy/livre';
import { useT } from '@/lib/i18n/useT';

/**
 * LivrePage — composite landing page section for /livre (FR) and /en/book.
 *
 * Sections : Hero → About book → ForWho → Sommaire 7 chapters → Format (3 items)
 *         → Release date → Waitlist email capture (disabled mockup) → FinalCta
 *
 * DA Platinum Executive Authority. Shell teaser — H6 statut pending Jonas.
 */
export function LivrePage() {
  const { t } = useT();

  return (
    <>
      {/* HERO */}
      <section
        aria-label={t(livreCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(livreCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(livreCopy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(livreCopy.hero.sub)}
          </p>
        </div>
      </section>

      {/* ABOUT — the book */}
      <section
        aria-label={t(livreCopy.about.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(livreCopy.about.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(livreCopy.about.title)}</MaskRevealHeading>
          </div>
          <div className="max-w-[65ch]">
            {t(livreCopy.about.body)
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

      {/* FOR WHO */}
      <section aria-label={t(livreCopy.forWho.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(livreCopy.forWho.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(livreCopy.forWho.title)}</MaskRevealHeading>
          </div>
          <div className="max-w-[65ch]">
            {t(livreCopy.forWho.body)
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

      {/* SOMMAIRE — 7 chapters with gold filigrane numbers */}
      <section
        aria-label={t(livreCopy.sommaire.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(livreCopy.sommaire.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(livreCopy.sommaire.title)}</MaskRevealHeading>
            <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch]">
              {t(livreCopy.sommaire.placeholder)}
            </p>
          </div>

          <ol data-chapters-list className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {livreCopy.sommaire.chapters.map((chap) => (
              <li
                key={chap.number}
                className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg"
              >
                <span
                  aria-hidden="true"
                  className="text-[2.5rem] font-display font-bold text-gold/15 leading-none select-none"
                >
                  {chap.number}
                </span>
                <h3 className="text-h3 text-primary font-display text-balance">{t(chap.title)}</h3>
                <p className="text-body text-silver opacity-70 text-pretty">{t(chap.sub)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMAT — 3 items (Print / Ebook / Audiobook) */}
      <section aria-label={t(livreCopy.format.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(livreCopy.format.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(livreCopy.format.title)}</MaskRevealHeading>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-default mx-auto">
            {livreCopy.format.items.map((fmt) => (
              <div
                key={fmt.format}
                className="flex flex-col gap-2 p-md border-l-2 border-gold/30 bg-elevated rounded-r-lg"
              >
                <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                  {fmt.format}
                </dt>
                <dd className="text-body text-silver opacity-80 text-pretty">
                  {t(fmt.description)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RELEASE — estimated release date */}
      <section
        aria-label={t(livreCopy.release.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(livreCopy.release.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(livreCopy.release.title)}</MaskRevealHeading>
          <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch]">
            {t(livreCopy.release.placeholder)}
          </p>
        </div>
      </section>

      {/* WAITLIST — email capture mockup, disabled (Sprint 6 GHL wire) */}
      <section aria-label={t(livreCopy.waitlist.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(livreCopy.waitlist.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(livreCopy.waitlist.title)}</MaskRevealHeading>
            <p className="text-body text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(livreCopy.waitlist.sub)}
            </p>
          </div>

          <form
            data-waitlist-form
            className="flex flex-col sm:flex-row gap-sm max-w-[42ch] mx-auto"
            aria-label={t(livreCopy.waitlist.title)}
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="livre-waitlist-email" className="sr-only">
              {t(livreCopy.waitlist.emailPlaceholder)}
            </label>
            <input
              id="livre-waitlist-email"
              name="email"
              type="email"
              disabled
              placeholder={t(livreCopy.waitlist.emailPlaceholder)}
              className="flex-1 px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
            />
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-silver text-base disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
            >
              {t(livreCopy.waitlist.submitLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </button>
          </form>

          <p className="text-xs text-silver/40 text-center mt-md italic">
            {t(livreCopy.waitlist.confirmationMessage)}
          </p>
        </div>
      </section>

      {/* FINAL CTA — scroll up to waitlist */}
      <section
        aria-label={t(livreCopy.finalCta.eyebrow)}
        className="py-2xl bg-elevated border-t border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(livreCopy.finalCta.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(livreCopy.finalCta.title)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(livreCopy.finalCta.sub)}
          </p>
          <div className="mt-md">
            <CTAPill
              variant="silver-primary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const form = document.querySelector('[data-waitlist-form]') as HTMLElement | null;
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
            >
              {t(livreCopy.finalCta.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>
    </>
  );
}
