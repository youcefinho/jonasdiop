import type { BilingualLax } from '@/lib/i18n/types';

/**
 * evenements.ts — Page Événements / masterminds / séminaires (shell capture)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 2
 * [À VALIDER JONAS] markers = dates, lieux, format précis, conditions accès
 * Mode : shell capture — calendrier réel pending H7 Jonas
 */

export const evenementsCopy = {
  meta: {
    title: {
      fr: 'Événements — Masterminds & séminaires exclusifs | Jonas Diop',
      en: 'Events — Exclusive masterminds & seminars | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Masterminds et séminaires intensifs en format restreint. 8-12 entrepreneurs maximum, 2-3 jours, lieu premium. Par invitation ou candidature.',
      en: 'Intensive masterminds and seminars in small format. 8-12 entrepreneurs maximum, 2-3 days, premium venue. By invitation or application.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Événements',
      en: 'Events'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Masterminds & séminaires exclusifs.',
      en: 'Exclusive masterminds & seminars.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Format intime, intensité maximale.',
      en: 'Intimate format, maximum intensity.'
    } satisfies BilingualLax<string>
  },

  formatType: {
    eyebrow: {
      fr: 'Le format',
      en: 'The format'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Pas une conférence. Un atelier de travail.',
      en: 'Not a conference. A working workshop.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `Les événements DIOP ne sont pas des conférences où on écoute des présentations pendant deux jours.

C'est du travail collectif en format restreint : 2 à 3 jours, 8 à 12 entrepreneurs maximum, dans un lieu choisi pour la concentration et non pour l'apparat. Chaque participant repart avec un plan d'exécution concret, pas juste des notes.

Le format intime est intentionnel. Au-delà de 12 personnes, la qualité de l'accompagnement individuel chute. On préfère faire moins d'événements et maintenir le standard.`,
      en: `DIOP events are not conferences where you listen to presentations for two days.

It is collective work in a small format : 2 to 3 days, 8 to 12 entrepreneurs maximum, in a venue chosen for focus rather than appearance. Every participant leaves with a concrete execution plan, not just notes.

The intimate format is intentional. Beyond 12 people, the quality of individual support drops. We prefer fewer events and a maintained standard.`
    } satisfies BilingualLax<string>,
    specs: [
      {
        label: { fr: 'Durée', en: 'Duration' } satisfies BilingualLax<string>,
        value: {
          fr: '2 à 3 jours intensifs',
          en: '2 to 3 intensive days'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Participants', en: 'Participants' } satisfies BilingualLax<string>,
        value: {
          fr: '8 à 12 entrepreneurs maximum',
          en: '8 to 12 entrepreneurs maximum'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Lieux', en: 'Venues' } satisfies BilingualLax<string>,
        value: {
          fr: '[À VALIDER JONAS — Montréal + rotation internationale ? Lieux exacts à confirmer]',
          en: '[TO VALIDATE WITH JONAS — Montréal + international rotation? Exact venues to confirm]'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Langue', en: 'Language' } satisfies BilingualLax<string>,
        value: {
          fr: 'Français (anglais disponible selon cohorte)',
          en: 'English (French available depending on cohort)'
        } satisfies BilingualLax<string>
      }
    ]
  },

  programme: {
    eyebrow: {
      fr: 'Programme type',
      en: 'Typical agenda'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Ce qui se passe pendant l'événement.",
      en: 'What happens during the event.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'diagnostic-collectif',
        title: {
          fr: 'Diagnostic collectif',
          en: 'Collective diagnostic'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Chaque participant présente son architecture en 10 minutes. Le groupe et Jonas identifient ensemble les leviers non exploités et les blocages structurels.',
          en: 'Each participant presents their architecture in 10 minutes. The group and Jonas collectively identify unexploited levers and structural blockers.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'architecture-workshop',
        title: {
          fr: 'Architecture workshop',
          en: 'Architecture workshop'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Sessions de travail intensives sur les 3 piliers CDT™. Application directe sur votre situation, pas de théorie générale.',
          en: 'Intensive working sessions on CDT™ 3 pillars. Direct application to your situation, no general theory.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'hot-seats',
        title: {
          fr: 'Hot seats individuels',
          en: 'Individual hot seats'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Chaque participant a un hot seat dédié avec Jonas et le groupe. 45-60 minutes sur le problème le plus critique. Regard collectif, solution précise.',
          en: 'Each participant gets a dedicated hot seat with Jonas and the group. 45-60 minutes on the most critical problem. Collective insight, precise solution.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'networking',
        title: {
          fr: 'Networking guidé',
          en: 'Guided networking'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Pas de networking forcé avec badge et cocktail. Des sessions structurées pour créer des connexions entre participants à CA et stade similaires.',
          en: 'No forced networking with badge and cocktail. Structured sessions to build connections between participants at similar revenue and stage.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  calendrier: {
    eyebrow: {
      fr: 'Calendrier 2026',
      en: '2026 Calendar'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Prochains événements.',
      en: 'Upcoming events.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: "[À VALIDER JONAS — dates et lieux des événements 2026. Dès que confirmés, on affiche titre, date, lieu, format, statut places (disponible / liste d'attente / complet)]",
      en: '[TO VALIDATE WITH JONAS — 2026 event dates and venues. Once confirmed, we display title, date, venue, format, spots status (available / waitlist / full)]'
    } satisfies BilingualLax<string>,
    emptyState: {
      fr: "Aucun événement annoncé pour l'instant. Inscrivez-vous pour être notifié en premier.",
      en: 'No events announced yet. Sign up to be notified first.'
    } satisfies BilingualLax<string>
  },

  conditions: {
    eyebrow: {
      fr: 'Accès',
      en: 'Access'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Par invitation ou candidature.',
      en: 'By invitation or application.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `Les événements DIOP sont accessibles de deux façons :

**Par invitation directe** : les anciens participants aux programmes Gamechanger Scaling et Consultations Privées reçoivent une invitation prioritaire pour les événements correspondant à leur profil.

**Par candidature** : les entrepreneurs qui ne sont pas passés par les programmes peuvent soumettre une candidature. Les critères de sélection sont les mêmes que pour les programmes — CA 100K$+, intention d'exécution sérieuse.

Les places sont limitées. La notification précoce via la liste ci-dessous est la meilleure façon de sécuriser une place avant l'annonce publique.`,
      en: `DIOP events are accessible in two ways :

**By direct invitation** : alumni from Gamechanger Scaling and Private Consultations programs receive priority invitations for events matching their profile.

**By application** : entrepreneurs who have not gone through the programs can submit an application. Selection criteria are the same as for the programs — $100K+ CAD revenue, serious execution intent.

Spots are limited. Early notification via the list below is the best way to secure a spot before the public announcement.`
    } satisfies BilingualLax<string>
  },

  capture: {
    eyebrow: {
      fr: 'Notifications événements',
      en: 'Event notifications'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Soyez notifié avant les annonces publiques.',
      en: 'Get notified before public announcements.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Inscrivez-vous pour recevoir les notifications événements en priorité — dates, lieux et places disponibles — avant la communication générale.',
      en: 'Sign up to receive event notifications with priority — dates, venues, and available spots — before the general announcement.'
    } satisfies BilingualLax<string>,
    emailPlaceholder: {
      fr: 'votre@email.com',
      en: 'your@email.com'
    } satisfies BilingualLax<string>,
    submitLabel: {
      fr: "M'inscrire aux notifications",
      en: 'Add me to notifications'
    } satisfies BilingualLax<string>
  },

  finalCta: {
    eyebrow: {
      fr: 'Manifester intérêt',
      en: 'Express interest'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Intéressé par les prochains événements.',
      en: 'Interested in upcoming events.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Remplissez votre email pour être notifié en priorité — ou réservez un appel si vous voulez discuter de votre candidature directement.',
      en: 'Add your email to be notified first — or book a call if you want to discuss your application directly.'
    } satisfies BilingualLax<string>,
    primaryCtaLabel: {
      fr: 'Notifications événements',
      en: 'Event notifications'
    } satisfies BilingualLax<string>,
    secondaryCtaLabel: {
      fr: 'Discuter de ma candidature',
      en: 'Discuss my application'
    } satisfies BilingualLax<string>
  }
} as const;
