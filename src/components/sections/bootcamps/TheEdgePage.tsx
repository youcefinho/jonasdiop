import { ArrowRight, Check, Play, ShieldCheck, Sparkles, X } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { theEdgeCopy } from '@/data/copy/bootcamps/theEdge';
import { submitWaitlist } from '@/lib/api/waitlist';
import { useT } from '@/lib/i18n/useT';
import { FaqSchemaScript, SchemaScript } from '@/lib/seo/SchemaScript';
import { BonusList } from './BonusList';
import { BootcampHeroPattern } from './BootcampHeroPattern';
import { BootcampStickyBar } from './BootcampStickyBar';
import { BootcampThemeProvider } from './BootcampThemeProvider';
import { DeliverablesTable } from './DeliverablesTable';
import { EdgeApplicationFormShell } from './EdgeApplicationFormShell';
import { MirrorChecklistSection } from './MirrorChecklistSection';
import { TrilogieFooterCrossLink } from './TrilogieFooterCrossLink';
import { ValuePriceTable } from './ValuePriceTable';

/**
 * TheEdgePage — /evenements/bootcamps/the-edge (FR + /en/ mirror).
 *
 * Sous-page Trilogie bootcamp #2 — The Edge™ (autorité, perception, pricing
 * premium). 19 sections verbatim PDF Trilogie + brief v3 §3.6 + CLAUDE.md
 * projet "Mode pré-lancement".
 *
 * Architecture :
 *   1. StickyBar (BootcampStickyBar, sous Navbar)
 *   2. Hero (eyebrow + h1 shimmer + sub + micro-proof + CTA application)
 *   3. VSL placeholder + capture email (mini-form)
 *   4. Transition post-VSL (italique sobre)
 *   5. Miroir 10 cases (MirrorChecklistSection)
 *   6. Vérité Veblen (titre fort + body + closer mis en exergue)
 *   7. Sans action 12 mois (5 items list négative + closer)
 *   8. Solution 3 jours (3 cards J1/J2/J3 modules + livrables)
 *   9. 10 livrables (DeliverablesTable)
 *  10. Bonus (BonusList)
 *  11. Valeur & prix (ValuePriceTable) + note "pricing = signal status"
 *  12. Preuve Jonas (stats 15+/857/31M$ + credentials + quote)
 *  13. Objections (5 Q/A details)
 *  14. Garantie 100%
 *  15. Application process (4 étapes + EdgeApplicationFormShell)
 *  16. FAQ (6 Q/A) — wired Schema.org FAQPage
 *  17. Témoignages placeholder honnête
 *  18. CTA final dual-column Sans/Avec + récap + quote Jonas
 *  19. TrilogieFooterCrossLink (currentSlug="the-edge")
 *
 * Pré-lancement contracts :
 *   - Stripe NON câblé → CTAs CTA application scroll vers EdgeApplicationFormShell
 *     section §15, mini-form notify reste seule action active.
 *   - Témoignages = pendingNote, AUCUNE testimonial inventée.
 *   - Schema Event sans offerUrl, prix + currency CAD OK.
 *
 * DA : Platinum Executive Authority — Filigrane numbers alternance left/right,
 * gold accent rare (eyebrow dot + hero CTA + section dividers), pas de magazine
 * editorial (cf. feedback_ban_magazine_editorial_default).
 */
