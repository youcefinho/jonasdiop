import type { BilingualLax } from '@/lib/i18n/types';

/**
 * ressources.ts — Hub Ressources brief v3 §3.9.
 *
 * 5 sections : Hero (newsletter capture inline) · Podcast The Game Changer ·
 * Blog (articles + catégories + filtres) · Vidéos (id="videos" anchor) ·
 * Lead magnet final ("1 stratégie de scaling actionnable / semaine").
 *
 * Tone : TU partout.
 * Copy source : BRIEF v3 (mai 2026) + brief signé.
 * Draft : 2026-05-29 · Beef-up Ressources page brief v3 §3.9.
 *
 * Pending decisions externes Jonas :
 *  - URLs plateformes podcast (Spotify · Apple · YouTube · Google)
 *  - URLs vidéos YouTube embed réelles (4 vignettes placeholders prêtes à wire)
 *  - Lien chaîne YouTube ("S'abonner à la chaîne")
 *  - Endpoint newsletter GHL upsert (Sprint 6)
 *  - Vrais articles via GHL Blog API headless (Sprint 5+)
 *
 * Tests existants à NE PAS casser (tests/components/sections/RessourcesPage.test.tsx) :
 *  - Hero H1 contient "Articles" (FR/EN)
 *  - data-articles-empty avec text /premiers articles arrivent/i
 *  - data-categories-list 5 li, labels FR Architecture/Scaling/Closing/Cash flow/Mindset
 *  - data-frameworks-list null (shells vide)
 *  - data-newsletter-benefits 4 li
 *  - input[name="email"] disabled + button[type="submit"] disabled
 *  - finalCta contient texte "S'abonner"
 */

