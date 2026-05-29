import { Link } from '@tanstack/react-router';
import { ArrowRight, Check, Lock } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { evenementsBootcampsCopy } from '@/data/copy/evenementsBootcamps';
import { useT } from '@/lib/i18n/useT';
import { SchemaScript } from '@/lib/seo/SchemaScript';

/**
 * EvenementsBootcampsPage — HUB /evenements/bootcamps (FR) + /en/events/bootcamps (EN).
 *
 * Page maîtresse de la Trilogie — entry point unique vers les 3 sous-pages
 * bootcamps. 7 sections numérotées 01-07 (FiligraneNumber alternance left/right
 * cohérent EvenementsPage + ConferencesPage) :
 *
 *   1. Hero — eyebrow Méthode RISE™ + h1 trois leviers + sub + micro-proof + CTA scroll
 *   2. Pourquoi 3 bootcamps — bloc explicatif + 3 piliers blocages distincts
 *   3. Tableau comparatif — centerpiece 6 colonnes verbatim Trilogie
 *   4. 3 cartes produit — large card navigable par bootcamp (carte highlight middle)
 *   5. Méthode RISE™ — 4 piliers R/I/S/E + note CDT™ + Game Changer Protocol™
 *   6. Crédibilité Jonas — 3 stats verbatim formulaire signé + credentials + citation
 *   7. CTA final — 3 boutons sous-pages bootcamps (primary) + 1 appel stratégique (secondary)
 *
 * Tone : TU partout. DA Platinum Executive Authority (dark luxe silver + gold rare).
 *
 * Anti-cannibalisation (brief v3 §5) :
 *   - 3 CTAs vers sous-pages bootcamps = primary gold dans la section 7
 *   - CTA "Réserve ton appel stratégique" (→ /contact) = secondary outline,
 *     visuellement subordonné, dans un sous-bloc séparé sous les 3 primary.
 *   - Hors page bootcamps, "Prendre rendez-vous" reste hégémonique.
 *
 * Mode pré-lancement :
 *   - Prix affichés (brief v3 §3.6 prix événements OK)
 *   - Pas de bouton Stripe ni capture email sur le HUB — chaque sous-page bootcamp
 *     gère ce contrat individuellement
 *   - Dates cohortes non rendues ici (HUB est intemporel — chaque sous-page indique
 *     "Annonce prochaine" sur son hero)
 *
 * Schema.org : WebPage avec breadcrumb [Accueil → Événements → Bootcamps].
 * Pas de FAQPage ici (FAQ par bootcamp — sur chaque sous-page).
 * Pas de Event nodes (HUB n'est pas un event — les 3 sous-pages portent leur Event).
 */
