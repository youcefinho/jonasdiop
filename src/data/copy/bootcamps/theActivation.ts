import type { BilingualLax } from '@/lib/i18n/types';

/**
 * theActivation.ts — Sous-page bootcamp Trilogie #3 : The Activation™.
 *
 * Source de vérité (priorité décroissante) :
 *   1. Formulaire signé Jonas (stats : 15+ ans · 857 entrepreneurs · 31M$ générés)
 *   2. Brief v3 §2 / §3.6 / §5 (sitemap + structure sous-page + anti-cannibalisation)
 *   3. PDF Trilogie "The Activation™" (verbatim FR — 17 sections)
 *
 * Bootcamp 3 jours intensifs · 20 places · Pré-lancement 1 497$ · Régulier 1 997$
 * Méthode RISE™ (Reset · Ignite · Scale · Elevate) — couche brand spécifique
 * aux bootcamps Trilogie. CDT™ + Game Changer Protocol™ restent brand chapeau
 * du site et sont cités explicitement en J2 du programme + crédibilité Jonas.
 *
 * Mode pré-lancement (cf. CLAUDE.md projet) :
 *   - Prix affichés (cohérent brief v3 §3.6 événements ont prix).
 *   - Stripe NON câblé → CTA "Sois notifié des dates et tarifs early-bird".
 *   - Témoignages = placeholder honnête (première édition en cours).
 *   - VSL = placeholder élégant (vidéo à venir).
 *   - Dates cohortes = "Annonce prochaine".
 *
 * Tone : TU (audience entrepreneurs établis 15-50K$/mois).
 * Anti-cannibalisation : "Réserver ma place" / "Sois notifié" autorisés UNIQUEMENT
 * sur cette sous-page (jamais sur Home).
 */

