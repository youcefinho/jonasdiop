import type { BilingualLax } from '@/lib/i18n/types';

/**
 * theEdge.ts — Sous-page /evenements/bootcamps/the-edge (brief v3 §3.6 + PDF Trilogie §The Edge).
 *
 * The Edge™ — bootcamp 3 jours sur l'autorité, la perception et le pricing premium.
 * Méthode RISE™ (Reset · Ignite · Scale · Elevate) — propriétaire bootcamps.
 *
 * Audience cible (verbatim PDF) : entrepreneurs, coachs et consultants qui
 * génèrent entre 5 000$ et 20 000$/mois — mais que le marché ne reconnaît pas
 * encore à leur juste valeur.
 *
 * Mode pré-lancement (CLAUDE.md projet) :
 *   - Prix affichés (1 497$ lancement / 1 997$ régulier — verbatim PDF §11).
 *   - Stripe NON câblé → CTAs branchés "Sois notifié des dates et tarifs
 *     early-bird" via mini-form capture email (EdgeApplicationFormShell §15).
 *   - Témoignages = placeholder honnête "Première édition en cours.
 *     Retours publiés après le bootcamp." (PAS de témoignages inventés).
 *   - Dates cohortes = "Annonce prochaine" (startDateIso UNSET → pas de
 *     countdown rendu).
 *   - VSL = placeholder élégant "Vidéo à venir. Sois notifié → capture email".
 *   - Application form = visuel placeholder (backend GHL pending).
 *
 * Anti-cannibalisation (brief v3 §5) : SUR cette sous-page bootcamp, CTAs
 * "Soumettre mon application" / "Sois notifié" autorisés ; "Prendre rendez-vous"
 * reste hégémonique sur le reste du site.
 *
 * Source de vérité : PDF Trilogie "The Edge" — 17 sections verbatim FR.
 * EN miroir traduit fidèlement.
 */

