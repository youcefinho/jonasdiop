import type { BilingualLax } from '@/lib/i18n/types';

/**
 * services-gamechanger-scaling.ts — LP Gamechanger Scaling (programme de groupe 12 semaines)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 */

export const gamechangerScalingCopy = {
  meta: {
    title: {
      fr: 'Gamechanger Scaling — Programme 12 semaines | Jonas Diop',
      en: 'Gamechanger Scaling — 12-week Program | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Programme intensif de groupe 12 semaines. Pour entrepreneurs 6-7 chiffres. Architecture d'affaires + scaling structurel via CDT™. Cohorte restreinte.",
      en: '12-week intensive group program. For 6-to-7 figure entrepreneurs. Business architecture + structural scaling through CDT™. Small cohort.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Programme de groupe · 12 semaines',
      en: 'Group program · 12 weeks'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Gamechanger Scaling',
      en: 'Gamechanger Scaling'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Le programme intensif pour entrepreneurs entre 6 et 7 chiffres qui veulent transformer leur architecture d'affaires — pas juste optimiser ce qui existe déjà.",
      en: 'The intensive program for 6-to-7 figure entrepreneurs who want to transform their business architecture — not just optimize what already exists.'
    } satisfies BilingualLax<string>,
    badge: {
      fr: 'Cohorte restreinte · 8-12 personnes',
      en: 'Small cohort · 8-12 people'
    } satisfies BilingualLax<string>
  },

  promise: {
    eyebrow: {
      fr: 'Ce que tu vas construire',
      en: 'What you will build'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'En 12 semaines : une architecture qui génère de la croissance sans te dévorer.',
      en: 'In 12 weeks : an architecture that generates growth without consuming you.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Gamechanger Scaling n'est pas un programme de motivation. Ce n'est pas un mastermind de networking. C'est un programme de travail.\n\nEn 12 semaines, tu vas diagnostiquer ton architecture actuelle, identifier tes 5 leviers à fort retour, reconstruire ton offre et tes systèmes pour le scaling, et mettre en place une exécution mesurable semaine après semaine.\n\nÀ la fin du programme, ton entreprise doit pouvoir croître sans que tu travailles plus.",
      en: 'Gamechanger Scaling is not a motivation program. It is not a networking mastermind. It is a working program.\n\nIn 12 weeks, you will diagnose your current architecture, identify your 5 high-return levers, rebuild your offer and systems for scaling, and establish measurable execution week by week.\n\nBy the end of the program, your business must be able to grow without you working more.'
    } satisfies BilingualLax<string>
  },

  forWho: {
    eyebrow: {
      fr: 'Pour toi si...',
      en: 'For you if...'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce programme est fait pour des gens précis.',
      en: 'This program is built for specific people.'
    } satisfies BilingualLax<string>,
    qualif: [
      {
        fr: 'Tu génères entre 100K$ et 1M$ de CA (ou approches ce seuil)',
        en: 'You generate between $100K and $1M CAD in revenue (or are approaching that threshold)'
      },
      {
        fr: "Ta croissance est réelle mais tu sens que le modèle actuel ne peut pas scaler sans t'épuiser",
        en: 'Your growth is real but you feel the current model cannot scale without burning you out'
      },
      {
        fr: "Tu veux une transformation d'architecture, pas juste des conseils à la pièce",
        en: 'You want an architecture transformation, not just piecemeal advice'
      },
      {
        fr: 'Tu es prêt à exécuter, pas seulement à apprendre',
        en: 'You are ready to execute, not just learn'
      },
      {
        fr: 'Tu es disponible pour des sessions live hebdomadaires sur 12 semaines',
        en: 'You are available for weekly live sessions over 12 weeks'
      }
    ],
    disqualif: [
      {
        fr: 'Tu démarres ton activité (moins de 50K$ CA)',
        en: 'You are just starting out (under $50K CAD revenue)'
      },
      {
        fr: 'Tu cherches un programme de motivation ou de personal development',
        en: 'You are looking for a motivation or personal development program'
      },
      {
        fr: "Tu n'es pas prêt à remettre en question ton modèle actuel",
        en: 'You are not ready to question your current model'
      }
    ]
  },

  modules: {
    eyebrow: {
      fr: '12 semaines · 6 piliers',
      en: '12 weeks · 6 pillars'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le parcours.',
      en: 'The journey.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'diagnostic',
        weeks: { fr: 'Semaines 1-2', en: 'Weeks 1-2' } satisfies BilingualLax<string>,
        title: {
          fr: "01 · Diagnostic d'architecture",
          en: '01 · Architecture diagnostic'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Cartographie complète de ton architecture actuelle. Identification des fuites de temps, des leviers cachés, des goulots d'étranglement. Rapport de diagnostic personnalisé avec tes 5 priorités.",
          en: 'Complete mapping of your current architecture. Identification of time leaks, hidden levers, bottlenecks. Personalized diagnostic report with your 5 priorities.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'offre',
        weeks: { fr: 'Semaines 3-4', en: 'Weeks 3-4' } satisfies BilingualLax<string>,
        title: {
          fr: "02 · Architecture de l'offre",
          en: '02 · Offer architecture'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Reconstruction de ton offre autour de la valeur réelle. Positioning, prix, format de livraison. Élimination des offres à faible marge ou à forte friction opérationnelle.',
          en: 'Rebuild your offer around real value. Positioning, pricing, delivery format. Elimination of low-margin or high-friction offers.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'equipe',
        weeks: { fr: 'Semaines 5-6', en: 'Weeks 5-6' } satisfies BilingualLax<string>,
        title: {
          fr: "03 · Architecture de l'équipe",
          en: '03 · Team architecture'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Réaffectation des rôles et responsabilités. Définir ce que toi seul peux faire vs ce que l'équipe peut prendre. Protocoles de délégation sans friction.",
          en: 'Reassignment of roles and responsibilities. Define what only you can do vs what the team can take. Frictionless delegation protocols.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'operations',
        weeks: { fr: 'Semaines 7-8', en: 'Weeks 7-8' } satisfies BilingualLax<string>,
        title: {
          fr: '04 · Compression des opérations',
          en: '04 · Operations compression'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Automatisations prioritaires. Élimination des tâches à faible rendement. Mise en place des systèmes qui tournent sans ta présence constante.',
          en: 'Priority automations. Elimination of low-yield tasks. Implementation of systems that run without your constant presence.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'commercial',
        weeks: { fr: 'Semaines 9-10', en: 'Weeks 9-10' } satisfies BilingualLax<string>,
        title: {
          fr: '05 · Scaling commercial',
          en: '05 · Commercial scaling'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Activation des leviers de croissance sur la nouvelle architecture. Pipeline commercial, acquisition, rétention. Chiffres cibles semaine par semaine.',
          en: 'Activation of growth levers on the new architecture. Commercial pipeline, acquisition, retention. Week-by-week target numbers.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'iteration',
        weeks: { fr: 'Semaines 11-12', en: 'Weeks 11-12' } satisfies BilingualLax<string>,
        title: {
          fr: '06 · Itération mesurable',
          en: '06 · Measurable iteration'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Tableaux de bord simples et actionnables. Revue des résultats vs objectifs. Plan de continuité post-programme pour maintenir le momentum.',
          en: 'Simple, actionable dashboards. Results vs targets review. Post-program continuity plan to maintain momentum.'
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
      fr: 'Comment ça fonctionne concrètement.',
      en: 'How it works in practice.'
    } satisfies BilingualLax<string>,
    details: [
      {
        label: { fr: 'Sessions live', en: 'Live sessions' } satisfies BilingualLax<string>,
        value: {
          fr: '12 sessions hebdomadaires (2h chacune)',
          en: '12 weekly sessions (2h each)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Taille de cohorte', en: 'Cohort size' } satisfies BilingualLax<string>,
        value: {
          fr: '8 à 12 participants maximum',
          en: '8 to 12 participants maximum'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Accès communauté', en: 'Community access' } satisfies BilingualLax<string>,
        value: {
          fr: 'Slack privé cohorte pendant 12 semaines',
          en: 'Private cohort Slack for 12 weeks'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Office hours', en: 'Office hours' } satisfies BilingualLax<string>,
        value: {
          fr: '1 session office hours/semaine avec Jonas',
          en: '1 weekly office hours session with Jonas'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Enregistrements', en: 'Recordings' } satisfies BilingualLax<string>,
        value: {
          fr: 'Toutes les sessions enregistrées (accès 12 mois)',
          en: 'All sessions recorded (12-month access)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Langue', en: 'Language' } satisfies BilingualLax<string>,
        value: {
          fr: 'Français (anglais disponible)',
          en: 'English (French available)'
        } satisfies BilingualLax<string>
      }
    ]
  },

  results: {
    eyebrow: {
      fr: 'Résultats attendus',
      en: 'Expected results'
    } satisfies BilingualLax<string>,
    title: {
      fr: "À quoi t'attendre en 12 semaines.",
      en: 'What to expect in 12 weeks.'
    } satisfies BilingualLax<string>,
    disclaimer: {
      fr: 'Résultats variables selon engagement et exécution. Représentatifs des mandats Gamechanger Scaling — non garantis.',
      en: 'Results vary based on engagement and execution. Representative of Gamechanger Scaling engagements — not guaranteed.'
    } satisfies BilingualLax<string>,
    milestones: [
      {
        timeframe: { fr: 'Semaine 2', en: 'Week 2' } satisfies BilingualLax<string>,
        label: {
          fr: 'Diagnostic complet. Leviers identifiés.',
          en: 'Complete diagnostic. Levers identified.'
        } satisfies BilingualLax<string>
      },
      {
        timeframe: { fr: 'Semaine 6', en: 'Week 6' } satisfies BilingualLax<string>,
        label: {
          fr: 'Offre repositionnée. Équipe réalignée.',
          en: 'Offer repositioned. Team realigned.'
        } satisfies BilingualLax<string>
      },
      {
        timeframe: { fr: 'Semaine 10', en: 'Week 10' } satisfies BilingualLax<string>,
        label: {
          fr: 'Systèmes en place. Temps récupéré.',
          en: 'Systems in place. Time reclaimed.'
        } satisfies BilingualLax<string>
      },
      {
        timeframe: { fr: 'Semaine 12', en: 'Week 12' } satisfies BilingualLax<string>,
        label: {
          fr: 'Scaling activé. Résultats financiers mesurables.',
          en: 'Scaling activated. Measurable financial results.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  faq: {
    title: {
      fr: 'Questions sur Gamechanger Scaling',
      en: 'Questions about Gamechanger Scaling'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'next-cohort',
        question: {
          fr: 'Quand démarre la prochaine cohorte ?',
          en: 'When does the next cohort start?'
        } satisfies BilingualLax<string>,
        answer: {
          fr: "Les cohortes ont une disponibilité limitée et démarrent par vagues. Les dates exactes des prochaines cohortes sont communiquées lors de l'appel de qualification, en fonction de ta situation et du calendrier en cours.",
          en: 'Cohorts have limited availability and launch in waves. Exact next cohort dates are shared during the qualification call, based on your situation and the current schedule.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'investissement-detail',
        question: {
          fr: "Quel est l'investissement pour Gamechanger Scaling ?",
          en: 'What is the investment for Gamechanger Scaling?'
        } satisfies BilingualLax<string>,
        answer: {
          fr: "L'investissement n'est pas affiché publiquement. Il est communiqué lors de l'appel de qualification, une fois que nous avons évalué si le programme est le bon fit pour ta situation.",
          en: 'The investment is not publicly listed. It is shared during the qualification call, once we have assessed whether the program is the right fit for your situation.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'prealable',
        question: {
          fr: 'Faut-il avoir suivi un autre programme avant Gamechanger Scaling ?',
          en: 'Do you need to have completed another program before Gamechanger Scaling?'
        } satisfies BilingualLax<string>,
        answer: {
          fr: "Non. Gamechanger Scaling est conçu comme un programme complet et autonome. Le prérequis principal est ta situation réelle : un CA de 100K$+ et la volonté de transformer ton architecture. L'appel de qualification permet de valider ce prérequis.",
          en: 'No. Gamechanger Scaling is designed as a complete, standalone program. The main prerequisite is your real situation : $100K+ CAD revenue and the willingness to transform your architecture. The qualification call validates this.'
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
      fr: 'Cohorte restreinte à 8-12 personnes. Un appel de qualification est requis pour valider ta candidature.',
      en: 'Cohort limited to 8-12 people. A qualification call is required to validate your application.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Postuler à la prochaine cohorte',
      en: 'Apply for the next cohort'
    } satisfies BilingualLax<string>
  }
} as const;
