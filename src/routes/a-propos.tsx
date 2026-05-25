import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { TrustBand } from '@/components/sections/TrustBand';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { aboutCopy } from '@/data/copy/about';
import { useT } from '@/lib/i18n/useT';

function AboutPage() {
  const { t, locale } = useT();

  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        {/* Hero */}
        <section
          aria-label={t(aboutCopy.hero.eyebrow)}
          className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-md py-xl"
        >
          <div className="flex flex-col items-center gap-md max-w-content">
            <Eyebrow>{t(aboutCopy.hero.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h1">{t(aboutCopy.hero.h1)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(aboutCopy.hero.sub)}
            </p>
          </div>
        </section>

        {/* Stats band */}
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
                  <span className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
                    {t(item.label)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Story chapters */}
        <section aria-label={t({ fr: 'Histoire', en: 'Story' })} className="py-2xl bg-base">
          <div className="max-w-content mx-auto px-md flex flex-col gap-2xl">
            {aboutCopy.sections.map((chapter) => (
              <article key={chapter.id} className="flex flex-col gap-sm max-w-[72ch]">
                <Eyebrow>{t(chapter.eyebrow)}</Eyebrow>
                <h2 className="text-h2 text-primary font-display text-balance">
                  {t(chapter.title)}
                </h2>
                <p className="text-body-lg text-silver opacity-80 text-pretty whitespace-pre-line">
                  {t(chapter.body)}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Trust band */}
        <TrustBand />

        {/* Final CTA */}
        <section
          aria-label={t(aboutCopy.finalCta.eyebrow)}
          className="py-2xl bg-elevated border-t border-silver/10"
        >
          <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(aboutCopy.finalCta.eyebrow)}</Eyebrow>
            <h2 className="text-h2 text-primary font-display text-balance">
              {t(aboutCopy.finalCta.title)}
            </h2>
            <p className="text-body-lg text-silver opacity-70 text-pretty max-w-[50ch]">
              {t(aboutCopy.finalCta.sub)}
            </p>
            <div className="mt-md">
              <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
                {t(aboutCopy.finalCta.ctaLabel)}
              </CTAPill>
            </div>
          </div>
        </section>
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/a-propos')({
  component: AboutPage
});
