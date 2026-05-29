import { ArrowRight, BookOpen, Download, FileText, Mail, Star, Video } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { livreCopy } from '@/data/copy/livre';
import { useT } from '@/lib/i18n/useT';

/**
 * Markers I→IV pour les bénéfices "pourquoi ce livre" — évite la collision
 * avec les numéros de chapitres (01→07) que tests LivrePage attendent uniques
 * via screen.getByText(num). Roman numerals = pattern editorial sobre.
 */
const ROMAN_MARKERS = ['I', 'II', 'III', 'IV', 'V', 'VI'] as const;

/**
 * LivrePage — composite landing page for /livre (FR) and /en/book.
 *
 * Brief v3 §3.7 — 9 sections requises :
 *  1. HERO (visuel 3D + 2 CTAs)
 *  2. POURQUOI CE LIVRE (promesse + 4 bénéfices + citation forte)
 *  3. APERÇU DU CONTENU (7 chapitres + extraits visuels)
 *  4. POUR QUI (audience + pré-requis)
 *  5. TÉMOIGNAGES LECTEURS (pending — pattern conférences)
 *  6. OPTIONS D'ACHAT (formats + packs)
 *  7. BONUS GRATUITS (lead magnet form mockup)
 *  8. AUTRES LIVRES (pending — bibliothèque vide pour l'instant)
 *  9. CTA FINAL ("Commande ton exemplaire" + 2 CTAs)
 *
 * Tone : TU partout (audience entrepreneurs).
 * DA Platinum Executive Authority. Form action="#" disabled (Sprint 6 GHL wire).
 * Liens d'achat = "#" disabled jusqu'à édition.
 */
