import { clientConfig } from '@/config/clientConfig';
import { ROUTES, type RouteKey } from '@/config/routes';
import { ta } from '@/lib/i18n/translations';
import type { BilingualLax } from '@/lib/i18n/types';

interface PageMetaInput {
  readonly title: BilingualLax<string>;
  readonly description: BilingualLax<string>;
}

/**
 * Default site-wide meta — fallback for routes without copy-defined meta
 * (home, dev-components, article detail before slug resolution) and for
 * unknown paths.
 */
const DEFAULT_META: PageMetaInput = {
  title: {
    fr: "Jonas Diop — Architecte d'affaires & scaling stratégique Montréal | DIOP Stratégies Internationales",
    en: 'Jonas Diop — Business Architect & Strategic Scaling Montréal | DIOP Stratégies Internationales'
  },
  description: {
    fr: "Ajouter un zéro à votre chiffre d'affaires en récupérant 50% de votre temps. Méthodologie CDT™ et scaling stratégique pour entrepreneurs, coachs et experts générant 100K$ à 1M$ — Montréal, Québec & Worldwide.",
    en: 'Add a zero to your revenue while reclaiming 50% of your time. CDT™ methodology and strategic scaling for entrepreneurs, coaches and experts generating $100K to $1M — Montréal, Québec & Worldwide.'
  }
};

/**
 * Registry mapping RouteKey → dynamic import of the route's copy file.
 *
 * Dynamic imports preserve route-level code splitting : importing pageMeta
 * itself doesn't pull every copy file into the entry chunk. Each copy lands
 * in the chunk Vite already creates for the matching route (autoCodeSplitting).
 *
 * Result : the meta layer adds zero bytes to the initial JS bundle. Meta is
 * fetched on the same chunk the user already loaded for that route.
 */
type MetaLoader = () => Promise<PageMetaInput>;

const META_LOADERS: Partial<Record<RouteKey, MetaLoader>> = {
  about: async () => (await import('@/data/copy/about')).aboutCopy.meta,
  'methodologie-cdt': async () =>
    (await import('@/data/copy/methodologie-cdt')).methodologieCdtCopy.meta,
  services: async () => (await import('@/data/copy/services')).servicesCopy.meta,
  'services-gamechanger-scaling': async () =>
    (await import('@/data/copy/services-gamechanger-scaling')).gamechangerScalingCopy.meta,
  'services-the-shift': async () =>
    (await import('@/data/copy/services-the-shift')).theShiftCopy.meta,
  'services-master-closing': async () =>
    (await import('@/data/copy/services-master-closing')).masterClosingCopy.meta,
  'services-focus-flow': async () =>
    (await import('@/data/copy/services-focus-flow')).focusFlowCopy.meta,
  'services-cash-scale': async () =>
    (await import('@/data/copy/services-cash-scale')).cashScaleCopy.meta,
  'services-consultations-privees': async () =>
    (await import('@/data/copy/services-consultations-privees')).consultationsPriveesCopy.meta,
  faq: async () => (await import('@/data/copy/faq')).faqCopy.meta,
  contact: async () => (await import('@/data/copy/contact')).contactCopy.meta,
  temoignages: async () => (await import('@/data/copy/temoignages')).temoignagesCopy.meta,
  livre: async () => (await import('@/data/copy/livre')).livreCopy.meta,
  evenements: async () => (await import('@/data/copy/evenements')).evenementsCopy.meta,
  ressources: async () => (await import('@/data/copy/ressources')).ressourcesCopy.meta,
  podcast: async () => {
    const mod = await import('@/data/copy/podcast');
    return clientConfig.podcast.status === 'live'
      ? mod.podcastCopy.meta.scenarioA
      : mod.podcastCopy.meta.scenarioB;
  },
  'mentions-legales': async () =>
    (await import('@/data/copy/mentions-legales')).mentionsLegalesCopy.meta,
  'politique-confidentialite': async () =>
    (await import('@/data/copy/politique-confidentialite')).politiqueConfidentialiteCopy.meta,
  'conditions-utilisation': async () =>
    (await import('@/data/copy/conditions-utilisation')).conditionsUtilisationCopy.meta
};

/**
 * Reverse lookup : pathname → RouteKey + locale. Returns null for unknown
 * paths (dev-components, article detail with $slug, 404).
 */
