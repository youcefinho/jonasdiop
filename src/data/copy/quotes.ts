import type { BilingualLax } from '@/lib/i18n/types';

/**
 * Verbatim quotes from Jonas Diop, sourced from his own video pitches
 * (The Game Changer System intro, 2026-05-28). Used as pull-quotes across
 * the marketing pages — short, direct, "tu"-voice — to inject the
 * founder's own voice into otherwise institutional "vous" copy.
 *
 * Pairing convention :
 *   - quote = Jonas's verbatim line
 *   - attribution = always "Jonas Diop" (locale-stable)
 *   - role = locale-aware tagline used under the name
 */

export interface JonasQuote {
  readonly id: string;
  readonly quote: BilingualLax<string>;
  readonly attribution: string;
  readonly role: BilingualLax<string>;
}

export const jonasQuotes = {
  system: {
    id: 'system-not-level',
    quote: {
      fr: 'Les entrepreneurs ne sont pas bloqués par leur niveau — ils sont bloqués par leur système.',
      en: 'Entrepreneurs are not held back by their level — they are held back by their system.'
    },
    attribution: 'Jonas Diop',
    role: {
      fr: 'Architecte d’affaires',
      en: 'Business Architect'
    }
  },

  poumonCoeur: {
    id: 'poumon-coeur',
    quote: {
      fr: 'Tu es le poumon et le cœur de ton activité — tout dépend de toi. Ce n’est pas en faisant plus que tu vas gagner plus, c’est en faisant mieux.',
      en: 'You are the lungs and the heart of your business — everything depends on you. You will not earn more by doing more, but by doing better.'
    },
    attribution: 'Jonas Diop',
    role: {
      fr: 'Architecte d’affaires',
      en: 'Business Architect'
    }
  },

  fairePlusFaireMieux: {
    id: 'faire-mieux',
    quote: {
      fr: 'Ce n’est pas en faisant plus que tu vas gagner plus. C’est en faisant mieux, en faisant de manière optimisée.',
      en: 'You will not earn more by doing more. You will earn more by doing better — by operating with leverage.'
    },
    attribution: 'Jonas Diop',
    role: {
      fr: 'Architecte d’affaires',
      en: 'Business Architect'
    }
  },

  planifierEchec: {
    id: 'planifier-echec',
    quote: {
      fr: 'La personne qui manque de planifier planifie son échec.',
      en: 'The person who fails to plan plans to fail.'
    },
    attribution: 'Jonas Diop',
    role: {
      fr: 'Architecte d’affaires',
      en: 'Business Architect'
    }
  },

  franklin: {
    id: 'franklin',
    quote: {
      fr: 'La majorité des hommes meurent à 25 ans, mais sont enterrés à 75. Nous, on fait vivre ta vision.',
      en: 'Most men die at 25 but are not buried until 75. We make your vision come alive.'
    },
    attribution: 'Jonas Diop',
    role: {
      fr: 'En écho à Benjamin Franklin',
      en: 'Echoing Benjamin Franklin'
    }
  }
} as const satisfies Record<string, JonasQuote>;
