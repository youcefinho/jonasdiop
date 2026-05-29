import type { BilingualLax } from '@/lib/i18n/types';

/**
 * evenementsRetraites.ts — /evenements/retraites (FR) + /en/events/retreats (EN).
 *
 * Skeleton pré-lancement : structure complète, contenu honnête "première édition
 * en préparation". Capture email "Sois notifié" wired sur /api/waitlist
 * (waitlist KV, même endpoint que les bootcamps Trilogie).
 *
 * Sources de vérité :
 *   1. Brief v3 §2 sitemap (Retraites sous-page sibling de Bootcamps)
 *   2. Formulaire signé (vision: levier, scaling sans s'épuiser, écosystème)
 *   3. Carte Types section /evenements (audience 500K$+, 6-10 participants,
 *      5-7 jours, sélection)
 *
 * Mode pré-lancement : aucune date promise, aucun lieu confirmé, aucun
 * témoignage inventé. Sentinel honnête "première édition en préparation 2027".
 */

export const evenementsRetraitesCopy = {
  meta: {
    title: {
      fr: 'Retraites — Jonas Diop · 5 à 7 jours · format transformation profonde',
      en: 'Retreats — Jonas Diop · 5 to 7 days · deep transformation format'
    } satisfies BilingualLax<string>,
    description: {
      fr: 'Format retraite immersive 5 à 7 jours pour entrepreneurs 500K$+ qui veulent franchir un palier. Lieu retiré, déconnexion totale, travail en profondeur. Première édition en préparation.',
      en: 'Immersive 5-7 day retreat format for $500K+ entrepreneurs ready to break through. Secluded location, total disconnection, deep work. First edition in preparation.'
    } satisfies BilingualLax<string>
  },

  hero: {
    eyebrow: {
      fr: 'Format transformation profonde',
      en: 'Deep transformation format'
    } satisfies BilingualLax<string>,
    h1: {
      fr: 'La retraite qui change ta trajectoire',
      en: 'The retreat that changes your trajectory'
    } satisfies BilingualLax<string>,
    sub: {
      fr: '5 à 7 jours, lieu retiré, déconnexion totale. Pour les entrepreneurs 500K$+ qui sentent qu’ils sont à un palier et veulent le franchir cette année — pas dans trois ans.',
      en: '5 to 7 days, secluded location, total disconnection. For $500K+ entrepreneurs who feel they are at a ceiling and want to break through this year — not three years from now.'
    } satisfies BilingualLax<string>,
    microProof: {
      fr: 'Format sélectif · 6 à 10 participants · Première édition 2027',
      en: 'Selective format · 6 to 10 participants · First edition 2027'
    } satisfies BilingualLax<string>,
    ctaLabel: {
      fr: 'Sois notifié des dates',
      en: 'Get notified when dates open'
    } satisfies BilingualLax<string>
  },

  pitch: {
    eyebrow: {
      fr: 'Pourquoi une retraite',
      en: 'Why a retreat'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce que 5 jours déconnecté change qu’aucun bootcamp 3 jours ne peut.',
      en: 'What 5 disconnected days change that no 3-day bootcamp can.'
    } satisfies BilingualLax<string>,
    pillars: [
      {
        title: {
          fr: 'Architecture complète',
          en: 'Complete architecture'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Pas un seul levier travaillé — les trois axes du business, de l’énergie et de la vision en parallèle. Le seul format où on peut vraiment recâbler les trois.',
          en: 'Not a single lever worked — the three axes of business, energy and vision in parallel. The only format where you can truly rewire all three.'
        } satisfies BilingualLax<string>
      },
      {
        title: {
          fr: 'Lieu + déconnexion',
          en: 'Place + disconnection'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Lieu retiré sélectionné pour neutraliser ton quotidien. Pas de Slack, pas d’emails, pas de réunions. La condition pour penser vraiment.',
          en: 'Secluded location selected to neutralize your daily noise. No Slack, no emails, no meetings. The precondition for actual thinking.'
        } satisfies BilingualLax<string>
      },
      {
        title: { fr: 'Groupe étroit', en: 'Tight group' } satisfies BilingualLax<string>,
        body: {
          fr: '6 à 10 entrepreneurs sélectionnés. Chacun à 500K$+. La dynamique de groupe devient un levier — pas un public.',
          en: '6 to 10 selected entrepreneurs. Each at $500K+. The group dynamic becomes a lever — not an audience.'
        } satisfies BilingualLax<string>
      },
      {
        title: {
          fr: 'Accès direct Jonas',
          en: 'Direct Jonas access'
        } satisfies BilingualLax<string>,
        body: {
          fr: 'Pas de hot seats survolés. Sessions individuelles avec Jonas dans le format. C’est l’unique format où le travail 1-à-1 est inclus.',
          en: 'No hot seats skimmed over. Individual sessions with Jonas included in the format. The only format where 1-on-1 work is part of the deal.'
        } satisfies BilingualLax<string>
      }
    ]
  },

  forWho: {
    eyebrow: {
      fr: 'Pour qui',
      en: 'For whom'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Ce format n’est pas pour tout le monde.',
      en: 'This format is not for everyone.'
    } satisfies BilingualLax<string>,
    forItems: [
      {
        fr: 'Tu génères 500K$+ de revenus annuels',
        en: 'You generate $500K+ in annual revenue'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu sens que tu plafonnes malgré tous tes efforts',
        en: 'You feel you are plateauing despite all your effort'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu es prêt à bloquer une semaine complète, déconnecté',
        en: 'You are ready to block a full week, disconnected'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu cherches une refonte d’architecture, pas un tuning',
        en: 'You seek an architecture overhaul, not a tune-up'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu veux travailler en groupe étroit (6-10), pas en masse',
        en: 'You want to work in a tight group (6-10), not en masse'
      } satisfies BilingualLax<string>
    ],
    notForItems: [
      {
        fr: 'Tu démarres ou tu es sous 250K$ — commence par les bootcamps',
        en: 'You are starting or under $250K — start with the bootcamps'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu cherches du contenu vidéo / un cours en ligne',
        en: 'You are looking for video content / an online course'
      } satisfies BilingualLax<string>,
      {
        fr: 'Tu ne peux pas te déconnecter une semaine complète',
        en: 'You cannot disconnect for a full week'
      } satisfies BilingualLax<string>
    ]
  },

  format: {
    eyebrow: {
      fr: 'Le format',
      en: 'The format'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Comment ça se passe.',
      en: 'How it unfolds.'
    } satisfies BilingualLax<string>,
    rows: [
      {
        label: { fr: 'Durée', en: 'Duration' } satisfies BilingualLax<string>,
        value: {
          fr: '5 à 7 jours immersifs',
          en: '5 to 7 immersive days'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Lieu', en: 'Location' } satisfies BilingualLax<string>,
        value: {
          fr: 'Retiré · sélectionné · annoncé à l’inscription',
          en: 'Secluded · curated · announced at enrollment'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Audience', en: 'Audience' } satisfies BilingualLax<string>,
        value: {
          fr: 'Entrepreneurs 500K$+ · 6 à 10 participants · sélection sur application',
          en: '$500K+ entrepreneurs · 6 to 10 participants · selection by application'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Animation', en: 'Facilitation' } satisfies BilingualLax<string>,
        value: {
          fr: 'Jonas Diop en présentiel · sessions collectives + 1-à-1 inclus',
          en: 'Jonas Diop in person · group sessions + 1-on-1 included'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Tarif', en: 'Pricing' } satisfies BilingualLax<string>,
        value: {
          fr: 'Communiqué à l’ouverture de la cohorte',
          en: 'Communicated when the cohort opens'
        } satisfies BilingualLax<string>
      },
      {
        label: { fr: 'Première édition', en: 'First edition' } satisfies BilingualLax<string>,
        value: {
          fr: 'En préparation · 2027 · liste prioritaire ouverte',
          en: 'In preparation · 2027 · priority list open'
        } satisfies BilingualLax<string>
      }
    ]
  },

  notify: {
    eyebrow: {
      fr: 'Liste prioritaire',
      en: 'Priority list'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Sois notifié à l’ouverture de la cohorte.',
      en: 'Get notified when the cohort opens.'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'Les 6 à 10 places de la première édition seront proposées en priorité aux personnes sur cette liste. Aucun engagement — juste être au courant en premier.',
      en: 'The 6 to 10 spots of the first edition will be offered in priority to people on this list. No commitment — just hear about it first.'
    } satisfies BilingualLax<string>,
    emailPlaceholder: { fr: 'ton@email.com', en: 'your@email.com' } satisfies BilingualLax<string>,
    submitLabel: {
      fr: 'Me notifier',
      en: 'Notify me'
    } satisfies BilingualLax<string>,
    consentNote: {
      fr: 'En soumettant, tu acceptes d’être notifié (Loi 25 Québec). Pas de spam.',
      en: 'By submitting, you agree to be notified (Quebec Law 25). No spam.'
    } satisfies BilingualLax<string>,
    successMessage: {
      fr: 'Inscrit. Tu seras parmi les premiers à recevoir l’annonce.',
      en: 'Subscribed. You’ll be among the first to receive the announcement.'
    } satisfies BilingualLax<string>
  },

  crossLink: {
    eyebrow: {
      fr: 'Autres formats',
      en: 'Other formats'
    } satisfies BilingualLax<string>,
    title: {
      fr: 'Pas le bon format pour toi ?',
      en: 'Not the right format for you?'
    } satisfies BilingualLax<string>,
    sub: {
      fr: 'La retraite est le format le plus immersif. Pour quelque chose de plus tactique ou plus accessible, regarde les autres :',
      en: 'The retreat is the most immersive format. For something more tactical or more accessible, look at the others :'
    } satisfies BilingualLax<string>
  }
} as const;
