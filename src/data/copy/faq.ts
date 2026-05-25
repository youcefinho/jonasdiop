import type { BilingualLax } from '@/lib/i18n/types';

/**
 * faq.ts — FAQ complète (5 verbatim brief + 10 extensions cohérentes)
 * Copy source : BRIEF-FINAL.md + brief PDF Jonas (2026-05-21)
 * Draft : 2026-05-26 · Sprint 2.5 Batch 1
 * Q1-Q5 : verbatim brief Jonas
 */

export const faqCopy = {
  meta: {
    title: {
      fr: "FAQ — Questions fréquentes | Jonas Diop, Architecte d'affaires",
      en: 'FAQ — Frequently Asked Questions | Jonas Diop, Business Architect'
    } satisfies BilingualLax<string>,
    description: {
      fr: "Tout ce que les entrepreneurs nous demandent avant de s'engager : programmes, résultats, investissement, format, sélectivité.",
      en: 'Everything entrepreneurs ask us before committing : programs, results, investment, format, selectivity.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'FAQ',
      en: 'FAQ'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'Questions fréquentes.',
      en: 'Frequently asked questions.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: "Tout ce que les entrepreneurs nous demandent avant de s'engager.",
      en: 'Everything entrepreneurs ask us before committing.'
    } satisfies BilingualLax<string>
  },

  categories: [
    {
      id: 'avant-engager',
      title: {
        fr: "Avant de s'engager",
        en: 'Before committing'
      } satisfies BilingualLax<string>,
      items: [
        {
          id: 'pour-qui',
          question: {
            fr: 'Pour qui sont conçus vos programmes ?',
            en: 'Who are your programs designed for?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Nos programmes sont conçus pour des entrepreneurs, des coachs et des experts générant déjà entre 100K$ et 1M$ de chiffre d'affaires, qui veulent scaler sans s'épuiser et bâtir un écosystème à fort levier.\n\nCe ne sont pas des programmes pour débutants. Vous avez déjà prouvé que vous savez vendre et livrer. Notre rôle est de vous aider à faire plus avec ce que vous avez — pas à partir de zéro.",
            en: 'Our programs are designed for entrepreneurs, coaches, and experts already generating between $100K and $1M CAD in revenue, who want to scale without burning out and build a high-leverage ecosystem.\n\nThese are not beginner programs. You have already proven you can sell and deliver. Our role is to help you do more with what you have — not start from scratch.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'approche-differente',
          question: {
            fr: 'En quoi votre approche est-elle différente ?',
            en: 'How is your approach different?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Notre approche repose sur trois piliers distincts : architecture d'affaires, ingénierie systémique et CDT™ (Compression Dynamique du Temps).\n\nCe n'est pas de la théorie générique. Pas de cadres copiés-collés d'un livre de management. On part de votre architecture réelle, on identifie les leviers précis dans votre situation, et on exécute avec vous.\n\nLe pragmatisme et l'exécution mesurable ne sont pas des arguments marketing — c'est ce qui distingue un résultat d'une présentation PowerPoint.",
            en: 'Our approach rests on three distinct pillars : business architecture, systemic engineering, and CDT™ (Dynamic Time Compression).\n\nNo generic theory. No frameworks copy-pasted from a management book. We start from your actual architecture, identify the precise levers in your situation, and execute with you.\n\nPragmatism and measurable execution are not marketing arguments — they are what distinguishes a result from a PowerPoint presentation.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'resultats-temps',
          question: {
            fr: "Combien de temps avant d'obtenir des résultats concrets ?",
            en: 'How long before seeing concrete results?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Les résultats structurels — clarification de l'architecture, leviers identifiés, premières automatisations — arrivent dans les 30 premiers jours. Les résultats financiers significatifs se manifestent généralement entre 60 et 90 jours.\n\nCes timelines sont représentatives de nos mandats. Elles supposent un engagement complet et une exécution effective. Les résultats varient selon la situation de départ et le niveau d'exécution.",
            en: 'Structural results — architecture clarification, levers identified, first automations — arrive within the first 30 days. Meaningful financial results generally show between 60 and 90 days.\n\nThese timelines are representative of our engagements. They assume full commitment and effective execution. Results vary based on starting situation and execution level.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'selectivite',
          question: {
            fr: 'Travaillez-vous avec tout le monde ?',
            en: 'Do you work with everyone?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Non. Nous travaillons uniquement avec des entrepreneurs sérieux, prêts à investir dans leur croissance et à exécuter. Un appel de qualification est requis avant toute collaboration.\n\nCe n'est pas une posture commerciale. C'est une réalité opérationnelle : nos programmes sont conçus pour produire des résultats structurels. Si vous n'êtes pas prêt à remettre en question votre modèle et à exécuter, nous ne sommes pas le bon partenaire — et on vous le dira.",
            en: 'No. We work exclusively with serious entrepreneurs who are ready to invest in their growth and execute. A qualification call is required before any collaboration.\n\nThis is not a sales posture. It is an operational reality : our programs are built to produce structural results. If you are not ready to question your model and execute, we are not the right partner — and we will say so.'
          } satisfies BilingualLax<string>
        }
      ]
    },
    {
      id: 'formats',
      title: {
        fr: "Formats d'accompagnement",
        en: 'Advisory formats'
      } satisfies BilingualLax<string>,
      items: [
        {
          id: 'formats-programmes',
          question: {
            fr: "Quels formats d'accompagnement proposez-vous ?",
            en: 'What advisory formats do you offer?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: 'Nous proposons trois formats distincts :\n\n**Programmes de groupe** : Gamechanger Scaling (12 semaines) et The Shift (8 semaines) — pour une transformation structurelle complète, en cohorte restreinte avec sessions live hebdomadaires.\n\n**Formations spécialisées** : Master Closing, Focus & Flow, Cash & Scale™ — formations autonomes sur des compétences à fort impact, disponibles sur inscription.\n\n**Consultations Privées** : accompagnement stratégique 1:1 avec accès direct à Jonas, sur dossier uniquement, pour entrepreneurs 1M$+ CA.',
            en: 'We offer three distinct formats :\n\n**Group programs** : Gamechanger Scaling (12 weeks) and The Shift (8 weeks) — for complete structural transformation, in a small cohort with weekly live sessions.\n\n**Specialized trainings** : Master Closing, Focus & Flow, Cash & Scale™ — self-paced trainings on high-impact skills, available by registration.\n\n**Private Consultations** : 1:1 strategic advisory with direct access to Jonas, by application only, for $1M+ CAD entrepreneurs.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'groupe-vs-formation',
          question: {
            fr: 'Quelle est la différence entre les programmes de groupe et les formations ?',
            en: 'What is the difference between group programs and trainings?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Les programmes de groupe (Gamechanger Scaling, The Shift) sont des transformations intensives sur plusieurs semaines. Vous participez en cohorte restreinte, avec des sessions live hebdomadaires, un accès Slack privé et un accompagnement actif pendant toute la durée. C'est le format le plus complet pour une transformation d'architecture.\n\nLes formations spécialisées sont autonomes et centrées sur une compétence précise (closing, productivité, cash flow). Vous avancez à votre rythme avec accès aux modules vidéo, aux ressources et à des calls live ponctuels selon la formation.",
            en: 'Group programs (Gamechanger Scaling, The Shift) are intensive multi-week transformations. You participate in a small cohort with weekly live sessions, private Slack access, and active support throughout. This is the most comprehensive format for architecture transformation.\n\nSpecialized trainings are self-paced and focused on a specific skill (closing, productivity, cash flow). You move at your own pace with access to video modules, resources, and occasional live calls depending on the training.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'format-1-1',
          question: {
            fr: "Comment fonctionne l'accompagnement 1:1 (Consultations Privées) ?",
            en: 'How does 1:1 advisory (Private Consultations) work?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Les Consultations Privées sont l'accès le plus direct et le plus personnalisé au travail de Jonas. Le processus commence par une candidature, suivie d'un appel de pré-qualification, puis d'une session stratégique intensive avant de décider mutuellement d'une collaboration.\n\nC'est conçu pour des entrepreneurs qui ont déjà validé leur marché, qui génèrent 1M$+ de CA, et qui ont besoin d'un regard stratégique externe pour passer à l'étape suivante. Disponibilité très limitée.",
            en: "Private Consultations are the most direct and personalized access to Jonas's work. The process starts with an application, followed by a pre-qualification call, then an intensive strategy session before mutually deciding on a collaboration.\n\nThis is designed for entrepreneurs who have already validated their market, generating $1M+ CAD, and who need an external strategic perspective to reach the next level. Very limited availability."
          } satisfies BilingualLax<string>
        }
      ]
    },
    {
      id: 'investissement',
      title: {
        fr: 'Investissement',
        en: 'Investment'
      } satisfies BilingualLax<string>,
      items: [
        {
          id: 'tarifs',
          question: {
            fr: 'Quels sont vos tarifs ?',
            en: 'What are your rates?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Nos tarifs ne sont pas affichés publiquement. Chaque programme a une structure de prix qui dépend du format, de la durée et de l'accès inclus.\n\nLes détails d'investissement sont communiqués lors de l'appel de qualification, une fois que nous avons évalué si votre situation correspond au bon programme. Réserver un appel est la meilleure façon d'obtenir une information précise et adaptée.",
            en: 'Our rates are not publicly listed. Each program has a pricing structure that depends on the format, duration, and included access.\n\nInvestment details are shared during the qualification call, once we have assessed whether your situation matches the right program. Booking a call is the best way to get accurate, relevant information.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'paiement',
          question: {
            fr: 'Quelles sont les modalités de paiement ?',
            en: 'What are the payment terms?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "[À VALIDER JONAS — modalités de paiement précises : paiement complet, versements, plans, cartes acceptées, etc.]\n\nNos options de paiement sont discutées lors de l'appel de qualification.",
            en: '[TO VALIDATE WITH JONAS — precise payment terms : full payment, installments, plans, accepted cards, etc.]\n\nPayment options are discussed during the qualification call.'
          } satisfies BilingualLax<string>
        }
      ]
    },
    {
      id: 'resultats-garanties',
      title: {
        fr: 'Résultats & garanties',
        en: 'Results & guarantees'
      } satisfies BilingualLax<string>,
      items: [
        {
          id: 'garanties',
          question: {
            fr: 'Offrez-vous une garantie de résultats ?',
            en: 'Do you offer a results guarantee?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Non. Et voici pourquoi c'est important à comprendre : nos programmes produisent des résultats mesurables quand les deux parties s'engagent pleinement. Jonas et l'équipe apportent la méthodologie, le cadre et l'accompagnement. Vous apportez l'exécution.\n\nNous ne pouvons pas garantir des résultats à quelqu'un qui n'exécute pas. Ce que nous garantissons : la qualité de la méthodologie CDT™, la précision du diagnostic, et l'accompagnement actif pendant toute la durée du programme.\n\nLes résultats affichés sont représentatifs des entrepreneurs qui exécutent pleinement. Résultats variables selon engagement.",
            en: 'No. And here is why that matters : our programs produce measurable results when both parties are fully committed. Jonas and the team bring the methodology, the framework, and the guidance. You bring the execution.\n\nWe cannot guarantee results for someone who does not execute. What we do guarantee : the quality of the CDT™ methodology, the precision of the diagnostic, and active support throughout the program duration.\n\nDisplayed results are representative of entrepreneurs who fully execute. Results vary based on engagement.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'preuves-resultats',
          question: {
            fr: 'Comment mesurez-vous les résultats de vos clients ?',
            en: 'How do you measure client results?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Les résultats sont mesurés sur trois axes : structurel (architecture simplifiée, systèmes en place, temps récupéré), commercial (croissance du CA, amélioration des marges) et opérationnel (réduction de la dépendance du fondateur).\n\nChaque mandat CDT™ commence par un diagnostic de référence et se termine par un bilan chiffré. C'est ce qui nous permet de dire que nos clients ont collectivement généré plus de 31M$+ de CA additionnel.",
            en: 'Results are measured on three axes : structural (simplified architecture, systems in place, time reclaimed), commercial (revenue growth, margin improvement), and operational (reduced founder dependency).\n\nEvery CDT™ engagement starts with a baseline diagnostic and ends with a quantified assessment. This is what allows us to say our clients have collectively generated over $31M+ CAD in additional revenue.'
          } satisfies BilingualLax<string>
        }
      ]
    },
    {
      id: 'logistique',
      title: {
        fr: 'Logistique',
        en: 'Logistics'
      } satisfies BilingualLax<string>,
      items: [
        {
          id: 'lieu',
          question: {
            fr: 'Êtes-vous basés à Montréal uniquement ?',
            en: 'Are you Montréal-based only?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: 'Jonas Diop est basé à Montréal, mais nous travaillons avec des entrepreneurs partout dans le monde. Tous nos programmes sont accessibles à distance — aucun déplacement requis.\n\nPour les entrepreneurs montréalais qui le souhaitent, des sessions en présentiel peuvent être organisées selon les disponibilités.',
            en: 'Jonas Diop is based in Montréal, but we work with entrepreneurs worldwide. All our programs are accessible remotely — no travel required.\n\nFor Montréal-based entrepreneurs who prefer it, in-person sessions can be arranged subject to availability.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'langue',
          question: {
            fr: 'Travaillez-vous en français et en anglais ?',
            en: 'Do you work in both French and English?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: 'Oui. Jonas Diop travaille couramment en français et en anglais. Les programmes sont disponibles dans les deux langues. Le contenu principal est en français (marché québécois), avec une version anglaise complète pour les entrepreneurs hors Québec.',
            en: 'Yes. Jonas Diop works fluently in both French and English. Programs are available in both languages. The primary content is in French (Québec market), with a full English version for non-Québec entrepreneurs.'
          } satisfies BilingualLax<string>
        },
        {
          id: 'format-calls',
          question: {
            fr: 'Comment se déroulent les sessions ?',
            en: 'How do sessions work?'
          } satisfies BilingualLax<string>,
          answer: {
            fr: "Les sessions se tiennent en visioconférence (Zoom ou équivalent). Un lien Calendly est fourni pour la réservation des appels. Les sessions d'enregistrement sont disponibles pour les participants qui ne peuvent pas assister en direct.\n\nLes groupes sont intentionnellement restreints (6 à 12 personnes selon le programme) pour garantir la qualité des échanges et de l'accompagnement.",
            en: 'Sessions are held via video conference (Zoom or equivalent). A Calendly link is provided for booking calls. Session recordings are available for participants who cannot attend live.\n\nGroups are intentionally small (6 to 12 people depending on the program) to ensure quality of exchanges and support.'
          } satisfies BilingualLax<string>
        }
      ]
    }
  ],

  finalCta: {
    eyebrow: {
      fr: 'Une autre question ?',
      en: 'Another question?'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Posez-la directement.',
      en: 'Ask it directly.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Un appel de 20 minutes pour répondre à toutes vos questions et évaluer si nos programmes correspondent à votre situation.',
      en: 'A 20-minute call to answer all your questions and assess whether our programs fit your situation.'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Réserver un appel',
      en: 'Book a call'
    } satisfies BilingualLax<string>
  }
} as const;
