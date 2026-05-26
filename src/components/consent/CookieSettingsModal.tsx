import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCookieConsent } from '@/lib/consent/CookieConsentContext';
import type { ConsentCategories } from '@/lib/consent/types';
import { useT } from '@/lib/i18n/useT';

/**
 * Granular Loi 25 consent modal — opened from CookieBanner "Customize" button
 * or from the persistent footer link (CookieSettingsLink).
 *
 * Three toggle rows :
 *   - Necessary (always on, disabled toggle — Loi 25 carve-out)
 *   - Analytics (default off, opt-in)
 *   - Marketing (default off, opt-in)
 *
 * Initial state seeds from stored decision if one exists, otherwise from
 * REJECT_ALL — Loi 25 default for non-essential categories.
 */
export function CookieSettingsModal() {
  const { t } = useT();
  const { isSettingsOpen, decision, save, closeSettings } = useCookieConsent();

  const seededAnalytics = decision?.categories.analytics ?? false;
  const seededMarketing = decision?.categories.marketing ?? false;

  const [analytics, setAnalytics] = useState(seededAnalytics);
  const [marketing, setMarketing] = useState(seededMarketing);

  // Re-seed toggles when modal opens (in case decision changed since last open)
  useEffect(() => {
    if (isSettingsOpen) {
      setAnalytics(decision?.categories.analytics ?? false);
      setMarketing(decision?.categories.marketing ?? false);
    }
  }, [isSettingsOpen, decision]);

  // Esc to close
  useEffect(() => {
    if (!isSettingsOpen) return undefined;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSettings();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isSettingsOpen, closeSettings]);

  if (!isSettingsOpen) return null;

  const handleSave = () => {
    const next: ConsentCategories = {
      necessary: true,
      analytics,
      marketing
    };
    save(next);
  };

  return (
    <div
      data-cookie-settings-modal
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-md bg-base/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-[32rem] bg-elevated border border-silver/20 rounded-lg shadow-[0_16px_48px_oklch(0_0_0/0.55)] p-lg flex flex-col gap-md">
        <button
          type="button"
          onClick={closeSettings}
          aria-label={t({ fr: 'Fermer', en: 'Close' })}
          className="absolute top-md right-md h-8 w-8 flex items-center justify-center rounded-full text-silver/60 hover:text-primary hover:bg-silver/10 transition-colors duration-base"
        >
          <X className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
        </button>

        <div className="flex flex-col gap-2">
          <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
            {t({ fr: 'Préférences cookies', en: 'Cookie preferences' })}
          </p>
          <h2 id="cookie-settings-title" className="text-h3 text-primary font-display text-balance">
            {t({ fr: 'Personnaliser votre consentement.', en: 'Customize your consent.' })}
          </h2>
          <p className="text-sm text-silver opacity-80 text-pretty">
            {t({
              fr: 'Activez ou désactivez chaque catégorie. Conforme Loi 25 (Québec).',
              en: 'Enable or disable each category. Act 25 (Québec) compliant.'
            })}
          </p>
        </div>

        <ul
          className="flex flex-col gap-sm mt-sm"
          aria-label={t({ fr: 'Catégories de cookies', en: 'Cookie categories' })}
        >
          {/* Necessary — always on */}
          <li className="flex items-start justify-between gap-md p-md bg-base border border-silver/15 rounded-lg">
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-body text-primary font-display font-medium">
                {t({ fr: 'Nécessaires', en: 'Necessary' })}
              </p>
              <p className="text-sm text-silver opacity-70 text-pretty">
                {t({
                  fr: 'Cookies essentiels au fonctionnement du site (sécurité, préférence linguistique, enregistrement de votre consentement). Ne peuvent pas être désactivés.',
                  en: 'Essential cookies for site function (security, language preference, your consent record). Cannot be disabled.'
                })}
              </p>
            </div>
            <ConsentToggle
              checked
              disabled
              onChange={() => {}}
              ariaLabel={t({
                fr: 'Cookies nécessaires (toujours actifs)',
                en: 'Necessary cookies (always on)'
              })}
            />
          </li>

          {/* Analytics */}
          <li className="flex items-start justify-between gap-md p-md bg-base border border-silver/15 rounded-lg">
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-body text-primary font-display font-medium">
                {t({ fr: 'Analytique', en: 'Analytics' })}
              </p>
              <p className="text-sm text-silver opacity-70 text-pretty">
                {t({
                  fr: 'Mesure anonyme de la fréquentation pour améliorer le site (GA4, Clarity).',
                  en: 'Anonymous traffic measurement to improve the site (GA4, Clarity).'
                })}
              </p>
            </div>
            <ConsentToggle
              checked={analytics}
              onChange={setAnalytics}
              ariaLabel={t({ fr: 'Cookies analytiques', en: 'Analytics cookies' })}
            />
          </li>

          {/* Marketing */}
          <li className="flex items-start justify-between gap-md p-md bg-base border border-silver/15 rounded-lg">
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-body text-primary font-display font-medium">
                {t({ fr: 'Marketing', en: 'Marketing' })}
              </p>
              <p className="text-sm text-silver opacity-70 text-pretty">
                {t({
                  fr: 'Cookies permettant un ciblage publicitaire pertinent et le suivi des campagnes (Meta Pixel).',
                  en: 'Cookies enabling relevant ad targeting and campaign tracking (Meta Pixel).'
                })}
              </p>
            </div>
            <ConsentToggle
              checked={marketing}
              onChange={setMarketing}
              ariaLabel={t({ fr: 'Cookies marketing', en: 'Marketing cookies' })}
            />
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-2 mt-md">
          <button
            type="button"
            onClick={closeSettings}
            className="flex-1 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display text-xs bg-transparent border border-silver/40 text-silver hover:border-silver hover:bg-silver/5 transition-all duration-base"
          >
            {t({ fr: 'Annuler', en: 'Cancel' })}
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display text-xs bg-gold text-base hover:shadow-[0_0_24px_oklch(0.74_0.085_75/0.35)] transition-all duration-base"
          >
            {t({ fr: 'Enregistrer mes choix', en: 'Save my choices' })}
          </button>
        </div>
      </div>
    </div>
  );
}

interface ConsentToggleProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  ariaLabel: string;
  disabled?: boolean;
}

function ConsentToggle({ checked, onChange, ariaLabel, disabled = false }: ConsentToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-base focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-elevated ${
        checked ? 'bg-gold/70' : 'bg-silver/20'
      } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-5 w-5 transform rounded-full bg-primary shadow ring-0 transition duration-base ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
