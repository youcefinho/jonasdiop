import { ArrowRight, Bell, CalendarDays } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ROUTES } from '@/config/routes';
import { useT } from '@/lib/i18n/useT';

interface UpcomingEvent {
  readonly id: string;
  readonly name: { readonly fr: string; readonly en: string };
  readonly date: { readonly fr: string; readonly en: string };
  readonly location: { readonly fr: string; readonly en: string };
  readonly href: string;
}

/**
 * EvenementsUpcomingSection — Home section 9 "ÉVÉNEMENTS À VENIR" per brief v3.
 *
 * Brief §3.1 §Section 9 :
 *   "Bannière dynamique : « Prochain événement : [nom] – [date] – [lieu] »
 *    CTA : 'Réserver ma place'
 *    Si aucun événement : capture email 'Sois informé en premier'"
 *
 * Tant que Jonas n'a pas confirmé d'event à la programmation, on rend le
 * **fallback capture email** ("Sois informé en premier"). Quand des events
 * arrivent, on pousse l'array UPCOMING_EVENTS et le composant bascule
 * automatiquement vers le mode bannière dynamique.
 *
 * Form action="#" pour l'instant — wire vers plateforme email à venir.
 */

const UPCOMING_EVENTS: readonly UpcomingEvent[] = [
  // Empty until Jonas confirms scheduled events. Sample shape :
  // {
  //   id: 'bootcamp-mtl-q4-2026',
  //   name: { fr: 'Bootcamp Scaling — Montréal', en: 'Scaling Bootcamp — Montréal' },
  //   date: { fr: '15-17 novembre 2026', en: 'November 15-17, 2026' },
  //   location: { fr: 'Montréal, Québec', en: 'Montréal, Quebec' },
  //   href: '/evenements#bootcamps'
  // }
];

export function EvenementsUpcomingSection() {
  const { t, locale } = useT();
  const nextEvent = UPCOMING_EVENTS[0];

  // ─── Mode A : Bannière dynamique (1 event programmé minimum) ─────────────
  if (nextEvent) {
    return (
      <section
        aria-label={t({ fr: 'Prochain événement', en: 'Next event' })}
        className="relative py-2xl bg-section-base"
      >
        <FiligraneNumber number="09" position="right" />
        <div className="relative max-w-default mx-auto px-md flex flex-col items-center text-center gap-md">
          <Eyebrow>{t({ fr: 'Prochain événement', en: 'Next event' })}</Eyebrow>
          <MaskRevealHeading
            as="h2"
            className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]"
          >
            {t(nextEvent.name)}
          </MaskRevealHeading>
          <div className="flex items-center gap-md text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 max-w-none" aria-hidden="true" />
              {t(nextEvent.date)}
            </span>
            <span aria-hidden="true" className="text-silver/40">
              ·
            </span>
            <span>{t(nextEvent.location)}</span>
          </div>
          <a
            href={nextEvent.href}
            className="mt-md inline-flex items-center gap-2 px-md py-sm rounded-pill bg-gold text-base font-display font-medium text-eyebrow uppercase tracking-wider hover:bg-gold/90 transition-colors duration-base"
          >
            {t({ fr: 'Réserver ma place', en: 'Book my spot' })}
            <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
          </a>
        </div>
      </section>
    );
  }

  // ─── Mode B : Capture email fallback (aucun event programmé) ─────────────
  return (
    <section
      aria-label={t({
        fr: 'Être informé des prochains événements',
        en: 'Get notified of upcoming events'
      })}
      className="relative py-2xl bg-section-base"
    >
      <FiligraneNumber number="09" position="right" />
      <div className="relative max-w-content mx-auto px-md flex flex-col items-center text-center gap-md">
        <Eyebrow>{t({ fr: 'Événements à venir', en: 'Upcoming events' })}</Eyebrow>
        <MaskRevealHeading
          as="h2"
          className="text-h2 text-primary font-display text-balance leading-[1.1] max-w-[24ch]"
        >
          {t({
            fr: 'Sois informé en premier.',
            en: 'Be the first to know.'
          })}
        </MaskRevealHeading>
        <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[55ch]">
          {t({
            fr: 'Bootcamps, retraites et masterclass — les places partent vite. Reçois la liste dès qu’un nouvel événement est confirmé.',
            en: 'Bootcamps, retreats and masterclasses — spots fill fast. Get the list as soon as a new event is confirmed.'
          })}
        </p>

        <form
          action="#"
          method="post"
          aria-label={t({
            fr: 'Notification événements à venir',
            en: 'Upcoming events notification'
          })}
          className="mt-sm flex flex-col sm:flex-row gap-sm w-full max-w-[480px]"
        >
          <label htmlFor="events-notify-email" className="sr-only">
            {t({ fr: 'Adresse courriel', en: 'Email address' })}
          </label>
          <input
            id="events-notify-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={t({ fr: 'ton@email.com', en: 'your@email.com' })}
            disabled
            className="flex-1 px-md py-sm rounded-pill bg-base border border-silver/20 text-body text-primary placeholder:text-silver/40 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/20 transition-colors duration-base disabled:opacity-60"
          />
          <button
            type="submit"
            disabled
            className="inline-flex items-center justify-center gap-2 px-md py-sm rounded-pill bg-silver text-base text-eyebrow uppercase tracking-wider font-display font-medium hover:bg-silver/90 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Bell className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            {t({ fr: "M'informer", en: 'Notify me' })}
          </button>
        </form>
        <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px]">
          {t({
            fr: "Plateforme email en cours d'intégration · disponible au lancement",
            en: 'Email platform being integrated · available at launch'
          })}
        </p>

        <a
          href={ROUTES.evenements[locale]}
          className="mt-md inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest text-silver hover:text-gold transition-colors font-display text-xs"
        >
          {t({ fr: 'Voir tous les formats événements', en: 'View all event formats' })} →
        </a>
      </div>
    </section>
  );
}
