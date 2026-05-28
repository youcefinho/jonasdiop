import type { BilingualLax } from '@/lib/i18n/types';

/**
 * services-master-closing.ts — LP Master Closing (formation spécialisée)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 */

export const masterClosingCopy = {
  meta: {
    title: {
      fr: 'Master Closing — Formation Closing Haute Valeur | Jonas Diop',
      en: 'Master Closing — High-Value Closing Training | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Formation spécialisée closing haute valeur. Pour entrepreneurs et équipes commerciales vendant des offres >5K$. 6 modules + 2 calls live + scripts.',
      en: 'High-value closing specialized training. For entrepreneurs and sales teams selling offers >$5K. 6 modules + 2 live calls + scripts.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Formation spécialisée',
      en: 'Specialized training'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Master Closing',
      en: 'Master Closing'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Maîtriser l'art du closing haute valeur. Pour ceux qui vendent des offres à >5K$ et qui veulent arrêter de perdre des deals sur la table.",
      en: 'Master the art of high-value closing. For those selling offers at >$5K who want to stop leaving deals on the table.'
    } satisfies BilingualLax<string>
  },

  problem: {
    eyebrow: {
      fr: 'Le vrai problème',
      en: 'The real problem'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Ce n'est pas ton offre qui bloque. C'est ton closing.",
      en: 'It is not your offer that is blocking you. It is your closing.'
    } satisfies BilingualLax<string>,
    body: {
      fr: 'La plupart des entrepreneurs qui vendent des offres à forte valeur ont un bon produit. Leurs clients sont satisfaits. Leurs résultats sont réels.\n\nMais leurs conversations de vente fuitent. Ils doutent sur le prix. Ils répondent mal aux objections. Ils ne savent pas quand — et comment — conclure.\n\nMaster Closing est une formation technique sur la psychologie et la mécanique du closing haute valeur. Pas de la motivation. De la mécanique.',
      en: 'Most entrepreneurs selling high-value offers have a good product. Their clients are satisfied. Their results are real.\n\nBut their sales conversations leak. They hesitate on price. They handle objections poorly. They do not know when — and how — to close.\n\nMaster Closing is a technical training on the psychology and mechanics of high-value closing. Not motivation. Mechanics.'
    } satisfies BilingualLax<string>
  },

  forWho: {
    eyebrow: {
      fr: 'Pour toi si...',
      en: 'For you if...'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce format est précisément fait pour...',
      en: 'This format is precisely built for...'
    } satisfies BilingualLax<string>,
    qualif: [
      {
        fr: 'Tu es entrepreneur ou responsable commercial qui vend des offres >5K$ (coaching, consulting, formation, B2B)',
        en: 'You are an entrepreneur or sales lead selling offers >$5K (coaching, consulting, training, B2B)'
      },
      {
        fr: 'Ton taux de closing en appel est inférieur à 40%',
        en: 'Your call closing rate is below 40%'
      },
      {
        fr: 'Tu perds des deals sur les objections prix ou "je dois y réfléchir"',
        en: 'You are losing deals on price objections or "I need to think about it"'
      },
      {
        fr: 'Tu veux standardiser ton processus de vente pour que ton équipe puisse le répliquer',
        en: 'You want to standardize your sales process so your team can replicate it'
      }
    ]
  },

  modules: {
    eyebrow: {
      fr: '6 modules · formation autonome',
      en: '6 modules · self-paced'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce que tu vas maîtriser.',
      en: 'What you will master.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'psychologie',
        number: '01',
        title: {
          fr: "Psychologie de l'acheteur premium",
          en: 'Premium buyer psychology'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Comment pense un acheteur qui dépense 5K$, 20K$ ou 50K$. Les signaux d'un acheteur qualifié vs un acheteur qui magasine. Comment aligner la conversation sur sa logique d'achat.",
          en: 'How a buyer who spends $5K, $20K, or $50K thinks. Signals of a qualified buyer vs a comparison shopper. How to align the conversation with their buying logic.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'frameworks',
        number: '02',
        title: {
          fr: 'Frameworks de closing',
          en: 'Closing frameworks'
        } satisfies BilingualLax<string>,
        body: {
          fr: "3 frameworks testés sur des centaines d'appels de vente haute valeur. Structure de l'appel de découverte. Timing du pivot vers l'offre. Techniques de conclusion sans pression.",
          en: '3 frameworks tested on hundreds of high-value sales calls. Discovery call structure. Timing the pivot to the offer. Closing techniques without pressure.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'objections',
        number: '03',
        title: {
          fr: 'Gestion des objections',
          en: 'Objection handling'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Les 8 objections les plus fréquentes dans la vente haute valeur et comment les traiter sans pression ni manipulation. Comment distinguer une vraie objection d'un signal de manque de confiance.",
          en: 'The 8 most common objections in high-value sales and how to handle them without pressure or manipulation. How to distinguish a real objection from a confidence signal.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'pricing',
        number: '04',
        title: {
          fr: 'Pricing & ancrage de valeur',
          en: 'Pricing & value anchoring'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Comment présenter son prix sans s'excuser. Techniques d'ancrage de valeur qui rendent le prix logique avant qu'il soit annoncé. Comment défendre sa valeur sans brader.",
          en: 'How to present your price without apologizing. Value anchoring techniques that make the price logical before it is announced. How to defend your value without discounting.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'pipeline',
        number: '05',
        title: {
          fr: 'Pipeline & suivi post-appel',
          en: 'Pipeline & post-call follow-up'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Comment structurer ton pipeline de vente haute valeur. Protocoles de suivi post-appel qui relancent sans relancer. Comment qualifier les prospects en amont pour ne pas perdre de temps sur des appels non qualifiés.',
          en: 'How to structure your high-value sales pipeline. Post-call follow-up protocols that re-engage without nagging. How to qualify prospects upfront to avoid wasting time on unqualified calls.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'scripts',
        number: '06',
        title: {
          fr: 'Scripts & implémentation',
          en: 'Scripts & implementation'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Templates de scripts adaptables à ton offre et ton style. Comment personnaliser les frameworks à ton marché. Mise en application immédiate avec les 2 calls live de la formation.',
          en: 'Script templates adaptable to your offer and style. How to customize frameworks for your market. Immediate application with the 2 live calls included in the training.'
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
          fr: '6 modules autonomes (accès immédiat après inscription)',
          en: '6 self-paced modules (immediate access after registration)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Calls live', en: 'Live calls' } satisfies BilingualLax<string>,
        value: {
          fr: '2 calls live avec Jonas (Q&R + révision scripts)',
          en: '2 live calls with Jonas (Q&A + script review)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Templates', en: 'Templates' } satisfies BilingualLax<string>,
        value: {
          fr: 'Scripts + frameworks de closing (PDF téléchargeables)',
          en: 'Closing scripts + frameworks (downloadable PDF)'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Accès', en: 'Access' } satisfies BilingualLax<string>,
        value: {
          fr: 'Accès à vie aux modules + enregistrements des calls live',
          en: 'Lifetime access to modules + live call recordings'
        } satisfies BilingualLax<string>
      }
    ]
  },

  faq: {
    title: {
      fr: 'Questions sur Master Closing',
      en: 'Questions about Master Closing'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'inscription',
        question: {
          fr: "Comment s'inscrire à Master Closing ?",
          en: 'How to register for Master Closing?'
        } satisfies BilingualLax<string>,
        answer: {
          fr: "Réserve un appel de découverte via le bouton ci-dessous. L'appel permet de valider que la formation correspond à ta situation et te donne accès aux détails d'investissement.",
          en: 'Book a discovery call via the button below. The call validates that the training fits your situation and gives you access to investment details.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'prealable-closing',
        question: {
          fr: 'Faut-il déjà vendre en appel pour suivre cette formation ?',
          en: 'Do you need to already be selling via calls to take this training?'
        } satisfies BilingualLax<string>,
        answer: {
          fr: "Idéalement, oui. Master Closing est une formation pour des entrepreneurs qui ont déjà des conversations de vente — même peu fréquentes. Elle n'est pas conçue pour quelqu'un qui n'a jamais fait d'appel de vente.",
          en: 'Ideally, yes. Master Closing is a training for entrepreneurs who already have sales conversations — even infrequent ones. It is not designed for someone who has never done a sales call.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  finalCta: {
    eyebrow: {
      fr: 'Inscription',
      en: 'Registration'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Réserver une démo.',
      en: 'Book a demo.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Un appel de 20 minutes pour valider que Master Closing correspond à ta situation.',
      en: 'A 20-minute call to validate that Master Closing fits your situation.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver une démo',
      en: 'Book a demo'
    } satisfies BilingualLax<string>
  }
} as const;
