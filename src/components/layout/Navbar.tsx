import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { MobileNavDrawer } from '@/components/layout/MobileNavDrawer';
import { type DropdownItem, NavbarDropdown } from '@/components/layout/NavbarDropdown';
import { CTAPill } from '@/components/ui/CTAPill';
import { LogoWordmark } from '@/components/ui/LogoWordmark';
import { ROUTES } from '@/config/routes';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

/**
 * Navbar — desktop top-level navigation per brief v3 sitemap.
 *
 * 8 onglets structure (parent + optional subs):
 *   À propos · Programmes ▼ · Événements ▼ · Livres · Conférences · Ressources ▼ · Contact
 *   (Accueil reached via logo wordmark on the left)
 *
 * Dropdowns (Programmes / Événements / Ressources) open on hover (desktop)
 * or click (keyboard/touch) via NavbarDropdown component. See brief v3
 * section 2 "Sitemap final" for the parent/sub-page mapping.
 *
 * Mobile uses MobileNavDrawer with organisation par intention :
 *   Travailler avec moi · Apprendre & s'inspirer · Découvrir.
 */
export function Navbar() {
  const { t, locale } = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ─── Dropdown data — Programmes ──────────────────────────────────────────
  const programmesItems: readonly DropdownItem[] = [
    {
      to: ROUTES['services-the-shift'][locale],
      label: { fr: 'The Shift', en: 'The Shift' },
      description: { fr: '8 semaines · pivot stratégique', en: '8 weeks · strategic pivot' }
    },
    {
      to: ROUTES['services-master-closing'][locale],
      label: { fr: 'Master Closing', en: 'Master Closing' },
      description: {
        fr: '6 modules · closing haute valeur',
        en: '6 modules · high-value closing'
      }
    },
    {
      to: ROUTES['services-focus-flow'][locale],
      label: { fr: 'Focus & Flow', en: 'Focus & Flow' },
      description: {
        fr: "5 modules · productivité d'élite",
        en: '5 modules · elite productivity'
      }
    }
  ];

  // ─── Dropdown data — Événements ──────────────────────────────────────────
  // Bootcamps Trilogie : 4 sous-routes dédiées (vue d'ensemble + 3 cohortes).
  // Retraites + Masterclass restent en ancres dans /evenements (pages dédiées
  // pas encore construites — placeholders dans EvenementsPage).
  const evenementsItems: readonly DropdownItem[] = [
    {
      to: ROUTES['evenements-bootcamps'][locale],
      label: { fr: "Vue d'ensemble (Trilogie)", en: 'Overview (Trilogy)' },
      description: { fr: 'Les 3 bootcamps RISE™', en: 'The 3 RISE™ bootcamps' }
    },
    {
      to: ROUTES['evenements-bootcamp-an-army-of-one'][locale],
      label: { fr: 'An Army of One™', en: 'An Army of One™' },
      description: { fr: 'Fondation · identité & posture', en: 'Foundation · identity & posture' }
    },
    {
      to: ROUTES['evenements-bootcamp-the-edge'][locale],
      label: { fr: 'The Edge™', en: 'The Edge™' },
      description: { fr: 'Avantage · stratégie & exécution', en: 'Edge · strategy & execution' }
    },
    {
      to: ROUTES['evenements-bootcamp-the-activation'][locale],
      label: { fr: 'The Activation™', en: 'The Activation™' },
      description: { fr: 'Activation · scale & système', en: 'Activation · scale & system' }
    },
    {
      to: ROUTES['evenements-retraites'][locale],
      label: { fr: 'Retraites', en: 'Retreats' },
      description: { fr: 'Immersifs 5-7 jours', en: 'Immersive 5-7 days' }
    },
    {
      to: ROUTES['evenements-masterclass'][locale],
      label: { fr: 'Masterclass · en ligne', en: 'Masterclass · online' },
      description: { fr: 'Court & accessible', en: 'Short & accessible' }
    }
  ];

  // ─── Dropdown data — Ressources ──────────────────────────────────────────
  const ressourcesItems: readonly DropdownItem[] = [
    {
      to: ROUTES.podcast[locale],
      label: { fr: 'Podcast', en: 'Podcast' },
      description: { fr: 'The Game Changer', en: 'The Game Changer' }
    },
    {
      to: ROUTES.ressources[locale],
      label: { fr: 'Blog', en: 'Blog' },
      description: { fr: 'Articles & frameworks', en: 'Articles & frameworks' }
    },
    {
      to: `${ROUTES.ressources[locale]}#videos`,
      label: { fr: 'Vidéos', en: 'Videos' },
      description: { fr: 'Interviews · extraits', en: 'Interviews · clips' }
    }
  ];

  const ctaPillLabel: BilingualLax<string> = {
    fr: 'Réserver mon appel',
    en: 'Book my call'
  };

  return (
    <nav
      aria-label={t({ fr: 'Navigation principale', en: 'Main navigation' })}
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-base',
        scrolled
          ? 'py-2 bg-base/80 backdrop-blur-md border-b border-silver/10'
          : 'py-sm bg-transparent'
      )}
    >
      <div className="max-w-wide mx-auto px-md flex justify-between items-center gap-md">
        <Link
          to={ROUTES.home[locale]}
          aria-label={t({ fr: 'Accueil Jonas Diop', en: 'Jonas Diop Home' })}
        >
          <LogoWordmark size="md" />
        </Link>

        <div className="hidden lg:flex items-center gap-md text-eyebrow uppercase tracking-wider font-display">
          <Link
            to={ROUTES.about[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'À propos', en: 'About' })}
          </Link>

          <NavbarDropdown
            label={{ fr: 'Programmes', en: 'Programs' }}
            items={programmesItems}
            seeAll={{
              to: ROUTES.services[locale],
              label: { fr: 'Voir tous les programmes', en: 'View all programs' }
            }}
          />

          <NavbarDropdown
            label={{ fr: 'Événements', en: 'Events' }}
            items={evenementsItems}
            seeAll={{
              to: ROUTES.evenements[locale],
              label: { fr: 'Voir tous les événements', en: 'View all events' }
            }}
          />

          <Link
            to={ROUTES.livre[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Livres', en: 'Books' })}
          </Link>

          <Link
            to={ROUTES.conferences[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Conférences', en: 'Speaking' })}
          </Link>

          <NavbarDropdown
            label={{ fr: 'Ressources', en: 'Resources' }}
            items={ressourcesItems}
            seeAll={{
              to: ROUTES.ressources[locale],
              label: { fr: 'Voir toutes les ressources', en: 'View all resources' }
            }}
          />

          <Link
            to={ROUTES.contact[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Contact', en: 'Contact' })}
          </Link>
        </div>

        <div className="hidden lg:block">
          <CTAPill variant="silver-primary" href={ROUTES.contact[locale]}>
            {t(ctaPillLabel)}
          </CTAPill>
        </div>

        <div className="lg:hidden">
          <MobileNavDrawer />
        </div>
      </div>
    </nav>
  );
}