export function LivrePage() {
  const { t } = useT();
  const copy = livreCopy;

  const scrollToBonusForm = () => {
    if (typeof window !== 'undefined') {
      const form = document.querySelector('[data-waitlist-form]') as HTMLElement | null;
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const bonusIcons = [FileText, Download, Video] as const;

  return (
    <>
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[70vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <div className="relative max-w-default mx-auto w-full px-md grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          {/* ── Visuel 3D mockup ── */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              aria-hidden="true"
              className={[
                'relative aspect-[3/4] w-full max-w-[320px] rounded-[clamp(0.5rem,0.5vw+0.3rem,1rem)]',
                'bg-gradient-to-br from-elevated via-base to-elevated',
                'border border-silver/15 ring-1 ring-gold/10',
                'shadow-haptic-focal',
                'flex flex-col items-center justify-center gap-md p-md',
                'rotate-[-2deg] hover:rotate-0 transition-transform duration-base'
              ].join(' ')}
            >
              <BookOpen aria-hidden="true" className="h-14 w-14 max-w-none text-gold/60 stroke-1" />
              <span className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px] text-center">
                {t(copy.hero.visuel3DDescription)}
              </span>
              <span className="text-gold font-display text-2xl tracking-tight text-center text-balance leading-tight whitespace-pre-line">
                {t(copy.hero.visuel3DTeaser)}
              </span>
              <span className="text-eyebrow uppercase tracking-widest text-silver/50 font-display text-[9px] mt-sm">
                {t(copy.hero.multiFormatLabel)}
              </span>
            </div>
          </div>

          {/* ── Content + dual CTA ── */}
          <div className="lg:col-span-7 flex flex-col items-start gap-md">
            <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
            <MaskRevealHeading
              as="h1"
              className="font-normal tracking-[-0.04em] text-[clamp(2.25rem,1.4rem+3vw,4.5rem)] leading-[1.05] max-w-[22ch]"
            >
              <span className="text-shimmer">{t(copy.hero.h1)}</span>
            </MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(copy.hero.sub)}
            </p>
            <div className="mt-md flex flex-col sm:flex-row gap-sm items-start">
              <CTAPill variant="gold-primary" onClick={scrollToBonusForm}>
                {t(copy.hero.ctaAcheter)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
              <CTAPill variant="silver-outline" onClick={scrollToBonusForm}>
                {t(copy.hero.ctaChapitreGratuit)}
                <Download className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
            <p className="text-eyebrow uppercase tracking-widest text-silver/55 font-display text-[10px] mt-1">
              {t(copy.hero.ctaAcheterDisabledNote)}
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. POURQUOI CE LIVRE ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.pourquoi.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="flex flex-col gap-sm max-w-content">
              <Eyebrow>{t(copy.pourquoi.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.pourquoi.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
                {t(copy.pourquoi.intro)}
              </p>
            </div>

            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-2 gap-md"
              staggerMs={100}
              data-card-group="livre-benefices"
            >
              {copy.pourquoi.beneficesItems.map((item, idx) => (
                <article
                  key={item.id}
                  className="group relative flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card hover:border-gold/30 transition-colors duration-base overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="text-gold font-display text-eyebrow uppercase tracking-widest text-xs opacity-80"
                  >
                    {ROMAN_MARKERS[idx] ?? '·'}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance">
                    {t(item.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty">{t(item.body)}</p>
                </article>
              ))}
            </StaggerReveal>

            {/* Citation forte */}
            <figure className="max-w-[72ch] mx-auto text-center flex flex-col gap-sm border-l-2 border-gold/30 pl-md py-sm">
              <blockquote className="text-h3 text-primary font-display italic text-balance leading-tight">
                <span aria-hidden="true" className="text-gold/70 mr-1">
                  &ldquo;
                </span>
                {t(copy.pourquoi.citationFort)}
                <span aria-hidden="true" className="text-gold/70 ml-1">
                  &rdquo;
                </span>
              </blockquote>
              <figcaption className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs">
                — {t(copy.pourquoi.citationAuthor)}
              </figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 3. APERÇU DU CONTENU — 7 chapitres + extraits ────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.apercu.eyebrow)} className="relative py-2xl bg-section-base">
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(copy.apercu.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.apercu.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-80 text-pretty max-w-[62ch]">
                {t(copy.apercu.intro)}
              </p>
            </div>

            {/* Table des matières — 7 chapitres */}
            <StaggerReveal
              as="ol"
              data-chapters-list="true"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
              staggerMs={80}
            >
              {copy.apercu.chapitresPrincipaux.map((chap) => (
                <li
                  key={chap.number}
                  className="hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                >
                  <span
                    aria-hidden="true"
                    className="text-[2.5rem] font-display font-bold text-gold/15 leading-none select-none"
                  >
                    {chap.number}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance">
                    {t(chap.title)}
                  </h3>
                  <p className="text-body text-silver opacity-70 text-pretty">{t(chap.sub)}</p>
                </li>
              ))}
            </StaggerReveal>

            {/* Extraits visuels — placeholders */}
            <div className="flex flex-col gap-md">
              <h3 className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs text-center">
                {t({ fr: 'Extraits visuels du livre', en: 'Visual book excerpts' })}
              </h3>
              <StaggerReveal
                as="div"
                className="grid grid-cols-1 md:grid-cols-3 gap-md"
                staggerMs={100}
                data-card-group="livre-extraits"
              >
                {copy.apercu.extraitsVisuels.map((extrait) => (
                  <figure
                    key={extrait.id}
                    className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                  >
                    <div
                      aria-hidden="true"
                      className="aspect-[4/3] w-full rounded-md bg-gradient-to-br from-base via-elevated to-base border border-silver/10 flex items-center justify-center"
                    >
                      <FileText
                        aria-hidden="true"
                        className="h-10 w-10 max-w-none text-gold/40 stroke-1"
                      />
                    </div>
                    <figcaption className="flex flex-col gap-1">
                      <span className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
                        {t(extrait.label)}
                      </span>
                      <span className="text-body text-silver opacity-75 text-pretty">
                        {t(extrait.description)}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 4. POUR QUI ──────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.pourQui.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <div className="relative max-w-default mx-auto px-md grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            <div className="lg:col-span-7 flex flex-col gap-sm">
              <Eyebrow>{t(copy.pourQui.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.pourQui.title)}</MaskRevealHeading>
              <div className="max-w-[65ch] mt-sm">
                {t(copy.pourQui.audienceCible)
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

            <div className="lg:col-span-5 flex flex-col gap-sm p-md bg-base border border-gold/15 rounded-lg">
              <Eyebrow variant="plain" goldDot={false}>
                {t(copy.pourQui.prerequis.eyebrow)}
              </Eyebrow>
              <ul className="flex flex-col gap-sm mt-2">
                {copy.pourQui.prerequis.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-sm text-body text-silver opacity-85 text-pretty"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gold shrink-0"
                    />
                    <span>{t(item.body)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. TÉMOIGNAGES LECTEURS — pending fallback ────────────────────── */}
      {copy.temoignages.pending ? (
        <ScrollReveal>
          <section
            aria-label={t(copy.temoignages.eyebrow)}
            className="relative py-2xl bg-section-base"
          >
            <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
              <Eyebrow>{t(copy.temoignages.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.temoignages.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-65 text-pretty max-w-[58ch] italic">
                {t(copy.temoignages.pendingNote)}
              </p>
              <p className="text-body text-silver opacity-85 text-pretty max-w-[58ch]">
                {t(copy.temoignages.onRequest)}
              </p>
            </div>
          </section>
        </ScrollReveal>
      ) : (
        <ScrollReveal>
          <section
            aria-label={t(copy.temoignages.eyebrow)}
            className="relative py-2xl bg-section-base"
          >
            <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
              <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
                <Eyebrow>{t(copy.temoignages.eyebrow)}</Eyebrow>
                <MaskRevealHeading as="h2">{t(copy.temoignages.title)}</MaskRevealHeading>
              </div>
              <StaggerReveal
                as="div"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
                staggerMs={100}
                data-card-group="livre-temoignages"
              >
                {copy.temoignages.items.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                  >
                    <div
                      role="img"
                      aria-label={`${item.note}/5`}
                      className="flex items-center gap-1"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={`star-${item.id}-${i.toString()}`}
                          aria-hidden="true"
                          className={[
                            'h-4 w-4 max-w-none shrink-0',
                            i < item.note ? 'text-gold fill-gold' : 'text-silver/20'
                          ].join(' ')}
                        />
                      ))}
                    </div>
                    <blockquote className="text-body text-silver opacity-85 text-pretty italic">
                      &ldquo;{t(item.citation)}&rdquo;
                    </blockquote>
                    <footer className="mt-auto pt-sm flex flex-col gap-1">
                      <span className="text-body text-primary font-display">{t(item.nom)}</span>
                      <span className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                        {t(item.role)}
                      </span>
                    </footer>
                  </article>
                ))}
              </StaggerReveal>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ─── 6. OPTIONS D'ACHAT ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.options.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(copy.options.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.options.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-80 text-pretty max-w-[62ch]">
                {t(copy.options.intro)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {copy.options.formats.map((fmt) => (
                <article
                  key={fmt.id}
                  className="flex flex-col gap-sm p-md border border-silver/15 bg-base rounded-lg shadow-haptic-card"
                >
                  <header className="flex items-baseline justify-between gap-sm">
                    <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                      {fmt.format}
                    </span>
                    <span className="text-xs text-silver/60 font-display">{t(fmt.prix)}</span>
                  </header>
                  <h3 className="text-h3 text-primary font-display text-balance">{t(fmt.label)}</h3>
                  <p className="text-body text-silver opacity-80 text-pretty">
                    {t(fmt.description)}
                  </p>
                  <div className="mt-auto pt-sm">
                    <a
                      href={fmt.lien}
                      aria-disabled="true"
                      tabIndex={-1}
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest font-display text-xs text-silver/55 cursor-not-allowed"
                    >
                      {t(fmt.lienLabel)}
                      <ArrowRight className="h-3 w-3 max-w-none shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {copy.options.packs.pending ? (
              <div className="flex flex-col items-center text-center gap-sm pt-md border-t border-silver/10">
                <Eyebrow variant="plain" goldDot={false}>
                  {t(copy.options.packs.eyebrow)}
                </Eyebrow>
                <p className="text-body text-silver opacity-65 italic text-pretty max-w-[58ch]">
                  {t(copy.options.packs.pendingNote)}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-md pt-md border-t border-silver/10">
                <Eyebrow variant="plain" goldDot={false}>
                  {t(copy.options.packs.eyebrow)}
                </Eyebrow>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {copy.options.packs.items.map((pack) => (
                    <article
                      key={pack.id}
                      className="flex flex-col gap-sm p-md bg-base border border-gold/20 rounded-lg"
                    >
                      <h4 className="text-h3 text-primary font-display text-balance">
                        {t(pack.label)}
                      </h4>
                      <p className="text-body text-silver opacity-80 text-pretty">
                        {t(pack.description)}
                      </p>
                      <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs mt-auto">
                        {t(pack.prix)}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 7. BONUS GRATUITS — lead magnet form mockup ───────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.bonus.eyebrow)} className="relative py-2xl bg-section-base">
          <div className="relative max-w-default mx-auto px-md grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            <div className="lg:col-span-6 flex flex-col gap-md">
              <Eyebrow>{t(copy.bonus.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.bonus.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
                {t(copy.bonus.leadMagnetDescription)}
              </p>
              <ul className="flex flex-col gap-md mt-sm">
                {copy.bonus.items.map((item, idx) => {
                  const Icon = bonusIcons[idx] ?? FileText;
                  return (
                    <li key={item.id} className="flex items-start gap-md">
                      <span
                        aria-hidden="true"
                        className="shrink-0 mt-1 inline-flex items-center justify-center h-9 w-9 rounded-full bg-gold/10 border border-gold/30"
                      >
                        <Icon className="h-4 w-4 max-w-none text-gold" aria-hidden="true" />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-body text-primary font-display">{t(item.title)}</span>
                        <span className="text-body text-silver opacity-75 text-pretty">
                          {t(item.description)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-sm p-lg bg-elevated border border-silver/15 rounded-lg shadow-haptic-focal">
              <div className="flex items-center gap-sm">
                <Mail aria-hidden="true" className="h-5 w-5 max-w-none text-gold shrink-0" />
                <span className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs">
                  {t({ fr: 'Reçois les 3 bonus', en: 'Get the 3 bonuses' })}
                </span>
              </div>

              <form
                data-waitlist-form
                action="#"
                method="post"
                className="flex flex-col gap-sm mt-sm"
                aria-label={t(copy.bonus.title)}
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="livre-bonus-email" className="sr-only">
                  {t(copy.bonus.formLabels.emailSrLabel)}
                </label>
                <input
                  id="livre-bonus-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled
                  placeholder={t(copy.bonus.formLabels.emailPlaceholder)}
                  className="w-full px-md py-sm bg-base border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-gold/40"
                />
                <button
                  type="submit"
                  disabled
                  className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-silver text-base disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t(copy.bonus.formLabels.submitLabel)}
                  <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                </button>
              </form>

              <p className="text-xs text-silver/60 text-center mt-sm">
                {t(copy.bonus.formLabels.consentMessage)}
              </p>
              <p className="text-xs text-silver/50 text-center italic">
                {t(copy.bonus.formLabels.platformNote)}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 8. AUTRES LIVRES — pending fallback ───────────────────────────── */}
      {copy.autresLivres.pending ? (
        <ScrollReveal>
          <section
            aria-label={t(copy.autresLivres.eyebrow)}
            className="relative py-2xl bg-section-elevated border-y border-silver/10"
          >
            <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
              <Eyebrow>{t(copy.autresLivres.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.autresLivres.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-65 italic text-pretty max-w-[58ch]">
                {t(copy.autresLivres.pendingNote)}
              </p>
            </div>
          </section>
        </ScrollReveal>
      ) : (
        <ScrollReveal>
          <section
            aria-label={t(copy.autresLivres.eyebrow)}
            className="relative py-2xl bg-section-elevated border-y border-silver/10"
          >
            <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
              <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
                <Eyebrow>{t(copy.autresLivres.eyebrow)}</Eyebrow>
                <MaskRevealHeading as="h2">{t(copy.autresLivres.title)}</MaskRevealHeading>
              </div>
              <StaggerReveal
                as="div"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
                staggerMs={100}
                data-card-group="livre-autres"
              >
                {copy.autresLivres.items.map((item) => (
                  <a
                    key={item.slug}
                    href={item.lien}
                    className="group flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg hover:border-gold/30 transition-colors duration-base"
                  >
                    <h3 className="text-h3 text-primary font-display text-balance">
                      {t(item.titre)}
                    </h3>
                    <p className="text-body text-silver opacity-80 text-pretty">{t(item.teaser)}</p>
                    <span className="mt-auto pt-sm inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-gold font-display text-xs">
                      {t({ fr: 'Découvrir', en: 'Discover' })}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3 w-3 max-w-none shrink-0 transition-transform duration-base group-hover:translate-x-1"
                      />
                    </span>
                  </a>
                ))}
              </StaggerReveal>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ─── 9. CTA FINAL ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.finalCta.eyebrow)}
          className="relative py-2xl bg-section-base border-t border-silver/10"
        >
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(copy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(copy.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(copy.finalCta.sub)}
            </p>
            <div className="mt-md flex flex-col sm:flex-row gap-sm items-center justify-center">
              <CTAPill variant="silver-primary" onClick={scrollToBonusForm}>
                {t(copy.finalCta.ctaPrincipal)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
              <CTAPill variant="silver-outline" onClick={scrollToBonusForm}>
                {t(copy.finalCta.ctaSecondaire)}
                <Download className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
