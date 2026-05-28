import type { BilingualLax } from '@/lib/i18n/types';

/**
 * services.ts — Hub Services (overview 6 programmes + qualification)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 */

export const servicesCopy = {
  meta: {
    title: {
      fr: 'Programmes & Accompagnements — Jonas Diop | DIOP Stratégies Internationales',
      en: 'Programs & Advisory — Jonas Diop | DIOP Stratégies Internationales'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Programme de scaling 12 semaines (Gamechanger Scaling), formation closing haute valeur (Master Closing), consultations privées 1:1. Six formats pour entrepreneurs, coachs et experts qui veulent scaler sans s'épuiser — méthodologie CDT™, Montréal & Worldwide.",
      en: '12-week scaling program (Gamechanger Scaling), high-value closing training (Master Closing), 1:1 private consultations. Six formats for entrepreneurs, coaches and experts who want to scale without burning out — CDT™ methodology, Montréal & Worldwide.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Programmes & accompagnements',
      en: 'Programs & advisory'
    } satisfies BilingualLax<string>,
    h1: {
      fr: "Trois formats. Un seul standard d'exécution.",
      en: 'Three formats. One standard of execution.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Que tu aies besoin d'un programme de transformation intensif, d'une compétence spécifique, ou d'un accompagnement stratégique 1:1 — chaque format est conçu pour des résultats mesurables, pas pour la théorie.",
      en: 'Whether you need an intensive transformation program, a specific skill, or 1:1 strategic advisory — every format is built for measurable results, not theory.'
    } satisfies BilingualLax<string>
  },

  categories: [
    {
      id: 'groupe',
      eyebrow: {
        fr: 'Programmes de groupe',
        en: 'Group programs'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Transformation structurelle. En cohorte.',
        en: 'Structural transformation. In cohort.'
      } satisfies BilingualLax<string>,
      description: {
        fr: "Pour les entrepreneurs qui veulent une transformation complète de leur architecture d'affaires. Immersion intensive en cohorte restreinte, sessions live hebdomadaires, accès Slack privé. Ce sont nos formats les plus intensifs — et ceux qui produisent les changements les plus durables.",
        en: 'For entrepreneurs who want a complete transformation of their business architecture. Intensive immersion in a small cohort, weekly live sessions, private Slack access. These are our most intensive formats — and the ones that produce the most lasting changes.'
      } satisfies BilingualLax<string>,
      programmes: [
        {
          id: 'gamechanger-scaling',
          name: {
            fr: 'Gamechanger Scaling',
            en: 'Gamechanger Scaling'
          } satisfies BilingualLax<string>,
          badge: { fr: '12 semaines', en: '12 weeks' } satisfies BilingualLax<string>,
          tagline: {
            fr: 'Le programme intensif pour entrepreneurs 6-7 chiffres en quête de scaling structurel.',
            en: 'The intensive program for 6-to-7 figure entrepreneurs seeking structural scaling.'
          } satisfies BilingualLax<string>,
          fit: {
            fr: 'Entrepreneurs générant 100K$–1M$ CA, prêts à transformer leur architecture en 12 semaines.',
            en: 'Entrepreneurs generating $100K–$1M CAD, ready to transform their architecture in 12 weeks.'
          } satisfies BilingualLax<string>,
          hrefKey: 'services-gamechanger-scaling'
        },
        {
          id: 'the-shift',
          featured: true,
          name: { fr: 'The Shift', en: 'The Shift' } satisfies BilingualLax<string>,
          badge: { fr: '8 semaines', en: '8 weeks' } satisfies BilingualLax<string>,
          tagline: {
            fr: 'Pivot stratégique pour entrepreneurs en transition vers un modèle plus à fort levier.',
            en: 'Strategic pivot for entrepreneurs transitioning to a higher-leverage model.'
          } satisfies BilingualLax<string>,
          fit: {
            fr: 'Entrepreneurs qui sentent que leur modèle actuel est devenu un plafond.',
            en: 'Entrepreneurs who feel their current model has become a ceiling.'
          } satisfies BilingualLax<string>,
          hrefKey: 'services-the-shift'
        }
      ]
    },
    {
      id: 'formation',
      eyebrow: {
        fr: 'Formations spécialisées',
        en: 'Specialized trainings'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Une compétence. Appliquée immédiatement.',
        en: 'One skill. Applied immediately.'
      } satisfies BilingualLax<string>,
      description: {
        fr: "Formations autonomes sur des compétences à fort impact : closing haute valeur, productivité d'élite, optimisation cash flow. Format modulaire — commencer quand tu veux, avancer à ton rythme. Résultats applicables dès le premier module.",
        en: 'Self-paced trainings on high-impact skills : high-value closing, elite productivity, cash flow optimization. Modular format — start anytime, move at your pace. Results applicable from the first module.'
      } satisfies BilingualLax<string>,
      programmes: [
        {
          id: 'master-closing',
          featured: true,
          name: { fr: 'Master Closing', en: 'Master Closing' } satisfies BilingualLax<string>,
          badge: { fr: '6 modules', en: '6 modules' } satisfies BilingualLax<string>,
          tagline: {
            fr: "Maîtriser l'art du closing haute valeur. Deals >5K$.",
            en: 'Master the art of high-value closing. Deals >$5K.'
          } satisfies BilingualLax<string>,
          fit: {
            fr: 'Entrepreneurs et équipes commerciales vendant des offres >5K$.',
            en: 'Entrepreneurs and sales teams selling offers >$5K.'
          } satisfies BilingualLax<string>,
          hrefKey: 'services-master-closing'
        },
        {
          id: 'focus-flow',
          featured: true,
          name: { fr: 'Focus & Flow', en: 'Focus & Flow' } satisfies BilingualLax<string>,
          badge: { fr: '5 modules', en: '5 modules' } satisfies BilingualLax<string>,
          tagline: {
            fr: "Productivité d'élite : récupérer 50% de ton temps via l'ingénierie systémique.",
            en: 'Elite productivity : reclaim 50% of your time via systemic engineering.'
          } satisfies BilingualLax<string>,
          fit: {
            fr: 'Entrepreneurs débordés malgré une croissance soutenue.',
            en: 'Entrepreneurs overwhelmed despite sustained growth.'
          } satisfies BilingualLax<string>,
          hrefKey: 'services-focus-flow'
        },
        {
          id: 'cash-scale',
          name: { fr: 'Cash & Scale™', en: 'Cash & Scale™' } satisfies BilingualLax<string>,
          badge: { fr: '5 modules', en: '5 modules' } satisfies BilingualLax<string>,
          tagline: {
            fr: 'Optimisation cash flow & levier financier pour scaler avec maîtrise.',
            en: 'Cash flow & financial leverage optimization to scale with control.'
          } satisfies BilingualLax<string>,
          fit: {
            fr: 'Entrepreneurs avec CA croissant mais cash flow tendu.',
            en: 'Entrepreneurs with growing revenue but tight cash flow.'
          } satisfies BilingualLax<string>,
          hrefKey: 'services-cash-scale'
        }
      ]
    },
    {
      id: 'accompagnement',
      eyebrow: {
        fr: 'Accompagnement 1:1',
        en: '1:1 advisory'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Sur dossier. Accès direct à Jonas.',
        en: 'By application. Direct access to Jonas.'
      } satisfies BilingualLax<string>,
      description: {
        fr: 'Pour les entrepreneurs et experts générant 1M$+ de CA, cherchant un accompagnement stratégique 1:1 sur-mesure. Accès direct à Jonas — pas une équipe interposée. Disponibilité très limitée. Sur invitation uniquement.',
        en: 'For entrepreneurs and experts generating $1M+ CAD, seeking bespoke 1:1 strategic advisory. Direct access to Jonas — not a team in between. Very limited availability. By invitation only.'
      } satisfies BilingualLax<string>,
      programmes: [
        {
          id: 'consultations-privees',
          name: {
            fr: 'Consultations Privées',
            en: 'Private Consultations'
          } satisfies BilingualLax<string>,
          badge: { fr: 'Sur invitation', en: 'By invitation' } satisfies BilingualLax<string>,
          tagline: {
            fr: 'Travail stratégique 1:1. Accès direct. Disponibilité restreinte.',
            en: '1:1 strategic work. Direct access. Restricted availability.'
          } satisfies BilingualLax<string>,
          fit: {
            fr: "Entrepreneurs 1M$+ CA, vision claire, ressources d'exécution disponibles.",
            en: 'Entrepreneurs $1M+ CAD, clear vision, execution resources in place.'
          } satisfies BilingualLax<string>,
          hrefKey: 'services-consultations-privees'
        }
      ]
    }
  ],

  comparisonTable: {
    eyebrow: {
      fr: 'Quel format te correspond ?',
      en: 'Which format fits you?'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Comparatif des formats.',
      en: 'Format comparison.'
    } satisfies BilingualLax<string>,
    headers: {
      programme: { fr: 'Programme', en: 'Program' } satisfies BilingualLax<string>,
      format: { fr: 'Format', en: 'Format' } satisfies BilingualLax<string>,
      duree: { fr: 'Durée', en: 'Duration' } satisfies BilingualLax<string>,
      intensite: { fr: 'Intensité', en: 'Intensity' } satisfies BilingualLax<string>,
      idealPour: { fr: 'Idéal pour', en: 'Ideal for' } satisfies BilingualLax<string>
    },
    rows: [
      {
        name: {
          fr: 'Gamechanger Scaling',
          en: 'Gamechanger Scaling'
        } satisfies BilingualLax<string>,
        format: {
          fr: 'Groupe · 8-12 personnes',
          en: 'Group · 8-12 people'
        } satisfies BilingualLax<string>,
        duree: { fr: '12 semaines', en: '12 weeks' } satisfies BilingualLax<string>,
        intensite: { fr: 'Élevée', en: 'High' } satisfies BilingualLax<string>,
        idealPour: {
          fr: 'Transformation architecture complète',
          en: 'Full architecture transformation'
        } satisfies BilingualLax<string>
      },
      {
        name: { fr: 'The Shift', en: 'The Shift' } satisfies BilingualLax<string>,
        format: {
          fr: 'Groupe · 6-10 personnes',
          en: 'Group · 6-10 people'
        } satisfies BilingualLax<string>,
        duree: { fr: '8 semaines', en: '8 weeks' } satisfies BilingualLax<string>,
        intensite: { fr: 'Modérée-élevée', en: 'Moderate-high' } satisfies BilingualLax<string>,
        idealPour: {
          fr: 'Pivot stratégique ciblé',
          en: 'Targeted strategic pivot'
        } satisfies BilingualLax<string>
      },
      {
        name: { fr: 'Master Closing', en: 'Master Closing' } satisfies BilingualLax<string>,
        format: {
          fr: 'Formation autonome + 2 calls live',
          en: 'Self-paced + 2 live calls'
        } satisfies BilingualLax<string>,
        duree: {
          fr: '6 modules + 2 calls',
          en: '6 modules + 2 calls'
        } satisfies BilingualLax<string>,
        intensite: { fr: 'Modérée', en: 'Moderate' } satisfies BilingualLax<string>,
        idealPour: {
          fr: 'Closing & vente haute valeur',
          en: 'High-value closing & sales'
        } satisfies BilingualLax<string>
      },
      {
        name: { fr: 'Focus & Flow', en: 'Focus & Flow' } satisfies BilingualLax<string>,
        format: {
          fr: 'Formation autonome + communauté',
          en: 'Self-paced + community'
        } satisfies BilingualLax<string>,
        duree: { fr: '5 modules', en: '5 modules' } satisfies BilingualLax<string>,
        intensite: { fr: 'Modérée', en: 'Moderate' } satisfies BilingualLax<string>,
        idealPour: {
          fr: 'Productivité & récupération de temps',
          en: 'Productivity & time reclaim'
        } satisfies BilingualLax<string>
      },
      {
        name: { fr: 'Cash & Scale™', en: 'Cash & Scale™' } satisfies BilingualLax<string>,
        format: {
          fr: 'Formation autonome + 1 call live',
          en: 'Self-paced + 1 live call'
        } satisfies BilingualLax<string>,
        duree: {
          fr: '5 modules + 1 call',
          en: '5 modules + 1 call'
        } satisfies BilingualLax<string>,
        intensite: { fr: 'Modérée', en: 'Moderate' } satisfies BilingualLax<string>,
        idealPour: {
          fr: 'Cash flow & levier financier',
          en: 'Cash flow & financial leverage'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Consultations Privées',
          en: 'Private Consultations'
        } satisfies BilingualLax<string>,
        format: {
          fr: '1:1 · accès direct Jonas',
          en: '1:1 · direct access Jonas'
        } satisfies BilingualLax<string>,
        duree: {
          fr: '90 jours + renouvellement',
          en: '90 days + renewal'
        } satisfies BilingualLax<string>,
        intensite: { fr: 'Sur-mesure', en: 'Bespoke' } satisfies BilingualLax<string>,
        idealPour: {
          fr: 'Entrepreneurs 1M$+ CA',
          en: 'Entrepreneurs $1M+ CAD'
        } satisfies BilingualLax<string>
      }
    ]
  },

  qualification: {
    eyebrow: {
      fr: "Avant de s'engager",
      en: 'Before committing'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Tous nos programmes requièrent un appel de qualification.',
      en: 'All our programs require a qualification call.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Nous ne travaillons pas avec tout le monde. Pas parce que c'est un argument de vente — mais parce que nos programmes sont conçus pour des entrepreneurs qui ont la capacité et la volonté d'exécuter.\n\nL'appel de qualification (20-30 min) permet de vérifier si ta situation correspond à nos formats et si tu es au bon moment pour t'y engager. Si ce n'est pas le cas, on te le dira directement.",
      en: 'We do not work with everyone. Not as a sales argument — but because our programs are built for entrepreneurs with the capacity and will to execute.\n\nThe qualification call (20-30 min) verifies whether your situation fits our formats and whether the timing is right. If it is not, we will tell you directly.'
    } satisfies BilingualLax<string>,
    qualifPour: {
      title: { fr: 'Pour toi si...', en: 'For you if...' } satisfies BilingualLax<string>,
      items: [
        {
          fr: "Tu génères déjà entre 100K$ et 1M$ de chiffre d'affaires",
          en: 'You are already generating between $100K and $1M CAD in revenue'
        },
        {
          fr: "Tu veux scaler sans t'épuiser davantage",
          en: 'You want to scale without burning out further'
        },
        {
          fr: 'Tu es prêt à investir dans une transformation structurelle',
          en: 'You are ready to invest in structural transformation'
        },
        {
          fr: "Tu as la capacité d'exécuter, pas seulement d'apprendre",
          en: 'You have the capacity to execute, not just to learn'
        }
      ]
    },
    pasPour: {
      title: { fr: 'Pas pour toi si...', en: 'Not for you if...' } satisfies BilingualLax<string>,
      items: [
        {
          fr: 'Tu cherches des raccourcis ou des formules magiques',
          en: 'You are looking for shortcuts or magic formulas'
        },
        {
          fr: "Tu n'es pas prêt à remettre en question ton modèle actuel",
          en: 'You are not ready to question your current model'
        },
        {
          fr: 'Tu démarres ton activité (moins de 50K$ CA)',
          en: 'You are just starting out (under $50K CAD revenue)'
        }
      ]
    }
  },

  finalCta: {
    eyebrow: {
      fr: 'Commencer',
      en: 'Get started'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Quel programme est fait pour toi ?',
      en: 'Which program is right for you?'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Un appel de 20 minutes pour identifier le bon format selon ta situation actuelle.',
      en: 'A 20-minute call to identify the right format for your current situation.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver mon appel stratégique',
      en: 'Book my strategy call'
    } satisfies BilingualLax<string>
  }
} as const;
