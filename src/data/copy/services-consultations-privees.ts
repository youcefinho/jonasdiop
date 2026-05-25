import type { BilingualLax } from '@/lib/i18n/types';

/**
 * services-consultations-privees.ts — LP Consultations Privées (premium tier 1:1)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 * Tier premium : ton sobre, sans pression commerciale, sélectivité explicite
 */

export const consultationsPriveesCopy = {
  meta: {
    title: {
      fr: 'Consultations Privées — Accompagnement Stratégique 1:1 | Jonas Diop',
      en: 'Private Consultations — 1:1 Strategic Advisory | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Accompagnement stratégique 1:1 avec Jonas Diop. Sur invitation, pour entrepreneurs 1M$+ CA. Accès direct. Disponibilité limitée.',
      en: '1:1 strategic advisory with Jonas Diop. By invitation, for $1M+ CAD entrepreneurs. Direct access. Limited availability.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Accompagnement 1:1 · sur invitation',
      en: '1:1 advisory · by invitation'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Consultations Privées',
      en: 'Private Consultations'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Travail stratégique 1:1. Accès direct à Jonas. Disponibilité restreinte.',
      en: '1:1 strategic work. Direct access to Jonas. Restricted availability.'
    } satisfies BilingualLax<string>,
    badge: {
      fr: 'Sur invitation · Disponibilité très limitée',
      en: 'By invitation · Very limited availability'
    } satisfies BilingualLax<string>
  },

  positioning: {
    eyebrow: {
      fr: "Ce que c'est — et ce que ce n'est pas",
      en: 'What it is — and what it is not'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Un mandat stratégique. Pas un programme.',
      en: 'A strategic engagement. Not a program.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Les Consultations Privées ne sont pas un programme de groupe avec un accès prioritaire. Ce ne sont pas des sessions de coaching hebdomadaires génériques.\n\nC'est un mandat stratégique 1:1 sur 90 jours avec Jonas Diop directement. Un audit complet de votre situation. Un plan d'action sur-mesure. Un accès direct pour les décisions qui comptent.\n\nLe format est conçu pour des entrepreneurs et experts qui ont déjà validé leur marché, qui opèrent à un niveau où les décisions stratégiques ont des conséquences réelles, et qui ont besoin d'un regard externe précis — pas de réassurance générique.",
      en: 'Private Consultations are not a group program with priority access. They are not generic weekly coaching sessions.\n\nThis is a 1:1 strategic engagement over 90 days directly with Jonas Diop. A complete audit of your situation. A bespoke action plan. Direct access for decisions that matter.\n\nThe format is designed for entrepreneurs and experts who have already validated their market, who operate at a level where strategic decisions have real consequences, and who need a precise external perspective — not generic reassurance.'
    } satisfies BilingualLax<string>
  },

  forWho: {
    eyebrow: {
      fr: 'Critères de sélection',
      en: 'Selection criteria'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'On travaille avec des gens précis.',
      en: 'We work with specific people.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Les Consultations Privées ne sont pas accessibles sur simple inscription. Une candidature et un appel de qualification sont requis. Pas comme argument de vente — comme réalité opérationnelle : Jonas a une disponibilité limitée et travaille uniquement avec des clients où l'accompagnement peut produire un impact réel.",
      en: 'Private Consultations are not accessible by simple registration. An application and qualification call are required. Not as a sales argument — as operational reality : Jonas has limited availability and works only with clients where the engagement can produce real impact.'
    } satisfies BilingualLax<string>,
    qualif: [
      {
        fr: "Chiffre d'affaires validé : 1M$+ CAD (ou approche imminente)",
        en: 'Validated revenue : $1M+ CAD (or imminent approach)'
      },
      {
        fr: 'Vision stratégique claire de votre prochaine étape',
        en: 'Clear strategic vision of your next stage'
      },
      {
        fr: "Ressources d'exécution disponibles (équipe, budget, temps)",
        en: 'Execution resources available (team, budget, time)'
      },
      {
        fr: 'Prêt à remettre en question des hypothèses fondamentales de votre modèle',
        en: 'Ready to question fundamental assumptions about your model'
      },
      {
        fr: 'Engagement sur 90 jours minimum',
        en: 'Commitment for a minimum of 90 days'
      }
    ],
    disqualif: [
      {
        fr: 'Entreprise en démarrage ou sous 500K$ CA',
        en: 'Early-stage business or under $500K CAD revenue'
      },
      {
        fr: "Cherche à déléguer la prise de décision plutôt qu'à être accompagné",
        en: 'Looking to delegate decision-making rather than be guided'
      },
      {
        fr: "Disponibilité insuffisante pour les sessions et l'exécution",
        en: 'Insufficient availability for sessions and execution'
      }
    ]
  },

  format: {
    eyebrow: {
      fr: 'Ce que vous obtenez',
      en: 'What you get'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le format Consultations Privées.',
      en: 'The Private Consultations format.'
    } satisfies BilingualLax<string>,
    details: [
      {
        label: { fr: "Audit d'entrée", en: 'Entry audit' } satisfies BilingualLax<string>,
        value: {
          fr: 'Audit complet de votre architecture (offre, systèmes, équipe, finances) avant le début du mandat',
          en: 'Complete architecture audit (offer, systems, team, finances) before the engagement begins'
        } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Sessions stratégiques',
          en: 'Strategy sessions'
        } satisfies BilingualLax<string>,
        value: {
          fr: '1 session intensive mensuelle (2-3h) + sessions de suivi bimensuelles (1h)',
          en: '1 monthly intensive session (2-3h) + bi-monthly follow-up sessions (1h)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Accès direct', en: 'Direct access' } satisfies BilingualLax<string>,
        value: {
          fr: 'Accès direct à Jonas via canal privé (Slack ou équivalent) pour questions urgentes entre sessions',
          en: 'Direct access to Jonas via private channel (Slack or equivalent) for urgent questions between sessions'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: "Plan d'action", en: 'Action plan' } satisfies BilingualLax<string>,
        value: {
          fr: 'Plan stratégique documenté, actualisé après chaque session',
          en: 'Documented strategic plan, updated after each session'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Durée', en: 'Duration' } satisfies BilingualLax<string>,
        value: {
          fr: '90 jours minimum, renouvellement possible sur décision mutuelle',
          en: '90 days minimum, renewal possible on mutual decision'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Investissement', en: 'Investment' } satisfies BilingualLax<string>,
        value: {
          fr: "Non affiché publiquement. Communiqué lors de l'appel de qualification.",
          en: 'Not publicly listed. Shared during the qualification call.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  process: {
    eyebrow: {
      fr: 'Processus de candidature',
      en: 'Application process'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Comment ça commence.',
      en: 'How it starts.'
    } satisfies BilingualLax<string>,
    steps: [
      {
        number: '01',
        title: { fr: 'Postuler', en: 'Apply' } satisfies BilingualLax<string>,
        body: {
          fr: 'Remplir le formulaire de candidature (situation actuelle, objectifs, CA, disponibilités). Prend 10 minutes.',
          en: 'Fill out the application form (current situation, goals, revenue, availability). Takes 10 minutes.'
        } satisfies BilingualLax<string>
      },
      {
        number: '02',
        title: {
          fr: 'Pré-call qualification',
          en: 'Pre-call qualification'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Appel de 20-30 minutes pour évaluer si votre situation correspond au format Consultations Privées. On vous dira directement si ce n'est pas le bon moment ou le bon format.",
          en: 'A 20-30 minute call to assess whether your situation fits the Private Consultations format. We will tell you directly if it is not the right time or format.'
        } satisfies BilingualLax<string>
      },
      {
        number: '03',
        title: {
          fr: 'Session stratégique intensive',
          en: 'Intensive strategy session'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Pour les candidatures retenues : session stratégique initiale de 90 minutes. C'est le point de départ du mandat — et l'opportunité de valider mutuellement l'alignement avant tout engagement.",
          en: 'For retained applications : initial 90-minute strategy session. This is the starting point of the engagement — and the opportunity to mutually validate alignment before any commitment.'
        } satisfies BilingualLax<string>
      },
      {
        number: '04',
        title: { fr: 'Décision mutuelle', en: 'Mutual decision' } satisfies BilingualLax<string>,
        body: {
          fr: "Après la session initiale, les deux parties décident si la collaboration se poursuit sur 90 jours. Aucune obligation d'engagement avant ce point.",
          en: 'After the initial session, both parties decide whether the collaboration continues over 90 days. No commitment obligation before this point.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  testimonials: {
    eyebrow: {
      fr: 'Résultats clients',
      en: 'Client results'
    } satisfies BilingualLax<string>,
    title: {
      fr: '[À VALIDER JONAS — témoignages clients Consultations Privées]',
      en: '[TO VALIDATE WITH JONAS — Private Consultations client testimonials]'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'testimonial-1',
        quote: {
          fr: '[À VALIDER JONAS — témoignage client #1 avec résultat chiffré]',
          en: '[TO VALIDATE WITH JONAS — client testimonial #1 with quantified result]'
        } satisfies BilingualLax<string>,
        name: { fr: '[Prénom Nom]', en: '[First Last]' } satisfies BilingualLax<string>,
        title: { fr: '[Titre, Entreprise]', en: '[Title, Company]' } satisfies BilingualLax<string>,
        result: {
          fr: '[Résultat chiffré ex. : "+40% CA en 90 jours"]',
          en: '[Quantified result ex. : "+40% revenue in 90 days"]'
        } satisfies BilingualLax<string>
      }
    ]
  },

  finalCta: {
    eyebrow: {
      fr: 'Candidature',
      en: 'Application'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Postuler à l'interview.",
      en: 'Apply for the interview.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Le formulaire prend 10 minutes. Si votre profil correspond, vous serez contacté dans les 48h pour un pré-call de qualification.',
      en: 'The form takes 10 minutes. If your profile fits, you will be contacted within 48h for a pre-qualification call.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: "POSTULER À L'INTERVIEW",
      en: 'APPLY FOR THE INTERVIEW'
    } satisfies BilingualLax<string>,
    footnote: {
      fr: 'Disponibilité limitée à [À VALIDER JONAS — nombre de clients simultanés]. Prochaine disponibilité : [À VALIDER JONAS — date].',
      en: 'Availability limited to [TO VALIDATE WITH JONAS — number of simultaneous clients]. Next availability : [TO VALIDATE WITH JONAS — date].'
    } satisfies BilingualLax<string>
  }
} as const;
