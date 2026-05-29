import { ArrowRight, Check, Play, X } from 'lucide-react';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES, type RouteKey } from '@/config/routes';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';
import { FaqSchemaScript, SchemaScript } from '@/lib/seo/SchemaScript';

// ---------------------------------------------------------------------------
// Types — shaped to match actual copy file structure (services-*.ts)
// ---------------------------------------------------------------------------

interface LPMeta {
  title: BilingualLax<string>;
  description: BilingualLax<string>;
}

interface LPHero {
  eyebrow: BilingualLax<string>;
  h1: BilingualLax<string>;
  sub: BilingualLax<string>;
  badge?: BilingualLax<string>;
  /**
   * Optional VSL embed URL (iframe src). When absent, a dark placeholder with
   * play icon + "VSL bientôt disponible" copy renders instead. Bilingual to
   * allow distinct FR/EN videos (e.g. Cloudflare Stream / Vimeo Plus / YouTube
   * unlisted) — Jonas hosting platform decision pending (Sprint 2.6).
   */
  videoEmbedUrl?: BilingualLax<string>;
}

interface LPPromise {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  body: BilingualLax<string>;
}

interface LPForWho {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  qualif: ReadonlyArray<BilingualLax<string>>;
  /** Optional — some programs (trainings) only define positive qualif criteria */
  disqualif?: ReadonlyArray<BilingualLax<string>>;
}

interface LPModuleItem {
  id?: string;
  /** Week label for group programs (e.g. "Semaines 1-2"). Absent for self-paced training modules. */
  weeks?: BilingualLax<string>;
  /** Module number for self-paced trainings (e.g. "01"). Absent for group program week-based modules. */
  number?: string;
  title: BilingualLax<string>;
  body: BilingualLax<string>;
}

interface LPModules {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  items: ReadonlyArray<LPModuleItem>;
}

interface LPFormatDetail {
  label: BilingualLax<string>;
  value: BilingualLax<string>;
}

interface LPFormat {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  details: ReadonlyArray<LPFormatDetail>;
}

interface LPMilestone {
  timeframe: BilingualLax<string>;
  label: BilingualLax<string>;
}

interface LPResults {
  eyebrow: BilingualLax<string>;
  /** Optional — some programs use a simple bullet list (items[]) instead of a milestone timeline */
  title?: BilingualLax<string>;
  disclaimer: BilingualLax<string>;
  /** Timeline milestones for group programs (e.g. Gamechanger Scaling "Semaine 2: ...") */
  milestones?: ReadonlyArray<LPMilestone>;
  /** Simple bullet list for training programs (e.g. Focus & Flow) — rendered as plain list */
  items?: ReadonlyArray<BilingualLax<string>>;
}

interface LPFaqItem {
  id?: string;
  question: BilingualLax<string>;
  answer: BilingualLax<string>;
}

interface LPFaq {
  title: BilingualLax<string>;
  items: ReadonlyArray<LPFaqItem>;
}

interface LPFinalCta {
  eyebrow: BilingualLax<string>;
  title: BilingualLax<string>;
  sub: BilingualLax<string>;
  ctaLabel: BilingualLax<string>;
}

/**
 * LPCopy — full structure matching services-*.ts copy files.
 * Required: hero, finalCta.
 * Optional: meta, promise, forWho, modules, format, results, faq.
 * Training-format LPs (Master Closing, Focus & Flow, Cash & Scale) may omit faq.
 * Consulting LPs (Consultations Privées) use a separate custom layout component.
 */
export interface LPCopy {
  meta?: LPMeta;
  hero: LPHero;
  promise?: LPPromise;
  forWho?: LPForWho;
  modules?: LPModules;
  format?: LPFormat;
  results?: LPResults;
  faq?: LPFaq;
  finalCta: LPFinalCta;
}

