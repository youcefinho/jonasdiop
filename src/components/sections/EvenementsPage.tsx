import { ArrowRight, Bell, CalendarDays, MapPin, Ticket, Users } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { evenementsCopy } from '@/data/copy/evenements';
import { useT } from '@/lib/i18n/useT';
import { FaqSchemaScript, SchemaScript } from '@/lib/seo/SchemaScript';

/**
 * EvenementsPage — /evenements (FR) et /en/events (EN). Brief v3 §3.5.
 *
 * 8 sections complètes :
 *   1. Hero (h1 + sub + visuel immersif description + CTA Voir prochains)
 *   2. Pourquoi venir en présentiel (4 bénéfices : immersion / réseau /
 *      transformation / accès direct Jonas)
 *   3. Types d'événements (3 cards anchored #bootcamps #retraites #masterclass)
 *   4. Calendrier des prochains événements (liste dynamique OU fallback
 *      capture email "Sois informé en premier" si vide)
 *   5. Témoignages d'événements passés (pending — placeholder structuré)
 *   6. Galerie / rétrospective (photos + aftermovies — pending)
 *   7. FAQ logistique (5 items : transport, repas, niveau, remboursement,
 *      préparation amont)
 *   8. CTA final dual (Voir événements + Être informé en priorité)
 *
 * Tone : TU partout (audience entrepreneurs). DA Platinum Executive Authority.
 * Filigrane numbers 01-08 alternance left/right cohérent ConferencesPage.
 *
 * Mode A (upcomingEvents.length > 0) : calendrier rendu en grid d'event cards.
 * Mode B (upcomingEvents.length === 0) : fallback capture email rendu.
 */
