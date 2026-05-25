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
        fr: "[À VALIDER JONAS — description finale selon nb épisodes + plateformes confirmées]. Le podcast de Jonas Diop sur l'architecture d'affaires, le scaling et la CDT™.",
        en: "[TO VALIDATE WITH JONAS — final description based on confirmed episode count + platforms]. Jonas Diop's podcast on business architecture, scaling, and CDT™."
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
      fr: "[À VALIDER JONAS — H17 statut podcast confirmé. Ex : 'Des conversations longues avec des entrepreneurs qui ont construit quelque chose de réel.']",
      en: "[TO VALIDATE WITH JONAS — H17 podcast status confirmed. E.g. 'Long-form conversations with entrepreneurs who built something real.']"
    } satisfies BilingualLax<string>,
    // SCENARIO_B
    subB: {
      fr: '[À VALIDER JONAS — H17 statut podcast : pas encore lancé. Utiliser cette version si Scénario B actif.]',
      en: '[TO VALIDATE WITH JONAS — H17 podcast status : not yet launched. Use this version if Scenario B active.]'
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
        fr: `[À VALIDER JONAS — format exact, fréquence, durée moyenne des épisodes, positionnement éditorial du podcast. Proposition :]

The Game Changer est le podcast de Jonas Diop sur l'architecture d'affaires, le scaling structurel et la CDT™.

Pas de conversations génériques sur "la motivation de l'entrepreneur". Des échanges avec des fondateurs, coachs et experts qui ont construit quelque chose de réel — avec les chiffres, les décisions difficiles, et les leviers qui ont fait la différence.

Format : [À VALIDER JONAS — durée moyenne épisodes, fréquence publication, invités solo ou toujours Jonas]`,
        en: `[TO VALIDATE WITH JONAS — exact format, frequency, average episode length, editorial positioning. Proposal :]

The Game Changer is Jonas Diop's podcast on business architecture, structural scaling, and CDT™.

No generic conversations about "entrepreneurial motivation." Exchanges with founders, coaches, and experts who built something real — with the numbers, the tough decisions, and the levers that made the difference.

Format : [TO VALIDATE WITH JONAS — average episode length, publication frequency, solo or always Jonas]`
      } satisfies BilingualLax<string>,
      specs: [
        {
          label: { fr: 'Format', en: 'Format' } satisfies BilingualLax<string>,
          value: {
            fr: '[À VALIDER JONAS — ex : Long-form, 45-90 min]',
            en: '[TO VALIDATE WITH JONAS — e.g. Long-form, 45-90 min]'
          } satisfies BilingualLax<string>
        },
        {
          label: { fr: 'Fréquence', en: 'Frequency' } satisfies BilingualLax<string>,
          value: {
            fr: '[À VALIDER JONAS — ex : Bimensuel]',
            en: '[TO VALIDATE WITH JONAS — e.g. Bi-weekly]'
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
        fr: '[À VALIDER JONAS — embed Spotify / Apple Podcasts / YouTube Sprint 5. Lister les 5-6 derniers épisodes avec : titre, invité, durée, description 2 lignes, lien direct.]',
        en: '[TO VALIDATE WITH JONAS — Spotify / Apple Podcasts / YouTube embed Sprint 5. List 5-6 latest episodes with : title, guest, duration, 2-line description, direct link.]'
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
          url: '[À VALIDER JONAS — URL Spotify podcast]',
          available: true
        },
        {
          platform: 'Apple Podcasts',
          url: '[À VALIDER JONAS — URL Apple Podcasts]',
          available: true
        },
        {
          platform: 'YouTube',
          url: '[À VALIDER JONAS — URL YouTube chaîne / playlist podcast]',
          available: true
        }
      ],
      placeholder: {
        fr: '[À VALIDER JONAS — confirmer les plateformes réelles : Spotify, Apple, YouTube, autres ?]',
        en: '[TO VALIDATE WITH JONAS — confirm actual platforms : Spotify, Apple, YouTube, others?]'
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
        fr: '[À VALIDER JONAS — transcriptions disponibles ? Format : article complet par épisode, résumé ou points clés ? Si oui → SEO value importante, chaque épisode devient une page Article indexable.]',
        en: '[TO VALIDATE WITH JONAS — transcriptions available? Format : full article per episode, summary, or key points? If yes → significant SEO value, each episode becomes an indexable Article page.]'
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

[À VALIDER JONAS — date de lancement estimée du premier épisode]`,
        en: `Jonas Diop is preparing The Game Changer — his podcast on business architecture, scaling, and CDT™.

Long-form conversations with entrepreneurs who built something real. No generic motivation. Numbers, decisions, levers.

[TO VALIDATE WITH JONAS — estimated launch date of first episode]`
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
          fr: '[À VALIDER JONAS — plateformes prévues : Spotify / Apple / YouTube / autres]',
          en: '[TO VALIDATE WITH JONAS — planned platforms : Spotify / Apple / YouTube / others]'
        }
      ]
    },

    premierEpisode: {
      eyebrow: {
        fr: 'Premier épisode',
        en: 'First episode'
      } satisfies BilingualLax<string>,
      placeholder: {
        fr: "[À VALIDER JONAS — date prévue premier épisode. Ex : 'Automne 2026' ou date précise si confirmée.]",
        en: "[TO VALIDATE WITH JONAS — planned date for first episode. E.g. 'Fall 2026' or specific date if confirmed.]"
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
        fr: 'Disponible sur Spotify, Apple Podcasts et YouTube. Nouveau épisode [À VALIDER JONAS — fréquence].',
        en: 'Available on Spotify, Apple Podcasts, and YouTube. New episode [TO VALIDATE WITH JONAS — frequency].'
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
