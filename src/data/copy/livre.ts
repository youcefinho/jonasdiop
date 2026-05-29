import type { BilingualLax } from '@/lib/i18n/types';

/**
 * livre.ts — Page Livre (parent) brief v3 §3.7
 *
 * 9 sections requises :
 *  1. HERO (visuel 3D + 2 CTAs)
 *  2. POURQUOI CE LIVRE
 *  3. APERÇU DU CONTENU (chapitres + extraits)
 *  4. POUR QUI
 *  5. TÉMOIGNAGES LECTEURS
 *  6. OPTIONS D'ACHAT (formats + packs)
 *  7. BONUS GRATUITS (lead magnet form)
 *  8. AUTRES LIVRES (mosaïque)
 *  9. CTA FINAL
 *
 * État : SHELL pré-publication. Livre pas encore édité — tous les liens
 * d'achat, témoignages et formats prix sont placeholders propres + flag
 * `pending: true` sur sections en attente (pattern testé dans conferences.ts).
 *
 * Tone : TU partout (livre = audience entrepreneurs, pas B2B).
 *
 * Sous-pages par livre : voir LivreSousPageTemplate.tsx — démontre le pattern
 * « même structure adaptée au livre spécifique » à partir de la même data
 * shape (autresLivres.items pourront référencer un slug une fois publiés).
 *
 * Tests legacy backward-compat préservés :
 *  - sommaire.chapters[7] avec numéros 01→07 et "Pilier 1/2/3"
 *  - options.formats avec labels Print / Ebook / Audiobook
 *  - bonus.form input email disabled + submit "M'inscrire"
 *  - finalCta avec texte "Rejoindre la liste d'attente"
 */