export function EvenementsPage() {
  const { t, locale } = useT();
  const copy = evenementsCopy;
  const hasUpcoming = copy.calendrier.upcomingEvents.length > 0;

  // ── Schema.org wiring — WebPage + FAQ logistics
  // No Event nodes injected for now : copy.calendrier.upcomingEvents is
  // []-typed (no events scheduled). When Jonas confirms dates, swap to the
  // `events` option (each item mapped to EventInput).
  const faqItems = copy.faq.items.map((item) => ({
    question: t(item.q),
    answer: t(item.a)
  }));

  return (
    <>
      <SchemaScript
        locale={locale}
        options={{
          webPage: {
            routeKey: 'evenements',
            name: t(copy.meta.title),
            description: t(copy.meta.description)
          }
        }}
      />
      <FaqSchemaScript locale={locale} items={faqItems} routeKey="evenements" />
      {/* ─── 1. HERO ────────────────────────────────────────────────────── */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[70vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            className="font-normal tracking-[-0.04em] text-[clamp(2.25rem,1.4rem+3vw,4.5rem)] leading-[1.05] max-w-[26ch]"
          >
            <span className="text-shimmer">{t(copy.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
            {t(copy.hero.sub)}
          </p>
          <div className="mt-md">
            <CTAPill
              variant="gold-primary"
              onClick={() => {
                if (typeof window === 'undefined') return;
                const target = document.getElementById('calendrier');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {t(copy.hero.ctaPrincipal)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>

      {/* ─── 2. POURQUOI VENIR EN PRÉSENTIEL — 4 bénéfices ─────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.pourquoiPresentiel.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.pourquoiPresentiel.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.pourquoiPresentiel.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
                {t(copy.pourquoiPresentiel.sub)}
              </p>
            </div>
            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-2 gap-md"
              staggerMs={100}
              data-card-group="evenements-benefices"
            >
              {copy.pourquoiPresentiel.benefices.map((item, idx) => (
                <article
                  key={item.id}
                  className="group relative flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card hover:border-silver/30 transition-colors duration-base overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,oklch(0.74_0.085_75/0.05)_50%,transparent_70%)] bg-[length:200%_200%] bg-[position:200%_0] transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[position:-50%_0]"
                  />
                  <span
                    aria-hidden="true"
                    className="text-gold font-display text-eyebrow uppercase tracking-widest text-xs opacity-80"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance">
                    {t(item.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty">{t(item.body)}</p>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 3. TYPES D'ÉVÉNEMENTS — 3 cards anchored ──────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.types.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.types.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.types.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
                {t(copy.types.sub)}
              </p>
            </div>
            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-3 gap-md"
              staggerMs={120}
              data-card-group="evenements-types"
            >
              {copy.types.items.map((item) => (
                <article
                  key={item.id}
                  id={item.anchorId}
                  className="group relative scroll-mt-[120px] flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card hover:border-gold/30 transition-colors duration-base overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,oklch(0.74_0.085_75/0.05)_50%,transparent_70%)] bg-[length:200%_200%] bg-[position:200%_0] transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[position:-50%_0]"
                  />
                  <span className="text-eyebrow uppercase tracking-widest text-gold opacity-80 font-display text-xs">
                    {t(item.eyebrow)}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance leading-[1.2]">
                    {t(item.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty">
                    {t(item.description)}
                  </p>
                  <p className="mt-auto pt-sm text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                    {t(item.forWho)}
                  </p>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 4. CALENDRIER — upcoming events OR fallback capture email ──── */}
      <ScrollReveal>
        <section
          id="calendrier"
          aria-label={t(copy.calendrier.eyebrow)}
          className="relative scroll-mt-[80px] py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.calendrier.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.calendrier.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
                {t(copy.calendrier.sub)}
              </p>
            </div>

            {hasUpcoming ? (
              // ── Mode A : Bannière dynamique upcomingEvents grid ──────────
              <StaggerReveal
                as="div"
                className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-content mx-auto"
                staggerMs={100}
                data-card-group="evenements-upcoming"
              >
                {copy.calendrier.upcomingEvents.map((event) => (
                  <article
                    key={event.id}
                    className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg hover:border-gold/30 transition-colors duration-base"
                  >
                    <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                      {t(event.name)}
                    </span>
                    <dl className="flex flex-col gap-2 mt-sm">
                      <div className="flex items-baseline gap-2">
                        <dt className="sr-only">{t(copy.calendrier.columnLabels.date)}</dt>
                        <CalendarDays
                          className="h-4 w-4 max-w-none shrink-0 text-silver/60"
                          aria-hidden="true"
                        />
                        <dd className="text-body text-primary font-display">{t(event.date)}</dd>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <dt className="sr-only">{t(copy.calendrier.columnLabels.location)}</dt>
                        <MapPin
                          className="h-4 w-4 max-w-none shrink-0 text-silver/60"
                          aria-hidden="true"
                        />
                        <dd className="text-body text-primary font-display">{t(event.location)}</dd>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <dt className="sr-only">{t(copy.calendrier.columnLabels.spots)}</dt>
                        <Users
                          className="h-4 w-4 max-w-none shrink-0 text-silver/60"
                          aria-hidden="true"
                        />
                        <dd className="text-body text-silver opacity-80">{t(event.spotsLeft)}</dd>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <dt className="sr-only">{t(copy.calendrier.columnLabels.price)}</dt>
                        <Ticket
                          className="h-4 w-4 max-w-none shrink-0 text-silver/60"
                          aria-hidden="true"
                        />
                        <dd className="text-body text-silver opacity-80">{t(event.price)}</dd>
                      </div>
                    </dl>
                    <a
                      href={event.href}
                      className="mt-md inline-flex items-center gap-2 self-start px-md py-sm rounded-pill bg-silver text-base font-display font-medium text-eyebrow uppercase tracking-wider hover:bg-silver/90 transition-colors duration-base"
                    >
                      {t(copy.calendrier.eventCtaLabel)}
                      <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </StaggerReveal>
            ) : (
              // ── Mode B : Fallback capture email (no events scheduled) ────
              <div className="max-w-content mx-auto flex flex-col items-center text-center gap-md">
                <span className="text-eyebrow uppercase tracking-[0.2em] text-gold/70 font-display text-[10px]">
                  {t(copy.calendrier.fallbackCaptureEmail.eyebrow)}
                </span>
                <h3 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]">
                  {t(copy.calendrier.fallbackCaptureEmail.title)}
                </h3>
                <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
                  {t(copy.calendrier.fallbackCaptureEmail.sub)}
                </p>

                <form
                  action="#"
                  method="post"
                  data-events-capture-form
                  aria-label={t(copy.calendrier.fallbackCaptureEmail.formLabels.ariaLabel)}
                  className="mt-sm flex flex-col sm:flex-row gap-sm w-full max-w-[480px]"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="evenements-page-notify-email" className="sr-only">
                    {t(copy.calendrier.fallbackCaptureEmail.formLabels.srEmailLabel)}
                  </label>
                  <input
                    id="evenements-page-notify-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    disabled
                    placeholder={t(
                      copy.calendrier.fallbackCaptureEmail.formLabels.emailPlaceholder
                    )}
                    className="flex-1 px-md py-sm rounded-pill bg-base border border-silver/20 text-body text-primary placeholder:text-silver/40 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/20 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-md py-sm rounded-pill bg-silver text-base text-eyebrow uppercase tracking-wider font-display font-medium hover:bg-silver/90 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
                  >
                    <Bell className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                    {t(copy.calendrier.fallbackCaptureEmail.formLabels.submitLabel)}
                  </button>
                </form>
                <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                  {t(copy.calendrier.fallbackCaptureEmail.formLabels.pendingNote)}
                </p>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. TÉMOIGNAGES D'ÉVÉNEMENTS PASSÉS — pending placeholder ──── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.temoignages.eyebrow)}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.temoignages.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.temoignages.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
                {t(copy.temoignages.sub)}
              </p>
            </div>

            {copy.temoignages.items.length > 0 ? (
              <StaggerReveal
                as="div"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
                staggerMs={100}
                data-card-group="evenements-temoignages"
              >
                {copy.temoignages.items.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                  >
                    <p className="text-body text-primary text-pretty italic font-display leading-[1.4]">
                      {t(item.quote)}
                    </p>
                    <div className="mt-auto pt-sm border-t border-silver/10 flex flex-col gap-1">
                      <span className="text-body text-primary font-display font-medium">
                        {item.name}
                      </span>
                      <span className="text-sm text-silver opacity-70">{t(item.role)}</span>
                      <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-[10px] mt-1">
                        {t(item.eventAttended)} · {t(item.result)}
                      </span>
                    </div>
                  </article>
                ))}
              </StaggerReveal>
            ) : (
              <div className="max-w-content mx-auto text-center">
                <p className="text-body text-silver opacity-70 text-pretty max-w-[58ch] mx-auto italic">
                  {t(copy.temoignages.pendingNote)}
                </p>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 6. GALERIE / RÉTROSPECTIVE — photos + aftermovies pending ─── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.galerie.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="06" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.galerie.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.galerie.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
                {t(copy.galerie.sub)}
              </p>
            </div>

            <div className="max-w-content mx-auto flex flex-col gap-lg">
              {/* Photos placeholder grid — 6 dashed tiles preserving the layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-sm">
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <div
                    key={`gallery-tile-${idx}`}
                    aria-hidden="true"
                    className="aspect-[4/3] rounded-lg border border-dashed border-silver/15 bg-base/40 flex items-center justify-center"
                  >
                    <span className="text-eyebrow uppercase tracking-widest text-silver/30 font-display text-[10px]">
                      {locale === 'fr' ? 'Photo' : 'Photo'} {idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Aftermovie video placeholder — 1 wide tile */}
              <div
                aria-hidden="true"
                className="aspect-video rounded-lg border border-dashed border-silver/15 bg-base/40 flex items-center justify-center"
              >
                <span className="text-eyebrow uppercase tracking-widest text-silver/30 font-display text-xs">
                  {locale === 'fr'
                    ? 'Aftermovie · 60 à 90 secondes'
                    : 'Aftermovie · 60 to 90 seconds'}
                </span>
              </div>

              <p className="text-sm text-silver opacity-60 italic text-pretty text-center max-w-[58ch] mx-auto">
                {t(copy.galerie.pendingNote)}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 7. FAQ ÉVÉNEMENTS — 5 logistics items ────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.faq.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="07" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.faq.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.faq.title)}</MaskRevealHeading>
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
                  <div className="px-md pb-md text-body text-silver opacity-85 text-pretty">
                    {t(item.a)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 8. CTA FINAL — dual ──────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.finalCta.eyebrow)}
          className="relative py-2xl bg-section-elevated border-t border-silver/10"
        >
          <FiligraneNumber number="08" position="left" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(copy.finalCta.sub)}
            </p>
            <div className="mt-md flex flex-col sm:flex-row gap-sm items-center justify-center">
              <CTAPill
                variant="silver-primary"
                onClick={() => {
                  if (typeof window === 'undefined') return;
                  const target = document.getElementById('calendrier');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {t(copy.finalCta.ctaPrincipal)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
              <CTAPill
                variant="silver-secondary"
                onClick={() => {
                  if (typeof window === 'undefined') return;
                  const form = document.querySelector(
                    '[data-events-capture-form]'
                  ) as HTMLElement | null;
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    // No capture form rendered (events scheduled) — fallback to contact page
                    window.location.assign(ROUTES.contact[locale]);
                  }
                }}
              >
                {t(copy.finalCta.ctaSecondaire)}
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
