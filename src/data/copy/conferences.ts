import type { BilingualLax } from '@/lib/i18n/types';

/**
 * conferences.ts — Page /conferences (brief v3 nouvelle).
 *
 * Audience B2B corporate (entreprises, comités de direction, équipes leadership).
 * Tone EXCEPTION : VOUS (au lieu du TU par défaut du reste du site).
 * Brief v3 explicit : "TU par défaut, VOUS sur Conférences B2B".
 *
 * État : SHELL. Sections structurées, copy générique B2B placeholdée pour les
 * 5 inputs Jonas en attente :
 *  - Logos clients passés (references.logos)
 *  - Photos sur scène (gallery.photos)
 *  - Bio "speaker" B2B raffinée (speaker.bioPending)
 *  - Références événements précis (references.events)
 *  - Sujets de conférences validés (subjects.topicsPending)
 *
 * Flag `pending: true` sur sections en attente — composant filtre rendering.
 */

export const conferencesCopy = {
  meta: {
    title: {
      fr: 'Conférences B2B & keynotes — Jonas Diop, Architecte d’affaires',
      en: 'B2B Conferences & Keynotes — Jonas Diop, Business Architect'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Conférences signature, ateliers stratégiques et keynotes corporate sur le scaling sans épuisement, le Game Changer Protocol et la méthodologie CDT™. Pour comités de direction et équipes leadership.',
      en: 'Signature talks, strategic workshops and corporate keynotes on scaling without burnout, the Game Changer Protocol and CDT™ methodology. For executive boards and leadership teams.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Conférences & keynotes B2B',
      en: 'B2B Conferences & Keynotes'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Faites entrer le Game Changer Protocol dans votre entreprise.',
      en: 'Bring the Game Changer Protocol into your company.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Conférences signature, ateliers stratégiques et panels pour dirigeants. Jonas Diop intervient devant comités de direction et équipes leadership — au Québec, en Europe francophone et à l’international.',
      en: 'Signature talks, strategic workshops and leadership panels. Jonas Diop addresses executive boards and leadership teams — in Québec, French-speaking Europe and internationally.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Discuter de votre événement',
      en: 'Discuss your event'
    } satisfies BilingualLax<string>
  },

  // ─── Pourquoi inviter Jonas (3 raisons concrètes B2B) ────────────────────
  whyInvite: {
    eyebrow: {
      fr: 'Pourquoi inviter Jonas',
      en: 'Why bring Jonas in'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Une intervention, trois leviers.',
      en: 'One intervention, three levers.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'shift-mental',
        title: { fr: 'Un shift mental immédiat', en: 'An immediate mental shift' },
        body: {
          fr: 'Vos équipes repartent avec une grille de lecture nouvelle sur ce qui scale réellement — et ce qui sature. Pas de théorie creuse, des patterns reproductibles.',
          en: 'Your teams leave with a fresh framework for what actually scales — and what saturates. No empty theory, just reproducible patterns.'
        }
      },
      {
        id: 'frameworks-prets',
        title: {
          fr: 'Des frameworks prêts à déployer',
          en: 'Frameworks ready to deploy'
        },
        body: {
          fr: 'CDT™, Game Changer Protocol, ingénierie systémique — vos équipes repartent avec les outils précis pour identifier où le temps fuit et l’offre plafonne.',
          en: 'CDT™, Game Changer Protocol, systemic engineering — your teams leave with the precise tools to spot where time leaks and offers plateau.'
        }
      },
      {
        id: 'standard-exigeant',
        title: {
          fr: 'Un standard d’exécution exigeant',
          en: 'A demanding execution standard'
        },
        body: {
          fr: 'Pas de keynote « inspirante » qui s’oublie le lundi suivant. Une intervention qui force l’équipe à se confronter à son architecture réelle.',
          en: 'No "inspirational" keynote that gets forgotten by Monday. An intervention that pushes teams to confront their actual architecture.'
        }
      }
    ]
  },

  // ─── Formats disponibles (concrete) ─────────────────────────────────────
  formats: {
    eyebrow: {
      fr: 'Formats disponibles',
      en: 'Available formats'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Trois formats. Une seule exigence.',
      en: 'Three formats. One standard.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Chaque format est calibré pour livrer du concret — pas du divertissement. Choisissez celui qui sert votre objectif.',
      en: 'Every format is calibrated to deliver substance — not entertainment. Pick the one that serves your objective.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'keynote',
        eyebrow: { fr: 'Keynote signature', en: 'Signature keynote' },
        duration: { fr: '45 à 75 minutes', en: '45 to 75 minutes' },
        title: { fr: 'Le format catalyseur', en: 'The catalyst format' },
        body: {
          fr: 'Une intervention dense, structurée, en plénière. Idéale pour ouvrir un séminaire, marquer un kick-off ou installer un cadre commun à votre équipe leadership.',
          en: 'A dense, structured plenary intervention. Ideal to open a seminar, mark a kick-off or set a shared framework for your leadership team.'
        }
      },
      {
        id: 'atelier',
        eyebrow: { fr: 'Atelier stratégique', en: 'Strategic workshop' },
        duration: { fr: '½ journée à 2 jours', en: 'Half-day to 2 days' },
        title: { fr: 'Le format atelier', en: 'The workshop format' },
        body: {
          fr: 'Travail en petit groupe (8 à 20 personnes) sur l’architecture réelle de votre activité. Diagnostics live, frameworks appliqués, plan d’action chiffré en sortie.',
          en: 'Small-group work (8 to 20 people) on the actual architecture of your business. Live diagnostics, applied frameworks, quantified action plan on exit.'
        }
      },
      {
        id: 'panel',
        eyebrow: { fr: 'Panel ou table ronde', en: 'Panel or roundtable' },
        duration: { fr: '60 à 90 minutes', en: '60 to 90 minutes' },
        title: { fr: 'Le format dialogue', en: 'The dialogue format' },
        body: {
          fr: 'Échange structuré avec d’autres intervenants, modéré ou non. Idéal pour vos événements à fort enjeu de credibilité éditoriale.',
          en: 'Structured exchange with other speakers, moderated or not. Ideal for your events with high editorial credibility stakes.'
        }
      }
    ]
  },

  // ─── Sujets de conférences (placeholder — Jonas confirme la liste finale) ─
  subjects: {
    eyebrow: {
      fr: 'Sujets de conférences',
      en: 'Talk topics'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Quatre thématiques signature.',
      en: 'Four signature themes.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Chaque sujet peut être livré en keynote, atelier ou panel. Les angles sont adaptés à votre secteur et à votre audience.',
      en: 'Each subject can be delivered as keynote, workshop or panel. Angles are adapted to your sector and audience.'
    } satisfies BilingualLax<string>,
    pendingNote: {
      fr: 'Catalog en cours de finalisation avec Jonas — version définitive disponible sur demande.',
      en: 'Catalog being finalized with Jonas — definitive version available on request.'
    } satisfies BilingualLax<string>,
    topics: [
      {
        id: 'scaling-sans-epuisement',
        title: {
          fr: 'Scaler sans s’épuiser : l’architecture d’une croissance durable',
          en: 'Scaling without burning out: the architecture of sustainable growth'
        },
        teaser: {
          fr: 'Comment les entreprises qui scalent le mieux installent une architecture qui les libère du goulot d’étranglement fondateur.',
          en: 'How the companies that scale best install an architecture that frees them from the founder bottleneck.'
        },
        audience: {
          fr: 'Dirigeants · comités de direction · équipes scale-up',
          en: 'Executives · leadership teams · scale-up teams'
        }
      },
      {
        id: 'gcp-keynote',
        title: {
          fr: 'Le Game Changer Protocol : quatre phases, un standard',
          en: 'The Game Changer Protocol: four phases, one standard'
        },
        teaser: {
          fr: 'Présentation signature du Protocol — Diagnostic, Implémentation, Optimisation, Propulser — appliqué aux structures d’entreprise.',
          en: 'Signature presentation of the Protocol — Diagnostic, Implementation, Optimization, Propel — applied to corporate structures.'
        },
        audience: {
          fr: 'Comités exécutifs · boards · sponsors transformation',
          en: 'Executive committees · boards · transformation sponsors'
        }
      },
      {
        id: 'cdt-elite',
        title: {
          fr: 'CDT™ — Compression Dynamique du Temps pour équipes leadership',
          en: 'CDT™ — Dynamic Time Compression for leadership teams'
        },
        teaser: {
          fr: 'Pourquoi vos meilleurs collaborateurs s’épuisent — et comment l’ingénierie systémique récupère 30 à 50% de leur temps utile.',
          en: 'Why your best people burn out — and how systemic engineering recovers 30 to 50% of their useful time.'
        },
        audience: {
          fr: 'Directeurs RH · CEO · responsables performance',
          en: 'HR directors · CEOs · performance leads'
        }
      },
      {
        id: 'mythe-effort',
        title: {
          fr: 'Le mythe de l’effort : pourquoi travailler plus ne change rien',
          en: 'The myth of effort: why working more changes nothing'
        },
        teaser: {
          fr: 'L’angle contre-intuitif que les organisations résistent — et le levier qu’elles découvrent une fois qu’elles l’adoptent.',
          en: 'The counter-intuitive angle organizations resist — and the lever they discover once they adopt it.'
        },
        audience: {
          fr: 'Tout-public corporate · conférences inspirationnelles',
          en: 'Broad corporate audiences · inspirational events'
        }
      }
    ]
  },

  // ─── Bio speaker B2B (PENDING — version raffinée Jonas attendue) ────────
  speaker: {
    eyebrow: {
      fr: 'L’intervenant',
      en: 'The speaker'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Jonas Diop — Architecte d’affaires & conférencier.',
      en: 'Jonas Diop — Business Architect & speaker.'
    } satisfies BilingualLax<string>,
    bio: {
      fr: 'Jonas Diop est l’architecte d’affaires derrière la méthodologie CDT™ et le Game Changer Protocol. Plus de 857 entrepreneurs accompagnés, plus de 31M$ générés pour ses clients. Fondateur de DIOP Stratégies Internationales Inc., basé à Montréal. Intervient au Québec, en France, en Belgique et en Suisse sur les enjeux de scaling, productivité d’élite et architecture d’affaires.',
      en: 'Jonas Diop is the business architect behind the CDT™ methodology and the Game Changer Protocol. 857+ entrepreneurs supported, $31M+ generated for his clients. Founder of DIOP Stratégies Internationales Inc., based in Montréal. Speaks across Québec, France, Belgium and Switzerland on scaling, elite productivity and business architecture.'
    } satisfies BilingualLax<string>,
    bioPending: true,
    bioPendingNote: {
      fr: 'Bio speaker corporate raffinée et fiche technique détaillée disponibles sur demande.',
      en: 'Refined corporate speaker bio and detailed press kit available on request.'
    } satisfies BilingualLax<string>
  },

  // ─── Références passées (PENDING — logos + events) ──────────────────────
  references: {
    eyebrow: {
      fr: 'Références',
      en: 'Past engagements'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ils ont fait appel à Jonas.',
      en: 'They have called on Jonas.'
    } satisfies BilingualLax<string>,
    pending: true,
    pendingNote: {
      fr: 'Logos clients corporate et historique des événements (conférences, séminaires, panels) — communiqués après confirmation auprès de Jonas.',
      en: 'Corporate client logos and event history (talks, seminars, panels) — shared after confirmation with Jonas.'
    } satisfies BilingualLax<string>,
    onRequest: {
      fr: 'Liste complète des références et témoignages disponibles sur simple demande pour qualifier le fit avec votre événement.',
      en: 'Full list of references and testimonials available on simple request to qualify the fit with your event.'
    } satisfies BilingualLax<string>
  },

  // ─── Galerie photos sur scène (PENDING) ─────────────────────────────────
  gallery: {
    eyebrow: {
      fr: 'Galerie',
      en: 'Gallery'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Jonas sur scène.',
      en: 'Jonas on stage.'
    } satisfies BilingualLax<string>,
    pending: true,
    pendingNote: {
      fr: 'Photos haute résolution des interventions passées — fournies dans le press kit corporate sur demande.',
      en: 'High-resolution photos from past speaking engagements — provided in the corporate press kit on request.'
    } satisfies BilingualLax<string>
  },

  // ─── FAQ B2B ────────────────────────────────────────────────────────────
  faq: {
    eyebrow: {
      fr: 'Questions fréquentes',
      en: 'Frequently asked'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Les questions des organisateurs.',
      en: 'Organizer questions.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'investissement',
        q: {
          fr: 'Quel est l’investissement pour une intervention ?',
          en: 'What is the investment for an engagement?'
        },
        a: {
          fr: 'L’investissement varie selon le format (keynote, atelier, panel), la durée, le nombre d’intervenants et la localisation. Les détails sont communiqués lors d’un appel de qualification, après évaluation du fit avec votre événement.',
          en: 'Investment varies by format (keynote, workshop, panel), duration, number of speakers and location. Details are shared during a qualification call, after assessing the fit with your event.'
        }
      },
      {
        id: 'preparation',
        q: {
          fr: 'Comment se déroule la préparation avec Jonas ?',
          en: 'How does preparation with Jonas unfold?'
        },
        a: {
          fr: 'Chaque intervention est précédée d’un brief approfondi : objectifs business, profil d’audience, contraintes éditoriales, dossier de prérequis. L’intervention finale est calibrée sur votre contexte spécifique — pas une keynote « sur étagère ».',
          en: 'Every engagement is preceded by an in-depth brief: business objectives, audience profile, editorial constraints, prerequisites dossier. The final intervention is calibrated to your specific context — not an off-the-shelf keynote.'
        }
      },
      {
        id: 'audience',
        q: {
          fr: 'Quels niveaux d’audience adressez-vous ?',
          en: 'What audience levels do you address?'
        },
        a: {
          fr: 'Du comité de direction au panel de managers senior, en passant par les conventions sectorielles. Jonas n’intervient pas devant des audiences « grand public » ou de l’événementiel pur entertainment.',
          en: 'From executive committees to senior management panels, through sector conventions. Jonas does not address "general public" audiences or pure entertainment events.'
        }
      },
      {
        id: 'langue',
        q: {
          fr: 'Les interventions sont-elles disponibles en français et en anglais ?',
          en: 'Are talks available in French and English?'
        },
        a: {
          fr: 'Oui. Jonas intervient indifféremment en français ou en anglais selon votre audience. Le matériel de support est livré dans la langue retenue (ou bilingue sur demande).',
          en: 'Yes. Jonas speaks fluently in French or English depending on your audience. Supporting material is delivered in the chosen language (or bilingual on request).'
        }
      },
      {
        id: 'logistique',
        q: {
          fr: 'Quelles sont les modalités logistiques ?',
          en: 'What are the logistical terms?'
        },
        a: {
          fr: 'Jonas se déplace dans toute la francophonie (Québec, France, Belgique, Suisse, Luxembourg, Maghreb francophone) et dans les pays anglophones sur demande. Les modalités de transport, hébergement et per diem sont définies avec l’organisateur en amont.',
          en: 'Jonas travels throughout the francophone world (Québec, France, Belgium, Switzerland, Luxembourg, French-speaking Maghreb) and to English-speaking countries on request. Travel, accommodation and per diem terms are defined with the organizer upstream.'
        }
      }
    ]
  },

  // ─── Final CTA B2B ──────────────────────────────────────────────────────
  finalCta: {
    eyebrow: {
      fr: 'Discuter de votre événement',
      en: 'Discuss your event'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Réservez un appel de qualification.',
      en: 'Book a qualification call.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Un échange de 30 minutes pour évaluer le fit avec votre événement, votre audience et vos objectifs. Sans engagement.',
      en: 'A 30-minute exchange to assess the fit with your event, your audience and your objectives. No commitment.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver mon appel stratégique',
      en: 'Book my strategy call'
    } satisfies BilingualLax<string>,
    secondaryNote: {
      fr: 'Press kit complet (bio speaker corporate, photos haute résolution, fiche technique, démos vidéo, références détaillées) disponible sur demande à contact@jonasdiop.com.',
      en: 'Full press kit (corporate speaker bio, high-resolution photos, technical sheet, video demos, detailed references) available on request at contact@jonasdiop.com.'
    } satisfies BilingualLax<string>
  }
} as const;
