import type { BilingualLax } from '@/lib/i18n/types';

/**
 * anArmyOfOne.ts — Sous-page bootcamp /evenements/bootcamps/an-army-of-one.
 *
 * Source de vérité : PDF Trilogie "An Army of One™" (verbatim 17 sections) +
 * formulaire signé Jonas (stats 15+ ans · 857 entrepreneurs · 31M$) +
 * brief v3 §3.6 (anti-cannibalisation + mode pré-lancement).
 *
 * Mode pré-lancement actif :
 *   - Prix affichés (997$ / 1 497$ / 1 997$ VIP)
 *   - Stripe NON câblé — CTA "Sois notifié des inscriptions"
 *   - Témoignages = placeholder honnête (première édition)
 *   - VSL = placeholder élégant (vidéo à venir)
 *   - Dates = "Annonce prochaine"
 *   - Compteur countdown = désactivé
 *
 * Tone : TU partout (audience entrepreneurs solos 5-25K$/mois).
 * Méthode : RISE™ (Reset · Ignite · Scale · Elevate) — méthode propriétaire
 * bootcamps Trilogie, coexiste avec CDT™ + Game Changer Protocol™ (brand chapeau).
 */

export const anArmyOfOneCopy = {
  meta: {
    // Canonical SEO title (<=70 char). Verbatim brand "An Army of One™".
    title: {
      fr: "An Army of One™ — Bootcamp système d'exécution · Jonas Diop",
      en: 'An Army of One™ — Execution System Bootcamp · Jonas Diop'
    } satisfies BilingualLax<string>,
    // Description : <=160 char, includes méthode RISE™ + price + 20 spots.
    description: {
      fr: "Bootcamp 3 jours · méthode RISE™ pour bâtir ton système d'exécution. Entrepreneurs solos, coachs, experts qui performent par éclairs. 20 places, dès 997$.",
      en: '3-day bootcamp · RISE™ method to build your execution system. Solo entrepreneurs, coaches, experts who perform in flashes. 20 spots, from $997.'
    } satisfies BilingualLax<string>
  },

  // ─── 1. STICKY BAR ───────────────────────────────────────────────────────
  stickyBar: {
    emoji: '◆',
    places: 20,
    status: {
      fr: 'Inscriptions à venir · première cohorte',
      en: 'Registrations coming · first cohort'
    } satisfies BilingualLax<string>,
    priceLaunch: {
      fr: '997$ CAD',
      en: 'CAD $997'
    } satisfies BilingualLax<string>,
    priceRegular: {
      fr: '1 497$',
      en: '$1,497'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Sois notifié des dates',
      en: 'Get notified of dates'
    } satisfies BilingualLax<string>,
    placesLabel: {
      fr: 'Places disponibles',
      en: 'Spots available'
    } satisfies BilingualLax<string>
  },

  // ─── 2. HERO ─────────────────────────────────────────────────────────────
  hero: {
    eyebrow: {
      fr: 'Pour les entrepreneurs solos, coachs et experts qui performent par éclairs mais jamais de manière constante',
      en: 'For solo entrepreneurs, coaches and experts who perform in flashes but never consistently'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'En 3 jours intensifs, deviens une machine à performer — seul, sans équipe, sans excuse.',
      en: 'In 3 intensive days, become a performance machine — solo, no team, no excuse.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Tu sais quoi faire. Le problème, c'est que tu ne le fais pas de manière cohérente. An Army of One™ est le bootcamp qui change ça — pour toujours.",
      en: 'You know what to do. The problem is you do not do it consistently. An Army of One™ is the bootcamp that changes that — for good.'
    } satisfies BilingualLax<string>,
    microProofLabel: {
      fr: 'Sois notifié des inscriptions',
      en: 'Get notified of registrations'
    } satisfies BilingualLax<string>,
    emailPlaceholder: {
      fr: 'ton@email.com',
      en: 'your@email.com'
    } satisfies BilingualLax<string>,
    submitLabel: {
      fr: "M'inscrire à la liste",
      en: 'Join the list'
    } satisfies BilingualLax<string>,
    pendingNote: {
      fr: "Capture email branchée à l'ouverture · early-bird notifié en priorité",
      en: 'Email capture wired at launch · early-bird notified first'
    } satisfies BilingualLax<string>
  },

  // ─── 3. VSL PLACEHOLDER ──────────────────────────────────────────────────
  vsl: {
    eyebrow: {
      fr: 'Regarde avant de lire',
      en: 'Watch before reading'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Avant de lire quoi que ce soit d'autre — regarde cette vidéo (12 min).",
      en: 'Before reading anything else — watch this video (12 min).'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Jonas te parle directement. Ce qu'il dit dans cette vidéo, tu ne l'as jamais entendu de cette façon.",
      en: 'Jonas talks to you directly. What he says in this video, you have never heard it this way.'
    } satisfies BilingualLax<string>,
    placeholderLabel: {
      fr: 'Vidéo à venir — Sois notifié de la publication',
      en: 'Video coming — Get notified of release'
    } satisfies BilingualLax<string>,
    durationLabel: {
      fr: '12 min · Vidéo signature',
      en: '12 min · Signature video'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: "Réserver ma place dès l'ouverture",
      en: 'Book my spot at launch'
    } satisfies BilingualLax<string>,
    ctaDisabledNote: {
      fr: 'Inscriptions ouvertes au lancement de la première cohorte',
      en: 'Registrations open at first cohort launch'
    } satisfies BilingualLax<string>
  },

  // ─── 4. APRÈS LA VSL — transition ────────────────────────────────────────
  transition: {
    body: {
      fr: "Ce que tu viens de regarder n'est pas un pitch. C'est un diagnostic. Si tu as reconnu un fragment de toi dans ce que dit Jonas — continue. Ce qui suit est exactement ce dont tu as besoin.",
      en: 'What you just watched is not a pitch. It is a diagnosis. If you recognized a fragment of yourself in what Jonas says — keep going. What follows is exactly what you need.'
    } satisfies BilingualLax<string>
  },

  // ─── 5. MIROIR — 10 cases ☑ (verbatim PDF §5) ────────────────────────────
  mirror: {
    eyebrow: {
      fr: 'Le miroir',
      en: 'The mirror'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Est-ce que c'est toi ?",
      en: 'Is this you?'
    } satisfies BilingualLax<string>,
    items: {
      fr: [
        'Tu finis tes journées épuisé sans avoir avancé sur ce qui compte vraiment',
        "Ta productivité dépend de ton humeur du matin — certains jours tu es en feu, d'autres tu es inexistant",
        'Tu reporte les mêmes tâches importantes depuis des semaines',
        "Tu as essayé Notion, des planners, des habitudes matinales — rien n'a tenu plus de 3 semaines",
        "Tu consommes du contenu sur la performance mais tu n'exécutes pas ce que tu sais déjà",
        'Tu te sens occupé mais pas efficace',
        "Tu n'as aucune routine stable depuis plus d'un mois",
        "Tu n'as pas de plan 90 jours clair en ce moment",
        'Tu as des idées brillantes mais peu de suivi concret',
        'Tu ne mesures rien — ni ton temps, ni ton énergie, ni tes progrès'
      ] as readonly string[],
      en: [
        'You end your days exhausted without having moved the needle on what truly matters',
        'Your productivity depends on your morning mood — some days you are on fire, others you are absent',
        'You have been postponing the same important tasks for weeks',
        'You tried Notion, planners, morning habits — nothing held more than 3 weeks',
        'You consume performance content but you do not execute what you already know',
        'You feel busy but not effective',
        'You have not held a stable routine for more than a month',
        'You do not have a clear 90-day plan right now',
        'You have brilliant ideas but little concrete follow-through',
        'You measure nothing — not your time, not your energy, not your progress'
      ] as readonly string[]
    } satisfies BilingualLax<readonly string[]>,
    transitionPhrase: {
      fr: "Le problème n'est pas ton manque de discipline. C'est que personne ne t'a encore donné le système que tu mérites.",
      en: 'The problem is not your lack of discipline. It is that no one has yet given you the system you deserve.'
    } satisfies BilingualLax<string>
  },

  // ─── 6. SANS ACTION (dans 6 mois) ────────────────────────────────────────
  sansAction: {
    eyebrow: {
      fr: 'Sans action — dans 6 mois',
      en: 'Without action — in 6 months'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Tu connais déjà la suite.',
      en: 'You already know how it goes.'
    } satisfies BilingualLax<string>,
    body: {
      fr: 'Tu auras les mêmes journées réactives. Le même écart entre tes ambitions et ta réalité. Les mêmes projets reportés. Et la même question qui revient :',
      en: 'You will have the same reactive days. The same gap between your ambitions and your reality. The same postponed projects. And the same question coming back:'
    } satisfies BilingualLax<string>,
    pullQuote: {
      fr: "« Pourquoi je n'arrive pas à m'y tenir ? »",
      en: '"Why can\'t I stick to it?"'
    } satisfies BilingualLax<string>,
    conclusion: {
      fr: "Ce n'est pas une malédiction. C'est un manque de système. Et ça se répare. En 3 jours.",
      en: 'It is not a curse. It is a missing system. And it can be repaired. In 3 days.'
    } satisfies BilingualLax<string>
  },

  // ─── 7. SOLUTION — 3 jours détaillés (verbatim PDF §7) ───────────────────
  solution: {
    eyebrow: {
      fr: 'La solution · RISE™',
      en: 'The solution · RISE™'
    } satisfies BilingualLax<string>,
    headline: {
      fr: '3 jours. 3 transformations. Un système qui tient.',
      en: '3 days. 3 transformations. A system that holds.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'An Army of One™ est construit sur la méthode RISE™ — Reset · Ignite · Scale · Elevate. Chaque jour résout un fragment du chaos. À la fin, tu repars avec un système opérationnel, pas une inspiration.',
      en: 'An Army of One™ is built on the RISE™ method — Reset · Ignite · Scale · Elevate. Each day resolves a fragment of the chaos. At the end, you leave with an operational system, not inspiration.'
    } satisfies BilingualLax<string>,
    days: [
      {
        id: 'j1-clarte-identite',
        label: {
          fr: 'Jour 1',
          en: 'Day 1'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Clarté & Identité',
          en: 'Clarity & Identity'
        } satisfies BilingualLax<string>,
        principle: {
          fr: "Tu ne peux pas scaler ce que tu n'as pas d'abord clarifié.",
          en: 'You cannot scale what you have not first clarified.'
        } satisfies BilingualLax<string>,
        modules: {
          fr: [
            "Score d'alignement sur 50 — 5 dimensions (énergie, temps, clarté, focus, structure)",
            'Shadow Journaling — révéler les angles morts qui sabotent ton exécution',
            'MBTI + DISC + SWOT + Ikigaï + Desire Map — diagnostic complet en 1 demi-journée',
            'Vision North Star + 3 objectifs SMARTER mesurables',
            'Identity Shifting + Fiche Identité 2.0 — le narratif personnel qui tient',
            "Lettre au moi du futur + pacte d'engagement signé devant le groupe"
          ] as readonly string[],
          en: [
            'Alignment score out of 50 — 5 dimensions (energy, time, clarity, focus, structure)',
            'Shadow Journaling — surface the blind spots sabotaging your execution',
            'MBTI + DISC + SWOT + Ikigai + Desire Map — full diagnostic in half a day',
            'North Star vision + 3 measurable SMARTER objectives',
            'Identity Shifting + Identity Sheet 2.0 — the personal narrative that holds',
            'Letter to your future self + commitment pact signed in front of the group'
          ] as readonly string[]
        } satisfies BilingualLax<readonly string[]>,
        outcome: {
          fr: 'Fiche Identité 2.0 complète + North Star définie + score initial documenté',
          en: 'Complete Identity Sheet 2.0 + North Star defined + initial score documented'
        } satisfies BilingualLax<string>
      },
      {
        id: 'j2-systeme-structure',
        label: {
          fr: 'Jour 2',
          en: 'Day 2'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Système & Structure',
          en: 'System & Structure'
        } satisfies BilingualLax<string>,
        principle: {
          fr: 'Un entrepreneur sans système travaille pour son chaos.',
          en: 'An entrepreneur without a system works for their chaos.'
        } satisfies BilingualLax<string>,
        modules: {
          fr: [
            'Life OS complet monté en live sur Notion ou Upbase.io',
            'Méthode PARA (Projects · Areas · Resources · Archive) appliquée à ton cas',
            'Brain Dump intégral + catégorisation — tout sort de ta tête',
            'Planning journalier, hebdomadaire, mensuel, annuel — calé sur ton énergie',
            'Habit Tracker + journaling intégrés au Life OS',
            'GPS — Global Performance System pour mesurer ce qui compte',
            'Thématisation des journées + semaine type prête à appliquer',
            'CDT™ SOS (Simplifier · Optimiser · Systématiser) + SIS — audit complet'
          ] as readonly string[],
          en: [
            'Complete Life OS built live on Notion or Upbase.io',
            'PARA method (Projects · Areas · Resources · Archive) applied to your case',
            'Full Brain Dump + categorization — everything leaves your head',
            'Daily, weekly, monthly, yearly planning — calibrated to your energy',
            'Habit Tracker + journaling integrated into the Life OS',
            'GPS — Global Performance System to measure what matters',
            'Day theming + ready-to-use template week',
            'CDT™ SOS (Simplify · Optimize · Systematize) + SIS — full audit'
          ] as readonly string[]
        } satisfies BilingualLax<readonly string[]>,
        outcome: {
          fr: 'Life OS opérationnel + Semaine type thématisée + Audit SOS complété',
          en: 'Operational Life OS + Themed template week + SOS audit completed'
        } satisfies BilingualLax<string>
      },
      {
        id: 'j3-discipline-execution',
        label: {
          fr: 'Jour 3',
          en: 'Day 3'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Discipline, Exécution & Momentum',
          en: 'Discipline, Execution & Momentum'
        } satisfies BilingualLax<string>,
        principle: {
          fr: "La discipline n'est pas une qualité. C'est un système.",
          en: 'Discipline is not a quality. It is a system.'
        } satisfies BilingualLax<string>,
        modules: {
          fr: [
            'Philosophie de la discipline — le shift mental qui rend tout possible',
            'Routine matin — Miracle Morning vs Marathon Morning, le bon choix pour toi',
            'Plan Monk Mode 5 jours — exécution déconnectée totale',
            'Pomodoro + Time Blocking + Focus Mate — stack focus opérationnelle',
            'Biohacking — routine énergétique, friction audit, playlist focus calibrée',
            'Mindset FIRE — plan liberté 3 ans (Financial Independence Retire Early)',
            '12 Week Year + OKR — rythme trimestriel calé',
            'Plan 90 jours · Roadmap Q complète avec timeline et jalons',
            'Stack IA déployé en live — prompt library + automatisations actives'
          ] as readonly string[],
          en: [
            'Discipline philosophy — the mental shift that makes everything possible',
            'Morning routine — Miracle Morning vs Marathon Morning, the right choice for you',
            'Monk Mode 5-day plan — total disconnected execution',
            'Pomodoro + Time Blocking + Focus Mate — operational focus stack',
            'Biohacking — energy routine, friction audit, calibrated focus playlist',
            'FIRE mindset — 3-year freedom plan (Financial Independence Retire Early)',
            '12 Week Year + OKR — calibrated quarterly rhythm',
            '90-day plan · Complete Q Roadmap with timeline and milestones',
            'AI stack deployed live — prompt library + active automations'
          ] as readonly string[]
        } satisfies BilingualLax<readonly string[]>,
        outcome: {
          fr: 'Plan 90 jours opérationnel + Stack IA actif + Score final + Certificat',
          en: 'Operational 90-day plan + Active AI stack + Final score + Certificate'
        } satisfies BilingualLax<string>
      }
    ] as const,
    moduleListLabel: {
      fr: 'Ce que tu travailles',
      en: 'What you work on'
    } satisfies BilingualLax<string>,
    outcomeLabel: {
      fr: 'Tu repars avec',
      en: 'You leave with'
    } satisfies BilingualLax<string>
  },

  // ─── 8. LES 9 LIVRABLES (verbatim PDF §8) ────────────────────────────────
  deliverables: {
    eyebrow: {
      fr: 'Les 9 livrables',
      en: 'The 9 deliverables'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Ce que tu obtiens concrètement.',
      en: 'What you concretely get.'
    } satisfies BilingualLax<string>,
    subtitle: {
      fr: 'Pas des notes. Pas des PDFs. Des livrables opérationnels que tu utilises dès lundi suivant.',
      en: 'No notes. No PDFs. Operational deliverables you use starting Monday.'
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
    items: [
      {
        n: 1,
        name: {
          fr: 'Fiche Identité 2.0',
          en: 'Identity Sheet 2.0'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Ton narratif personnel + comportements ancrés. Le document de référence sur qui tu es maintenant.',
          en: 'Your personal narrative + anchored behaviors. The reference document on who you are now.'
        } satisfies BilingualLax<string>
      },
      {
        n: 2,
        name: {
          fr: 'North Star + 3 objectifs SMARTER',
          en: 'North Star + 3 SMARTER objectives'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Vision claire + cibles mesurables + récompenses calibrées sur ton système nerveux.',
          en: 'Clear vision + measurable targets + rewards calibrated to your nervous system.'
        } satisfies BilingualLax<string>
      },
      {
        n: 3,
        name: {
          fr: 'Life OS complet',
          en: 'Complete Life OS'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Système digital sur Notion ou Upbase opérationnel — projets, énergie, habitudes, mesures.',
          en: 'Operational digital system on Notion or Upbase — projects, energy, habits, metrics.'
        } satisfies BilingualLax<string>
      },
      {
        n: 4,
        name: {
          fr: 'Semaine type thématisée',
          en: 'Themed template week'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Prête à appliquer dès lundi suivant — chaque jour a son intention, ses énergies, ses livrables.',
          en: 'Ready to use starting Monday — each day has its intent, energies, deliverables.'
        } satisfies BilingualLax<string>
      },
      {
        n: 5,
        name: {
          fr: 'Audit SOS complété',
          en: 'Completed SOS audit'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Ce que tu simplifies, ce que tu optimises, ce que tu systématises — décisions actées.',
          en: 'What you simplify, what you optimize, what you systematize — decisions enacted.'
        } satisfies BilingualLax<string>
      },
      {
        n: 6,
        name: {
          fr: 'Routine matin 7 jours',
          en: '7-day morning routine'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Construite et testée pendant le bootcamp — calée sur ton chronotype et tes contraintes réelles.',
          en: 'Built and tested during the bootcamp — calibrated to your chronotype and real constraints.'
        } satisfies BilingualLax<string>
      },
      {
        n: 7,
        name: {
          fr: 'Plan 90 jours · Roadmap Q',
          en: '90-day plan · Q Roadmap'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Avec timeline, jalons, objectifs mesurables — le plan qui guide ton trimestre.',
          en: 'With timeline, milestones, measurable objectives — the plan that guides your quarter.'
        } satisfies BilingualLax<string>
      },
      {
        n: 8,
        name: {
          fr: 'Stack IA déployé',
          en: 'Deployed AI stack'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Prompt library + automatisations actives — tu sors avec ton stack opérationnel, pas avec des liens.',
          en: 'Prompt library + active automations — you leave with your operational stack, not with links.'
        } satisfies BilingualLax<string>
      },
      {
        n: 9,
        name: {
          fr: "Score d'alignement avant/après",
          en: 'Before/after alignment score'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Preuve mesurable de la transformation — sur les 5 dimensions énergie, temps, clarté, focus, structure.',
          en: 'Measurable proof of transformation — on the 5 dimensions energy, time, clarity, focus, structure.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 9. BONUS (verbatim PDF §9) ──────────────────────────────────────────
  bonus: {
    headline: {
      fr: 'Les bonus inclus.',
      en: 'Bonuses included.'
    } satisfies BilingualLax<string>,
    valueLabel: {
      fr: 'Valeur',
      en: 'Value'
    } satisfies BilingualLax<string>,
    items: [
      {
        name: {
          fr: 'Communauté privée An Army of One™ · 30 jours',
          en: 'Private An Army of One™ community · 30 days'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Groupe fermé suivi, accountability hebdomadaire, accès direct à Jonas pendant 30 jours.',
          en: 'Closed monitored group, weekly accountability, direct access to Jonas for 30 days.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '297$',
          en: '$297'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Template Life OS An Army of One™ (Notion + Upbase)',
          en: 'An Army of One™ Life OS template (Notion + Upbase)'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Préconfigure clé en main — version Notion et version Upbase. Importables en 1 clic.',
          en: 'Fully preconfigured turn-key — Notion version and Upbase version. Importable in 1 click.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Prompt Library IA An Army of One™',
          en: 'An Army of One™ AI Prompt Library'
        } satisfies BilingualLax<string>,
        description: {
          fr: '50+ prompts ChatGPT testés — productivité, planification, écriture, prise de décision.',
          en: '50+ tested ChatGPT prompts — productivity, planning, writing, decision-making.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '97$',
          en: '$97'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: "Rapport d'alignement personnalisé",
          en: 'Personalized alignment report'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Avant/après avec analyse 5 dimensions — livré 7 jours après le bootcamp.',
          en: 'Before/after with 5-dimension analysis — delivered 7 days after the bootcamp.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Enregistrements complets bootcamp · 90 jours',
          en: 'Complete bootcamp recordings · 90 days'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Toutes les sessions accessibles pendant 90 jours — pour revisiter les modules clés.',
          en: 'All sessions accessible for 90 days — to revisit the key modules.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '297$',
          en: '$297'
        } satisfies BilingualLax<string>
      },
      {
        name: {
          fr: 'Session de lancement J+7',
          en: 'J+7 launch session'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Session groupe 60 min · bilan + ajustements — 7 jours après le bootcamp.',
          en: 'Group session 60 min · review + adjustments — 7 days after the bootcamp.'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 10. VALEUR & PRIX (verbatim PDF §10) ────────────────────────────────
  valuePrice: {
    eyebrow: {
      fr: 'Récap valeur',
      en: 'Value recap'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Ce que vaut An Army of One™.',
      en: 'What An Army of One™ is worth.'
    } satisfies BilingualLax<string>,
    valueRows: [
      {
        label: {
          fr: 'Bootcamp 3 jours immersifs',
          en: '3-day immersive bootcamp'
        } satisfies BilingualLax<string>,
        value: {
          fr: '2 500$',
          en: '$2,500'
        } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Communauté privée 30 jours',
          en: 'Private community 30 days'
        } satisfies BilingualLax<string>,
        value: {
          fr: '297$',
          en: '$297'
        } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Template Life OS (Notion + Upbase)',
          en: 'Life OS template (Notion + Upbase)'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Prompt Library IA',
          en: 'AI Prompt Library'
        } satisfies BilingualLax<string>,
        value: {
          fr: '97$',
          en: '$97'
        } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: "Rapport d'alignement personnalisé",
          en: 'Personalized alignment report'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Enregistrements complets · 90 jours',
          en: 'Complete recordings · 90 days'
        } satisfies BilingualLax<string>,
        value: {
          fr: '297$',
          en: '$297'
        } satisfies BilingualLax<string>
      },
      {
        label: {
          fr: 'Session de lancement J+7',
          en: 'J+7 launch session'
        } satisfies BilingualLax<string>,
        value: {
          fr: '197$',
          en: '$197'
        } satisfies BilingualLax<string>
      }
    ] as const,
    valueTotal: {
      fr: '3 782$',
      en: '$3,782'
    } satisfies BilingualLax<string>,
    valueTotalLabel: {
      fr: 'Valeur totale',
      en: 'Total value'
    } satisfies BilingualLax<string>,
    priceLaunch: {
      fr: '997$',
      en: '$997'
    } satisfies BilingualLax<string>,
    priceLaunchLabel: {
      fr: 'Prix de lancement · 1ère cohorte',
      en: 'Launch price · 1st cohort'
    } satisfies BilingualLax<string>,
    priceRegular: {
      fr: '1 497$',
      en: '$1,497'
    } satisfies BilingualLax<string>,
    priceRegularLabel: {
      fr: 'Prix régulier · 2e cohorte',
      en: 'Regular price · 2nd cohort'
    } satisfies BilingualLax<string>,
    paymentOptions: {
      fr: [
        'Paiement complet · 997$',
        '2 versements de 549$ — espacés de 30 jours',
        'Option VIP · +1h session individuelle avec Jonas · 1 997$'
      ] as readonly string[],
      en: [
        'Full payment · $997',
        '2 instalments of $549 — 30 days apart',
        'VIP option · +1h individual session with Jonas · $1,997'
      ] as readonly string[]
    } satisfies BilingualLax<readonly string[]>,
    ctaPrimaryLabel: {
      fr: 'Sois notifié des inscriptions · 997$',
      en: 'Get notified of registrations · $997'
    } satisfies BilingualLax<string>,
    ctaSecondaryLabel: {
      fr: 'Poser une question',
      en: 'Ask a question'
    } satisfies BilingualLax<string>,
    preLaunchNote: {
      fr: "Mode pré-lancement : les inscriptions et tarifs early-bird ouvrent à l'annonce de la première cohorte. Sois notifié en priorité.",
      en: 'Pre-launch mode: registrations and early-bird pricing open at the first cohort announcement. Get notified first.'
    } satisfies BilingualLax<string>
  },

  // ─── 11. PREUVE & CRÉDIBILITÉ JONAS ──────────────────────────────────────
  credibility: {
    eyebrow: {
      fr: 'Qui te coache',
      en: 'Who coaches you'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Pas un théoricien. Un praticien.',
      en: 'Not a theorist. A practitioner.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Tout ce que tu vis dans ce bootcamp, Jonas l'a appliqué sur lui-même d'abord. C'est ça qui fait la différence avec 90% de ce que tu trouves en ligne.",
      en: 'Everything you live in this bootcamp, Jonas applied to himself first. That is what makes the difference with 90% of what you find online.'
    } satisfies BilingualLax<string>,
    stats: [
      {
        id: 'years',
        value: {
          fr: '15+',
          en: '15+'
        } satisfies BilingualLax<string>,
        label: {
          fr: "ans d'expérience",
          en: 'years of experience'
        } satisfies BilingualLax<string>
      },
      {
        id: 'entrepreneurs',
        value: {
          fr: '857',
          en: '857'
        } satisfies BilingualLax<string>,
        label: {
          fr: 'entrepreneurs accompagnés',
          en: 'entrepreneurs supported'
        } satisfies BilingualLax<string>
      },
      {
        id: 'revenue',
        value: {
          fr: '31M$',
          en: '$31M'
        } satisfies BilingualLax<string>,
        label: {
          fr: 'générés par nos clients',
          en: 'generated by our clients'
        } satisfies BilingualLax<string>
      }
    ] as const,
    credentials: {
      fr: [
        "Architecte d'affaires · DIOP Stratégies Internationales",
        'Game Changer Protocol™ — méthodologie propriétaire',
        "CDT™ Compression Dynamique du Temps — déposée à l'OPIC",
        'Animateur du podcast The Game Changer',
        'Fondateur Gamechanger Scaling',
        'Conférencier sur 3 marchés francophones (Québec, France, Afrique)',
        'Basé à Montréal · accompagne worldwide'
      ] as readonly string[],
      en: [
        'Business Architect · DIOP Stratégies Internationales',
        'Game Changer Protocol™ — proprietary methodology',
        'CDT™ Dynamic Time Compression — registered with CIPO',
        'Host of The Game Changer podcast',
        'Founder of Gamechanger Scaling',
        'Speaker across 3 French-speaking markets (Quebec, France, Africa)',
        'Based in Montréal · supports worldwide'
      ] as readonly string[]
    } satisfies BilingualLax<readonly string[]>,
    quote: {
      fr: "J'ai construit An Army of One™ parce que j'ai vécu le chaos que tu vis. Et parce que la solution n'était pas un autre outil — c'était un système ancré dans qui je suis. Ce bootcamp c'est ça : te donner ton système, en 3 jours, pour toujours.",
      en: 'I built An Army of One™ because I lived the chaos you are living. And because the solution was not another tool — it was a system anchored in who I am. This bootcamp is that: giving you your system, in 3 days, for good.'
    } satisfies BilingualLax<string>,
    quoteAttribution: {
      fr: '— Jonas Diop',
      en: '— Jonas Diop'
    } satisfies BilingualLax<string>
  },

  // ─── 12. FAQ (verbatim PDF §12) ──────────────────────────────────────────
  faq: {
    eyebrow: {
      fr: 'Questions fréquentes',
      en: 'Frequently asked'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Ce que les gens demandent avant de réserver.',
      en: 'What people ask before booking.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'format-presentiel-ligne',
        q: {
          fr: 'Le bootcamp est en ligne ou en présentiel ?',
          en: 'Is the bootcamp online or in-person?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Format hybride par cohorte. La première cohorte se fait en présentiel à Montréal (capacité 20 places). Les cohortes suivantes alternent présentiel et online live selon la demande. Le lieu et le format exact te seront confirmés à l'inscription — tu reçois la priorité géographique selon ton emplacement.",
          en: 'Hybrid format per cohort. The first cohort runs in-person in Montréal (20-spot capacity). Following cohorts alternate in-person and online live based on demand. Venue and exact format will be confirmed at registration — you get geographic priority based on your location.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'niveau-technique-outils',
        q: {
          fr: 'Est-ce que je dois avoir un niveau technique pour les outils ?',
          en: 'Do I need a technical level for the tools?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Aucun. Notion, Upbase, ChatGPT — Jonas te monte le système en live à partir de zéro. Si tu sais utiliser un courriel, tu sais utiliser ton Life OS à la fin. Les templates sont préconfigure clé en main — tu copies, tu adaptes, tu utilises.',
          en: 'None. Notion, Upbase, ChatGPT — Jonas builds the system live from scratch. If you can use email, you can use your Life OS by the end. Templates are preconfigured turn-key — you copy, adapt, use.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'sous-5000-mois',
        q: {
          fr: "Je génère moins de 5 000$/mois — est-ce que c'est quand même pour moi ?",
          en: 'I make less than $5,000/month — is it still for me?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Oui — An Army of One™ est calibré pour les entrepreneurs solos 5-25K$/mois, mais aussi pour les coachs et experts qui démarrent et veulent construire dès le début sur un système solide. Si ton blocage est l'exécution et le chaos interne, c'est exactement pour toi. Si tu cherches d'abord à valider une offre, prends plutôt un appel individuel avec Jonas.",
          en: 'Yes — An Army of One™ is calibrated for solo entrepreneurs $5-25K/month, but also for coaches and experts starting out who want to build on a solid system from day one. If your blocker is execution and internal chaos, this is exactly for you. If you are first looking to validate an offer, take an individual call with Jonas instead.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'pas-coach-consultant',
        q: {
          fr: 'Est-ce que je peux participer si je ne suis pas coach ou consultant ?',
          en: 'Can I participate if I am not a coach or consultant?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Absolument. Le bootcamp est ouvert à tous les entrepreneurs solos : e-commerce, freelance, agence solo, créateur, expert technique, etc. Les outils et les principes sont universels. Le seul critère réel : tu travailles seul (ou avec une équipe de moins de 3 personnes) et tu cherches un système qui ne dépend pas d'une équipe pour tenir.",
          en: 'Absolutely. The bootcamp is open to all solo entrepreneurs: e-commerce, freelance, solo agency, creator, technical expert, etc. The tools and principles are universal. The only real criterion: you work alone (or with a team of fewer than 3 people) and you are looking for a system that does not depend on a team to hold.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'rate-une-session',
        q: {
          fr: "Qu'est-ce qui se passe si je ne peux pas assister à une session ?",
          en: 'What happens if I cannot attend a session?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Chaque session est enregistrée et disponible pendant 90 jours dans ton portail. Si tu rates une demi-journée, tu rattrapes le soir-même. Mais sois honnête avec toi-même : si tu sais que tu vas rater plus d'une demi-journée, attends la cohorte suivante. La transformation passe par la présence — pas par les rattrapages.",
          en: 'Each session is recorded and available for 90 days in your portal. If you miss half a day, you catch up that evening. But be honest with yourself: if you know you will miss more than half a day, wait for the next cohort. Transformation passes through presence — not through catch-up.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'garantie-conditions',
        q: {
          fr: 'Est-ce que la garantie est vraiment sans condition ?',
          en: 'Is the guarantee really unconditional?'
        } satisfies BilingualLax<string>,
        a: {
          fr: 'Oui. Sans petits caractères. La seule condition est ta présence : si tu arrives les 3 jours, tu fais tous les ateliers, tu complètes tes livrables — et tu repars sans Life OS opérationnel, sans semaine type prête, sans plan 90 jours en main — Jonas te rembourse intégralement. Pas de délai. Pas de questions. Voir section 13 sur la garantie pour le détail exact.',
          en: 'Yes. No fine print. The only condition is your presence: if you show up the 3 days, do all the workshops, complete your deliverables — and you leave without an operational Life OS, without a ready template week, without a 90-day plan in hand — Jonas refunds you in full. No delay. No questions. See section 13 on the guarantee for exact details.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'temps-libere-jour',
        q: {
          fr: 'Combien de temps dois-je libérer chaque jour ?',
          en: 'How much time should I free up each day?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Compte 8h par jour pendant les 3 jours, plus 1-2h de travail individuel le soir sur tes livrables. Total ~30h sur le bootcamp. Bloque tes 3 jours dans ton calendrier en monk mode — pas de réunion, pas de Slack, pas de famille qui réclame. C'est non négociable pour que ça fonctionne.",
          en: 'Plan 8h per day during the 3 days, plus 1-2h of individual work in the evening on your deliverables. Total ~30h over the bootcamp. Block your 3 days in your calendar in monk mode — no meetings, no Slack, no family demands. It is non-negotiable for it to work.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'suite-apres-bootcamp',
        q: {
          fr: 'Y a-t-il une suite après le bootcamp ?',
          en: 'Is there a follow-up after the bootcamp?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Oui : la communauté privée 30 jours + la session J+7 sont incluses. Au-delà, tu peux rejoindre la communauté étendue annuelle (optionnelle, tarifée séparément) ou passer sur The Edge™ ou The Activation™ si ton blocage suivant est l'autorité ou le plafond identitaire. Jonas te fait une recommandation personnalisée à la fin du bootcamp.",
          en: 'Yes: the 30-day private community + the J+7 session are included. Beyond that, you can join the extended yearly community (optional, priced separately) or move on to The Edge™ or The Activation™ if your next blocker is authority or the identity ceiling. Jonas gives you a personalized recommendation at the end of the bootcamp.'
        } satisfies BilingualLax<string>
      }
    ] as const
  },

  // ─── 13. GARANTIE 100% (verbatim PDF §13) ────────────────────────────────
  guarantee: {
    eyebrow: {
      fr: 'Garantie 100%',
      en: '100% guarantee'
    } satisfies BilingualLax<string>,
    headline: {
      fr: "Tu ne prends aucun risque. Lui, il s'engage à 100%.",
      en: 'You take no risk. He commits 100%.'
    } satisfies BilingualLax<string>,
    body: {
      fr: 'Si tu arrives les 3 jours. Si tu fais tous les ateliers. Si tu complètes tes livrables. Et que tu repars sans un Life OS opérationnel, une semaine type prête et un plan 90 jours en main — Jonas te rembourse intégralement.',
      en: 'If you show up the 3 days. If you do all the workshops. If you complete your deliverables. And you leave without an operational Life OS, a ready template week and a 90-day plan in hand — Jonas refunds you in full.'
    } satisfies BilingualLax<string>,
    bodyHighlights: {
      fr: [
        'Sans question.',
        'Sans délai.',
        'Pas de petits caractères.',
        'Pas de conditions cachées.'
      ] as readonly string[],
      en: [
        'Without question.',
        'Without delay.',
        'No fine print.',
        'No hidden conditions.'
      ] as readonly string[]
    } satisfies BilingualLax<readonly string[]>,
    closing: {
      fr: "La seule condition, c'est toi : sois là, sois dedans, sois honnête. Parce que c'est ça An Army of One™. Une armée d'un seul — tu dois te présenter.",
      en: 'The only condition is you: be there, be in it, be honest. Because this is An Army of One™. An army of one — you have to show up.'
    } satisfies BilingualLax<string>
  },

  // ─── 14. URGENCE & RARETÉ ────────────────────────────────────────────────
  urgency: {
    eyebrow: {
      fr: 'Urgence & rareté',
      en: 'Urgency & scarcity'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Ce bootcamp ferme ses portes dans :',
      en: 'This bootcamp closes its doors in:'
    } satisfies BilingualLax<string>,
    countdownPendingLabel: {
      fr: "Compte à rebours activé · à l'annonce de la première cohorte",
      en: 'Countdown activated · at first cohort announcement'
    } satisfies BilingualLax<string>,
    spotsBody: {
      fr: "20 places maximum — au-delà, Jonas ne peut pas garantir la qualité d'attention. Quand c'est plein — c'est plein.",
      en: '20 spots maximum — beyond that, Jonas cannot guarantee attention quality. When it is full — it is full.'
    } satisfies BilingualLax<string>,
    waitlistNote: {
      fr: "La liste d'attente pour la prochaine cohorte ouvre à 1 497$ — sans early-bird.",
      en: 'The waitlist for the next cohort opens at $1,497 — no early-bird.'
    } satisfies BilingualLax<string>,
    earlyBirdEyebrow: {
      fr: 'Bonus early-bird',
      en: 'Early-bird bonus'
    } satisfies BilingualLax<string>,
    earlyBirdBody: {
      fr: 'Les 5 premiers inscrits reçoivent un appel de pré-bootcamp 30 min avec Jonas.',
      en: 'The first 5 registrants receive a 30-min pre-bootcamp call with Jonas.'
    } satisfies BilingualLax<string>
  },

  // ─── 15. TÉMOIGNAGES — PLACEHOLDER HONNÊTE ───────────────────────────────
  testimonials: {
    eyebrow: {
      fr: 'Témoignages',
      en: 'Testimonials'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Première édition en cours.',
      en: 'First edition in progress.'
    } satisfies BilingualLax<string>,
    body: {
      fr: 'Les retours des participants seront publiés après le bootcamp. Tu veux être notifié des prochaines cohortes et lire les premiers témoignages dès leur publication ?',
      en: 'Participant feedback will be published after the bootcamp. Want to be notified of upcoming cohorts and read the first testimonials as soon as they are published?'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Être notifié des témoignages',
      en: 'Get notified of testimonials'
    } satisfies BilingualLax<string>
  },

  // ─── 16. CTA FINAL — 2 réalités (verbatim PDF §15) ───────────────────────
  finalCta: {
    eyebrow: {
      fr: 'Dans 6 mois',
      en: 'In 6 months'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Tu seras dans une de ces deux réalités.',
      en: 'You will be in one of these two realities.'
    } satisfies BilingualLax<string>,
    sansColumn: {
      label: {
        fr: 'Sans An Army of One™',
        en: 'Without An Army of One™'
      } satisfies BilingualLax<string>,
      items: {
        fr: [
          'Tes journées dépendent toujours de ton humeur du matin',
          "L'écart entre tes ambitions et ta réalité s'est creusé",
          'Tu as essayé 2 nouveaux outils — abandonnés en 3 semaines',
          'Tu ressasses les mêmes regrets fin de trimestre',
          "Tu te demandes encore : « Pourquoi je n'arrive pas à m'y tenir ? »"
        ] as readonly string[],
        en: [
          'Your days still depend on your morning mood',
          'The gap between your ambitions and your reality widened',
          'You tried 2 new tools — abandoned in 3 weeks',
          'You replay the same end-of-quarter regrets',
          'You still ask yourself: "Why can\'t I stick to it?"'
        ] as readonly string[]
      } satisfies BilingualLax<readonly string[]>
    },
    avecColumn: {
      label: {
        fr: 'Avec An Army of One™',
        en: 'With An Army of One™'
      } satisfies BilingualLax<string>,
      items: {
        fr: [
          'Ton Life OS tourne — sans toi forcer chaque matin',
          'Tu as exécuté ton plan 90 jours — résultats mesurés',
          'Tes routines tiennent depuis 6 mois — preuve documentée',
          "Ton score d'alignement a doublé — tu sais pourquoi",
          'Tu construis le trimestre suivant sur des fondations qui tiennent'
        ] as readonly string[],
        en: [
          'Your Life OS runs — without you forcing it every morning',
          'You executed your 90-day plan — measured results',
          'Your routines have held for 6 months — documented proof',
          'Your alignment score doubled — you know why',
          'You build the next quarter on foundations that hold'
        ] as readonly string[]
      } satisfies BilingualLax<readonly string[]>
    },
    transitionBody: {
      fr: 'La différence entre ces deux réalités ?',
      en: 'The difference between these two realities?'
    } satisfies BilingualLax<string>,
    transitionPullQuote: {
      fr: "C'est la décision que tu prends maintenant.",
      en: 'It is the decision you make now.'
    } satisfies BilingualLax<string>,
    recapEyebrow: {
      fr: 'Récap rapide',
      en: 'Quick recap'
    } satisfies BilingualLax<string>,
    recapItems: {
      fr: [
        '3 jours intensifs · méthode RISE™',
        '9 livrables opérationnels · stack IA déployé',
        '6 bonus inclus · communauté + templates + recordings',
        'Valeur totale 3 782$ · investissement de lancement 997$',
        'Garantie 100% sans petits caractères'
      ] as readonly string[],
      en: [
        '3 intensive days · RISE™ method',
        '9 operational deliverables · AI stack deployed',
        '6 bonuses included · community + templates + recordings',
        'Total value $3,782 · launch investment $997',
        '100% guarantee with no fine print'
      ] as readonly string[]
    } satisfies BilingualLax<readonly string[]>,
    ctaPrimaryLabel: {
      fr: 'Sois notifié des inscriptions · 997$ prix de lancement',
      en: 'Get notified of registrations · $997 launch price'
    } satisfies BilingualLax<string>,
    ctaVipLabel: {
      fr: 'Option VIP · 1 997$ · +1h avec Jonas',
      en: 'VIP option · $1,997 · +1h with Jonas'
    } satisfies BilingualLax<string>,
    ctaDisabledNote: {
      fr: "Inscriptions ouvertes à l'annonce de la première cohorte",
      en: 'Registrations open at first cohort announcement'
    } satisfies BilingualLax<string>,
    jonasQuote: {
      fr: "Tu n'as pas besoin d'une équipe. Tu as besoin d'un système. Et d'être prêt à te battre pour toi-même.",
      en: 'You do not need a team. You need a system. And to be ready to fight for yourself.'
    } satisfies BilingualLax<string>,
    jonasAttribution: {
      fr: '— Jonas Diop',
      en: '— Jonas Diop'
    } satisfies BilingualLax<string>,
    legalFooter: {
      fr: "An Army of One™ est un programme de Jonas Diop · Game Changer Protocol™ · CDT™ déposé à l'OPIC.",
      en: 'An Army of One™ is a program by Jonas Diop · Game Changer Protocol™ · CDT™ registered with CIPO.'
    } satisfies BilingualLax<string>
  },

  // ─── 17. TRILOGIE FOOTER CROSS-LINK ──────────────────────────────────────
  trilogie: {
    eyebrow: {
      fr: 'La trilogie',
      en: 'The trilogy'
    } satisfies BilingualLax<string>,
    headline: {
      fr: 'Les 3 bootcamps · choisis le tien.',
      en: 'The 3 bootcamps · choose yours.'
    } satisfies BilingualLax<string>,
    subtitle: {
      fr: "Chacun adresse un blocage spécifique. An Army of One™ résout le chaos interne. The Edge™ résout l'invisibilité. The Activation™ résout le plafond.",
      en: 'Each addresses a specific blocker. An Army of One™ resolves internal chaos. The Edge™ resolves invisibility. The Activation™ resolves the ceiling.'
    } satisfies BilingualLax<string>
  }
} as const;