export const theActivationCopy = {
  meta: {
    // Canonical SEO title (<=70 char) ; verbatim brand "The Activation™".
    title: {
      fr: 'The Activation™ — Bootcamp performance humaine · Jonas Diop',
      en: 'The Activation™ — Human Performance Bootcamp · Jonas Diop'
    } satisfies BilingualLax<string>,
    // Description : <=160 char, méthode RISE™ + CDT™ + prix + audience.
    description: {
      fr: 'Bootcamp 3 jours · méthode RISE™ + CDT™ pour recalibrer identité, exécution et énergie. Entrepreneurs 15-50K$/mois qui plafonnent. 20 places, dès 1 497$.',
      en: '3-day bootcamp · RISE™ + CDT™ to recalibrate identity, execution, energy. Established entrepreneurs $15-50K/month hitting a ceiling. 20 spots, from $1,497.'
    } satisfies BilingualLax<string>
  },

  // ─── 1. STICKY BAR ─────────────────────────────────────────────────────────
  stickyBar: {
    status: {
      fr: '20 places maximum — Inscriptions à venir',
      en: '20 spots maximum — Registrations opening soon'
    } satisfies BilingualLax<string>,
    priceLaunch: {
      fr: '1 497$',
      en: '$1,497'
    } satisfies BilingualLax<string>,
    priceRegular: {
      fr: '1 997$',
      en: '$1,997'
    } satisfies BilingualLax<string>,
    cta: {
      fr: 'Sois notifié des dates',
      en: 'Be notified of dates'
    } satisfies BilingualLax<string>
  },

  // ─── 2. HERO ───────────────────────────────────────────────────────────────
  hero: {
    eyebrow: {
      fr: 'Pour les entrepreneurs établis qui génèrent entre 15 000$ et 50 000$/mois — mais qui plafonnent malgré tous leurs efforts.',
      en: 'For established entrepreneurs generating between $15,000 and $50,000/month — but who plateau despite every effort.'
    } satisfies BilingualLax<string>,
    h1: {
      fr: "Tu as upgradé ton business. Tu n'as pas encore upgradé toi.",
      en: "You've upgraded your business. You haven't yet upgraded yourself."
    } satisfies BilingualLax<string>,
    sub: {
      fr: "The Activation™ est le bootcamp d'engineering de performance humaine qui recalibre ton identité, ton exécution et ton énergie — pour que tu produises des résultats disproportionnés de manière stable, prévisible et irréversible.",
      en: 'The Activation™ is the human performance engineering bootcamp that recalibrates your identity, your execution and your energy — so you produce disproportionate results in a stable, predictable, irreversible way.'
    } satisfies BilingualLax<string>,
    microProof: {
      fr: 'Méthode RISE™ · 3 jours intensifs · 12 livrables · 20 places maximum',
      en: 'RISE™ method · 3 intensive days · 12 deliverables · 20 spots maximum'
    } satisfies BilingualLax<string>,
    dates: {
      fr: 'Annonce prochaine',
      en: 'Announced soon'
    } satisfies BilingualLax<string>,
    location: {
      fr: 'Montréal · Lieu confidentiel premium',
      en: 'Montréal · Confidential premium venue'
    } satisfies BilingualLax<string>
  },

  // ─── 3. VSL PLACEHOLDER ────────────────────────────────────────────────────
  vsl: {
    eyebrow: {
      fr: 'Vidéo · 13 min',
      en: 'Video · 13 min'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Avant de lire quoi que ce soit — regarde cette vidéo (13 min).',
      en: 'Before reading anything else — watch this video (13 min).'
    } satisfies BilingualLax<string>,
    pendingNote: {
      fr: 'Vidéo à venir. Sois notifié dès sa mise en ligne.',
      en: 'Video coming soon. Be notified when it goes live.'
    } satisfies BilingualLax<string>
  },

  // ─── 4. TRANSITION post-VSL ────────────────────────────────────────────────
  postVslTransition: {
    body: {
      fr: "Ce qui suit est la cartographie complète de ce qu'on va construire ensemble en 3 jours. Lis lentement. Reconnais-toi.",
      en: 'What follows is the complete mapping of what we will build together over 3 days. Read slowly. Recognize yourself.'
    } satisfies BilingualLax<string>
  },

  // ─── 5. MIROIR — 10 cases verbatim PDF §5 ──────────────────────────────────
  mirror: {
    eyebrow: {
      fr: "Le miroir — est-ce que c'est toi ?",
      en: 'The mirror — is this you?'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Coche ce qui te ressemble. Si 4 cases sur 10 résonnent, ce bootcamp est conçu pour toi.',
      en: 'Check what resonates. If 4 out of 10 land, this bootcamp is built for you.'
    } satisfies BilingualLax<string>,
    items: [
      {
        fr: 'Tu génères un bon revenu mais tu plafonnes malgré tous tes efforts.',
        en: 'You generate solid revenue but you plateau despite every effort.'
      },
      {
        fr: 'Tu travailles 50 à 70 heures par semaine mais ton output réel ne justifie pas ces heures.',
        en: 'You work 50 to 70 hours per week but your real output does not justify those hours.'
      },
      {
        fr: 'Tu souffres de fatigue décisionnelle.',
        en: 'You suffer from decision fatigue.'
      },
      {
        fr: 'Tu as des journées brillantes et des journées creuses sans comprendre pourquoi.',
        en: 'You have brilliant days and hollow days without understanding why.'
      },
      {
        fr: "Tu as commencé des routines qui n'ont jamais tenu plus de 3 semaines.",
        en: 'You have started routines that never held more than 3 weeks.'
      },
      {
        fr: "Tu sais beaucoup de choses sur la performance mais rien n'a produit un changement stable.",
        en: 'You know a lot about performance but nothing has produced stable change.'
      },
      {
        fr: 'Tu performs par force brute — et tu sens que ça ne peut pas durer.',
        en: 'You perform by brute force — and you sense it cannot last.'
      },
      {
        fr: "Tu sais qu'il y a une version plus puissante de toi — mais tu n'arrives pas à l'activer durablement.",
        en: 'You know there is a more powerful version of you — but you cannot activate it durably.'
      },
      {
        fr: "Tu as upgradé ton business mais tu n'as pas upgradé toi.",
        en: 'You have upgraded your business but you have not upgraded yourself.'
      },
      {
        fr: "La force brute qui t'a amené là ne suffit plus pour aller où tu veux aller.",
        en: 'The brute force that brought you here is no longer enough to take you where you want to go.'
      }
    ] as const satisfies readonly BilingualLax<string>[],
    transitionPhrase: {
      fr: "Ce n'est pas un manque de volonté. Ce n'est pas un manque de talent. C'est un système d'exploitation humain non recalibré pour le niveau que tu vises. Et ça se répare. En 3 jours.",
      en: 'It is not a lack of willpower. It is not a lack of talent. It is a human operating system not recalibrated for the level you aim for. And it can be repaired. In 3 days.'
    } satisfies BilingualLax<string>
  },

  // ─── 6. VRAI DIAGNOSTIC ────────────────────────────────────────────────────
  diagnostic: {
    eyebrow: {
      fr: 'Le vrai diagnostic',
      en: 'The real diagnosis'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Ton problème n'est pas dans ton business. Il est dans ton système d'exploitation humain.",
      en: 'Your problem is not in your business. It is in your human operating system.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Imagine un ordinateur dernière génération qui tourne sur un OS obsolète. Le hardware est puissant. Le software est dépassé. Résultat : il rame, il plante, il sous-performe — pas parce qu'il manque de capacité, mais parce que son architecture interne n'est pas à la hauteur de ce qu'il pourrait faire.\n\nC'est exactement ce qui se passe avec toi en ce moment. Le hardware (ton talent, ton expérience, ton business) est solide. L'OS (ton identité, ton exécution, ton énergie) n'est plus aligné avec ce que tu veux produire.",
      en: 'Imagine a latest-generation computer running an obsolete OS. The hardware is powerful. The software is outdated. Result : it lags, it crashes, it underperforms — not from lack of capacity, but because its internal architecture does not match what it could deliver.\n\nThis is exactly what is happening with you right now. The hardware (your talent, your experience, your business) is solid. The OS (your identity, your execution, your energy) is no longer aligned with what you want to produce.'
    } satisfies BilingualLax<string>,
    axes: [
      {
        id: 'identite',
        title: {
          fr: 'Identité non recalibrée',
          en: 'Identity not recalibrated'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Tu opères depuis l'identité de celui qui voulait atteindre ce niveau — pas depuis celle de celui qui doit le tenir et le dépasser. Tant que l'identité reste celle d'avant, tout effort retombe vers la moyenne.",
          en: 'You operate from the identity of the person who wanted to reach this level — not from the one who must hold it and exceed it. As long as identity stays in the past, every effort regresses to the mean.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'execution',
        title: {
          fr: 'Exécution non recalibrée',
          en: 'Execution not recalibrated'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Tu utilises encore des systèmes de productivité dignes d'un niveau revenu antérieur. À ton niveau actuel, la productivité mesure l'occupation. Ce qui compte maintenant, c'est l'exécution : la densité de résultats par unité de temps.",
          en: 'You still use productivity systems suited to an earlier income level. At your current level, productivity measures occupation. What matters now is execution : the density of results per unit of time.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'energie',
        title: {
          fr: 'Énergie non recalibrée',
          en: 'Energy not recalibrated'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Ton cerveau est ton actif principal — et tu le traites comme un consommable. Sans architecture d'énergie et de récupération, la fatigue cognitive devient ton plafond invisible avant même que tes journées ne commencent.",
          en: 'Your brain is your main asset — and you treat it as a consumable. Without an architecture of energy and recovery, cognitive fatigue becomes your invisible ceiling before your day even begins.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 7. SANS ACTION (12 mois) ──────────────────────────────────────────────
  withoutAction: {
    eyebrow: {
      fr: 'Sans action — dans 12 mois',
      en: 'Without action — 12 months from now'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Ce qui se passe si tu continues comme ça encore un an.',
      en: 'What happens if you keep going like this for one more year.'
    } satisfies BilingualLax<string>,
    items: [
      {
        fr: 'Tu plafonnes au même revenu — mais tu auras travaillé 50% plus pour le maintenir.',
        en: 'You plateau at the same revenue — but you will have worked 50% more to maintain it.'
      },
      {
        fr: "La force brute s'épuise. Tu te réveilles fatigué avant que la journée ne commence.",
        en: 'Brute force runs out. You wake up tired before the day starts.'
      },
      {
        fr: 'La fatigue décisionnelle gagne du terrain. Tu reportes les choses qui comptent vraiment.',
        en: 'Decision fatigue gains ground. You postpone the things that truly matter.'
      },
      {
        fr: 'Les routines que tu lances ne tiennent plus du tout. Tu perds confiance dans ta propre parole donnée à toi-même.',
        en: 'The routines you launch no longer hold at all. You lose confidence in your own word given to yourself.'
      },
      {
        fr: 'Ton entourage te voit performer — mais toi tu sais que tu joues au-dessus de ton OS, en mode survie permanente.',
        en: 'People around you see you perform — but you know you are playing above your OS, in permanent survival mode.'
      },
      {
        fr: "Le plafond n'est plus seulement financier. Il devient identitaire. Tu commences à croire que c'est ça, ta version finale.",
        en: 'The ceiling is no longer just financial. It becomes identity-level. You start believing this is your final version.'
      }
    ] as const satisfies readonly BilingualLax<string>[]
  },

  // ─── 8. SOLUTION — 3 axes fondateurs ───────────────────────────────────────
  solution: {
    eyebrow: {
      fr: 'La solution — 3 axes fondateurs',
      en: 'The solution — 3 founding axes'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Recalibrer ton OS sur 3 axes simultanés. Sinon, ça ne tient pas.',
      en: 'Recalibrate your OS on 3 simultaneous axes. Otherwise, it does not hold.'
    } satisfies BilingualLax<string>,
    pillars: [
      {
        id: 'ios',
        code: 'IOS',
        title: {
          fr: 'Identity Operating System',
          en: 'Identity Operating System'
        } satisfies BilingualLax<string>,
        quote: {
          fr: "Tu ne peux pas performer à un niveau que ton identité refuse d'occuper.",
          en: 'You cannot perform at a level your identity refuses to occupy.'
        } satisfies BilingualLax<string>,
        body: {
          fr: "On reprogramme l'identité au niveau le plus profond : qui tu décides d'être quand personne ne regarde. Sans ce recalibrage identitaire, chaque tactique de performance s'effondre en moins de 30 jours.",
          en: 'We reprogram identity at the deepest level : who you decide to be when no one is watching. Without this identity recalibration, every performance tactic collapses in under 30 days.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'esd',
        code: 'ESD',
        title: {
          fr: 'Execution System Design',
          en: 'Execution System Design'
        } satisfies BilingualLax<string>,
        quote: {
          fr: "La productivité mesure l'occupation. L'exécution mesure l'output.",
          en: 'Productivity measures occupation. Execution measures output.'
        } satisfies BilingualLax<string>,
        body: {
          fr: "On remplace la productivité (gérer ses heures) par l'exécution (densifier ses résultats). Architecture de semaine, règles de décision pré-câblées, vrai hourly rate calculé sur ton output réel — pas sur ton agenda.",
          en: 'We replace productivity (managing hours) with execution (densifying results). Weekly architecture, pre-wired decision rules, true hourly rate calculated on your real output — not on your calendar.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'eco',
        code: 'ECO',
        title: {
          fr: 'Energy & Cognitive Optimization',
          en: 'Energy & Cognitive Optimization'
        } satisfies BilingualLax<string>,
        quote: {
          fr: 'Ton cerveau est ton actif principal. Optimise-le comme tel.',
          en: 'Your brain is your main asset. Optimize it as such.'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'On architecture ton énergie cognitive comme un actif stratégique : biohacking ciblé, protocole de récupération, Sharp State accessible à la demande. Sans cet axe, les deux premiers se brûlent en quelques semaines.',
          en: 'We architect your cognitive energy as a strategic asset : targeted biohacking, recovery protocol, Sharp State accessible on demand. Without this axis, the first two burn out in a few weeks.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 9. 3 JOURS DÉTAILLÉS — CDT™ explicitement cité au Jour 2 ─────────────
  programme: {
    eyebrow: {
      fr: 'Le programme — 3 jours',
      en: 'The program — 3 days'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'RISE™ — Reset · Ignite · Scale · Elevate. Une architecture, trois jours, un Operating System final.',
      en: 'RISE™ — Reset · Ignite · Scale · Elevate. One architecture, three days, one final Operating System.'
    } satisfies BilingualLax<string>,
    days: [
      {
        id: 'j1',
        label: { fr: 'Jour 1', en: 'Day 1' } satisfies BilingualLax<string>,
        codename: {
          fr: 'Identity & Domination Framework',
          en: 'Identity & Domination Framework'
        } satisfies BilingualLax<string>,
        modules: [
          {
            fr: 'North Star Operating System',
            en: 'North Star Operating System'
          },
          {
            fr: "Identity Shifting & Hero's Loop",
            en: "Identity Shifting & Hero's Loop"
          },
          {
            fr: 'Posture de Leadership',
            en: 'Leadership Posture'
          },
          {
            fr: 'Unfair Advantage Mapping',
            en: 'Unfair Advantage Mapping'
          }
        ] as const satisfies readonly BilingualLax<string>[],
        deliverables: [
          {
            fr: 'North Star Framework Sheet™',
            en: 'North Star Framework Sheet™'
          },
          {
            fr: 'Identity Shift Worksheet™',
            en: 'Identity Shift Worksheet™'
          },
          {
            fr: 'Leadership Posture Protocol™',
            en: 'Leadership Posture Protocol™'
          },
          {
            fr: 'Unfair Advantage Map™',
            en: 'Unfair Advantage Map™'
          }
        ] as const satisfies readonly BilingualLax<string>[]
      },
      {
        id: 'j2',
        label: { fr: 'Jour 2', en: 'Day 2' } satisfies BilingualLax<string>,
        codename: {
          fr: 'Execution Engine & Time Compression (CDT™)',
          en: 'Execution Engine & Time Compression (CDT™)'
        } satisfies BilingualLax<string>,
        note: {
          fr: 'Module central : la CDT™ — Compression Dynamique du Temps, déposée OPIC, méthodologie chapeau Jonas Diop appliquée ici à ton OS personnel.',
          en: "Central module : CDT™ — Dynamic Time Compression, registered with OPIC, Jonas Diop's flagship methodology applied here to your personal OS."
        } satisfies BilingualLax<string>,
        modules: [
          {
            fr: 'CDT™ — Compression Dynamique du Temps',
            en: 'CDT™ — Dynamic Time Compression'
          },
          {
            fr: 'Execution System vs Productivity System',
            en: 'Execution System vs Productivity System'
          },
          {
            fr: 'Rule Stack',
            en: 'Rule Stack'
          },
          {
            fr: 'Architecture de semaine + Vrai Hourly Rate',
            en: 'Weekly Architecture + True Hourly Rate'
          }
        ] as const satisfies readonly BilingualLax<string>[],
        deliverables: [
          {
            fr: 'CDT™ Time Model Personal Blueprint',
            en: 'CDT™ Time Model Personal Blueprint'
          },
          {
            fr: 'Execution System Template™',
            en: 'Execution System Template™'
          },
          {
            fr: 'Personal Rule Stack™',
            en: 'Personal Rule Stack™'
          },
          {
            fr: 'Hourly Rate Calculator™ + Weekly Architecture Template™',
            en: 'Hourly Rate Calculator™ + Weekly Architecture Template™'
          }
        ] as const satisfies readonly BilingualLax<string>[]
      },
      {
        id: 'j3',
        label: { fr: 'Jour 3', en: 'Day 3' } satisfies BilingualLax<string>,
        codename: {
          fr: 'Energy, Recovery & Scaling Capacity',
          en: 'Energy, Recovery & Scaling Capacity'
        } satisfies BilingualLax<string>,
        modules: [
          {
            fr: 'Biohacking cognitif',
            en: 'Cognitive biohacking'
          },
          {
            fr: 'Recovery System',
            en: 'Recovery System'
          },
          {
            fr: 'Sharp State Protocol',
            en: 'Sharp State Protocol'
          },
          {
            fr: 'Scaling Identity + OS Final',
            en: 'Scaling Identity + Final OS'
          }
        ] as const satisfies readonly BilingualLax<string>[],
        deliverables: [
          {
            fr: 'Energy Optimization Protocol™',
            en: 'Energy Optimization Protocol™'
          },
          {
            fr: 'Recovery Protocol Map™',
            en: 'Recovery Protocol Map™'
          },
          {
            fr: 'Sharp State Activation Protocol™',
            en: 'Sharp State Activation Protocol™'
          },
          {
            fr: 'Personal Operating System™ (IOS + ESD + ECO)',
            en: 'Personal Operating System™ (IOS + ESD + ECO)'
          }
        ] as const satisfies readonly BilingualLax<string>[]
      }
    ] as const
  },

  // ─── 10. 12 LIVRABLES ──────────────────────────────────────────────────────
  deliverables: {
    eyebrow: {
      fr: 'Ce que tu obtiens concrètement',
      en: 'What you get concretely'
    } satisfies BilingualLax<string>,
    headline: {
      fr: '12 livrables. Pas de la théorie. Des outils que tu utilises lundi matin.',
      en: '12 deliverables. Not theory. Tools you use Monday morning.'
    } satisfies BilingualLax<string>,
    subtitle: {
      fr: 'Tu repars avec ton Operating System personnel complet — pas avec une pile de notes.',
      en: 'You leave with your complete personal Operating System — not with a pile of notes.'
    } satisfies BilingualLax<string>,
    columnNumberLabel: {
      fr: '#',
      en: '#'
    } satisfies BilingualLax<string>,
    columnNameLabel: {
      fr: 'Livrable',
      en: 'Deliverable'
    } satisfies BilingualLax<string>,
    columnDescriptionLabel: {
      fr: 'Description',
      en: 'Description'
    } satisfies BilingualLax<string>,
    rows: [
      {
        n: 1,
        name: {
          fr: 'North Star Framework Sheet™',
          en: 'North Star Framework Sheet™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Document de direction long terme — qui tu deviens dans 3 ans + axes non négociables + filtres de décision.',
          en: 'Long-term direction document — who you become in 3 years + non-negotiable axes + decision filters.'
        } satisfies BilingualLax<string>
      },
      {
        n: 2,
        name: {
          fr: 'Identity Shift Worksheet™',
          en: 'Identity Shift Worksheet™'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Carte d'identité actuelle vs identité cible, gap analysis, protocole de transfert quotidien.",
          en: 'Current identity card vs target identity, gap analysis, daily transfer protocol.'
        } satisfies BilingualLax<string>
      },
      {
        n: 3,
        name: {
          fr: 'Leadership Posture Protocol™',
          en: 'Leadership Posture Protocol™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Posture interne et externe à incarner dans les moments décisifs. Phrases-piliers + body markers.',
          en: 'Internal and external posture to embody in decisive moments. Pillar phrases + body markers.'
        } satisfies BilingualLax<string>
      },
      {
        n: 4,
        name: {
          fr: 'Unfair Advantage Map™',
          en: 'Unfair Advantage Map™'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Cartographie de tes leviers personnels uniques — l'angle où tu joues 10x plus fort que n'importe qui d'autre.",
          en: 'Mapping of your unique personal levers — the angle where you play 10x stronger than anyone else.'
        } satisfies BilingualLax<string>
      },
      {
        n: 5,
        name: {
          fr: 'CDT™ Time Model Personal Blueprint',
          en: 'CDT™ Time Model Personal Blueprint'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Application personnelle de la méthodologie CDT™ : compression dynamique de ton temps pour produire 2x avec 50% des heures.',
          en: 'Personal application of the CDT™ methodology : dynamic compression of your time to produce 2x with 50% of the hours.'
        } satisfies BilingualLax<string>
      },
      {
        n: 6,
        name: {
          fr: 'Execution System Template™',
          en: 'Execution System Template™'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Système d'exécution complet : pipeline d'output, rituel de planification hebdo, batching, no-decision zones.",
          en: 'Complete execution system : output pipeline, weekly planning ritual, batching, no-decision zones.'
        } satisfies BilingualLax<string>
      },
      {
        n: 7,
        name: {
          fr: 'Personal Rule Stack™',
          en: 'Personal Rule Stack™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Tes 12 règles personnelles pré-câblées qui éliminent la fatigue décisionnelle au quotidien.',
          en: 'Your 12 pre-wired personal rules that eliminate daily decision fatigue.'
        } satisfies BilingualLax<string>
      },
      {
        n: 8,
        name: {
          fr: 'Hourly Rate Calculator™ + Weekly Architecture Template™',
          en: 'Hourly Rate Calculator™ + Weekly Architecture Template™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Ton vrai taux horaire calculé sur ton output, pas sur ton agenda. Architecture de semaine alignée sur ce taux.',
          en: 'Your true hourly rate calculated on your output, not your calendar. Weekly architecture aligned with this rate.'
        } satisfies BilingualLax<string>
      },
      {
        n: 9,
        name: {
          fr: 'Energy Optimization Protocol™',
          en: 'Energy Optimization Protocol™'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Protocole d'énergie cognitive : sommeil, nutrition, mouvement, supplémentation ciblée pour entrepreneurs à haute exigence.",
          en: 'Cognitive energy protocol : sleep, nutrition, movement, targeted supplementation for high-demand entrepreneurs.'
        } satisfies BilingualLax<string>
      },
      {
        n: 10,
        name: {
          fr: 'Recovery Protocol Map™',
          en: 'Recovery Protocol Map™'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Architecture de récupération quotidienne + hebdomadaire + trimestrielle — pour tenir 5 ans, pas 5 mois.',
          en: 'Daily + weekly + quarterly recovery architecture — to last 5 years, not 5 months.'
        } satisfies BilingualLax<string>
      },
      {
        n: 11,
        name: {
          fr: 'Sharp State Activation Protocol™',
          en: 'Sharp State Activation Protocol™'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Protocole d'activation cognitive à la demande — 12 minutes pour entrer en état de performance maximale avant un moment clé.",
          en: 'On-demand cognitive activation protocol — 12 minutes to enter peak performance state before a key moment.'
        } satisfies BilingualLax<string>
      },
      {
        n: 12,
        name: {
          fr: 'Personal Operating System™ (IOS + ESD + ECO)',
          en: 'Personal Operating System™ (IOS + ESD + ECO)'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Ton OS personnel final consolidé : identité × exécution × énergie en un seul document de référence vivant.',
          en: 'Your final consolidated personal OS : identity × execution × energy in a single living reference document.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 11. BONUS ─────────────────────────────────────────────────────────────
  bonus: {
    headline: {
      fr: '6 bonus inclus — valeur 1 882$',
      en: '6 bonuses included — $1,882 value'
    } satisfies BilingualLax<string>,
    valueLabel: {
      fr: 'Valeur',
      en: 'Value'
    } satisfies BilingualLax<string>,
    items: [
      {
        name: {
          fr: 'Communauté privée The Activation™ — 30 jours',
          en: 'Private community The Activation™ — 30 days'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Accès groupe fermé post-bootcamp pour ancrer les nouveaux protocoles avec les autres participants. 30 jours d'accompagnement collectif.",
          en: 'Closed group access post-bootcamp to anchor new protocols with other participants. 30 days of collective support.'
        } satisfies BilingualLax<string>,
        value: { fr: '497$', en: '$497' } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Template Operating System™ Notion',
          en: 'Operating System™ Notion Template'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Workspace Notion clé en main — tes 12 livrables intégrés dans un dashboard vivant tu utilises au quotidien.',
          en: 'Turnkey Notion workspace — your 12 deliverables integrated in a living dashboard you use daily.'
        } satisfies BilingualLax<string>,
        value: { fr: '297$', en: '$297' } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Bibliothèque Biohacking Performance™ — 20 protocoles',
          en: 'Performance Biohacking Library™ — 20 protocols'
        } satisfies BilingualLax<string>,
        description: {
          fr: '20 protocoles de biohacking cognitif éprouvés — focus, sommeil, récupération, sharp state, activation matinale.',
          en: '20 proven cognitive biohacking protocols — focus, sleep, recovery, sharp state, morning activation.'
        } satisfies BilingualLax<string>,
        value: { fr: '197$', en: '$197' } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Enregistrements complets du bootcamp — 90 jours',
          en: 'Complete bootcamp recordings — 90 days'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Vidéos HD intégrales des 3 jours, accessibles 90 jours pour réviser, ancrer, partager avec ton équipe clé.',
          en: 'Full HD videos of all 3 days, accessible 90 days to review, anchor, share with your key team.'
        } satisfies BilingualLax<string>,
        value: { fr: '497$', en: '$497' } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Session de calibration J+7',
          en: 'Calibration session — Day 7'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Session live collective 7 jours après le bootcamp — diagnostiquer les frictions d'implémentation, recalibrer.",
          en: 'Live group session 7 days after bootcamp — diagnose implementation friction, recalibrate.'
        } satisfies BilingualLax<string>,
        value: { fr: '297$', en: '$297' } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Calculateur de Performance 90 jours',
          en: '90-day Performance Calculator'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Outil de tracking automatisé pour mesurer ton ROI réel sur 90 jours : output, énergie, qualité de décision.',
          en: 'Automated tracking tool to measure your real ROI over 90 days : output, energy, decision quality.'
        } satisfies BilingualLax<string>,
        value: { fr: '97$', en: '$97' } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 12. VALEUR & PRIX ─────────────────────────────────────────────────────
  valuePrice: {
    eyebrow: {
      fr: 'Investissement',
      en: 'Investment'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Valeur totale 5 882$. Prix de lancement 1 497$.',
      en: 'Total value $5,882. Launch price $1,497.'
    } satisfies BilingualLax<string>,
    valueRows: [
      {
        label: {
          fr: 'Bootcamp 3 jours intensifs + 12 livrables',
          en: '3-day intensive bootcamp + 12 deliverables'
        } satisfies BilingualLax<string>,
        value: { fr: '4 000$', en: '$4,000' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Communauté privée The Activation™ — 30 jours',
          en: 'Private community The Activation™ — 30 days'
        } satisfies BilingualLax<string>,
        value: { fr: '497$', en: '$497' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Template Operating System™ Notion',
          en: 'Operating System™ Notion Template'
        } satisfies BilingualLax<string>,
        value: { fr: '297$', en: '$297' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Bibliothèque Biohacking Performance™ — 20 protocoles',
          en: 'Performance Biohacking Library™ — 20 protocols'
        } satisfies BilingualLax<string>,
        value: { fr: '197$', en: '$197' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Enregistrements complets — 90 jours',
          en: 'Complete recordings — 90 days'
        } satisfies BilingualLax<string>,
        value: { fr: '497$', en: '$497' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Session de calibration J+7',
          en: 'Calibration session — Day 7'
        } satisfies BilingualLax<string>,
        value: { fr: '297$', en: '$297' } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Calculateur de Performance 90 jours',
          en: '90-day Performance Calculator'
        } satisfies BilingualLax<string>,
        value: { fr: '97$', en: '$97' } satisfies BilingualLax<string>
      }
    ] as const,
    valueTotal: {
      fr: '5 882$',
      en: '$5,882'
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
      fr: 'Prix de lancement',
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
    paymentOptions: [
      {
        fr: 'Comptant — 1 997$ (prix régulier)',
        en: 'In full — $1,997 (regular price)'
      },
      {
        fr: '2 paiements de 1 099$ (sans frais)',
        en: '2 payments of $1,099 (no fees)'
      },
      {
        fr: 'VIP — 2 997$ (+1h session individuelle + révision de ton Operating System)',
        en: 'VIP — $2,997 (+1h private session + Operating System review)'
      }
    ] as const satisfies readonly BilingualLax<string>[],
    ctaPrimaryLabel: {
      fr: 'Sois notifié des dates et tarifs early-bird',
      en: 'Be notified of dates and early-bird pricing'
    } satisfies BilingualLax<string>,
    ctaSecondaryLabel: {
      fr: 'Poser une question',
      en: 'Ask a question'
    } satisfies BilingualLax<string>,
    preLaunchNote: {
      fr: 'Inscriptions à venir. Sois notifié en priorité des dates de la première cohorte et du tarif early-bird.',
      en: 'Registrations opening soon. Be notified first of the first cohort dates and early-bird pricing.'
    } satisfies BilingualLax<string>
  },

  // ─── 13. PREUVE & CRÉDIBILITÉ JONAS ────────────────────────────────────────
  proof: {
    eyebrow: {
      fr: 'Qui dirige ce bootcamp',
      en: 'Who leads this bootcamp'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Jonas Diop — Architecte d'affaires et engineer de performance humaine.",
      en: 'Jonas Diop — Business architect and human performance engineer.'
    } satisfies BilingualLax<string>,
    stats: [
      {
        value: { fr: '15+ ans', en: '15+ years' } satisfies BilingualLax<string>,
        label: { fr: "d'expérience", en: 'of experience' } satisfies BilingualLax<string>
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
        fr: "Architecte d'affaires — DIOP Stratégies Internationales Inc.",
        en: 'Business architect — DIOP Stratégies Internationales Inc.'
      },
      {
        fr: 'Créateur du Game Changer Protocol™',
        en: 'Creator of the Game Changer Protocol™'
      },
      {
        fr: 'CDT™ — Compression Dynamique du Temps, déposé OPIC',
        en: 'CDT™ — Dynamic Time Compression, registered with OPIC'
      },
      {
        fr: 'Méthode RISE™ — Reset · Ignite · Scale · Elevate (bootcamps Trilogie)',
        en: 'RISE™ method — Reset · Ignite · Scale · Elevate (Trilogie bootcamps)'
      },
      {
        fr: 'Fondateur Gamechanger Scaling',
        en: 'Founder of Gamechanger Scaling'
      },
      {
        fr: 'Hôte du podcast The Game Changer',
        en: 'Host of The Game Changer podcast'
      }
    ] as const satisfies readonly BilingualLax<string>[],
    quote: {
      fr: "The Activation™ n'est pas un programme sur comment te motiver davantage. C'est un programme sur comment construire un système humain qui performe indépendamment de ta motivation. La motivation fluctue. Le système, lui, tient.",
      en: 'The Activation™ is not a program about motivating yourself more. It is a program about building a human system that performs independently of your motivation. Motivation fluctuates. The system holds.'
    } satisfies BilingualLax<string>,
    quoteAttribution: {
      fr: 'Jonas Diop',
      en: 'Jonas Diop'
    } satisfies BilingualLax<string>
  },

  // ─── 14. OBJECTIONS — 5 verbatim PDF §13 ───────────────────────────────────
  objections: {
    eyebrow: {
      fr: 'Tes objections — répondues',
      en: 'Your objections — answered'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Ce que tu vas te dire pour ne pas venir — et pourquoi ce n'est pas la bonne réponse.",
      en: 'What you will tell yourself to not come — and why it is not the right answer.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'temps',
        objection: {
          fr: "Je n'ai pas le temps pour 3 jours.",
          en: 'I do not have time for 3 days.'
        } satisfies BilingualLax<string>,
        response: {
          fr: "C'est exactement parce que tu n'as pas le temps que tu en as besoin. Tu plafonnes à 50-70h/semaine pour un output qui ne justifie plus ces heures. Le bootcamp t'installe le système qui va te rendre 10-15h par semaine en 90 jours. 3 jours pour récupérer des centaines d'heures dans l'année. Le calcul est évident.",
          en: 'It is exactly because you do not have time that you need this. You plateau at 50-70 hours/week for output that no longer justifies those hours. The bootcamp installs the system that will give you back 10-15 hours per week within 90 days. 3 days to recover hundreds of hours in the year. The math is obvious.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'argent',
        objection: {
          fr: "1 497$, c'est cher pour un bootcamp.",
          en: '$1,497 is expensive for a bootcamp.'
        } satisfies BilingualLax<string>,
        response: {
          fr: "À ton vrai taux horaire (qu'on calcule ensemble en J2), 1 497$ = quelques heures d'output récupérées. La vraie question n'est pas le prix — c'est ce que te coûte de continuer à plafonner 12 mois de plus. Le coût d'inaction écrase systématiquement le coût d'action à ton niveau.",
          en: 'At your true hourly rate (which we calculate together on Day 2), $1,497 equals a few hours of recovered output. The real question is not the price — it is what it costs you to keep plateauing for 12 more months. The cost of inaction systematically crushes the cost of action at your level.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'autoformation',
        objection: {
          fr: 'Je peux apprendre tout ça seul avec des livres et des podcasts.',
          en: 'I can learn all this alone with books and podcasts.'
        } satisfies BilingualLax<string>,
        response: {
          fr: "Tu en as déjà consommé des dizaines. Pose-toi honnêtement la question : combien de tes routines tiennent encore aujourd'hui ? L'auto-formation te donne l'information. The Activation™ te donne le système intégré + l'environnement + la pression positive qui fait que ça tient. Sans environnement, l'info ne devient jamais identité.",
          en: 'You have already consumed dozens. Ask yourself honestly : how many of your routines still hold today? Self-learning gives you information. The Activation™ gives you the integrated system + environment + positive pressure that makes it hold. Without environment, information never becomes identity.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'pret',
        objection: {
          fr: "Je ne suis peut-être pas encore prêt — je devrais d'abord régler X avant.",
          en: 'Maybe I am not ready yet — I should first handle X.'
        } satisfies BilingualLax<string>,
        response: {
          fr: "Le sentiment de ne pas être prêt est le symptôme exact que ton OS actuel a atteint sa limite. Tu ne seras jamais plus prêt en continuant avec le même système. Les entrepreneurs qui attendent d'être prêts attendent souvent 2-3 ans de plus pour le même résultat — ou ne le font jamais.",
          en: 'The feeling of not being ready is the exact symptom that your current OS has hit its limit. You will never be more ready by continuing with the same system. Entrepreneurs who wait to be ready often wait 2-3 more years for the same result — or never do it.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'resultats',
        objection: {
          fr: 'Comment je sais que ça va vraiment marcher pour moi ?',
          en: 'How do I know it will really work for me?'
        } satisfies BilingualLax<string>,
        response: {
          fr: "Tu ne le sais pas à 100% — personne ne peut te le garantir intellectuellement. Mais : (1) la méthode RISE™ + CDT™ a déjà été appliquée à des centaines d'entrepreneurs établis à ton niveau, (2) tu repars avec un Operating System personnalisé que tu peux tester immédiatement, (3) garantie 100% sur 30 jours (cf. ci-dessous). Le risque réel n'est pas dans le bootcamp. Il est dans ne pas venir.",
          en: 'You do not know it 100% — no one can intellectually guarantee it. But : (1) RISE™ + CDT™ has already been applied to hundreds of established entrepreneurs at your level, (2) you leave with a personalized Operating System you can test immediately, (3) 100% guarantee over 30 days (see below). The real risk is not in the bootcamp. It is in not coming.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 15. GARANTIE 100% ─────────────────────────────────────────────────────
  guarantee: {
    eyebrow: {
      fr: 'Garantie 100% — 30 jours',
      en: '100% guarantee — 30 days'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Si dans les 30 jours après le bootcamp tu peux honnêtement dire que tu n'as rien activé — on te rembourse intégralement.",
      en: 'If within 30 days after the bootcamp you can honestly say nothing was activated — we refund you in full.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Pas de petites lignes. Pas de procédure compliquée. Tu envoies un email, tu expliques ce que tu as appliqué, on rembourse en 7 jours.\n\nPourquoi cette garantie tient ? Parce qu'on ne vend pas une promesse — on vend un système intégré, testé, déployé. Si la méthode ne s'active pas chez toi malgré une vraie tentative d'implémentation, c'est notre échec, pas le tien.",
      en: 'No small print. No complicated procedure. You send an email, you explain what you applied, we refund within 7 days.\n\nWhy does this guarantee hold? Because we are not selling a promise — we are selling an integrated, tested, deployed system. If the method does not activate for you despite a real implementation attempt, it is our failure, not yours.'
    } satisfies BilingualLax<string>
  },

  // ─── 16. URGENCE & RARETÉ ──────────────────────────────────────────────────
  urgency: {
    eyebrow: {
      fr: 'Urgence & rareté',
      en: 'Urgency & scarcity'
    } satisfies BilingualLax<string>,
    headline: {
      fr: '20 places maximum. Pour une raison.',
      en: '20 spots maximum. For a reason.'
    } satisfies BilingualLax<string>,
    body: {
      fr: "Au-delà de 20 personnes dans la salle, l'engineering de performance humaine devient une conférence. À 20 ou moins, ça reste un atelier où chaque participant est calibré individuellement.\n\nLes early-bird premiers inscrits accèdent au tarif de lancement 1 497$ — qui passera à 1 997$ dès l'ouverture publique. Il n'y a aucune raison stratégique d'attendre.",
      en: 'Beyond 20 people in the room, human performance engineering becomes a conference. At 20 or fewer, it stays a workshop where each participant is calibrated individually.\n\nEarly-bird registrants access the launch price of $1,497 — which moves to $1,997 at public opening. There is no strategic reason to wait.'
    } satisfies BilingualLax<string>,
    spotsLabel: {
      fr: 'Places restantes',
      en: 'Spots remaining'
    } satisfies BilingualLax<string>,
    spotsValue: {
      fr: '20 / 20',
      en: '20 / 20'
    } satisfies BilingualLax<string>
  },

  // ─── 17. FAQ — 6 questions verbatim PDF §16 ────────────────────────────────
  faq: {
    eyebrow: {
      fr: 'Questions fréquentes',
      en: 'Frequently asked questions'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Tout ce que tu te demandes avant de t'inscrire.",
      en: 'Everything you wonder before registering.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'differance-mastermind',
        q: {
          fr: 'Quelle est la différence avec un mastermind classique ou un retreat de coaching ?',
          en: 'What is the difference with a classic mastermind or coaching retreat?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Les masterminds traditionnels travaillent ton business. The Activation™ travaille la machine qui pilote ton business — toi. Les retreats de coaching te donnent de l'inspiration et des intentions ; The Activation™ te livre un Operating System personnel intégré que tu utilises lundi matin. C'est de l'engineering de performance humaine, pas du coaching motivationnel.",
          en: 'Traditional masterminds work on your business. The Activation™ works on the machine that runs your business — you. Coaching retreats give you inspiration and intentions ; The Activation™ delivers an integrated personal Operating System you use Monday morning. It is human performance engineering, not motivational coaching.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'niveau-revenu',
        q: {
          fr: 'Est-ce que je peux venir si je suis sous 15 000$/mois ?',
          en: 'Can I come if I am under $15,000/month?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Le bootcamp est calibré pour entrepreneurs qui plafonnent dans la fourchette 15-50K$/mois — c'est la zone où l'OS personnel devient le facteur limitant principal. Si tu es en deça, regarde plutôt An Army of One™ (5-25K$) qui adresse d'abord chaos interne + système. Au-delà de 50K$/mois, écris-nous : on te calibrera vers le bon format.",
          en: 'The bootcamp is calibrated for entrepreneurs who plateau in the $15-50K/month range — that is where the personal OS becomes the main limiting factor. If you are below that, look at An Army of One™ ($5-25K) which first addresses internal chaos + system. Above $50K/month, write us : we will calibrate you to the right format.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'lieu',
        q: {
          fr: 'Où aura lieu le bootcamp et faut-il prévoir de loger ?',
          en: 'Where will the bootcamp take place and do I need to plan lodging?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Montréal, dans un lieu confidentiel premium communiqué aux inscrits 30 jours avant l'événement. Hébergement non inclus pour préserver ta liberté de choix — on partage une short list d'hôtels partenaires à tarif négocié à proximité immédiate.",
          en: 'Montréal, in a confidential premium venue communicated to registrants 30 days before the event. Lodging not included to preserve your freedom of choice — we share a short list of partner hotels at negotiated rates in immediate proximity.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'horaires',
        q: {
          fr: 'À quoi ressemblent concrètement les 3 jours en terme de rythme ?',
          en: 'What do the 3 days concretely look like in terms of pace?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Format intensif mais structuré : 9h-18h chaque jour avec breaks, lunch inclus, blocs de travail individuel + restitutions collectives. Les soirées sont libres — on recommande de ne pas planifier de travail externe sur les 3 jours pour permettre l'intégration.",
          en: 'Intensive but structured format : 9am-6pm each day with breaks, lunch included, individual work blocks + collective debriefs. Evenings are free — we recommend not planning any external work during the 3 days to allow integration.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'suivi',
        q: {
          fr: 'Y a-t-il un suivi après le bootcamp ?',
          en: 'Is there follow-up after the bootcamp?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Oui : (1) accès à la communauté privée pendant 30 jours, (2) session live de calibration à J+7 pour diagnostiquer tes premières frictions d'implémentation, (3) enregistrements complets accessibles 90 jours, (4) outil de tracking de performance 90 jours. La version VIP ajoute 1h de session individuelle + révision de ton OS.",
          en: 'Yes : (1) private community access for 30 days, (2) live calibration session on Day 7 to diagnose your first implementation friction, (3) complete recordings accessible 90 days, (4) 90-day performance tracking tool. The VIP version adds 1h of private session + OS review.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'difference-trilogie',
        q: {
          fr: 'Quelle est la différence avec les 2 autres bootcamps de la Trilogie ?',
          en: 'What is the difference with the other 2 Trilogie bootcamps?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "An Army of One™ (997$) adresse le chaos interne pour entrepreneurs solo 5-25K$. The Edge™ (1 497$) adresse l'invisibilité + autorité pour coachs/experts 5-20K$. The Activation™ (1 497$) adresse le plafond cognitif + identitaire pour entrepreneurs établis 15-50K$. Trois blocages distincts, trois bootcamps distincts — pas de redondance.",
          en: 'An Army of One™ ($997) addresses internal chaos for solo entrepreneurs $5-25K. The Edge™ ($1,497) addresses invisibility + authority for coaches/experts $5-20K. The Activation™ ($1,497) addresses cognitive + identity ceiling for established entrepreneurs $15-50K. Three distinct blocks, three distinct bootcamps — no redundancy.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 18. TÉMOIGNAGES — placeholder honnête ─────────────────────────────────
  testimonials: {
    eyebrow: {
      fr: 'Retours des participants',
      en: 'Participant feedback'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Première édition en cours.',
      en: 'First edition in progress.'
    } satisfies BilingualLax<string>,
    pendingNote: {
      fr: 'Première édition en cours. Retours publiés après le bootcamp. Aucun témoignage inventé — on préfère le silence honnête.',
      en: 'First edition in progress. Feedback published after the bootcamp. No fabricated testimonials — we prefer honest silence.'
    } satisfies BilingualLax<string>
  },

  // ─── 19. CTA FINAL — 2 colonnes Sans/Avec ──────────────────────────────────
  finalCta: {
    eyebrow: {
      fr: 'Le choix',
      en: 'The choice'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Tu as upgradé ton business. Il est temps d'upgrader toi.",
      en: 'You have upgraded your business. It is time to upgrade yourself.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Tu peux continuer 12 mois de plus avec ton OS actuel — ou tu peux le recalibrer en 3 jours. Voilà ce qui t'attend de chaque côté.",
      en: 'You can keep going 12 more months with your current OS — or you can recalibrate it in 3 days. Here is what awaits you on each side.'
    } satisfies BilingualLax<string>,
    sans: {
      title: {
        fr: 'Sans The Activation™',
        en: 'Without The Activation™'
      } satisfies BilingualLax<string>,
      items: [
        {
          fr: "Tu continues à performer par force brute — et la facture cognitive s'accumule.",
          en: 'You keep performing by brute force — and the cognitive bill accumulates.'
        },
        {
          fr: "Tu plafonnes au même revenu pour 50% d'effort en plus.",
          en: 'You plateau at the same revenue for 50% more effort.'
        },
        {
          fr: 'La fatigue décisionnelle gagne — tu reportes ce qui compte.',
          en: 'Decision fatigue wins — you postpone what matters.'
        },
        {
          fr: "Tu sais qu'il y a une version plus puissante de toi — elle reste en veille.",
          en: 'You know there is a more powerful version of you — it stays on standby.'
        }
      ] as const satisfies readonly BilingualLax<string>[]
    },
    avec: {
      title: {
        fr: 'Avec The Activation™',
        en: 'With The Activation™'
      } satisfies BilingualLax<string>,
      items: [
        {
          fr: 'Tu opères depuis un Operating System personnel intégré : identité × exécution × énergie.',
          en: 'You operate from an integrated personal Operating System : identity × execution × energy.'
        },
        {
          fr: 'Tu produis 2x avec 50% des heures grâce à la CDT™ appliquée à ton temps.',
          en: 'You produce 2x with 50% of the hours thanks to CDT™ applied to your time.'
        },
        {
          fr: 'Tes décisions sont pré-câblées — la fatigue cognitive ne te freine plus.',
          en: 'Your decisions are pre-wired — cognitive fatigue no longer slows you.'
        },
        {
          fr: 'La version plus puissante de toi devient ton état de base — pas un état exceptionnel.',
          en: 'The more powerful version of you becomes your baseline state — not an exceptional state.'
        }
      ] as const satisfies readonly BilingualLax<string>[]
    },
    recap: {
      title: {
        fr: 'Ce que tu emportes',
        en: 'What you take with you'
      } satisfies BilingualLax<string>,
      deliverablesLabel: {
        fr: '12 livrables',
        en: '12 deliverables'
      } satisfies BilingualLax<string>,
      bonusLabel: {
        fr: '6 bonus inclus',
        en: '6 bonuses included'
      } satisfies BilingualLax<string>,
      guaranteeLabel: {
        fr: 'Garantie 100% — 30 jours',
        en: '100% guarantee — 30 days'
      } satisfies BilingualLax<string>
    },
    quote: {
      fr: "Tu as upgradé ton business. Il est temps d'upgrader toi.",
      en: 'You have upgraded your business. It is time to upgrade yourself.'
    } satisfies BilingualLax<string>,
    quoteAttribution: {
      fr: 'Jonas Diop',
      en: 'Jonas Diop'
    } satisfies BilingualLax<string>,
    ctaPrimaryLabel: {
      fr: 'Sois notifié des dates et tarifs early-bird',
      en: 'Be notified of dates and early-bird pricing'
    } satisfies BilingualLax<string>,
    notifyEmailLabel: {
      fr: 'Ton email professionnel',
      en: 'Your professional email'
    } satisfies BilingualLax<string>,
    notifyEmailPlaceholder: {
      fr: 'toi@exemple.com',
      en: 'you@example.com'
    } satisfies BilingualLax<string>,
    notifySubmitLabel: {
      fr: 'Être notifié',
      en: 'Be notified'
    } satisfies BilingualLax<string>,
    notifySuccessLabel: {
      fr: "Reçu. On te contacte dès l'ouverture de la première cohorte.",
      en: 'Received. We will contact you as soon as the first cohort opens.'
    } satisfies BilingualLax<string>
  },

  // ─── 20. TRILOGIE FOOTER CROSS-LINK ────────────────────────────────────────
  trilogieFooter: {
    eyebrow: {
      fr: 'La Trilogie',
      en: 'The Trilogie'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Les 3 bootcamps Trilogie',
      en: 'The 3 Trilogie bootcamps'
    } satisfies BilingualLax<string>,
    subtitle: {
      fr: 'Trois bootcamps, trois blocages distincts. The Activation™ adresse le plafond cognitif et identitaire des entrepreneurs établis.',
      en: 'Three bootcamps, three distinct blocks. The Activation™ addresses the cognitive and identity ceiling of established entrepreneurs.'
    } satisfies BilingualLax<string>
  }
} as const;