export const livreCopy = {
  meta: {
    title: {
      fr: "Le Livre — Architecture d'affaires : le manuel | Jonas Diop",
      en: 'The Book — Business Architecture : the manual | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'La méthodologie CDT™ complète en livre — frameworks, case studies, exécution. En préparation.',
      en: 'The complete CDT™ methodology in book form — frameworks, case studies, execution. In preparation.'
    } satisfies BilingualLax<string>
  },

  // ─── 1. HERO ──────────────────────────────────────────────────────────────
  hero: {
    eyebrow: {
      fr: 'Le livre · bientôt disponible',
      en: 'The book · coming soon'
    } satisfies BilingualLax<string>,
    h1: {
      fr: "Architecture d'affaires : le manuel.",
      en: 'Business Architecture : the manual.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "La méthodologie CDT™ complète, mise en page et exécutable. Frameworks, case studies, exercices d'application — pour les entrepreneurs sérieux qui veulent appliquer la méthode de façon autonome.",
      en: 'The complete CDT™ methodology, laid out and executable. Frameworks, case studies, application exercises — for serious entrepreneurs who want to apply the method autonomously.'
    } satisfies BilingualLax<string>,
    ctaAcheter: {
      fr: 'Acheter le livre',
      en: 'Buy the book'
    } satisfies BilingualLax<string>,
    ctaAcheterDisabledNote: {
      fr: 'Disponible à la publication',
      en: 'Available at publication'
    } satisfies BilingualLax<string>,
    ctaChapitreGratuit: {
      fr: 'Recevoir le 1er chapitre',
      en: 'Get the first chapter'
    } satisfies BilingualLax<string>,
    visuel3DDescription: {
      fr: 'Aperçu de la couverture · à venir',
      en: 'Cover preview · coming soon'
    } satisfies BilingualLax<string>,
    visuel3DTeaser: {
      fr: 'AJOUTE\nUN ZÉRO',
      en: 'ADD\nA ZERO'
    } satisfies BilingualLax<string>,
    multiFormatLabel: {
      fr: 'Print · Ebook · Audiobook',
      en: 'Print · Ebook · Audiobook'
    } satisfies BilingualLax<string>
  },

  // ─── 2. POURQUOI CE LIVRE ─────────────────────────────────────────────────
  pourquoi: {
    eyebrow: {
      fr: 'Pourquoi ce livre',
      en: 'Why this book'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'La CDT™ complète. Mise en page. Exécutable.',
      en: 'CDT™ complete. Laid out. Executable.'
    } satisfies BilingualLax<string>,
    intro: {
      fr: "Ce livre est la version écrite de ce que 15 ans d'accompagnement ont produit : une méthodologie complète d'architecture d'affaires, accessible à n'importe quel entrepreneur sérieux — que tu aies accès aux programmes ou non.",
      en: 'This book is the written version of what 15 years of advisory has produced : a complete business architecture methodology, accessible to any serious entrepreneur — whether or not you have access to the programs.'
    } satisfies BilingualLax<string>,
    beneficesItems: [
      {
        id: 'methodologie-complete',
        title: {
          fr: 'La méthodologie complète',
          en: 'The complete methodology'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'CDT™ en profondeur. Les frameworks que les clients des programmes reçoivent. Pas une version diluée pour le grand public.',
          en: 'CDT™ in depth. The same frameworks program clients receive. Not a diluted public version.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'manuel-de-travail',
        title: {
          fr: 'Un manuel de travail',
          en: 'A working manual'
        } satisfies BilingualLax<string>,
        body: {
          fr: "Chaque chapitre se termine par des exercices d'application directe sur ton architecture réelle. Pas de motivation — du levier.",
          en: 'Each chapter ends with direct application exercises on your real architecture. No motivation talk — leverage.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'case-studies-reels',
        title: {
          fr: 'Des case studies avec métriques',
          en: 'Case studies with real metrics'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Des études de cas clients avec chiffres avant/après. Tu vois exactement ce qui a été activé, dans quel ordre, avec quel résultat mesurable.',
          en: 'Client case studies with before/after numbers. You see exactly what was activated, in what order, with what measurable outcome.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'outils-autodiagnostic',
        title: {
          fr: "Des outils d'autodiagnostic",
          en: 'Self-diagnostic tools'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Grilles, scorecards et frameworks applicables dès la lecture. Tu peux mesurer ton architecture sans coaching externe.',
          en: 'Grids, scorecards and frameworks applicable from the first read. You can measure your architecture without external coaching.'
        } satisfies BilingualLax<string>
      }
    ],
    citationFort: {
      fr: 'Pas un livre de motivation. Un manuel de travail — frameworks, exercices, métriques. Le même standard que les programmes.',
      en: 'Not a motivation book. A working manual — frameworks, exercises, metrics. The same standard as the programs.'
    } satisfies BilingualLax<string>,
    citationAuthor: {
      fr: 'Jonas Diop',
      en: 'Jonas Diop'
    } satisfies BilingualLax<string>
  },

  // ─── 3. APERÇU DU CONTENU ─────────────────────────────────────────────────
  apercu: {
    eyebrow: {
      fr: 'Aperçu du contenu',
      en: 'Content preview'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Les 7 chapitres.',
      en: 'The 7 chapters.'
    } satisfies BilingualLax<string>,
    intro: {
      fr: 'Sommaire prévisionnel — version définitive confirmée à la finalisation. Chaque chapitre se termine par des exercices appliqués sur ton architecture réelle.',
      en: 'Provisional outline — final version confirmed at completion. Each chapter ends with exercises applied to your real architecture.'
    } satisfies BilingualLax<string>,
    chapitresPrincipaux: [
      {
        number: '01',
        title: {
          fr: 'Pourquoi ton architecture te ralentit',
          en: 'Why your architecture is slowing you down'
        } satisfies BilingualLax<string>,
        sub: {
          fr: 'Les patterns récurrents que Jonas a observés sur 857 mandats',
          en: 'The recurring patterns Jonas observed across 857 engagements'
        } satisfies BilingualLax<string>
      },
      {
        number: '02',
        title: {
          fr: 'La CDT™ — Compression Dynamique du Temps',
          en: 'CDT™ — Dynamic Time Compression'
        } satisfies BilingualLax<string>,
        sub: {
          fr: 'Fondements, principes, pourquoi ça fonctionne',
          en: 'Foundations, principles, why it works'
        } satisfies BilingualLax<string>
      },
      {
        number: '03',
        title: {
          fr: "Pilier 1 : Architecture de l'offre",
          en: 'Pillar 1 : Offer architecture'
        } satisfies BilingualLax<string>,
        sub: {
          fr: 'Repositionner, simplifier, tarifer pour le levier',
          en: 'Reposition, simplify, price for leverage'
        } satisfies BilingualLax<string>
      },
      {
        number: '04',
        title: {
          fr: "Pilier 2 : Architecture de l'équipe",
          en: 'Pillar 2 : Team architecture'
        } satisfies BilingualLax<string>,
        sub: {
          fr: 'Déléguer sans friction, réduire la dépendance fondateur',
          en: 'Delegate without friction, reduce founder dependency'
        } satisfies BilingualLax<string>
      },
      {
        number: '05',
        title: {
          fr: 'Pilier 3 : Compression des systèmes',
          en: 'Pillar 3 : Systems compression'
        } satisfies BilingualLax<string>,
        sub: {
          fr: 'Automatiser ce qui peut tourner sans toi',
          en: 'Automate what can run without you'
        } satisfies BilingualLax<string>
      },
      {
        number: '06',
        title: {
          fr: 'Scaling commercial sur la nouvelle architecture',
          en: 'Commercial scaling on the new architecture'
        } satisfies BilingualLax<string>,
        sub: {
          fr: 'Pipeline, acquisition, rétention avec levier',
          en: 'Pipeline, acquisition, retention with leverage'
        } satisfies BilingualLax<string>
      },
      {
        number: '07',
        title: {
          fr: 'Itération mesurable et continuité',
          en: 'Measurable iteration and continuity'
        } satisfies BilingualLax<string>,
        sub: {
          fr: 'Tableaux de bord simples. Mesurer les bons indicateurs.',
          en: 'Simple dashboards. Measure the right indicators.'
        } satisfies BilingualLax<string>
      }
    ],
    extraitsVisuels: [
      {
        id: 'cadre-cdt',
        label: {
          fr: 'Cadre CDT™ — 3 piliers',
          en: 'CDT™ framework — 3 pillars'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Diagramme déplié en page double : les 3 piliers, leurs leviers, l'ordre d'activation.",
          en: 'Double-page diagram : the 3 pillars, their levers, the activation order.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'scorecard-architecture',
        label: {
          fr: "Scorecard d'architecture",
          en: 'Architecture scorecard'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Grille d'autodiagnostic à remplir avant chaque chapitre. Mesure ton point de départ réel.",
          en: 'Self-diagnostic grid filled before each chapter. Measure your real starting point.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'case-study-format',
        label: {
          fr: 'Format case study',
          en: 'Case study format'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Avant / décision / activation / après — chiffré, daté, signé par le client cité.',
          en: 'Before / decision / activation / after — quantified, dated, signed by the cited client.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  // ─── 4. POUR QUI ──────────────────────────────────────────────────────────
  pourQui: {
    eyebrow: {
      fr: 'Pour qui',
      en: 'For who'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Pour les entrepreneurs sérieux qui n'ont pas accès aux programmes.",
      en: "For serious entrepreneurs who don't have access to the programs."
    } satisfies BilingualLax<string>,
    audienceCible: {
      fr: `Nos programmes ont une capacité limitée et un investissement significatif. Ce livre existe pour les entrepreneurs qui veulent appliquer la méthodologie CDT™ de façon autonome — ou qui veulent valider leur compréhension de l'approche avant de postuler à un programme.

Pas un produit d'appel. Un vrai outil de travail.`,
      en: `Our programs have limited capacity and a significant investment. This book exists for entrepreneurs who want to apply the CDT™ methodology autonomously — or who want to validate their understanding of the approach before applying to a program.

Not a lead magnet. A real working tool.`
    } satisfies BilingualLax<string>,
    prerequis: {
      eyebrow: {
        fr: 'Pré-requis',
        en: 'Prerequisites'
      } satisfies BilingualLax<string>,
      items: [
        {
          id: 'pr-business',
          body: {
            fr: 'Un business actif générant 100K$ à 1M$ — pas un projet en idéation.',
            en: 'An active business generating $100K to $1M — not an ideation project.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'pr-temps',
          body: {
            fr: 'Au moins 10h pour lire + appliquer les exercices au fil des chapitres.',
            en: 'At least 10h to read and apply the exercises across the chapters.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'pr-engagement',
          body: {
            fr: "L'intention réelle d'exécuter — pas seulement de lire pour s'informer.",
            en: 'The real intention to execute — not just to read for information.'
          } satisfies BilingualLax<string>
        }
      ]
    }
  },

  // ─── 5. TÉMOIGNAGES LECTEURS ──────────────────────────────────────────────
  temoignages: {
    eyebrow: {
      fr: 'Ce que disent les premiers lecteurs',
      en: 'What early readers say'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Les retours des bêta-lecteurs.',
      en: 'Beta reader feedback.'
    } satisfies BilingualLax<string>,
    pending: true,
    pendingNote: {
      fr: 'Témoignages collectés auprès des bêta-lecteurs · publiés au lancement du livre.',
      en: 'Testimonials collected from beta readers · published at the book launch.'
    } satisfies BilingualLax<string>,
    onRequest: {
      fr: 'Tu veux relire un chapitre en avant-première et donner ton retour ? Écris-nous — le panel bêta est encore ouvert.',
      en: 'Want to preview a chapter and give feedback ? Write us — the beta panel is still open.'
    } satisfies BilingualLax<string>,
    items: [] as ReadonlyArray<{
      id: string;
      nom: BilingualLax<string>;
      role: BilingualLax<string>;
      citation: BilingualLax<string>;
      note: number;
    }>
  },

  // ─── 6. OPTIONS D'ACHAT ───────────────────────────────────────────────────
  options: {
    eyebrow: {
      fr: "Options d'achat",
      en: 'Buying options'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Print, ebook, audiobook — au lancement.',
      en: 'Print, ebook, audiobook — at launch.'
    } satisfies BilingualLax<string>,
    intro: {
      fr: "Les liens d'achat seront activés au lancement officiel. Inscris-toi à la liste pour recevoir l'accès prioritaire et les codes early-reader.",
      en: 'Purchase links activate at official launch. Sign up to the list for priority access and early-reader codes.'
    } satisfies BilingualLax<string>,
    formats: [
      {
        id: 'fmt-print',
        format: 'Print',
        label: {
          fr: 'Édition physique',
          en: 'Physical edition'
        } satisfies BilingualLax<string>,
        prix: {
          fr: 'Prix annoncé au lancement',
          en: 'Price announced at launch'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Couverture rigide · papier premium · diagrammes en double page. Distribué via librairies indépendantes et Amazon.',
          en: 'Hardcover · premium paper · double-page diagrams. Distributed via independent bookstores and Amazon.'
        } satisfies BilingualLax<string>,
        lien: '#',
        lienLabel: {
          fr: 'Disponible à la publication',
          en: 'Available at publication'
        } satisfies BilingualLax<string>
      },
      {
        id: 'fmt-ebook',
        format: 'Ebook',
        label: {
          fr: 'Format numérique',
          en: 'Digital format'
        } satisfies BilingualLax<string>,
        prix: {
          fr: 'Prix annoncé au lancement',
          en: 'Price announced at launch'
        } satisfies BilingualLax<string>,
        description: {
          fr: "PDF + ePub · accès immédiat à l'achat · annotations et recherche full-text. Inclut les outils d'autodiagnostic au format imprimable.",
          en: 'PDF + ePub · instant access on purchase · annotations and full-text search. Includes printable self-diagnostic tools.'
        } satisfies BilingualLax<string>,
        lien: '#',
        lienLabel: {
          fr: 'Disponible à la publication',
          en: 'Available at publication'
        } satisfies BilingualLax<string>
      },
      {
        id: 'fmt-audio',
        format: 'Audiobook',
        label: {
          fr: 'Version audio',
          en: 'Audio version'
        } satisfies BilingualLax<string>,
        prix: {
          fr: 'Prix annoncé au lancement',
          en: 'Price announced at launch'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Narration confirmée au lancement · livret PDF des diagrammes inclus. Plateformes principales (Audible, Apple Books).',
          en: 'Narration confirmed at launch · companion PDF of diagrams included. Major platforms (Audible, Apple Books).'
        } satisfies BilingualLax<string>,
        lien: '#',
        lienLabel: {
          fr: 'Disponible à la publication',
          en: 'Available at publication'
        } satisfies BilingualLax<string>
      }
    ],
    packs: {
      eyebrow: {
        fr: 'Packs',
        en: 'Packs'
      } satisfies BilingualLax<string>,
      pending: true,
      pendingNote: {
        fr: 'Packs combinés (print + ebook, ebook + audio, édition signée) annoncés au lancement.',
        en: 'Combined packs (print + ebook, ebook + audio, signed edition) announced at launch.'
      } satisfies BilingualLax<string>,
      items: [] as ReadonlyArray<{
        id: string;
        label: BilingualLax<string>;
        description: BilingualLax<string>;
        prix: BilingualLax<string>;
      }>
    }
  },

  // ─── 7. BONUS GRATUITS ────────────────────────────────────────────────────
  bonus: {
    eyebrow: {
      fr: 'Bonus gratuits',
      en: 'Free bonuses'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Reçois un avant-goût — gratuit.',
      en: 'Get a preview — free.'
    } satisfies BilingualLax<string>,
    leadMagnetDescription: {
      fr: "Trois ressources livrées immédiatement par email : le premier chapitre du livre en PDF, une fiche d'action condensée pour démarrer un audit de ton architecture, et une vidéo bonus de Jonas qui décortique un case study client.",
      en: 'Three resources delivered immediately by email : the first chapter of the book in PDF, a condensed action sheet to start an audit of your architecture, and a bonus video of Jonas breaking down a client case study.'
    } satisfies BilingualLax<string>,
    items: [
      {
        id: 'bonus-chapitre',
        title: {
          fr: 'Chapitre 1 en PDF',
          en: 'Chapter 1 PDF'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Le premier chapitre complet du livre. ~40 pages avec les premiers exercices d'autodiagnostic.",
          en: 'The complete first chapter. ~40 pages with the first self-diagnostic exercises.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'bonus-fiche',
        title: {
          fr: "Fiche d'action 1 page",
          en: '1-page action sheet'
        } satisfies BilingualLax<string>,
        description: {
          fr: 'Le diagnostic CDT™ condensé à imprimer. À remplir avant de poser des décisions structurelles dans ton business.',
          en: 'The condensed CDT™ diagnostic to print. Fill it before making any structural business decision.'
        } satisfies BilingualLax<string>
      },
      {
        id: 'bonus-video',
        title: {
          fr: 'Vidéo bonus 12 min',
          en: '12-min bonus video'
        } satisfies BilingualLax<string>,
        description: {
          fr: "Jonas décortique un case study client passé de 350K$ à 1.1M$ en 18 mois sans ajouter d'heures.",
          en: 'Jonas breaks down a client case study scaled from $350K to $1.1M in 18 months without adding hours.'
        } satisfies BilingualLax<string>
      }
    ],
    formLabels: {
      emailPlaceholder: {
        fr: 'ton@email.com',
        en: 'your@email.com'
      } satisfies BilingualLax<string>,
      emailSrLabel: {
        fr: 'Adresse courriel',
        en: 'Email address'
      } satisfies BilingualLax<string>,
      submitLabel: {
        fr: "M'inscrire sur la liste d'attente",
        en: 'Add me to the waitlist'
      } satisfies BilingualLax<string>,
      consentMessage: {
        fr: 'Un seul email à la sortie. Pas de spam. Désinscription en un clic.',
        en: 'One email at launch. No spam. One-click unsubscribe.'
      } satisfies BilingualLax<string>,
      confirmationMessage: {
        fr: "Tu es sur la liste. On t'écrit dès la sortie.",
        en: "You're on the list. We'll reach out as soon as it launches."
      } satisfies BilingualLax<string>,
      platformNote: {
        fr: "Plateforme email en cours d'intégration · disponible au lancement.",
        en: 'Email platform being integrated · available at launch.'
      } satisfies BilingualLax<string>
    }
  },

  // ─── 8. AUTRES LIVRES ─────────────────────────────────────────────────────
  autresLivres: {
    eyebrow: {
      fr: 'Autres livres',
      en: 'Other books'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'À venir dans la bibliothèque Jonas Diop.',
      en: 'Coming next to the Jonas Diop library.'
    } satisfies BilingualLax<string>,
    pending: true,
    pendingNote: {
      fr: "Un seul livre publié à ce jour. La bibliothèque s'étoffera au fil des publications — méthodologies sectorielles, cahiers d'exercices, éditions spéciales.",
      en: 'Only one book published to date. The library will grow with future publications — sector methodologies, exercise workbooks, special editions.'
    } satisfies BilingualLax<string>,
    items: [] as ReadonlyArray<{
      slug: string;
      titre: BilingualLax<string>;
      teaser: BilingualLax<string>;
      lien: string;
    }>
  },

  // ─── 9. CTA FINAL ─────────────────────────────────────────────────────────
  finalCta: {
    eyebrow: {
      fr: 'Commande ton exemplaire',
      en: 'Order your copy'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Rejoindre la liste d'attente.",
      en: 'Join the waitlist.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Accès prioritaire à la publication. Codes early-reader réservés à la liste. Premier chapitre + fiche action envoyés immédiatement.',
      en: 'Priority access at publication. Early-reader codes reserved for the list. First chapter + action sheet sent immediately.'
    } satisfies BilingualLax<string>,
    ctaPrincipal: {
      fr: "Rejoindre la liste d'attente",
      en: 'Join the waitlist'
    } satisfies BilingualLax<string>,
    ctaSecondaire: {
      fr: 'Recevoir le chapitre gratuit',
      en: 'Get the free chapter'
    } satisfies BilingualLax<string>
  }
} as const;
