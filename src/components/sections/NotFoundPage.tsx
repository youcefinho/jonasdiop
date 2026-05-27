import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HeadingAccent } from '@/components/ui/HeadingAccent';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { MeshGradient } from '@/components/ui/MeshGradient';
import { MouseFollowSpotlight } from '@/components/ui/MouseFollowSpotlight';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

/**
 * NotFoundPage — 404 fallback enforcing DA Platinum Executive Authority.
 *
 * Wired via TanStack Router `notFoundComponent` on the root route.
 *
 * Composition (Sprint 10 polish — was basic single-section, now premium) :
 *   - Atmosphere : MeshGradient warm-cream drift + MouseFollowSpotlight +
 *     diagonal light beam (Hero-grade cinematic feel)
 *   - Filigrane 404 with text-shimmer (subtle gold→ivory sweep)
 *   - Eyebrow + MaskRevealHeading H1 + HeadingAccent gold underline
 *   - Sub paragraph + dual CTA (silver-primary home + silver-secondary
 *     programmes hub — gold-primary reserved for Hero / FinalCTA strict)
 *   - Useful quick links with link-sweep underline on hover
 *
 * Layout choice : single-section centered hero, no Navbar/Footer noise — the
 * 404 page should redirect, not detain.
 */
export function NotFoundPage() {
  const { t, locale } = useT();

  return (
    <section
      data-not-found-page
      aria-label={t({ fr: 'Page introuvable', en: 'Page not found' })}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-md py-2xl bg-base overflow-hidden"
    >
      {/* Atmospheric mesh gradient drift — slow 24s loop. */}
      <MeshGradient variant="warm-cream" opacity={0.1} />

      {/* Mouse-follow spotlight (premium polish, touch/reduced-motion safe). */}
      <MouseFollowSpotlight color="oklch(0.88 0.012 80)" size={400} intensity={0.07} />

      {/* Diagonal light beam — Hero signature reused for cinematic continuity. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-1/4 -right-1/4 w-[80%] h-[150%] origin-top-right"
          style={{
            background:
              'linear-gradient(115deg, transparent 40%, oklch(0.88 0.012 80 / 0.07) 48%, oklch(0.92 0.012 80 / 0.09) 50%, oklch(0.88 0.012 80 / 0.07) 52%, transparent 60%)',
            transform: 'rotate(-12deg)'
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-md max-w-content mx-auto">
        {/* Filigrane gold 404 with shimmer — premium signature treatment. */}
        <span
          aria-hidden="true"
          className="text-shimmer text-[clamp(8rem,20vw,16rem)] font-display font-bold leading-none select-none tracking-tighter"
        >
          404
        </span>

        <Eyebrow>{t({ fr: 'Erreur 404', en: 'Error 404' })}</Eyebrow>

        <MaskRevealHeading as="h1">
          {t({ fr: 'Page introuvable.', en: 'Page not found.' })}
        </MaskRevealHeading>

        <HeadingAccent variant="gold" align="center" />

        <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
          {t({
            fr: "La page que vous cherchez n'existe pas — ou a été déplacée. Pas de souci, voici ce qui peut vous être utile.",
            en: 'The page you are looking for does not exist — or has moved. No worries, here is what might help.'
          })}
        </p>

        <div className="mt-md flex flex-col sm:flex-row gap-sm items-center justify-center">
          <CTAPill variant="silver-primary" href={ROUTES.home[locale]}>
            {t({ fr: "Retour à l'accueil", en: 'Back to home' })}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </CTAPill>
          <CTAPill variant="silver-secondary" href={ROUTES.services[locale]}>
            {t({ fr: 'Voir les programmes', en: 'See programs' })}
          </CTAPill>
        </div>

        {/* Secondary quick links with link-sweep underline */}
        <nav
          data-not-found-nav
          aria-label={t({ fr: 'Liens utiles', en: 'Useful links' })}
          className="mt-xl pt-lg border-t border-silver/10 w-full max-w-content"
        >
          <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs mb-sm">
            {t({ fr: 'Liens utiles', en: 'Useful links' })}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-md text-sm">
            <li>
              <a
                href={ROUTES['methodologie-cdt'][locale]}
                className="link-sweep text-silver hover:text-gold transition-colors duration-base"
              >
                {t({ fr: 'Méthodologie CDT™', en: 'CDT™ Methodology' })}
              </a>
            </li>
            <li>
              <a
                href={ROUTES.about[locale]}
                className="link-sweep text-silver hover:text-gold transition-colors duration-base"
              >
                {t({ fr: 'À propos', en: 'About' })}
              </a>
            </li>
            <li>
              <a
                href={ROUTES.contact[locale]}
                className="link-sweep text-silver hover:text-gold transition-colors duration-base"
              >
                {t({ fr: 'Contact', en: 'Contact' })}
              </a>
            </li>
            <li>
              <a
                href={ROUTES.faq[locale]}
                className="link-sweep text-silver hover:text-gold transition-colors duration-base"
              >
                {t({ fr: 'FAQ', en: 'FAQ' })}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
