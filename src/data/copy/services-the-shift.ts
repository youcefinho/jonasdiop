import type { BilingualLax } from '@/lib/i18n/types';

/**
 * services-the-shift.ts — LP The Shift (programme de groupe 8 semaines)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 */

export const theShiftCopy = {
  meta: {
    title: {
      fr: 'The Shift — Pivot stratégique 8 semaines | Jonas Diop',
      en: 'The Shift — 8-week Strategic Pivot | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Programme de groupe 8 semaines. Pivot stratégique pour entrepreneurs en transition vers un modèle à fort levier. Cohorte restreinte.',
      en: '8-week group program. Strategic pivot for entrepreneurs transitioning to a higher-leverage model. Small cohort.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Programme de groupe · 8 semaines',
      en: 'Group program · 8 weeks'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'The Shift',
      en: 'The Shift'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Pivot stratégique pour entrepreneurs en transition vers un modèle plus à fort levier.',
      en: 'Strategic pivot for entrepreneurs transitioning to a higher-leverage model.'
    } satisfies BilingualLax<string>,
    badge: {
      fr: 'Cohorte restreinte · 6-10 personnes',
      en: 'Small cohort · 6-10 people'
    } satisfies BilingualLax<string>
  },

  problem: {
    eyebrow: {
      fr: "Le signal d'alarme",
      en: 'The warning signal'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Votre modèle actuel est devenu votre plafond.',
      en: 'Your current model has become your ceiling.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "C'est un pattern que nous voyons régulièrement : des entrepreneurs qui ont bien réussi avec un modèle donné, et qui sentent que ce même modèle est maintenant ce qui les bloque.\n\nIls ont plus de clients. Plus de revenus. Mais aussi plus de temps perdu dans des opérations qui ne scalent pas, une offre qui demande trop d'implication personnelle, ou un positionnement qui attire les mauvais clients.\n\nThe Shift est conçu pour ce moment précis : le moment où il faut pivoter avant que le plafond devienne un mur.",
      en: 'This is a pattern we see regularly : entrepreneurs who have built well on a given model, and who now feel that same model is what is holding them back.\n\nThey have more clients. More revenue. But also more time lost in operations that do not scale, an offer that requires too much personal involvement, or positioning that attracts the wrong clients.\n\nThe Shift is designed for this precise moment : the moment to pivot before the ceiling becomes a wall.'
    } satisfies BilingualLax<string>
  },

  forWho: {
    eyebrow: {
      fr: 'Pour vous si...',
      en: 'For you if...'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce programme est fait pour des situations précises.',
      en: 'This program is built for specific situations.'
    } satisfies BilingualLax<string>,
    qualif: [
      {
        fr: 'Vous sentez que votre modèle actuel a atteint ses limites — pas vous',
        en: 'You feel your current model has hit its limits — not you'
      },
      {
        fr: "Vous générez entre 100K$ et 500K$ CA mais la croissance stagne ou s'essoufle",
        en: 'You generate between $100K and $500K CAD but growth is stalling or slowing'
      },
      {
        fr: 'Vous voulez pivoter vers un modèle plus scalable sans tout perdre',
        en: 'You want to pivot to a more scalable model without losing everything'
      },
      {
        fr: "Vous avez besoin d'une réarchitecture ciblée, pas d'une refonte complète",
        en: 'You need targeted rearchitecture, not a full overhaul'
      }
    ],
    disqualif: [
      {
        fr: 'Votre activité génère moins de 50K$ CA (trop tôt pour ce type de pivot)',
        en: 'Your business generates under $50K CAD (too early for this type of pivot)'
      },
      {
        fr: "Vous n'avez pas encore de modèle en place à transformer",
        en: 'You do not yet have a model in place to transform'
      }
    ]
  },

  modules: {
    eyebrow: {
      fr: '8 semaines · 4 piliers',
      en: '8 weeks · 4 pillars'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le parcours de pivot.',
      en: 'The pivot journey.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'diagnostic-plafond',
        weeks: { fr: 'Semaines 1-2', en: 'Weeks 1-2' } satisfies BilingualLax<string>,
        title: {
          fr: '01 · Diagnostic du plafond',
          en: '01 · Ceiling diagnostic'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Identifier précisément pourquoi votre modèle actuel ne peut pas scaler davantage. Où est le vrai plafond : l'offre, les systèmes, le positionnement ou la capacité d'exécution ? Un diagnostic honnête avant toute action.",
          en: 'Precisely identify why your current model cannot scale further. Where is the real ceiling : the offer, systems, positioning, or execution capacity? An honest diagnostic before any action.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'rearchitecture',
        weeks: { fr: 'Semaines 3-5', en: 'Weeks 3-5' } satisfies BilingualLax<string>,
        title: {
          fr: '02 · Réarchitecture stratégique',
          en: '02 · Strategic rearchitecture'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Conception du nouveau modèle cible. Repositionnement de l'offre, redesign du modèle de revenus, réalignement de l'équipe. Chaque décision est prise avec un calcul de levier, pas une intuition.",
          en: 'Design the new target model. Offer repositioning, revenue model redesign, team realignment. Every decision made with a leverage calculation, not intuition.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'migration',
        weeks: { fr: 'Semaines 6-7', en: 'Weeks 6-7' } satisfies BilingualLax<string>,
        title: {
          fr: '03 · Migration progressive',
          en: '03 · Progressive migration'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Transition du modèle actuel vers le nouveau sans rupture brutale. Comment protéger les revenus existants pendant le pivot. Plan de migration avec dates et indicateurs de réussite.',
          en: 'Transition from the current model to the new one without hard breaks. How to protect existing revenue during the pivot. Migration plan with dates and success indicators.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'stabilisation',
        weeks: { fr: 'Semaine 8', en: 'Week 8' } satisfies BilingualLax<string>,
        title: {
          fr: '04 · Stabilisation & continuité',
          en: '04 · Stabilization & continuity'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Valider que le nouveau modèle tient sous pression. Indicateurs de suivi post-programme. Plan de continuité pour maintenir le momentum des 90 jours suivants.',
          en: 'Validate that the new model holds under pressure. Post-program tracking indicators. Continuity plan to maintain momentum over the next 90 days.'
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
        label: { fr: 'Sessions live', en: 'Live sessions' } satisfies BilingualLax<string>,
        value: {
          fr: '8 sessions hebdomadaires (90 min chacune)',
          en: '8 weekly sessions (90 min each)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Taille de cohorte', en: 'Cohort size' } satisfies BilingualLax<string>,
        value: {
          fr: '6 à 10 participants maximum',
          en: '6 to 10 participants maximum'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Accès communauté', en: 'Community access' } satisfies BilingualLax<string>,
        value: {
          fr: 'Slack privé cohorte pendant 8 semaines',
          en: 'Private cohort Slack for 8 weeks'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Workbook', en: 'Workbook' } satisfies BilingualLax<string>,
        value: {
          fr: 'Workbook de pivot complet (PDF + templates)',
          en: 'Complete pivot workbook (PDF + templates)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Enregistrements', en: 'Recordings' } satisfies BilingualLax<string>,
        value: {
          fr: 'Toutes les sessions enregistrées (accès 6 mois)',
          en: 'All sessions recorded (6-month access)'
        } satisfies BilingualLax<string>
      }
    ]
  },

  faq: {
    title: {
      fr: 'Questions sur The Shift',
      en: 'Questions about The Shift'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'shift-vs-gamechanger',
        question: {
          fr: 'Quelle est la différence entre The Shift et Gamechanger Scaling ?',
          en: 'What is the difference between The Shift and Gamechanger Scaling?'
        } satisfies BilingualLax<string>,
        answer: {
          fr: "Gamechanger Scaling est une transformation d'architecture complète sur 12 semaines, idéale si vous voulez reconstruire votre entreprise de fond en comble. The Shift est un pivot stratégique ciblé sur 8 semaines, conçu pour les entrepreneurs qui ont un modèle existant qui a atteint ses limites et qui ont besoin d'une réorientation précise — pas d'une refonte totale.",
          en: 'Gamechanger Scaling is a complete architecture transformation over 12 weeks, ideal if you want to rebuild your business from the ground up. The Shift is a targeted 8-week strategic pivot, designed for entrepreneurs who have an existing model that has hit its limits and need precise reorientation — not a full overhaul.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'next-cohort-shift',
        question: {
          fr: 'Quand démarre la prochaine cohorte The Shift ?',
          en: 'When does the next The Shift cohort start?'
        } satisfies BilingualLax<string>,
        answer: {
          fr: "Les cohortes The Shift démarrent par vagues, en capacité limitée. Les dates exactes sont communiquées lors de l'appel de qualification, en fonction du calendrier en cours et de votre profil.",
          en: 'The Shift cohorts launch in waves with limited capacity. Exact dates are shared during the qualification call, based on the current schedule and your profile.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  finalCta: {
    eyebrow: {
      fr: 'Places limitées',
      en: 'Limited spots'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Postuler à la prochaine cohorte.',
      en: 'Apply for the next cohort.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Cohorte restreinte à 6-10 personnes. Un appel de qualification est requis.',
      en: 'Cohort limited to 6-10 people. A qualification call is required.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Postuler à la prochaine cohorte',
      en: 'Apply for the next cohort'
    } satisfies BilingualLax<string>
  }
} as const;
