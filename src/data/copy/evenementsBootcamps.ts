import type { BilingualLax } from '@/lib/i18n/types';

/**
 * evenementsBootcamps.ts — HUB /evenements/bootcamps (FR) + /en/events/bootcamps (EN).
 *
 * Page maîtresse de la Trilogie. 7 sections :
 *   1. Hero (eyebrow méthode RISE · h1 trois leviers · sub · micro-proof · CTA scroll)
 *   2. Pourquoi 3 bootcamps (bloc explicatif court — 3 blocages distincts)
 *   3. Tableau comparatif (centerpiece — 6 colonnes verbatim Trilogie)
 *   4. 3 cartes produit (large card par bootcamp → sous-page dédiée)
 *   5. Méthode RISE™ (4 piliers Reset/Ignite/Scale/Elevate + note CDT™+Game Changer)
 *   6. Crédibilité Jonas (stats verbatim formulaire signé + citation)
 *   7. CTA final (3 boutons sous-pages + 1 CTA appel stratégique secondaire)
 *
 * Tone : TU partout (audience entrepreneurs). DA Platinum Executive Authority.
 * Anti-cannibalisation (brief v3 §5) : CTA appel stratégique reste visuellement
 * SECONDAIRE — les 3 boutons sous-pages bootcamps sont primary gold.
 *
 * Mode pré-lancement : prix affichés, dates en "Annonce prochaine", inscriptions
 * cohortes pending. Stripe non-câblé (chaque sous-page bootcamp gère la capture
 * email "Sois notifié" — pas ici sur le HUB).
 *
 * Sources de vérité (priorité décroissante) :
 *   1. Formulaire signé Jonas (stats 15 ans · 857 entrepreneurs · 31M$)
 *   2. Brief v3 (sitemap §2, prix affichés §3.6, anti-cannibalisation §5)
 *   3. PDFs Trilogie (verbatim — méthode RISE™ + tableau comparatif)
 */

