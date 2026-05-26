import { ArrowRight } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

/**
 * NotFoundPage — 404 fallback enforcing DA Platinum Executive Authority.
 *
 * Wired via TanStack Router `notFoundComponent` on the root route.
 *
 * Sections : Filigrane gold "404" hero / message + sub / dual CTA
 * (gold-primary home + silver-secondary programmes hub).
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
      className="min-h-screen flex flex-col items-center justify-center text-center px-md py-2xl bg-base relative"
    >
      <div className="flex flex-col items-center gap-md max-w-content mx-auto">
        {/* Filigrane gold 404 */}
        <span
          aria-hidden="true"
          className="text-[clamp(8rem,20vw,16rem)] font-display font-bold text-gold/10 leading-none select-none tracking-tighter"
        >
          404
        </span>

        <Eyebrow>{t({ fr: 'Erreur 404', en: 'Error 404' })}</Eyebrow>

        <MaskRevealHeading as="h1">
          {t({ fr: 'Page introuvable.', en: 'Page not found.' })}
        </MaskRevealHeading>

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

        {/* Secondary quick links */}
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
                className="text-silver hover:text-gold transition-colors duration-base"
              >
                {t({ fr: 'Méthodologie CDT™', en: 'CDT™ Methodology' })}
              </a>
            </li>
            <li>
              <a
                href={ROUTES.about[locale]}
                className="text-silver hover:text-gold transition-colors duration-base"
              >
                {t({ fr: 'À propos', en: 'About' })}
              </a>
            </li>
            <li>
              <a
                href={ROUTES.contact[locale]}
                className="text-silver hover:text-gold transition-colors duration-base"
              >
                {t({ fr: 'Contact', en: 'Contact' })}
              </a>
            </li>
            <li>
              <a
                href={`${ROUTES.home[locale]}#faq`}
                className="text-silver hover:text-gold transition-colors duration-base"
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
