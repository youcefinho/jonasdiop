import { ArrowRight, Check, Download, Headphones, PlayCircle, Search } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { ROUTES } from '@/config/routes';
import { ressourcesCopy } from '@/data/copy/ressources';
import { useT } from '@/lib/i18n/useT';

/**
 * RessourcesPage — Hub Ressources brief v3 §3.9.
 *
 * Composition 5 sections :
 *   1) HERO          — H1 + sub + capture newsletter inline (abonnement régulier)
 *   2) PODCAST       — The Game Changer : sub + 4 plateformes + CTA "Voir tous les épisodes"
 *   3) BLOG          — recherche + filtres catégories + grille articles (empty state GHL)
 *                      + 5 cards catégories thématiques
 *   4) VIDÉOS        — id="videos" anchor + filtres catégories + 4 vignettes
 *                      placeholders YouTube + CTA "S'abonner à la chaîne"
 *   5) LEAD MAGNET   — Capture email "1 stratégie de scaling actionnable / semaine"
 *      FINAL          + 4 benefits + form disabled (Sprint 6 GHL wire)
 *   + Frameworks bloc rendu UNIQUEMENT quand shells publiés (Sprint 5)
 *   + Final CTA "Réserver mon appel stratégique"
 *
 * DA Platinum Executive Authority. GHL Blog real fetch live Sprint 5.
 * Newsletter inscriptions = GHL custom field upsert via /api/newsletter Sprint 6.
 * URLs plateformes podcast + URLs vidéos YouTube + lien chaîne = pending Jonas
 * → placeholders structurés, boutons disabled.
 *
 * Anchor #videos : nav cross-page utilise ROUTES.ressources[locale] + '#videos'
 * (Conférences / Home peuvent linker vers ce point précis).
 *
 * Tone TU partout (brief v3 hard rule).
 */