export const evenementsBootcampsCopy = {
  meta: {
    // Canonical hub SEO title (<=70 char) — points to the 3-bootcamp Trilogie.
    title: {
      fr: 'Bootcamps Trilogie — Jonas Diop · 3 leviers, 3 jours, méthode RISE™',
      en: 'Trilogy Bootcamps — Jonas Diop · 3 levers, 3 days, RISE™ method'
    } satisfies BilingualLax<string>,
    // Description : <=160 char, names + audience.
    description: {
      fr: 'Trois bootcamps intensifs 3 jours sur la méthode RISE™. An Army of One™ (exécution), The Edge™ (autorité perçue), The Activation™ (performance humaine).',
      en: 'Three intensive 3-day bootcamps on the RISE™ method. An Army of One™ (execution), The Edge™ (perceived authority), The Activation™ (human performance).'
    } satisfies BilingualLax<string>
  },

  // ─── 1. HERO ───────────────────────────────────────────────────────────────
  hero: {
    eyebrow: {
      fr: 'Bootcamps tactiques 3 jours · Méthode RISE™',
      en: 'Tactical 3-day bootcamps · RISE™ Method'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Trois leviers. Trois blocages. Une trajectoire.',
      en: 'Three levers. Three blockers. One trajectory.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "An Army of One™ pour ton système d'exécution. The Edge™ pour ta perception marché. The Activation™ pour ta capacité humaine complète. Trois bootcamps intensifs construits sur la Méthode RISE™ (Reset · Ignite · Scale · Elevate).",
      en: 'An Army of One™ for your execution system. The Edge™ for your market perception. The Activation™ for your complete human capacity. Three intensive bootcamps built on the RISE™ Method (Reset · Ignite · Scale · Elevate).'
    } satisfies BilingualLax<string>,
    microProof: {
      fr: 'Format intensif 3 jours · Prix de lancement dès 997$ · Méthode propriétaire',
      en: '3-day intensive format · Launch price from $997 · Proprietary method'
    } satisfies BilingualLax<string>,
    ctaPrincipal: {
      fr: 'Découvrir la Trilogie',
      en: 'Discover the Trilogy'
    } satisfies BilingualLax<string>
  },

  // ─── 2. POURQUOI 3 BOOTCAMPS ───────────────────────────────────────────────
  pourquoi: {
    eyebrow: {
      fr: 'Pourquoi trois bootcamps',
      en: 'Why three bootcamps'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Un seul bootcamp ne peut pas tout résoudre.',
      en: "A single bootcamp can't solve everything."
    } satisfies BilingualLax<string>,
    body: {
      fr: 'La plupart des entrepreneurs plafonnent à cause de trois blocages distincts qui se renforcent : le chaos interne, la perception marché, et la capacité humaine. Un seul bootcamp ne peut pas résoudre les trois. La Trilogie est conçue pour cibler chacun avec un format intensif qui livre des résultats opérationnels en 3 jours.',
      en: 'Most entrepreneurs hit a ceiling because of three distinct blockers that reinforce each other: internal chaos, market perception, and human capacity. A single bootcamp cannot solve all three. The Trilogy is designed to target each with an intensive format that delivers operational results in 3 days.'
    } satisfies BilingualLax<string>,
    pillars: [
      {
        id: 'chaos-interne',
        marker: '01',
        title: {
          fr: 'Chaos interne',
          en: 'Internal chaos'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Système d'exécution absent, priorités floues, journées dictées par le bruit. An Army of One™ installe la structure qui te rend opérationnellement souverain.",
          en: 'Missing execution system, blurred priorities, days dictated by noise. An Army of One™ installs the structure that makes you operationally sovereign.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'invisibilite-marche',
        marker: '02',
        title: {
          fr: 'Invisibilité marché',
          en: 'Market invisibility'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Offre confondue avec la concurrence, autorité perçue plafonnée, leads froids. The Edge™ recalibre ta perception marché et active l'autorité que ton expertise mérite.",
          en: 'Offer confused with the competition, perceived authority capped, cold leads. The Edge™ recalibrates your market perception and activates the authority your expertise deserves.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'plafond-humain',
        marker: '03',
        title: {
          fr: 'Plafond humain',
          en: 'Human ceiling'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Croyances limitantes, identité de performeur dépassée, énergie cognitive saturée. The Activation™ recalibre la machine humaine sous le résultat business.',
          en: 'Limiting beliefs, outdated performer identity, saturated cognitive energy. The Activation™ recalibrates the human machine beneath the business result.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  // ─── 3. TABLEAU COMPARATIF — centerpiece ──────────────────────────────────
  tableau: {
    eyebrow: {
      fr: 'Tableau comparatif',
      en: 'Comparison table'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'La Trilogie en un coup d’œil.',
      en: 'The Trilogy at a glance.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Chaque ligne te dit exactement quel levier active quel résultat. Choisis en fonction de ton blocage actuel, pas de ton préféré.',
      en: 'Each row tells you exactly which lever activates which result. Choose based on your current blocker, not your favorite.'
    } satisfies BilingualLax<string>,
    columns: {
      bootcamp: { fr: 'Bootcamp', en: 'Bootcamp' } satisfies BilingualLax<string>,
      blocage: { fr: 'Blocage résolu', en: 'Blocker solved' } satisfies BilingualLax<string>,
      audience: { fr: 'Audience', en: 'Audience' } satisfies BilingualLax<string>,
      priceLaunch: {
        fr: 'Prix lancement',
        en: 'Launch price'
      } satisfies BilingualLax<string>,
      priceRegular: {
        fr: 'Prix régulier',
        en: 'Regular price'
      } satisfies BilingualLax<string>,
      places: { fr: 'Places', en: 'Spots' } satisfies BilingualLax<string>,
      format: { fr: 'Format CTA', en: 'CTA format' } satisfies BilingualLax<string>
    },
    rows: [
      {
        id: 'an-army-of-one',
        bootcamp: {
          fr: 'An Army of One',
          en: 'An Army of One'
        } satisfies BilingualLax<string>,
        blocage: {
          fr: 'Chaos interne — système + exécution',
          en: 'Internal chaos — system + execution'
        } satisfies BilingualLax<string>,
        audience: {
          fr: 'Entrepreneurs solo 5-25K$/mois',
          en: 'Solo entrepreneurs $5K-$25K/month'
        } satisfies BilingualLax<string>,
        priceLaunch: { fr: '997$', en: '$997' } satisfies BilingualLax<string>,
        priceRegular: { fr: '1 497$', en: '$1,497' } satisfies BilingualLax<string>,
        places: { fr: '20', en: '20' } satisfies BilingualLax<string>,
        format: {
          fr: 'Inscription directe',
          en: 'Direct registration'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/an-army-of-one',
        hrefEn: '/en/events/bootcamps/an-army-of-one',
        highlight: false
      },
      {
        id: 'the-edge',
        bootcamp: {
          fr: 'The Edge',
          en: 'The Edge'
        } satisfies BilingualLax<string>,
        blocage: {
          fr: 'Invisibilité — autorité + perception',
          en: 'Invisibility — authority + perception'
        } satisfies BilingualLax<string>,
        audience: {
          fr: 'Coachs/experts 5-20K$/mois',
          en: 'Coaches/experts $5K-$20K/month'
        } satisfies BilingualLax<string>,
        priceLaunch: { fr: '1 497$', en: '$1,497' } satisfies BilingualLax<string>,
        priceRegular: { fr: '1 997$', en: '$1,997' } satisfies BilingualLax<string>,
        places: { fr: '15', en: '15' } satisfies BilingualLax<string>,
        format: {
          fr: 'Application requise',
          en: 'Application required'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/the-edge',
        hrefEn: '/en/events/bootcamps/the-edge',
        highlight: true
      },
      {
        id: 'the-activation',
        bootcamp: {
          fr: 'The Activation',
          en: 'The Activation'
        } satisfies BilingualLax<string>,
        blocage: {
          fr: 'Plafond — cognitif + identitaire',
          en: 'Ceiling — cognitive + identity'
        } satisfies BilingualLax<string>,
        audience: {
          fr: 'Entrepreneurs établis 15-50K$/mois',
          en: 'Established entrepreneurs $15K-$50K/month'
        } satisfies BilingualLax<string>,
        priceLaunch: { fr: '1 497$', en: '$1,497' } satisfies BilingualLax<string>,
        priceRegular: { fr: '1 997$', en: '$1,997' } satisfies BilingualLax<string>,
        places: { fr: '20', en: '20' } satisfies BilingualLax<string>,
        format: {
          fr: 'Inscription directe',
          en: 'Direct registration'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/the-activation',
        hrefEn: '/en/events/bootcamps/the-activation',
        highlight: false
      }
    ]
  },

  // ─── 4. 3 CARTES PRODUIT — grandes cartes navigables ──────────────────────
  cartes: {
    eyebrow: {
      fr: 'Les trois leviers',
      en: 'The three levers'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Choisis le levier qui résout ton blocage actuel.',
      en: 'Choose the lever that solves your current blocker.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Chaque bootcamp est conçu pour un blocage précis et une audience précise. Pas de version généraliste — chaque format livre un résultat ciblé en 3 jours.',
      en: 'Each bootcamp is designed for a precise blocker and a precise audience. No generalist version — each format delivers a targeted result in 3 days.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'an-army-of-one',
        marker: '01',
        name: { fr: 'An Army of One™', en: 'An Army of One™' } satisfies BilingualLax<string>,
        tagline: {
          fr: "Le système d'exécution",
          en: 'The execution system'
        } satisfies BilingualLax<string>,
        blocage: {
          fr: 'Chaos interne — priorités floues, journées subies, exécution dispersée.',
          en: 'Internal chaos — blurred priorities, reactive days, scattered execution.'
        } satisfies BilingualLax<string>,
        audience: {
          fr: 'Entrepreneurs solo 5-25K$/mois',
          en: 'Solo entrepreneurs $5K-$25K/month'
        } satisfies BilingualLax<string>,
        priceLaunch: { fr: '997$', en: '$997' } satisfies BilingualLax<string>,
        priceRegular: { fr: '1 497$', en: '$1,497' } satisfies BilingualLax<string>,
        formatBadge: {
          fr: 'Inscription directe',
          en: 'Direct registration'
        } satisfies BilingualLax<string>,
        applicationRequired: false,
        ctaLabel: {
          fr: 'Découvrir An Army of One',
          en: 'Discover An Army of One'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/an-army-of-one',
        hrefEn: '/en/events/bootcamps/an-army-of-one'
      },
      {
        id: 'the-edge',
        marker: '02',
        name: { fr: 'The Edge™', en: 'The Edge™' } satisfies BilingualLax<string>,
        tagline: {
          fr: "L'autorité perçue",
          en: 'Perceived authority'
        } satisfies BilingualLax<string>,
        blocage: {
          fr: 'Invisibilité marché — offre confondue, autorité plafonnée, leads froids.',
          en: 'Market invisibility — confused offer, capped authority, cold leads.'
        } satisfies BilingualLax<string>,
        audience: {
          fr: 'Coachs et experts 5-20K$/mois',
          en: 'Coaches and experts $5K-$20K/month'
        } satisfies BilingualLax<string>,
        priceLaunch: { fr: '1 497$', en: '$1,497' } satisfies BilingualLax<string>,
        priceRegular: { fr: '1 997$', en: '$1,997' } satisfies BilingualLax<string>,
        formatBadge: {
          fr: 'Application requise',
          en: 'Application required'
        } satisfies BilingualLax<string>,
        applicationRequired: true,
        ctaLabel: {
          fr: 'Découvrir The Edge',
          en: 'Discover The Edge'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/the-edge',
        hrefEn: '/en/events/bootcamps/the-edge'
      },
      {
        id: 'the-activation',
        marker: '03',
        name: { fr: 'The Activation™', en: 'The Activation™' } satisfies BilingualLax<string>,
        tagline: {
          fr: 'La recalibration humaine',
          en: 'Human recalibration'
        } satisfies BilingualLax<string>,
        blocage: {
          fr: 'Plafond cognitif et identitaire — croyances limitantes, énergie saturée.',
          en: 'Cognitive and identity ceiling — limiting beliefs, saturated energy.'
        } satisfies BilingualLax<string>,
        audience: {
          fr: 'Entrepreneurs établis 15-50K$/mois',
          en: 'Established entrepreneurs $15K-$50K/month'
        } satisfies BilingualLax<string>,
        priceLaunch: { fr: '1 497$', en: '$1,497' } satisfies BilingualLax<string>,
        priceRegular: { fr: '1 997$', en: '$1,997' } satisfies BilingualLax<string>,
        formatBadge: {
          fr: 'Inscription directe',
          en: 'Direct registration'
        } satisfies BilingualLax<string>,
        applicationRequired: false,
        ctaLabel: {
          fr: 'Découvrir The Activation',
          en: 'Discover The Activation'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/the-activation',
        hrefEn: '/en/events/bootcamps/the-activation'
      }
    ]
  },

  // ─── 5. MÉTHODE RISE™ — 4 piliers ─────────────────────────────────────────
  rise: {
    eyebrow: {
      fr: 'Méthode propriétaire',
      en: 'Proprietary method'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'RISE™ — Reset · Ignite · Scale · Elevate.',
      en: 'RISE™ — Reset · Ignite · Scale · Elevate.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Le squelette commun aux trois bootcamps. Quatre piliers qui se renforcent — chaque bootcamp en active un dominant tout en touchant aux autres.',
      en: 'The common backbone across the three bootcamps. Four pillars that reinforce each other — each bootcamp activates one dominant pillar while touching the others.'
    } satisfies BilingualLax<string>,
    pillars: [
      {
        id: 'reset',
        letter: 'R',
        name: { fr: 'Reset', en: 'Reset' } satisfies BilingualLax<string>,
        title: {
          fr: 'Recalibrer ton identité de performeur',
          en: 'Recalibrate your performer identity'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Identifier la version dépassée de toi qui plafonne le résultat. Travail IOS (Identity Operating System) — pilier ouverture de The Activation™ Jour 1. Sans Reset, les nouveaux systèmes s'installent sur une fondation fissurée.",
          en: 'Identify the outdated version of you that caps the result. IOS work (Identity Operating System) — opening pillar of The Activation™ Day 1. Without Reset, new systems install on a cracked foundation.'
        } satisfies BilingualLax<string>,
        sourceBootcamp: {
          fr: 'IOS — The Activation™ Jour 1',
          en: 'IOS — The Activation™ Day 1'
        } satisfies BilingualLax<string>
      },
      {
        id: 'ignite',
        letter: 'I',
        name: { fr: 'Ignite', en: 'Ignite' } satisfies BilingualLax<string>,
        title: {
          fr: "Activer ton système d'exécution",
          en: 'Activate your execution system'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Mettre en feu la machine opérationnelle : priorités, blocs, livraison. Méthodologie CDT™ (Compression Dynamique du Temps) déposée OPIC + ESD (Execution System Design) An Army of One™. Active sur The Activation™ Jour 2.',
          en: 'Ignite the operational machine: priorities, blocks, delivery. CDT™ methodology (Dynamic Time Compression) registered with OPIC + ESD (Execution System Design) An Army of One™. Activated on The Activation™ Day 2.'
        } satisfies BilingualLax<string>,
        sourceBootcamp: {
          fr: 'CDT™ + ESD — An Army of One™ + The Activation™ Jour 2',
          en: 'CDT™ + ESD — An Army of One™ + The Activation™ Day 2'
        } satisfies BilingualLax<string>
      },
      {
        id: 'scale',
        letter: 'S',
        name: { fr: 'Scale', en: 'Scale' } satisfies BilingualLax<string>,
        title: {
          fr: 'Amplifier ton autorité perçue',
          en: 'Amplify your perceived authority'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Construire l'Authority Stack qui change ta perception marché et fait monter le ticket sans hausse d'effort. Pilier central de The Edge™ — recalibration de la conversation que le marché tient sur toi.",
          en: 'Build the Authority Stack that changes your market perception and raises the ticket without raising effort. Central pillar of The Edge™ — recalibrating the conversation the market holds about you.'
        } satisfies BilingualLax<string>,
        sourceBootcamp: {
          fr: 'Authority Stack — The Edge™',
          en: 'Authority Stack — The Edge™'
        } satisfies BilingualLax<string>
      },
      {
        id: 'elevate',
        letter: 'E',
        name: { fr: 'Elevate', en: 'Elevate' } satisfies BilingualLax<string>,
        title: {
          fr: 'Soutenir ton énergie cognitive',
          en: 'Sustain your cognitive energy'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Installer la maintenance haute performance qui empêche le burnout cognitif sous accélération. Travail ECO (Energy Cognitive Operations) — pilier clôture de The Activation™ Jour 3. Sans Elevate, l'Ignite te brûle.",
          en: 'Install the high-performance maintenance that prevents cognitive burnout under acceleration. ECO work (Energy Cognitive Operations) — closing pillar of The Activation™ Day 3. Without Elevate, Ignite burns you.'
        } satisfies BilingualLax<string>,
        sourceBootcamp: {
          fr: 'ECO — The Activation™ Jour 3',
          en: 'ECO — The Activation™ Day 3'
        } satisfies BilingualLax<string>
      }
    ],
    note: {
      fr: "La Méthode RISE™ s'intègre à l'écosystème Game Changer Protocol™ et utilise la méthodologie CDT™ — Compression Dynamique du Temps — déposée à l'OPIC.",
      en: 'The RISE™ Method integrates into the Game Changer Protocol™ ecosystem and uses the CDT™ methodology — Dynamic Time Compression — registered with OPIC.'
    } satisfies BilingualLax<string>
  },

  // ─── 6. CRÉDIBILITÉ JONAS ──────────────────────────────────────────────────
  credibilite: {
    eyebrow: {
      fr: 'Pourquoi Jonas Diop',
      en: 'Why Jonas Diop'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Quinze ans à construire, tester, valider.',
      en: 'Fifteen years building, testing, validating.'
    } satisfies BilingualLax<string>,
    stats: [
      {
        id: 'experience',
        value: { fr: '15+', en: '15+' } satisfies BilingualLax<string>,
        label: {
          fr: "ans d'expérience",
          en: 'years of experience'
        } satisfies BilingualLax<string>
      },
      {
        id: 'entrepreneurs',
        value: { fr: '857', en: '857' } satisfies BilingualLax<string>,
        label: {
          fr: 'entrepreneurs accompagnés',
          en: 'entrepreneurs supported'
        } satisfies BilingualLax<string>
      },
      {
        id: 'revenus',
        value: { fr: '31M$', en: '$31M' } satisfies BilingualLax<string>,
        label: {
          fr: 'générés par nos clients',
          en: 'generated by our clients'
        } satisfies BilingualLax<string>
      }
    ],
    credentials: [
      {
        fr: "Architecte d'affaires",
        en: 'Business Architect'
      } satisfies BilingualLax<string>,
      {
        fr: 'Créateur Game Changer Protocol™',
        en: 'Creator Game Changer Protocol™'
      } satisfies BilingualLax<string>,
      {
        fr: 'Méthodologie CDT™ déposée OPIC',
        en: 'CDT™ Methodology registered with OPIC'
      } satisfies BilingualLax<string>,
      {
        fr: 'Podcast The Game Changer',
        en: 'The Game Changer Podcast'
      } satisfies BilingualLax<string>,
      {
        fr: 'Méthode RISE™',
        en: 'RISE™ Method'
      } satisfies BilingualLax<string>
    ],
    quote: {
      fr: "Les trois bootcamps de la Trilogie sont la distillation de 15 ans d'observation, d'application et de résultats. Trois leviers construits, testés, validés.",
      en: 'The three bootcamps of the Trilogy are the distillation of 15 years of observation, application and results. Three levers built, tested, validated.'
    } satisfies BilingualLax<string>,
    quoteAttribution: {
      fr: 'Jonas Diop, Président · DIOP Stratégies Internationales',
      en: 'Jonas Diop, President · DIOP Stratégies Internationales'
    } satisfies BilingualLax<string>
  },

  // ─── 7. CTA FINAL — 3 leviers + appel stratégique secondaire ──────────────
  finalCta: {
    eyebrow: {
      fr: 'Choisir un levier',
      en: 'Choose a lever'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Choisis ton premier levier.',
      en: 'Choose your first lever.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Trois bootcamps, trois blocages, trois résultats. Commence par celui qui résout ton point de friction le plus coûteux aujourd’hui.',
      en: 'Three bootcamps, three blockers, three results. Start with the one that solves your most expensive friction point today.'
    } satisfies BilingualLax<string>,
    ctas: [
      {
        id: 'an-army-of-one',
        label: {
          fr: 'An Army of One™',
          en: 'An Army of One™'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/an-army-of-one',
        hrefEn: '/en/events/bootcamps/an-army-of-one'
      },
      {
        id: 'the-edge',
        label: {
          fr: 'The Edge™',
          en: 'The Edge™'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/the-edge',
        hrefEn: '/en/events/bootcamps/the-edge'
      },
      {
        id: 'the-activation',
        label: {
          fr: 'The Activation™',
          en: 'The Activation™'
        } satisfies BilingualLax<string>,
        href: '/evenements/bootcamps/the-activation',
        hrefEn: '/en/events/bootcamps/the-activation'
      }
    ],
    secondaryEyebrow: {
      fr: 'Pas sûr du levier',
      en: 'Not sure which lever'
    } satisfies BilingualLax<string>,
    secondaryLabel: {
      fr: 'Réserve ton appel stratégique',
      en: 'Book your strategic call'
    } satisfies BilingualLax<string>,
    secondaryNote: {
      fr: '30 minutes avec un membre de l’équipe pour identifier le bon point d’entrée.',
      en: '30 minutes with a team member to identify the right entry point.'
    } satisfies BilingualLax<string>
  }
} as const;
