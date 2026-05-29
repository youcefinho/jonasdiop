import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { type DropdownItem, MobileNavAccordion } from '@/components/layout/NavbarDropdown';
import { CTAPill } from '@/components/ui/CTAPill';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

/**
 * MobileNavDrawer — sliding drawer with full sitemap brief v3.
 *
 * Organisation par intention (brief v3 §2 "Organisation visuelle de la nav"):
 *   1. Travailler avec moi   → Programmes (accordion subs) · Conférences
 *   2. Apprendre & s'inspirer → Livres · Événements (accordion subs) · Ressources (accordion subs)
 *   3. Découvrir              → Accueil · À propos · Contact
 *
 * Accordion sub-items use MobileNavAccordion (chevron toggle, sub-list pl-md).
 * Accueil reached via "Accueil" link in Découvrir group (drawer doesn't show logo).
 */
export function MobileNavDrawer() {
  const { t, locale } = useT();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  // ─── Dropdown data — Programmes (mobile accordion) ──────────────────────
  const programmesItems: readonly DropdownItem[] = [
    { to: ROUTES['services-the-shift'][locale], label: { fr: 'The Shift', en: 'The Shift' } },
    {
      to: ROUTES['services-master-closing'][locale],
      label: { fr: 'Master Closing', en: 'Master Closing' }
    },
    {
      to: ROUTES['services-focus-flow'][locale],
      label: { fr: 'Focus & Flow', en: 'Focus & Flow' }
    }
  ];

  const evenementsItems: readonly DropdownItem[] = [
    {
      to: `${ROUTES.evenements[locale]}#bootcamps`,
      label: { fr: 'Bootcamps', en: 'Bootcamps' }
    },
    {
      to: `${ROUTES.evenements[locale]}#retraites`,
      label: { fr: 'Retraites', en: 'Retreats' }
    },
    {
      to: `${ROUTES.evenements[locale]}#masterclass`,
      label: { fr: 'Masterclass', en: 'Masterclass' }
    }
  ];

  const ressourcesItems: readonly DropdownItem[] = [
    { to: ROUTES.podcast[locale], label: { fr: 'Podcast', en: 'Podcast' } },
    { to: ROUTES.ressources[locale], label: { fr: 'Blog', en: 'Blog' } },
    { to: `${ROUTES.ressources[locale]}#videos`, label: { fr: 'Vidéos', en: 'Videos' } }
  ];

  // ─── Intent group eyebrow styling ────────────────────────────────────────
  const groupHeading =
    'text-eyebrow uppercase tracking-widest text-gold/80 font-display text-[10px] pt-md pb-1';

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t({ fr: 'Ouvrir le menu', en: 'Open menu' })}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="text-silver hover:text-primary transition-colors p-sm"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          aria-hidden="true"
          onClick={closeDrawer}
          className="fixed inset-0 bg-base/60 backdrop-blur-sm z-50"
        />
      )}

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t({ fr: 'Menu navigation mobile', en: 'Mobile navigation menu' })}
        className={clsx(
          'fixed top-0 right-0 h-svh w-[85vw] max-w-[400px] bg-elevated z-50 px-md py-xl flex flex-col gap-md transition-transform duration-base ease-out-expo overflow-y-auto',
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <button
          type="button"
          onClick={closeDrawer}
          aria-label={t({ fr: 'Fermer le menu', en: 'Close menu' })}
          className="self-end text-silver hover:text-primary transition-colors p-sm"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        <nav
          aria-label={t({ fr: 'Menu mobile', en: 'Mobile menu' })}
          className="flex flex-col text-h3 font-display"
        >
          {/* ── GROUP 1 : Travailler avec moi ── */}
          <span className={groupHeading}>
            {t({ fr: 'Travailler avec moi', en: 'Work with me' })}
          </span>
          <MobileNavAccordion
            label={{ fr: 'Programmes', en: 'Programs' }}
            items={programmesItems}
            seeAll={{
              to: ROUTES.services[locale],
              label: { fr: 'Voir tous les programmes', en: 'View all programs' }
            }}
            onItemClick={closeDrawer}
          />
          <Link
            to={ROUTES.conferences[locale]}
            onClick={closeDrawer}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Conférences', en: 'Speaking' })}
          </Link>

          {/* ── GROUP 2 : Apprendre & s'inspirer ── */}
          <span className={groupHeading}>
            {t({ fr: "Apprendre & s'inspirer", en: 'Learn & be inspired' })}
          </span>
          <Link
            to={ROUTES.livre[locale]}
            onClick={closeDrawer}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Livres', en: 'Books' })}
          </Link>
          <MobileNavAccordion
            label={{ fr: 'Événements', en: 'Events' }}
            items={evenementsItems}
            seeAll={{
              to: ROUTES.evenements[locale],
              label: { fr: 'Voir tous les événements', en: 'View all events' }
            }}
            onItemClick={closeDrawer}
          />
          <MobileNavAccordion
            label={{ fr: 'Ressources', en: 'Resources' }}
            items={ressourcesItems}
            seeAll={{
              to: ROUTES.ressources[locale],
              label: { fr: 'Voir toutes les ressources', en: 'View all resources' }
            }}
            onItemClick={closeDrawer}
          />

          {/* ── GROUP 3 : Découvrir ── */}
          <span className={groupHeading}>{t({ fr: 'Découvrir', en: 'Discover' })}</span>
          <Link
            to={ROUTES.home[locale]}
            onClick={closeDrawer}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Accueil', en: 'Home' })}
          </Link>
          <Link
            to={ROUTES.about[locale]}
            onClick={closeDrawer}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'À propos', en: 'About' })}
          </Link>
          <Link
            to={ROUTES.contact[locale]}
            onClick={closeDrawer}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Contact', en: 'Contact' })}
          </Link>
        </nav>

        <div className="mt-auto pt-md">
          <CTAPill variant="silver-primary" href={ROUTES.contact[locale]}>
            {t({ fr: 'Réserver mon appel', en: 'Book my call' })}
          </CTAPill>
        </div>
      </div>
    </>
  );
}
