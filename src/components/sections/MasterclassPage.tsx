import { Link } from '@tanstack/react-router';
import { ArrowRight, Bell, Check, MonitorPlay, X } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { BootcampThemeProvider } from '@/components/sections/bootcamps/BootcampThemeProvider';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ROUTES } from '@/config/routes';
import { evenementsMasterclassCopy } from '@/data/copy/evenementsMasterclass';
import { submitWaitlist } from '@/lib/api/waitlist';
import { useT } from '@/lib/i18n/useT';

const CAPTURE_ANCHOR_ID = 'masterclass-notify';

/**
 * MasterclassPage — /evenements/masterclass (FR) + /en/events/masterclass (EN).
 *
 * Skeleton pré-lancement honnête. Indigo palette + digital grid signature
 * (window/screen metaphor) distinguishes from gold/tactical bootcamps +
 * sage/mountain retraites.
 *
 * Same 6-section structure as RetraitesPage but with distinct hero pattern
 * (dotted screen grid instead of mountain peaks), distinct icon (MonitorPlay
 * instead of Mountain), distinct palette (indigo via data-bootcamp).
 */
export function MasterclassPage() {
  const { t, locale } = useT();
  const copy = evenementsMasterclassCopy;

  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || state === 'submitting') return;
    if (honeypot) return;
    setState('submitting');
    setError(null);
    const route =
      typeof window !== 'undefined' ? window.location.pathname : '/evenements/masterclass';
    const result = await submitWaitlist({
      email,
      route,
      source: 'final',
      locale,
      consent: true,
      context: 'masterclass'
    });
    if (result.ok) {
      setState('success');
    } else {
      setState('error');
      setError(result.error ?? null);
    }
  };

  const scrollToNotify = () => {
    if (typeof window === 'undefined') return;
    document
      .getElementById(CAPTURE_ANCHOR_ID)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <BootcampThemeProvider variant="masterclass">
      {/* ─── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[72vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        {/* Digital screen-grid signature — indigo dotted grid layered behind hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            role="presentation"
          >
            <defs>
              <pattern
                id="masterclass-screen-grid"
                x="0"
                y="0"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                {/* Dotted pixel grid — screen / monitor metaphor */}
                <circle cx="0" cy="0" r="1" fill="var(--bc-pattern-stroke)" />
                <circle cx="16" cy="16" r="0.6" fill="var(--bc-pattern-stroke)" opacity="0.6" />
              </pattern>
              <pattern
                id="masterclass-window-frame"
                x="0"
                y="0"
                width="240"
                height="180"
                patternUnits="userSpaceOnUse"
              >
                {/* Sparse window frames — digital broadcast units */}
                <rect
                  x="20"
                  y="20"
                  width="80"
                  height="50"
                  fill="none"
                  stroke="var(--bc-pattern-stroke)"
                  strokeWidth="0.6"
                  rx="3"
                />
                <rect
                  x="140"
                  y="100"
                  width="80"
                  height="50"
                  fill="none"
                  stroke="var(--bc-pattern-stroke)"
                  strokeWidth="0.6"
                  rx="3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#masterclass-screen-grid)" />
            <rect width="100%" height="100%" fill="url(#masterclass-window-frame)" />
          </svg>
        </div>
        <div className="relative max-w-default mx-auto w-full px-md flex flex-col items-start gap-md max-w-[var(--container-content)]">
          <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading
            as="h1"
            priority="lcp"
            className="font-normal tracking-[-0.025em] text-[clamp(2.25rem,1.4rem+3vw,4.5rem)] leading-[1.06] max-w-[26ch]"
          >
            <span className="text-shimmer">{t(copy.hero.h1)}</span>
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-90 text-pretty max-w-[58ch] leading-relaxed">
            {t(copy.hero.sub)}
          </p>
          <p className="text-eyebrow uppercase tracking-widest text-gold/85 font-display text-xs">
            {t(copy.hero.microProof)}
          </p>
          <button
            type="button"
            onClick={scrollToNotify}
            className="mt-md inline-flex items-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-gold text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Bell className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            <span>{t(copy.hero.ctaLabel)}</span>
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* ─── 2. PITCH — 4 PILLARS ────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.pitch.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.pitch.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.pitch.title)}</MaskRevealHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {copy.pitch.pillars.map((pillar, idx) => (
                <article
                  key={`pillar-${idx.toString()}`}
                  className="relative flex flex-col gap-2 p-md bg-elevated border border-gold/20 rounded-lg shadow-haptic-card"
                >
                  <MonitorPlay
                    className="h-5 w-5 max-w-none shrink-0 text-gold/80"
                    aria-hidden="true"
                  />
                  <h3 className="text-h3 text-primary font-display text-balance">
                    {t(pillar.title)}
                  </h3>
                  <p className="text-body text-silver opacity-85 text-pretty">{t(pillar.body)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 3. FOR WHO / NOT FOR WHO ──────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(copy.forWho.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.forWho.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.forWho.title)}</MaskRevealHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <article className="p-md bg-elevated border border-gold/25 rounded-lg shadow-haptic-card">
                <p className="text-eyebrow uppercase tracking-widest text-gold/85 font-display text-xs mb-md">
                  {locale === 'fr' ? 'Pour toi si' : 'For you if'}
                </p>
                <ul className="flex flex-col gap-2">
                  {copy.forWho.forItems.map((item, idx) => (
                    <li
                      key={`for-${idx.toString()}`}
                      className="flex items-start gap-2 text-body text-silver opacity-90 text-pretty"
                    >
                      <Check
                        className="h-4 w-4 max-w-none shrink-0 mt-1 text-gold/85"
                        aria-hidden="true"
                      />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card">
                <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs mb-md">
                  {locale === 'fr' ? 'Pas pour toi si' : 'Not for you if'}
                </p>
                <ul className="flex flex-col gap-2">
                  {copy.forWho.notForItems.map((item, idx) => (
                    <li
                      key={`notfor-${idx.toString()}`}
                      className="flex items-start gap-2 text-body text-silver/75 text-pretty"
                    >
                      <X
                        className="h-4 w-4 max-w-none shrink-0 mt-1 text-silver/50"
                        aria-hidden="true"
                      />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 4. FORMAT TABLE ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.format.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.format.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.format.title)}</MaskRevealHeading>
            </div>
            <article className="max-w-[44rem] mx-auto bg-elevated border border-gold/20 rounded-lg overflow-hidden shadow-haptic-focal">
              <dl className="flex flex-col">
                {copy.format.rows.map((row, idx) => (
                  <div
                    key={`row-${idx.toString()}`}
                    className="flex items-baseline justify-between gap-md p-md border-b border-silver/10 last:border-b-0"
                  >
                    <dt className="text-eyebrow uppercase tracking-widest text-gold/75 font-display text-xs shrink-0">
                      {t(row.label)}
                    </dt>
                    <dd className="text-body text-primary font-display text-pretty text-right">
                      {t(row.value)}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. NOTIFY CAPTURE EMAIL ─────────────────────────────────── */}
      <ScrollReveal>
        <section
          id={CAPTURE_ANCHOR_ID}
          aria-label={t(copy.notify.eyebrow)}
          className="relative scroll-mt-[80px] py-2xl bg-section-base"
        >
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.notify.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.notify.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
                {t(copy.notify.sub)}
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-full max-w-[34rem] flex flex-col gap-2"
            >
              <div className="flex flex-col sm:flex-row gap-2 sm:items-stretch">
                <label htmlFor="masterclass-email" className="sr-only">
                  {t(copy.notify.emailPlaceholder)}
                </label>
                <input
                  id="masterclass-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t(copy.notify.emailPlaceholder)}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state === 'success' || state === 'submitting'}
                  className="flex-1 min-w-0 h-12 px-3 rounded-lg bg-elevated border border-silver/20 text-body text-primary placeholder:text-silver/70 font-display focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/15 transition-colors duration-base"
                />
                <input
                  id="masterclass-website"
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
                  disabled={state === 'success' || state === 'submitting'}
                  className="shrink-0 inline-flex items-center justify-center gap-2 h-12 rounded-lg px-md text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-gold text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {state === 'success' ? (
                    <>
                      <Check className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                      <span>{locale === 'fr' ? 'Inscrit' : 'Subscribed'}</span>
                    </>
                  ) : (
                    <>
                      <span>{t(copy.notify.submitLabel)}</span>
                      <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
              {state === 'error' && error ? (
                <p role="alert" className="text-sm text-gold/90 text-pretty">
                  {error}
                </p>
              ) : null}
              {state === 'success' ? (
                <p role="status" className="text-sm text-gold/90 text-pretty">
                  {t(copy.notify.successMessage)}
                </p>
              ) : null}
              <p className="text-sm text-silver/60 italic text-pretty">
                {t(copy.notify.consentNote)}
              </p>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 6. CROSS-LINK FOOTER (other event formats) ──────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(copy.crossLink.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="06" position="left" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(copy.crossLink.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(copy.crossLink.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
                {t(copy.crossLink.sub)}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <Link
                to={ROUTES['evenements-bootcamps'][locale]}
                className="group flex flex-col gap-2 p-md bg-elevated border border-[oklch(0.74_0.085_75)]/25 hover:border-[oklch(0.74_0.085_75)]/55 rounded-lg shadow-haptic-card transition-colors duration-base"
              >
                <span className="text-eyebrow uppercase tracking-widest text-[oklch(0.74_0.085_75)] font-display text-xs">
                  {locale === 'fr' ? 'Format tactique' : 'Tactical format'}
                </span>
                <span className="text-h3 text-primary font-display">
                  {locale === 'fr' ? 'Bootcamps · 3 jours' : 'Bootcamps · 3 days'}
                </span>
                <span className="text-body text-silver opacity-80 text-pretty">
                  {locale === 'fr'
                    ? 'La Trilogie — 3 leviers tactiques. An Army of One™ · The Edge™ · The Activation™.'
                    : 'The Trilogy — 3 tactical levers. An Army of One™ · The Edge™ · The Activation™.'}
                </span>
                <span className="mt-auto pt-sm inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-[oklch(0.74_0.085_75)] font-display text-xs">
                  {locale === 'fr' ? 'Découvrir' : 'Discover'}
                  <ArrowRight className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                </span>
              </Link>
              <Link
                to={ROUTES['evenements-retraites'][locale]}
                className="group flex flex-col gap-2 p-md bg-elevated border border-[oklch(0.74_0.05_155)]/25 hover:border-[oklch(0.74_0.05_155)]/55 rounded-lg shadow-haptic-card transition-colors duration-base"
              >
                <span className="text-eyebrow uppercase tracking-widest text-[oklch(0.74_0.05_155)] font-display text-xs">
                  {locale === 'fr' ? 'Format transformation' : 'Transformation format'}
                </span>
                <span className="text-h3 text-primary font-display">
                  {locale === 'fr' ? 'Retraites · 5-7 jours' : 'Retreats · 5-7 days'}
                </span>
                <span className="text-body text-silver opacity-80 text-pretty">
                  {locale === 'fr'
                    ? 'Lieu retiré, déconnexion totale, refonte d’architecture complète.'
                    : 'Secluded location, total disconnection, complete architecture overhaul.'}
                </span>
                <span className="mt-auto pt-sm inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-[oklch(0.74_0.05_155)] font-display text-xs">
                  {locale === 'fr' ? 'Découvrir' : 'Discover'}
                  <ArrowRight className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                </span>
              </Link>
              <article className="flex flex-col gap-2 p-md bg-elevated border border-[oklch(0.75_0.1_270)]/55 rounded-lg shadow-haptic-focal relative">
                <span className="absolute top-sm right-sm text-eyebrow uppercase tracking-widest text-[oklch(0.75_0.1_270)] font-display text-[10px]">
                  {locale === 'fr' ? 'Tu es ici' : 'You are here'}
                </span>
                <span className="text-eyebrow uppercase tracking-widest text-[oklch(0.75_0.1_270)] font-display text-xs">
                  {locale === 'fr' ? 'Format accessible' : 'Accessible format'}
                </span>
                <span className="text-h3 text-primary font-display">
                  {locale === 'fr' ? 'Masterclass · 2-4 h' : 'Masterclass · 2-4 h'}
                </span>
                <span className="text-body text-silver opacity-80 text-pretty">
                  {locale === 'fr'
                    ? 'Live en ligne sur un sujet précis. Hot seats + replay inclus.'
                    : 'Live online on a precise subject. Hot seats + replay included.'}
                </span>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </BootcampThemeProvider>
  );
}
