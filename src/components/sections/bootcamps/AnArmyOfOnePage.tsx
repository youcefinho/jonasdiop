import {
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle2,
  Lock,
  Mail,
  PlayCircle,
  Quote,
  Sparkles,
  Star,
  X
} from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { BonusList } from '@/components/sections/bootcamps/BonusList';
import { BootcampStickyBar } from '@/components/sections/bootcamps/BootcampStickyBar';
import { DeliverablesTable } from '@/components/sections/bootcamps/DeliverablesTable';
import { MirrorChecklistSection } from '@/components/sections/bootcamps/MirrorChecklistSection';
import {
  TrilogieFooterCrossLink,
  type TrilogieSlug
} from '@/components/sections/bootcamps/TrilogieFooterCrossLink';
import { ValuePriceTable } from '@/components/sections/bootcamps/ValuePriceTable';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { anArmyOfOneCopy } from '@/data/copy/bootcamps/anArmyOfOne';
import { submitWaitlist, type WaitlistSource } from '@/lib/api/waitlist';
import { useT } from '@/lib/i18n/useT';
import { SchemaScript } from '@/lib/seo/SchemaScript';

const CURRENT_SLUG: TrilogieSlug = 'an-army-of-one';
const CAPTURE_ANCHOR_ID = 'aaoo-capture';
const FINAL_CTA_ANCHOR_ID = 'aaoo-final-cta';

/**
 * AnArmyOfOnePage — sous-page VSL longue /evenements/bootcamps/an-army-of-one.
 *
 * Compose les 17 sections du brief Trilogie en s'appuyant sur les shared
 * components dark luxe (BootcampStickyBar, MirrorChecklistSection,
 * DeliverablesTable, BonusList, ValuePriceTable, TrilogieFooterCrossLink).
 *
 * Mode pré-lancement strict :
 *  - Tous les CTAs Stripe = capture email visuelle (form disabled honnête)
 *  - Aucun témoignage inventé — placeholder "première édition en cours"
 *  - VSL = placeholder élégant carré 16:9
 *  - Compteur countdown = état désactivé sobre
 *
 * Anti-cannibalisation : CTAs "Sois notifié" / "Réserver ma place" autorisés
 * UNIQUEMENT sur cette sous-page (brief v3 §5).
 *
 * Schema.org : WebPage + Event (Schema.org Event sans offerUrl car non câblé)
 * + FAQPage + BreadcrumbList. @id stable via routeKey.
 */
