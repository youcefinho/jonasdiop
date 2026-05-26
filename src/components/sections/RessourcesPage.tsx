import { ArrowRight, Check, Download } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ressourcesCopy } from '@/data/copy/ressources';
import { useT } from '@/lib/i18n/useT';

/**
 * RessourcesPage — composite landing page section for /ressources (FR) and /en/resources.
 *
 * Sections : Hero → Articles récents (empty state via GHL Blog headless scaffolding)
 *         → Categories 5 cards → Frameworks 2 shells (PDF downloads pending Jonas)
 *         → Newsletter capture (mockup disabled, Sprint 6 GHL wire) → FinalCta
 *
 * DA Platinum Executive Authority. GHL Blog real fetch live Sprint 6.
 * Newsletter inscriptions = GHL custom field upsert via /api/newsletter Sprint 6.
 */
export function RessourcesPage() {
  const { t } = useT();

  return (
    <>
      {/* HERO */}
      <section
        aria-label={t(ressourcesCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(ressourcesCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(ressourcesCopy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(ressourcesCopy.hero.sub)}
          </p>
        </div>
      </section>

      {/* ARTICLES RÉCENTS — empty state (GHL Blog headless wire Sprint 6) */}
      <section
        aria-label={t(ressourcesCopy.articlesRecents.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(ressourcesCopy.articlesRecents.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(ressourcesCopy.articlesRecents.title)}</MaskRevealHeading>
          </div>
          <div
            data-articles-empty
            className="border border-dashed border-silver/20 rounded-lg p-xl bg-base/50 flex flex-col items-center text-center gap-sm"
          >
            <p className="text-body text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(ressourcesCopy.articlesRecents.emptyState)}
            </p>
            <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch] mt-sm">
              {t(ressourcesCopy.articlesRecents.placeholder)}
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES — 5 topics grid */}
      <section aria-label={t(ressourcesCopy.categories.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(ressourcesCopy.categories.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(ressourcesCopy.categories.title)}</MaskRevealHeading>
          </div>

          <ul
            data-categories-list
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-md"
            aria-label={t(ressourcesCopy.categories.title)}
          >
            {ressourcesCopy.categories.items.map((cat) => (
              <li
                key={cat.id}
                className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
              >
                <h3 className="text-h3 text-primary font-display text-balance">{t(cat.label)}</h3>
                <p className="text-sm text-silver opacity-70 text-pretty">{t(cat.description)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FRAMEWORKS — 2 PDF shells */}
      <section
        aria-label={t(ressourcesCopy.frameworks.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <Eyebrow>{t(ressourcesCopy.frameworks.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(ressourcesCopy.frameworks.title)}</MaskRevealHeading>
            <p className="text-body text-silver opacity-80 text-pretty max-w-[65ch]">
              {t(ressourcesCopy.frameworks.body)}
            </p>
          </div>

          <ul
            data-frameworks-list
            className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md"
            aria-label={t(ressourcesCopy.frameworks.title)}
          >
            {ressourcesCopy.frameworks.shells.map((shell) => (
              <li
                key={shell.id}
                className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg"
              >
                <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
                  {shell.format}
                </p>
                <h3 className="text-h3 text-primary font-display text-balance">{t(shell.title)}</h3>
                <p className="text-body text-silver opacity-70 text-pretty">
                  {t(shell.description)}
                </p>
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-transparent border border-silver/40 text-silver disabled:cursor-not-allowed disabled:opacity-50 mt-auto self-start"
                >
                  <Download className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                  {t(shell.ctaLabel)}
                </button>
              </li>
            ))}
          </ul>

          <p className="text-sm text-silver/50 italic text-center mt-md text-pretty">
            {t(ressourcesCopy.frameworks.disclaimer)}
          </p>
          <p className="text-xs text-silver/40 text-center text-pretty">
            {t(ressourcesCopy.frameworks.placeholder)}
          </p>
        </div>
      </section>

      {/* NEWSLETTER — email capture mockup (Sprint 6 GHL wire) */}
      <section aria-label={t(ressourcesCopy.newsletter.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(ressourcesCopy.newsletter.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(ressourcesCopy.newsletter.title)}</MaskRevealHeading>
          </div>

          <div className="max-w-[65ch] mx-auto mb-lg">
            {t(ressourcesCopy.newsletter.body)
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

          <ul
            data-newsletter-benefits
            className="flex flex-col gap-sm max-w-[65ch] mx-auto mb-lg"
            aria-label={t(ressourcesCopy.newsletter.title)}
          >
            {ressourcesCopy.newsletter.benefits.map((item) => (
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

          <form
            data-newsletter-form
            className="flex flex-col sm:flex-row gap-sm max-w-[42ch] mx-auto"
            aria-label={t(ressourcesCopy.newsletter.title)}
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {t(ressourcesCopy.newsletter.emailPlaceholder)}
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              disabled
              placeholder={t(ressourcesCopy.newsletter.emailPlaceholder)}
              className="flex-1 px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
            />
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-gold text-base disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
            >
              {t(ressourcesCopy.newsletter.submitLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </button>
          </form>

          <p className="text-xs text-silver/40 text-center mt-md italic">
            {t(ressourcesCopy.newsletter.confirmationMessage)}
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        aria-label={t(ressourcesCopy.finalCta.eyebrow)}
        className="py-2xl bg-elevated border-t border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(ressourcesCopy.finalCta.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(ressourcesCopy.finalCta.title)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(ressourcesCopy.finalCta.sub)}
          </p>
          <div className="mt-md">
            <CTAPill
              variant="gold-primary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const form = document.querySelector(
                    '[data-newsletter-form]'
                  ) as HTMLElement | null;
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
            >
              {t(ressourcesCopy.finalCta.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>
    </>
  );
}
