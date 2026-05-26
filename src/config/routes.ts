/**
 * Type-safe route paths — Jonas Diop écosystème (17 pages × FR/EN = 34 routes).
 * Sprint 0 : seules / et /en existent. Les autres seront générées au fur et à mesure.
 */

export type RouteKey =
  | 'home'
  | 'about'
  | 'methodologie-cdt'
  | 'services'
  | 'services-gamechanger-scaling'
  | 'services-the-shift'
  | 'services-master-closing'
  | 'services-focus-flow'
  | 'services-cash-scale'
  | 'services-consultations-privees'
  | 'faq'
  | 'contact'
  | 'temoignages'
  | 'livre'
  | 'evenements'
  | 'ressources'
  | 'podcast'
  | 'mentions-legales'
  | 'politique-confidentialite'
  | 'conditions-utilisation';

type RoutePaths = Record<RouteKey, { fr: string; en: string }>;

export const ROUTES: RoutePaths = {
  home: { fr: '/', en: '/en' },
  about: { fr: '/a-propos', en: '/en/about' },
  'methodologie-cdt': { fr: '/methodologie-cdt', en: '/en/cdt-methodology' },
  services: { fr: '/services', en: '/en/services' },
  'services-gamechanger-scaling': {
    fr: '/services/gamechanger-scaling',
    en: '/en/services/gamechanger-scaling'
  },
  'services-the-shift': { fr: '/services/the-shift', en: '/en/services/the-shift' },
  'services-master-closing': { fr: '/services/master-closing', en: '/en/services/master-closing' },
  'services-focus-flow': { fr: '/services/focus-flow', en: '/en/services/focus-flow' },
  'services-cash-scale': { fr: '/services/cash-scale', en: '/en/services/cash-scale' },
  'services-consultations-privees': {
    fr: '/services/consultations-privees',
    en: '/en/services/private-consultations'
  },
  faq: { fr: '/faq', en: '/en/faq' },
  contact: { fr: '/contact', en: '/en/contact' },
  temoignages: { fr: '/temoignages', en: '/en/testimonials' },
  livre: { fr: '/livre', en: '/en/book' },
  evenements: { fr: '/evenements', en: '/en/events' },
  ressources: { fr: '/ressources', en: '/en/resources' },
  podcast: { fr: '/podcast', en: '/en/podcast' },
  'mentions-legales': { fr: '/mentions-legales', en: '/en/legal-notice' },
  'politique-confidentialite': { fr: '/politique-confidentialite', en: '/en/privacy-policy' },
  'conditions-utilisation': { fr: '/conditions-utilisation', en: '/en/terms-of-use' }
};
