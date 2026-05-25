import type { BilingualLax } from '@/lib/i18n/types';

export type ProgrammeVariant = 'groupe' | 'formation' | 'accompagnement';

export type ProgrammeHrefKey =
  | 'services-gamechanger-scaling'
  | 'services-the-shift'
  | 'services-master-closing'
  | 'services-focus-flow'
  | 'services-cash-scale'
  | 'services-consultations-privees';

export interface Programme {
  readonly id: string;
  readonly variant: ProgrammeVariant;
  readonly eyebrow: BilingualLax<string>;
  readonly name: BilingualLax<string>;
  readonly description: BilingualLax<string>;
  readonly hrefKey: ProgrammeHrefKey;
}

export const programmes: readonly Programme[] = [
  {
    id: 'gamechanger-scaling',
    variant: 'groupe',
    eyebrow: { fr: 'Programme de groupe · 12 semaines', en: 'Group program · 12 weeks' },
    name: { fr: 'Gamechanger Scaling', en: 'Gamechanger Scaling' },
    description: {
      fr: 'Le programme intensif pour entrepreneurs entre 6 et 7 chiffres en quête de scaling structurel.',
      en: 'The intensive program for 6-to-7 figure entrepreneurs seeking structural scaling.'
    },
    hrefKey: 'services-gamechanger-scaling'
  },
  {
    id: 'the-shift',
    variant: 'groupe',
    eyebrow: { fr: 'Programme de groupe · 8 semaines', en: 'Group program · 8 weeks' },
    name: { fr: 'The Shift', en: 'The Shift' },
    description: {
      fr: 'Pivot stratégique pour entrepreneurs en transition vers un modèle plus à fort levier.',
      en: 'Strategic pivot for entrepreneurs transitioning to a higher-leverage model.'
    },
    hrefKey: 'services-the-shift'
  },
  {
    id: 'master-closing',
    variant: 'formation',
    eyebrow: { fr: 'Formation spécialisée', en: 'Specialized training' },
    name: { fr: 'Master Closing', en: 'Master Closing' },
    description: {
      fr: "Maîtriser l'art du closing haute valeur pour entrepreneurs et équipes commerciales.",
      en: 'Master the art of high-value closing for entrepreneurs and sales teams.'
    },
    hrefKey: 'services-master-closing'
  },
  {
    id: 'focus-flow',
    variant: 'formation',
    eyebrow: { fr: 'Formation spécialisée', en: 'Specialized training' },
    name: { fr: 'Focus & Flow', en: 'Focus & Flow' },
    description: {
      fr: "Productivité d'élite : récupérer 50% de votre temps via l'ingénierie systémique.",
      en: 'Elite productivity : reclaim 50% of your time via systemic engineering.'
    },
    hrefKey: 'services-focus-flow'
  },
  {
    id: 'cash-scale',
    variant: 'formation',
    eyebrow: { fr: 'Formation spécialisée', en: 'Specialized training' },
    name: { fr: 'Cash & Scale™', en: 'Cash & Scale™' },
    description: {
      fr: 'Optimisation cash flow & levier financier pour scaler avec maîtrise.',
      en: 'Cash flow & financial leverage optimization to scale with control.'
    },
    hrefKey: 'services-cash-scale'
  },
  {
    id: 'consultations-privees',
    variant: 'accompagnement',
    eyebrow: { fr: 'Accompagnement 1:1 · sur invitation', en: '1:1 advisory · by invitation' },
    name: { fr: 'Consultations Privées', en: 'Private Consultations' },
    description: {
      fr: 'Travail stratégique 1:1, accès direct à Jonas. Sur dossier uniquement.',
      en: '1:1 strategic work, direct access to Jonas. By application only.'
    },
    hrefKey: 'services-consultations-privees'
  }
];
