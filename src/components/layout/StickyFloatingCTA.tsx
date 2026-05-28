import { Link, useLocation } from '@tanstack/react-router';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/config/routes';
import { localeFromPath } from '@/lib/i18n/translations';
import { useT } from '@/lib/i18n/useT';

/**
 * StickyFloatingCTA — floating "Réserver" button bottom-right that appears
 * after the user scrolls past the Hero zone (~600px). Hidden on mobile (the
 * MobileSignatureBar already handles bottom CTA there).
 *
 * Pattern : agency-tier sites layer a persistent conversion CTA above the
 * fold once the Hero is out of view. Reduces friction for users deep in the
 * page who want to act without scrolling back.
 *
 * Auto-hides on : /contact (already at the destination), /404. Visible everywhere
 * else after threshold.
 */
const HIDE_PATHS = ['/contact', '/en/contact'] as const;
const SHOW_AFTER_PX = 600;

export function StickyFloatingCTA() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  const { t } = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafId = 0;
    let pending = false;

    const update = () => {
      pending = false;
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Hide on contact page + when above threshold
  if (HIDE_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  return (
    <Link
      to={ROUTES.contact[locale]}
      aria-label={t({
        fr: 'Réserver mon appel stratégique — bouton flottant',
        en: 'Book my strategy call — floating button'
      })}
      data-sticky-floating-cta
      className={[
        // Hidden on mobile (MobileSignatureBar handles that)
        'hidden md:inline-flex',
        // Position bottom-right, above modals z-30 but below MobileSignatureBar
        'fixed bottom-6 right-6 z-30',
        // Pill style with gold metallic gradient + haptic shadow + breathing
        // halo pulse (cta-halo-pulse adds `::after` gold radial breath).
        'items-center gap-2 px-md py-[0.65rem] rounded-pill cta-halo-pulse',
        'bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)]',
        'text-base shadow-haptic-card',
        'text-eyebrow uppercase tracking-wider font-display font-semibold text-xs',
        // Animation : slide up + fade in on scroll past threshold
        'transition-all duration-500 ease-out',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none',
        // Hover : scale + brightness boost + slight lift
        'hover:scale-105 hover:brightness-110 hover:-translate-y-1'
      ].join(' ')}
    >
      <CalendarCheck className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
      <span>{t({ fr: 'Réserver', en: 'Book' })}</span>
      <ArrowRight className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
    </Link>
  );
}