export function AnArmyOfOnePage() {
  const { t, locale } = useT();
  const c = anArmyOfOneCopy;

  // ─── State : capture email mini-form (wired /api/waitlist) ───────────────
  const [captureEmail, setCaptureEmail] = useState('');
  const [captureState, setCaptureState] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );
  const [captureError, setCaptureError] = useState<string | null>(null);
  // Honeypot — silent field. Bots fill, humans don't.
  const [captureHoneypot, setCaptureHoneypot] = useState('');

  const submitCapture = async (source: WaitlistSource) => {
    if (!captureEmail || captureState === 'submitting') return;
    if (captureHoneypot) return; // bot detected — silently drop
    setCaptureState('submitting');
    setCaptureError(null);
    const route =
      typeof window !== 'undefined'
        ? window.location.pathname
        : '/evenements/bootcamps/an-army-of-one';
    const result = await submitWaitlist({
      email: captureEmail,
      route,
      source,
      locale,
      consent: true, // inline notice — implicit on submit, see notice below form
      context: 'an-army-of-one'
    });
    if (result.ok) {
      setCaptureState('success');
    } else {
      setCaptureState('error');
      setCaptureError(result.error ?? null);
    }
  };

  const handleHeroSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitCapture('hero');
  };

  const handleFinalSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitCapture('final');
  };

  const scrollToCapture = () => {
    if (typeof window === 'undefined') return;
    const target = document.getElementById(CAPTURE_ANCHOR_ID);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ─── Schema.org payload (Event + FAQ + WebPage + Breadcrumb) ─────────────
  const faqItems = c.faq.items.map((item) => ({
    question: t(item.q),
    answer: t(item.a)
  }));

  const breadcrumbTrail = [
    {
      name: locale === 'fr' ? 'Accueil' : 'Home',
      url: `https://jonasdiop.com${ROUTES.home[locale]}`
    },
    {
      name: locale === 'fr' ? 'Événements' : 'Events',
      url: `https://jonasdiop.com${ROUTES.evenements[locale]}`
    },
    {
      name: 'An Army of One™',
      url: `https://jonasdiop.com${ROUTES['evenements-bootcamp-an-army-of-one'][locale]}`
    }
  ];

  // ─── Translate sticky bar copy ───────────────────────────────────────────
  const sticky = {
    emoji: c.stickyBar.emoji,
    places: c.stickyBar.places,
    status: t(c.stickyBar.status),
    priceLaunch: t(c.stickyBar.priceLaunch),
    priceRegular: t(c.stickyBar.priceRegular),
    ctaLabel: t(c.stickyBar.ctaLabel),
    placesLabel: t(c.stickyBar.placesLabel)
  };

  // ─── Mirror items (verbatim PDF §5) ──────────────────────────────────────
  const mirrorItems = (t(c.mirror.items) ?? []) as readonly string[];

  // ─── Deliverables (translated rows) ──────────────────────────────────────
  const deliverableRows = c.deliverables.items.map((item) => ({
    n: item.n,
    name: t(item.name),
    description: t(item.description)
  }));

  // ─── Bonus items (translated) ────────────────────────────────────────────
  const bonusItems = c.bonus.items.map((item) => ({
    name: t(item.name),
    description: t(item.description),
    value: t(item.value)
  }));

  // ─── Value rows (translated) ─────────────────────────────────────────────
  const valueRows = c.valuePrice.valueRows.map((row) => ({
    label: t(row.label),
    value: t(row.value)
  }));

  const paymentOptions = (t(c.valuePrice.paymentOptions) ?? []) as readonly string[];
  const guaranteeHighlights = (t(c.guarantee.bodyHighlights) ?? []) as readonly string[];
  const credentials = (t(c.credibility.credentials) ?? []) as readonly string[];
  const recapItems = (t(c.finalCta.recapItems) ?? []) as readonly string[];
  const sansItems = (t(c.finalCta.sansColumn.items) ?? []) as readonly string[];
  const avecItems = (t(c.finalCta.avecColumn.items) ?? []) as readonly string[];

  return (
    <>
      {/* ─── SEO Schema graph — WebPage + Event + Course + FAQ + Breadcrumb ──
          Event + Course paired (same slug) so Google's Course rich-result can
          correlate price + dates via hasCourseInstance.instanceOf. Pre-launch
          state : prices disclosed, no offerUrl → availability auto-resolves
          to PreOrder inside the builders. */}
      <SchemaScript
        locale={locale}
        id="schema-org-bootcamp-aaoo"
        options={{
          webPage: {
            routeKey: 'evenements-bootcamp-an-army-of-one',
            name: t(c.hero.h1),
            description: t(c.meta.description),
            variant: 'WebPage',
            breadcrumbTrail
          },
          events: [
            {
              slug: 'an-army-of-one',
              routeKeyForId: 'evenements-bootcamp-an-army-of-one',
              name: 'An Army of One™ — Bootcamp 3 jours',
              description: t(c.hero.sub),
              // Pré-lancement : startDate placeholder TBD — Schema requires a date.
              // Sentinelle 6 mois à venir, statut PreOrder auto-résolu côté builder.
              startDate: '2027-03-15T09:00:00-05:00',
              endDate: '2027-03-17T18:00:00-05:00',
              location: {
                mode: 'mixed',
                name: "Montréal — lieu confirmé à l'inscription",
                city: 'Montréal',
                region: 'QC',
                country: 'CA',
                onlineUrl: 'https://jonasdiop.com/evenements/bootcamps/an-army-of-one'
              },
              status: 'EventScheduled',
              price: '997',
              priceCurrency: 'CAD'
            }
          ],
          courses: [
            {
              slug: 'an-army-of-one',
              routeKey: 'evenements-bootcamp-an-army-of-one',
              name: "An Army of One™ — Bootcamp système d'exécution",
              description: t(c.meta.description),
              educationalLevel: 'Intermediate',
              about:
                locale === 'fr'
                  ? "Système d'exécution entrepreneurial"
                  : 'Entrepreneurial execution system',
              instance: {
                mode: 'Blended',
                workload: 'P3D',
                eventSlug: 'an-army-of-one',
                eventRouteKey: 'evenements-bootcamp-an-army-of-one'
              },
              offer: {
                price: '997',
                priceCurrency: 'CAD',
                category: 'Bootcamp'
              }
            }
          ],
          faq: {
            items: faqItems,
            routeKey: 'evenements-bootcamp-an-army-of-one'
          }
        }}
      />

      {/* ─── 1. STICKY BAR ─────────────────────────────────────────────── */}
      <BootcampStickyBar
        emoji={sticky.emoji}
        places={sticky.places}
        status={sticky.status}
        priceLaunch={sticky.priceLaunch}
        priceRegular={sticky.priceRegular}
        ctaLabel={sticky.ctaLabel}
        onCtaClick={scrollToCapture}
        ctaAriaLabel={sticky.ctaLabel}
        placesLabel={sticky.placesLabel}
      />

      {/* ─── 2. HERO ───────────────────────────────────────────────────── */}
      <section
        aria-label={t(c.hero.eyebrow)}
        className="relative min-h-[78vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(c.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            priority="lcp"
            className="font-normal tracking-[-0.04em] text-[clamp(2.5rem,1.4rem+3.2vw,4.75rem)] leading-[1.04] max-w-[24ch]"
          >
            <span className="text-shimmer">{t(c.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-90 text-pretty max-w-[58ch] leading-relaxed">
            {t(c.hero.sub)}
          </p>

          {/* Micro-proof capture email — hero */}
          <form
            onSubmit={handleHeroSubmit}
            className="mt-md w-full max-w-[34rem] flex flex-col gap-2"
          >
            <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
              {t(c.hero.microProofLabel)}
            </span>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-stretch">
              <label htmlFor="aaoo-hero-email" className="sr-only">
                {t(c.hero.emailPlaceholder)}
              </label>
              <div className="relative flex-1 min-w-0">
                <Mail
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 max-w-none shrink-0 text-silver/60"
                  aria-hidden="true"
                />
                <input
                  id="aaoo-hero-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t(c.hero.emailPlaceholder)}
                  value={captureEmail}
                  onChange={(event) => setCaptureEmail(event.target.value)}
                  className="w-full h-12 pl-10 pr-3 rounded-lg bg-elevated border border-silver/20 text-body text-primary placeholder:text-silver/70 font-display focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/15 transition-colors duration-base"
                  disabled={captureState === 'success' || captureState === 'submitting'}
                />
              </div>
              {/* Honeypot — hidden from humans + screen readers. Bots fill it. */}
              <input
                id="aaoo-hero-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
                value={captureHoneypot}
                onChange={(e) => setCaptureHoneypot(e.target.value)}
              />
              <button
                type="submit"
                disabled={captureState === 'success' || captureState === 'submitting'}
                className="shrink-0 inline-flex items-center justify-center gap-2 h-12 rounded-lg px-md text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {captureState === 'success' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                    <span>{locale === 'fr' ? 'Inscrit' : 'Subscribed'}</span>
                  </>
                ) : (
                  <>
                    <span>{t(c.hero.submitLabel)}</span>
                    <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
            {captureState === 'error' && captureError ? (
              <p role="alert" className="text-sm text-gold/90 text-pretty">
                {captureError}
              </p>
            ) : null}
            <p className="text-sm text-silver/60 italic text-pretty">
              {t(c.hero.pendingNote)}
              {' · '}
              {locale === 'fr'
                ? 'En soumettant, tu acceptes d’être notifié (Loi 25).'
                : 'By submitting, you agree to be notified (Quebec Law 25).'}
            </p>
          </form>
        </div>
      </section>

      {/* ─── 3. VSL PLACEHOLDER ────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(c.vsl.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
            <Eyebrow>{t(c.vsl.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2" className="max-w-[28ch]">
              {t(c.vsl.title)}
            </MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(c.vsl.sub)}
            </p>

            {/* Placeholder vidéo élégant 16:9 — dark luxe, aucun cheap thumbnail */}
            <figure className="mt-md w-full max-w-[56rem] mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-silver/20 bg-elevated shadow-haptic-focal">
                {/* Layered ambient gradient — pas un faux thumb, pas un play btn cliquable */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,oklch(0.74_0.085_75/0.18)_0%,transparent_55%),radial-gradient(circle_at_50%_82%,oklch(0.27_0.005_80)_0%,oklch(0.16_0.005_80)_70%)]"
                />
                <div className="relative h-full w-full flex flex-col items-center justify-center gap-md px-md text-center">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/35 bg-gold/8 shadow-haptic-focal"
                  >
                    <PlayCircle className="h-8 w-8 max-w-none shrink-0 text-gold/90" />
                  </span>
                  <p className="text-body text-primary font-display font-medium text-balance max-w-[34ch]">
                    {t(c.vsl.placeholderLabel)}
                  </p>
                  <p className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                    {t(c.vsl.durationLabel)}
                  </p>
                </div>
              </div>
              <figcaption className="sr-only">{t(c.vsl.placeholderLabel)}</figcaption>
            </figure>

            {/* CTA sous vidéo — fonctionnel : scroll vers capture email pré-lancement */}
            <div className="mt-md flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={scrollToCapture}
                aria-label={
                  locale === 'fr'
                    ? `${t(c.vsl.ctaLabel)} — défilement vers le formulaire d'inscription`
                    : `${t(c.vsl.ctaLabel)} — scroll to signup form`
                }
                className="inline-flex items-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-colors duration-base bg-transparent border border-silver/40 text-silver hover:border-silver focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-silver"
              >
                <Lock className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                <span>{t(c.vsl.ctaLabel)}</span>
              </button>
              <p className="text-sm text-silver/80 italic text-pretty max-w-[48ch]">
                {t(c.vsl.ctaDisabledNote)}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 4. APRÈS LA VSL — transition courte ──────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={locale === 'fr' ? 'Transition' : 'Transition'}
          className="relative py-xl bg-section-base"
        >
          <div className="relative max-w-content mx-auto px-md text-center">
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch] mx-auto leading-relaxed">
              {t(c.transition.body)}
            </p>
            <div className="mt-md flex justify-center">
              <ArrowDown className="h-5 w-5 max-w-none shrink-0 text-gold/70" aria-hidden="true" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. MIROIR — 10 cases ☑ (shared component) ─────────────────── */}
      <MirrorChecklistSection
        eyebrow={t(c.mirror.eyebrow)}
        headline={t(c.mirror.headline)}
        items={mirrorItems}
        transitionPhrase={t(c.mirror.transitionPhrase)}
      />

      {/* ─── 6. SANS ACTION (dans 6 mois) ──────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(c.sansAction.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-content mx-auto px-md flex flex-col gap-md">
            <Eyebrow>{t(c.sansAction.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(c.sansAction.headline)}</MaskRevealHeading>

            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[60ch] leading-relaxed">
              {t(c.sansAction.body)}
            </p>

            <figure className="mt-md max-w-[48rem] border-l-2 border-gold/40 pl-md py-2">
              <Quote className="h-5 w-5 max-w-none shrink-0 text-gold/60 mb-2" aria-hidden="true" />
              <blockquote className="text-[clamp(1.5rem,1rem+1.2vw,2.25rem)] text-primary font-display tracking-[-0.02em] leading-[1.25] text-balance">
                {t(c.sansAction.pullQuote)}
              </blockquote>
            </figure>

            <p className="mt-md text-body-lg text-primary opacity-95 text-pretty max-w-[58ch] font-display leading-relaxed">
              {t(c.sansAction.conclusion)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 7. SOLUTION — 3 jours détaillés ───────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(c.solution.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(c.solution.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(c.solution.headline)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
                {t(c.solution.sub)}
              </p>
            </div>

            <ol className="max-w-[80rem] mx-auto flex flex-col gap-md list-none">
              {c.solution.days.map((day, idx) => {
                const modules = (t(day.modules) ?? []) as readonly string[];
                return (
                  <li key={day.id} className="relative">
                    <article className="flex flex-col gap-md p-md sm:p-lg bg-base border border-silver/15 rounded-lg shadow-haptic-card">
                      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-sm border-b border-silver/10">
                        <div className="flex items-baseline gap-md">
                          <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs tabular-nums">
                            {t(day.label)} · {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-h3 text-primary font-display text-balance leading-tight">
                            {t(day.title)}
                          </h3>
                        </div>
                      </header>

                      <p className="text-body-lg text-silver opacity-90 italic text-pretty leading-relaxed">
                        “{t(day.principle)}”
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-md items-start">
                        <div className="flex flex-col gap-sm min-w-0">
                          <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                            {t(c.solution.moduleListLabel)}
                          </span>
                          <StaggerReveal
                            as="ul"
                            className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none"
                            staggerMs={50}
                          >
                            {modules.map((module) => (
                              <li
                                key={`mod-${day.id}-${module.slice(0, 32)}`}
                                className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty leading-relaxed"
                              >
                                <Sparkles
                                  className="h-3.5 w-3.5 max-w-none shrink-0 mt-1 text-gold/70"
                                  aria-hidden="true"
                                />
                                <span>{module}</span>
                              </li>
                            ))}
                          </StaggerReveal>
                        </div>

                        <div className="md:w-[18rem] shrink-0 flex flex-col gap-2 p-md rounded-lg border border-gold/25 bg-gold/5">
                          <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-[10px]">
                            {t(c.solution.outcomeLabel)}
                          </span>
                          <p className="text-body text-primary font-display font-medium text-balance leading-snug">
                            {t(day.outcome)}
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 8. LES 9 LIVRABLES (shared DeliverablesTable) ─────────────── */}
      <DeliverablesTable
        eyebrow={t(c.deliverables.eyebrow)}
        headline={t(c.deliverables.headline)}
        subtitle={t(c.deliverables.subtitle)}
        items={deliverableRows}
        columnNumberLabel={t(c.deliverables.columnNumberLabel)}
        columnNameLabel={t(c.deliverables.columnNameLabel)}
        columnDescriptionLabel={t(c.deliverables.columnDescriptionLabel)}
      />

      {/* ─── 9. BONUS (shared BonusList) ───────────────────────────────── */}
      <BonusList
        headline={t(c.bonus.headline)}
        items={bonusItems}
        valueLabel={t(c.bonus.valueLabel)}
      />

      {/* ─── 10. VALEUR & PRIX (shared ValuePriceTable) ────────────────── */}
      <ValuePriceTable
        eyebrow={t(c.valuePrice.eyebrow)}
        headline={t(c.valuePrice.headline)}
        valueRows={valueRows}
        valueTotal={t(c.valuePrice.valueTotal)}
        valueTotalLabel={t(c.valuePrice.valueTotalLabel)}
        priceLaunch={t(c.valuePrice.priceLaunch)}
        priceLaunchLabel={t(c.valuePrice.priceLaunchLabel)}
        priceRegular={t(c.valuePrice.priceRegular)}
        priceRegularLabel={t(c.valuePrice.priceRegularLabel)}
        paymentOptions={paymentOptions}
        ctaPrimaryLabel={t(c.valuePrice.ctaPrimaryLabel)}
        onCtaPrimaryClick={scrollToCapture}
        ctaSecondaryLabel={t(c.valuePrice.ctaSecondaryLabel)}
        onCtaSecondaryClick={scrollToCapture}
        preLaunchNote={t(c.valuePrice.preLaunchNote)}
      />

      {/* ─── 11. PREUVE & CRÉDIBILITÉ JONAS ────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(c.credibility.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(c.credibility.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(c.credibility.headline)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[60ch]">
                {t(c.credibility.sub)}
              </p>
            </div>

            {/* Stats verbatim formulaire signé Jonas */}
            <dl
              className="mt-md grid grid-cols-1 sm:grid-cols-3 gap-md max-w-[60rem] mx-auto"
              data-card-group="aaoo-stats"
            >
              {c.credibility.stats.map((stat) => (
                <div
                  key={`stat-${stat.id}`}
                  className="flex flex-col items-center text-center gap-2 p-md bg-base border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <dt className="sr-only">{t(stat.label)}</dt>
                  <dd className="text-[clamp(2.25rem,1.5rem+2.4vw,3.25rem)] text-gold font-display font-normal tabular-nums leading-none tracking-[-0.04em]">
                    {t(stat.value)}
                  </dd>
                  <span
                    aria-hidden="true"
                    className="block h-px w-12 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                  />
                  <span className="text-eyebrow uppercase tracking-widest text-silver font-display text-xs">
                    {t(stat.label)}
                  </span>
                </div>
              ))}
            </dl>

            {/* Credentials list */}
            <div className="mt-xl max-w-[64rem] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-md items-start">
              <span
                aria-hidden="true"
                className="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 shrink-0"
              >
                <Award className="h-6 w-6 max-w-none shrink-0 text-gold/90" />
              </span>
              <ul className="flex flex-col gap-2 list-none">
                {credentials.map((credential) => (
                  <li
                    key={`cred-${credential.slice(0, 40)}`}
                    className="flex items-start gap-2 text-body text-silver opacity-90 text-pretty"
                  >
                    <Star
                      className="h-3.5 w-3.5 max-w-none shrink-0 mt-1.5 text-gold/70 fill-gold/70"
                      aria-hidden="true"
                    />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Citation Jonas */}
            <figure className="mt-xl max-w-[58rem] mx-auto p-md sm:p-lg bg-base border-l-2 border-gold/40 rounded-r-lg">
              <Quote className="h-5 w-5 max-w-none shrink-0 text-gold/60 mb-2" aria-hidden="true" />
              <blockquote className="text-body-lg text-primary font-display italic leading-relaxed text-pretty">
                {t(c.credibility.quote)}
              </blockquote>
              <figcaption className="mt-sm text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                {t(c.credibility.quoteAttribution)}
              </figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 12. FAQ ───────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(c.faq.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="06" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(c.faq.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(c.faq.headline)}</MaskRevealHeading>
            </div>
            <div className="max-w-[80ch] mx-auto flex flex-col gap-2">
              {c.faq.items.map((item) => (
                <details
                  key={item.id}
                  className="group bg-elevated border border-silver/15 rounded-lg overflow-hidden hover:border-silver/25 transition-colors duration-base"
                >
                  <summary className="cursor-pointer list-none p-md flex items-center justify-between gap-md text-body text-primary font-display font-medium hover:bg-base/30 transition-colors duration-base">
                    <span className="text-pretty min-w-0">{t(item.q)}</span>
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

      {/* ─── 13. GARANTIE 100% ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(c.guarantee.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="07" position="right" />
          <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
            <Eyebrow>{t(c.guarantee.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2" className="max-w-[26ch]">
              {t(c.guarantee.headline)}
            </MaskRevealHeading>

            <article className="mt-md max-w-[44rem] w-full p-md sm:p-lg bg-base border border-gold/30 rounded-lg shadow-haptic-focal">
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold/8 mb-md mx-auto"
              >
                <Award className="h-6 w-6 max-w-none shrink-0 text-gold/90" />
              </span>

              <p className="text-body-lg text-primary opacity-95 text-pretty leading-relaxed">
                {t(c.guarantee.body)}
              </p>

              <ul className="mt-md flex flex-wrap justify-center gap-2 list-none">
                {guaranteeHighlights.map((highlight) => (
                  <li
                    key={`grt-${highlight.slice(0, 32)}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill border border-gold/30 bg-gold/5 text-eyebrow uppercase tracking-wider text-gold/90 font-display text-xs"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-md text-body text-silver opacity-90 italic text-pretty leading-relaxed">
                {t(c.guarantee.closing)}
              </p>
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 14. URGENCE & RARETÉ ──────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(c.urgency.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="08" position="left" />
          <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
            <Eyebrow>{t(c.urgency.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(c.urgency.headline)}</MaskRevealHeading>

            {/* Countdown placeholder — désactivé honnête en pré-lancement */}
            <figure
              aria-label={t(c.urgency.countdownPendingLabel)}
              className="mt-md w-full max-w-[36rem] flex flex-col gap-2"
            >
              <div className="flex items-stretch gap-2">
                {(() => {
                  const labels =
                    locale === 'fr'
                      ? (['Jours', 'Heures', 'Minutes', 'Secondes'] as const)
                      : (['Days', 'Hours', 'Minutes', 'Seconds'] as const);
                  return labels.map((label) => (
                    <div
                      key={`cd-${label}`}
                      className="flex-1 flex flex-col items-center gap-1 p-sm bg-elevated border border-silver/15 rounded-lg"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[clamp(1.5rem,1.2rem+1vw,2.25rem)] text-silver/80 font-display font-normal tabular-nums leading-none tracking-tighter"
                      >
                        —
                      </span>
                      <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                        {label}
                      </span>
                    </div>
                  ));
                })()}
              </div>
              <figcaption className="text-sm text-silver/80 italic text-pretty max-w-[48ch]">
                {t(c.urgency.countdownPendingLabel)}
              </figcaption>
            </figure>

            <p className="mt-md text-body-lg text-primary opacity-95 text-pretty max-w-[58ch] leading-relaxed">
              {t(c.urgency.spotsBody)}
            </p>
            <p className="text-body text-silver opacity-80 italic text-pretty max-w-[55ch]">
              {t(c.urgency.waitlistNote)}
            </p>

            {/* Early-bird bonus card */}
            <article className="mt-md max-w-[42rem] w-full p-md bg-elevated border border-gold/25 rounded-lg shadow-haptic-card flex flex-col items-center gap-2">
              <Eyebrow goldDot={false} variant="plain">
                <span className="text-gold/80">{t(c.urgency.earlyBirdEyebrow)}</span>
              </Eyebrow>
              <p className="text-body text-primary opacity-95 text-pretty leading-relaxed">
                {t(c.urgency.earlyBirdBody)}
              </p>
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 15. TÉMOIGNAGES — PLACEHOLDER HONNÊTE ─────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(c.testimonials.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="09" position="right" />
          <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
            <Eyebrow>{t(c.testimonials.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(c.testimonials.headline)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch] leading-relaxed">
              {t(c.testimonials.body)}
            </p>
            <button
              type="button"
              onClick={scrollToCapture}
              className="mt-sm inline-flex items-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-colors duration-base bg-transparent border border-silver/40 text-silver hover:border-silver focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-silver"
            >
              <Mail className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
              <span>{t(c.testimonials.ctaLabel)}</span>
            </button>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 16. CTA FINAL — 2 réalités (anchor target) ────────────────── */}
      <ScrollReveal>
        <section
          id={FINAL_CTA_ANCHOR_ID}
          aria-label={t(c.finalCta.eyebrow)}
          className="relative scroll-mt-[160px] py-2xl bg-section-base"
        >
          <FiligraneNumber number="10" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(c.finalCta.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(c.finalCta.headline)}</MaskRevealHeading>
            </div>

            {/* 2 colonnes Sans / Avec — verbatim PDF §15 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-[80rem] mx-auto">
              <article className="flex flex-col gap-sm p-md sm:p-lg bg-elevated border border-silver/15 rounded-lg">
                <header className="pb-sm border-b border-silver/15">
                  <span className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver/80 font-display text-xs">
                    <X className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                    <span>{t(c.finalCta.sansColumn.label)}</span>
                  </span>
                </header>
                <ul className="flex flex-col gap-sm list-none">
                  {sansItems.map((item) => (
                    <li
                      key={`sans-${item.slice(0, 40)}`}
                      className="flex items-start gap-2 text-body text-silver opacity-80 text-pretty leading-relaxed"
                    >
                      <X
                        className="h-3.5 w-3.5 max-w-none shrink-0 mt-1.5 text-silver/75"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="flex flex-col gap-sm p-md sm:p-lg bg-elevated border border-gold/30 rounded-lg shadow-haptic-focal">
                <header className="pb-sm border-b border-gold/20">
                  <span className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-gold/85 font-display text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                    <span>{t(c.finalCta.avecColumn.label)}</span>
                  </span>
                </header>
                <ul className="flex flex-col gap-sm list-none">
                  {avecItems.map((item) => (
                    <li
                      key={`avec-${item.slice(0, 40)}`}
                      className="flex items-start gap-2 text-body text-primary opacity-95 text-pretty leading-relaxed"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 max-w-none shrink-0 mt-1.5 text-gold/85"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Transition + pullquote */}
            <div className="mt-xl flex flex-col items-center text-center gap-sm max-w-content mx-auto">
              <p className="text-body-lg text-silver opacity-85 text-pretty">
                {t(c.finalCta.transitionBody)}
              </p>
              <p className="text-[clamp(1.5rem,1rem+1.2vw,2.25rem)] text-primary font-display tracking-[-0.02em] leading-[1.25] text-balance max-w-[26ch]">
                {t(c.finalCta.transitionPullQuote)}
              </p>
            </div>

            {/* Capture email anchor + récap + boutons */}
            <article
              id={CAPTURE_ANCHOR_ID}
              className="mt-xl mx-auto max-w-[56rem] p-md sm:p-lg bg-elevated border border-silver/20 rounded-lg shadow-haptic-focal scroll-mt-[160px]"
            >
              <div className="flex flex-col items-center text-center gap-sm">
                <Eyebrow>{t(c.finalCta.recapEyebrow)}</Eyebrow>
                <ul className="mt-sm flex flex-col gap-2 list-none max-w-[52ch] mx-auto text-left">
                  {recapItems.map((item) => (
                    <li
                      key={`recap-${item.slice(0, 40)}`}
                      className="flex items-start gap-2 text-body text-silver opacity-90 text-pretty leading-relaxed"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 max-w-none shrink-0 mt-1.5 text-gold/85"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Capture form principale finale */}
                <form
                  onSubmit={handleFinalSubmit}
                  aria-label={
                    locale === 'fr'
                      ? 'Inscription priorité An Army of One'
                      : 'Priority signup An Army of One'
                  }
                  className="mt-md w-full max-w-[36rem] flex flex-col gap-2"
                >
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-stretch">
                    <label htmlFor="aaoo-final-email" className="sr-only">
                      {t(c.hero.emailPlaceholder)}
                    </label>
                    <div className="relative flex-1 min-w-0">
                      <Mail
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 max-w-none shrink-0 text-silver/60"
                        aria-hidden="true"
                      />
                      <input
                        id="aaoo-final-email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder={t(c.hero.emailPlaceholder)}
                        value={captureEmail}
                        onChange={(event) => setCaptureEmail(event.target.value)}
                        className="w-full h-12 pl-10 pr-3 rounded-lg bg-base border border-silver/20 text-body text-primary placeholder:text-silver/70 font-display focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/15 transition-colors duration-base"
                        disabled={captureState === 'success' || captureState === 'submitting'}
                      />
                    </div>
                    {/* Honeypot — hidden from humans + screen readers. */}
                    <input
                      id="aaoo-final-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-px w-px overflow-hidden"
                      value={captureHoneypot}
                      onChange={(e) => setCaptureHoneypot(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={captureState === 'success' || captureState === 'submitting'}
                      className="shrink-0 inline-flex items-center justify-center gap-2 h-12 rounded-lg px-md text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      {captureState === 'success' ? (
                        <>
                          <CheckCircle2
                            className="h-4 w-4 max-w-none shrink-0"
                            aria-hidden="true"
                          />
                          <span>
                            {locale === 'fr' ? 'Inscrit en priorité' : 'Subscribed (priority)'}
                          </span>
                        </>
                      ) : (
                        <>
                          <span>{t(c.finalCta.ctaPrimaryLabel)}</span>
                          <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                  {captureState === 'error' && captureError ? (
                    <p role="alert" className="text-sm text-gold/90 text-pretty">
                      {captureError}
                    </p>
                  ) : null}

                  {/* VIP secondary CTA — fonctionnel : scroll vers capture email */}
                  <button
                    type="button"
                    onClick={scrollToCapture}
                    aria-label={
                      locale === 'fr'
                        ? `${t(c.finalCta.ctaVipLabel)} — défilement vers le formulaire d'inscription`
                        : `${t(c.finalCta.ctaVipLabel)} — scroll to signup form`
                    }
                    className="mt-2 inline-flex self-center items-center gap-2 rounded-pill px-md py-[0.55rem] text-eyebrow uppercase tracking-wider font-display transition-colors duration-base bg-transparent border border-silver/40 text-silver hover:border-silver focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-silver"
                  >
                    <Lock className="h-3 w-3 max-w-none shrink-0" aria-hidden="true" />
                    <span>{t(c.finalCta.ctaVipLabel)}</span>
                  </button>

                  <p className="mt-sm text-center text-sm text-silver/80 italic text-pretty max-w-[52ch] mx-auto">
                    {t(c.finalCta.ctaDisabledNote)}
                    {' · '}
                    {locale === 'fr'
                      ? 'En soumettant, tu acceptes d’être notifié (Loi 25).'
                      : 'By submitting, you agree to be notified (Quebec Law 25).'}
                  </p>
                </form>

                {/* Citation finale Jonas */}
                <figure className="mt-md max-w-[52ch]">
                  <blockquote className="text-body-lg text-primary font-display italic leading-relaxed text-pretty">
                    “{t(c.finalCta.jonasQuote)}”
                  </blockquote>
                  <figcaption className="mt-sm text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                    {t(c.finalCta.jonasAttribution)}
                  </figcaption>
                </figure>

                {/* Pied légal */}
                <p className="mt-md text-sm text-silver/80 italic text-pretty max-w-[58ch]">
                  {t(c.finalCta.legalFooter)}
                </p>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 17. TRILOGIE FOOTER CROSS-LINK (shared) ───────────────────── */}
      {locale === 'en' ? (
        <TrilogieFooterCrossLink
          currentSlug={CURRENT_SLUG}
          eyebrow={t(c.trilogie.eyebrow)}
          headline={t(c.trilogie.headline)}
          subtitle={t(c.trilogie.subtitle)}
          labels={{
            blocage: 'Blocker resolved',
            audience: 'Audience',
            priceLaunch: 'Launch',
            priceRegular: 'Regular',
            places: 'Spots',
            format: 'Format',
            current: 'You are here',
            cta: 'Discover'
          }}
        />
      ) : (
        <TrilogieFooterCrossLink
          currentSlug={CURRENT_SLUG}
          eyebrow={t(c.trilogie.eyebrow)}
          headline={t(c.trilogie.headline)}
          subtitle={t(c.trilogie.subtitle)}
        />
      )}
    </>
  );
}
