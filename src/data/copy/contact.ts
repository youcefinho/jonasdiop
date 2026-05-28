import type { BilingualLax } from '@/lib/i18n/types';

/**
 * contact.ts — Page Contact + Calendly embed
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 2
 * [À VALIDER JONAS] markers = contenus non confirmés (Calendly URL, dates, format appel)
 */

export const contactCopy = {
  meta: {
    title: {
      fr: "Contact — Réserver un appel de qualification | Jonas Diop, Architecte d'affaires",
      en: 'Contact — Book a Qualification Call | Jonas Diop, Business Architect'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Un appel de qualification gratuit de 30 minutes avec Jonas Diop, architecte d'affaires Montréal, pour évaluer si votre situation correspond à nos programmes de scaling stratégique.",
      en: 'A free 30-minute qualification call with Jonas Diop, Montréal-based business architect, to assess whether your situation fits our strategic scaling programs.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Contact',
      en: 'Contact'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Parlons de votre architecture.',
      en: "Let's talk about your architecture."
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Un appel de qualification de 30 minutes — gratuit, sans pression. On évalue ensemble si votre situation correspond à nos programmes. Si ce n'est pas le bon fit, on vous le dit.",
      en: 'A 30-minute qualification call — free, no pressure. We assess together whether your situation fits our programs. If it is not the right fit, we will say so.'
    } satisfies BilingualLax<string>
  },

  howItWorks: {
    eyebrow: {
      fr: 'Le processus',
      en: 'The process'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Comment ça fonctionne.',
      en: 'How it works.'
    } satisfies BilingualLax<string>,
    steps: [
      {
        number: '01',
        title: {
          fr: 'Réservez',
          en: 'Book'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Choisissez un créneau directement dans l'agenda Calendly ci-dessous. Vous recevez une confirmation immédiate par email.",
          en: 'Choose a time slot directly in the Calendly calendar below. You receive immediate email confirmation.'
        } satisfies BilingualLax<string>
      },
      {
        number: '02',
        title: {
          fr: 'Pré-call qualification',
          en: 'Pre-call qualification'
        } satisfies BilingualLax<string>,
        body: {
          fr: "30 minutes avec Jonas. On explore votre situation, votre chiffre d'affaires actuel, vos blocages, et ce que vous voulez construire. Pas de pitch. Pas de présentation produit.",
          en: '30 minutes with Jonas. We explore your situation, your current revenue, your blockers, and what you want to build. No pitch. No product presentation.'
        } satisfies BilingualLax<string>
      },
      {
        number: '03',
        title: {
          fr: 'Décision mutuelle',
          en: 'Mutual decision'
        } satisfies BilingualLax<string>,
        body: {
          fr: "À la fin de l'appel, on décide ensemble si c'est le bon fit — vous et nous. Si oui, on vous présente le programme adapté et les prochaines étapes. Si non, vous repartez avec des pistes concrètes.",
          en: 'At the end of the call, we decide together whether it is the right fit — you and us. If yes, we present the right program and next steps. If not, you leave with concrete direction.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  diopMethod: {
    eyebrow: {
      fr: 'La méthode DIOP',
      en: 'The DIOP method'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Diagnostic. Implémentation. Optimisation. Propulser.',
      en: 'Diagnostic. Implementation. Optimization. Propel.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Une fois engagé, voici comment se déroule l'accompagnement — quatre temps, alignés avec les initiales DIOP.",
      en: 'Once engaged, here is how the mandate unfolds — four phases, aligned with the DIOP initials.'
    } satisfies BilingualLax<string>,
    steps: [
      {
        letter: 'D',
        title: { fr: 'Diagnostic', en: 'Diagnostic' } satisfies BilingualLax<string>,
        body: {
          fr: "On cartographie l'architecture actuelle : où le temps fuit, où l'offre perd de la valeur, où l'opération tourne à vide. Pas de présomption — chaque levier est documenté avec des chiffres.",
          en: 'We map the current architecture : where time leaks, where the offer loses value, where the operation runs idle. No assumptions — every lever is documented with numbers.'
        } satisfies BilingualLax<string>
      },
      {
        letter: 'I',
        title: { fr: 'Implémentation', en: 'Implementation' } satisfies BilingualLax<string>,
        body: {
          fr: "Les leviers prioritaires passent en exécution : nouvelle architecture d'offre, refonte des systèmes, réalignement de l'équipe. Pas de PowerPoint — on installe ce qui doit tourner.",
          en: 'Priority levers move into execution : new offer architecture, system refactor, team realignment. No PowerPoint — we install what must run.'
        } satisfies BilingualLax<string>
      },
      {
        letter: 'O',
        title: { fr: 'Optimisation', en: 'Optimization' } satisfies BilingualLax<string>,
        body: {
          fr: "On mesure, on ajuste, on raffine. Les premiers résultats structurels sont là — l'objectif devient de compresser le temps et d'augmenter la marge sans ajouter de complexité.",
          en: 'We measure, adjust, refine. First structural results are in — the goal becomes compressing time and increasing margin without adding complexity.'
        } satisfies BilingualLax<string>
      },
      {
        letter: 'P',
        title: { fr: 'Propulser', en: 'Propel' } satisfies BilingualLax<string>,
        body: {
          fr: "L'architecture tient seule. Le scaling devient commercial, pas opérationnel. C'est le moment où l'on bascule du levier individuel au levier systémique — durable, mesurable, transmissible.",
          en: 'The architecture holds on its own. Scaling becomes commercial, not operational. This is when we move from individual leverage to systemic leverage — durable, measurable, transmissible.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  callExplore: {
    eyebrow: {
      fr: "Ce qu'on va explorer",
      en: 'What we will explore'
    } satisfies BilingualLax<string>,
    title: {
      fr: "L'appel, en détail.",
      en: 'The call, in detail.'
    } satisfies BilingualLax<string>,
    items: [
      {
        fr: "Votre situation actuelle — CA, modèle d'affaires, structure d'équipe",
        en: 'Your current situation — revenue, business model, team structure'
      },
      {
        fr: 'Votre vision à 12-24 mois — où vous voulez amener votre entreprise',
        en: 'Your 12-to-24 month vision — where you want to take your business'
      },
      {
        fr: 'Vos blocages réels — pas les symptômes, la racine',
        en: 'Your real blockers — not the symptoms, the root'
      },
      {
        fr: 'Le fit programme — quel format correspond à votre situation et à votre timing',
        en: 'Program fit — which format matches your situation and your timing'
      },
      {
        fr: 'Les prochaines étapes — concrètes, sans ambiguïté',
        en: 'Next steps — concrete, no ambiguity'
      }
    ]
  },

  notForWho: {
    eyebrow: {
      fr: 'Transparence',
      en: 'Transparency'
    } satisfies BilingualLax<string>,
    title: {
      fr: "À qui ce n'est pas destiné.",
      en: 'Who this is not for.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "On travaille avec des entrepreneurs sérieux. Ce n'est pas une posture — c'est une réalité opérationnelle. Si vous vous reconnaissez dans l'un de ces profils, l'appel ne sera pas utile pour vous :",
      en: 'We work with serious entrepreneurs. That is not a posture — it is an operational reality. If you recognize yourself in any of these profiles, the call will not be useful for you :'
    } satisfies BilingualLax<string>,
    disqualif: [
      {
        fr: 'Entrepreneurs en démarrage avec moins de 100K$ de CA',
        en: 'Entrepreneurs just starting out with under $100K CAD revenue'
      },
      {
        fr: "Ceux qui cherchent une formule magique sans engagement d'exécution",
        en: 'Those looking for a magic formula without execution commitment'
      },
      {
        fr: 'Ceux qui ne sont pas prêts à remettre en question leur modèle actuel',
        en: 'Those not ready to question their current model'
      },
      {
        fr: "Ceux qui voient la consultation comme un raccourci plutôt qu'un investissement stratégique",
        en: 'Those who see consultation as a shortcut rather than a strategic investment'
      }
    ]
  },

  form: {
    eyebrow: {
      fr: 'Ou envoyez-nous un message',
      en: 'Or send us a message'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Un message direct.',
      en: 'A direct message.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Quelques détails pour qu’on prépare l’appel — réponse sous 24-48h ouvrables.',
      en: 'A few details so we can prepare the call — reply within 24-48 business hours.'
    } satisfies BilingualLax<string>,
    fields: {
      name: {
        label: { fr: 'Nom complet', en: 'Full name' } satisfies BilingualLax<string>,
        placeholder: { fr: 'Votre nom', en: 'Your name' } satisfies BilingualLax<string>
      },
      email: {
        label: { fr: 'Courriel', en: 'Email' } satisfies BilingualLax<string>,
        placeholder: { fr: 'votre@email.com', en: 'your@email.com' } satisfies BilingualLax<string>
      },
      phone: {
        label: {
          fr: 'Téléphone (optionnel)',
          en: 'Phone (optional)'
        } satisfies BilingualLax<string>,
        placeholder: { fr: '+1 514 000 0000', en: '+1 514 000 0000' } satisfies BilingualLax<string>
      },
      revenueRange: {
        label: {
          fr: "Chiffre d'affaires annuel",
          en: 'Annual revenue'
        } satisfies BilingualLax<string>,
        options: [
          { fr: 'Moins de 100K$', en: 'Under $100K' },
          { fr: '100K$ – 250K$', en: '$100K – $250K' },
          { fr: '250K$ – 500K$', en: '$250K – $500K' },
          { fr: '500K$ – 1M$', en: '$500K – $1M' },
          { fr: '1M$+', en: '$1M+' }
        ]
      },
      message: {
        label: {
          fr: 'Votre situation en quelques lignes',
          en: 'Your situation in a few lines'
        } satisfies BilingualLax<string>,
        placeholder: {
          fr: 'Décrivez votre entreprise, votre défi principal, et ce que vous cherchez à construire.',
          en: 'Describe your business, your main challenge, and what you are looking to build.'
        } satisfies BilingualLax<string>
      },
      submit: {
        fr: 'Envoyer le message',
        en: 'Send message'
      }
    },
    consentLabel: {
      fr: "J'accepte que DIOP Stratégies Internationales conserve mes informations pour me recontacter. Consulter notre politique de confidentialité.",
      en: 'I consent to DIOP Stratégies Internationales retaining my information to follow up. See our privacy policy.'
    } satisfies BilingualLax<string>
  },

  calendly: {
    eyebrow: {
      fr: 'Réservation directe',
      en: 'Direct booking'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Choisissez votre créneau.',
      en: 'Choose your time slot.'
    } satisfies BilingualLax<string>,
    fallback: {
      fr: 'La réservation en ligne ouvre prochainement. En attendant, écrivez-nous via le formulaire ou par courriel — créneau confirmé sous 24h ouvrables.',
      en: 'Online booking opens soon. In the meantime, reach us via the form or by email — slot confirmed within 24 business hours.'
    } satisfies BilingualLax<string>
  },

  contactAlternatives: {
    eyebrow: {
      fr: 'Coordonnées directes',
      en: 'Direct contact'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Vous préférez écrire en direct.',
      en: 'You prefer to reach out directly.'
    } satisfies BilingualLax<string>,
    items: [
      {
        type: 'email',
        label: { fr: 'Courriel', en: 'Email' } satisfies BilingualLax<string>,
        value: 'contact@jonasdiop.com'
      },
      {
        type: 'phone',
        label: { fr: 'Téléphone', en: 'Phone' } satisfies BilingualLax<string>,
        value: '+1 438 356 7746'
      },
      {
        type: 'location',
        label: { fr: 'Territoire', en: 'Territory' } satisfies BilingualLax<string>,
        value: {
          fr: 'Montréal & Worldwide',
          en: 'Montréal & Worldwide'
        } satisfies BilingualLax<string>
      }
    ],
    responseTime: {
      fr: 'Réponse habituelle dans les 24-48h ouvrables.',
      en: 'Usual response within 24-48 business hours.'
    } satisfies BilingualLax<string>
  },

  finalCta: {
    eyebrow: {
      fr: 'Première étape',
      en: 'First step'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Réserver l'appel.",
      en: 'Book the call.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: '30 minutes. Gratuit. Sans engagement. On évalue si on peut faire quelque chose ensemble.',
      en: '30 minutes. Free. No commitment. We assess whether we can build something together.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: "Réserver l'appel de qualification",
      en: 'Book the qualification call'
    } satisfies BilingualLax<string>
  }
} as const;
