import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { MobileNavDrawer } from '@/components/layout/MobileNavDrawer';
import { CTAPill } from '@/components/ui/CTAPill';
import { LogoWordmark } from '@/components/ui/LogoWordmark';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

export function Navbar() {
  const { t, locale } = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

        <div className="hidden md:flex items-center gap-md text-eyebrow uppercase tracking-wider font-display">
          <Link
            to={ROUTES['methodologie-cdt'][locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Méthodologie', en: 'Methodology' })}
          </Link>
          <Link
            to={ROUTES.services[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Programmes', en: 'Programs' })}
          </Link>
          <Link
            to={ROUTES.about[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'À propos', en: 'About' })}
          </Link>
          <Link
            to={ROUTES.ressources[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Ressources', en: 'Resources' })}
          </Link>
          <Link
            to={ROUTES.contact[locale]}
            className="text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Contact', en: 'Contact' })}
          </Link>
        </div>

        <div className="hidden md:block">
          <CTAPill variant="silver-outline" href={ROUTES.contact[locale]}>
            {t({ fr: 'Consultation', en: 'Consultation' })}
          </CTAPill>
        </div>

        <div className="md:hidden">
          <MobileNavDrawer />
        </div>
      </div>
    </nav>
  );
}
