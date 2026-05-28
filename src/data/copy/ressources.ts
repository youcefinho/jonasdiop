import type { BilingualLax } from '@/lib/i18n/types';

/**
 * ressources.ts — Hub articles SEO + Game Changer Protocol resources
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 2
 * [À VALIDER JONAS] markers = frameworks publics à offrir, newsletter fréquence, nb articles existants
 * Articles blog : placeholder — GHL Blog API headless Sprint 5
 */

export const ressourcesCopy = {
  meta: {
    title: {
      fr: 'Ressources — Articles, frameworks & outils CDT™ | Jonas Diop',
      en: 'Resources — Articles, frameworks & CDT™ tools | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Ce que Jonas Diop partage publiquement sur l'architecture d'affaires, le scaling et la CDT™. Articles, frameworks téléchargeables, insights mensuels.",
      en: 'What Jonas Diop shares publicly on business architecture, scaling, and CDT™. Articles, downloadable frameworks, monthly insights.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Ressources',
      en: 'Resources'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Articles, frameworks & outils.',
      en: 'Articles, frameworks & tools.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Ce qu'on partage publiquement de la méthode.",
      en: 'What we share publicly of the method.'
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
      fr: 'Premiers articles en préparation. Inscrivez-vous à la newsletter pour être notifié dès leur publication.',
      en: 'First articles in preparation. Subscribe to the newsletter to be notified at publication.'
    } satisfies BilingualLax<string>,
    emptyState: {
      fr: 'Les premiers articles arrivent prochainement. Inscrivez-vous à la newsletter pour être notifié.',
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
      fr: 'Des extraits publics de la méthode CDT™. Des outils de diagnostic et de structuration que vous pouvez appliquer dès maintenant sur votre architecture.',
      en: 'Public excerpts of the CDT™ method. Diagnostic and structuring tools you can apply immediately to your architecture.'
    } satisfies BilingualLax<string>,
    disclaimer: {
      fr: 'Ces ressources sont des extraits. La méthode complète est dans les programmes.',
      en: 'These resources are excerpts. The complete method is in the programs.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: 'Premiers outils publics en préparation. Pour y accéder en avant-première, inscrivez-vous à la newsletter mensuelle.',
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

  newsletter: {
    eyebrow: {
      fr: 'Newsletter mensuelle',
      en: 'Monthly newsletter'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Insights mensuels CDT™.',
      en: 'Monthly CDT™ insights.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `Un email par mois. Pas de daily hustle, pas de tips motivationnels.

Ce que Jonas partage dans sa newsletter : un insight CDT™ actionnable, un cas client anonymisé, un outil ou framework testé en mandat réel.`,
      en: `One email per month. No daily hustle, no motivational tips.

What Jonas shares in his newsletter : an actionable CDT™ insight, an anonymized client case, a tool or framework tested in a real engagement.`
    } satisfies BilingualLax<string>,
    benefits: [
      {
        fr: '1 insight CDT™ actionnable par mois',
        en: '1 actionable CDT™ insight per month'
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
      fr: 'votre@email.com',
      en: 'your@email.com'
    } satisfies BilingualLax<string>,
    submitLabel: {
      fr: "S'abonner aux insights mensuels",
      en: 'Subscribe to monthly insights'
    } satisfies BilingualLax<string>,
    confirmationMessage: {
      fr: 'Vous êtes abonné. Premier email à la prochaine publication.',
      en: "You're subscribed. First email at the next publication."
    } satisfies BilingualLax<string>
  },

  finalCta: {
    eyebrow: {
      fr: 'Prochaine étape',
      en: 'Next step'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Appliquer la méthode à votre architecture.',
      en: 'Apply the method to your architecture.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Les ressources publiques sont des extraits. Pour appliquer la CDT™ à votre situation, un appel de qualification valide si nos programmes correspondent.',
      en: 'Public resources are excerpts. To apply CDT™ to your situation, a qualification call confirms whether our programs are a fit.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: "Réserver l'appel de qualification",
      en: 'Book the qualification call'
    } satisfies BilingualLax<string>
  }
} as const;
