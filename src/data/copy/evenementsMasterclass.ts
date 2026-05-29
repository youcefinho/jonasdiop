import type { BilingualLax } from '@/lib/i18n/types';

/**
 * evenementsMasterclass.ts — /evenements/masterclass (FR) + /en/events/masterclass (EN).
 *
 * Skeleton pré-lancement : structure complète, contenu honnête "première
 * session en préparation". Capture email "Sois notifié" wired sur
 * /api/waitlist (waitlist KV, même endpoint que les bootcamps Trilogie).
 *
 * Sources de vérité :
 *   1. Brief v3 §2 sitemap (Masterclass sous-page sibling de Bootcamps)
 *   2. Carte Types section /evenements (live 2-4h, 15-40 participants,
 *      replay inclus, format accessible)
 *
 * Mode pré-lancement : aucune date promise, aucun témoignage inventé.
 * Sentinel honnête "première édition en préparation".
 */

export const evenementsMasterclassCopy = {
  meta: {
    title: {
      fr: 'Masterclass en ligne — Jonas Diop · sessions live 2 à 4 heures',
      en: 'Online Masterclasses — Jonas Diop · 2 to 4 hour live sessions'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Masterclass live de 2 à 4 heures sur un sujet précis. Format mixte enseignement + hot seats. Idéal pour tester avant un présentiel ou upgrader une compétence ciblée.',
      en: 'Live 2-4 hour masterclasses on a precise subject. Mixed format teaching + hot seats. Ideal to test before an in-person event or to upgrade a targeted skill.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Format en ligne accessible',
      en: 'Accessible online format'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Travaille avec Jonas en live. En 4 heures, pas en 4 jours.',
      en: 'Work with Jonas live. In 4 hours, not 4 days.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Sessions live de 2 à 4 heures sur un sujet précis — pricing, embauche, offre, scaling. Enseignement direct + hot seats. Live + replay inclus.',
      en: 'Live sessions of 2 to 4 hours on a precise subject — pricing, hiring, offer, scaling. Direct teaching + hot seats. Live + replay included.'
    } satisfies BilingualLax<string>,
    microProof: {
      fr: 'Format live 2-4h · 15 à 40 participants · Replay inclus',
      en: 'Live 2-4h format · 15 to 40 participants · Replay included'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Sois notifié des sessions',
      en: 'Get notified about sessions'
    } satisfies BilingualLax<string>
  },

  pitch: {
    eyebrow: {
      fr: 'Pourquoi le format live en ligne',
      en: 'Why live online'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le format pour tester Jonas avant un engagement présentiel.',
      en: 'The format to test Jonas before an in-person commitment.'
    } satisfies BilingualLax<string>,
    pillars: [
      {
        title: {
          fr: 'Sujet précis, pas généraliste',
          en: 'Precise subject, not generalist'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Chaque session attaque UN sujet : ton pricing, ton premier salarié, ta nouvelle offre. Pas de tour d’horizon — un seul levier, à fond.',
          en: 'Each session attacks ONE subject : your pricing, your first hire, your new offer. No overview — one lever, in depth.'
        } satisfies BilingualLax<string>
      },
      {
        title: { fr: 'Live + hot seats', en: 'Live + hot seats' } satisfies BilingualLax<string>,
        body: {
          fr: 'Pas un webinar passif. Quelques participants passent au hot seat avec Jonas. Tu vois le travail réel — pas juste de la théorie.',
          en: 'Not a passive webinar. A few participants take the hot seat with Jonas. You see real work — not just theory.'
        } satisfies BilingualLax<string>
      },
      {
        title: { fr: 'Replay inclus', en: 'Replay included' } satisfies BilingualLax<string>,
        body: {
          fr: 'Tu ne peux pas être en live ? Le replay reste accessible. Tu peux le reprendre, le repartager avec ton équipe.',
          en: 'Can’t attend live? The replay remains accessible. You can rewatch and share with your team.'
        } satisfies BilingualLax<string>
      },
      {
        title: { fr: 'Sans déplacement', en: 'No travel' } satisfies BilingualLax<string>,
        body: {
          fr: 'Tu te connectes depuis ton bureau. Aucun vol, aucun hôtel, aucune semaine bloquée. La plus petite friction pour goûter à la méthodologie.',
          en: 'You connect from your desk. No flight, no hotel, no blocked week. The lowest friction to taste the methodology.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  forWho: {
    eyebrow: {
      fr: 'Pour qui',
      en: 'For whom'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le format le plus accessible de l’écosystème.',
      en: 'The most accessible format of the ecosystem.'
    } satisfies BilingualLax<string>,
    forItems: [
      {
        fr: 'Tu veux tester la méthodologie avant un engagement présentiel',
        en: 'You want to test the methodology before an in-person commitment'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu cherches à upgrader UNE compétence ciblée (pricing, embauche…)',
        en: 'You want to upgrade ONE targeted skill (pricing, hiring…)'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu ne peux pas (encore) bloquer 3 à 5 jours',
        en: 'You cannot (yet) block 3 to 5 days'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu veux partager le replay avec ton équipe',
        en: 'You want to share the replay with your team'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu démarres et tu veux entrer dans l’écosystème',
        en: 'You are starting and want to enter the ecosystem'
      } satisfies BilingualLax<string>
    ],
    notForItems: [
      {
        fr: 'Tu cherches une transformation profonde — vise les bootcamps ou la retraite',
        en: 'You seek deep transformation — aim for the bootcamps or the retreat'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu attends un accompagnement individuel — la masterclass est collective',
        en: 'You expect individual coaching — masterclasses are collective'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu veux des questions illimitées — les hot seats sont sélectifs',
        en: 'You want unlimited questions — hot seats are selective'
      } satisfies BilingualLax<string>
    ]
  },

  format: {
    eyebrow: {
      fr: 'Le format',
      en: 'The format'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Comment ça se passe.',
      en: 'How it unfolds.'
    } satisfies BilingualLax<string>,
    rows: [
      {
        label: { fr: 'Durée', en: 'Duration' } satisfies BilingualLax<string>,
        value: { fr: '2 à 4 heures live', en: '2 to 4 hours live' } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Format', en: 'Format' } satisfies BilingualLax<string>,
        value: {
          fr: 'Enseignement direct + hot seats sélectifs',
          en: 'Direct teaching + selective hot seats'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Audience', en: 'Audience' } satisfies BilingualLax<string>,
        value: {
          fr: 'Tout entrepreneur · 15 à 40 participants',
          en: 'Any entrepreneur · 15 to 40 participants'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Replay', en: 'Replay' } satisfies BilingualLax<string>,
        value: {
          fr: 'Inclus · accessible 90 jours',
          en: 'Included · accessible for 90 days'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Tarif', en: 'Pricing' } satisfies BilingualLax<string>,
        value: {
          fr: 'Communiqué à l’ouverture de la session',
          en: 'Communicated when the session opens'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Première session', en: 'First session' } satisfies BilingualLax<string>,
        value: {
          fr: 'En préparation · liste prioritaire ouverte',
          en: 'In preparation · priority list open'
        } satisfies BilingualLax<string>
      }
    ]
  },

  notify: {
    eyebrow: {
      fr: 'Liste prioritaire',
      en: 'Priority list'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Sois notifié à l’ouverture des sessions.',
      en: 'Get notified when sessions open.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Les masterclass sont annoncées en priorité aux personnes sur cette liste. Aucun engagement — juste être au courant en premier.',
      en: 'Masterclasses are announced in priority to people on this list. No commitment — just hear about it first.'
    } satisfies BilingualLax<string>,
    emailPlaceholder: { fr: 'ton@email.com', en: 'your@email.com' } satisfies BilingualLax<string>,
    submitLabel: {
      fr: 'Me notifier',
      en: 'Notify me'
    } satisfies BilingualLax<string>,
    consentNote: {
      fr: 'En soumettant, tu acceptes d’être notifié (Loi 25 Québec). Pas de spam.',
      en: 'By submitting, you agree to be notified (Quebec Law 25). No spam.'
    } satisfies BilingualLax<string>,
    successMessage: {
      fr: 'Inscrit. Tu seras parmi les premiers à recevoir l’annonce.',
      en: 'Subscribed. You’ll be among the first to receive the announcement.'
    } satisfies BilingualLax<string>
  },

  crossLink: {
    eyebrow: {
      fr: 'Autres formats',
      en: 'Other formats'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Tu veux plus profond ?',
      en: 'Want something deeper?'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'La masterclass est le format le plus accessible. Pour quelque chose de plus tactique ou plus immersif, regarde :',
      en: 'The masterclass is the most accessible format. For something more tactical or more immersive, look at :'
    } satisfies BilingualLax<string>
  }
} as const;
