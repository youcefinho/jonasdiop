import type { BilingualLax } from '@/lib/i18n/types';

/**
 * evenements.ts — Page Événements (brief v3 §3.5) — 8 sections complètes.
 *
 * Sections : Hero · pourquoiPresentiel (3-4 bénéfices) · types (3 cards anchors
 * #bootcamps #retraites #masterclass) · calendrier (upcomingEvents dynamique OU
 * fallback capture email si vide) · temoignages (résultats post-event) · galerie
 * (photos + aftermovie placeholders) · faq (5 questions logistiques) · finalCta
 * (dual : Voir événements + Être informé).
 *
 * Mode actuel : aucun event programmé → calendrier.upcomingEvents = []
 * → composant rend fallback capture email "Sois informé en premier".
 *
 * Tone : TU partout (audience entrepreneurs). Brief v3 §1.4 confirme TU sur
 * Événements.
 *
 * Placeholders structurés (pas de marker [À VALIDER]) :
 *   - galerie.pending = true (photos + vidéos aftermovie pending Jonas)
 *   - temoignages.pending = true (témoignages post-event pending Jonas)
 *   - calendrier.upcomingEvents = [] (calendrier réel pending H7 Jonas)
 *   - form action="#" disabled (plateforme email pending)
 *
 * Sous-pages event : voir EvenementSousPageTemplate.tsx + brief v3 §3.6.
 */

type Event = {
  readonly id: string;
  readonly type: 'bootcamp' | 'retraite' | 'masterclass';
  readonly name: BilingualLax<string>;
  readonly date: BilingualLax<string>;
  readonly location: BilingualLax<string>;
  readonly spotsLeft: BilingualLax<string>;
  readonly price: BilingualLax<string>;
  readonly href: string;
};