export const ressourcesCopy = {
  meta: {
    title: {
      fr: 'Ressources — Articles, podcast, vidéos & frameworks CDT™ | Jonas Diop',
      en: 'Resources — Articles, podcast, videos & CDT™ frameworks | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Stratégies, méthodes et inspirations pour scaler. Articles, podcast The Game Changer, vidéos et frameworks CDT™ — ce que Jonas Diop partage publiquement.',
      en: 'Strategies, methods, and inspiration to scale. Articles, The Game Changer podcast, videos, and CDT™ frameworks — what Jonas Diop shares publicly.'
    } satisfies BilingualLax<string>
  },

  // ─────────────────────────────────────────────
  // 1) HERO — newsletter capture inline
  // ─────────────────────────────────────────────

  hero: {
    eyebrow: {
      fr: 'Ressources',
      en: 'Resources'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Stratégies, méthodes & inspirations pour scaler. Articles, podcast, vidéos & frameworks.',
      en: 'Strategies, methods & inspiration to scale. Articles, podcast, videos & frameworks.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Ce que Jonas Diop partage publiquement de la méthode. Reçois chaque mois les nouveaux contenus directement par email — pas de motivation générique, juste l'essentiel exploitable.",
      en: 'What Jonas Diop shares publicly of the method. Get new content delivered monthly — no generic motivation, just the actionable essentials.'
    } satisfies BilingualLax<string>,
    newsletterEyebrow: {
      fr: 'Abonnement régulier',
      en: 'Regular subscription'
    } satisfies BilingualLax<string>,
    emailPlaceholder: {
      fr: 'ton@email.com',
      en: 'your@email.com'
    } satisfies BilingualLax<string>,
    submitLabel: {
      fr: 'Recevoir les ressources',
      en: 'Get the resources'
    } satisfies BilingualLax<string>,
    privacyNote: {
      fr: 'Un email par mois maximum. Désabonnement en un clic. Aucun spam.',
      en: 'One email per month max. One-click unsubscribe. No spam.'
    } satisfies BilingualLax<string>
  },

  // ─────────────────────────────────────────────
  // 2) PODCAST — The Game Changer (3-5 derniers + plateformes)
  // ─────────────────────────────────────────────

  podcast: {
    eyebrow: {
      fr: 'Podcast · The Game Changer',
      en: 'Podcast · The Game Changer'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le podcast.',
      en: 'The podcast.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Des conversations sans filet avec des entrepreneurs qui exécutent. Pas de motivation générique — des chiffres, des décisions difficiles, des leviers qui ont fait la différence.',
      en: 'Unscripted conversations with entrepreneurs who execute. No generic motivation — numbers, tough decisions, levers that made the difference.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: 'Derniers épisodes en cours de connexion. Écoute directement sur ta plateforme préférée.',
      en: 'Latest episodes are connecting. Listen directly on your preferred platform.'
    } satisfies BilingualLax<string>,
    platforms: [
      {
        id: 'spotify',
        name: 'Spotify',
        description: {
          fr: 'Streaming · épisodes longs',
          en: 'Streaming · long-form episodes'
        } satisfies BilingualLax<string>
      },
      {
        id: 'apple',
        name: 'Apple Podcasts',
        description: {
          fr: 'iOS · auto-download',
          en: 'iOS · auto-download'
        } satisfies BilingualLax<string>
      },
      {
        id: 'youtube',
        name: 'YouTube',
        description: {
          fr: 'Vidéo · transcriptions',
          en: 'Video · transcriptions'
        } satisfies BilingualLax<string>
      },
      {
        id: 'google',
        name: 'Google Podcasts',
        description: {
          fr: 'Android · auto-sync',
          en: 'Android · auto-sync'
        } satisfies BilingualLax<string>
      }
    ],
    ctaLabel: {
      fr: 'Voir tous les épisodes',
      en: 'View all episodes'
    } satisfies BilingualLax<string>
  },

  // ─────────────────────────────────────────────
  // 3) BLOG — articles récents + 5 catégories + recherche
  // ─────────────────────────────────────────────

  blog: {
    eyebrow: {
      fr: 'Blog · Articles',
      en: 'Blog · Articles'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Articles & analyses.',
      en: 'Articles & analyses.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Architecture d'affaires, scaling, closing, cash flow. Les analyses publiées au fil des mandats — extraits publics de la méthode CDT™.",
      en: 'Business architecture, scaling, closing, cash flow. Analyses published as engagements unfold — public excerpts of the CDT™ method.'
    } satisfies BilingualLax<string>,
    searchPlaceholder: {
      fr: 'Rechercher un article…',
      en: 'Search an article…'
    } satisfies BilingualLax<string>,
    searchLabel: {
      fr: 'Rechercher dans les articles',
      en: 'Search articles'
    } satisfies BilingualLax<string>,
    filterAllLabel: {
      fr: 'Tous les sujets',
      en: 'All topics'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Voir tous les articles',
      en: 'View all articles'
    } satisfies BilingualLax<string>
  },

  articlesRecents: {
    eyebrow: {
      fr: 'Articles récents',
      en: 'Recent articles'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Derniers articles.',
      en: 'Latest articles.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: 'Premiers articles en préparation. Inscris-toi à la newsletter pour être notifié dès leur publication.',
      en: 'First articles in preparation. Subscribe to the newsletter to be notified at publication.'
    } satisfies BilingualLax<string>,
    emptyState: {
      fr: 'Les premiers articles arrivent prochainement. Inscris-toi à la newsletter pour être notifié.',
      en: 'First articles coming soon. Subscribe to the newsletter to be notified.'
    } satisfies BilingualLax<string>
  },

  categories: {
    eyebrow: {
      fr: 'Catégories',
      en: 'Categories'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Parcourir par thème.',
      en: 'Browse by topic.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'architecture',
        label: { fr: 'Architecture', en: 'Architecture' } satisfies BilingualLax<string>,
        description: {
          fr: 'Offre, systèmes, équipe — construire le bon cadre',
          en: 'Offer, systems, team — building the right framework'
        } satisfies BilingualLax<string>
      },
      {
        id: 'scaling',
        label: { fr: 'Scaling', en: 'Scaling' } satisfies BilingualLax<string>,
        description: {
          fr: 'Croissance structurelle sans sacrifier les marges',
          en: 'Structural growth without sacrificing margins'
        } satisfies BilingualLax<string>
      },
      {
        id: 'closing',
        label: { fr: 'Closing', en: 'Closing' } satisfies BilingualLax<string>,
        description: {
          fr: 'Vendre des programmes à fort ticket sans friction',
          en: 'Selling high-ticket programs without friction'
        } satisfies BilingualLax<string>
      },
      {
        id: 'cash-flow',
        label: { fr: 'Cash flow', en: 'Cash flow' } satisfies BilingualLax<string>,
        description: {
          fr: 'Gérer et optimiser la trésorerie en croissance',
          en: 'Manage and optimize cash flow during growth'
        } satisfies BilingualLax<string>
      },
      {
        id: 'mindset',
        label: { fr: 'Mindset', en: 'Mindset' } satisfies BilingualLax<string>,
        description: {
          fr: "Posture de l'entrepreneur à fort levier — sans guru-speak",
          en: 'High-leverage entrepreneur mindset — no guru-speak'
        } satisfies BilingualLax<string>
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 4) VIDÉOS — id="videos" anchor (brief v3 nav anchor depuis Home / Conférences)
  // ─────────────────────────────────────────────

  videos: {
    eyebrow: {
      fr: 'Vidéos',
      en: 'Videos'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Extraits, keynotes & analyses vidéo.',
      en: 'Excerpts, keynotes & video analyses.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Extraits de conférences, capsules méthodologie CDT™ et analyses courtes. Format dense, sans remplissage — ce que tu peux appliquer immédiatement.',
      en: 'Conference excerpts, CDT™ methodology capsules, and short analyses. Dense format, no filler — what you can apply immediately.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: 'Vidéos en cours de publication. Abonne-toi à la chaîne pour être notifié des prochaines.',
      en: 'Videos are being published. Subscribe to the channel to be notified of upcoming ones.'
    } satisfies BilingualLax<string>,
    subscribeLabel: {
      fr: "S'abonner à la chaîne",
      en: 'Subscribe to the channel'
    } satisfies BilingualLax<string>,
    categories: [
      { id: 'all', label: { fr: 'Toutes', en: 'All' } satisfies BilingualLax<string> },
      { id: 'keynote', label: { fr: 'Keynotes', en: 'Keynotes' } satisfies BilingualLax<string> },
      {
        id: 'methode',
        label: { fr: 'Méthode CDT™', en: 'CDT™ Method' } satisfies BilingualLax<string>
      },
      {
        id: 'extraits',
        label: { fr: 'Extraits podcast', en: 'Podcast clips' } satisfies BilingualLax<string>
      }
    ],
    items: [
      {
        id: 'video-1',
        category: 'keynote',
        durationLabel: {
          fr: 'Keynote · 12 min',
          en: 'Keynote · 12 min'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Architecture d’affaires : les trois piliers qui résistent au scale.',
          en: 'Business architecture: the three pillars that survive scale.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'video-2',
        category: 'methode',
        durationLabel: {
          fr: 'Capsule · 6 min',
          en: 'Capsule · 6 min'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'CDT™ — comment diagnostiquer une offre qui plafonne.',
          en: 'CDT™ — diagnose an offer that has plateaued.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'video-3',
        category: 'extraits',
        durationLabel: {
          fr: 'Extrait · 8 min',
          en: 'Clip · 8 min'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Closing à fort ticket : pourquoi tes prospects partent au mauvais moment.',
          en: 'High-ticket closing: why your prospects walk at the wrong moment.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'video-4',
        category: 'methode',
        durationLabel: {
          fr: 'Capsule · 5 min',
          en: 'Capsule · 5 min'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Cash flow en croissance : trois ratios à monitorer chaque semaine.',
          en: 'Cash flow during growth: three ratios to monitor weekly.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  // ─────────────────────────────────────────────
  // FRAMEWORKS — kept (hidden behind shells.length > 0 — Sprint 5 publication)
  // ─────────────────────────────────────────────

  frameworks: {
    eyebrow: {
      fr: 'Frameworks CDT™',
      en: 'CDT™ Frameworks'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Téléchargements gratuits.',
      en: 'Free downloads.'
    } satisfies BilingualLax<string>,
    body: {
      fr: 'Des extraits publics de la méthode CDT™. Des outils de diagnostic et de structuration que tu peux appliquer dès maintenant sur ton architecture.',
      en: 'Public excerpts of the CDT™ method. Diagnostic and structuring tools you can apply immediately to your architecture.'
    } satisfies BilingualLax<string>,
    disclaimer: {
      fr: 'Ces ressources sont des extraits. La méthode complète est dans les programmes.',
      en: 'These resources are excerpts. The complete method is in the programs.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: 'Premiers outils publics en préparation. Pour y accéder en avant-première, inscris-toi à la newsletter mensuelle.',
      en: 'First public tools in preparation. To get early access, subscribe to the monthly newsletter.'
    } satisfies BilingualLax<string>,
    shells: [] as readonly {
      readonly id: string;
      readonly title: BilingualLax<string>;
      readonly description: BilingualLax<string>;
      readonly format: string;
      readonly ctaLabel: BilingualLax<string>;
    }[]
  },

  // ─────────────────────────────────────────────
  // 5) LEAD MAGNET FINAL — promise value-driven plus longue
  //    (vs Hero = abonnement régulier "court")
  // ─────────────────────────────────────────────

  newsletter: {
    eyebrow: {
      fr: 'Lead magnet · Insights hebdomadaires',
      en: 'Lead magnet · Weekly insights'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Reçois chaque semaine 1 stratégie de scaling actionnable.',
      en: 'Get one actionable scaling strategy every week.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `Un email par semaine. Pas de hustle quotidien, pas de tips motivationnels.

Ce que Jonas partage : 1 stratégie de scaling testée en mandat réel, avec le contexte, les chiffres, et la décision exacte à prendre cette semaine pour faire bouger ton architecture.`,
      en: `One email per week. No daily hustle, no motivational tips.

What Jonas shares: 1 scaling strategy tested in a real engagement — with the context, the numbers, and the exact decision to make this week to move your architecture.`
    } satisfies BilingualLax<string>,
    benefits: [
      {
        fr: '1 stratégie de scaling actionnable par semaine',
        en: '1 actionable scaling strategy per week'
      },
      {
        fr: 'Cas clients anonymisés avec chiffres réels',
        en: 'Anonymized client cases with real numbers'
      },
      {
        fr: 'Outils et frameworks testés en mandats réels',
        en: 'Tools and frameworks tested in real engagements'
      },
      {
        fr: 'Accès aux nouvelles ressources en avant-première',
        en: 'Early access to new resources'
      }
    ],
    emailPlaceholder: {
      fr: 'ton@email.com',
      en: 'your@email.com'
    } satisfies BilingualLax<string>,
    submitLabel: {
      fr: "S'abonner aux insights mensuels",
      en: 'Subscribe to monthly insights'
    } satisfies BilingualLax<string>,
    confirmationMessage: {
      fr: 'Tu es abonné. Premier email à la prochaine publication.',
      en: "You're subscribed. First email at the next publication."
    } satisfies BilingualLax<string>
  },

  finalCta: {
    eyebrow: {
      fr: 'Prochaine étape',
      en: 'Next step'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Appliquer la méthode à ton architecture.',
      en: 'Apply the method to your architecture.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Les ressources publiques sont des extraits. Pour appliquer la CDT™ à ta situation, un appel de qualification valide si nos programmes correspondent.',
      en: 'Public resources are excerpts. To apply CDT™ to your situation, a qualification call confirms whether our programs are a fit.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver mon appel stratégique',
      en: 'Book my strategy call'
    } satisfies BilingualLax<string>
  }
} as const;
