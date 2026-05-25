import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CTAPill } from '@/components/ui/CTAPill';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

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
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-base/60 backdrop-blur-sm z-50"
        />
      )}

      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t({ fr: 'Menu navigation mobile', en: 'Mobile navigation menu' })}
        className={clsx(
          'fixed top-0 right-0 h-svh w-[85vw] max-w-[400px] bg-elevated z-50 px-md py-xl flex flex-col gap-md transition-transform duration-base ease-out-expo',
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t({ fr: 'Fermer le menu', en: 'Close menu' })}
          className="self-end text-silver hover:text-primary transition-colors p-sm"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        <nav className="flex flex-col gap-2 mt-md text-h3 font-display">
          <Link
            to={ROUTES['methodologie-cdt'][locale]}
            onClick={() => setOpen(false)}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Méthodologie', en: 'Methodology' })}
          </Link>
          <Link
            to={ROUTES.services[locale]}
            onClick={() => setOpen(false)}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Programmes', en: 'Programs' })}
          </Link>
          <Link
            to={ROUTES.about[locale]}
            onClick={() => setOpen(false)}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'À propos', en: 'About' })}
          </Link>
          <Link
            to={ROUTES.ressources[locale]}
            onClick={() => setOpen(false)}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Ressources', en: 'Resources' })}
          </Link>
          <Link
            to={ROUTES.contact[locale]}
            onClick={() => setOpen(false)}
            className="py-sm border-b border-silver/10 text-silver hover:text-primary transition-colors"
          >
            {t({ fr: 'Contact', en: 'Contact' })}
          </Link>
        </nav>

        <div className="mt-auto">
          <CTAPill variant="gold-primary" href={ROUTES.contact[locale]}>
            {t({ fr: 'Consultation', en: 'Consultation' })}
          </CTAPill>
        </div>
      </aside>
    </>
  );
}