export function TheEdgePage() {
  const { t, locale } = useT();
  const copy = theEdgeCopy;
  const captureId = useId();
  const vslHoneypotId = useId();
  const [vslEmail, setVslEmail] = useState('');
  const [vslState, setVslState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [vslError, setVslError] = useState<string | null>(null);
  const [vslHoneypot, setVslHoneypot] = useState('');

  const handleVslCapture = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!vslEmail || vslState === 'submitting') return;
    if (vslHoneypot) return; // bot detected — silently drop
    setVslState('submitting');
    setVslError(null);
    const route =
      typeof window !== 'undefined' ? window.location.pathname : '/evenements/bootcamps/the-edge';
    const result = await submitWaitlist({
      email: vslEmail,
      route,
      source: 'hero',
      locale,
      consent: true,
      context: 'the-edge'
    });
    if (result.ok) {
      setVslState('success');
    } else {
      setVslState('error');
      setVslError(result.error ?? null);
    }
  };

  // Edge application notify form — mini email capture inside
  // EdgeApplicationFormShell (the main application form stays disabled).
  const handleEdgeNotifySubmit = async (email: string) => {
    const route =
      typeof window !== 'undefined' ? window.location.pathname : '/evenements/bootcamps/the-edge';
    const result = await submitWaitlist({
      email,
      route,
      source: 'edge-app',
      locale,
      consent: true,
      context: 'the-edge'
    });
    if (!result.ok) {
      // Re-throw so shell flips back to 'idle' state (catch branch in handler).
      throw new Error(result.error ?? 'submission failed');
    }
  };

  const scrollToFinalCta = () => {
    if (typeof window === 'undefined') return;
    const target = document.getElementById('edge-final-cta');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToApplication = () => {
    if (typeof window === 'undefined') return;
    const target = document.getElementById('edge-application');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const fieldBase =
    'w-full px-md py-sm rounded-md bg-base border border-silver/15 text-body text-primary font-display placeholder:text-silver/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed';

  const faqItemsForSchema = copy.faq.items.map((item) => ({
    question: t(item.q),
    answer: t(item.a)
  }));

  return (
    <BootcampThemeProvider variant="edge">
      {/* ─── Schema.org wiring ──────────────────────────────────────────── */}
      <SchemaScript
        locale={locale}
        id="schema-org-the-edge"
        options={{
          webPage: {
            routeKey: 'evenements-bootcamp-the-edge',
            name: t(copy.meta.title),
            description: t(copy.meta.description),
            breadcrumbTrail: [
              { name: t(copy.breadcrumb.home), url: locale === 'fr' ? '/' : '/en' },
              {
                name: t(copy.breadcrumb.evenements),
                url: locale === 'fr' ? '/evenements' : '/en/events'
              },
              {
                name: t(copy.breadcrumb.current),
                url:
                  locale === 'fr'
                    ? '/evenements/bootcamps/the-edge'
                    : '/en/events/bootcamps/the-edge'
              }
            ]
          },
          // Pre-launch : startDate sentinel (year only — Jonas confirms exact ISO),
          // no offerUrl (Stripe not wired), price + currency disclosed because PDF
          // §11 explicitly publishes them. Course node mirrors Event for the
          // Google Course rich-result lane (separate from Event rich-result).
          events: [
            {
              slug: 'the-edge',
              routeKeyForId: 'evenements-bootcamp-the-edge',
              name: 'The Edge™',
              description: t(copy.meta.description),
              startDate: '2026-09-01',
              location: {
                mode: 'mixed',
                name: 'Montréal',
                city: 'Montréal',
                region: 'Quebec',
                country: 'CA',
                onlineUrl: 'https://jonas-diop.intralys.dev/evenements/bootcamps/the-edge'
              },
              price: '1497',
              priceCurrency: 'CAD',
              status: 'EventScheduled'
            }
          ],
          courses: [
            {
              slug: 'the-edge',
              routeKey: 'evenements-bootcamp-the-edge',
              name: 'The Edge™ — Bootcamp autorité perçue',
              description: t(copy.meta.description),
              educationalLevel: 'Intermediate',
              about:
                locale === 'fr'
                  ? 'Autorité perçue et pricing premium'
                  : 'Perceived authority and premium pricing',
              instance: {
                mode: 'Blended',
                workload: 'P3D',
                eventSlug: 'the-edge',
                eventRouteKey: 'evenements-bootcamp-the-edge'
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
        items={faqItemsForSchema}
        routeKey="evenements-bootcamp-the-edge"
      />

      {/* ─── 1. STICKY BAR ──────────────────────────────────────────────── */}
      <BootcampStickyBar
        places={15}
        status={t(copy.stickyBar.status)}
        priceLaunch={t(copy.stickyBar.priceLaunch)}
        priceRegular={t(copy.stickyBar.priceRegular)}
        ctaLabel={t(copy.stickyBar.ctaLabel)}
        onCtaClick={scrollToApplication}
        placesLabel={t(copy.stickyBar.placesLabel)}
        variant="edge"
      />

      {/* ─── 2. HERO ────────────────────────────────────────────────────── */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[78vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <BootcampHeroPattern variant="edge" />
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            className="font-normal italic tracking-[-0.02em] text-[clamp(2.25rem,1.3rem+3.2vw,4.75rem)] leading-[1.06] max-w-[24ch] [font-feature-settings:'liga','dlig']"
          >
            <span className="text-[oklch(0.96_0.02_60)]">{t(copy.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
            {t(copy.hero.sub)}
          </p>
          <p className="text-eyebrow uppercase tracking-widest text-[oklch(0.7_0.08_60)]/85 font-display text-xs">
            {t(copy.hero.microProof)}
          </p>
          <div className="mt-md">
            <CTAPill variant="gold-primary" onClick={scrollToApplication}>
              {t(copy.hero.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>

      {/* ─── 3. VSL PLACEHOLDER ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.vsl.title)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
            <Eyebrow>{t(copy.vsl.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.vsl.title)}</MaskRevealHeading>

            <div className="mt-md w-full max-w-[52rem] aspect-video rounded-lg border border-silver/15 bg-base/40 flex flex-col items-center justify-center gap-sm shadow-haptic-card">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold/90"
              >
                <Play className="h-6 w-6 max-w-none shrink-0" aria-hidden="true" />
              </span>
              <p className="text-body text-silver opacity-80 text-pretty italic max-w-[44ch]">
                {t(copy.vsl.pendingNote)}
              </p>
            </div>

            <form
              onSubmit={handleVslCapture}
              aria-label={t(copy.vsl.captureLabel)}
              className="w-full max-w-[36rem] mt-sm p-md rounded-lg border border-gold/25 bg-elevated shadow-haptic-card flex flex-col gap-sm"
            >
              <label
                htmlFor={captureId}
                className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs"
              >
                {t(copy.vsl.captureLabel)}
              </label>
              {vslState === 'success' ? (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-body text-primary opacity-90 text-pretty"
                >
                  {t(copy.vsl.captureSuccess)}
                </p>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-sm">
                    <input
                      id={captureId}
                      type="email"
                      required
                      autoComplete="email"
                      value={vslEmail}
                      onChange={(e) => setVslEmail(e.target.value)}
                      placeholder={t({ fr: 'toi@entreprise.com', en: 'you@company.com' })}
                      className={`${fieldBase} flex-1 normal-case tracking-normal`}
                    />
                    {/* Honeypot — hidden from humans + screen readers. */}
                    <input
                      id={vslHoneypotId}
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-px w-px overflow-hidden"
                      value={vslHoneypot}
                      onChange={(e) => setVslHoneypot(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={vslState === 'submitting' || !vslEmail}
                      className="relative isolate shrink-0 inline-flex items-center justify-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <span>{t(copy.vsl.captureCta)}</span>
                    </button>
                  </div>
                  {vslState === 'error' && vslError ? (
                    <p role="alert" className="text-sm text-gold/90 text-pretty">
                      {vslError}
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

      {/* ─── 4. TRANSITION POST-VSL ─────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-hidden="false"
          aria-label={t(copy.postVslTransition)}
          className="relative py-xl bg-section-base"
        >
          <div className="relative max-w-content mx-auto px-md text-center">
            <p className="text-body-lg text-silver opacity-80 italic text-pretty max-w-[58ch] mx-auto">
              {t(copy.postVslTransition)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. MIROIR — 10 cases ──────────────────────────────────────── */}
      <MirrorChecklistSection
        eyebrow={t(copy.mirror.eyebrow)}
        headline={t(copy.mirror.headline)}
        items={copy.mirror.items.map((item) => t(item))}
        transitionPhrase={t(copy.mirror.transition)}
      />

      {/* ─── 6. VÉRITÉ QUI DÉRANGE — EFFET VEBLEN ──────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.truth.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-content mx-auto px-md flex flex-col gap-md">
            <Eyebrow>{t(copy.truth.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.truth.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[65ch]">
              {t(copy.truth.body)}
            </p>
            <p className="mt-md text-h3 text-primary font-display text-balance leading-snug max-w-[58ch] pl-md border-l-2 border-gold/40">
              {t(copy.truth.closer)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 7. SANS ACTION 12 MOIS ─────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.withoutAction.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.withoutAction.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.withoutAction.title)}</MaskRevealHeading>
            </div>
            <ul className="max-w-[62rem] mx-auto flex flex-col gap-2 list-none">
              {copy.withoutAction.items.map((item) => (
                <li
                  key={`woa-${t(item).slice(0, 40)}`}
                  className="flex items-start gap-sm p-md bg-base border border-silver/15 rounded-lg"
                >
                  <X
                    className="h-4 w-4 max-w-none shrink-0 mt-1 text-silver/75"
                    aria-hidden="true"
                  />
                  <p className="text-body text-silver opacity-85 text-pretty min-w-0 leading-relaxed">
                    {t(item)}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-xl text-center text-body-lg text-silver opacity-80 text-pretty italic max-w-[58ch] mx-auto">
              {t(copy.withoutAction.closer)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 8. SOLUTION 3 JOURS — J1/J2/J3 ─────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.solution.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.solution.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.solution.title)}</MaskRevealHeading>
            </div>

            <StaggerReveal
              as="div"
              className="grid grid-cols-1 lg:grid-cols-3 gap-md max-w-default mx-auto"
              staggerMs={120}
              data-card-group="edge-solution-days"
            >
              {copy.solution.days.map((day) => (
                <article
                  key={day.id}
                  className="flex flex-col gap-md p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card"
                >
                  <header className="flex flex-col gap-sm pb-sm border-b border-silver/10">
                    <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                      {t(day.label)}
                    </span>
                    <h3 className="text-h3 text-primary font-display text-balance leading-tight">
                      {t(day.title)}
                    </h3>
                    <p className="text-body text-silver opacity-80 text-pretty italic leading-relaxed">
                      “{t(day.quote)}”
                    </p>
                  </header>

                  <div className="flex flex-col gap-sm">
                    <span className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                      {t(copy.solution.modulesLabel)}
                    </span>
                    <ul className="flex flex-col gap-1 list-none">
                      {day.modules.map((mod) => (
                        <li
                          key={`mod-${day.id}-${t(mod).slice(0, 24)}`}
                          className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty"
                        >
                          <Sparkles
                            className="h-3.5 w-3.5 max-w-none shrink-0 mt-1 text-gold/70"
                            aria-hidden="true"
                          />
                          <span>{t(mod)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-sm mt-auto pt-sm border-t border-silver/10">
                    <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px]">
                      {t(copy.solution.deliverablesLabel)}
                    </span>
                    <ul className="flex flex-col gap-1 list-none">
                      {day.deliverables.map((deliv) => (
                        <li
                          key={`del-${day.id}-${t(deliv).slice(0, 24)}`}
                          className="flex items-start gap-2 text-body text-primary opacity-90 font-display font-medium text-pretty"
                        >
                          <Check
                            className="h-3.5 w-3.5 max-w-none shrink-0 mt-1 text-gold/90"
                            aria-hidden="true"
                          />
                          <span>{t(deliv)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 9. 10 LIVRABLES ────────────────────────────────────────────── */}
      <DeliverablesTable
        eyebrow={t(copy.deliverables.eyebrow)}
        headline={t(copy.deliverables.headline)}
        subtitle={t(copy.deliverables.subtitle)}
        columnNumberLabel={t(copy.deliverables.columnNumberLabel)}
        columnNameLabel={t(copy.deliverables.columnNameLabel)}
        columnDescriptionLabel={t(copy.deliverables.columnDescriptionLabel)}
        items={copy.deliverables.items.map((row) => ({
          n: row.n,
          name: t(row.name),
          description: t(row.description)
        }))}
      />

      {/* ─── 10. BONUS ──────────────────────────────────────────────────── */}
      <BonusList
        headline={t(copy.bonus.headline)}
        valueLabel={t(copy.bonus.valueLabel)}
        items={copy.bonus.items.map((row) => ({
          name: t(row.name),
          description: t(row.description),
          value: t(row.value)
        }))}
      />

      {/* ─── 11. VALEUR & PRIX ─────────────────────────────────────────── */}
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
        onCtaPrimaryClick={scrollToFinalCta}
        ctaSecondaryLabel={t(copy.valuePrice.ctaSecondaryLabel)}
        onCtaSecondaryClick={scrollToApplication}
        preLaunchNote={t(copy.valuePrice.preLaunchNote)}
        variant="edge"
      />

      {/* "Pourquoi ce prix" — note importante PDF §11 ────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.valuePrice.importantNote)}
          className="relative py-xl bg-section-base"
        >
          <div className="relative max-w-content mx-auto px-md">
            <p className="text-body text-silver opacity-80 italic text-pretty max-w-[62ch] mx-auto text-center pl-md pr-md border-l-2 border-r-2 border-gold/25 py-sm">
              {t(copy.valuePrice.importantNote)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 12. PREUVE & CRÉDIBILITÉ JONAS ─────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.proof.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="06" position="left" />
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="flex flex-col items-center text-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(copy.proof.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.proof.title)}</MaskRevealHeading>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-md max-w-[60rem] mx-auto">
              {copy.proof.stats.map((stat) => (
                <div
                  key={`stat-${t(stat.value)}-${t(stat.label).slice(0, 24)}`}
                  className="flex flex-col items-center text-center gap-1 p-md bg-base border border-silver/15 rounded-lg"
                >
                  <dt className="text-eyebrow uppercase tracking-widest text-silver font-display text-[10px] order-2">
                    {t(stat.label)}
                  </dt>
                  <dd className="text-[clamp(2rem,1.4rem+2vw,3rem)] text-gold font-display font-normal tracking-[-0.04em] tabular-nums leading-none">
                    {t(stat.value)}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-sm max-w-[68rem] mx-auto list-none">
              {copy.proof.credentials.map((cred) => (
                <li
                  key={`cred-${t(cred).slice(0, 40)}`}
                  className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty p-md bg-base border border-silver/15 rounded-lg"
                >
                  <Check
                    className="h-4 w-4 max-w-none shrink-0 mt-1 text-gold/80"
                    aria-hidden="true"
                  />
                  <span>{t(cred)}</span>
                </li>
              ))}
            </ul>

            <blockquote className="max-w-[64rem] mx-auto bg-base border border-gold/25 rounded-lg p-lg shadow-haptic-focal">
              <p className="text-body-lg text-primary font-display italic text-pretty leading-relaxed">
                “{t(copy.proof.quote)}”
              </p>
              <footer className="mt-md text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                — {t(copy.proof.quoteAuthor)}
              </footer>
            </blockquote>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 13. OBJECTIONS ─────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.objections.eyebrow)}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="07" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.objections.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.objections.title)}</MaskRevealHeading>
            </div>
            <div className="max-w-[78rem] mx-auto flex flex-col gap-2">
              {copy.objections.items.map((item) => (
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

      {/* ─── 14. GARANTIE 100% ──────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.guarantee.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="08" position="left" />
          <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
            <Eyebrow>{t(copy.guarantee.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.guarantee.title)}</MaskRevealHeading>
            <span
              aria-hidden="true"
              className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold/90"
            >
              <ShieldCheck className="h-8 w-8 max-w-none shrink-0" aria-hidden="true" />
            </span>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[64ch]">
              {t(copy.guarantee.body)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 15. PROCESSUS D'APPLICATION & RARETÉ ───────────────────────── */}
      <section
        id="edge-application"
        aria-label={t(copy.application.eyebrow)}
        className="relative scroll-mt-[148px] py-2xl bg-section-base"
      >
        <FiligraneNumber number="09" position="right" />
        <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
          <div className="flex flex-col items-center text-center gap-sm max-w-content mx-auto">
            <Eyebrow>{t(copy.application.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.application.headline)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch] mt-sm">
              {t(copy.application.why)}
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md max-w-default mx-auto list-none">
            {copy.application.steps.map((step) => (
              <li
                key={`step-${step.n}-${t(step.title).slice(0, 20)}`}
                className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card"
              >
                <span className="text-[clamp(2rem,1.5rem+1vw,2.5rem)] text-gold font-display font-normal tracking-[-0.04em] tabular-nums leading-none">
                  {String(step.n).padStart(2, '0')}
                </span>
                <h3 className="text-h3 text-primary font-display text-balance text-[1.0625rem] leading-tight">
                  {t(step.title)}
                </h3>
                <p className="text-body text-silver opacity-85 text-pretty leading-relaxed">
                  {t(step.body)}
                </p>
              </li>
            ))}
          </ol>

          <p className="text-center text-body text-gold opacity-90 italic text-pretty max-w-[62ch] mx-auto p-md rounded-lg border border-gold/25 bg-gold/5">
            {t(copy.application.earlyAccess)}
          </p>
        </div>
      </section>

      {/* Application form shell — main form disabled, mini-notify wired to
          /api/waitlist via onNotifySubmit (source='edge-app'). */}
      <EdgeApplicationFormShell
        eyebrow={t(copy.application.form.eyebrow)}
        headline={t(copy.application.form.headline)}
        subtitle={t(copy.application.form.subtitle)}
        banner={t(copy.application.form.banner)}
        onNotifySubmit={handleEdgeNotifySubmit}
        revenueBuckets={copy.application.form.revenueBuckets.map((bucket) => ({
          value: bucket.value,
          label: t(bucket.label)
        }))}
        labels={{
          activity: t(copy.application.form.labels.activity),
          activityPlaceholder: t(copy.application.form.labels.activityPlaceholder),
          revenue: t(copy.application.form.labels.revenue),
          revenuePlaceholder: t(copy.application.form.labels.revenuePlaceholder),
          change: t(copy.application.form.labels.change),
          changePlaceholder: t(copy.application.form.labels.changePlaceholder),
          why: t(copy.application.form.labels.why),
          whyPlaceholder: t(copy.application.form.labels.whyPlaceholder),
          name: t(copy.application.form.labels.name),
          namePlaceholder: t(copy.application.form.labels.namePlaceholder),
          email: t(copy.application.form.labels.email),
          emailPlaceholder: t(copy.application.form.labels.emailPlaceholder),
          phone: t(copy.application.form.labels.phone),
          phonePlaceholder: t(copy.application.form.labels.phonePlaceholder),
          submit: t(copy.application.form.labels.submit),
          notifyEmail: t(copy.application.form.labels.notifyEmail),
          notifyEmailPlaceholder: t(copy.application.form.labels.notifyEmailPlaceholder),
          notifySubmit: t(copy.application.form.labels.notifySubmit),
          notifySuccess: t(copy.application.form.labels.notifySuccess),
          required: t(copy.application.form.labels.required)
        }}
      />

      {/* ─── 16. FAQ ────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.faq.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="10" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.faq.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.faq.title)}</MaskRevealHeading>
            </div>
            <div className="max-w-[80ch] mx-auto flex flex-col gap-2">
              {copy.faq.items.map((item) => (
                <details
                  key={item.id}
                  className="group bg-base border border-silver/15 rounded-lg overflow-hidden"
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

      {/* ─── 17. TÉMOIGNAGES placeholder ────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.temoignages.eyebrow)}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="11" position="right" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(copy.temoignages.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.temoignages.title)}</MaskRevealHeading>
            <p className="text-body text-silver opacity-70 italic text-pretty max-w-[58ch]">
              {t(copy.temoignages.pendingNote)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 18. CTA FINAL — Sans/Avec + récap + quote ──────────────────── */}
      <ScrollReveal>
        <section
          id="edge-final-cta"
          aria-label={t(copy.finalCta.eyebrow)}
          className="relative scroll-mt-[148px] py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="12" position="left" />
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="flex flex-col items-center text-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.finalCta.title)}</MaskRevealHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-[68rem] mx-auto">
              <article className="flex flex-col gap-sm p-md bg-base border-l-2 border-silver/20 rounded-r-lg">
                <h3 className="text-h3 text-primary font-display text-balance leading-tight">
                  {t(copy.finalCta.withoutColumn.title)}
                </h3>
                <ul className="flex flex-col gap-2 mt-sm list-none">
                  {copy.finalCta.withoutColumn.items.map((item) => (
                    <li
                      key={`woc-${t(item).slice(0, 40)}`}
                      className="flex items-start gap-2 text-body text-silver opacity-65 text-pretty"
                    >
                      <X
                        className="h-4 w-4 max-w-none shrink-0 mt-1 text-silver/40"
                        aria-hidden="true"
                      />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="flex flex-col gap-sm p-md bg-base border-l-2 border-gold/40 rounded-r-lg shadow-haptic-focal">
                <h3 className="text-h3 text-primary font-display text-balance leading-tight">
                  {t(copy.finalCta.withColumn.title)}
                </h3>
                <ul className="flex flex-col gap-2 mt-sm list-none">
                  {copy.finalCta.withColumn.items.map((item) => (
                    <li
                      key={`wc-${t(item).slice(0, 40)}`}
                      className="flex items-start gap-2 text-body text-silver opacity-90 text-pretty"
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

            <dl className="flex flex-col sm:flex-row gap-md sm:gap-lg flex-wrap justify-center text-left">
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                  {t(copy.finalCta.recap.dateLabel)}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(copy.finalCta.recap.date)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                  {t(copy.finalCta.recap.locationLabel)}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(copy.finalCta.recap.location)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                  {t(copy.finalCta.recap.priceLabel)}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(copy.finalCta.recap.price)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/80 font-display text-[10px]">
                  {t(copy.finalCta.recap.spotsLabel)}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(copy.finalCta.recap.spots)}
                </dd>
              </div>
            </dl>

            <blockquote className="max-w-[60rem] mx-auto bg-base border border-gold/25 rounded-lg p-lg shadow-haptic-card">
              <p className="text-body-lg text-primary font-display italic text-pretty leading-relaxed text-center">
                “{t(copy.finalCta.quote)}”
              </p>
              <footer className="mt-md text-center text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                — {t(copy.finalCta.quoteAuthor)}
              </footer>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-sm items-center justify-center">
              <CTAPill variant="gold-primary" onClick={scrollToApplication}>
                {t(copy.finalCta.ctaPrimaryLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
              <CTAPill variant="silver-secondary" onClick={scrollToApplication}>
                {t(copy.finalCta.ctaSecondaryLabel)}
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 19. TRILOGIE FOOTER CROSS-LINK ─────────────────────────────── */}
      <TrilogieFooterCrossLink
        currentSlug="the-edge"
        eyebrow={t(copy.trilogieFooter.eyebrow)}
        headline={t(copy.trilogieFooter.headline)}
        subtitle={t(copy.trilogieFooter.subtitle)}
      />
    </BootcampThemeProvider>
  );
}
