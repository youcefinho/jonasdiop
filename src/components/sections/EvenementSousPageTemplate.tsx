import { ArrowRight, CalendarDays, Check, MapPin, Users, X } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

/**
 * EvenementSousPageTemplate — template générique sous-page event (brief v3 §3.6).
 *
 * 10 sections requises par brief v3 §3.6 :
 *   1. Hero (eyebrow + h1 + dates + lieu + compte à rebours)
 *   2. Promesse transformation spécifique à cet event
 *   3. Programme jour par jour (timeline)
 *   4. Pour qui / pas pour qui (2 listes opposées)
 *   5. Ce qui est inclus (sessions, repas, hébergement, matériel, accès post)
 *   6. Le lieu (photos placeholder, accès, parking, navette)
 *   7. Témoignages édition précédente (filter sur cet eventType)
 *   8. Investissement (prix + options paiement)
 *   9. Places restantes (rareté, sécurise la place)
 *  10. FAQ logistique spécifique à cet event
 *  11. CTA final + récap court (Réserver ma place + récap dates/lieu/prix)
 *
 * Tone : TU (audience entrepreneurs). DA Platinum Executive Authority.
 *
 * Pattern : composant pur recevant `event` typé. Routes futures importent ce
 * template avec leur data. Permet de générer N sous-pages event sans dupliquer
 * de structure (1 source de vérité visuelle).
 *
 * Mode `pending: true` au niveau event-level : si pas de data, rend la
 * structure complète avec placeholders sobres. Mode normal sinon.
 */

export interface SousPageEventData {
  readonly meta: {
    readonly title: BilingualLax<string>;
    readonly description: BilingualLax<string>;
  };
  /** SECTION 1 — Hero */
  readonly hero: {
    readonly eyebrow: BilingualLax<string>;
    readonly h1: BilingualLax<string>;
    readonly dates: BilingualLax<string>;
    readonly location: BilingualLax<string>;
    /** ISO 8601 date for countdown (e.g. '2026-11-15T09:00:00-05:00') — optional */
    readonly startDateIso?: string;
    readonly countdownLabel: BilingualLax<string>;
  };
  /** SECTION 2 — Promesse transformation */
  readonly promesse: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly body: BilingualLax<string>;
  };
  /** SECTION 3 — Programme jour par jour (timeline) */
  readonly programme: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly days: readonly {
      readonly id: string;
      readonly label: BilingualLax<string>;
      readonly title: BilingualLax<string>;
      readonly body: BilingualLax<string>;
    }[];
  };
  /** SECTION 4 — Pour qui / pas pour qui */
  readonly pourQui: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly forItems: readonly BilingualLax<string>[];
    readonly againstItems: readonly BilingualLax<string>[];
  };
  /** SECTION 5 — Ce qui est inclus */
  readonly inclus: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly items: readonly {
      readonly id: string;
      readonly title: BilingualLax<string>;
      readonly body: BilingualLax<string>;
    }[];
  };
  /** SECTION 6 — Le lieu */
  readonly lieu: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly description: BilingualLax<string>;
    readonly access: BilingualLax<string>;
    readonly photosPending: boolean;
    readonly photosPendingNote: BilingualLax<string>;
  };
  /** SECTION 7 — Témoignages édition précédente */
  readonly temoignages: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly pending: boolean;
    readonly pendingNote: BilingualLax<string>;
    readonly items: readonly {
      readonly id: string;
      readonly name: string;
      readonly role: BilingualLax<string>;
      readonly quote: BilingualLax<string>;
    }[];
  };
  /** SECTION 8 — Investissement */
  readonly investissement: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly price: BilingualLax<string>;
    readonly priceNote: BilingualLax<string>;
    readonly paymentOptions: readonly BilingualLax<string>[];
  };
  /** SECTION 9 — Places restantes (rareté) */
  readonly places: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly spotsLeft: BilingualLax<string>;
    readonly urgencyNote: BilingualLax<string>;
  };
  /** SECTION 10 — FAQ logistique */
  readonly faq: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly items: readonly {
      readonly id: string;
      readonly q: BilingualLax<string>;
      readonly a: BilingualLax<string>;
    }[];
  };
  /** SECTION 11 — CTA final + récap */
  readonly finalCta: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly sub: BilingualLax<string>;
    readonly ctaLabel: BilingualLax<string>;
    readonly recap: {
      readonly date: BilingualLax<string>;
      readonly location: BilingualLax<string>;
      readonly price: BilingualLax<string>;
      readonly spotsLeft: BilingualLax<string>;
    };
  };
}

interface EvenementSousPageTemplateProps {
  readonly event: SousPageEventData;
}