export const theEdgeCopy = {
  // ─── META ──────────────────────────────────────────────────────────────
  meta: {
    // Canonical SEO title (<=70 char) ; verbatim brand "The Edge™".
    title: {
      fr: 'The Edge™ — Bootcamp autorité perçue · Jonas Diop',
      en: 'The Edge™ — Perceived Authority Bootcamp · Jonas Diop'
    } satisfies BilingualLax<string>,
    // Description : <=160 char, méthode RISE™ + prix + audience cible.
    description: {
      fr: 'Bootcamp 3 jours · méthode RISE™ pour transformer ton autorité perçue et ton pricing. Entrepreneurs, coachs, consultants 5-20K$/mois. 15 places, dès 1 497$.',
      en: '3-day bootcamp · RISE™ method to transform your perceived authority and pricing. Entrepreneurs, coaches, consultants $5-20K/month. 15 spots, from $1,497.'
    } satisfies BilingualLax<string>
  },

  // ─── 1. STICKY BAR ─────────────────────────────────────────────────────
  stickyBar: {
    status: {
      fr: 'Applications ouvertes — 15 places maximum · Processus d’application requis',
      en: 'Applications open — 15 spots maximum · Application process required'
    } satisfies BilingualLax<string>,
    priceLaunch: {
      fr: '1 497$',
      en: '$1,497'
    } satisfies BilingualLax<string>,
    priceRegular: {
      fr: '1 997$',
      en: '$1,997'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Soumettre mon application',
      en: 'Submit my application'
    } satisfies BilingualLax<string>,
    placesLabel: {
      fr: 'Places restantes',
      en: 'Spots remaining'
    } satisfies BilingualLax<string>
  },

  // ─── 2. HERO ───────────────────────────────────────────────────────────
  hero: {
    eyebrow: {
      fr: 'Pour les entrepreneurs, coachs et consultants qui génèrent entre 5 000$ et 20 000$/mois — mais que le marché ne reconnaît pas encore à leur juste valeur.',
      en: 'For entrepreneurs, coaches and consultants generating between $5,000 and $20,000/month — but whom the market does not yet recognize at their true value.'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Tu es meilleur que la plupart de ceux qui facturent le double. Le problème ? Le marché ne le sait pas encore.',
      en: 'You are better than most of those charging double. The problem? The market does not know it yet.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'En 3 jours, The Edge™ transforme radicalement la manière dont ton industrie te perçoit — pour que tu attires des clients premium qui paient sans négocier, sans que tu aies à les chasser.',
      en: 'In 3 days, The Edge™ radically transforms how your industry perceives you — so you attract premium clients who pay without negotiating, without you having to chase them.'
    } satisfies BilingualLax<string>,
    microProof: {
      fr: '15 places max · Application requise · Programme sur l’autorité et l’ingénierie perceptuelle',
      en: '15 spots max · Application required · A program on authority and perception engineering'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Soumettre mon application',
      en: 'Submit my application'
    } satisfies BilingualLax<string>
  },

  // ─── 3. VSL PLACEHOLDER ────────────────────────────────────────────────
  vsl: {
    eyebrow: {
      fr: 'Avant tout',
      en: 'First'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Avant de lire quoi que ce soit — regarde cette vidéo (14 min).',
      en: 'Before reading anything else — watch this video (14 min).'
    } satisfies BilingualLax<string>,
    pendingNote: {
      fr: 'Vidéo à venir. Sois notifié de sa mise en ligne :',
      en: 'Video coming soon. Be notified when it goes live :'
    } satisfies BilingualLax<string>,
    captureLabel: {
      fr: 'Ton email',
      en: 'Your email'
    } satisfies BilingualLax<string>,
    captureCta: {
      fr: 'Sois notifié',
      en: 'Notify me'
    } satisfies BilingualLax<string>,
    captureSuccess: {
      fr: 'Merci — tu seras notifié dès que la vidéo est en ligne.',
      en: 'Thanks — you will be notified as soon as the video goes live.'
    } satisfies BilingualLax<string>
  },

  // ─── 4. TRANSITION POST-VSL ────────────────────────────────────────────
  postVslTransition: {
    fr: 'Si après la vidéo tu te reconnais dans ce qui suit — continue.',
    en: 'If after the video you recognize yourself in what follows — keep reading.'
  } satisfies BilingualLax<string>,

  // ─── 5. MIROIR — 10 cases verbatim PDF §5 ──────────────────────────────
  mirror: {
    eyebrow: {
      fr: 'Le miroir',
      en: 'The mirror'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Est-ce que c’est toi ?',
      en: 'Is this you?'
    } satisfies BilingualLax<string>,
    items: [
      {
        fr: 'Tu génères un revenu réel mais tu es sous-reconnu pour ce que tu vaux',
        en: 'You generate real revenue but you are under-recognized for what you are worth'
      },
      {
        fr: 'Tu regardes des concurrents moins bons que toi facturer le double',
        en: 'You watch competitors who are less good than you charge double'
      },
      {
        fr: 'Tu as une audience mais elle est composée de curieux, pas de clients premium',
        en: 'You have an audience but it is made of curious onlookers, not premium clients'
      },
      {
        fr: 'Tu dois encore justifier ton prix face à chaque prospect',
        en: 'You still have to justify your price with every prospect'
      },
      {
        fr: 'Tu produis du contenu mais il ne te positionne pas comme la référence incontournable',
        en: 'You produce content but it does not position you as the undisputed reference'
      },
      {
        fr: 'Tu n’as pas encore eu de client à 5 000$, 10 000$ ou 20 000$ l’heure',
        en: 'You have not yet had a client at $5,000, $10,000 or $20,000 per hour'
      },
      {
        fr: 'Tu as une présence digitale mais pas d’autorité perçue',
        en: 'You have a digital presence but no perceived authority'
      },
      {
        fr: 'Tu n’as pas de doctrine, pas de manifesto, pas de positionnement asymétrique',
        en: 'You have no doctrine, no manifesto, no asymmetric positioning'
      },
      {
        fr: 'Tu attires des clients B — intéressés mais peu solvables — pas des clients S',
        en: 'You attract B-clients — interested but with limited budgets — not S-clients'
      },
      {
        fr: 'Tu sais que tu vaux plus. Le problème c’est que le marché ne l’a pas encore compris',
        en: 'You know you are worth more. The problem is the market has not understood it yet'
      }
    ] as const satisfies readonly BilingualLax<string>[],
    transition: {
      fr: 'Ce n’est pas un manque de talent. Ce n’est pas un manque de travail. C’est un manque d’architecture perceptuelle. Et ça se construit. En 3 jours.',
      en: 'It is not a lack of talent. It is not a lack of work. It is a lack of perceptual architecture. And it can be built. In 3 days.'
    } satisfies BilingualLax<string>
  },

  // ─── 6. VÉRITÉ QUI DÉRANGE — EFFET VEBLEN ──────────────────────────────
  truth: {
    eyebrow: {
      fr: 'La vérité qui dérange',
      en: 'The uncomfortable truth'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le marché ne récompense pas les plus compétents. Il récompense les mieux perçus.',
      en: 'The market does not reward the most competent. It rewards those best perceived.'
    } satisfies BilingualLax<string>,
    body: {
      fr: 'En 1899, l’économiste Thorstein Veblen a démontré quelque chose que les entrepreneurs d’aujourd’hui oublient encore : plus quelque chose est perçu comme rare, prestigieux et statutaire — plus le marché lui attribue de la valeur. Ce principe gouverne les décisions de tes clients premium. Ils n’achètent pas d’abord une compétence. Ils achètent une perception.',
      en: 'In 1899, economist Thorstein Veblen demonstrated something today’s entrepreneurs still forget : the more something is perceived as rare, prestigious and statutory — the more the market attributes value to it. This principle governs the decisions of your premium clients. They do not first buy a skill. They buy a perception.'
    } satisfies BilingualLax<string>,
    closer: {
      fr: 'La compétence est le prix d’entrée. La perception est ce qui détermine le prix que tu peux demander.',
      en: 'Competence is the price of entry. Perception is what determines the price you can charge.'
    } satisfies BilingualLax<string>
  },

  // ─── 7. SANS ACTION (12 MOIS) — verbatim PDF §7 ────────────────────────
  withoutAction: {
    eyebrow: {
      fr: 'Sans action',
      en: 'Without action'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Dans 12 mois, sans architecture perceptuelle...',
      en: 'In 12 months, without perceptual architecture...'
    } satisfies BilingualLax<string>,
    items: [
      {
        fr: 'Tu factureras toujours dans la même fourchette, à 10-15% près.',
        en: 'You will still bill in the same range, give or take 10-15%.'
      },
      {
        fr: 'Tu regarderas un concurrent moins compétent passer devant toi sur LinkedIn.',
        en: 'You will watch a less competent competitor pass you on LinkedIn.'
      },
      {
        fr: 'Tu auras encore cette conversation : « ton tarif est élevé... »',
        en: 'You will have that conversation again : "your rate is high..."'
      },
      {
        fr: 'Tu continueras de chasser des prospects au lieu d’être chassé.',
        en: 'You will keep chasing prospects instead of being chased.'
      },
      {
        fr: 'Tu sentiras ce plafond grandir. Plus la compétence augmente, plus l’écart de reconnaissance fait mal.',
        en: 'You will feel that ceiling grow. The more competence increases, the more the recognition gap hurts.'
      }
    ] as const satisfies readonly BilingualLax<string>[],
    closer: {
      fr: 'Ce n’est pas une projection pessimiste. C’est ce qui se passe quand on confond travail et trajectoire.',
      en: 'This is not a pessimistic projection. It is what happens when one confuses work with trajectory.'
    } satisfies BilingualLax<string>
  },

  // ─── 8. SOLUTION — 3 JOURS J1/J2/J3 ────────────────────────────────────
  solution: {
    eyebrow: {
      fr: 'La solution',
      en: 'The solution'
    } satisfies BilingualLax<string>,
    title: {
      fr: '3 jours pour réécrire la manière dont ton marché te perçoit.',
      en: '3 days to rewrite the way your market perceives you.'
    } satisfies BilingualLax<string>,
    days: [
      {
        id: 'j1',
        label: { fr: 'Jour 1', en: 'Day 1' } satisfies BilingualLax<string>,
        title: {
          fr: 'Perception & Status',
          en: 'Perception & Status'
        } satisfies BilingualLax<string>,
        quote: {
          fr: 'Le marché ne récompense pas les meilleurs. Il récompense ceux qui sont perçus comme tels.',
          en: 'The market does not reward the best. It rewards those who are perceived as such.'
        } satisfies BilingualLax<string>,
        modules: [
          {
            fr: 'Psychology of Authority',
            en: 'Psychology of Authority'
          },
          {
            fr: 'Veblen Effect & Prestige Positioning',
            en: 'Veblen Effect & Prestige Positioning'
          },
          {
            fr: 'Identity & Power Positioning',
            en: 'Identity & Power Positioning'
          },
          {
            fr: 'Storytelling & Authority Narrative',
            en: 'Storytelling & Authority Narrative'
          }
        ] as const satisfies readonly BilingualLax<string>[],
        deliverables: [
          {
            fr: 'Authority Perception Audit™',
            en: 'Authority Perception Audit™'
          },
          {
            fr: 'Prestige Positioning Framework™',
            en: 'Prestige Positioning Framework™'
          },
          {
            fr: 'Dominant Positioning Statement™',
            en: 'Dominant Positioning Statement™'
          },
          {
            fr: 'Founder Authority Story™',
            en: 'Founder Authority Story™'
          }
        ] as const satisfies readonly BilingualLax<string>[]
      },
      {
        id: 'j2',
        label: { fr: 'Jour 2', en: 'Day 2' } satisfies BilingualLax<string>,
        title: {
          fr: 'Omniprésence & Réputation',
          en: 'Omnipresence & Reputation'
        } satisfies BilingualLax<string>,
        quote: {
          fr: 'Tu n’as pas besoin d’être partout. Tu as besoin d’être perçu comme incontournable.',
          en: 'You do not need to be everywhere. You need to be perceived as unavoidable.'
        } satisfies BilingualLax<string>,
        modules: [
          {
            fr: 'Omnipresence Engineering',
            en: 'Omnipresence Engineering'
          },
          {
            fr: 'Authority Content & Thought Leadership',
            en: 'Authority Content & Thought Leadership'
          },
          {
            fr: 'Reputation Engineering',
            en: 'Reputation Engineering'
          },
          {
            fr: 'Authority Assets',
            en: 'Authority Assets'
          }
        ] as const satisfies readonly BilingualLax<string>[],
        deliverables: [
          {
            fr: 'Omnipresence Blueprint™',
            en: 'Omnipresence Blueprint™'
          },
          {
            fr: 'Thought Leadership Matrix™',
            en: 'Thought Leadership Matrix™'
          },
          {
            fr: 'Reputation Domination Plan™',
            en: 'Reputation Domination Plan™'
          },
          {
            fr: 'Authority Asset Stack™',
            en: 'Authority Asset Stack™'
          }
        ] as const satisfies readonly BilingualLax<string>[]
      },
      {
        id: 'j3',
        label: { fr: 'Jour 3', en: 'Day 3' } satisfies BilingualLax<string>,
        title: {
          fr: 'Monétisation & Élévation',
          en: 'Monetization & Elevation'
        } satisfies BilingualLax<string>,
        quote: {
          fr: 'L’autorité sans monétisation est un hobby.',
          en: 'Authority without monetization is a hobby.'
        } satisfies BilingualLax<string>,
        modules: [
          {
            fr: 'Premium Offers & Proximity Value',
            en: 'Premium Offers & Proximity Value'
          },
          {
            fr: 'Influence, Communication & Presence',
            en: 'Influence, Communication & Presence'
          },
          {
            fr: 'The Authority Ecosystem',
            en: 'The Authority Ecosystem'
          },
          {
            fr: 'The Edge Expansion Plan',
            en: 'The Edge Expansion Plan'
          }
        ] as const satisfies readonly BilingualLax<string>[],
        deliverables: [
          {
            fr: 'Proximity Monetization Model™',
            en: 'Proximity Monetization Model™'
          },
          {
            fr: 'Epic Speech™',
            en: 'Epic Speech™'
          },
          {
            fr: 'Authority Ecosystem Blueprint™',
            en: 'Authority Ecosystem Blueprint™'
          },
          {
            fr: 'The Edge Expansion Plan™',
            en: 'The Edge Expansion Plan™'
          }
        ] as const satisfies readonly BilingualLax<string>[]
      }
    ] as const,
    modulesLabel: {
      fr: 'Modules',
      en: 'Modules'
    } satisfies BilingualLax<string>,
    deliverablesLabel: {
      fr: 'Tu construis',
      en: 'You build'
    } satisfies BilingualLax<string>
  },

  // ─── 9. LES 10 LIVRABLES — verbatim PDF §9 ─────────────────────────────
  deliverables: {
    eyebrow: {
      fr: 'Ce que tu repars avec',
      en: 'What you walk out with'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Les 10 livrables.',
      en: 'The 10 deliverables.'
    } satisfies BilingualLax<string>,
    subtitle: {
      fr: 'Pas de slides à relire. 10 livrables exécutables, construits avec Jonas pendant les 3 jours.',
      en: 'No slides to re-read. 10 executable deliverables, built with Jonas during the 3 days.'
    } satisfies BilingualLax<string>,
    columnNumberLabel: { fr: '#', en: '#' } satisfies BilingualLax<string>,
    columnNameLabel: {
      fr: 'Livrable',
      en: 'Deliverable'
    } satisfies BilingualLax<string>,
    columnDescriptionLabel: {
      fr: 'Description',
      en: 'Description'
    } satisfies BilingualLax<string>,
    items: [
      {
        n: 1,
        name: {
          fr: 'Authority Perception Audit™',
          en: 'Authority Perception Audit™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Cartographie précise de comment ton marché te perçoit aujourd’hui vs. comment tu mérites d’être perçu.',
          en: 'Precise mapping of how your market perceives you today vs. how you deserve to be perceived.'
        } satisfies BilingualLax<string>
      },
      {
        n: 2,
        name: {
          fr: 'Prestige Positioning Framework™',
          en: 'Prestige Positioning Framework™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Architecture complète de ton positionnement asymétrique — pourquoi tu es la seule option logique pour ton client cible.',
          en: 'Complete architecture of your asymmetric positioning — why you are the only logical option for your target client.'
        } satisfies BilingualLax<string>
      },
      {
        n: 3,
        name: {
          fr: 'Dominant Positioning Statement™',
          en: 'Dominant Positioning Statement™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Phrase signature qui définit ton territoire intellectuel et rend la comparaison impossible.',
          en: 'Signature sentence that defines your intellectual territory and makes comparison impossible.'
        } satisfies BilingualLax<string>
      },
      {
        n: 4,
        name: {
          fr: 'Founder Authority Story™',
          en: 'Founder Authority Story™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Narrative origine + transformation qui justifie ton autorité et désamorce les objections de prix avant qu’elles n’arrivent.',
          en: 'Origin + transformation narrative that justifies your authority and defuses price objections before they arise.'
        } satisfies BilingualLax<string>
      },
      {
        n: 5,
        name: {
          fr: 'Omnipresence Blueprint™',
          en: 'Omnipresence Blueprint™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Plan opérationnel pour être perçu comme incontournable sans être partout — concentration stratégique des canaux.',
          en: 'Operational plan to be perceived as unavoidable without being everywhere — strategic channel concentration.'
        } satisfies BilingualLax<string>
      },
      {
        n: 6,
        name: {
          fr: 'Thought Leadership Matrix™',
          en: 'Thought Leadership Matrix™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Système de production de contenu d’autorité — 4 piliers de contenu qui te positionnent comme la voix de référence.',
          en: 'Authority content production system — 4 content pillars that position you as the reference voice.'
        } satisfies BilingualLax<string>
      },
      {
        n: 7,
        name: {
          fr: 'Reputation Domination Plan™',
          en: 'Reputation Domination Plan™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Stratégie 90 jours pour faire travailler ta réputation pour toi — PR, citations, signaux sociaux orchestrés.',
          en: '90-day strategy to make your reputation work for you — PR, citations, orchestrated social signals.'
        } satisfies BilingualLax<string>
      },
      {
        n: 8,
        name: {
          fr: 'Authority Asset Stack™',
          en: 'Authority Asset Stack™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Inventaire et plan de construction des actifs perceptuels (livre, podcast, manifesto, masterclass) qui composent ton statut.',
          en: 'Inventory and construction plan for the perceptual assets (book, podcast, manifesto, masterclass) that compose your status.'
        } satisfies BilingualLax<string>
      },
      {
        n: 9,
        name: {
          fr: 'Proximity Monetization Model™',
          en: 'Proximity Monetization Model™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Architecture d’offres premium basée sur la rareté de l’accès — comment vendre 5K$, 15K$, 50K$ sans friction.',
          en: 'Premium offer architecture based on access scarcity — how to sell $5K, $15K, $50K without friction.'
        } satisfies BilingualLax<string>
      },
      {
        n: 10,
        name: {
          fr: 'The Edge Expansion Plan™',
          en: 'The Edge Expansion Plan™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Roadmap personnelle 12 mois pour transformer la nouvelle architecture perceptuelle en revenu, autorité et accès exponentiels.',
          en: 'Personal 12-month roadmap to transform the new perceptual architecture into exponential revenue, authority and access.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 10. BONUS — verbatim PDF §10 ──────────────────────────────────────
  bonus: {
    headline: {
      fr: 'Bonus inclus.',
      en: 'Included bonuses.'
    } satisfies BilingualLax<string>,
    valueLabel: {
      fr: 'Valeur',
      en: 'Value'
    } satisfies BilingualLax<string>,
    items: [
      {
        name: {
          fr: 'Communauté privée The Edge™ — 30 jours',
          en: 'The Edge™ private community — 30 days'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Accès direct aux autres participants + Jonas pendant 30 jours post-bootcamp. Q&A en live, partage de livrables, accountability.',
          en: 'Direct access to other participants + Jonas for 30 days post-bootcamp. Live Q&A, deliverable sharing, accountability.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '497$',
          en: '$497'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Template Authority Stack™ Notion',
          en: 'Authority Stack™ Notion template'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Tableau Notion clé-en-main pour cartographier, prioriser et exécuter la construction de tes actifs perceptuels.',
          en: 'Turn-key Notion board to map, prioritize and execute the construction of your perceptual assets.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '297$',
          en: '$297'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Bibliothèque Signature Concepts™ — 30 exemples',
          en: 'Signature Concepts™ library — 30 examples'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Collection de 30 positionnements signature analysés (Dan Martell, Alex Hormozi, Naval, etc.) — décomposés pour t’inspirer ton propre territoire.',
          en: 'Collection of 30 signature positionings analyzed (Dan Martell, Alex Hormozi, Naval, etc.) — broken down to inspire your own territory.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Enregistrements complets bootcamp — 90 jours',
          en: 'Full bootcamp recordings — 90 days'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Replay vidéo intégral des 3 jours pour réécouter les modules clés et partager avec ton équipe pendant 90 jours.',
          en: 'Full video replay of the 3 days to re-watch key modules and share with your team for 90 days.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '497$',
          en: '$497'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Session de positionnement J+7',
          en: 'Positioning session D+7'
        } satisfies BilingualLax<string>,
        description: {
          fr: '45 min en 1-à-1 avec un membre de l’équipe Jonas, 7 jours après le bootcamp, pour valider et affiner ton Dominant Positioning Statement™.',
          en: '45 min 1-on-1 with a member of Jonas’ team, 7 days after the bootcamp, to validate and refine your Dominant Positioning Statement™.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '297$',
          en: '$297'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Guide PR & Médias',
          en: 'PR & Media Guide'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Playbook pour décrocher tes 3 premières citations / interviews médias dans les 90 jours — scripts pitch + liste qualifiée.',
          en: 'Playbook to land your first 3 media citations / interviews within 90 days — pitch scripts + qualified list.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 11. VALEUR & PRIX — verbatim PDF §11 ──────────────────────────────
  valuePrice: {
    eyebrow: {
      fr: 'Investissement',
      en: 'Investment'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Récap valeur — et pourquoi ce prix.',
      en: 'Value recap — and why this price.'
    } satisfies BilingualLax<string>,
    valueRows: [
      {
        label: {
          fr: '3 jours immersifs avec Jonas',
          en: '3 immersive days with Jonas'
        } satisfies BilingualLax<string>,
        value: { fr: '3 997$', en: '$3,997' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Communauté privée 30 jours',
          en: 'Private community 30 days'
        } satisfies BilingualLax<string>,
        value: { fr: '497$', en: '$497' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Template Authority Stack™ Notion',
          en: 'Authority Stack™ Notion template'
        } satisfies BilingualLax<string>,
        value: { fr: '297$', en: '$297' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Bibliothèque Signature Concepts™',
          en: 'Signature Concepts™ library'
        } satisfies BilingualLax<string>,
        value: { fr: '197$', en: '$197' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Enregistrements complets 90 jours',
          en: 'Full recordings 90 days'
        } satisfies BilingualLax<string>,
        value: { fr: '497$', en: '$497' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Session positionnement J+7',
          en: 'Positioning session D+7'
        } satisfies BilingualLax<string>,
        value: { fr: '297$', en: '$297' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Guide PR & Médias',
          en: 'PR & Media Guide'
        } satisfies BilingualLax<string>,
        value: { fr: '197$', en: '$197' } satisfies BilingualLax<string>
      }
    ] as const,
    valueTotal: {
      fr: '5 982$',
      en: '$5,982'
    } satisfies BilingualLax<string>,
    valueTotalLabel: {
      fr: 'Valeur totale',
      en: 'Total value'
    } satisfies BilingualLax<string>,
    priceLaunch: {
      fr: '1 497$',
      en: '$1,497'
    } satisfies BilingualLax<string>,
    priceLaunchLabel: {
      fr: 'Prix lancement',
      en: 'Launch price'
    } satisfies BilingualLax<string>,
    priceRegular: {
      fr: '1 997$',
      en: '$1,997'
    } satisfies BilingualLax<string>,
    priceRegularLabel: {
      fr: 'Prix régulier',
      en: 'Regular price'
    } satisfies BilingualLax<string>,
    importantNote: {
      fr: 'Parce que The Edge™ enseigne que le pricing EST un signal de statut. Un programme sur le prestige vendu à prix bas envoie exactement le mauvais message. Le prix doit incarner la transformation qu’il promet.',
      en: 'Because The Edge™ teaches that pricing IS a status signal. A program on prestige sold at a low price sends exactly the wrong message. The price must embody the transformation it promises.'
    } satisfies BilingualLax<string>,
    paymentOptions: [
      {
        fr: 'Paiement comptant — 1 997$ CAD (prix régulier)',
        en: 'Full payment — $1,997 CAD (regular price)'
      },
      {
        fr: '2 versements de 1 099$ CAD (sans frais)',
        en: '2 payments of $1,099 CAD (no fees)'
      },
      {
        fr: 'Option VIP — 2 997$ CAD : +1h session 1-à-1 avec Jonas + révision personnelle de ton Dominant Positioning Statement™',
        en: 'VIP option — $2,997 CAD : +1h 1-on-1 session with Jonas + personal review of your Dominant Positioning Statement™'
      }
    ] as const satisfies readonly BilingualLax<string>[],
    ctaPrimaryLabel: {
      fr: 'Sois notifié des dates et tarifs early-bird',
      en: 'Be notified of dates and early-bird pricing'
    } satisfies BilingualLax<string>,
    ctaSecondaryLabel: {
      fr: 'Soumettre mon application',
      en: 'Submit my application'
    } satisfies BilingualLax<string>,
    preLaunchNote: {
      fr: 'Inscriptions à venir — Sois notifié des dates et tarifs early-bird en priorité.',
      en: 'Registrations coming soon — Be notified of dates and early-bird pricing first.'
    } satisfies BilingualLax<string>
  },

  // ─── 12. PREUVE & CRÉDIBILITÉ JONAS ────────────────────────────────────
  proof: {
    eyebrow: {
      fr: 'Pourquoi Jonas',
      en: 'Why Jonas'
    } satisfies BilingualLax<string>,
    title: {
      fr: "L'architecte qui enseigne ce qu'il a construit.",
      en: 'The architect who teaches what he has built.'
    } satisfies BilingualLax<string>,
    stats: [
      {
        value: { fr: '15+', en: '15+' } satisfies BilingualLax<string>,
        label: {
          fr: "ans d'expérience",
          en: 'years of experience'
        } satisfies BilingualLax<string>
      },
      {
        value: { fr: '857', en: '857' } satisfies BilingualLax<string>,
        label: {
          fr: 'entrepreneurs accompagnés',
          en: 'entrepreneurs supported'
        } satisfies BilingualLax<string>
      },
      {
        value: { fr: '31M$', en: '$31M' } satisfies BilingualLax<string>,
        label: {
          fr: 'générés par nos clients',
          en: 'generated by our clients'
        } satisfies BilingualLax<string>
      }
    ] as const,
    credentials: [
      {
        fr: 'Architecte d’affaires & scaling stratégique',
        en: 'Business architect & strategic scaling'
      },
      {
        fr: 'Game Changer Protocol™ (méthode brand chapeau)',
        en: 'Game Changer Protocol™ (umbrella brand method)'
      },
      {
        fr: 'CDT™ — Compression Dynamique du Temps (déposé OPIC)',
        en: 'CDT™ — Compression Dynamique du Temps (filed with OPIC)'
      },
      {
        fr: 'Fondateur Gamechanger Scaling',
        en: 'Founder of Gamechanger Scaling'
      },
      {
        fr: 'Hôte du podcast The Game Changer',
        en: 'Host of The Game Changer podcast'
      },
      {
        fr: 'Méthode RISE™ (Reset · Ignite · Scale · Elevate) — propriétaire bootcamps Trilogie',
        en: 'RISE™ method (Reset · Ignite · Scale · Elevate) — proprietary to the Trilogy bootcamps'
      }
    ] as const satisfies readonly BilingualLax<string>[],
    quote: {
      fr: 'The Edge™ n’est pas un programme sur comment paraître. C’est un programme sur comment construire une architecture perceptuelle réelle — qui attire les clients que tu mérites, qui te permet de facturer ce que tu vaux, et qui fait travailler ta réputation pour toi pendant que tu dors.',
      en: 'The Edge™ is not a program on how to appear. It is a program on how to build a real perceptual architecture — that attracts the clients you deserve, that lets you charge what you are worth, and that makes your reputation work for you while you sleep.'
    } satisfies BilingualLax<string>,
    quoteAuthor: {
      fr: 'Jonas Diop',
      en: 'Jonas Diop'
    } satisfies BilingualLax<string>
  },

  // ─── 13. OBJECTIONS — verbatim PDF §13 ─────────────────────────────────
  objections: {
    eyebrow: {
      fr: 'Tu hésites ?',
      en: 'Hesitating?'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Les 5 objections qu’on entend — et les vraies réponses.',
      en: 'The 5 objections we hear — and the real answers.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'obj-1',
        q: {
          fr: '« 1 497$ c’est cher pour 3 jours. »',
          en: '"$1,497 is expensive for 3 days."'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Si tu factures 5 000$/mois aujourd’hui et que The Edge™ te permet de passer à 10 000$/mois en 90 jours, le programme s’auto-finance en moins d’un mois. Le prix de The Edge™ n’est pas un coût — c’est un signal de statut, ce que le programme enseigne lui-même.',
          en: 'If you charge $5,000/month today and The Edge™ lets you move to $10,000/month in 90 days, the program self-finances in less than a month. The price of The Edge™ is not a cost — it is a status signal, which is what the program itself teaches.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'obj-2',
        q: {
          fr: '« Je n’ai pas le temps de prendre 3 jours. »',
          en: '"I don’t have time to take 3 days off."'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Tu n’as pas le temps de continuer à perdre 50% de la valeur que tu génères parce que ton positionnement n’est pas le bon. 3 jours bien investis valent 12 mois d’itérations seul.',
          en: 'You don’t have time to keep losing 50% of the value you generate because your positioning is wrong. 3 days well invested is worth 12 months of solo iteration.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'obj-3',
        q: {
          fr: '« Je peux apprendre ça sur YouTube ou via un livre. »',
          en: '"I can learn this on YouTube or from a book."'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Tu peux apprendre les concepts. Tu ne peux pas construire ton Dominant Positioning Statement™ ni ton Authority Asset Stack™ tout seul devant un écran. The Edge™ n’enseigne pas — il construit avec toi, en temps réel, avec feedback direct de Jonas.',
          en: 'You can learn the concepts. You cannot build your Dominant Positioning Statement™ or your Authority Asset Stack™ alone in front of a screen. The Edge™ does not teach — it builds with you, in real time, with direct feedback from Jonas.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'obj-4',
        q: {
          fr: '« Je ne suis pas sûr que ce soit pour moi. »',
          en: '"I’m not sure this is for me."'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'C’est exactement pour ça que l’application existe. Le processus d’application n’est pas un mur — c’est un filtre honnête. Si ce n’est pas pour toi, Jonas te le dira en 48h. Et si c’est pour toi, tu le sauras avec certitude avant de payer un dollar.',
          en: 'That is exactly why the application exists. The application process is not a wall — it is an honest filter. If it is not for you, Jonas will tell you in 48h. And if it is for you, you will know for sure before paying a dollar.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'obj-5',
        q: {
          fr: '« Et si ça ne marche pas pour moi ? »',
          en: '"What if it doesn’t work for me?"'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Garantie 100% — si à la fin du Jour 1 tu n’as pas le sentiment que The Edge™ est en train de transformer ta perception du marché, tu repars avec un remboursement intégral. Pas de questions, pas de friction. Le risque est de notre côté.',
          en: 'Full 100% guarantee — if by the end of Day 1 you don’t feel The Edge™ is transforming your perception of the market, you walk out with a full refund. No questions, no friction. The risk is on our side.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 14. GARANTIE 100% — verbatim PDF §14 ──────────────────────────────
  guarantee: {
    eyebrow: {
      fr: 'Garantie 100%',
      en: '100% Guarantee'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Le risque est de notre côté.',
      en: 'The risk is on our side.'
    } satisfies BilingualLax<string>,
    body: {
      fr: 'Si à la fin du Jour 1 tu n’as pas le sentiment d’avoir reçu plus que la valeur de ton investissement — tu lèves la main, tu repars, et tu es remboursé intégralement. Pas de paperasse, pas de friction, pas de questions. Jonas refuse de garder l’argent d’un participant qui ne ressent pas la transformation. Cette garantie existe parce que The Edge™ tient ce qu’il promet — sinon il ne serait pas vendu à ce prix.',
      en: 'If by the end of Day 1 you do not feel you have received more than the value of your investment — you raise your hand, walk out, and get a full refund. No paperwork, no friction, no questions. Jonas refuses to keep money from a participant who does not feel the transformation. This guarantee exists because The Edge™ delivers what it promises — otherwise it would not be sold at this price.'
    } satisfies BilingualLax<string>
  },

  // ─── 15. PROCESSUS D'APPLICATION & RARETÉ ─────────────────────────────
  application: {
    eyebrow: {
      fr: 'Processus d’application',
      en: 'Application process'
    } satisfies BilingualLax<string>,
    headline: {
      fr: '15 places maximum. Processus d’application requis.',
      en: '15 spots maximum. Application process required.'
    } satisfies BilingualLax<string>,
    why: {
      fr: 'The Edge™ enseigne la rareté stratégique. La sélectivité comme signal de valeur. L’accès comme privilège. Un programme qui enseigne ça et qui ouvre ses portes à tout le monde sans filtre se contredit lui-même. Jonas refuse cette contradiction.',
      en: 'The Edge™ teaches strategic scarcity. Selectivity as a signal of value. Access as a privilege. A program that teaches this and opens its doors to everyone without filter contradicts itself. Jonas refuses this contradiction.'
    } satisfies BilingualLax<string>,
    steps: [
      {
        n: 1,
        title: {
          fr: 'Soumets ton application (5 min)',
          en: 'Submit your application (5 min)'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Tu remplis le formulaire ci-dessous — 4 questions courtes sur ton contexte, ton revenu actuel, ce que tu veux changer, et pourquoi maintenant.',
          en: 'You fill out the form below — 4 short questions on your context, current revenue, what you want to change, and why now.'
        } satisfies BilingualLax<string>
      },
      {
        n: 2,
        title: {
          fr: 'Examen sous 48h',
          en: 'Review within 48h'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Jonas (ou un membre senior de son équipe) lit personnellement chaque application. Aucun bot, aucun automatisme. Délai de réponse maximum : 48h ouvrables.',
          en: 'Jonas (or a senior member of his team) personally reads every application. No bot, no automation. Maximum response time : 48 business hours.'
        } satisfies BilingualLax<string>
      },
      {
        n: 3,
        title: {
          fr: 'Réponse honnête (oui ou non)',
          en: 'Honest answer (yes or no)'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Si The Edge™ est le bon programme pour toi maintenant — tu reçois une invitation et l’accès au paiement. Si ce n’est pas le moment ou pas le bon fit — tu reçois une explication honnête et, si pertinent, une recommandation alternative.',
          en: 'If The Edge™ is the right program for you now — you receive an invitation and access to payment. If it is not the right moment or fit — you receive an honest explanation and, when relevant, an alternative recommendation.'
        } satisfies BilingualLax<string>
      },
      {
        n: 4,
        title: {
          fr: 'Confirmation place + paiement sécurisé',
          en: 'Spot confirmation + secure payment'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Une fois ton paiement reçu, ta place est garantie. Tu reçois immédiatement l’accès à la communauté privée + le document de préparation amont.',
          en: 'Once your payment is received, your spot is guaranteed. You immediately receive access to the private community + the pre-bootcamp preparation document.'
        } satisfies BilingualLax<string>
      }
    ] as const,
    earlyAccess: {
      fr: 'Les 3 premiers participants acceptés reçoivent une session de pré-positionnement de 45 min avec Jonas — pour que The Edge™ commence avant même que le bootcamp commence.',
      en: 'The first 3 accepted participants receive a 45-min pre-positioning session with Jonas — so The Edge™ starts before the bootcamp even begins.'
    } satisfies BilingualLax<string>,
    // ── Form labels (passed to <EdgeApplicationFormShell />)
    form: {
      eyebrow: {
        fr: 'Application',
        en: 'Application'
      } satisfies BilingualLax<string>,
      headline: {
        fr: 'Soumettre mon application.',
        en: 'Submit my application.'
      } satisfies BilingualLax<string>,
      subtitle: {
        fr: '5 minutes. 4 questions honnêtes. Réponse personnelle de Jonas sous 48h.',
        en: '5 minutes. 4 honest questions. Personal answer from Jonas within 48h.'
      } satisfies BilingualLax<string>,
      banner: {
        fr: 'Application examinée sous 48h après activation. Le formulaire ci-dessous est visuel — soumets ton email dans la mini-form en bas pour être notifié dès l’ouverture officielle.',
        en: 'Application reviewed within 48h after activation. The form below is visual — submit your email in the mini-form at the bottom to be notified as soon as it opens officially.'
      } satisfies BilingualLax<string>,
      revenueBuckets: [
        {
          value: 'r0-5k',
          label: {
            fr: 'Moins de 5 000$/mois',
            en: 'Less than $5,000/month'
          } satisfies BilingualLax<string>
        },
        {
          value: 'r5-10k',
          label: {
            fr: '5 000$ – 10 000$/mois',
            en: '$5,000 – $10,000/month'
          } satisfies BilingualLax<string>
        },
        {
          value: 'r10-20k',
          label: {
            fr: '10 000$ – 20 000$/mois',
            en: '$10,000 – $20,000/month'
          } satisfies BilingualLax<string>
        },
        {
          value: 'r20-50k',
          label: {
            fr: '20 000$ – 50 000$/mois',
            en: '$20,000 – $50,000/month'
          } satisfies BilingualLax<string>
        },
        {
          value: 'r50k+',
          label: {
            fr: 'Plus de 50 000$/mois',
            en: 'More than $50,000/month'
          } satisfies BilingualLax<string>
        }
      ] as const,
      labels: {
        activity: {
          fr: 'En 2 phrases : que fais-tu et pour qui ?',
          en: 'In 2 sentences : what do you do and for whom?'
        } satisfies BilingualLax<string>,
        activityPlaceholder: {
          fr: 'Ex. Je suis coach exécutif pour des fondateurs SaaS en post-série A...',
          en: 'Ex. I am an executive coach for post-Series A SaaS founders...'
        } satisfies BilingualLax<string>,
        revenue: {
          fr: 'Quel est ton revenu mensuel actuel ?',
          en: 'What is your current monthly revenue?'
        } satisfies BilingualLax<string>,
        revenuePlaceholder: {
          fr: 'Sélectionne une fourchette',
          en: 'Select a range'
        } satisfies BilingualLax<string>,
        change: {
          fr: 'Qu’est-ce que tu veux changer dans les 90 jours après The Edge™ ?',
          en: 'What do you want to change in the 90 days after The Edge™?'
        } satisfies BilingualLax<string>,
        changePlaceholder: {
          fr: 'Sois précis. "Plus de clients" ne suffit pas.',
          en: 'Be specific. "More clients" is not enough.'
        } satisfies BilingualLax<string>,
        why: {
          fr: 'Pourquoi maintenant ? Qu’est-ce qui a déclenché ta candidature ?',
          en: 'Why now? What triggered your application?'
        } satisfies BilingualLax<string>,
        whyPlaceholder: {
          fr: 'Le timing compte autant que le contenu de ta réponse.',
          en: 'Timing matters as much as the content of your answer.'
        } satisfies BilingualLax<string>,
        name: {
          fr: 'Ton nom complet',
          en: 'Your full name'
        } satisfies BilingualLax<string>,
        namePlaceholder: {
          fr: 'Prénom Nom',
          en: 'First Last'
        } satisfies BilingualLax<string>,
        email: {
          fr: 'Ton email',
          en: 'Your email'
        } satisfies BilingualLax<string>,
        emailPlaceholder: {
          fr: 'toi@entreprise.com',
          en: 'you@company.com'
        } satisfies BilingualLax<string>,
        phone: {
          fr: 'Ton téléphone (optionnel)',
          en: 'Your phone (optional)'
        } satisfies BilingualLax<string>,
        phonePlaceholder: {
          fr: '+1 514 555 0123',
          en: '+1 514 555 0123'
        } satisfies BilingualLax<string>,
        submit: {
          fr: 'Soumission désactivée — Sois notifié de l’activation via la mini-form ci-dessous',
          en: 'Submission disabled — Be notified of activation via the mini-form below'
        } satisfies BilingualLax<string>,
        notifyEmail: {
          fr: 'Sois notifié de l’ouverture des applications',
          en: 'Be notified when applications open'
        } satisfies BilingualLax<string>,
        notifyEmailPlaceholder: {
          fr: 'toi@entreprise.com',
          en: 'you@company.com'
        } satisfies BilingualLax<string>,
        notifySubmit: {
          fr: 'Sois notifié',
          en: 'Notify me'
        } satisfies BilingualLax<string>,
        notifySuccess: {
          fr: 'Merci. Tu seras parmi les premiers notifiés dès l’ouverture officielle des applications.',
          en: 'Thanks. You will be among the first notified as soon as applications officially open.'
        } satisfies BilingualLax<string>,
        required: {
          fr: 'Requis',
          en: 'Required'
        } satisfies BilingualLax<string>
      }
    }
  },

  // ─── 16. FAQ — verbatim PDF §16 ────────────────────────────────────────
  faq: {
    eyebrow: {
      fr: 'Questions fréquentes',
      en: 'Frequently asked'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce que les candidats nous demandent.',
      en: 'What applicants ask us.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'faq-1',
        q: {
          fr: 'À quel niveau de business The Edge™ s’adresse-t-il ?',
          en: 'What business level is The Edge™ for?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'The Edge™ s’adresse aux entrepreneurs, coachs et consultants qui génèrent entre 5 000$ et 20 000$/mois. En dessous, le travail de fond manque pour qu’une architecture perceptuelle premium ait du sens. Au-dessus, tu auras besoin de The Activation™ — plus stratégique sur le scaling identitaire.',
          en: 'The Edge™ is for entrepreneurs, coaches and consultants generating between $5,000 and $20,000/month. Below that, the foundational work is missing for a premium perceptual architecture to make sense. Above, you will need The Activation™ — more strategic on identity scaling.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'faq-2',
        q: {
          fr: 'Quelle est la différence entre The Edge™ et un programme de marketing classique ?',
          en: 'What is the difference between The Edge™ and a classic marketing program?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Le marketing classique optimise tes funnels, tes ads, ta conversion. The Edge™ ne touche pas à tes funnels — il refait la perception que ton marché a de toi. Résultat : tes funnels existants se mettent à convertir 2-3x mieux parce que la perception en amont a changé.',
          en: 'Classic marketing optimizes your funnels, your ads, your conversion. The Edge™ does not touch your funnels — it rebuilds the perception your market has of you. Result : your existing funnels start converting 2-3x better because the upstream perception has changed.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'faq-3',
        q: {
          fr: 'Faut-il déjà avoir une audience pour rentabiliser The Edge™ ?',
          en: 'Do you need an existing audience to benefit from The Edge™?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Non. The Edge™ enseigne précisément à construire une audience d’autorité, pas une audience de curieux. Beaucoup de participants arrivent avec une petite audience tiède et repartent avec un Authority Asset Stack™ qui leur permet de la transformer en 90 jours.',
          en: 'No. The Edge™ specifically teaches how to build an authority audience, not a curious one. Many participants arrive with a small lukewarm audience and leave with an Authority Asset Stack™ that lets them transform it in 90 days.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'faq-4',
        q: {
          fr: 'Le programme est-il en présentiel ou en ligne ?',
          en: 'Is the program in-person or online?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'The Edge™ est 100% en présentiel — c’est non-négociable. L’architecture perceptuelle se construit dans la friction directe, les sessions de feedback en cercle, et l’énergie d’un groupe de 15 personnes triées. Ce n’est pas reproductible sur Zoom.',
          en: 'The Edge™ is 100% in-person — non-negotiable. Perceptual architecture is built in direct friction, circle feedback sessions, and the energy of a hand-picked group of 15. It is not reproducible on Zoom.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'faq-5',
        q: {
          fr: 'Que se passe-t-il si mon application est refusée ?',
          en: 'What happens if my application is rejected?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Tu reçois une explication honnête (pas un email type). Si une autre offre Jonas — appel stratégique, autre bootcamp Trilogie, ressource gratuite — est mieux adaptée à ton moment, on te le dit. Le refus n’est jamais définitif : tu peux re-candidater à une prochaine cohorte si ta situation évolue.',
          en: 'You receive an honest explanation (not a template email). If another Jonas offer — strategy call, other Trilogy bootcamp, free resource — fits your moment better, we tell you. Rejection is never permanent : you can reapply for a future cohort if your situation evolves.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'faq-6',
        q: {
          fr: 'Y a-t-il un accompagnement après le bootcamp ?',
          en: 'Is there support after the bootcamp?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Oui — 30 jours de communauté privée + une session de positionnement J+7 avec un membre senior de l’équipe pour valider ton Dominant Positioning Statement™. Pour un accompagnement long terme, certains participants The Edge™ rejoignent ensuite Gamechanger Scaling — programme 6 mois 1-à-1 avec Jonas.',
          en: 'Yes — 30 days of private community + a D+7 positioning session with a senior team member to validate your Dominant Positioning Statement™. For long-term support, some The Edge™ participants then join Gamechanger Scaling — Jonas’ 6-month 1-on-1 program.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 17. TÉMOIGNAGES — placeholder honnête ─────────────────────────────
  temoignages: {
    eyebrow: {
      fr: 'Témoignages',
      en: 'Testimonials'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'La première édition est en cours.',
      en: 'The first edition is underway.'
    } satisfies BilingualLax<string>,
    pendingNote: {
      fr: 'Première édition en cours. Retours publiés après le bootcamp.',
      en: 'First edition in progress. Feedback published after the bootcamp.'
    } satisfies BilingualLax<string>
  },

  // ─── 18. CTA FINAL — verbatim PDF §17 ──────────────────────────────────
  finalCta: {
    eyebrow: {
      fr: 'Le choix',
      en: 'The choice'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Dans 12 mois — avec ou sans The Edge™ ?',
      en: 'In 12 months — with or without The Edge™?'
    } satisfies BilingualLax<string>,
    withoutColumn: {
      title: {
        fr: 'Sans The Edge™',
        en: 'Without The Edge™'
      } satisfies BilingualLax<string>,
      items: [
        {
          fr: 'Même fourchette de revenu, à 10-15% près.',
          en: 'Same revenue range, give or take 10-15%.'
        },
        {
          fr: 'Tu continues de justifier ton prix devant chaque prospect.',
          en: 'You keep justifying your price to every prospect.'
        },
        {
          fr: 'Tu regardes un concurrent moins compétent grimper au-dessus de toi.',
          en: 'You watch a less competent competitor climb above you.'
        },
        {
          fr: 'Tu chasses les clients au lieu d’être chassé.',
          en: 'You chase clients instead of being chased.'
        },
        {
          fr: 'Le plafond perceptuel ne bouge pas. Le revenu non plus.',
          en: 'The perceptual ceiling does not move. Revenue neither.'
        }
      ] as const satisfies readonly BilingualLax<string>[]
    },
    withColumn: {
      title: {
        fr: 'Avec The Edge™',
        en: 'With The Edge™'
      } satisfies BilingualLax<string>,
      items: [
        {
          fr: 'Tarifs 2-3x plus élevés acceptés sans négociation.',
          en: 'Rates 2-3x higher accepted without negotiation.'
        },
        {
          fr: 'Tes prospects te chassent, pas l’inverse.',
          en: 'Your prospects chase you, not the other way around.'
        },
        {
          fr: 'Ton autorité te précède sur LinkedIn, dans les médias, dans les conversations.',
          en: 'Your authority precedes you on LinkedIn, in the media, in conversations.'
        },
        {
          fr: 'Tu deviens la référence incontournable de ta catégorie.',
          en: 'You become the undisputed reference in your category.'
        },
        {
          fr: 'Ta réputation travaille pour toi pendant que tu dors.',
          en: 'Your reputation works for you while you sleep.'
        }
      ] as const satisfies readonly BilingualLax<string>[]
    },
    recap: {
      dateLabel: { fr: 'Dates', en: 'Dates' } satisfies BilingualLax<string>,
      date: {
        fr: 'Annonce prochaine',
        en: 'Coming soon'
      } satisfies BilingualLax<string>,
      locationLabel: { fr: 'Lieu', en: 'Location' } satisfies BilingualLax<string>,
      location: {
        fr: 'Annonce prochaine — Montréal',
        en: 'Coming soon — Montréal'
      } satisfies BilingualLax<string>,
      priceLabel: {
        fr: 'Investissement',
        en: 'Investment'
      } satisfies BilingualLax<string>,
      price: {
        fr: '1 497$ CAD (lancement)',
        en: '$1,497 CAD (launch)'
      } satisfies BilingualLax<string>,
      spotsLabel: { fr: 'Places', en: 'Spots' } satisfies BilingualLax<string>,
      spots: {
        fr: '15 maximum',
        en: '15 maximum'
      } satisfies BilingualLax<string>
    },
    quote: {
      fr: 'Le marché ne répond pas seulement à la valeur. Il répond à la perception de valeur. Et la perception — ça s’ingénierie.',
      en: 'The market does not only respond to value. It responds to the perception of value. And perception — that can be engineered.'
    } satisfies BilingualLax<string>,
    quoteAuthor: {
      fr: 'Jonas Diop',
      en: 'Jonas Diop'
    } satisfies BilingualLax<string>,
    ctaPrimaryLabel: {
      fr: 'Soumettre mon application',
      en: 'Submit my application'
    } satisfies BilingualLax<string>,
    ctaSecondaryLabel: {
      fr: 'Sois notifié des dates',
      en: 'Be notified of dates'
    } satisfies BilingualLax<string>
  },

  // ─── 19. TRILOGIE FOOTER CROSS-LINK ────────────────────────────────────
  trilogieFooter: {
    eyebrow: {
      fr: 'La trilogie',
      en: 'The trilogy'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Les 3 bootcamps',
      en: 'The 3 bootcamps'
    } satisfies BilingualLax<string>,
    subtitle: {
      fr: 'Chacun adresse un blocage spécifique. Choisis celui qui correspond à où tu en es.',
      en: 'Each addresses a specific blockage. Choose the one matching where you are.'
    } satisfies BilingualLax<string>
  },

  // ─── BREADCRUMB labels ─────────────────────────────────────────────────
  breadcrumb: {
    home: { fr: 'Accueil', en: 'Home' } satisfies BilingualLax<string>,
    evenements: {
      fr: 'Événements',
      en: 'Events'
    } satisfies BilingualLax<string>,
    current: {
      fr: 'The Edge™',
      en: 'The Edge™'
    } satisfies BilingualLax<string>
  }
} as const;
