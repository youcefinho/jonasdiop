import type { BilingualLax } from '@/lib/i18n/types';

/**
 * services-cash-scale.ts — LP Cash & Scale™ (formation spécialisée)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 * Cash & Scale™ : afficher TOUJOURS avec ™
 */

export const cashScaleCopy = {
  meta: {
    title: {
      fr: 'Cash & Scale™ — Optimisation Cash Flow & Levier Financier | Jonas Diop',
      en: 'Cash & Scale™ — Cash Flow & Financial Leverage Optimization | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Formation spécialisée cash flow. Pour entrepreneurs avec CA croissant mais cash flow tendu. 5 modules + spreadsheets + 1 call live.',
      en: 'Specialized cash flow training. For entrepreneurs with growing revenue but tight cash flow. 5 modules + spreadsheets + 1 live call.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Formation spécialisée',
      en: 'Specialized training'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Cash & Scale™',
      en: 'Cash & Scale™'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Optimisation cash flow & levier financier pour scaler avec maîtrise — pas avec anxiété.',
      en: 'Cash flow & financial leverage optimization to scale with control — not anxiety.'
    } satisfies BilingualLax<string>
  },

  problem: {
    eyebrow: {
      fr: 'Le problème qui tue les entreprises en croissance',
      en: 'The problem that kills growing businesses'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Tu es rentable sur papier. Mais ton compte en banque ne le sait pas.',
      en: 'You are profitable on paper. But your bank account does not know it.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "La croissance consomme du cash. C'est une réalité que beaucoup d'entrepreneurs découvrent trop tard : plus leur entreprise grandit, plus leur position de trésorerie se fragilise.\n\nNouveaux embauches. Investissements marketing. Dépenses opérationnelles qui précèdent les revenus. Et soudain, un mois chargé en facturation mais vide en encaissement.\n\nCash & Scale™ est une formation technique sur la maîtrise du cash flow et du levier financier. Pour scaler intelligemment — pas seulement vite.",
      en: 'Growth consumes cash. This is a reality many entrepreneurs discover too late : the more their business grows, the more fragile their cash position becomes.\n\nNew hires. Marketing investments. Operational expenses that precede revenue. And suddenly, a month heavy on invoicing but empty on collections.\n\nCash & Scale™ is a technical training on cash flow management and financial leverage. To scale intelligently — not just quickly.'
    } satisfies BilingualLax<string>
  },

  forWho: {
    eyebrow: {
      fr: 'Pour toi si...',
      en: 'For you if...'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Cette formation est précisément faite pour...',
      en: 'This training is precisely built for...'
    } satisfies BilingualLax<string>,
    qualif: [
      {
        fr: 'Ton CA croît mais tu as régulièrement des fins de mois difficiles',
        en: 'Your revenue is growing but you regularly have tight month-ends'
      },
      {
        fr: 'Tu as du mal à prévoir ta trésorerie à 30-90 jours',
        en: 'You struggle to forecast your cash flow at 30-90 days'
      },
      {
        fr: "Tu réinjectes systématiquement tes profits dans l'opération sans stratégie claire",
        en: 'You systematically reinject profits back into operations without a clear strategy'
      },
      {
        fr: 'Tu veux utiliser le levier financier (dette, investissement) sans prendre de risques mal maîtrisés',
        en: 'You want to use financial leverage (debt, investment) without taking poorly understood risks'
      }
    ]
  },

  modules: {
    eyebrow: {
      fr: '5 modules · formation autonome',
      en: '5 modules · self-paced'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce que tu vas maîtriser.',
      en: 'What you will master.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'cash-forecast',
        number: '01',
        title: {
          fr: 'Cash flow forecast',
          en: 'Cash flow forecast'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Construire un modèle de prévision de trésorerie simple et opérationnel à 13 semaines. Identifier les cycles de cash dans ton secteur. Anticiper les tensions de trésorerie avant qu'elles deviennent des crises.",
          en: 'Build a simple, operational 13-week cash flow forecast model. Identify cash cycles in your sector. Anticipate cash crunches before they become crises.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'unit-economics',
        number: '02',
        title: {
          fr: 'Unit economics',
          en: 'Unit economics'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'LTV, CAC, payback period, contribution margin. Comprendre les vrais moteurs financiers de ton entreprise. Identifier les offres qui génèrent du cash vs celles qui le consomment.',
          en: 'LTV, CAC, payback period, contribution margin. Understand the real financial drivers of your business. Identify which offers generate cash vs which ones consume it.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'pricing-marges',
        number: '03',
        title: {
          fr: 'Pricing & marges',
          en: 'Pricing & margins'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Comment structurer tes prix pour maximiser la marge, pas seulement le CA. Analyse de la structure de coûts. Identifier les offres à fort volume mais faible marge qui épuisent ta trésorerie.',
          en: 'How to structure your prices to maximize margin, not just revenue. Cost structure analysis. Identify high-volume, low-margin offers that drain your cash.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'levier-financier',
        number: '04',
        title: {
          fr: 'Levier financier sain',
          en: 'Healthy financial leverage'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Quand et comment utiliser la dette de façon stratégique. Différence entre levier de croissance et dette de survie. Comment évaluer le ROI d'un investissement avant de l'engager.",
          en: 'When and how to use debt strategically. The difference between growth leverage and survival debt. How to evaluate the ROI of an investment before committing.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'reinvest-profit',
        number: '05',
        title: {
          fr: 'Réinvestissement vs distribution',
          en: 'Reinvestment vs distribution'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Comment décider combien garder dans l'entreprise vs combien te payer. Stratégie de réserves de trésorerie. Comment bâtir un coussin financier sans bloquer la croissance.",
          en: 'How to decide how much to keep in the business vs how much to pay yourself. Cash reserve strategy. How to build a financial cushion without blocking growth.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  format: {
    eyebrow: {
      fr: 'Format & logistique',
      en: 'Format & logistics'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Comment ça fonctionne.',
      en: 'How it works.'
    } satisfies BilingualLax<string>,
    details: [
      {
        label: { fr: 'Modules vidéo', en: 'Video modules' } satisfies BilingualLax<string>,
        value: {
          fr: '5 modules autonomes (accès immédiat après inscription)',
          en: '5 self-paced modules (immediate access after registration)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Spreadsheets', en: 'Spreadsheets' } satisfies BilingualLax<string>,
        value: {
          fr: 'Modèles Excel/Google Sheets (forecast cash + unit economics + pricing)',
          en: 'Excel/Google Sheets models (cash forecast + unit economics + pricing)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Call live', en: 'Live call' } satisfies BilingualLax<string>,
        value: {
          fr: '1 call live avec Jonas (Q&R + révision de ta situation)',
          en: '1 live call with Jonas (Q&A + review of your situation)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Accès', en: 'Access' } satisfies BilingualLax<string>,
        value: {
          fr: 'Accès à vie aux modules + spreadsheets',
          en: 'Lifetime access to modules + spreadsheets'
        } satisfies BilingualLax<string>
      }
    ]
  },

  finalCta: {
    eyebrow: {
      fr: 'Prochaine session',
      en: 'Next session'
    } satisfies BilingualLax<string>,
    title: {
      fr: "S'inscrire à la prochaine session.",
      en: 'Register for the next session.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Date de la prochaine session live confirmée à l'inscription.",
      en: 'Next live session date confirmed at registration.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: "S'inscrire à la prochaine session",
      en: 'Register for the next session'
    } satisfies BilingualLax<string>
  }
} as const;