export const evenementsCopy = {
  meta: {
    title: {
      fr: 'Événements — Bootcamps, retraites & masterclass | Jonas Diop',
      en: 'Events — Bootcamps, retreats & masterclasses | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Vis le Game Changer Protocol en présentiel. Bootcamps 2-3 jours, retraites 5-7 jours, masterclass en ligne. Immersion, réseau, transformation. Places limitées.',
      en: 'Live the Game Changer Protocol in person. 2-3 day bootcamps, 5-7 day retreats, online masterclasses. Immersion, network, transformation. Limited spots.'
    } satisfies BilingualLax<string>
  },

  // ─── 1. HERO ────────────────────────────────────────────────────────────
  hero: {
    eyebrow: {
      fr: 'Événements en présentiel',
      en: 'In-person events'
    } satisfies BilingualLax<string>,
    h1: {
      fr: "Vis l'expérience Game Changer en présentiel.",
      en: 'Live the Game Changer experience in person.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Quand l'immersion remplace les notes. Quand le réseau remplace l'isolement. Quand l'exécution remplace la théorie. Trois formats, une exigence : tu repars avec un plan, pas avec une inspiration.",
      en: 'When immersion replaces notes. When network replaces isolation. When execution replaces theory. Three formats, one standard : you leave with a plan, not with inspiration.'
    } satisfies BilingualLax<string>,
    visuelImmersifDescription: {
      fr: 'Visuel hero : ambiance salle de travail intime, lumière chaude, entrepreneurs concentrés autour de Jonas — pas une scène de conférence.',
      en: 'Hero visual : intimate workshop atmosphere, warm light, entrepreneurs focused around Jonas — not a conference stage.'
    } satisfies BilingualLax<string>,
    ctaPrincipal: {
      fr: 'Voir les prochains événements',
      en: 'See upcoming events'
    } satisfies BilingualLax<string>
  },

  // ─── 2. POURQUOI VENIR EN PRÉSENTIEL ────────────────────────────────────
  pourquoiPresentiel: {
    eyebrow: {
      fr: 'Pourquoi le présentiel',
      en: 'Why in-person'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce que Zoom ne te donnera jamais.',
      en: 'What Zoom will never give you.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Les programmes en ligne te donnent les frameworks. Le présentiel te donne la transformation. Quatre raisons pour lesquelles les meilleurs entrepreneurs continuent de prendre l'avion.",
      en: 'Online programs give you the frameworks. In-person gives you the transformation. Four reasons the best entrepreneurs keep boarding planes.'
    } satisfies BilingualLax<string>,
    benefices: [
      {
        id: 'immersion-totale',
        title: {
          fr: 'Immersion totale',
          en: 'Total immersion'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Pas de Slack qui ping, pas de réunion à 14h, pas de famille qui réclame. Deux à sept jours coupés du bruit pour ne travailler que sur ton architecture. C'est rare. C'est ce qui change tout.",
          en: 'No Slack pings, no 2pm meeting, no family demands. Two to seven days cut off from the noise to work only on your architecture. It is rare. It is what changes everything.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'reseau-pairs',
        title: {
          fr: 'Réseau de pairs à ton niveau',
          en: 'Peer network at your level'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Huit à douze entrepreneurs qui font ton CA, qui vivent tes problèmes, qui prennent tes décisions. Pas de networking forcé : des relations construites dans le travail. Plusieurs participants disent que le ROI réel est venu des connexions, pas du contenu.',
          en: 'Eight to twelve entrepreneurs at your revenue level, living your problems, making your decisions. No forced networking : relationships built through work. Several participants say the real ROI came from connections, not content.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'transformation-vs-info',
        title: {
          fr: 'Transformation, pas information',
          en: 'Transformation, not information'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Tu peux lire un livre sur la natation. Ça ne te fait pas nager. Le présentiel installe les habitudes, recâble les réflexes, exorcise les croyances limitantes. Quand tu rentres chez toi, tu n'es plus le même entrepreneur.",
          en: 'You can read a book about swimming. It does not make you swim. In-person installs habits, rewires reflexes, exorcises limiting beliefs. When you get home, you are not the same entrepreneur.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'acces-direct-jonas',
        title: {
          fr: 'Accès direct à Jonas',
          en: 'Direct access to Jonas'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Au petit-déjeuner, en pause, le soir. Les vraies questions ne se posent pas au micro pendant le Q&A — elles se posent quand le contexte est tombé. C'est là que les meilleurs insights arrivent.",
          en: 'At breakfast, on breaks, in the evening. Real questions are not asked at the mic during Q&A — they come when context has dropped. That is where the best insights show up.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  // ─── 3. TYPES D'ÉVÉNEMENTS — 3 cards anchored ───────────────────────────
  types: {
    eyebrow: {
      fr: "Trois formats d'événements",
      en: 'Three event formats'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Choisis le niveau de profondeur.',
      en: 'Choose your level of depth.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Du shot intensif de 2 jours à la transformation profonde de 7 jours. Chaque format est calibré pour une intention différente.',
      en: 'From the 2-day intensive shot to the deep 7-day transformation. Each format is calibrated for a different intent.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'bootcamps',
        anchorId: 'bootcamps',
        eyebrow: {
          fr: 'Bootcamps tactiques intensifs',
          en: 'Intensive tactical bootcamps'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'La Trilogie — 3 leviers, 3 jours chacun',
          en: 'The Trilogy — 3 levers, 3 days each'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'An Army of One™ pour ton système. The Edge™ pour ta perception. The Activation™ pour ton humain complet. Méthode RISE™.',
          en: 'An Army of One™ for your system. The Edge™ for your perception. The Activation™ for your complete human. RISE™ method.'
        } satisfies BilingualLax<string>,
        forWho: {
          fr: 'Entrepreneurs 100K$-1M$ · 8 à 12 participants',
          en: 'Entrepreneurs $100K-$1M · 8 to 12 participants'
        } satisfies BilingualLax<string>,
        ctaLabel: {
          fr: 'Découvrir la Trilogie',
          en: 'Discover the Trilogy'
        } satisfies BilingualLax<string>,
        ctaRouteKey: 'evenements-bootcamps'
      },
      {
        id: 'retraites',
        anchorId: 'retraites',
        eyebrow: {
          fr: 'Format transformation',
          en: 'Transformation format'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Retraites · 5 à 7 jours',
          en: 'Retreats · 5 to 7 days'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Le format qui change la trajectoire. Lieu retiré, déconnexion totale, travail en profondeur sur l'architecture complète : business, énergie, vision. Pour les entrepreneurs qui sentent qu'ils sont à un palier et veulent le franchir cette année.",
          en: 'The format that changes your trajectory. Secluded location, total disconnection, deep work on the complete architecture : business, energy, vision. For entrepreneurs who feel they are at a ceiling and want to break through this year.'
        } satisfies BilingualLax<string>,
        forWho: {
          fr: 'Entrepreneurs 500K$+ · 6 à 10 participants · sélection',
          en: 'Entrepreneurs $500K+ · 6 to 10 participants · selective'
        } satisfies BilingualLax<string>,
        ctaLabel: {
          fr: 'Voir la retraite',
          en: 'See the retreat'
        } satisfies BilingualLax<string>
      },
      {
        id: 'masterclass',
        anchorId: 'masterclass',
        eyebrow: {
          fr: 'Format accessible',
          en: 'Accessible format'
        } satisfies BilingualLax<string>,
        title: {
          fr: 'Masterclass en ligne',
          en: 'Online masterclasses'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Sessions live de 2 à 4 heures sur un sujet précis : pricing, embauche, offre. Format mixte enseignement et hot seats. Idéal si tu veux tester le travail avec Jonas avant un engagement présentiel, ou si tu veux upgrader une compétence ciblée sans bouger.',
          en: 'Live sessions of 2 to 4 hours on a precise subject : pricing, hiring, offer. Mixed format teaching and hot seats. Ideal if you want to test working with Jonas before an in-person commitment, or if you want to upgrade a targeted skill without travelling.'
        } satisfies BilingualLax<string>,
        forWho: {
          fr: 'Tout entrepreneur · groupes de 15 à 40 · live + replay',
          en: 'Any entrepreneur · groups of 15 to 40 · live + replay'
        } satisfies BilingualLax<string>,
        ctaLabel: {
          fr: 'Voir la masterclass',
          en: 'See the masterclass'
        } satisfies BilingualLax<string>
      }
    ]
  },

  // ─── 4. CALENDRIER DES PROCHAINS ÉVÉNEMENTS ─────────────────────────────
  calendrier: {
    eyebrow: {
      fr: 'Calendrier 2026',
      en: '2026 calendar'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Les prochains événements.',
      en: 'Upcoming events.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Calendrier complet et lieux confirmés à chaque ouverture de cohorte. Places limitées par design.',
      en: 'Full calendar and venues confirmed at each cohort opening. Spots limited by design.'
    } satisfies BilingualLax<string>,
    upcomingEvents: [] as readonly Event[],
    columnLabels: {
      date: { fr: 'Date', en: 'Date' } satisfies BilingualLax<string>,
      location: { fr: 'Lieu', en: 'Location' } satisfies BilingualLax<string>,
      spots: { fr: 'Places restantes', en: 'Spots left' } satisfies BilingualLax<string>,
      price: { fr: 'Investissement', en: 'Investment' } satisfies BilingualLax<string>
    },
    eventCtaLabel: {
      fr: 'Réserver ma place',
      en: 'Book my spot'
    } satisfies BilingualLax<string>,
    fallbackCaptureEmail: {
      eyebrow: {
        fr: 'Aucun événement programmé',
        en: 'No event scheduled'
      } satisfies BilingualLax<string>,
      title: {
        fr: 'Sois informé en premier.',
        en: 'Be the first to know.'
      } satisfies BilingualLax<string>,
      sub: {
        fr: "Bootcamps, retraites et masterclass — les places partent en quelques jours. Reçois la liste dès qu'un nouvel événement est confirmé, avant l'annonce publique.",
        en: 'Bootcamps, retreats and masterclasses — spots fill in a few days. Get the list as soon as a new event is confirmed, before the public announcement.'
      } satisfies BilingualLax<string>,
      formLabels: {
        emailPlaceholder: {
          fr: 'ton@email.com',
          en: 'your@email.com'
        } satisfies BilingualLax<string>,
        submitLabel: {
          fr: "M'informer en priorité",
          en: 'Notify me first'
        } satisfies BilingualLax<string>,
        ariaLabel: {
          fr: 'Notification événements à venir',
          en: 'Upcoming events notification'
        } satisfies BilingualLax<string>,
        srEmailLabel: {
          fr: 'Adresse courriel',
          en: 'Email address'
        } satisfies BilingualLax<string>,
        pendingNote: {
          fr: "Plateforme email en cours d'intégration · disponible au lancement",
          en: 'Email platform being integrated · available at launch'
        } satisfies BilingualLax<string>
      }
    }
  },

  // ─── 5. TÉMOIGNAGES D'ÉVÉNEMENTS PASSÉS ─────────────────────────────────
  temoignages: {
    eyebrow: {
      fr: 'Ils sont venus en présentiel',
      en: 'They came in person'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce qui change quand on quitte la salle.',
      en: 'What changes when they leave the room.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Pas des compliments sur l'événement. Des résultats observables dans les semaines qui ont suivi.",
      en: 'Not compliments about the event. Observable results in the weeks that followed.'
    } satisfies BilingualLax<string>,
    pending: true,
    pendingNote: {
      fr: 'Témoignages vidéo et écrits des éditions précédentes en cours de collecte avec Jonas. Disponibles dès la prochaine cohorte annoncée.',
      en: 'Video and written testimonials from previous editions being collected with Jonas. Available with the next announced cohort.'
    } satisfies BilingualLax<string>,
    items: [] as readonly {
      readonly id: string;
      readonly name: string;
      readonly role: BilingualLax<string>;
      readonly quote: BilingualLax<string>;
      readonly result: BilingualLax<string>;
      readonly eventAttended: BilingualLax<string>;
    }[]
  },

  // ─── 6. GALERIE / RÉTROSPECTIVE ─────────────────────────────────────────
  galerie: {
    eyebrow: {
      fr: 'Rétrospective',
      en: 'Retrospective'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'À quoi ressemble un événement Game Changer.',
      en: 'What a Game Changer event looks like.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Format intime. Lieux choisis pour la concentration, pas pour la scénographie. Pas de stage rouge, pas de fumigènes. Du travail.',
      en: 'Intimate format. Venues chosen for focus, not for staging. No red stage, no smoke effects. Work.'
    } satisfies BilingualLax<string>,
    photosDescription: {
      fr: "Grille de 6 à 9 photos des éditions précédentes : moments de travail collectif, hot seats, soirées, lieux. À venir dès qu'une première édition est confirmée.",
      en: 'Grid of 6 to 9 photos from previous editions : collective work moments, hot seats, evenings, venues. Coming as soon as a first edition is confirmed.'
    } satisfies BilingualLax<string>,
    videosDescription: {
      fr: "Une à deux vidéos aftermovie de 60-90 secondes — l'ambiance vraie, pas le sizzle reel marketing.",
      en: 'One to two aftermovie videos of 60-90 seconds — the real atmosphere, not the marketing sizzle reel.'
    } satisfies BilingualLax<string>,
    pending: true,
    pendingNote: {
      fr: 'Photos et aftermovies en cours de production avec Jonas. Médias disponibles à la prochaine édition annoncée — sur demande pour les organisateurs partenaires.',
      en: 'Photos and aftermovies in production with Jonas. Media available at the next announced edition — on request for partner organizers.'
    } satisfies BilingualLax<string>
  },

  // ─── 7. FAQ ÉVÉNEMENTS — 5 questions logistiques ───────────────────────
  faq: {
    eyebrow: {
      fr: 'Questions fréquentes',
      en: 'Frequently asked'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'La logistique, sans détour.',
      en: 'Logistics, no detour.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'transport-hebergement',
        q: {
          fr: 'Le transport et le logement sont-ils inclus ?',
          en: 'Are travel and accommodation included?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Pour les retraites 5-7 jours : le logement et tous les repas sont inclus (le lieu est unique pour le groupe). Pour les bootcamps 2-3 jours : un hôtel partenaire est recommandé à tarif négocié — le logement n'est pas inclus pour garder la facture honnête, mais le bloc est réservé pour toi. Le transport (vol, train) reste toujours à ta charge.",
          en: 'For 5-7 day retreats : accommodation and all meals are included (the venue is exclusive to the group). For 2-3 day bootcamps : a partner hotel is recommended at a negotiated rate — accommodation is not included to keep the invoice honest, but the block is reserved for you. Travel (flight, train) is always at your charge.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'repas',
        q: {
          fr: 'Comment ça se passe pour les repas et les régimes alimentaires ?',
          en: 'How does it work for meals and dietary requirements?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Tous les repas sur place sont inclus dès le déjeuner du jour 1 jusqu'au déjeuner du dernier jour. Cuisine de qualité, produits locaux. Tu indiques tes contraintes (végétarien, sans gluten, allergies) au moment de la confirmation — le traiteur s'adapte. Café et collations en continu pendant les journées de travail.",
          en: 'All on-site meals are included from lunch on day 1 through lunch on the last day. Quality cuisine, local products. You list your constraints (vegetarian, gluten-free, allergies) at confirmation — the caterer adapts. Continuous coffee and snacks during work days.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'niveau-requis',
        q: {
          fr: 'Quel niveau de business faut-il avoir pour participer ?',
          en: 'What business level do I need to participate?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Le minimum est 100K$ de CA annuel (ou un track record équivalent en cours de scaling). Pas pour faire de l'élitisme — pour que le travail collectif fonctionne. À ce niveau, les problèmes ressemblent assez pour qu'un participant puisse contribuer aux hot seats des autres. En-dessous, tu paierais pour un contenu qui ne s'applique pas encore à ton stade.",
          en: 'The minimum is $100K annual revenue (or an equivalent track record currently scaling). Not for elitism — so collective work functions. At that level, problems look alike enough that any participant can contribute to others’ hot seats. Below, you would pay for content that does not yet apply to your stage.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'remboursement-annulation',
        q: {
          fr: 'Et si je dois annuler ? Quelle est la politique de remboursement ?',
          en: 'What if I have to cancel? What is the refund policy?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Jusqu'à 45 jours avant l'événement : remboursement complet moins les frais bancaires. Entre 44 et 14 jours : crédit transférable sur une édition future (12 mois). Moins de 14 jours : pas de remboursement, mais ta place peut être cédée à un autre entrepreneur que tu présentes — sous réserve d'acceptation. Les places sont garanties par engagement réel, pas par réservation gratuite.",
          en: 'Up to 45 days before the event : full refund minus banking fees. Between 44 and 14 days : transferable credit on a future edition (12 months). Less than 14 days : no refund, but your spot can be transferred to another entrepreneur you present — subject to approval. Spots are guaranteed by real commitment, not by free reservation.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'preparation-amont',
        q: {
          fr: 'Y a-t-il du travail à faire avant de venir ?',
          en: 'Is there work to do before arriving?'
        } satisfies BilingualLax<string>,
        a: {
          fr: "Oui. Tu reçois un questionnaire de préparation 2-3 semaines avant : architecture actuelle, blocage principal, objectif sur l'événement. C'est non négociable — c'est ce qui permet à Jonas de te préparer un hot seat ciblé et au groupe de t'aider de manière utile. Compte 60 à 90 minutes pour le remplir sérieusement.",
          en: 'Yes. You receive a preparation questionnaire 2-3 weeks before : current architecture, main blocker, objective for the event. It is non-negotiable — it is what allows Jonas to prepare a targeted hot seat for you and the group to help you usefully. Count 60 to 90 minutes to fill it seriously.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  // ─── 8. CTA FINAL ───────────────────────────────────────────────────────
  finalCta: {
    eyebrow: {
      fr: 'Prêt à venir',
      en: 'Ready to come'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Prêt à vivre la transformation en live ?',
      en: 'Ready to live the transformation in person?'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Soit tu viens voir le prochain événement programmé. Soit tu rentres dans la liste prioritaire pour être informé avant tout le monde. Dans les deux cas, ta prochaine étape est ici.',
      en: 'Either you come see the next scheduled event. Or you join the priority list to be informed before everyone else. In both cases, your next step is here.'
    } satisfies BilingualLax<string>,
    ctaPrincipal: {
      fr: 'Voir les événements programmés',
      en: 'See scheduled events'
    } satisfies BilingualLax<string>,
    ctaSecondaire: {
      fr: 'Être informé en priorité',
      en: 'Get notified first'
    } satisfies BilingualLax<string>
  }
} as const;
