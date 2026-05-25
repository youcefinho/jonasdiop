import type { BilingualLax } from '@/lib/i18n/types';

/**
 * about.ts — Page À propos (story narrative Jonas Diop)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 * [À VALIDER JONAS] markers = contenus non confirmés (anecdotes, dates précises, citations)
 */

export const aboutCopy = {
  meta: {
    title: {
      fr: "À propos — Jonas Diop, Architecte d'affaires | DIOP Stratégies Internationales",
      en: 'About — Jonas Diop, Business Architect | DIOP Stratégies Internationales'
    } satisfies BilingualLax<string>,
    description: {
      fr: "15 ans, 857+ entrepreneurs accompagnés, 31M$+ générés. L'histoire de Jonas Diop et de la naissance de la CDT™ — Compression Dynamique du Temps.",
      en: '15 years, 857+ entrepreneurs supported, $31M+ generated. The story behind Jonas Diop and the birth of the CDT™ — Dynamic Time Compression.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: "L'histoire",
      en: 'The story'
    } satisfies BilingualLax<string>,
    h1: {
      fr: "Jonas Diop, architecte d'affaires.",
      en: 'Jonas Diop, business architect.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: '15 ans passés à observer les mêmes patterns : des entrepreneurs brillants, en croissance, et pourtant épuisés. La CDT™ est née de ce constat.',
      en: '15 years spent watching the same patterns unfold : sharp, growing entrepreneurs — and yet, burned out. CDT™ was built from that observation.'
    } satisfies BilingualLax<string>
  },

  stats: {
    items: [
      {
        value: { fr: '15+', en: '15+' } satisfies BilingualLax<string>,
        label: { fr: "ans d'expérience", en: 'years of experience' } satisfies BilingualLax<string>
      },
      {
        value: { fr: '857+', en: '857+' } satisfies BilingualLax<string>,
        label: {
          fr: 'entrepreneurs accompagnés',
          en: 'entrepreneurs supported'
        } satisfies BilingualLax<string>
      },
      {
        value: { fr: '31M$+', en: '$31M+ CAD' } satisfies BilingualLax<string>,
        label: {
          fr: 'générés pour les clients',
          en: 'generated for clients'
        } satisfies BilingualLax<string>
      }
    ]
  },

  sections: [
    {
      id: 'origin-insight',
      eyebrow: {
        fr: "L'insight fondateur",
        en: 'The founding insight'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Le succès ne devrait pas coûter votre temps.',
        en: 'Success should not cost your time.'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Après plus de 15 ans à travailler avec des entrepreneurs, un pattern s'est répété de façon systématique : les gens qui réussissent le mieux sont aussi ceux qui s'épuisent le plus.

Pas parce qu'ils travaillent mal. Pas parce qu'ils manquent d'ambition. Mais parce que personne ne leur a montré comment bâtir une architecture d'affaires qui génère de la croissance sans dévorer leur agenda.

J'ai accompagné des entrepreneurs qui avaient doublé leur chiffre d'affaires en deux ans — et qui me disaient, sans détour, qu'ils ne savaient plus pourquoi ils faisaient tout ça.

C'est ce constat qui a changé la nature de mon travail.`,
        en: `After more than 15 years working alongside entrepreneurs, a pattern emerged with striking consistency : the people succeeding the most were also the ones burning out the hardest.

Not because they lacked skill. Not because they lacked drive. But because no one had shown them how to build a business architecture that generates growth without consuming their calendar.

I worked with entrepreneurs who had doubled their revenue in two years — and who told me plainly they no longer knew why they were doing any of it.

That realization changed the nature of my work.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'the-failure',
      eyebrow: {
        fr: "L'échec qui a tout changé",
        en: 'The failure that changed everything'
      } satisfies BilingualLax<string>,
      title: {
        fr: '[À VALIDER JONAS — anecdote personnelle]',
        en: '[TO VALIDATE WITH JONAS — personal anecdote]'
      } satisfies BilingualLax<string>,
      body: {
        fr: `[À VALIDER JONAS — Jonas, pouvez-vous partager une expérience fondatrice — un moment où votre propre modèle a montré ses limites, une initiative qui n'a pas fonctionné comme prévu, ou une décision que vous avez dû réévaluer ? Cette anecdote ancre votre crédibilité dans la vulnérabilité, pas seulement dans les résultats. Dan Martell style : autorité + humanité.]

Ce moment m'a appris quelque chose que les théories sur l'entrepreneuriat n'enseignent pas : la différence entre travailler fort et travailler avec levier.

C'est là que j'ai commencé à codifier ce qui deviendrait la CDT™.`,
        en: `[TO VALIDATE WITH JONAS — same personal anecdote, EN version]

That moment taught me something business theory never covers : the difference between working hard and working with leverage.

That's where I began codifying what would become CDT™.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'cdt-birth',
      eyebrow: {
        fr: 'La naissance de CDT™',
        en: 'The birth of CDT™'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Compresser le temps, pas sacrifier la qualité.',
        en: 'Compress time. Not quality.'
      } satisfies BilingualLax<string>,
      body: {
        fr: `La Compression Dynamique du Temps n'est pas un raccourci. C'est une méthodologie d'ingénierie.

L'idée centrale : si vous pouvez identifier avec précision où votre temps fuit, où votre offre perd de la puissance, et où votre équipe tourne à vide — vous pouvez reconstruire l'architecture pour que chaque heure investie produit 3 à 5 fois plus de résultats.

Pas en travaillant plus. En travaillant avec plus de levier.

La CDT™ a été codifiée à partir de centaines de mandats réels, de patterns observés sur des dizaines de secteurs différents, et d'un principe simple : les entrepreneurs à fort levier ne sont pas des gens exceptionnels. Ce sont des gens qui ont un système exceptionnel.`,
        en: `Dynamic Time Compression is not a shortcut. It is an engineering methodology.

The core idea : if you can identify precisely where your time is leaking, where your offer loses power, and where your team runs idle — you can rebuild the architecture so that every hour invested produces 3 to 5 times more output.

Not by working more. By working with more leverage.

CDT™ was codified from hundreds of real engagements, patterns observed across dozens of sectors, and a simple premise : high-leverage entrepreneurs are not exceptional people. They are people with exceptional systems.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'today',
      eyebrow: {
        fr: "Aujourd'hui",
        en: 'Today'
      } satisfies BilingualLax<string>,
      title: {
        fr: "857 entrepreneurs accompagnés. 31 millions générés. La méthode continue d'évoluer.",
        en: '857 entrepreneurs. $31M generated. The method keeps evolving.'
      } satisfies BilingualLax<string>,
      body: {
        fr: `Depuis [À VALIDER JONAS — année de lancement des programmes formels], j'ai accompagné plus de 857 entrepreneurs, coachs et experts à travers des programmes de groupe, des formations spécialisées et des mandats stratégiques privés.

Les clients de DIOP Stratégies Internationales Inc. ont collectivement généré plus de 31 millions de dollars de chiffre d'affaires additionnel en appliquant la CDT™.

Ce qui a changé depuis les débuts : la précision du diagnostic. Ce qui n'a pas changé : le pragmatisme d'exécution. Pas de théorie pour le plaisir de la théorie. Pas de cadres conceptuels qui s'arrêtent à la présentation.

Résultats structurels en 30 jours. Résultats financiers significatifs en 60 à 90 jours. C'est le standard qu'on s'impose.`,
        en: `Since [TO VALIDATE WITH JONAS — year formal programs launched], I have worked with more than 857 entrepreneurs, coaches, and experts through group programs, specialized trainings, and private strategic engagements.

Clients of DIOP Stratégies Internationales Inc. have collectively generated more than $31 million CAD in additional revenue by applying CDT™.

What has changed since the beginning : the precision of the diagnostic. What hasn't : the execution pragmatism. No theory for theory's sake. No conceptual frameworks that stop at the slide deck.

Structural results in 30 days. Meaningful financial results in 60 to 90 days. That is the standard we hold ourselves to.`
      } satisfies BilingualLax<string>
    },
    {
      id: 'mission',
      eyebrow: {
        fr: 'La mission',
        en: 'The mission'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Transformer des entrepreneurs en architectes de leur propre croissance.',
        en: 'Turn entrepreneurs into architects of their own growth.'
      } satisfies BilingualLax<string>,
      body: {
        fr: `La mission de DIOP Stratégies Internationales est précise : transformer les entrepreneurs en architectes de leur croissance grâce à des offres, des systèmes et des stratégies à fort levier.

Pas les rendre dépendants d'un consultant. Les rendre capables de piloter leur propre architecture.

On travaille avec des entrepreneurs, des coachs et des experts qui génèrent déjà entre 100K$ et 1M$ de chiffre d'affaires. Des gens qui ont prouvé qu'ils savent exécuter — et qui sont prêts à passer au niveau suivant sans sacrifier leur vie pour le faire.

Nos trois valeurs guident chaque mandat : **Pragmatisme. Vision. Levier.**`,
        en: `The mission of DIOP Stratégies Internationales is precise : turn entrepreneurs into architects of their own growth through high-leverage offers, systems, and strategies.

Not make them dependent on a consultant. Make them capable of running their own architecture.

We work with entrepreneurs, coaches, and experts already generating between $100K and $1M CAD in revenue. People who have proven they can execute — and who are ready for the next level without giving up their lives to get there.

Three values guide every engagement : **Pragmatism. Vision. Leverage.**`
      } satisfies BilingualLax<string>
    }
  ],

  finalCta: {
    eyebrow: {
      fr: 'Prochaine étape',
      en: 'Next step'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Parlons de votre architecture.',
      en: "Let's talk about your architecture."
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Un appel de qualification pour évaluer si votre situation correspond à nos programmes.',
      en: 'A qualification call to assess whether your situation fits our programs.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver un appel',
      en: 'Book a call'
    } satisfies BilingualLax<string>
  }
} as const;