interface LPProgramTemplateProps {
  copy: LPCopy;
  /** CTA variant — default gold-primary (postuler/réserver appel) */
  ctaVariant?: 'gold-primary' | 'silver-secondary';
  /**
   * RouteKey identifying which programme route this template renders for.
   * Used to anchor Schema.org @id values (Service node + FAQPage node +
   * WebPage node) to the canonical route URL so multiple LP schemas across
   * the site never collide in Google's index. Required — every call site
   * must declare which programme route is being rendered.
   */
  routeKey: RouteKey;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * LPProgramTemplate — Reusable landing page template for 6 Jonas Diop programmes.
 *
 * Sections:
 *   Hero → Promise (opt) → Qualification Split → Modules → Format → Results (opt) → FAQ → Final CTA
 *
 * Design DA: Platinum Executive Authority — dark luxe silver primary, gold rare (7 strict usages).
 * Qualification split = signature "Pour vous / Pas pour vous" Dan Martell pattern.
 * Modules grid 3-col desktop / 2-col tablet / 1-col mobile, gold number filigrane.
 * Format = dl/dt/dd with gold border-l.
 * FAQ = native <details>/<summary> with animated + → ×.
 * Dual CTA gold-primary (Hero + Final CTA).
 */
export function LPProgramTemplate({
  copy,
  ctaVariant = 'gold-primary',
  routeKey
}: LPProgramTemplateProps) {
  const { t, locale } = useT();
  const videoEmbedUrl = copy.hero.videoEmbedUrl ? t(copy.hero.videoEmbedUrl).trim() : '';
  const hasVideo = videoEmbedUrl.length > 0;

  // ── Schema.org wiring — Service + WebPage (always) + FAQPage (when copy.faq)
  // The convenience `FaqSchemaScript` wrapper mounts under a separate DOM id
  // (`schema-org-faq-<routeKey>`) so it composes cleanly with the route-level
  // graph (`schema-org-route`) — both crawled by Googlebot.
  const programmeName = t(copy.hero.h1);
  const programmeDescription = copy.meta ? t(copy.meta.description) : t(copy.hero.sub);
  const webPageName = copy.meta ? t(copy.meta.title) : programmeName;
  const faqItems = copy.faq
    ? copy.faq.items.map((item) => ({
        question: t(item.question),
        answer: t(item.answer)
      }))
    : null;

  return (
    <>
      <SchemaScript
        locale={locale}
        id={`schema-org-route-${routeKey}`}
        options={{
          webPage: {
            routeKey,
            name: webPageName,
            description: programmeDescription
          }
        }}
      />
      {faqItems && faqItems.length > 0 && (
        <FaqSchemaScript locale={locale} items={faqItems} routeKey={routeKey} />
      )}
      <Navbar />
      <main className="pt-[80px]">
        {/* ---------------------------------------------------------------- */}
        {/* HERO — Brief v3 §3.4 Section 1 : HOOK + VSL                      */}
        {/* H1 (douleur/aspiration) → sub → VSL (embed ou placeholder)       */}
        {/* → CTA "Réserver mon appel stratégique" → ligne de réassurance    */}
        {/* ---------------------------------------------------------------- */}
        <section
          aria-label={t(copy.hero.eyebrow)}
          className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
        >
          <div className="flex flex-col items-center gap-md max-w-content mx-auto">
            <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>

            <MaskRevealHeading as="h1">{t(copy.hero.h1)}</MaskRevealHeading>

            <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
              {t(copy.hero.sub)}
            </p>

            {copy.hero.badge && (
              <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-sm">
                {t(copy.hero.badge)}
              </p>
            )}

            {/* ------------------------------------------------------------ */}
            {/* VSL — Brief v3 §3.4 Section 1                                */}
            {/* If videoEmbedUrl present : 16:9 iframe (autoplay muted, ctls)*/}
            {/* Else : dark placeholder w/ play icon + "bientôt disponible"  */}
            {/* ------------------------------------------------------------ */}
            <div className="mt-lg w-full max-w-[clamp(20rem,90vw,52rem)]">
              <div
                data-vsl-embed
                className="relative aspect-video overflow-hidden rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)] border border-silver/15 bg-elevated shadow-haptic-card"
              >
                {hasVideo ? (
                  <iframe
                    src={videoEmbedUrl}
                    title={t({
                      fr: `Vidéo de présentation — ${t(copy.hero.h1)}`,
                      en: `Presentation video — ${t(copy.hero.h1)}`
                    })}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div
                    data-vsl-placeholder
                    role="img"
                    aria-label={t({
                      fr: 'Vidéo bientôt disponible',
                      en: 'Video coming soon'
                    })}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-sm bg-[radial-gradient(ellipse_at_center,_oklch(0.22_0.005_80)_0%,_oklch(0.14_0.005_80)_100%)]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-[clamp(3.5rem,5vw+1rem,5.5rem)] w-[clamp(3.5rem,5vw+1rem,5.5rem)] items-center justify-center rounded-full border border-gold/30 bg-base/40 backdrop-blur-sm"
                    >
                      <Play className="h-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)] w-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)] max-w-none shrink-0 fill-gold/70 text-gold/70 ml-1" />
                    </span>
                    <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                      {t({ fr: 'VSL bientôt disponible', en: 'VSL coming soon' })}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-md">
              <CTAPill variant={ctaVariant} href={ROUTES.contact[locale]}>
                {t(copy.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>

            {/* Ligne de réassurance — Brief v3 §3.4 Section 1 */}
            <p className="text-sm text-silver/60 text-pretty">
              {t({
                fr: 'Appel gratuit · 30 min · aucune obligation',
                en: 'Free call · 30 min · no obligation'
              })}
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PROMISE (optional)                                               */}
        {/* ---------------------------------------------------------------- */}
        {copy.promise && (
          <ScrollReveal>
            <section
              aria-label={t(copy.promise.eyebrow)}
              className="py-2xl bg-elevated border-y border-silver/10"
            >
              <div className="max-w-content mx-auto px-md flex flex-col gap-lg">
                <div className="flex flex-col gap-sm">
                  <Eyebrow>{t(copy.promise.eyebrow)}</Eyebrow>
                  <MaskRevealHeading as="h2">{t(copy.promise.title)}</MaskRevealHeading>
                </div>
                <div className="max-w-[65ch]">
                  {t(copy.promise.body)
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
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* QUALIFICATION SPLIT — signature Dan Martell pattern              */}
        {/* Pour vous ✓ gold  |  Pas pour vous × silver-dim                 */}
        {/* Renders only when copy.forWho is present                        */}
        {/* ---------------------------------------------------------------- */}
        {copy.forWho && (
          <ScrollReveal>
            <section
              aria-label={t({ fr: 'Critères de qualification', en: 'Qualification criteria' })}
              className="py-2xl bg-base"
            >
              <div
                className={`max-w-default mx-auto px-md grid grid-cols-1 gap-xl ${copy.forWho.disqualif ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-content'}`}
              >
                {/* Pour vous */}
                <div className="flex flex-col gap-sm">
                  <Eyebrow>{t(copy.forWho.eyebrow)}</Eyebrow>
                  <h2 className="text-h3 text-primary font-display text-balance">
                    {t(copy.forWho.title)}
                  </h2>
                  <ul className="flex flex-col gap-sm mt-md" aria-label={t(copy.forWho.eyebrow)}>
                    {copy.forWho.qualif.map((item) => (
                      <li
                        key={item.fr.slice(0, 40)}
                        className="flex items-start gap-3 text-body text-silver"
                      >
                        <span
                          data-qualif-check
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

                {/* Pas pour toi — only renders when disqualif list exists */}
                {copy.forWho.disqualif && (
                  <div className="flex flex-col gap-sm">
                    <Eyebrow goldDot={false}>
                      {t({ fr: 'Pas pour toi si...', en: 'Not for you if...' })}
                    </Eyebrow>
                    <h2 className="text-h3 text-primary font-display text-balance">
                      {t({
                        fr: "Ce n'est pas pour toi si tu...",
                        en: "This isn't for you if you..."
                      })}
                    </h2>
                    <ul
                      className="flex flex-col gap-sm mt-md"
                      aria-label={t({ fr: 'Pas pour toi si...', en: 'Not for you if...' })}
                    >
                      {copy.forWho.disqualif.map((item) => (
                        <li
                          key={item.fr.slice(0, 40)}
                          className="flex items-start gap-3 text-body text-silver opacity-60"
                        >
                          <span
                            data-disqualif-x
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
                )}
              </div>

              {/* Honnêteté radicale disclaimer — signature Jonas */}
              <p className="text-sm text-silver/50 text-center mt-xl max-w-content mx-auto px-md text-pretty">
                {t({
                  fr: "Honnêteté radicale. Si tu n'es pas un bon fit, on te le dira.",
                  en: "Radical honesty. If you're not a good fit, we'll tell you."
                })}
              </p>
            </section>
          </ScrollReveal>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* MODULES — 6 piliers / 3-col desktop grid                        */}
        {/* Renders only when copy.modules is present                       */}
        {/* ---------------------------------------------------------------- */}
        {copy.modules && (
          <ScrollReveal>
            <section
              aria-label={t(copy.modules.eyebrow)}
              className="relative py-2xl bg-section-elevated border-y border-silver/10"
            >
              <FiligraneNumber number="03" position="right" />
              <div className="relative max-w-default mx-auto px-md">
                <div className="text-center flex flex-col items-center gap-sm mb-xl">
                  <Eyebrow>{t(copy.modules.eyebrow)}</Eyebrow>
                  <MaskRevealHeading as="h2">{t(copy.modules.title)}</MaskRevealHeading>
                </div>

                {/* Stitch board 03 curriculum pattern : stacked full-width cards
                    (vertical list, not grid). Each card horizontal :
                    - Large gold filigrane number (col-span-2)
                    - Eyebrow weeks + title + body (col-span-10)
                    Hover : subtle gold border-left accent + scale.
                    Mobile : stacks vertically inside each card.
                    StaggerReveal wraps the <ol> with per-item fade-up. */}
                <StaggerReveal as="ol" className="flex flex-col gap-md" staggerMs={100}>
                  {copy.modules.items.map((module, idx) => (
                    <li key={module.id ?? idx} className="list-none">
                      <article
                        data-module-card
                        className={[
                          'group relative grid grid-cols-1 md:grid-cols-12 gap-md items-center',
                          'px-lg py-md bg-base border border-silver/15 rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)]',
                          'hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base hover:border-gold/30'
                        ].join(' ')}
                      >
                        {/* Gold filigrane number — large, left col */}
                        <div className="md:col-span-2 flex items-center md:justify-center">
                          <span
                            aria-hidden="true"
                            className="text-[clamp(3rem,2.5rem+2.5vw,5rem)] font-display font-bold leading-none tracking-tight select-none text-gold/25 group-hover:text-gold/40 transition-colors duration-base"
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Content — right col */}
                        <div className="md:col-span-10 flex flex-col gap-sm">
                          {module.weeks && (
                            <div className="flex items-center gap-sm">
                              <span
                                aria-hidden="true"
                                className="inline-block h-1 w-1 rounded-full bg-gold"
                              />
                              <p className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                                {t(module.weeks)}
                              </p>
                            </div>
                          )}

                          <h3 className="text-h3 text-primary font-display text-balance leading-[1.15]">
                            {t(module.title)}
                          </h3>

                          <p className="text-body text-silver opacity-75 text-pretty max-w-[72ch]">
                            {t(module.body)}
                          </p>
                        </div>
                      </article>
                    </li>
                  ))}
                </StaggerReveal>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FORMAT — dl/dt/dd with gold border-l                            */}
        {/* Renders only when copy.format is present                        */}
        {/* ---------------------------------------------------------------- */}
        {copy.format && (
          <ScrollReveal>
            <section aria-label={t(copy.format.eyebrow)} className="py-2xl bg-section-base">
              <div className="max-w-default mx-auto px-md">
                <div className="text-center flex flex-col items-center gap-sm mb-xl">
                  <Eyebrow>{t(copy.format.eyebrow)}</Eyebrow>
                  <MaskRevealHeading as="h2">{t(copy.format.title)}</MaskRevealHeading>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md max-w-default mx-auto">
                  {copy.format.details.map((detail) => (
                    <div
                      key={detail.label.fr}
                      className="flex flex-col gap-2 p-md border-l-2 border-gold/30 bg-elevated rounded-r-lg"
                    >
                      <dt className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                        {t(detail.label)}
                      </dt>
                      <dd className="text-body text-primary font-display font-medium">
                        {t(detail.value)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* RESULTS (optional) — milestone timeline                         */}
        {/* ---------------------------------------------------------------- */}
        {copy.results && (
          <ScrollReveal>
            <section
              aria-label={t(copy.results.eyebrow)}
              className="py-2xl bg-section-elevated border-y border-silver/10"
            >
              <div className="max-w-content mx-auto px-md">
                <div className="text-center flex flex-col items-center gap-sm mb-xl">
                  <Eyebrow>{t(copy.results.eyebrow)}</Eyebrow>
                  {copy.results.title && (
                    <MaskRevealHeading as="h2">{t(copy.results.title)}</MaskRevealHeading>
                  )}
                </div>

                {/* Milestone timeline — for group programs */}
                {copy.results.milestones && (
                  <ol className="flex flex-col gap-sm" aria-label={t(copy.results.eyebrow)}>
                    {copy.results.milestones.map((milestone) => (
                      <li
                        key={milestone.timeframe.fr}
                        className="flex items-start gap-md p-md bg-base border border-silver/15 rounded-lg hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base"
                      >
                        <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs shrink-0 pt-0.5 min-w-[5rem]">
                          {t(milestone.timeframe)}
                        </span>
                        <p className="text-body text-silver opacity-80 text-pretty">
                          {t(milestone.label)}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}

                {/* Bullet list — for training programs (e.g. Focus & Flow) */}
                {copy.results.items && (
                  <ul className="flex flex-col gap-sm" aria-label={t(copy.results.eyebrow)}>
                    {copy.results.items.map((item) => (
                      <li
                        key={item.fr.slice(0, 40)}
                        className="flex items-start gap-3 p-md bg-base border border-silver/15 rounded-lg text-body text-silver opacity-80 hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base"
                      >
                        <span aria-hidden="true" className="mt-0.5 text-gold/60 shrink-0">
                          ✦
                        </span>
                        <span className="text-pretty">{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-xs text-silver/40 text-center mt-lg text-pretty">
                  {t(copy.results.disclaimer)}
                </p>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FAQ — native <details> accordion                                 */}
        {/* Renders only when copy.faq is present                           */}
        {/* ---------------------------------------------------------------- */}
        {copy.faq && (
          <ScrollReveal>
            <section aria-label={t(copy.faq.title)} className="py-2xl bg-section-base">
              <div className="max-w-content mx-auto px-md">
                <div className="text-center flex flex-col items-center gap-sm mb-xl">
                  <MaskRevealHeading as="h2">{t(copy.faq.title)}</MaskRevealHeading>
                </div>

                <StaggerReveal className="flex flex-col gap-sm" staggerMs={90}>
                  {copy.faq.items.map((item, idx) => (
                    <details
                      key={item.id ?? idx}
                      className="group p-md bg-elevated border border-silver/15 rounded-lg"
                    >
                      <summary className="cursor-pointer flex items-center justify-between gap-sm text-body text-primary font-display font-medium list-none [&::-webkit-details-marker]:hidden">
                        <span className="text-pretty">{t(item.question)}</span>
                        <span
                          aria-hidden="true"
                          className="text-gold text-xl font-bold shrink-0 transition-transform duration-base group-open:rotate-45 select-none"
                        >
                          +
                        </span>
                      </summary>
                      <p className="text-body text-silver opacity-75 text-pretty mt-md">
                        {t(item.answer)}
                      </p>
                    </details>
                  ))}
                </StaggerReveal>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FINAL CTA                                                        */}
        {/* ---------------------------------------------------------------- */}
        <ScrollReveal>
          <section
            aria-label={t(copy.finalCta.eyebrow)}
            className="py-2xl bg-section-elevated border-t border-silver/10"
          >
            <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
              <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>

              <MaskRevealHeading as="h2">{t(copy.finalCta.title)}</MaskRevealHeading>

              <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
                {t(copy.finalCta.sub)}
              </p>

              <div className="mt-md">
                <CTAPill variant={ctaVariant} href={ROUTES.contact[locale]}>
                  {t(copy.finalCta.ctaLabel)}
                  <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                </CTAPill>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <FooterRich />
    </>
  );
}
