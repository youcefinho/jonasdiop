import type { BilingualLax } from '@/lib/i18n/types';

/**
 * methodologie-cdt.ts — Page signature CDT™ (Compression Dynamique du Temps)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 * CDT™ : afficher TOUJOURS avec ™ · mot CDT + ™ en gold dans le rendu
 */

export const methodologieCdtCopy = {
  meta: {
    title: {
      fr: 'CDT™ — Compression Dynamique du Temps | Jonas Diop',
      en: 'CDT™ — Dynamic Time Compression | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: "La CDT™ : méthodologie propriétaire de Jonas Diop. Architecture d'affaires, ingénierie systémique et offres à fort levier pour passer de 6 à 7 figures en récupérant 50% de votre temps. Résultats structurels en 30 jours, financiers en 60-90 jours.",
      en: "CDT™ : Jonas Diop's proprietary methodology. Business architecture, systemic engineering and high-leverage offers to move from 6 to 7 figures while reclaiming 50% of your time. Structural results in 30 days, financial results in 60-90 days."
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Méthodologie propriétaire',
      en: 'Proprietary methodology'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'CDT™ : Compression Dynamique du Temps',
      en: 'CDT™ : Dynamic Time Compression'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Ajouter un zéro à votre chiffre d'affaires en récupérant 50% de votre temps. Pas en travaillant plus — en travaillant avec plus de levier.",
      en: 'Add a zero to your revenue while reclaiming 50% of your time. Not by working more — by working with more leverage.'
    } satisfies BilingualLax<string>
  },

  definition: {
    eyebrow: {
      fr: 'Ce que CDT™ signifie',
      en: 'What CDT™ means'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Comprimer le temps d'exécution sans comprimer la qualité.",
      en: 'Compress execution time without compressing quality.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `La Compression Dynamique du Temps n'est pas un raccourci. Ce n'est pas une méthode de productivité personnelle. C'est une approche d'ingénierie systémique appliquée à l'architecture d'une entreprise.

Le principe central : chaque heure investie dans une entreprise bien architecturée produit 3 à 5 fois plus de résultats qu'une heure investie dans une entreprise mal câblée — peu importe le talent ou l'effort de son fondateur.

La CDT™ intervient à trois niveaux simultanément : l'offre (est-ce que vous vendez quelque chose à fort levier ?), les systèmes (est-ce que votre opération tourne avec ou sans vous ?), et le temps (est-ce que vous passez votre temps sur ce que vous seul pouvez faire ?).

Quand les trois s'alignent, la croissance devient structurelle. Pas conjoncturelle.`,
      en: `Dynamic Time Compression is not a shortcut. It is not a personal productivity method. It is a systemic engineering approach applied to business architecture.

The core principle : every hour invested in a well-architected business produces 3 to 5 times more output than an hour invested in a poorly wired one — regardless of the founder's talent or effort.

CDT™ operates on three simultaneous levels : the offer (are you selling something high-leverage?), the systems (does your operation run with or without you?), and time (are you spending your time on what only you can do?).

When all three align, growth becomes structural. Not circumstantial.`
    } satisfies BilingualLax<string>
  },

  lesTroisS: {
    eyebrow: {
      fr: 'Les 3 S de la CDT™',
      en: 'The 3 S of CDT™'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Structure. Stratégie. Système.',
      en: 'Structure. Strategy. System.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Les trois dimensions concrètes sur lesquelles la CDT™ agit — et qui transforment un effort linéaire en croissance structurelle.',
      en: 'The three concrete dimensions CDT™ acts on — turning linear effort into structural growth.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'structure',
        letter: 'S',
        title: { fr: 'Structure', en: 'Structure' } satisfies BilingualLax<string>,
        eyebrow: { fr: 'Fondation', en: 'Foundation' } satisfies BilingualLax<string>,
        body: {
          fr: "Une offre claire, des départements bien définis, un positionnement précis. Avant toute stratégie, la fondation doit tenir : c'est elle qui permet à chaque décision suivante d'avoir un point d'ancrage.",
          en: 'A clear offer, well-defined departments, a precise positioning. Before any strategy, the foundation must hold : it is what gives every later decision an anchor point.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'strategie',
        letter: 'S',
        title: { fr: 'Stratégie', en: 'Strategy' } satisfies BilingualLax<string>,
        eyebrow: { fr: 'Vision', en: 'Vision' } satisfies BilingualLax<string>,
        body: {
          fr: "Une vision d'ensemble, des étapes nommées, des milestones mesurables et des KPIs pour garder le cap. La stratégie n'est pas un déclaratif — c'est ce qui permet à l'opération de tenir la trajectoire quand le quotidien tire ailleurs.",
          en: 'A whole-picture view, named milestones, measurable KPIs to hold the line. Strategy is not a statement — it is what lets the operation stay on course when daily noise pulls elsewhere.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'systeme',
        letter: 'S',
        title: { fr: 'Système', en: 'System' } satisfies BilingualLax<string>,
        eyebrow: { fr: 'Exécution', en: 'Execution' } satisfies BilingualLax<string>,
        body: {
          fr: "Le système, c'est ce qui te permet de suivre, d'être au courant et d'être omniscient de ton business — sans avoir à tout porter toi-même. C'est le levier qui transforme la structure et la stratégie en résultats répétables.",
          en: 'The system is what lets you track, stay informed, and remain omniscient of your business — without carrying everything yourself. It is the lever that turns structure and strategy into repeatable results.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  loiImpact: {
    eyebrow: {
      fr: 'La loi de l’impact',
      en: 'The law of impact'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Deux axes. Un multiplicateur.',
      en: 'Two axes. One multiplier.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "On agit toujours sur les deux mêmes axes : l'échelle — le nombre de personnes que vous pouvez réellement servir — et la monétisation — le prix et la valeur perçue de chaque offre. Ce ne sont pas des intuitions. Tweakez les deux avec méthode et le chiffre d'affaires se multiplie sans ajouter d'heures.",
      en: 'We always act on the same two axes : scale — the number of people you can actually serve — and monetization — the price and perceived value of each offer. These are not intuitions. Tweak both methodically and revenue multiplies without adding hours.'
    } satisfies BilingualLax<string>,
    axes: {
      x: {
        label: { fr: 'Échelle', en: 'Scale' } satisfies BilingualLax<string>,
        sub: {
          fr: 'Combien de personnes vous touchez',
          en: 'How many people you reach'
        } satisfies BilingualLax<string>
      },
      y: {
        label: { fr: 'Monétisation', en: 'Monetization' } satisfies BilingualLax<string>,
        sub: {
          fr: 'Le prix et la valeur perçue',
          en: 'Price and perceived value'
        } satisfies BilingualLax<string>
      }
    }
  },

  pillars: {
    eyebrow: {
      fr: 'Les 3 piliers',
      en: 'The 3 pillars'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Trois forces. Une architecture.',
      en: 'Three forces. One architecture.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'architecture-affaires',
        number: '01',
        title: {
          fr: "Architecture d'affaires & scaling stratégique",
          en: 'Business architecture & strategic scaling'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Repenser la structure fondamentale de l'entreprise : offre, modèle de revenus, équipe, processus. Identifier les leviers à fort retour et éliminer les activités à faible rendement. Bâtir pour scaler, pas pour survivre.",
          en: 'Rethink the fundamental business structure : offer, revenue model, team, processes. Identify high-return levers and eliminate low-yield activities. Build to scale, not to survive.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'positionnement-autorite',
        number: '02',
        title: {
          fr: 'Positionnement haut de gamme & autorité',
          en: 'Premium positioning & authority'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Repositionner l'offre dans un segment à forte valeur perçue. Construire une autorité durable dans le marché cible. Attirer des clients qualifiés prêts à payer le prix juste — pas des acheteurs de commodité.",
          en: 'Reposition the offer in a high perceived-value segment. Build durable authority in the target market. Attract qualified clients willing to pay the right price — not commodity buyers.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'ingenierie-temps',
        number: '03',
        title: {
          fr: 'Ingénierie systémique du temps',
          en: 'Systemic time engineering'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Cartographier les fuites de temps dans l'opération. Automatiser, déléguer, éliminer. Reconfigurer l'agenda du fondateur pour qu'il soit concentré sur les 20% d'actions qui génèrent 80% des résultats.",
          en: "Map time leaks across the operation. Automate, delegate, eliminate. Reconfigure the founder's calendar to focus on the 20% of actions generating 80% of results."
        } satisfies BilingualLax<string>
      }
    ]
  },

  phases: {
    eyebrow: {
      fr: "Les 4 phases d'application",
      en: 'The 4 application phases'
    } satisfies BilingualLax<string>,
    title: {
      fr: "De l'audit à l'exécution mesurable.",
      en: 'From audit to measurable execution.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'diagnostic',
        number: '01',
        phase: {
          fr: 'Diagnostic',
          en: 'Diagnostic'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Cartographier les fuites et les leviers cachés.',
          en: 'Map the leaks and the hidden levers.'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Analyse complète de l'architecture actuelle : où le temps fuit, où l'offre perd de la valeur, où l'équipe tourne à vide. Identification des 3 à 5 leviers prioritaires à fort retour. Sans diagnostic précis, tout le reste est de la conjecture.",
          en: 'Complete analysis of the current architecture : where time leaks, where the offer loses value, where the team runs idle. Identification of the 3 to 5 priority high-return levers. Without a precise diagnostic, everything else is guesswork.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'architecture',
        number: '02',
        phase: {
          fr: 'Architecture',
          en: 'Architecture'
        } satisfies BilingualLax<string>,
        title: {
          fr: "Redessiner l'offre, les systèmes et l'équipe pour le fort levier.",
          en: 'Redesign the offer, systems, and team for high leverage.'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Reconstruction de l'offre autour de la valeur réelle. Redesign des processus clés pour opérer sans présence constante du fondateur. Réaffectation des rôles et responsabilités. L'architecture précède le scaling — dans l'ordre inverse, on construit sur du sable.",
          en: "Rebuild the offer around real value. Redesign core processes to operate without the founder's constant presence. Reassign roles and responsibilities. Architecture precedes scaling — in reverse order, you build on sand."
        } satisfies BilingualLax<string>
      },
      {
        id: 'compression',
        number: '03',
        phase: {
          fr: 'Compression',
          en: 'Compression'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Automatiser, déléguer, éliminer.',
          en: 'Automate, delegate, eliminate.'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Mise en place des automatisations, des délégations et des protocoles d'élimination. C'est la phase où le fondateur récupère concrètement du temps — pas en faisant moins, mais en faisant uniquement ce que lui seul peut faire. Objectif : 50% du temps récupéré d'ici 90 jours.",
          en: 'Implement automations, delegations, and elimination protocols. This is the phase where the founder concretely reclaims time — not by doing less, but by doing only what they uniquely can do. Target : 50% of time reclaimed within 90 days.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'scaling',
        number: '04',
        phase: {
          fr: 'Scaling',
          en: 'Scaling'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Exécution mesurable. Itération hebdomadaire.',
          en: 'Measurable execution. Weekly iteration.'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Déploiement de la stratégie de croissance sur la nouvelle architecture. Tableaux de bord simples et actionnables. Itérations hebdomadaires basées sur des données réelles, pas des impressions. Le scaling ne se pilote pas à l'instinct — il se pilote aux chiffres.",
          en: 'Deploy the growth strategy on the new architecture. Simple, actionable dashboards. Weekly iterations based on real data, not gut feel. Scaling is not driven by instinct — it is driven by numbers.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  results: {
    eyebrow: {
      fr: 'Résultats observés',
      en: 'Observed results'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Des timelines réelles, pas des promesses.',
      en: 'Real timelines, not promises.'
    } satisfies BilingualLax<string>,
    disclaimer: {
      fr: "Résultats variables selon l'engagement et l'exécution. Les résultats suivants sont représentatifs des mandats CDT™ — non garantis.",
      en: 'Results vary based on engagement and execution. The following results are representative of CDT™ engagements — not guaranteed.'
    } satisfies BilingualLax<string>,
    milestones: [
      {
        timeframe: { fr: '30 jours', en: '30 days' } satisfies BilingualLax<string>,
        label: {
          fr: 'Résultats structurels',
          en: 'Structural results'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Architecture clarifiée, leviers identifiés, premières automatisations en place. Le fondateur commence à récupérer du temps.',
          en: 'Architecture clarified, levers identified, first automations in place. The founder begins reclaiming time.'
        } satisfies BilingualLax<string>
      },
      {
        timeframe: { fr: '60-90 jours', en: '60-90 days' } satisfies BilingualLax<string>,
        label: {
          fr: 'Résultats financiers significatifs',
          en: 'Significant financial results'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Impact mesurable sur le CA. Nouveaux revenus issus de l'offre repositionnée. Marge améliorée par réduction des activités à faible rendement.",
          en: 'Measurable revenue impact. New income from the repositioned offer. Improved margin by cutting low-yield activities.'
        } satisfies BilingualLax<string>
      },
      {
        timeframe: { fr: '90 jours', en: '90 days' } satisfies BilingualLax<string>,
        label: {
          fr: '50% du temps récupéré',
          en: '50% of time reclaimed'
        } satisfies BilingualLax<string>,
        body: {
          fr: "L'opération tourne avec une présence réduite du fondateur. L'agenda est restructuré autour des actions à fort levier.",
          en: 'The operation runs with reduced founder presence. The calendar is restructured around high-leverage actions.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  finalCta: {
    eyebrow: {
      fr: 'Prochaine étape',
      en: 'Next step'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Découvrir comment la CDT™ s'applique à votre situation.",
      en: 'Discover how CDT™ applies to your situation.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Un appel de qualification pour évaluer votre architecture actuelle et identifier vos 3 leviers prioritaires.',
      en: 'A qualification call to assess your current architecture and identify your 3 priority levers.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver un appel de qualification',
      en: 'Book a qualification call'
    } satisfies BilingualLax<string>
  }
} as const;
