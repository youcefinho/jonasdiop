import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Check, X } from 'lucide-react';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { servicesCopy } from '@/data/copy/services';
import { useT } from '@/lib/i18n/useT';

/**
 * /services — Hub Services Jonas Diop
 * Sections : Hero → 3 Catégories → Tableau comparatif → Qualification split → Final CTA
 *
 * DA Platinum Executive Authority : dark luxe, silver primary, gold rare (tableau header border).
 * servicesCopy.categories = array of 3 objects (groupe, formation, accompagnement).
 * Each category has .programmes[] with .hrefKey linking to ROUTES.
 */
function ServicesPage() {
  const { t, locale } = useT();

  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                              */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(servicesCopy.hero.eyebrow)}
          className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
        >
          <div className="flex flex-col items-center gap-md max-w-content mx-auto">
            <Eyebrow>{t(servicesCopy.hero.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h1">{t(servicesCopy.hero.h1)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(servicesCopy.hero.sub)}
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 3 CATÉGORIES                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t({ fr: 'Nos formats', en: 'Our formats' })}
          className="py-2xl bg-elevated border-y border-silver/10"
        >
          <div className="max-w-default mx-auto px-md grid grid-cols-1 md:grid-cols-3 gap-md">
            {servicesCopy.categories.map((cat) => (
              <article
                key={cat.id}
                className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg"
              >
                <Eyebrow>{t(cat.eyebrow)}</Eyebrow>
                <h2 className="text-h3 text-primary font-display text-balance">{t(cat.title)}</h2>
                <p className="text-body text-silver opacity-80 text-pretty">{t(cat.description)}</p>

                {/* Programme links within this category */}
                <ul className="flex flex-col gap-2 mt-auto pt-sm" aria-label={t(cat.eyebrow)}>
                  {cat.programmes.map((prog) => (
                    <li key={prog.id}>
                      <Link
                        to={ROUTES[prog.hrefKey as keyof typeof ROUTES][locale]}
                        className="inline-flex items-center gap-2 text-sm text-gold/80 hover:text-gold transition-colors duration-base font-display font-medium"
                      >
                        <span>{t(prog.name)}</span>
                        <span
                          aria-hidden="true"
                          className="text-gold/50 text-xs font-normal font-sans"
                        >
                          {t(prog.badge)}
                        </span>
                        <ArrowRight className="h-3 w-3 max-w-none shrink-0 opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* TABLEAU COMPARATIF                                                */}
        {/* ---------------------------------------------------------------- */}
        <section aria-label={t(servicesCopy.comparisonTable.eyebrow)} className="py-2xl bg-base">
          <div className="max-w-default mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <Eyebrow>{t(servicesCopy.comparisonTable.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(servicesCopy.comparisonTable.title)}</MaskRevealHeading>
            </div>

            {/* Desktop table */}
            <div className="overflow-x-auto -mx-md px-md">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-gold/30">
                    <th className="text-left py-sm pr-md text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs font-medium">
                      {t(servicesCopy.comparisonTable.headers.programme)}
                    </th>
                    <th className="text-left py-sm pr-md text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs font-medium">
                      {t(servicesCopy.comparisonTable.headers.format)}
                    </th>
                    <th className="text-left py-sm pr-md text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs font-medium">
                      {t(servicesCopy.comparisonTable.headers.duree)}
                    </th>
                    <th className="text-left py-sm pr-md text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs font-medium">
                      {t(servicesCopy.comparisonTable.headers.intensite)}
                    </th>
                    <th className="text-left py-sm text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs font-medium">
                      {t(servicesCopy.comparisonTable.headers.idealPour)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicesCopy.comparisonTable.rows.map((row, idx) => (
                    <tr
                      key={row.name.fr}
                      className={`border-b border-silver/10 transition-colors duration-base hover:bg-elevated/50 ${idx === servicesCopy.comparisonTable.rows.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <td className="py-sm pr-md text-body text-primary font-display font-medium">
                        {t(row.name)}
                      </td>
                      <td className="py-sm pr-md text-body text-silver opacity-70">
                        {t(row.format)}
                      </td>
                      <td className="py-sm pr-md text-body text-silver opacity-70">
                        {t(row.duree)}
                      </td>
                      <td className="py-sm pr-md text-body text-silver opacity-70">
                        {t(row.intensite)}
                      </td>
                      <td className="py-sm text-body text-silver opacity-70">{t(row.idealPour)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* QUALIFICATION SPLIT                                               */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(servicesCopy.qualification.eyebrow)}
          className="py-2xl bg-elevated border-y border-silver/10"
        >
          <div className="max-w-default mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl">
              <Eyebrow>{t(servicesCopy.qualification.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(servicesCopy.qualification.title)}</MaskRevealHeading>
            </div>

            {/* Body paragraphs */}
            <div className="max-w-[65ch] mx-auto mb-xl">
              {t(servicesCopy.qualification.body)
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

            {/* Pour vous / Pas pour vous split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl max-w-default mx-auto">
              {/* Pour vous */}
              <div className="flex flex-col gap-sm">
                <h3 className="text-h3 text-primary font-display text-balance">
                  {t(servicesCopy.qualification.qualifPour.title)}
                </h3>
                <ul
                  className="flex flex-col gap-sm mt-sm"
                  aria-label={t(servicesCopy.qualification.qualifPour.title)}
                >
                  {servicesCopy.qualification.qualifPour.items.map((item) => (
                    <li
                      key={item.fr.slice(0, 40)}
                      className="flex items-start gap-3 text-body text-silver"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-gold"
                      >
                        <Check className="h-5 w-5 max-w-none" />
                      </span>
                      <span className="text-pretty">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pas pour vous */}
              <div className="flex flex-col gap-sm">
                <h3 className="text-h3 text-primary font-display text-balance">
                  {t(servicesCopy.qualification.pasPour.title)}
                </h3>
                <ul
                  className="flex flex-col gap-sm mt-sm"
                  aria-label={t(servicesCopy.qualification.pasPour.title)}
                >
                  {servicesCopy.qualification.pasPour.items.map((item) => (
                    <li
                      key={item.fr.slice(0, 40)}
                      className="flex items-start gap-3 text-body text-silver opacity-60"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-silver/50"
                      >
                        <X className="h-5 w-5 max-w-none" />
                      </span>
                      <span className="text-pretty">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* FINAL CTA                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section aria-label={t(servicesCopy.finalCta.eyebrow)} className="py-2xl bg-base">
          <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(servicesCopy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(servicesCopy.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
              {t(servicesCopy.finalCta.sub)}
            </p>
            <div className="mt-md">
              <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
                {t(servicesCopy.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/services')({
  component: ServicesPage
});
