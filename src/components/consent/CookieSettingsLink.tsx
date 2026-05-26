import { useCookieConsentOptional } from '@/lib/consent/CookieConsentContext';
import { useT } from '@/lib/i18n/useT';

/**
 * Persistent footer link — re-opens the consent modal anytime the user wants
 * to change their cookie preferences. Loi 25 requires consent to be easily
 * withdrawable.
 *
 * Intended to be placed in FooterRich legal links row.
 *
 * Uses the optional hook so it gracefully renders as a no-op when isolated
 * test contexts mount FooterRich without the CookieConsentProvider.
 */
export function CookieSettingsLink() {
  const { t } = useT();
  const consent = useCookieConsentOptional();

  const handleClick = () => {
    consent?.openSettings();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-silver/70 hover:text-gold transition-colors duration-base text-sm"
    >
      {t({ fr: 'Préférences cookies', en: 'Cookie preferences' })}
    </button>
  );
}
