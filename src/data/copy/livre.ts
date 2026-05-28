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
      fr: 'La méthodologie CDT™ complète en livre — frameworks, case studies, exécution. En préparation.',
      en: 'The complete CDT™ methodology in book form — frameworks, case studies, execution. In preparation.'
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
      fr: 'En préparation. Inscris-toi pour être notifié dès que le manuel est disponible.',
      en: 'In preparation. Sign up to be notified the moment the manual is available.'
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
      fr: `Ce livre est la version écrite de ce que 15 ans d'accompagnement ont produit : une méthodologie complète d'architecture d'affaires, accessible à n'importe quel entrepreneur sérieux — que tu aies accès aux programmes ou non.

Ce n'est pas un livre de motivation. C'est un manuel de travail. Chaque chapitre se termine par des exercices d'application directe sur ton architecture réelle.

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
      fr: 'Sommaire prévisionnel — version définitive à confirmer à la finalisation.',
      en: 'Provisional outline — final version confirmed at completion.'
    } satisfies BilingualLax<string>,
    chapters: [
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
          fr: 'Édition physique — distributeur annoncé à la publication.',
          en: 'Physical edition — distributor announced at publication.'
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
          fr: 'Version audio prévue. Plateformes et narration confirmées au lancement.',
          en: 'Audio version planned. Platforms and narration confirmed at launch.'
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
      fr: 'Date de sortie annoncée prochainement.',
      en: 'Release date announced soon.'
    } satisfies BilingualLax<string>,
    placeholder: {
      fr: "Les abonnés à la liste d'attente seront notifiés en premier — accès prioritaire au lancement.",
      en: 'Waitlist subscribers are notified first — priority access at launch.'
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
      fr: "Inscris-toi pour recevoir une notification dès que le livre est disponible — et bénéficier d'un accès prioritaire au lancement.",
      en: 'Sign up to receive a notification as soon as the book is available — and benefit from priority access at launch.'
    } satisfies BilingualLax<string>,
    emailPlaceholder: {
      fr: 'ton@email.com',
      en: 'your@email.com'
    } satisfies BilingualLax<string>,
    submitLabel: {
      fr: "M'inscrire sur la liste d'attente",
      en: 'Add me to the waitlist'
    } satisfies BilingualLax<string>,
    confirmationMessage: {
      fr: "Tu es sur la liste. On t'écrit dès la sortie.",
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
