import {
  AlertCircle,
  ArrowRight,
  Calendar,
  Check,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { clientConfig } from '@/config/clientConfig';
import { ROUTES } from '@/config/routes';
import { theActivationCopy } from '@/data/copy/bootcamps/theActivation';
import { submitWaitlist } from '@/lib/api/waitlist';
import { useT } from '@/lib/i18n/useT';
import { FaqSchemaScript, SchemaScript } from '@/lib/seo/SchemaScript';
import { VslPlaceholderSection } from '../VslPlaceholderSection';
import { BonusList } from './BonusList';
import { BootcampHeroPattern } from './BootcampHeroPattern';
import { BootcampStickyBar } from './BootcampStickyBar';
import { BootcampThemeProvider } from './BootcampThemeProvider';
import { DeliverablesTable } from './DeliverablesTable';
import { MirrorChecklistSection } from './MirrorChecklistSection';
import { TrilogieFooterCrossLink } from './TrilogieFooterCrossLink';
import { ValuePriceTable } from './ValuePriceTable';

const SECTION_ID_CTA = 'activation-final-cta';
const SECTION_ID_VSL = 'activation-vsl';

/**
 * TheActivationPage — sous-page bootcamp #3 de la Trilogie.
 *
 * Architecture 20 sections (verbatim PDF Trilogie The Activation™) :
 *   1. Sticky bar (BootcampStickyBar)
 *   2. Hero (FiligraneNumber 01)
 *   3. VSL placeholder
 *   4. Transition post-VSL
 *   5. Miroir 10 cases (MirrorChecklistSection)
 *   6. Vrai diagnostic — analogie OS + 3 axes
 *   7. Sans action (12 mois)
 *   8. Solution — 3 axes fondateurs IOS / ESD / ECO
 *   9. 3 jours détaillés — CDT™ explicite Jour 2
 *  10. 12 livrables (DeliverablesTable)
 *  11. 6 bonus (BonusList)
 *  12. Valeur & prix (ValuePriceTable)
 *  13. Preuve & crédibilité Jonas
 *  14. Objections (5)
 *  15. Garantie 100%
 *  16. Urgence & rareté
 *  17. FAQ (6)
 *  18. Témoignages — placeholder honnête
 *  19. CTA final — 2 colonnes Sans/Avec + récap + email capture
 *  20. Trilogie footer cross-link (TrilogieFooterCrossLink currentSlug='the-activation')
 *
 * Pré-lancement contracts (cf. CLAUDE.md projet) :
 *   - Stripe non câblé → CTAs primaires "Sois notifié ..."
 *   - Mini-form email capture honnête (success state local, backend GHL pending)
 *   - Témoignages = placeholder honnête (pas de fake quotes)
 *   - VSL = placeholder élégant (VslPlaceholderSection)
 *   - Dates cohortes = "Annonce prochaine"
 *
 * Style : Platinum Executive Authority. Silver primary + gold rare. Aucune
 * dérive "tactical américain". Tonal Dan Martell premium. FiligraneNumber
 * alternance left/right sur sections clés.
 *
 * Anti-cannibalisation : CTAs "Sois notifié" / "Réserver ma place" autorisés
 * UNIQUEMENT ici. Aucun "Prendre rendez-vous" comme CTA principal sur cette
 * sous-page bootcamp.
 *
 * Schema.org : SchemaScript(WebPage + Event + breadcrumb) + FaqSchemaScript.
 * Event @id stable via slug 'the-activation'. offerUrl UNSET pre-launch
 * (Stripe pending) — price + priceCurrency CAD affichés.
 */
export function TheActivationPage() {
  const { t, locale } = useT();
  const copy = theActivationCopy;

  const handleScrollToCta = () => {
    if (typeof window === 'undefined') return;
    const target = document.getElementById(SECTION_ID_CTA);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ── Schema.org : WebPage + Event + FAQPage ───────────────────────────────
  const eventName = `The Activation™ — ${t({
    fr: 'Bootcamp 3 jours',
    en: '3-day bootcamp'
  })}`;
  const eventDescription = t(copy.meta.description);
  const webPageName = t(copy.meta.title);
  const webPageDescription = t(copy.meta.description);

  const homeName = t({ fr: 'Accueil', en: 'Home' });
  const eventsName = t({ fr: 'Événements', en: 'Events' });
  const baseUrl = clientConfig.site.productionUrl;

  const breadcrumbTrail = [
    { name: homeName, url: `${baseUrl}${ROUTES.home[locale]}` },
    { name: eventsName, url: `${baseUrl}${ROUTES.evenements[locale]}` },
    {
      name: 'The Activation™',
      url: `${baseUrl}${ROUTES['evenements-bootcamp-the-activation'][locale]}`
    }
  ];

  const faqItems = copy.faq.items.map((item) => ({
    question: t(item.q),
    answer: t(item.a)
  }));

  return (
    <BootcampThemeProvider variant="activation">
      <SchemaScript
        locale={locale}
        id="schema-org-route-the-activation"
        options={{
          webPage: {
            routeKey: 'evenements-bootcamp-the-activation',
            name: webPageName,
            description: webPageDescription,
            breadcrumbTrail
          },
          events: [
            {
              slug: 'the-activation',
              routeKeyForId: 'evenements-bootcamp-the-activation',
              name: eventName,
              description: eventDescription,
              // ISO placeholder — annonce prochaine. Schema.org Event requires
              // startDate. Sentinelle 1 an pour validité ; sera swap dès Jonas confirme.
              startDate: '2027-01-01T09:00:00-05:00',
              status: 'EventScheduled',
              location: {
                mode: 'offline',
                name: t({
                  fr: 'Lieu confidentiel premium',
                  en: 'Confidential premium venue'
                }),
                city: 'Montréal',
                region: 'QC',
                country: 'CA'
              },
              // Pre-launch : price disclosed in UI + Schema (PreOrder availability
              // auto-resolved by builder when offerUrl absent).
              price: '1497',
              priceCurrency: 'CAD'
            }
          ],
          // Course mirrors Event for Google's Course rich-result lane.
          courses: [
            {
              slug: 'the-activation',
              routeKey: 'evenements-bootcamp-the-activation',
              name: 'The Activation™ — Bootcamp performance humaine',
              description: eventDescription,
              educationalLevel: 'Intermediate',
              about:
                locale === 'fr'
                  ? 'Engineering de performance humaine'
                  : 'Human performance engineering',
              instance: {
                mode: 'Onsite',
                workload: 'P3D',
                eventSlug: 'the-activation',
                eventRouteKey: 'evenements-bootcamp-the-activation'
              },
              offer: {
                price: '1497',
                priceCurrency: 'CAD',
                category: 'Bootcamp'
              }
            }
          ]
        }}
      />
      <FaqSchemaScript
        locale={locale}
        items={faqItems}
        routeKey="evenements-bootcamp-the-activation"
      />

      {/* ─── 1. STICKY BAR ──────────────────────────────────────────────── */}
      <BootcampStickyBar
        places={20}
        status={t(copy.stickyBar.status)}
        priceLaunch={t(copy.stickyBar.priceLaunch)}
        priceRegular={t(copy.stickyBar.priceRegular)}
        ctaLabel={t(copy.stickyBar.cta)}
        onCtaClick={handleScrollToCta}
        ctaAriaLabel={t(copy.stickyBar.cta)}
        placesLabel={t({ fr: 'Places restantes', en: 'Spots remaining' })}
        variant="activation"
      />

      {/* ─── 2. HERO ────────────────────────────────────────────────────── */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[72vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <BootcampHeroPattern variant="activation" />
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            priority="lcp"
            className="font-normal tracking-[-0.04em] text-[clamp(2.25rem,1.4rem+3vw,4.5rem)] leading-[1.05] max-w-[26ch] bg-clip-text text-transparent bg-[linear-gradient(110deg,oklch(0.96_0.02_240)_0%,oklch(0.82_0.06_220)_45%,oklch(0.94_0.03_260)_100%)]"
          >
            <span>{t(copy.hero.h1)}</span>
          </MaskRevealHeading>

          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch] mt-sm">
            {t(copy.hero.sub)}
          </p>

          <p className="mt-sm text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
            {t(copy.hero.microProof)}
          </p>

          <dl className="flex flex-col sm:flex-row gap-md mt-md">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
              <dt className="sr-only">{t({ fr: 'Dates', en: 'Dates' })}</dt>
              <dd className="text-body text-primary font-display font-medium">
                {t(copy.hero.dates)}
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
              <dt className="sr-only">{t({ fr: 'Lieu', en: 'Location' })}</dt>
              <dd className="text-body text-primary font-display font-medium">
                {t(copy.hero.location)}
              </dd>
            </div>
          </dl>

          <div className="mt-md flex flex-col sm:flex-row gap-sm">
            <CTAPill variant="gold-primary" onClick={handleScrollToCta}>
              {t({ fr: 'Sois notifié des dates', en: 'Be notified of dates' })}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
            <CTAPill
              variant="silver-secondary"
              onClick={() => {
                if (typeof window === 'undefined') return;
                const target = document.getElementById(SECTION_ID_VSL);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {t({ fr: 'Regarder la vidéo · 13 min', en: 'Watch the video · 13 min' })}
            </CTAPill>
          </div>
        </div>
      </section>

      {/* ─── 3. VSL PLACEHOLDER ────────────────────────────────────────── */}
      <VslPlaceholderSection id={SECTION_ID_VSL} />

      {/* ─── 4. TRANSITION post-VSL ─────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t({ fr: 'Transition post-vidéo', en: 'Post-video transition' })}
          className="relative py-xl bg-section-elevated border-y border-silver/10"
        >
          <div className="relative max-w-content mx-auto px-md text-center">
            <p className="text-body-lg text-silver opacity-90 text-pretty italic max-w-[60ch] mx-auto leading-relaxed">
              {t(copy.postVslTransition.body)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. MIROIR 10 cases ─────────────────────────────────────────── */}
      <MirrorChecklistSection
        eyebrow={t(copy.mirror.eyebrow)}
        headline={t(copy.mirror.headline)}
        items={copy.mirror.items.map((item) => t(item))}
        transitionPhrase={t(copy.mirror.transitionPhrase)}
      />

      {/* ─── 6. VRAI DIAGNOSTIC — analogie OS + 3 axes ──────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.diagnostic.eyebrow)}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.diagnostic.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.diagnostic.headline)}</MaskRevealHeading>
            </div>

            <div className="max-w-[65ch] mx-auto mb-xl">
              {t(copy.diagnostic.body)
                .split('\n\n')
                .map((para) => (
                  <p
                    key={`diag-${para.slice(0, 40)}`}
                    className="text-body-lg text-silver opacity-85 text-pretty leading-relaxed mb-md last:mb-0"
                  >
                    {para}
                  </p>
                ))}
            </div>

            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-default mx-auto"
              staggerMs={100}
              data-card-group="diagnostic-axes"
            >
              {copy.diagnostic.axes.map((axis) => (
                <article
                  key={axis.id}
                  className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gold/25 bg-gold/5 text-gold/90"
                  >
                    <X className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance text-[1.125rem] leading-tight">
                    {t(axis.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty leading-relaxed">
                    {t(axis.body)}
                  </p>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 7. SANS ACTION (12 mois) ────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.withoutAction.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.withoutAction.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.withoutAction.headline)}</MaskRevealHeading>
            </div>

            <StaggerReveal
              as="ul"
              className="grid grid-cols-1 md:grid-cols-2 gap-sm max-w-default mx-auto list-none"
              staggerMs={70}
              data-card-group="without-action"
            >
              {copy.withoutAction.items.map((item) => (
                <li
                  key={`wa-${t(item).slice(0, 40)}`}
                  className="flex items-start gap-sm p-md bg-base border-l-2 border-silver/30 rounded-r-lg shadow-haptic-card"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md border border-silver/30 bg-silver/5 text-silver/70"
                  >
                    <X className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                  </span>
                  <p className="text-body text-silver opacity-85 text-pretty min-w-0 leading-relaxed">
                    {t(item)}
                  </p>
                </li>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 8. SOLUTION — 3 axes fondateurs IOS / ESD / ECO ────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.solution.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.solution.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.solution.headline)}</MaskRevealHeading>
            </div>

            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-default mx-auto"
              staggerMs={120}
              data-card-group="solution-pillars"
            >
              {copy.solution.pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  className="group flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card hover:border-gold/30 transition-colors duration-base"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs tabular-nums">
                      {pillar.code}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gold/25 bg-gold/5 text-gold/90"
                    >
                      <Sparkles className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="text-h3 text-primary font-display text-balance text-[1.125rem] leading-tight">
                    {t(pillar.title)}
                  </h3>
                  <blockquote className="text-body text-silver opacity-90 text-pretty italic border-l-2 border-gold/30 pl-sm leading-relaxed">
                    “{t(pillar.quote)}”
                  </blockquote>
                  <p className="text-body text-silver opacity-80 text-pretty leading-relaxed">
                    {t(pillar.body)}
                  </p>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 9. PROGRAMME 3 JOURS — CDT™ explicite Jour 2 ───────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.programme.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.programme.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.programme.headline)}</MaskRevealHeading>
            </div>

            <ol className="max-w-[80ch] mx-auto relative border-l border-gold/25 pl-md flex flex-col gap-lg list-none">
              {copy.programme.days.map((day, idx) => (
                <li key={day.id} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[calc(0.75rem+1px)] top-1 h-3 w-3 rounded-full bg-gold/80 ring-4 ring-base"
                  />
                  <article className="flex flex-col gap-sm">
                    <div className="flex flex-col gap-1">
                      <span className="text-eyebrow uppercase tracking-widest text-gold/85 font-display text-xs">
                        {t(day.label)} · {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-h3 text-primary font-display text-balance text-[1.25rem] leading-tight">
                        {t(day.codename)}
                      </h3>
                      {'note' in day && day.note ? (
                        <p className="mt-1 text-sm text-gold/80 italic text-pretty max-w-[60ch] leading-relaxed">
                          {t(day.note)}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-sm">
                      <div className="flex flex-col gap-2">
                        <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                          {t({ fr: 'Modules', en: 'Modules' })}
                        </span>
                        <ul className="flex flex-col gap-1.5 list-none">
                          {day.modules.map((mod) => (
                            <li
                              key={`${day.id}-mod-${t(mod).slice(0, 32)}`}
                              className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty"
                            >
                              <span
                                aria-hidden="true"
                                className="shrink-0 mt-2 h-1 w-1 rounded-full bg-gold/70"
                              />
                              <span>{t(mod)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                          {t({ fr: 'Construit', en: 'Built' })}
                        </span>
                        <ul className="flex flex-col gap-1.5 list-none">
                          {day.deliverables.map((del) => (
                            <li
                              key={`${day.id}-del-${t(del).slice(0, 32)}`}
                              className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty"
                            >
                              <Check
                                className="h-3.5 w-3.5 max-w-none shrink-0 mt-1 text-gold/80"
                                aria-hidden="true"
                              />
                              <span>{t(del)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 10. 12 LIVRABLES ──────────────────────────────────────────── */}
      <DeliverablesTable
        eyebrow={t(copy.deliverables.eyebrow)}
        headline={t(copy.deliverables.headline)}
        subtitle={t(copy.deliverables.subtitle)}
        items={copy.deliverables.rows.map((row) => ({
          n: row.n,
          name: t(row.name),
          description: t(row.description)
        }))}
        columnNumberLabel={t(copy.deliverables.columnNumberLabel)}
        columnNameLabel={t(copy.deliverables.columnNameLabel)}
        columnDescriptionLabel={t(copy.deliverables.columnDescriptionLabel)}
      />

      {/* ─── 11. BONUS ─────────────────────────────────────────────────── */}
      <BonusList
        headline={t(copy.bonus.headline)}
        items={copy.bonus.items.map((item) => ({
          name: t(item.name),
          description: t(item.description),
          value: t(item.value)
        }))}
        valueLabel={t(copy.bonus.valueLabel)}
      />

      {/* ─── 12. VALEUR & PRIX ────────────────────────────────────────── */}
      <ValuePriceTable
        eyebrow={t(copy.valuePrice.eyebrow)}
        headline={t(copy.valuePrice.headline)}
        valueRows={copy.valuePrice.valueRows.map((row) => ({
          label: t(row.label),
          value: t(row.value)
        }))}
        valueTotal={t(copy.valuePrice.valueTotal)}
        valueTotalLabel={t(copy.valuePrice.valueTotalLabel)}
        priceLaunch={t(copy.valuePrice.priceLaunch)}
        priceLaunchLabel={t(copy.valuePrice.priceLaunchLabel)}
        priceRegular={t(copy.valuePrice.priceRegular)}
        priceRegularLabel={t(copy.valuePrice.priceRegularLabel)}
        paymentOptions={copy.valuePrice.paymentOptions.map((opt) => t(opt))}
        ctaPrimaryLabel={t(copy.valuePrice.ctaPrimaryLabel)}
        onCtaPrimaryClick={handleScrollToCta}
        ctaSecondaryLabel={t(copy.valuePrice.ctaSecondaryLabel)}
        onCtaSecondaryClick={() => {
          if (typeof window === 'undefined') return;
          window.location.assign(ROUTES.contact[locale]);
        }}
        preLaunchNote={t(copy.valuePrice.preLaunchNote)}
        variant="activation"
      />

      {/* ─── 13. PREUVE & CRÉDIBILITÉ JONAS ────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.proof.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="06" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.proof.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.proof.headline)}</MaskRevealHeading>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-md max-w-[64rem] mx-auto mb-xl">
              {copy.proof.stats.map((stat) => (
                <div
                  key={`stat-${t(stat.value)}-${t(stat.label).slice(0, 24)}`}
                  className="flex flex-col items-center text-center gap-1 p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px] order-2">
                    {t(stat.label)}
                  </dt>
                  <dd className="text-[clamp(1.75rem,1rem+2vw,2.5rem)] text-gold font-display font-normal tracking-[-0.04em] tabular-nums leading-none order-1">
                    {t(stat.value)}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="max-w-[60ch] mx-auto flex flex-col gap-sm list-none mb-xl">
              {copy.proof.credentials.map((cred) => (
                <li
                  key={`cred-${t(cred).slice(0, 40)}`}
                  className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty"
                >
                  <Check
                    className="h-4 w-4 max-w-none shrink-0 mt-1 text-gold/80"
                    aria-hidden="true"
                  />
                  <span>{t(cred)}</span>
                </li>
              ))}
            </ul>

            <figure className="max-w-[64rem] mx-auto p-lg bg-elevated border border-gold/25 rounded-lg shadow-haptic-focal">
              <Quote
                className="h-6 w-6 max-w-none shrink-0 text-gold/80 mb-sm"
                aria-hidden="true"
              />
              <blockquote className="text-body-lg text-primary opacity-95 font-display text-pretty italic leading-relaxed">
                “{t(copy.proof.quote)}”
              </blockquote>
              <figcaption className="mt-md text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                — {t(copy.proof.quoteAttribution)}
              </figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 14. OBJECTIONS ─────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.objections.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="07" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.objections.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.objections.headline)}</MaskRevealHeading>
            </div>

            <ul className="max-w-[72ch] mx-auto flex flex-col gap-md list-none">
              {copy.objections.items.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <p className="flex items-start gap-2 text-h3 text-primary font-display text-balance text-[1.0625rem] leading-snug">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-silver/30 bg-silver/5 text-silver/80 mt-0.5"
                    >
                      <X className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                    </span>
                    <span>“{t(item.objection)}”</span>
                  </p>
                  <p className="text-body text-silver opacity-85 text-pretty leading-relaxed pl-8">
                    {t(item.response)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 15. GARANTIE 100% ──────────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.guarantee.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="08" position="left" />
          <div className="relative max-w-content mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl">
              <Eyebrow>{t(copy.guarantee.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.guarantee.headline)}</MaskRevealHeading>
            </div>

            <article className="max-w-[60ch] mx-auto p-lg bg-elevated border border-gold/25 rounded-lg shadow-haptic-focal flex flex-col gap-md">
              <span
                aria-hidden="true"
                className="self-start inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold/90"
              >
                <ShieldCheck className="h-6 w-6 max-w-none shrink-0" aria-hidden="true" />
              </span>
              {t(copy.guarantee.body)
                .split('\n\n')
                .map((para) => (
                  <p
                    key={`guarantee-${para.slice(0, 40)}`}
                    className="text-body text-silver opacity-90 text-pretty leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 16. URGENCE & RARETÉ ──────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.urgency.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="09" position="right" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(copy.urgency.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.urgency.headline)}</MaskRevealHeading>

            <div className="mt-md inline-flex items-center gap-3 px-md py-sm rounded-pill border border-gold/40 bg-base">
              <Users className="h-5 w-5 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
              <span className="sr-only">{t(copy.urgency.spotsLabel)}</span>
              <span className="text-body text-primary font-display font-medium tabular-nums">
                {t(copy.urgency.spotsValue)}
              </span>
            </div>

            <div className="max-w-[60ch] text-left mt-md">
              {t(copy.urgency.body)
                .split('\n\n')
                .map((para) => (
                  <p
                    key={`urg-${para.slice(0, 40)}`}
                    className="text-body text-silver opacity-85 text-pretty leading-relaxed mb-md last:mb-0"
                  >
                    {para}
                  </p>
                ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 17. FAQ ───────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.faq.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="10" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.faq.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.faq.headline)}</MaskRevealHeading>
            </div>
            <div className="max-w-[80ch] mx-auto flex flex-col gap-2">
              {copy.faq.items.map((item) => (
                <details
                  key={item.id}
                  className="group bg-elevated border border-silver/15 rounded-lg overflow-hidden"
                >
                  <summary className="cursor-pointer list-none p-md flex items-center justify-between gap-md text-body text-primary font-display font-medium hover:bg-base/30 transition-colors duration-base">
                    <span className="text-pretty">{t(item.q)}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-gold/70 text-xl leading-none transition-transform duration-base group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-md pb-md text-body text-silver opacity-85 text-pretty leading-relaxed">
                    {t(item.a)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 18. TÉMOIGNAGES — placeholder honnête ─────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.testimonials.eyebrow)}
          className="relative py-xl bg-section-elevated border-y border-silver/10"
        >
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-sm">
            <Eyebrow>{t(copy.testimonials.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.testimonials.headline)}</MaskRevealHeading>
            <p className="mt-sm text-body text-silver opacity-80 text-pretty italic max-w-[58ch] mx-auto leading-relaxed">
              {t(copy.testimonials.pendingNote)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 19. CTA FINAL — 2 colonnes Sans/Avec + récap + email capture ─── */}
      <FinalCtaActivation copy={copy} sectionId={SECTION_ID_CTA} />

      {/* ─── 20. TRILOGIE FOOTER CROSS-LINK ────────────────────────────── */}
      <TrilogieFooterCrossLink
        currentSlug="the-activation"
        eyebrow={t(copy.trilogieFooter.eyebrow)}
        headline={t(copy.trilogieFooter.headline)}
        subtitle={t(copy.trilogieFooter.subtitle)}
        {...(locale === 'en'
          ? {
              labels: {
                blocage: 'Block solved',
                audience: 'Audience',
                priceLaunch: 'Launch',
                priceRegular: 'Regular',
                places: 'Spots',
                format: 'Format',
                current: 'You are here',
                cta: 'Discover'
              }
            }
          : {})}
      />
    </BootcampThemeProvider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 19 — Final CTA composite (Sans/Avec + récap + email capture)
// Kept as a sub-component to isolate the local form state.
// ─────────────────────────────────────────────────────────────────────────────

interface FinalCtaActivationProps {
  readonly copy: typeof theActivationCopy;
  readonly sectionId: string;
}

function FinalCtaActivation({ copy, sectionId }: FinalCtaActivationProps) {
  const { t, locale } = useT();
  const notifyEmailId = useId();
  const honeypotId = useId();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const handleNotifySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || state === 'submitting') return;
    if (honeypot) return; // bot — silent drop
    setState('submitting');
    setError(null);
    const route =
      typeof window !== 'undefined'
        ? window.location.pathname
        : '/evenements/bootcamps/the-activation';
    const result = await submitWaitlist({
      email,
      route,
      source: 'final',
      locale,
      consent: true,
      context: 'the-activation'
    });
    if (result.ok) {
      setState('success');
    } else {
      setState('error');
      setError(result.error ?? null);
    }
  };

  const fieldBase =
    'w-full px-md py-sm rounded-md bg-base border border-silver/15 text-body text-primary font-display placeholder:text-silver/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed normal-case tracking-normal';

  return (
    <ScrollReveal>
      <section
        id={sectionId}
        aria-label={t(copy.finalCta.eyebrow)}
        className="relative scroll-mt-[80px] py-2xl bg-section-base"
      >
        <FiligraneNumber number="11" position="right" />
        <div className="relative max-w-default mx-auto px-md">
          <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
            <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.finalCta.headline)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[60ch]">
              {t(copy.finalCta.sub)}
            </p>
          </div>

          {/* Sans / Avec — 2 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-default mx-auto mb-xl">
            <article className="flex flex-col gap-sm p-md bg-elevated border-l-2 border-silver/25 rounded-r-lg shadow-haptic-card">
              <h3 className="text-h3 text-primary opacity-80 font-display text-balance text-[1.125rem]">
                {t(copy.finalCta.sans.title)}
              </h3>
              <ul className="flex flex-col gap-2 mt-sm list-none">
                {copy.finalCta.sans.items.map((item) => (
                  <li
                    key={`sans-${t(item).slice(0, 40)}`}
                    className="flex items-start gap-2 text-body text-silver opacity-80 text-pretty leading-relaxed"
                  >
                    <X
                      className="h-4 w-4 max-w-none shrink-0 mt-1 text-silver/75"
                      aria-hidden="true"
                    />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col gap-sm p-md bg-elevated border-l-2 border-gold/40 rounded-r-lg shadow-haptic-card">
              <h3 className="text-h3 text-primary font-display text-balance text-[1.125rem]">
                {t(copy.finalCta.avec.title)}
              </h3>
              <ul className="flex flex-col gap-2 mt-sm list-none">
                {copy.finalCta.avec.items.map((item) => (
                  <li
                    key={`avec-${t(item).slice(0, 40)}`}
                    className="flex items-start gap-2 text-body text-silver opacity-90 text-pretty leading-relaxed"
                  >
                    <Check
                      className="h-4 w-4 max-w-none shrink-0 mt-1 text-gold/80"
                      aria-hidden="true"
                    />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Récap court */}
          <dl className="flex flex-col sm:flex-row gap-md sm:gap-lg flex-wrap justify-center text-left max-w-default mx-auto mb-xl">
            <div className="flex flex-col gap-1">
              <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                {t(copy.finalCta.recap.title)}
              </dt>
              <dd className="text-body text-primary font-display font-medium">
                {t(copy.finalCta.recap.deliverablesLabel)} · {t(copy.finalCta.recap.bonusLabel)} ·{' '}
                {t(copy.finalCta.recap.guaranteeLabel)}
              </dd>
            </div>
          </dl>

          {/* Quote Jonas */}
          <figure className="max-w-[58ch] mx-auto text-center mb-xl">
            <Quote
              className="h-6 w-6 max-w-none shrink-0 text-gold/80 mx-auto mb-sm"
              aria-hidden="true"
            />
            <blockquote className="text-body-lg text-primary opacity-95 font-display text-pretty italic leading-relaxed">
              “{t(copy.finalCta.quote)}”
            </blockquote>
            <figcaption className="mt-sm text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
              — {t(copy.finalCta.quoteAttribution)}
            </figcaption>
          </figure>

          {/* Email capture honnête */}
          <form
            onSubmit={handleNotifySubmit}
            aria-label={t(copy.finalCta.ctaPrimaryLabel)}
            className="max-w-[44rem] mx-auto p-md rounded-lg border border-gold/25 bg-elevated shadow-haptic-card flex flex-col gap-sm"
          >
            <div className="flex items-start gap-sm">
              <AlertCircle
                className="h-5 w-5 max-w-none shrink-0 mt-0.5 text-gold/90"
                aria-hidden="true"
              />
              <p className="text-body text-primary opacity-90 text-pretty leading-relaxed">
                {t(copy.finalCta.ctaPrimaryLabel)}
              </p>
            </div>

            <label
              htmlFor={notifyEmailId}
              className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs mt-sm"
            >
              {t(copy.finalCta.notifyEmailLabel)}
            </label>

            {state === 'success' ? (
              <p
                role="status"
                aria-live="polite"
                className="text-body text-primary opacity-90 text-pretty"
              >
                {t(copy.finalCta.notifySuccessLabel)}
              </p>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row gap-sm">
                  <input
                    id={notifyEmailId}
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t(copy.finalCta.notifyEmailPlaceholder)}
                    className={`${fieldBase} flex-1`}
                  />
                  {/* Honeypot — hidden from humans + screen readers. */}
                  <input
                    id={honeypotId}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-px w-px overflow-hidden"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={state === 'submitting' || !email}
                    className="relative isolate shrink-0 inline-flex items-center justify-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span>{t(copy.finalCta.notifySubmitLabel)}</span>
                    <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                  </button>
                </div>
                {state === 'error' && error ? (
                  <p role="alert" className="text-sm text-gold/90 text-pretty">
                    {error}
                  </p>
                ) : null}
                <p className="text-sm text-silver/85 italic text-pretty">
                  {locale === 'fr'
                    ? 'En soumettant, tu acceptes d’être notifié (Loi 25).'
                    : 'By submitting, you agree to be notified (Quebec Law 25).'}
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </ScrollReveal>
  );
}