export function RessourcesPage() {
  const { t, locale } = useT();

  return (
    <>
      {/* ───────────────────────────────────────── */}
      {/* 1) HERO — H1 + sub + capture newsletter inline */}
      {/* ───────────────────────────────────────── */}
      <section
        aria-label={t(ressourcesCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(ressourcesCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">
            <span className="text-shimmer">{t(ressourcesCopy.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[62ch]">
            {t(ressourcesCopy.hero.sub)}
          </p>

          {/* Hero newsletter capture — abonnement régulier (forme courte) */}
          <div className="mt-lg w-full max-w-[44ch] flex flex-col items-center gap-sm">
            <Eyebrow goldDot={false} variant="plain">
              {t(ressourcesCopy.hero.newsletterEyebrow)}
            </Eyebrow>
            <form
              data-hero-newsletter-form
              className="flex flex-col sm:flex-row gap-sm w-full"
              aria-label={t(ressourcesCopy.hero.newsletterEyebrow)}
              onSubmit={(e) => e.preventDefault()}
              action="#"
            >
              <label htmlFor="hero-newsletter-email" className="sr-only">
                {t(ressourcesCopy.hero.emailPlaceholder)}
              </label>
              <input
                id="hero-newsletter-email"
                name="email-hero"
                type="email"
                disabled
                placeholder={t(ressourcesCopy.hero.emailPlaceholder)}
                className="flex-1 px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
              />
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-silver text-base disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
              >
                {t(ressourcesCopy.hero.submitLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </button>
            </form>
            <p className="text-xs text-silver/50 text-center italic text-pretty">
              {t(ressourcesCopy.hero.privacyNote)}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────── */}
      {/* 2) PODCAST — The Game Changer */}
      {/* ───────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(ressourcesCopy.podcast.eyebrow)}
          className="relative py-2xl bg-elevated border-y border-silver/10 overflow-hidden"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(ressourcesCopy.podcast.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(ressourcesCopy.podcast.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[60ch]">
                {t(ressourcesCopy.podcast.sub)}
              </p>
            </div>

            <StaggerReveal
              as="ul"
              data-podcast-platforms-list="true"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md"
              aria-label={t(ressourcesCopy.podcast.title)}
              staggerMs={110}
            >
              {ressourcesCopy.podcast.platforms.map((platform) => (
                <li
                  key={platform.id}
                  className="group flex flex-col items-center text-center gap-sm p-md rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)] bg-base ring-1 ring-silver/15 shadow-haptic-card shadow-haptic-card-hover hover-lift transition-all duration-base hover:ring-silver/30"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-elevated ring-1 ring-silver/15 text-silver"
                  >
                    <Headphones className="h-5 w-5 max-w-none" />
                  </span>
                  <h3 className="text-h3 text-primary font-display tracking-tight">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-silver opacity-75 text-pretty">
                    {t(platform.description)}
                  </p>
                </li>
              ))}
            </StaggerReveal>

            <p className="text-sm text-silver/50 italic text-center text-pretty max-w-[60ch] mx-auto">
              {t(ressourcesCopy.podcast.placeholder)}
            </p>

            <div className="flex justify-center">
              <CTAPill variant="silver-outline" href={ROUTES.podcast[locale]}>
                {t(ressourcesCopy.podcast.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ───────────────────────────────────────── */}
      {/* 3) BLOG — recherche + filtres + grille articles (empty state) */}
      {/* ───────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(ressourcesCopy.blog.eyebrow)}
          className="relative py-2xl bg-base overflow-hidden"
        >
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(ressourcesCopy.blog.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(ressourcesCopy.blog.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[60ch]">
                {t(ressourcesCopy.blog.sub)}
              </p>
            </div>

            {/* Search + filters bar — UI mockup pending GHL Blog wire Sprint 5 */}
            <div className="flex flex-col gap-md max-w-content mx-auto w-full">
              <form
                data-blog-search-form
                className="flex flex-col sm:flex-row gap-sm"
                aria-label={t(ressourcesCopy.blog.searchLabel)}
                onSubmit={(e) => e.preventDefault()}
                action="#"
              >
                <label htmlFor="blog-search" className="sr-only">
                  {t(ressourcesCopy.blog.searchLabel)}
                </label>
                <div className="relative flex-1">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-md top-1/2 -translate-y-1/2 text-silver/50"
                  >
                    <Search className="h-4 w-4 max-w-none shrink-0" />
                  </span>
                  <input
                    id="blog-search"
                    name="blog-search"
                    type="search"
                    disabled
                    placeholder={t(ressourcesCopy.blog.searchPlaceholder)}
                    className="w-full pl-[2.5rem] pr-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
                  />
                </div>
              </form>

              {/* Filtres — uniquement "Tous les sujets" en haut.
                  Les 5 catégories thématiques détaillées sont rendues en cards
                  ci-dessous (ressourcesCopy.categories.items) pour éviter le
                  doublon textuel filter-button vs card-label. */}
              <ul
                data-blog-filters-list
                className="flex flex-wrap items-center justify-center gap-sm"
                aria-label={t(ressourcesCopy.categories.title)}
              >
                <li>
                  <button
                    type="button"
                    disabled
                    aria-pressed="true"
                    className="inline-flex items-center gap-2 px-md py-2 rounded-full text-eyebrow uppercase tracking-widest font-display text-xs bg-silver/10 ring-1 ring-silver/30 text-silver disabled:cursor-not-allowed"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-1 w-1 rounded-full bg-gold"
                    />
                    {t(ressourcesCopy.blog.filterAllLabel)}
                  </button>
                </li>
              </ul>
            </div>

            {/* Articles grid empty state — GHL Blog headless wire Sprint 5 */}
            <div
              data-articles-empty
              className="border border-dashed border-silver/20 rounded-lg p-xl bg-base/50 flex flex-col items-center text-center gap-sm max-w-content mx-auto w-full"
            >
              <p className="text-body text-silver opacity-80 text-pretty max-w-[55ch]">
                {t(ressourcesCopy.articlesRecents.emptyState)}
              </p>
              <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch] mt-sm">
                {t(ressourcesCopy.articlesRecents.placeholder)}
              </p>
            </div>

            <div className="flex justify-center">
              <CTAPill variant="silver-outline" href={ROUTES.ressources[locale]}>
                {t(ressourcesCopy.blog.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>

            {/* 5 catégories cards — parcourir par thème (preserved cross-test) */}
            <div className="mt-xl flex flex-col gap-lg">
              <div className="text-center flex flex-col items-center gap-sm">
                <Eyebrow>{t(ressourcesCopy.categories.eyebrow)}</Eyebrow>
                <h3 className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[22ch]">
                  {t(ressourcesCopy.categories.title)}
                </h3>
              </div>

              <StaggerReveal
                as="ul"
                data-categories-list="true"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-md"
                aria-label={t(ressourcesCopy.categories.title)}
                staggerMs={100}
              >
                {ressourcesCopy.categories.items.map((cat) => (
                  <li
                    key={cat.id}
                    className="hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                  >
                    <h4 className="text-h3 text-primary font-display text-balance">
                      {t(cat.label)}
                    </h4>
                    <p className="text-sm text-silver opacity-70 text-pretty">
                      {t(cat.description)}
                    </p>
                  </li>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ───────────────────────────────────────── */}
      {/* 4) VIDÉOS — id="videos" anchor + filtres + 4 vignettes placeholders */}
      {/* ───────────────────────────────────────── */}
      <ScrollReveal>
        <section
          id="videos"
          aria-label={t(ressourcesCopy.videos.eyebrow)}
          className="relative scroll-mt-[100px] py-2xl bg-elevated border-y border-silver/10 overflow-hidden"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(ressourcesCopy.videos.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(ressourcesCopy.videos.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[60ch]">
                {t(ressourcesCopy.videos.sub)}
              </p>
            </div>

            {/* Filtres catégories vidéos */}
            <ul
              data-videos-filters-list
              className="flex flex-wrap items-center justify-center gap-sm"
              aria-label={t(ressourcesCopy.videos.title)}
            >
              {ressourcesCopy.videos.categories.map((cat, idx) => (
                <li key={`vfilter-${cat.id}`}>
                  <button
                    type="button"
                    disabled
                    aria-pressed={idx === 0 ? 'true' : 'false'}
                    className={[
                      'inline-flex items-center gap-2 px-md py-2 rounded-full',
                      'text-eyebrow uppercase tracking-widest font-display text-xs',
                      'disabled:cursor-not-allowed transition-colors duration-base',
                      idx === 0
                        ? 'bg-silver/10 ring-1 ring-silver/30 text-silver'
                        : 'bg-base ring-1 ring-silver/15 text-silver opacity-85 hover:ring-silver/30'
                    ].join(' ')}
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-1 w-1 rounded-full bg-gold"
                    />
                    {t(cat.label)}
                  </button>
                </li>
              ))}
            </ul>

            {/* 4 vignettes vidéo placeholders — YouTube embed pending Jonas */}
            <StaggerReveal
              as="ul"
              data-videos-list="true"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md"
              aria-label={t(ressourcesCopy.videos.title)}
              staggerMs={110}
            >
              {ressourcesCopy.videos.items.map((video) => (
                <li
                  key={video.id}
                  className="group flex flex-col gap-sm rounded-[clamp(0.75rem,0.8vw+0.4rem,1.25rem)] overflow-hidden bg-base ring-1 ring-silver/15 shadow-haptic-card shadow-haptic-card-hover hover-lift transition-all duration-base hover:ring-silver/30"
                >
                  {/* Thumbnail placeholder — 16:9 area with play overlay */}
                  <div className="relative aspect-video w-full bg-[linear-gradient(135deg,oklch(0.20_0.005_80)_0%,oklch(0.14_0.005_80)_100%)] flex items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-base/60 ring-1 ring-silver/30 text-silver/90 backdrop-blur-sm transition-transform duration-base group-hover:scale-110"
                    >
                      <PlayCircle className="h-7 w-7 max-w-none" />
                    </span>
                    <span className="absolute top-sm left-sm text-eyebrow uppercase tracking-widest font-display text-[10px] text-silver/80 bg-base/60 ring-1 ring-silver/20 rounded-full px-2 py-1 backdrop-blur-sm">
                      {t(video.durationLabel)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 p-md">
                    <h3 className="text-body text-primary font-display text-balance leading-[1.25]">
                      {t(video.title)}
                    </h3>
                  </div>
                </li>
              ))}
            </StaggerReveal>

            <p className="text-sm text-silver/50 italic text-center text-pretty max-w-[60ch] mx-auto">
              {t(ressourcesCopy.videos.placeholder)}
            </p>

            <div className="flex justify-center">
              {/* Lien chaîne YouTube pending Jonas — bouton disabled prêt à wire */}
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display bg-transparent border border-silver/40 text-silver disabled:cursor-not-allowed disabled:opacity-60 hover:border-silver transition-colors duration-base"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 max-w-none shrink-0"
                >
                  <path d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418A2.506 2.506 0 0 0 2.418 6.186C2 7.746 2 12 2 12s0 4.254.418 5.814a2.506 2.506 0 0 0 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z" />
                </svg>
                {t(ressourcesCopy.videos.subscribeLabel)}
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FRAMEWORKS — public PDF downloads, rendered only when shells are published */}
      {ressourcesCopy.frameworks.shells.length > 0 && (
        <ScrollReveal>
          <section
            aria-label={t(ressourcesCopy.frameworks.eyebrow)}
            className="py-2xl bg-base border-y border-silver/10"
          >
            <div className="max-w-default mx-auto px-md flex flex-col gap-lg">
              <div className="flex flex-col gap-sm">
                <Eyebrow>{t(ressourcesCopy.frameworks.eyebrow)}</Eyebrow>
                <MaskRevealHeading as="h2">{t(ressourcesCopy.frameworks.title)}</MaskRevealHeading>
                <p className="text-body text-silver opacity-80 text-pretty max-w-[65ch]">
                  {t(ressourcesCopy.frameworks.body)}
                </p>
              </div>

              <StaggerReveal
                as="ul"
                data-frameworks-list="true"
                className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md"
                aria-label={t(ressourcesCopy.frameworks.title)}
                staggerMs={120}
              >
                {ressourcesCopy.frameworks.shells.map((shell) => (
                  <li
                    key={shell.id}
                    className="hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                  >
                    <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
                      {shell.format}
                    </p>
                    <h3 className="text-h3 text-primary font-display text-balance">
                      {t(shell.title)}
                    </h3>
                    <p className="text-body text-silver opacity-70 text-pretty">
                      {t(shell.description)}
                    </p>
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-transparent border border-silver/40 text-silver disabled:cursor-not-allowed disabled:opacity-50 mt-auto self-start"
                    >
                      <Download className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                      {t(shell.ctaLabel)}
                    </button>
                  </li>
                ))}
              </StaggerReveal>

              <p className="text-sm text-silver/50 italic text-center mt-md text-pretty">
                {t(ressourcesCopy.frameworks.disclaimer)}
              </p>
              <p className="text-xs text-silver/40 text-center text-pretty">
                {t(ressourcesCopy.frameworks.placeholder)}
              </p>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ───────────────────────────────────────── */}
      {/* 5) LEAD MAGNET FINAL — promesse value-driven plus longue */}
      {/* ───────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(ressourcesCopy.newsletter.eyebrow)}
          className="relative py-2xl bg-base overflow-hidden"
        >
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-content mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-lg">
              <Eyebrow>{t(ressourcesCopy.newsletter.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(ressourcesCopy.newsletter.title)}</MaskRevealHeading>
            </div>

            <div className="max-w-[65ch] mx-auto mb-lg">
              {t(ressourcesCopy.newsletter.body)
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

            <ul
              data-newsletter-benefits
              className="flex flex-col gap-sm max-w-[65ch] mx-auto mb-lg"
              aria-label={t(ressourcesCopy.newsletter.title)}
            >
              {ressourcesCopy.newsletter.benefits.map((item) => (
                <li
                  key={item.fr.slice(0, 40)}
                  className="flex items-start gap-3 text-body text-silver"
                >
                  <span aria-hidden="true" className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-gold">
                    <Check className="h-5 w-5 max-w-none" />
                  </span>
                  <span className="text-pretty">{t(item)}</span>
                </li>
              ))}
            </ul>

            <form
              data-newsletter-form
              className="flex flex-col sm:flex-row gap-sm max-w-[42ch] mx-auto"
              aria-label={t(ressourcesCopy.newsletter.title)}
              onSubmit={(e) => e.preventDefault()}
              action="#"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t(ressourcesCopy.newsletter.emailPlaceholder)}
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                disabled
                placeholder={t(ressourcesCopy.newsletter.emailPlaceholder)}
                className="flex-1 px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
              />
              <button
                type="submit"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-silver text-base disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
              >
                {t(ressourcesCopy.newsletter.submitLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </button>
            </form>

            <p className="text-xs text-silver/40 text-center mt-md italic">
              {t(ressourcesCopy.newsletter.confirmationMessage)}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA — Réserver mon appel stratégique */}
      <ScrollReveal>
        <section
          aria-label={t(ressourcesCopy.finalCta.eyebrow)}
          className="py-2xl bg-elevated border-t border-silver/10"
        >
          <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(ressourcesCopy.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(ressourcesCopy.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
              {t(ressourcesCopy.finalCta.sub)}
            </p>
            <div className="mt-md">
              <CTAPill variant="silver-primary" href={ROUTES.contact[locale]}>
                {t(ressourcesCopy.finalCta.ctaLabel)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
