import type { BilingualLax } from '@/lib/i18n/types';

/**
 * services-focus-flow.ts — LP Focus & Flow (formation spécialisée)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 */

export const focusFlowCopy = {
  meta: {
    title: {
      fr: "Focus & Flow — Productivité d'Élite | Jonas Diop",
      en: 'Focus & Flow — Elite Productivity | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Formation spécialisée productivité. Récupérer 50% de ton temps via l'ingénierie systémique. Pour entrepreneurs débordés malgré leur croissance. 5 modules.",
      en: 'Specialized productivity training. Reclaim 50% of your time through systemic engineering. For overwhelmed entrepreneurs despite their growth. 5 modules.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Formation spécialisée',
      en: 'Specialized training'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Focus & Flow',
      en: 'Focus & Flow'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Productivité d'élite : récupérer 50% de ton temps via l'ingénierie systémique.",
      en: 'Elite productivity : reclaim 50% of your time via systemic engineering.'
    } satisfies BilingualLax<string>
  },

  problem: {
    eyebrow: {
      fr: 'Le paradoxe de la croissance',
      en: 'The growth paradox'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Plus tu réussis, moins tu as de temps.',
      en: 'The more you succeed, the less time you have.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "C'est l'un des paradoxes les plus frustrants de l'entrepreneuriat : ton entreprise grandit, et pourtant tu te sens plus débordé qu'avant.\n\nPlus de clients. Plus de revenus. Mais aussi plus de réunions, plus d'urgences, plus d'interruptions. L'agenda explose et les choses importantes ne se font plus jamais.\n\nFocus & Flow est une formation d'ingénierie du temps — pas de productivité personnelle générique. On part de ta situation réelle et on reconstruit ton rapport au temps pour que ta croissance ne vienne plus au prix de ta vie.",
      en: 'This is one of the most frustrating paradoxes of entrepreneurship : your business grows, and yet you feel more overwhelmed than before.\n\nMore clients. More revenue. But also more meetings, more emergencies, more interruptions. The calendar explodes and the important things never get done.\n\nFocus & Flow is a time engineering training — not generic personal productivity. We start from your real situation and rebuild your relationship with time so your growth no longer comes at the cost of your life.'
    } satisfies BilingualLax<string>
  },

  forWho: {
    eyebrow: {
      fr: 'Pour toi si...',
      en: 'For you if...'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce format correspond à ta situation si...',
      en: 'This format fits your situation if...'
    } satisfies BilingualLax<string>,
    qualif: [
      {
        fr: "Ton entreprise croît mais tu as l'impression de courir après ton agenda",
        en: 'Your business is growing but you feel like you are chasing your calendar'
      },
      {
        fr: 'Tu travailles plus de 50-60h par semaine sans voir le bout',
        en: 'You work more than 50-60h per week with no end in sight'
      },
      {
        fr: "Les tâches à fort levier (stratégie, développement, vente) ne se font jamais — écrasées par l'opérationnel",
        en: 'High-leverage tasks (strategy, development, sales) never get done — crushed by operations'
      },
      {
        fr: "Tu sais ce que tu devrais faire mais tu n'arrives pas à le faire",
        en: 'You know what you should be doing but cannot make yourself do it'
      }
    ]
  },

  modules: {
    eyebrow: {
      fr: '5 modules · formation autonome',
      en: '5 modules · self-paced'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce que tu vas mettre en place.',
      en: 'What you will put in place.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'diagnostic-time',
        number: '01',
        title: {
          fr: 'Diagnostic des fuites de temps',
          en: 'Time-leak diagnostic'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Cartographier précisément où ton temps part chaque semaine. Identifier les 3 à 5 sources principales de perte de temps dans ton opération. Pas d'intuition — des données.",
          en: 'Map precisely where your time goes each week. Identify the 3 to 5 main time-loss sources in your operation. Not intuition — data.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'priorisation',
        number: '02',
        title: {
          fr: 'Système de priorisation',
          en: 'Prioritization system'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Framework de décision pour prioriser sans angoisser. Comment distinguer l'urgent du vraiment important. Comment structurer ta semaine autour des 20% d'actions qui génèrent 80% des résultats.",
          en: 'Decision framework to prioritize without anxiety. How to distinguish the urgent from the truly important. How to structure your week around the 20% of actions that generate 80% of results.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'deep-work',
        number: '03',
        title: {
          fr: 'Protocoles de deep work',
          en: 'Deep work protocols'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Comment créer des blocs de concentration protégés dans un agenda d'entrepreneur. Techniques de mise en état de concentration rapide. Comment réduire les interruptions sans couper la communication.",
          en: "How to create protected focus blocks in an entrepreneur's calendar. Techniques for quickly entering concentration states. How to reduce interruptions without cutting communication."
        } satisfies BilingualLax<string>
      },
      {
        id: 'delegation',
        number: '04',
        title: {
          fr: 'Délégation systémique',
          en: 'Systemic delegation'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Comment déléguer sans micro-gérer ni perdre de la qualité. Protocoles de transfert de tâches. Comment identifier ce que toi seul dois faire vs ce que ton équipe peut prendre en charge sans toi.',
          en: 'How to delegate without micromanaging or losing quality. Task transfer protocols. How to identify what only you must do vs what your team can handle without you.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'routines',
        number: '05',
        title: {
          fr: 'Routines de récupération & maintenance',
          en: 'Recovery & maintenance routines'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Concevoir des routines qui maintiennent la haute performance sur le long terme. Comment récupérer activement sans décrocher complètement. Système de revue hebdomadaire simple et actionnable.',
          en: 'Design routines that maintain high performance over time. How to actively recover without fully disconnecting. Simple and actionable weekly review system.'
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
        label: { fr: 'Workbook', en: 'Workbook' } satisfies BilingualLax<string>,
        value: {
          fr: 'Workbook complet + templates de gestion du temps',
          en: 'Complete workbook + time management templates'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Communauté', en: 'Community' } satisfies BilingualLax<string>,
        value: {
          fr: 'Accès communauté privée (groupe Focus & Flow)',
          en: 'Private community access (Focus & Flow group)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Accès', en: 'Access' } satisfies BilingualLax<string>,
        value: {
          fr: 'Accès à vie aux modules',
          en: 'Lifetime access to modules'
        } satisfies BilingualLax<string>
      }
    ]
  },

  results: {
    eyebrow: {
      fr: 'Ce que tu vises',
      en: 'What you are aiming for'
    } satisfies BilingualLax<string>,
    items: [
      {
        fr: "50% du temps récupéré d'ici 30-60 jours d'application",
        en: '50% of time reclaimed within 30-60 days of application'
      },
      {
        fr: 'Agenda restructuré autour des actions à fort levier',
        en: 'Calendar restructured around high-leverage actions'
      },
      {
        fr: 'Délégation en place — opération qui tourne sans présence constante',
        en: 'Delegation in place — operation running without constant presence'
      },
      {
        fr: 'Routines stables sans épuisement',
        en: 'Stable routines without burnout'
      }
    ],
    disclaimer: {
      fr: 'Résultats variables selon engagement et application. Représentatifs des participants qui appliquent les protocoles — non garantis.',
      en: 'Results vary based on engagement and application. Representative of participants who apply the protocols — not guaranteed.'
    } satisfies BilingualLax<string>
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
