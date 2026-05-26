import type { BilingualLax } from '@/lib/i18n/types';

/**
 * Testimonial data — Stitch boards 09 + 04 + 07 + 26.
 *
 * Placeholder copy + photos per Stitch generation. Tag `[À VALIDER JONAS]` marks
 * all fields requiring real testimonial validation (H3 pending — real client
 * names, real quotes, real metrics, real photos).
 *
 * Layout convention :
 *   - `centerElevated: true` → focal card (Marc Lefebvre per Stitch board 09)
 *   - Sides (Sophie Martin / David Chen) = smaller flank cards
 */

export interface TestimonialReal {
  readonly id: string;
  /** Portrait path under `/photos/`. */
  readonly photo: string;
  readonly photoAlt: BilingualLax<string>;
  readonly quote: BilingualLax<string>;
  readonly name: string;
  readonly role: BilingualLax<string>;
  /** Metric chip displayed below role (e.g. "+ 180K MRR", "2 OA × 2 TEMPS"). */
  readonly metric: BilingualLax<string>;
  /** Center focal card per Stitch board 09 asymmetric layout. */
  readonly centerElevated?: boolean;
}

export const testimonials: readonly TestimonialReal[] = [
  {
    id: 'sophie-martin',
    photo: '/photos/sophie-martin.png',
    photoAlt: {
      fr: 'Sophie Martin — CEO Agence du Design, Montréal',
      en: 'Sophie Martin — CEO Agence du Design, Montréal'
    },
    quote: {
      fr: "On a divisé par 2 nos heures travaillées sans diviser notre chiffre d'affaires. La méthode change la nature même du levier.",
      en: 'We cut our work hours by half — without cutting revenue. The method changes the very nature of leverage.'
    },
    name: 'Sophie Martin',
    role: {
      fr: 'CEO · Agence du Design · Montréal',
      en: 'CEO · Agence du Design · Montréal'
    },
    metric: {
      fr: '× 2 temps libre',
      en: '× 2 free time'
    }
  },
  {
    id: 'marc-lefebvre',
    photo: '/photos/marc-lefebvre.png',
    photoAlt: {
      fr: 'Marc Lefebvre — Fondateur, juridique boutique, Granby',
      en: 'Marc Lefebvre — Founder, boutique law firm, Granby'
    },
    quote: {
      fr: "Avant Jonas, nous étions bloqués à 850K. 6 mois après l'application de CDT™, nous avons franchi le seuil du million. Pas d'épuisement. Juste un changement d'architecture.",
      en: 'Before Jonas, we were stuck at $850K. Six months after applying CDT™, we crossed the million mark. No burnout. Just an architectural shift.'
    },
    name: 'Marc Lefebvre',
    role: {
      fr: 'Fondateur · Juridique boutique · Granby',
      en: 'Founder · Boutique law firm · Granby'
    },
    metric: {
      fr: '+ 180K $ MRR',
      en: '+ $180K MRR'
    },
    centerElevated: true
  },
  {
    id: 'david-chen',
    photo: '/photos/david-chen.png',
    photoAlt: {
      fr: 'David Chen — Cloud Consulting, Montréal',
      en: 'David Chen — Cloud Consulting, Montréal'
    },
    quote: {
      fr: "J'ai restructuré mon offre en 30 jours. 6 mois plus tard, j'active une rétention mensuelle premium. C'est l'architecture qui tient, pas la motivation.",
      en: 'I restructured my offer in 30 days. Six months later, I run a premium monthly retention. The architecture holds — not the motivation.'
    },
    name: 'David Chen',
    role: {
      fr: 'Cloud Consulting · Montréal',
      en: 'Cloud Consulting · Montréal'
    },
    metric: {
      fr: '+ 3 conversions premium',
      en: '+ 3 premium conversions'
    }
  }
] as const;

/**
 * @deprecated Legacy shell-card data. Kept for back-compat during Sprint 9 rollout.
 * New consumers should use `testimonials` directly.
 */
export interface TestimonialShell {
  readonly id: string;
  readonly centerElevated?: boolean;
}

export const testimonialShells: readonly TestimonialShell[] = testimonials.map((t) =>
  t.centerElevated ? { id: t.id, centerElevated: true } : { id: t.id }
);