export function EvenementsBootcampsPage() {
  const { t, locale } = useT();
  const copy = evenementsBootcampsCopy;

  // Helper : sélection FR/EN du href selon locale courante
  const localizedHref = (href: string, hrefEn: string): string => (locale === 'en' ? hrefEn : href);

  const breadcrumbTrail = [
    {
      name: locale === 'fr' ? 'Accueil' : 'Home',
      url: ROUTES.home[locale]
    },
    {
      name: locale === 'fr' ? 'Événements' : 'Events',
      url: ROUTES.evenements[locale]
    },
    {
      name: locale === 'fr' ? 'Bootcamps — La Trilogie' : 'Bootcamps — The Trilogy',
      url: ROUTES['evenements-bootcamps'][locale]
    }
  ];

  return (
    <>
      <SchemaScript
        locale={locale}
        options={{
          webPage: {
            routeKey: 'evenements-bootcamps',
            name: t(copy.meta.title),
            description: t(copy.meta.description),
            breadcrumbTrail
          }
        }}
      />

      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[78vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            className="font-normal tracking-[-0.04em] text-[clamp(2.5rem,1.4rem+3.5vw,5rem)] leading-[1.02] max-w-[22ch]"
          >
            <span className="text-shimmer">{t(copy.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch] whitespace-pre-line">
            {t(copy.hero.sub)}
          </p>
          <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs mt-sm">
            {t(copy.hero.microProof)}
          </p>
          <div className="mt-md">
            <CTAPill
              variant="gold-primary"
              onClick={() => {
                if (typeof window === 'undefined') return;
                const target = document.getElementById('trilogie-cartes');
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {t(copy.hero.ctaPrincipal)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>

      {/* ─── 2. POURQUOI 3 BOOTCAMPS ─────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.pourquoi.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.pourquoi.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.pourquoi.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
                {t(copy.pourquoi.body)}
              </p>
            </div>

            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-default mx-auto"
              staggerMs={120}
              data-card-group="trilogie-pourquoi"
            >
              {copy.pourquoi.pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <span
                    aria-hidden="true"
                    className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs tabular-nums"
                  >
                    {pillar.marker}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance leading-tight text-[1.25rem]">
                    {t(pillar.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty">{t(pillar.body)}</p>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 3. TABLEAU COMPARATIF — centerpiece ─────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.tableau.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.tableau.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.tableau.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-85 text-pretty max-w-[58ch]">
                {t(copy.tableau.sub)}
              </p>
            </div>

            {/* Table desktop — md+ */}
            <section
              className="hidden md:block max-w-default mx-auto overflow-x-auto rounded-lg border border-silver/15 bg-elevated shadow-haptic-card"
              // biome-ignore lint/a11y/noNoninteractiveTabindex: WCAG 2.1.1 — overflow-x-auto requires tabIndex for keyboard scroll
              tabIndex={0}
              aria-label={t(copy.tableau.title)}
            >
              <table className="w-full border-collapse">
                <caption className="sr-only">{t(copy.tableau.title)}</caption>
                <thead>
                  <tr className="border-b border-silver/15">
                    <th
                      scope="col"
                      className="text-left p-md text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]"
                    >
                      {t(copy.tableau.columns.bootcamp)}
                    </th>
                    <th
                      scope="col"
                      className="text-left p-md text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]"
                    >
                      {t(copy.tableau.columns.blocage)}
                    </th>
                    <th
                      scope="col"
                      className="text-left p-md text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]"
                    >
                      {t(copy.tableau.columns.audience)}
                    </th>
                    <th
                      scope="col"
                      className="text-right p-md text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px]"
                    >
                      {t(copy.tableau.columns.priceLaunch)}
                    </th>
                    <th
                      scope="col"
                      className="text-right p-md text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]"
                    >
                      {t(copy.tableau.columns.priceRegular)}
                    </th>
                    <th
                      scope="col"
                      className="text-center p-md text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]"
                    >
                      {t(copy.tableau.columns.places)}
                    </th>
                    <th
                      scope="col"
                      className="text-left p-md text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]"
                    >
                      {t(copy.tableau.columns.format)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {copy.tableau.rows.map((row, idx) => (
                    <tr
                      key={row.id}
                      className={`border-b border-silver/10 last:border-b-0 transition-colors duration-base hover:bg-base/40 ${row.highlight ? 'bg-gold/[0.03]' : ''}`}
                    >
                      <th scope="row" className="text-left p-md align-top">
                        <Link
                          to={localizedHref(row.href, row.hrefEn)}
                          className="inline-flex items-center gap-2 text-body text-primary font-display font-medium no-underline hover:text-gold transition-colors duration-base"
                        >
                          <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px] tabular-nums shrink-0">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span>{t(row.bootcamp)}</span>
                        </Link>
                      </th>
                      <td className="p-md align-top text-body text-silver opacity-90 text-pretty">
                        {t(row.blocage)}
                      </td>
                      <td className="p-md align-top text-body text-silver opacity-80 text-pretty">
                        {t(row.audience)}
                      </td>
                      <td className="p-md align-top text-right text-body text-gold font-display font-medium tabular-nums whitespace-nowrap">
                        {t(row.priceLaunch)}
                      </td>
                      <td className="p-md align-top text-right text-sm text-silver/85 line-through tabular-nums whitespace-nowrap">
                        {t(row.priceRegular)}
                      </td>
                      <td className="p-md align-top text-center text-body text-primary font-display tabular-nums">
                        {t(row.places)}
                      </td>
                      <td className="p-md align-top text-sm text-silver opacity-85 text-pretty">
                        {t(row.format)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Stack mobile — md- */}
            <ul className="md:hidden flex flex-col gap-md max-w-content mx-auto list-none">
              {copy.tableau.rows.map((row, idx) => (
                <li
                  key={`mobile-${row.id}`}
                  className={`flex flex-col gap-sm p-md bg-elevated border rounded-lg shadow-haptic-card ${row.highlight ? 'border-gold/30' : 'border-silver/15'}`}
                >
                  <Link
                    to={localizedHref(row.href, row.hrefEn)}
                    className="flex items-center gap-2 text-h3 text-primary font-display text-balance leading-tight text-[1.125rem] no-underline hover:text-gold transition-colors duration-base"
                  >
                    <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs tabular-nums shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{t(row.bootcamp)}</span>
                  </Link>

                  <dl className="grid grid-cols-2 gap-sm pt-sm border-t border-silver/10">
                    <div className="flex flex-col gap-1 col-span-2 min-w-0">
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]">
                        {t(copy.tableau.columns.blocage)}
                      </dt>
                      <dd className="text-body text-silver opacity-90 text-pretty">
                        {t(row.blocage)}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 min-w-0">
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]">
                        {t(copy.tableau.columns.audience)}
                      </dt>
                      <dd className="text-body text-silver opacity-80 text-pretty">
                        {t(row.audience)}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px]">
                        {t(copy.tableau.columns.priceLaunch)}
                      </dt>
                      <dd className="text-body text-gold font-display font-medium tabular-nums">
                        {t(row.priceLaunch)}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]">
                        {t(copy.tableau.columns.priceRegular)}
                      </dt>
                      <dd className="text-sm text-silver/85 line-through tabular-nums">
                        {t(row.priceRegular)}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]">
                        {t(copy.tableau.columns.places)}
                      </dt>
                      <dd className="text-body text-primary font-display tabular-nums">
                        {t(row.places)}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]">
                        {t(copy.tableau.columns.format)}
                      </dt>
                      <dd className="text-sm text-silver opacity-85 text-pretty">
                        {t(row.format)}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 4. 3 CARTES PRODUIT ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          id="trilogie-cartes"
          aria-label={t(copy.cartes.eyebrow)}
          className="relative scroll-mt-[80px] py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.cartes.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.cartes.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-85 text-pretty max-w-[58ch]">
                {t(copy.cartes.sub)}
              </p>
            </div>

            <StaggerReveal
              as="ul"
              className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-default mx-auto list-none"
              staggerMs={120}
              data-card-group="trilogie-cartes"
            >
              {copy.cartes.items.map((item) => (
                <li key={item.id} className="h-full">
                  <Link
                    to={localizedHref(item.href, item.hrefEn)}
                    aria-label={`${t(item.ctaLabel)} — ${t(item.tagline)}`}
                    className="group flex flex-col gap-md p-md h-full bg-base border border-silver/15 rounded-lg shadow-haptic-card hover:border-gold/30 hover-lift no-underline transition-all duration-base"
                  >
                    <div className="flex items-start justify-between gap-sm">
                      <span
                        aria-hidden="true"
                        className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs tabular-nums"
                      >
                        {item.marker}
                      </span>
                      {item.applicationRequired ? (
                        <span className="inline-flex items-center gap-1 shrink-0 px-2 py-1 rounded-full border border-gold/40 bg-gold/10">
                          <Lock
                            className="h-3 w-3 max-w-none shrink-0 text-gold/90"
                            aria-hidden="true"
                          />
                          <span className="text-eyebrow uppercase tracking-widest text-gold/90 font-display text-[10px]">
                            {t(item.formatBadge)}
                          </span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 shrink-0 px-2 py-1 rounded-full border border-silver/20 bg-base/40">
                          <span className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-[10px]">
                            {t(item.formatBadge)}
                          </span>
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-h3 text-primary font-display text-balance leading-tight text-[1.375rem]">
                        {t(item.name)}
                      </h3>
                      <p className="text-body text-silver opacity-85 font-display italic">
                        {t(item.tagline)}
                      </p>
                    </div>

                    <dl className="flex flex-col gap-sm">
                      <div className="flex flex-col gap-1">
                        <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                          {locale === 'fr' ? 'Blocage résolu' : 'Blocker solved'}
                        </dt>
                        <dd className="text-body text-silver opacity-90 text-pretty">
                          {t(item.blocage)}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-1">
                        <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                          {locale === 'fr' ? 'Audience' : 'Audience'}
                        </dt>
                        <dd className="text-body text-silver opacity-80 text-pretty">
                          {t(item.audience)}
                        </dd>
                      </div>
                      <div className="grid grid-cols-2 gap-sm pt-sm border-t border-silver/10">
                        <div className="flex flex-col gap-1 min-w-0">
                          <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                            {locale === 'fr' ? 'Régulier' : 'Regular'}
                          </dt>
                          <dd className="text-sm text-silver/55 line-through tabular-nums">
                            {t(item.priceRegular)}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <dt className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px]">
                            {locale === 'fr' ? 'Lancement' : 'Launch'}
                          </dt>
                          <dd className="text-body text-gold font-display font-medium tabular-nums">
                            {t(item.priceLaunch)}
                          </dd>
                        </div>
                      </div>
                    </dl>

                    <span className="mt-auto inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-gold/90 font-display text-xs pt-sm border-t border-silver/10">
                      {t(item.ctaLabel)}
                      <ArrowRight
                        className="h-3.5 w-3.5 max-w-none shrink-0 transition-transform duration-base group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. MÉTHODE RISE™ — 4 piliers ────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.rise.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.rise.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.rise.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-85 text-pretty max-w-[62ch]">
                {t(copy.rise.sub)}
              </p>
            </div>

            <StaggerReveal
              as="ol"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md max-w-default mx-auto list-none"
              staggerMs={100}
              data-card-group="rise-piliers"
            >
              {copy.rise.pillars.map((pillar) => (
                <li
                  key={pillar.id}
                  className="flex flex-col gap-sm p-md h-full bg-elevated border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-gold/85 leading-none tracking-[-0.04em] text-[clamp(2.75rem,1.6rem+2.6vw,3.75rem)]"
                  >
                    {pillar.letter}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance leading-tight text-[1.25rem]">
                    <span className="text-gold/90 font-display">{t(pillar.name)}</span>
                    <span className="text-silver/40 px-1" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-primary">{t(pillar.title)}</span>
                  </h3>
                  <p className="text-body text-silver opacity-85 text-pretty">{t(pillar.body)}</p>
                  <p className="mt-auto pt-sm border-t border-silver/10 text-eyebrow uppercase tracking-widest text-silver/85 font-display text-[10px]">
                    {t(pillar.sourceBootcamp)}
                  </p>
                </li>
              ))}
            </StaggerReveal>

            <p className="mt-xl max-w-[72ch] mx-auto text-center text-sm text-silver opacity-70 italic text-pretty">
              {t(copy.rise.note)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 6. CRÉDIBILITÉ JONAS ────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.credibilite.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="06" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.credibilite.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.credibilite.title)}</MaskRevealHeading>
            </div>

            {/* Stats bullet */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-md max-w-default mx-auto mb-xl">
              {copy.credibilite.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center text-center gap-1 p-md bg-base border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <dt className="sr-only">{t(stat.label)}</dt>
                  <dd className="flex flex-col items-center gap-1">
                    <span className="font-display text-gold/90 tracking-[-0.04em] text-[clamp(2.5rem,1.5rem+2.8vw,3.75rem)] leading-none tabular-nums">
                      {t(stat.value)}
                    </span>
                    <span className="text-body text-silver opacity-85 text-pretty">
                      {t(stat.label)}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            {/* Credentials */}
            <ul className="flex flex-wrap items-center justify-center gap-x-md gap-y-sm max-w-content mx-auto list-none mb-xl">
              {copy.credibilite.credentials.map((cred) => (
                <li
                  key={`cred-${t(cred).slice(0, 24)}`}
                  className="inline-flex items-center gap-2 text-body text-silver opacity-85 text-pretty"
                >
                  <Check className="h-4 w-4 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
                  <span>{t(cred)}</span>
                </li>
              ))}
            </ul>

            {/* Citation */}
            <figure className="max-w-content mx-auto flex flex-col items-center text-center gap-sm">
              <span aria-hidden="true" className="text-gold/40 font-display text-4xl leading-none">
                “
              </span>
              <blockquote className="text-body-lg text-primary font-display italic text-pretty leading-[1.4]">
                {t(copy.credibilite.quote)}
              </blockquote>
              <figcaption className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                {t(copy.credibilite.quoteAttribution)}
              </figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 7. CTA FINAL ────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.finalCta.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="07" position="right" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(copy.finalCta.sub)}
            </p>

            {/* 3 primary CTAs — proéminents (anti-cannibalisation : seuls primary sur cette page) */}
            <ul className="mt-md flex flex-col sm:flex-row gap-sm flex-wrap items-center justify-center list-none">
              {copy.finalCta.ctas.map((cta) => (
                <li key={cta.id}>
                  <CTAPill variant="gold-primary" href={localizedHref(cta.href, cta.hrefEn)}>
                    {t(cta.label)}
                    <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                  </CTAPill>
                </li>
              ))}
            </ul>

            {/* Secondary CTA — visuellement subordonné (anti-cannibalisation §5) */}
            <div className="mt-xl pt-md border-t border-silver/15 max-w-[58ch] w-full flex flex-col items-center gap-sm">
              <span className="text-eyebrow uppercase tracking-widest text-silver/55 font-display text-[10px]">
                {t(copy.finalCta.secondaryEyebrow)}
              </span>
              <p className="text-sm text-silver opacity-75 text-pretty">
                {t(copy.finalCta.secondaryNote)}
              </p>
              <CTAPill variant="silver-outline" href={ROUTES.contact[locale]}>
                {t(copy.finalCta.secondaryLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
