import type { BilingualLax } from '@/lib/i18n/types';

/**
 * livre.ts — Page Livre (shell teaser "à venir")
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 2
 * [À VALIDER JONAS] markers = statut livre (écrit / en cours / projet futur), dates, format
 * Mode : shell teaser capture — contenu définitif pending H6 Jonas
 */

export const livreCopy = {
  meta: {
    title: {
      fr: "Le Livre — Architecture d'affaires : le manuel | Jonas Diop",
      en: 'The Book — Business Architecture : the manual | Jonas Diop'
    } satisfies BilingualLax<string>,
    description: {
      fr: '[À VALIDER JONAS — description meta selon statut livre]. La méthodologie CDT™ complète en livre — frameworks, case studies, exécution.',
      en: '[TO VALIDATE WITH JONAS — meta description per book status]. The complete CDT™ methodology in book form — frameworks, case studies, execution.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Livre',
      en: 'Book'
    } satisfies BilingualLax<string>,
    h1: {
      fr: "Architecture d'affaires : le manuel.",
      en: 'Business Architecture : the manual.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "[À VALIDER JONAS — statut livre : écrit / en cours d'écriture / projet pour 2026-2027. Cette ligne change complètement selon le statut réel.]",
      en: '[TO VALIDATE WITH JONAS — book status : written / in progress / project for 2026-2027. This line changes entirely depending on actual status.]'
    } satisfies BilingualLax<string>
  },

  about: {
    eyebrow: {
      fr: 'À propos du livre',
      en: 'About the book'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'La CDT™ complète. Mise en page. Exécutable.',
      en: 'CDT™ complete. Laid out. Executable.'
    } satisfies BilingualLax<string>,
    body: {
      fr: `Ce livre est la version écrite de ce que 15 ans d'accompagnement ont produit : une méthodologie complète d'architecture d'affaires, accessible à n'importe quel entrepreneur sérieux — que vous ayez accès aux programmes ou non.

Ce n'est pas un livre de motivation. C'est un manuel de travail. Chaque chapitre se termine par des exercices d'application directe sur votre architecture réelle.

La CDT™ en profondeur. Les frameworks que les clients des programmes reçoivent. Des case studies clients avec métriques réelles. Des outils d'autodiagnostic applicables dès la lecture.`,
      en: `This book is the written version of what 15 years of advisory has produced : a complete business architecture methodology, accessible to any serious entrepreneur — whether or not you have access to the programs.

This is not a motivation book. It is a working manual. Each chapter ends with direct application exercises on your real architecture.

CDT™ in depth. The frameworks program clients receive. Client case studies with real metrics. Self-diagnostic tools applicable from the first read.`
    } satisfies BilingualLax<string>
  },

  forWho: {
    eyebrow: {
      fr: 'Pour qui',
      en: 'For who'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Pour les entrepreneurs sérieux qui n'ont pas accès aux programmes.",
      en: "For serious entrepreneurs who don't have access to the programs."
    } satisfies BilingualLax<string>,
    body: {
      fr: `Nos programmes ont une capacité limitée et un investissement significatif. Ce livre existe pour les entrepreneurs qui veulent appliquer la méthodologie CDT™ de façon autonome — ou qui veulent valider leur compréhension de l'approche avant de postuler à un programme.

Pas un produit d'appel. Un vrai outil de travail.`,
      en: `Our programs have limited capacity and a significant investment. This book exists for entrepreneurs who want to apply the CDT™ methodology autonomously — or who want to validate their understanding of the approach before applying to a program.

Not a lead magnet. A real working tool.`
    } satisfies BilingualLax<string>
  },

  sommaire: {
    eyebrow: {
      fr: 'Sommaire prévu',
      en: 'Planned outline'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Les 7 chapitres.',
      en: 'The 7 chapters.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: '[À VALIDER JONAS — structure finale du livre à confirmer. Proposition alignée CDT™ 3 piliers :]',
      en: '[TO VALIDATE WITH JONAS — final book structure to confirm. Proposal aligned with CDT™ 3 pillars :]'
    } satisfies BilingualLax<string>,
    chapters: [
      {
        number: '01',
        title: {
          fr: 'Pourquoi votre architecture vous ralentit',
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
          fr: 'Automatiser ce qui peut tourner sans vous',
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
    ]
  },

  format: {
    eyebrow: {
      fr: 'Format prévu',
      en: 'Planned format'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Print, ebook, audiobook.',
      en: 'Print, ebook, audiobook.'
    } satisfies BilingualLax<string>,
    items: [
      {
        format: 'Print',
        description: {
          fr: 'Édition physique — disponible via [À VALIDER JONAS — Amazon / distributeur]',
          en: 'Physical edition — available via [TO VALIDATE WITH JONAS — Amazon / distributor]'
        } satisfies BilingualLax<string>
      },
      {
        format: 'Ebook',
        description: {
          fr: "Format numérique — PDF + ePub, accès immédiat à l'achat",
          en: 'Digital format — PDF + ePub, immediate access on purchase'
        } satisfies BilingualLax<string>
      },
      {
        format: 'Audiobook',
        description: {
          fr: '[À VALIDER JONAS — audiobook narré par Jonas lui-même ? Plateformes : Spotify / Audible ?]',
          en: '[TO VALIDATE WITH JONAS — audiobook narrated by Jonas himself? Platforms : Spotify / Audible?]'
        } satisfies BilingualLax<string>
      }
    ]
  },

  release: {
    eyebrow: {
      fr: 'Sortie',
      en: 'Release'
    } satisfies BilingualLax<string>,
    title: {
      fr: '[À VALIDER JONAS — date de sortie estimée]',
      en: '[TO VALIDATE WITH JONAS — estimated release date]'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: '[À VALIDER JONAS — Q4 2026 ? Q1 2027 ? Selon statut réel du livre. Si livre déjà écrit : date de publication annoncée. Si en cours : date estimée finition. Si projet : horizon.]',
      en: '[TO VALIDATE WITH JONAS — Q4 2026? Q1 2027? Based on actual book status. If already written: announced publication date. If in progress: estimated completion. If project: horizon.]'
    } satisfies BilingualLax<string>
  },

  waitlist: {
    eyebrow: {
      fr: "Liste d'attente",
      en: 'Waitlist'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Soyez notifié dès la sortie.',
      en: 'Be the first to know.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Inscrivez-vous pour recevoir une notification dès que le livre est disponible — et bénéficier d'un accès prioritaire au lancement.",
      en: 'Sign up to receive a notification as soon as the book is available — and benefit from priority access at launch.'
    } satisfies BilingualLax<string>,
    emailPlaceholder: {
      fr: 'votre@email.com',
      en: 'your@email.com'
    } satisfies BilingualLax<string>,
    submitLabel: {
      fr: "M'inscrire sur la liste d'attente",
      en: 'Add me to the waitlist'
    } satisfies BilingualLax<string>,
    confirmationMessage: {
      fr: 'Vous êtes sur la liste. On vous écrit dès la sortie.',
      en: "You're on the list. We'll reach out as soon as it launches."
    } satisfies BilingualLax<string>
  },

  finalCta: {
    eyebrow: {
      fr: 'En attendant',
      en: 'In the meantime'
    } satisfies BilingualLax<string>,
    title: {
      fr: "Rejoindre la liste d'attente.",
      en: 'Join the waitlist.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Accès prioritaire. Notification dès la sortie.',
      en: 'Priority access. Notification at launch.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: "Rejoindre la liste d'attente",
      en: 'Join the waitlist'
    } satisfies BilingualLax<string>
  }
} as const;
