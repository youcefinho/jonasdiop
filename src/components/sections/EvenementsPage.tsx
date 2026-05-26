import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { evenementsCopy } from '@/data/copy/evenements';
import { useT } from '@/lib/i18n/useT';

/**
 * EvenementsPage — composite landing page section for /evenements (FR) and /en/events.
 *
 * Sections : Hero → FormatType (body + 4 specs dl) → Programme (4 items) → Calendrier (empty state)
 *         → Conditions (invitation/candidature) → Capture email (Sprint 6 wire) → FinalCta (dual)
 *
 * DA Platinum Executive Authority. Calendar real dates pending H7 Jonas.
 */
export function EvenementsPage() {
  const { t, locale } = useT();

  return (
    <>
      {/* HERO */}
      <section
        aria-label={t(evenementsCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(evenementsCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(evenementsCopy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(evenementsCopy.hero.sub)}
          </p>
        </div>
      </section>

      {/* FORMAT TYPE — body + 4 specs (dl) */}
      <section
        aria-label={t(evenementsCopy.formatType.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(evenementsCopy.formatType.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(evenementsCopy.formatType.title)}</MaskRevealHeading>
          </div>
          <div className="max-w-[65ch]">
            {t(evenementsCopy.formatType.body)
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

          <dl
            data-event-specs
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mt-md"
          >
            {evenementsCopy.formatType.specs.map((spec) => (
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

      {/* PROGRAMME — 4 typical agenda items */}
      <section aria-label={t(evenementsCopy.programme.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(evenementsCopy.programme.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(evenementsCopy.programme.title)}</MaskRevealHeading>
          </div>

          <div data-programme-grid className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {evenementsCopy.programme.items.map((item, idx) => (
              <article
                key={item.id}
                className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
              >
                <span
                  aria-hidden="true"
                  className="text-[2.5rem] font-display font-bold text-gold/15 leading-none select-none"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h3 text-primary font-display text-balance">{t(item.title)}</h3>
                <p className="text-body text-silver opacity-70 text-pretty">{t(item.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDRIER — empty state with placeholder + emptyState */}
      <section
        aria-label={t(evenementsCopy.calendrier.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(evenementsCopy.calendrier.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(evenementsCopy.calendrier.title)}</MaskRevealHeading>
          </div>

          <div className="border border-dashed border-silver/20 rounded-lg p-xl bg-base/50 flex flex-col items-center text-center gap-sm">
            <p className="text-body text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(evenementsCopy.calendrier.emptyState)}
            </p>
            <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch] mt-sm">
              {t(evenementsCopy.calendrier.placeholder)}
            </p>
          </div>
        </div>
      </section>

      {/* CONDITIONS — invitation / candidature */}
      <section aria-label={t(evenementsCopy.conditions.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(evenementsCopy.conditions.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(evenementsCopy.conditions.title)}</MaskRevealHeading>
          </div>
          <div className="max-w-[65ch]">
            {t(evenementsCopy.conditions.body)
              .split('\n\n')
              .map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-body text-silver opacity-80 text-pretty mb-md last:mb-0"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: copy contains **bold** markdown, conversion is sanitized via simple regex replacement
                  dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              ))}
          </div>
        </div>
      </section>

      {/* CAPTURE — email notifications (Sprint 6 wire) */}
      <section
        aria-label={t(evenementsCopy.capture.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(evenementsCopy.capture.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(evenementsCopy.capture.title)}</MaskRevealHeading>
            <p className="text-body text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(evenementsCopy.capture.sub)}
            </p>
          </div>

          <form
            data-events-capture-form
            className="flex flex-col sm:flex-row gap-sm max-w-[42ch] mx-auto"
            aria-label={t(evenementsCopy.capture.title)}
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="events-capture-email" className="sr-only">
              {t(evenementsCopy.capture.emailPlaceholder)}
            </label>
            <input
              id="events-capture-email"
              name="email"
              type="email"
              disabled
              placeholder={t(evenementsCopy.capture.emailPlaceholder)}
              className="flex-1 px-md py-sm bg-base border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
            />
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-gold text-base disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
            >
              {t(evenementsCopy.capture.submitLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      {/* FINAL CTA — dual (primary email scroll + secondary appel) */}
      <section
        aria-label={t(evenementsCopy.finalCta.eyebrow)}
        className="py-2xl bg-base border-t border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(evenementsCopy.finalCta.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(evenementsCopy.finalCta.title)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(evenementsCopy.finalCta.sub)}
          </p>
          <div className="mt-md flex flex-col sm:flex-row gap-sm items-center justify-center">
            <CTAPill
              variant="gold-primary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const form = document.querySelector(
                    '[data-events-capture-form]'
                  ) as HTMLElement | null;
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
            >
              {t(evenementsCopy.finalCta.primaryCtaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
            <CTAPill variant="silver-secondary" href={ROUTES.contact[locale]}>
              {t(evenementsCopy.finalCta.secondaryCtaLabel)}
            </CTAPill>
          </div>
        </div>
      </section>
    </>
  );
}
