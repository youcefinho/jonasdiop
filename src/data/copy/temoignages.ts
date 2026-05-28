import type { BilingualLax } from '@/lib/i18n/types';

/**
 * temoignages.ts — Page Témoignages dédiée (pattern Dan Martell /elite-testimonials/)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 2
 * [À VALIDER JONAS] markers = témoignages vrais, case study, autorisations publi
 * Shells 3 placeholders actifs — vrais témoignages H3 pending Jonas
 */

export const temoignagesCopy = {
  meta: {
    title: {
      fr: 'Témoignages — 857 entrepreneurs ont ajouté un zéro | Jonas Diop',
      en: 'Testimonials — 857 entrepreneurs have added a zero | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Résultats clients CDT™ en chiffres : cas réels, métriques mesurables, retours authentiques. Entrepreneurs entre 100K$ et 1M$+ CA accompagnés par Jonas Diop.',
      en: 'Client CDT™ results in numbers : real cases, measurable metrics, authentic feedback. Entrepreneurs between $100K and $1M+ CAD supported by Jonas Diop.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Témoignages',
      en: 'Testimonials'
    } satisfies BilingualLax<string>,
    h1: {
      fr: '857 entrepreneurs ont déjà ajouté un zéro.',
      en: '857 entrepreneurs have already added a zero.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Voici ce qu'ils en disent.",
      en: 'Here is what they say about it.'
    } satisfies BilingualLax<string>
  },

  methodology: {
    eyebrow: {
      fr: 'Méthodologie',
      en: 'Methodology'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Comment on sélectionne les témoignages.',
      en: 'How we select testimonials.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `Pas de filtrage "best of". Pas de témoignages génériques ("Jonas est incroyable").

On publie uniquement des retours avec métriques chiffrées : CA avant / CA après, temps récupéré, levier identifié. Si un client ne peut pas ou ne veut pas partager de chiffres, le témoignage n'est pas publié.

Les résultats présentés sont représentatifs des entrepreneurs qui ont exécuté les programmes complètement. Résultats variables selon engagement et situation de départ.`,
      en: `No "best of" filtering. No generic testimonials ("Jonas is incredible").

We publish only feedback with quantified metrics : before / after revenue, time reclaimed, lever identified. If a client cannot or will not share numbers, the testimonial is not published.

Results presented are representative of entrepreneurs who fully completed the programs. Results vary based on engagement and starting situation.`
    } satisfies BilingualLax<string>
  },

  filters: {
    eyebrow: {
      fr: 'Filtres',
      en: 'Filters'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Filtrer par profil.',
      en: 'Filter by profile.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: 'Filtres bientôt actifs — par programme, par CA, par industrie.',
      en: 'Filters coming soon — by program, by revenue, by industry.'
    } satisfies BilingualLax<string>,
    categories: {
      byProgram: {
        label: {
          fr: 'Par programme',
          en: 'By program'
        } satisfies BilingualLax<string>,
        options: [
          { fr: 'Tous', en: 'All' },
          { fr: 'Gamechanger Scaling', en: 'Gamechanger Scaling' },
          { fr: 'The Shift', en: 'The Shift' },
          { fr: 'Master Closing', en: 'Master Closing' },
          { fr: 'Consultations Privées', en: 'Private Consultations' }
        ]
      },
      byRevenue: {
        label: { fr: 'Par CA', en: 'By revenue' } satisfies BilingualLax<string>,
        options: [
          { fr: 'Tous', en: 'All' },
          { fr: '100K$–250K$', en: '$100K–$250K' },
          { fr: '250K$–500K$', en: '$250K–$500K' },
          { fr: '500K$–1M$', en: '$500K–$1M' },
          { fr: '1M$+', en: '$1M+' }
        ]
      },
      byIndustry: {
        label: {
          fr: 'Par industrie',
          en: 'By industry'
        } satisfies BilingualLax<string>,
        options: [
          { fr: 'Tous', en: 'All' },
          { fr: 'Coaching / Consulting', en: 'Coaching / Consulting' },
          { fr: 'Services professionnels', en: 'Professional services' },
          { fr: 'E-commerce', en: 'E-commerce' },
          { fr: 'Tech / SaaS', en: 'Tech / SaaS' },
          { fr: 'Immobilier', en: 'Real estate' }
        ]
      }
    }
  },

  grid: {
    eyebrow: {
      fr: 'Résultats clients',
      en: 'Client results'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce que la CDT™ a construit pour eux.',
      en: 'What CDT™ built for them.'
    } satisfies BilingualLax<string>,
    shells: [
      {
        id: 'shell-01',
        pending: true,
        name: '',
        title: { fr: '', en: '' } satisfies BilingualLax<string>,
        program: {
          fr: 'Gamechanger Scaling',
          en: 'Gamechanger Scaling'
        } satisfies BilingualLax<string>,
        result: { fr: '', en: '' } satisfies BilingualLax<string>,
        quote: { fr: '', en: '' } satisfies BilingualLax<string>
      },
      {
        id: 'shell-02',
        pending: true,
        name: '',
        title: { fr: '', en: '' } satisfies BilingualLax<string>,
        program: {
          fr: 'The Shift',
          en: 'The Shift'
        } satisfies BilingualLax<string>,
        result: { fr: '', en: '' } satisfies BilingualLax<string>,
        quote: { fr: '', en: '' } satisfies BilingualLax<string>
      },
      {
        id: 'shell-03',
        pending: true,
        name: '',
        title: { fr: '', en: '' } satisfies BilingualLax<string>,
        program: {
          fr: 'Consultations Privées',
          en: 'Private Consultations'
        } satisfies BilingualLax<string>,
        result: { fr: '', en: '' } satisfies BilingualLax<string>,
        quote: { fr: '', en: '' } satisfies BilingualLax<string>
      }
    ]
  },

  onRequest: {
    title: {
      fr: 'Cas clients disponibles sur demande.',
      en: 'Client cases available on request.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Les retours détaillés avec métriques chiffrées sont communiqués lors de l'appel de qualification, dans le respect de la confidentialité de chaque mandat.",
      en: 'Detailed feedback with quantified metrics is shared during the qualification call, with full respect for each mandate’s confidentiality.'
    } satisfies BilingualLax<string>
  },

  disclaimer: {
    body: {
      fr: "Témoignages clients en attente d'autorisation de publication. Premières publications prochainement.",
      en: 'Client testimonials pending publication authorization. First publications coming soon.'
    } satisfies BilingualLax<string>,
    legal: {
      fr: 'Résultats variables selon engagement et exécution. Témoignages représentatifs, non garantis.',
      en: 'Results vary based on engagement and execution. Testimonials are representative, not guaranteed.'
    } satisfies BilingualLax<string>
  },

  caseStudy: {
    pending: true,
    eyebrow: {
      fr: 'Étude de cas',
      en: 'Case study'
    } satisfies BilingualLax<string>,
    title: { fr: '', en: '' } satisfies BilingualLax<string>,
    teaser: { fr: '', en: '' } satisfies BilingualLax<string>
  },

  finalCta: {
    eyebrow: {
      fr: 'Prochaine étape',
      en: 'Next step'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Voir si on peut faire partie de ton histoire.',
      en: 'See if we can be part of your story.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Un appel de qualification pour évaluer si ta situation correspond à nos programmes — et si les résultats présentés ici sont transposables à ton architecture.',
      en: 'A qualification call to assess whether your situation fits our programs — and whether the results shown here are transposable to your architecture.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver mon appel stratégique',
      en: 'Book my strategy call'
    } satisfies BilingualLax<string>
  }
} as const;
