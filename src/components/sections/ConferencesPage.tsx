import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { conferencesCopy } from '@/data/copy/conferences';
import { useT } from '@/lib/i18n/useT';

/**
 * ConferencesPage — /conferences shell B2B (brief v3 nouvelle page).
 *
 * Audience corporate (comités de direction, équipes leadership).
 * Ton EXCEPTION du site : VOUS (au lieu du TU partout ailleurs).
 *
 * Sections rendues même en l'absence du kit complet de Jonas :
 *   Hero · whyInvite (3 raisons) · Formats (3 cards) · Subjects (4 topics +
 *   pending note) · Speaker (bio + pending note) · References (pending fallback)
 *   · Gallery (pending fallback) · FAQ B2B · finalCta + press kit hint
 *
 * Sections "pending: true" affichent leur structure (eyebrow + title) avec
 * un sub-message qui invite à demander le kit complet par email.
 */
export function ConferencesPage() {
  const { t, locale } = useT();
  const copy = conferencesCopy;

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[70vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            className="font-normal tracking-[-0.04em] text-[clamp(2.25rem,1.4rem+3vw,4.5rem)] leading-[1.05] max-w-[24ch]"
          >
            <span className="text-shimmer">{t(copy.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
            {t(copy.hero.sub)}
          </p>
          <div className="mt-md">
            <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
              {t(copy.hero.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>

      {/* ─── WHY INVITE — 3 levers ───────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.whyInvite.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.whyInvite.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.whyInvite.title)}</MaskRevealHeading>
            </div>
            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-3 gap-md"
              staggerMs={120}
              data-card-group="conferences-why"
            >
              {copy.whyInvite.items.map((item, idx) => (
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

      {/* ─── FORMATS — 3 cards ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.formats.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.formats.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.formats.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
                {t(copy.formats.sub)}
              </p>
            </div>
            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-3 gap-md"
              staggerMs={120}
              data-card-group="conferences-formats"
            >
              {copy.formats.items.map((item) => (
                <article
                  key={item.id}
                  className="group relative flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card hover:border-gold/30 transition-colors duration-base overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,oklch(0.74_0.085_75/0.05)_50%,transparent_70%)] bg-[length:200%_200%] bg-[position:200%_0] transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[position:-50%_0]"
                  />
                  <div className="flex items-baseline justify-between gap-sm">
                    <span className="text-eyebrow uppercase tracking-widest text-gold opacity-80 font-display text-xs">
                      {t(item.eyebrow)}
                    </span>
                    <span className="text-silver/60 font-display text-xs">{t(item.duration)}</span>
                  </div>
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

      {/* ─── SUBJECTS — 4 topic cards + pending note ─────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.subjects.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.subjects.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.subjects.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
                {t(copy.subjects.sub)}
              </p>
            </div>
            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-2 gap-md mb-md"
              staggerMs={100}
              data-card-group="conferences-subjects"
            >
              {copy.subjects.topics.map((topic) => (
                <article
                  key={topic.id}
                  className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg"
                >
                  <h3 className="text-h3 text-primary font-display text-balance leading-[1.2]">
                    {t(topic.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty">{t(topic.teaser)}</p>
                  <p className="mt-auto pt-sm text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
                    {t(topic.audience)}
                  </p>
                </article>
              ))}
            </StaggerReveal>
            <p className="text-center text-sm text-silver opacity-60 italic">
              {t(copy.subjects.pendingNote)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── SPEAKER — bio + pending note ────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.speaker.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-content mx-auto px-md">
            <article className="flex flex-col gap-sm max-w-[72ch]">
              <Eyebrow>{t(copy.speaker.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.speaker.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty whitespace-pre-line">
                {t(copy.speaker.bio)}
              </p>
              {copy.speaker.bioPending && (
                <p className="mt-sm text-sm text-silver opacity-55 italic border-l-2 border-gold/30 pl-sm py-1">
                  {t(copy.speaker.bioPendingNote)}
                </p>
              )}
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── REFERENCES — pending placeholder ────────────────────────────── */}
      {copy.references.pending && (
        <ScrollReveal>
          <section
            aria-label={t(copy.references.eyebrow)}
            className="relative py-2xl bg-section-elevated border-y border-silver/10"
          >
            <FiligraneNumber number="06" position="left" />
            <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
              <Eyebrow>{t(copy.references.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.references.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-70 text-pretty max-w-[58ch] italic">
                {t(copy.references.pendingNote)}
              </p>
              <p className="text-body text-silver opacity-85 text-pretty max-w-[58ch]">
                {t(copy.references.onRequest)}
              </p>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ─── GALLERY — pending placeholder ───────────────────────────────── */}
      {copy.gallery.pending && (
        <ScrollReveal>
          <section aria-label={t(copy.gallery.eyebrow)} className="relative py-2xl bg-section-base">
            <FiligraneNumber number="07" position="right" />
            <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
              <Eyebrow>{t(copy.gallery.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.gallery.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-70 text-pretty max-w-[58ch] italic">
                {t(copy.gallery.pendingNote)}
              </p>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ─── FAQ B2B — 5 items ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.faq.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="08" position="left" />
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

      {/* ─── FINAL CTA + press kit hint ──────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.finalCta.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="09" position="right" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[55ch]">
              {t(copy.finalCta.sub)}
            </p>
            <div className="mt-md">
              <CTAPill variant="silver-primary" href={ROUTES.contact[locale]}>
                {t(copy.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
            <p className="mt-md text-sm text-silver opacity-60 text-pretty max-w-[58ch] italic">
              {t(copy.finalCta.secondaryNote)}
            </p>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
