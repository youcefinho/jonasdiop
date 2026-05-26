import { Link } from '@tanstack/react-router';
import { ROUTES } from '@/config/routes';
import { useCookieConsent } from '@/lib/consent/CookieConsentContext';
import { useT } from '@/lib/i18n/useT';

/**
 * Initial Loi 25 consent banner — floating bottom-right card.
 *
 * Three primary actions :
 *   - Refuse → only necessary cookies (Loi 25 explicit refuse path)
 *   - Customize → open granular settings modal
 *   - Accept all → analytics + marketing
 *
 * Banner is hidden via CookieConsentProvider once a decision is stored.
 * Footer link (CookieSettingsLink) re-opens the settings modal anytime.
 */
export function CookieBanner() {
  const { t, locale } = useT();
  const { isBannerOpen, acceptAll, rejectAll, openSettings } = useCookieConsent();

  if (!isBannerOpen) return null;

  return (
    <div
      data-cookie-banner
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-body"
      className="fixed bottom-md right-md left-md sm:left-auto z-50 max-w-md bg-elevated/95 backdrop-blur-md border border-silver/20 rounded-lg shadow-[0_8px_32px_oklch(0_0_0/0.45)] p-md flex flex-col gap-sm"
    >
      <p
        id="cookie-banner-title"
        className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs"
      >
        {t({ fr: 'Cookies & Loi 25', en: 'Cookies & Act 25' })}
      </p>
      <p
        id="cookie-banner-body"
        className="text-body text-primary font-display text-pretty text-sm"
      >
        {t({
          fr: "Nous utilisons des cookies essentiels au fonctionnement du site. Avec votre consentement, nous activons également des cookies de mesure d'audience et de marketing.",
          en: 'We use essential cookies for site function. With your consent, we also enable analytics and marketing cookies.'
        })}
      </p>
      <p className="text-xs text-silver/60 text-pretty">
        {t({
          fr: 'Conforme Loi 25 (Québec).',
          en: 'Act 25 (Québec) compliant.'
        })}{' '}
        <Link
          to={ROUTES['politique-confidentialite'][locale]}
          className="text-gold hover:underline underline-offset-2"
        >
          {t({ fr: 'Politique de confidentialité', en: 'Privacy policy' })}
        </Link>
      </p>

      <div className="flex flex-col sm:flex-row gap-2 mt-sm">
        <button
          type="button"
          onClick={rejectAll}
          className="flex-1 rounded-pill px-md py-2 text-eyebrow uppercase tracking-wider font-display text-xs bg-transparent border border-silver/40 text-silver hover:border-silver hover:bg-silver/5 transition-all duration-base"
        >
          {t({ fr: 'Refuser', en: 'Refuse' })}
        </button>
        <button
          type="button"
          onClick={openSettings}
          className="flex-1 rounded-pill px-md py-2 text-eyebrow uppercase tracking-wider font-display text-xs bg-transparent border border-silver/40 text-silver hover:border-silver hover:bg-silver/5 transition-all duration-base"
        >
          {t({ fr: 'Personnaliser', en: 'Customize' })}
        </button>
        <button
          type="button"
          onClick={acceptAll}
          className="flex-1 rounded-pill px-md py-2 text-eyebrow uppercase tracking-wider font-display text-xs bg-gold text-base hover:shadow-[0_0_24px_oklch(0.74_0.085_75/0.35)] transition-all duration-base"
        >
          {t({ fr: 'Tout accepter', en: 'Accept all' })}
        </button>
      </div>
    </div>
  );
}