export function lookupRouteKey(pathname: string): {
  key: RouteKey;
  locale: 'fr' | 'en';
} | null {
  const cleaned = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  for (const [key, paths] of Object.entries(ROUTES) as Array<
    [RouteKey, { fr: string; en: string }]
  >) {
    if (paths.fr === cleaned) return { key, locale: 'fr' };
    if (paths.en === cleaned) return { key, locale: 'en' };
  }
  return null;
}

export interface ResolvedPageMeta {
  readonly title: string;
  readonly description: string;
  readonly locale: 'fr' | 'en';
  readonly canonical: string;
  readonly alternates: {
    readonly fr: string;
    readonly en: string;
  };
}

const DEFAULT_ORIGIN = clientConfig.site.productionUrl;

/**
 * Resolve meta for a pathname. Async because we lazy-load the per-route copy
 * to keep the initial JS bundle small.
 */
export async function resolvePageMeta(
  pathname: string,
  origin = DEFAULT_ORIGIN
): Promise<ResolvedPageMeta> {
  const lookup = lookupRouteKey(pathname);
  const locale: 'fr' | 'en' = lookup?.locale ?? 'fr';
  const loader = lookup ? META_LOADERS[lookup.key] : undefined;
  const metaSource: PageMetaInput = loader ? await loader() : DEFAULT_META;
  const altPaths = lookup ? ROUTES[lookup.key] : { fr: ROUTES.home.fr, en: ROUTES.home.en };

  return {
    title: ta(metaSource.title, locale),
    description: ta(metaSource.description, locale),
    locale,
    canonical: `${origin}${altPaths[locale]}`,
    alternates: {
      fr: `${origin}${altPaths.fr}`,
      en: `${origin}${altPaths.en}`
    }
  };
}

/**
 * Synchronous fallback resolver — returns DEFAULT_META without loading any
 * copy file. Used by SSR + test contexts that don't want async resolution.
 */
export function resolvePageMetaSync(pathname: string, origin = DEFAULT_ORIGIN): ResolvedPageMeta {
  const lookup = lookupRouteKey(pathname);
  const locale: 'fr' | 'en' = lookup?.locale ?? 'fr';
  const altPaths = lookup ? ROUTES[lookup.key] : { fr: ROUTES.home.fr, en: ROUTES.home.en };

  return {
    title: ta(DEFAULT_META.title, locale),
    description: ta(DEFAULT_META.description, locale),
    locale,
    canonical: `${origin}${altPaths[locale]}`,
    alternates: {
      fr: `${origin}${altPaths.fr}`,
      en: `${origin}${altPaths.en}`
    }
  };
}

/**
 * Apply resolved meta to document.head. Idempotent — updates existing elements
 * or creates them on first call. Cleans up old hreflang link alternates before
 * re-inserting so language switches don't leak.
 *
 * SSR-safe : no-op when document is undefined.
 */
export function applyPageMeta(meta: ResolvedPageMeta): void {
  if (typeof document === 'undefined') return;

  document.documentElement.lang = meta.locale === 'fr' ? 'fr-CA' : 'en';

  document.title = meta.title;

  setMeta('name', 'description', meta.description);

  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', meta.canonical);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:locale', meta.locale === 'fr' ? 'fr_CA' : 'en_US');
  setMeta('property', 'og:site_name', 'Jonas Diop — DIOP Stratégies Internationales Inc.');
  setMeta('property', 'og:locale:alternate', meta.locale === 'fr' ? 'en_US' : 'fr_CA');

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);

  setLink('canonical', meta.canonical, null);

  removeAllHreflang();
  setLink('alternate', meta.alternates.fr, 'fr-CA');
  setLink('alternate', meta.alternates.en, 'en');
  setLink('alternate', meta.alternates.fr, 'x-default');
}

function setMeta(attr: 'name' | 'property', key: string, value: string): void {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el === null) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function removeAllHreflang(): void {
  const links = document.head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]');
  for (const link of links) {
    link.remove();
  }
}

function setLink(rel: string, href: string, hreflang: string | null): void {
  if (hreflang === null) {
    const selector = `link[rel="${rel}"]:not([hreflang])`;
    let el = document.head.querySelector<HTMLLinkElement>(selector);
    if (el === null) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    return;
  }
  const el = document.createElement('link');
  el.setAttribute('rel', rel);
  el.setAttribute('href', href);
  el.setAttribute('hreflang', hreflang);
  document.head.appendChild(el);
}
