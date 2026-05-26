import { Link } from '@tanstack/react-router';
import { CalendarCheck, MessageCircle, MessageSquare, Phone } from 'lucide-react';
import { clientConfig } from '@/config/clientConfig';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

/**
 * Mobile signature bar — fixed bottom 4-action bar shown on viewports < md.
 *
 * Signature board Stitch `21-mobile-signature-bar.png` (validated 2026-05-25,
 * "Mobile signature bar" entry in STATE.md). Pattern UNIQUE Jonas — different
 * from `intralys-mobile-engagement-patterns` (banned per CLAUDE.md local).
 *
 * Layout : 4 columns split equal. Buttons :
 *   1. APPELER     → tel:+1...
 *   2. SMS         → sms:+1...
 *   3. RÉSERVER    → /contact (Calendly placeholder for now)
 *   4. DISCUTER    → /contact (gold-primary — the call to action)
 *
 * Hidden on md+ (desktop has navbar CTA + sticky CONSULTATION pill).
 */
export function MobileSignatureBar() {
  const { t, locale } = useT();
  const { client } = clientConfig;
  const telHref = `tel:${client.phone}`;
  const smsHref = `sms:${client.phone}`;

  return (
    <nav
      data-mobile-signature-bar
      aria-label={t({ fr: 'Actions rapides', en: 'Quick actions' })}
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-base/95 backdrop-blur-md border-t border-silver/15 pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-4 items-stretch">
        <li>
          <a
            href={telHref}
            className="flex flex-col items-center justify-center gap-1 py-3 text-silver hover:text-primary transition-colors duration-base active:scale-[0.97]"
          >
            <Phone className="h-5 w-5 max-w-none shrink-0" aria-hidden="true" />
            <span className="text-eyebrow uppercase tracking-widest font-display text-[10px]">
              {t({ fr: 'Appeler', en: 'Call' })}
            </span>
          </a>
        </li>
        <li>
          <a
            href={smsHref}
            className="flex flex-col items-center justify-center gap-1 py-3 text-silver hover:text-primary transition-colors duration-base active:scale-[0.97]"
          >
            <MessageSquare className="h-5 w-5 max-w-none shrink-0" aria-hidden="true" />
            <span className="text-eyebrow uppercase tracking-widest font-display text-[10px]">
              {t({ fr: 'SMS', en: 'SMS' })}
            </span>
          </a>
        </li>
        <li>
          <Link
            to={ROUTES.contact[locale]}
            className="flex flex-col items-center justify-center gap-1 py-3 text-silver hover:text-primary transition-colors duration-base active:scale-[0.97]"
          >
            <CalendarCheck className="h-5 w-5 max-w-none shrink-0" aria-hidden="true" />
            <span className="text-eyebrow uppercase tracking-widest font-display text-[10px]">
              {t({ fr: 'Réserver', en: 'Book' })}
            </span>
          </Link>
        </li>
        <li className="bg-gold">
          <Link
            to={ROUTES.contact[locale]}
            className="flex flex-col items-center justify-center gap-1 py-3 text-base hover:opacity-90 transition-opacity duration-base active:scale-[0.97]"
          >
            <MessageCircle className="h-5 w-5 max-w-none shrink-0" aria-hidden="true" />
            <span className="text-eyebrow uppercase tracking-widest font-display font-medium text-[10px]">
              {t({ fr: 'Discuter', en: 'Chat' })}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
