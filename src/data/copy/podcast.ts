import type { BilingualLax } from '@/lib/i18n/types';

/**
 * podcast.ts — Page Podcast "The Game Changer"
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 2
 * [À VALIDER JONAS] markers = statut podcast (H17 pending Jonas), plateformes, épisodes
 *
 * DEUX SCÉNARIOS DRAFTÉS :
 * SCENARIO_A — Le podcast existe et est actif (Spotify / Apple / YouTube)
 * SCENARIO_B — Le podcast n'est pas encore lancé (capture waitlist)
 *
 * Jonas choisit lequel activer une fois H17 confirmé.
 * Le composant page devra rendre UNIQUEMENT le scénario actif.
 * Commenter/activer via flag dans clientConfig.ts Sprint 5 : podcastStatus: 'live' | 'coming_soon'
 */

export const podcastCopy = {
  meta: {
    // SCENARIO_A — podcast existe
    scenarioA: {
      title: {
        fr: 'The Game Changer Podcast — Conversations avec des entrepreneurs scalers | Jonas Diop',
        en: 'The Game Changer Podcast — Conversations with scaling entrepreneurs | Jonas Diop'
      } satisfies BilingualLax<string>,
      description: {
        fr: "Le podcast de Jonas Diop sur l'architecture d'affaires, le scaling et la CDT™.",
        en: "Jonas Diop's podcast on business architecture, scaling, and CDT™."
      } satisfies BilingualLax<string>
    },
    // SCENARIO_B — podcast bientôt lancé
    scenarioB: {
      title: {
        fr: 'The Game Changer — Podcast à venir | Jonas Diop',
        en: 'The Game Changer — Podcast coming soon | Jonas Diop'
      } satisfies BilingualLax<string>,
      description: {
        fr: "Le podcast de Jonas Diop sur l'architecture d'affaires arrive prochainement. Inscrivez-vous pour être notifié dès le premier épisode.",
        en: "Jonas Diop's podcast on business architecture is coming soon. Sign up to be notified at the first episode."
      } satisfies BilingualLax<string>
    }
  },

  hero: {
    eyebrow: {
      fr: 'Podcast · The Game Changer',
      en: 'Podcast · The Game Changer'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'The Game Changer Podcast.',
      en: 'The Game Changer Podcast.'
    } satisfies BilingualLax<string>,
    // SCENARIO_A
    subA: {
      fr: 'Des conversations longues avec des entrepreneurs qui ont construit quelque chose de réel.',
      en: 'Long-form conversations with entrepreneurs who built something real.'
    } satisfies BilingualLax<string>,
    // SCENARIO_B
    subB: {
      fr: 'Le podcast en préparation. Premier épisode annoncé en avant-première aux abonnés.',
      en: 'The podcast is in preparation. The first episode is announced to subscribers first.'
    } satisfies BilingualLax<string>
  },

  // ─────────────────────────────────────────────
  // SCENARIO_A — Podcast existe et est actif
  // ─────────────────────────────────────────────

  scenarioA: {
    about: {
      eyebrow: {
        fr: 'Le podcast',
        en: 'The podcast'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Des conversations sans filet avec des entrepreneurs qui exécutent.',
        en: 'Unscripted conversations with entrepreneurs who execute.'
      } satisfies BilingualLax<string>,
      body: {
        fr: `The Game Changer est le podcast de Jonas Diop sur l'architecture d'affaires, le scaling structurel et la CDT™.

Pas de conversations génériques sur "la motivation de l'entrepreneur". Des échanges avec des fondateurs, coachs et experts qui ont construit quelque chose de réel — avec les chiffres, les décisions difficiles, et les leviers qui ont fait la différence.`,
        en: `The Game Changer is Jonas Diop's podcast on business architecture, structural scaling, and CDT™.

No generic conversations about "entrepreneurial motivation." Exchanges with founders, coaches, and experts who built something real — with the numbers, the tough decisions, and the levers that made the difference.`
      } satisfies BilingualLax<string>,
      specs: [
        {
          label: { fr: 'Format', en: 'Format' } satisfies BilingualLax<string>,
          value: {
            fr: 'Long-form · 45 à 90 min',
            en: 'Long-form · 45 to 90 min'
          } satisfies BilingualLax<string>
        },
        {
          label: { fr: 'Fréquence', en: 'Frequency' } satisfies BilingualLax<string>,
          value: {
            fr: 'Publication régulière',
            en: 'Regular publication'
          } satisfies BilingualLax<string>
        },
        {
          label: { fr: 'Sujets', en: 'Topics' } satisfies BilingualLax<string>,
          value: {
            fr: 'Architecture · Scaling · Closing · Cash flow · CDT™',
            en: 'Architecture · Scaling · Closing · Cash flow · CDT™'
          } satisfies BilingualLax<string>
        }
      ]
    },

    episodes: {
      eyebrow: {
        fr: 'Épisodes récents',
        en: 'Recent episodes'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Derniers épisodes.',
        en: 'Latest episodes.'
      } satisfies BilingualLax<string>,
      placeholder: {
        fr: 'Liste des derniers épisodes en cours de connexion. Réessayez dans quelques instants ou écoutez directement sur votre plateforme préférée.',
        en: 'Latest episode list is connecting. Try again shortly or listen directly on your preferred platform.'
      } satisfies BilingualLax<string>
    },

    platforms: {
      eyebrow: {
        fr: 'Disponible sur',
        en: 'Available on'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Où écouter.',
        en: 'Where to listen.'
      } satisfies BilingualLax<string>,
      items: [
        {
          platform: 'Spotify',
          url: '',
          available: false
        },
        {
          platform: 'Apple Podcasts',
          url: '',
          available: false
        },
        {
          platform: 'YouTube',
          url: '',
          available: false
        }
      ],
      placeholder: {
        fr: 'Liens directs confirmés au lancement.',
        en: 'Direct links confirmed at launch.'
      } satisfies BilingualLax<string>
    },

    transcriptions: {
      eyebrow: {
        fr: 'Transcriptions',
        en: 'Transcriptions'
      } satisfies BilingualLax<string>,
      title: {
        fr: "Lire plutôt qu'écouter.",
        en: 'Read instead of listen.'
      } satisfies BilingualLax<string>,
      body: {
        fr: 'Transcriptions et résumés clés publiés au fur et à mesure que le podcast avance.',
        en: 'Transcripts and key summaries published progressively as the podcast unfolds.'
      } satisfies BilingualLax<string>
    },

    schemaPlaceholder: {
      note: 'Sprint 5 : Schema.org PodcastSeries + PodcastEpisode via HTMLRewriter worker. 1 schema PodcastSeries sur /podcast, 1 PodcastEpisode par transcription. SEO longue traîne épisodes.'
    }
  },

  // ─────────────────────────────────────────────
  // SCENARIO_B — Podcast pas encore lancé
  // ─────────────────────────────────────────────

  scenarioB: {
    comingSoon: {
      eyebrow: {
        fr: 'Bientôt',
        en: 'Coming soon'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Le podcast arrive.',
        en: 'The podcast is coming.'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Jonas Diop prépare The Game Changer — son podcast sur l'architecture d'affaires, le scaling et la CDT™.

Des conversations longues avec des entrepreneurs qui ont construit quelque chose de réel. Pas de motivation générique. Des chiffres, des décisions, des leviers.

Date de lancement annoncée en avant-première aux abonnés à la liste.`,
        en: `Jonas Diop is preparing The Game Changer — his podcast on business architecture, scaling, and CDT™.

Long-form conversations with entrepreneurs who built something real. No generic motivation. Numbers, decisions, levers.

Launch date announced first to waitlist subscribers.`
      } satisfies BilingualLax<string>
    },

    formatPrevu: {
      eyebrow: {
        fr: 'Format prévu',
        en: 'Planned format'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Ce que vous pouvez attendre.',
        en: 'What to expect.'
      } satisfies BilingualLax<string>,
      items: [
        {
          fr: 'Conversations longues (45-90 min) sans script',
          en: 'Long-form conversations (45-90 min) without a script'
        },
        {
          fr: 'Invités : entrepreneurs scalers, coachs et experts en exécution',
          en: 'Guests : scaling entrepreneurs, coaches, and execution experts'
        },
        {
          fr: "Sujets : architecture d'affaires, CDT™, closing, cash flow, scaling sans épuisement",
          en: 'Topics : business architecture, CDT™, closing, cash flow, scaling without burnout'
        },
        {
          fr: 'Diffusion prévue sur Spotify, Apple Podcasts et YouTube',
          en: 'Planned distribution on Spotify, Apple Podcasts, and YouTube'
        }
      ]
    },

    premierEpisode: {
      eyebrow: {
        fr: 'Premier épisode',
        en: 'First episode'
      } satisfies BilingualLax<string>,
      placeholder: {
        fr: 'Date annoncée en avant-première aux abonnés à la liste.',
        en: 'Date announced first to waitlist subscribers.'
      } satisfies BilingualLax<string>
    },

    waitlist: {
      eyebrow: {
        fr: 'Notifié au lancement',
        en: 'Notified at launch'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Soyez notifié dès le premier épisode.',
        en: 'Be notified at the first episode.'
      } satisfies BilingualLax<string>,
      sub: {
        fr: 'Inscrivez votre email pour recevoir une notification dès que le premier épisode est disponible.',
        en: 'Add your email to receive a notification as soon as the first episode is available.'
      } satisfies BilingualLax<string>,
      emailPlaceholder: {
        fr: 'votre@email.com',
        en: 'your@email.com'
      } satisfies BilingualLax<string>,
      submitLabel: {
        fr: "M'avertir au lancement",
        en: 'Notify me at launch'
      } satisfies BilingualLax<string>,
      confirmationMessage: {
        fr: "C'est noté. On vous écrit dès le premier épisode.",
        en: "Got it. We'll reach out at the first episode."
      } satisfies BilingualLax<string>
    }
  },

  // ─────────────────────────────────────────────
  // Final CTA — commun aux deux scénarios (adapté selon contexte)
  // ─────────────────────────────────────────────

  finalCta: {
    // SCENARIO_A
    scenarioA: {
      eyebrow: {
        fr: 'Ne manquez aucun épisode',
        en: 'Never miss an episode'
      } satisfies BilingualLax<string>,
      title: {
        fr: "S'abonner sur votre plateforme préférée.",
        en: 'Subscribe on your preferred platform.'
      } satisfies BilingualLax<string>,
      sub: {
        fr: 'Disponible sur Spotify, Apple Podcasts et YouTube. Nouveaux épisodes publiés régulièrement.',
        en: 'Available on Spotify, Apple Podcasts, and YouTube. New episodes published regularly.'
      } satisfies BilingualLax<string>,
      ctaLabel: {
        fr: 'Écouter le dernier épisode',
        en: 'Listen to the latest episode'
      } satisfies BilingualLax<string>
    },
    // SCENARIO_B
    scenarioB: {
      eyebrow: {
        fr: 'Notifications lancement',
        en: 'Launch notifications'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Notifications nouveaux épisodes.',
        en: 'New episode notifications.'
      } satisfies BilingualLax<string>,
      sub: {
        fr: 'Inscrivez-vous pour être parmi les premiers à écouter dès le lancement.',
        en: 'Sign up to be among the first to listen at launch.'
      } satisfies BilingualLax<string>,
      ctaLabel: {
        fr: "M'inscrire aux notifications",
        en: 'Sign me up for notifications'
      } satisfies BilingualLax<string>
    }
  }
} as const;