export function EvenementSousPageTemplate({ event }: EvenementSousPageTemplateProps) {
  const { t, locale } = useT();

  return (
    <>
      {/* ─── 1. HERO — dates + lieu + countdown ─────────────────────────── */}
      <section
        aria-label={t(event.hero.eyebrow)}
        className="relative min-h-[70vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(event.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            className="font-normal tracking-[-0.04em] text-[clamp(2.25rem,1.4rem+3vw,4.5rem)] leading-[1.05] max-w-[26ch]"
          >
            <span className="text-shimmer">{t(event.hero.h1)}</span>
          </MaskRevealHeading>

          <dl className="flex flex-col sm:flex-row gap-md mt-sm">
            <div className="flex items-center gap-2">
              <CalendarDays
                className="h-4 w-4 max-w-none shrink-0 text-gold/80"
                aria-hidden="true"
              />
              <dt className="sr-only">{locale === 'fr' ? 'Dates' : 'Dates'}</dt>
              <dd className="text-body text-primary font-display font-medium">
                {t(event.hero.dates)}
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
              <dt className="sr-only">{locale === 'fr' ? 'Lieu' : 'Location'}</dt>
              <dd className="text-body text-primary font-display font-medium">
                {t(event.hero.location)}
              </dd>
            </div>
          </dl>

          {event.hero.startDateIso ? (
            <p className="mt-sm text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
              {t(event.hero.countdownLabel)}
              {' · '}
              <time dateTime={event.hero.startDateIso}>{t(event.hero.dates)}</time>
            </p>
          ) : null}

          <div className="mt-md">
            <CTAPill
              variant="gold-primary"
              onClick={() => {
                if (typeof window === 'undefined') return;
                const target = document.getElementById('event-final-cta');
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {locale === 'fr' ? 'Réserver ma place' : 'Book my spot'}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>

      {/* ─── 2. PROMESSE TRANSFORMATION ──────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(event.promesse.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-content mx-auto px-md flex flex-col gap-md">
            <Eyebrow>{t(event.promesse.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(event.promesse.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[65ch] whitespace-pre-line">
              {t(event.promesse.body)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 3. PROGRAMME JOUR PAR JOUR — timeline ──────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(event.programme.eyebrow)}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(event.programme.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(event.programme.title)}</MaskRevealHeading>
            </div>

            <ol className="max-w-[80ch] mx-auto relative border-l border-gold/20 pl-md flex flex-col gap-md">
              {event.programme.days.map((day, idx) => (
                <li key={day.id} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[calc(0.75rem+1px)] top-1 h-3 w-3 rounded-full bg-gold/80 ring-4 ring-base"
                  />
                  <article className="flex flex-col gap-sm">
                    <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                      {t(day.label)} · {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-h3 text-primary font-display text-balance">
                      {t(day.title)}
                    </h3>
                    <p className="text-body text-silver opacity-80 text-pretty">{t(day.body)}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 4. POUR QUI / PAS POUR QUI ─────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(event.pourQui.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(event.pourQui.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(event.pourQui.title)}</MaskRevealHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-content mx-auto">
              <div className="flex flex-col gap-sm p-md bg-base border-l-2 border-gold/40 rounded-r-lg">
                <h3 className="text-h3 text-primary font-display text-balance">
                  {locale === 'fr' ? 'Pour toi si' : 'For you if'}
                </h3>
                <ul className="flex flex-col gap-2 mt-sm">
                  {event.pourQui.forItems.map((item) => (
                    <li
                      key={`for-${t(item).slice(0, 24)}`}
                      className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty"
                    >
                      <Check
                        className="h-4 w-4 max-w-none shrink-0 mt-1 text-gold/80"
                        aria-hidden="true"
                      />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-sm p-md bg-base border-l-2 border-silver/20 rounded-r-lg">
                <h3 className="text-h3 text-primary font-display text-balance">
                  {locale === 'fr' ? 'Pas pour toi si' : 'Not for you if'}
                </h3>
                <ul className="flex flex-col gap-2 mt-sm">
                  {event.pourQui.againstItems.map((item) => (
                    <li
                      key={`against-${t(item).slice(0, 24)}`}
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
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. CE QUI EST INCLUS ───────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(event.inclus.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(event.inclus.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(event.inclus.title)}</MaskRevealHeading>
            </div>
            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
              staggerMs={100}
              data-card-group="event-inclus"
            >
              {event.inclus.items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                >
                  <Check className="h-5 w-5 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
                  <h3 className="text-h3 text-primary font-display text-balance text-[1.125rem] leading-[1.3]">
                    {t(item.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty">{t(item.body)}</p>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 6. LE LIEU ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(event.lieu.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="06" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(event.lieu.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(event.lieu.title)}</MaskRevealHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-default mx-auto">
              <div className="flex flex-col gap-md">
                <p className="text-body text-silver opacity-85 text-pretty">
                  {t(event.lieu.description)}
                </p>
                <p className="text-body text-silver opacity-75 text-pretty">
                  <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs block mb-1">
                    {locale === 'fr' ? 'Accès' : 'Access'}
                  </span>
                  {t(event.lieu.access)}
                </p>
              </div>

              <div className="flex flex-col gap-sm">
                <div className="grid grid-cols-2 gap-sm">
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={`venue-tile-${idx}`}
                      aria-hidden="true"
                      className="aspect-[4/3] rounded-lg border border-dashed border-silver/15 bg-base/40 flex items-center justify-center"
                    >
                      <span className="text-eyebrow uppercase tracking-widest text-silver/30 font-display text-[10px]">
                        {locale === 'fr' ? 'Photo lieu' : 'Venue photo'} {idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
                {event.lieu.photosPending ? (
                  <p className="text-sm text-silver opacity-60 italic text-pretty">
                    {t(event.lieu.photosPendingNote)}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 7. TÉMOIGNAGES ÉDITION PRÉCÉDENTE ──────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(event.temoignages.eyebrow)}
          className="relative py-2xl bg-section-base"
        >
          <FiligraneNumber number="07" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(event.temoignages.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(event.temoignages.title)}</MaskRevealHeading>
            </div>

            {event.temoignages.items.length > 0 ? (
              <StaggerReveal
                as="div"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
                staggerMs={100}
                data-card-group="event-temoignages"
              >
                {event.temoignages.items.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                  >
                    <p className="text-body text-primary text-pretty italic font-display leading-[1.4]">
                      “{t(item.quote)}”
                    </p>
                    <div className="mt-auto pt-sm border-t border-silver/10">
                      <span className="text-body text-primary font-display font-medium block">
                        {item.name}
                      </span>
                      <span className="text-sm text-silver opacity-70">{t(item.role)}</span>
                    </div>
                  </article>
                ))}
              </StaggerReveal>
            ) : event.temoignages.pending ? (
              <p className="max-w-content mx-auto text-center text-body text-silver opacity-70 text-pretty max-w-[58ch] italic">
                {t(event.temoignages.pendingNote)}
              </p>
            ) : null}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 8. INVESTISSEMENT ──────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(event.investissement.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="08" position="left" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(event.investissement.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(event.investissement.title)}</MaskRevealHeading>

            <p className="text-[clamp(2.5rem,1.5rem+3vw,4rem)] text-primary font-display font-normal tracking-[-0.04em] mt-md">
              {t(event.investissement.price)}
            </p>
            <p className="text-sm text-silver opacity-65 italic text-pretty max-w-[55ch]">
              {t(event.investissement.priceNote)}
            </p>

            <ul className="mt-md flex flex-col gap-2 max-w-[55ch] mx-auto text-left">
              {event.investissement.paymentOptions.map((option) => (
                <li
                  key={`pay-${t(option).slice(0, 24)}`}
                  className="flex items-start gap-2 text-body text-silver opacity-85 text-pretty"
                >
                  <Check
                    className="h-4 w-4 max-w-none shrink-0 mt-1 text-gold/80"
                    aria-hidden="true"
                  />
                  <span>{t(option)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 9. PLACES RESTANTES — rareté ───────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(event.places.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="09" position="right" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(event.places.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(event.places.title)}</MaskRevealHeading>

            <div className="mt-md flex items-center gap-3 px-md py-sm rounded-pill border border-gold/40 bg-base">
              <Users className="h-5 w-5 max-w-none shrink-0 text-gold/80" aria-hidden="true" />
              <span className="text-body text-primary font-display font-medium">
                {t(event.places.spotsLeft)}
              </span>
            </div>

            <p className="text-body text-silver opacity-75 text-pretty max-w-[58ch] italic">
              {t(event.places.urgencyNote)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 10. FAQ LOGISTIQUE ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(event.faq.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="10" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(event.faq.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(event.faq.title)}</MaskRevealHeading>
            </div>
            <div className="max-w-[80ch] mx-auto flex flex-col gap-2">
              {event.faq.items.map((item) => (
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

      {/* ─── 11. CTA FINAL + récap court ────────────────────────────────── */}
      <ScrollReveal>
        <section
          id="event-final-cta"
          aria-label={t(event.finalCta.eyebrow)}
          className="relative scroll-mt-[80px] py-2xl bg-section-base"
        >
          <FiligraneNumber number="11" position="right" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(event.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(event.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(event.finalCta.sub)}
            </p>

            <dl className="mt-md flex flex-col sm:flex-row gap-md sm:gap-lg flex-wrap justify-center text-left">
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                  {locale === 'fr' ? 'Date' : 'Date'}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(event.finalCta.recap.date)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                  {locale === 'fr' ? 'Lieu' : 'Location'}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(event.finalCta.recap.location)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                  {locale === 'fr' ? 'Investissement' : 'Investment'}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(event.finalCta.recap.price)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
                  {locale === 'fr' ? 'Places' : 'Spots'}
                </dt>
                <dd className="text-body text-primary font-display font-medium">
                  {t(event.finalCta.recap.spotsLeft)}
                </dd>
              </div>
            </dl>

            <div className="mt-md flex flex-col sm:flex-row gap-sm items-center justify-center">
              <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
                {t(event.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
              <CTAPill variant="silver-secondary" href={ROUTES.evenements[locale]}>
                {locale === 'fr' ? 'Voir tous les événements' : 'See all events'}
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
