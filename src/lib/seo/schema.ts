import { clientConfig } from '@/config/clientConfig';
import { ROUTES, type RouteKey } from '@/config/routes';
import { programmes } from '@/data/programmes';
import { ta } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/types';

// ─────────────────────────────────────────────────────────────────────────────
// Node type definitions (Schema.org)
// ─────────────────────────────────────────────────────────────────────────────

interface SchemaOrganization {
  '@type': 'Organization';
  '@id': string;
  name: string;
  legalName: string;
  email: string;
  telephone: string;
  url: string;
  sameAs: string[];
}

interface SchemaPerson {
  '@type': 'Person';
  '@id': string;
  name: string;
  jobTitle: string;
  worksFor: { '@id': string };
  sameAs: string[];
}

interface SchemaWebSite {
  '@type': 'WebSite';
  '@id': string;
  url: string;
  name: string;
  inLanguage: string;
  publisher: { '@id': string };
}

interface SchemaService {
  '@type': 'Service';
  '@id': string;
  name: string;
  description: string;
  url: string;
  provider: { '@id': string };
  serviceType: string;
  areaServed: string[];
}

interface SchemaItemList {
  '@type': 'ItemList';
  '@id': string;
  name: string;
  numberOfItems: number;
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    item: { '@id': string };
  }>;
}

interface SchemaQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

interface SchemaFAQPage {
  '@type': 'FAQPage';
  '@id': string;
  inLanguage: string;
  mainEntity: SchemaQuestion[];
}

interface SchemaBook {
  '@type': 'Book';
  '@id': string;
  name: string;
  author: { '@id': string };
  inLanguage: string;
  bookFormat?:
    | 'https://schema.org/EBook'
    | 'https://schema.org/Paperback'
    | 'https://schema.org/Hardcover'
    | 'https://schema.org/AudiobookFormat';
  isbn?: string;
  datePublished?: string;
  publisher?: { '@id': string };
  description?: string;
  url?: string;
  workExample?: Array<{
    '@type': 'Book';
    '@id': string;
    bookFormat: string;
    isbn?: string;
    potentialAction?: {
      '@type': 'ReadAction';
      target: string;
    };
  }>;
}

interface SchemaEvent {
  '@type': 'Event';
  '@id': string;
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  eventStatus:
    | 'https://schema.org/EventScheduled'
    | 'https://schema.org/EventPostponed'
    | 'https://schema.org/EventCancelled'
    | 'https://schema.org/EventMovedOnline'
    | 'https://schema.org/EventRescheduled';
  eventAttendanceMode:
    | 'https://schema.org/OfflineEventAttendanceMode'
    | 'https://schema.org/OnlineEventAttendanceMode'
    | 'https://schema.org/MixedEventAttendanceMode';
  location:
    | {
        '@type': 'Place';
        name: string;
        address?: {
          '@type': 'PostalAddress';
          addressLocality?: string;
          addressRegion?: string;
          addressCountry?: string;
        };
      }
    | {
        '@type': 'VirtualLocation';
        url: string;
      };
  organizer: { '@id': string };
  performer?: { '@id': string };
  inLanguage: string;
  offers?: {
    '@type': 'Offer';
    url: string;
    availability:
      | 'https://schema.org/InStock'
      | 'https://schema.org/SoldOut'
      | 'https://schema.org/PreOrder';
    price?: string;
    priceCurrency?: string;
    validFrom?: string;
  };
  url?: string;
}

interface SchemaPodcastSeries {
  '@type': 'PodcastSeries';
  '@id': string;
  name: string;
  description?: string;
  url: string;
  author: { '@id': string };
  inLanguage: string;
  webFeed?: string;
}

interface SchemaPodcastEpisode {
  '@type': 'PodcastEpisode';
  '@id': string;
  name: string;
  url?: string;
  datePublished?: string;
  description?: string;
  inLanguage: string;
  partOfSeries: { '@id': string };
  episodeNumber?: number;
  duration?: string;
}

interface SchemaArticle {
  '@type': 'Article' | 'BlogPosting' | 'NewsArticle';
  '@id': string;
  headline: string;
  description?: string;
  datePublished: string;
  dateModified?: string;
  author: { '@id': string };
  publisher: { '@id': string };
  inLanguage: string;
  image?: string | string[];
  mainEntityOfPage: { '@type': 'WebPage'; '@id': string };
  url: string;
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
}

interface SchemaWebPage {
  '@type': 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  '@id': string;
  url: string;
  name: string;
  description?: string;
  inLanguage: string;
  isPartOf: { '@id': string };
  about?: { '@id': string };
  primaryImageOfPage?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: { '@id': string };
}

interface SchemaBreadcrumbList {
  '@type': 'BreadcrumbList';
  '@id': string;
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

type SchemaNode =
  | SchemaOrganization
  | SchemaPerson
  | SchemaWebSite
  | SchemaService
  | SchemaItemList
  | SchemaFAQPage
  | SchemaBook
  | SchemaEvent
  | SchemaPodcastSeries
  | SchemaPodcastEpisode
  | SchemaArticle
  | SchemaWebPage
  | SchemaBreadcrumbList;

export interface SchemaGraph {
  '@context': 'https://schema.org';
  '@graph': SchemaNode[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Internal helpers (locale-aware ID + URL convention)
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = clientConfig.site.productionUrl;

/** Stable graph IDs — always anchored to production origin so they survive
 * cross-environment crawling. Local IDs use #fragment for in-page nodes. */
function ids(locale: Locale) {
  return {
    org: `${BASE_URL}#org`,
    person: `${BASE_URL}#jonas`,
    website: `${BASE_URL}#website`,
    routePath: (key: RouteKey) => `${BASE_URL}${ROUTES[key][locale]}`,
    routeWebPage: (key: RouteKey) => `${BASE_URL}${ROUTES[key][locale]}#webpage`,
    routeBreadcrumb: (key: RouteKey) => `${BASE_URL}${ROUTES[key][locale]}#breadcrumb`
  };
}

function langTag(locale: Locale): string {
  return locale === 'fr' ? 'fr-CA' : 'en';
}

/**
 * Plain-text sanitizer for Schema.org content fields. Schema.org explicitly
 * states `acceptedAnswer.text` accepts inline HTML — but Google's Rich Results
 * test penalizes markup it can't parse cleanly, so we strip leading/trailing
 * whitespace and normalize newlines to single `\n` (paragraphs preserved).
 *
 * Crucial : we DO NOT collapse internal whitespace — that would destroy the
 * paragraph structure of long-form FAQ answers and book descriptions.
 */
function clean(text: string): string {
  return text
    .trim()
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// Sprint 2 — original builders (Organization + Person + WebSite + Services)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build Service schema nodes (6 programmes) + ItemList catalog.
 * No price/offers — qualification call pattern (Jonas Diop 20-50K range).
 * Sprint 6 : will be injected via worker HTMLRewriter SSR.
 */
export function buildServicesNodes(locale: Locale): SchemaNode[] {
  const id = ids(locale);
  const orgId = id.org;

  const serviceTypeMap: Record<string, string> = {
    groupe: 'Group Program',
    formation: 'Training',
    accompagnement: '1:1 Advisory'
  };

  const services: SchemaService[] = programmes.map((p) => ({
    '@type': 'Service',
    '@id': `${id.routePath(p.hrefKey)}#service`,
    name: ta(p.name, locale) as string,
    description: ta(p.description, locale) as string,
    url: id.routePath(p.hrefKey),
    provider: { '@id': orgId },
    serviceType: serviceTypeMap[p.variant] ?? '1:1 Advisory',
    areaServed: ['CA-QC', 'CA', 'Worldwide']
  }));

  const itemList: SchemaItemList = {
    '@type': 'ItemList',
    '@id': `${id.routePath('services')}#itemlist`,
    name: locale === 'fr' ? 'Catalogue des programmes' : 'Programs catalog',
    numberOfItems: programmes.length,
    itemListElement: programmes.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: { '@id': `${id.routePath(p.hrefKey)}#service` }
    }))
  };

  return [...services, itemList];
}

/**
 * Build Schema.org @graph for Jonas Diop site.
 * Nodes : Organization (DIOP Stratégies Internationales) + Person (Jonas) + WebSite (locale-aware).
 * Optional : 6 Service nodes + 1 ItemList (activated on /services routes).
 * Sprint 6 : will be injected via worker HTMLRewriter SSR. Sprint 2 : client-render in __root.tsx head.
 */
export function buildSchemaGraph(
  locale: Locale,
  options: { includeServices?: boolean } = {}
): SchemaGraph {
  const { includeServices = false } = options;
  const { client } = clientConfig;
  const id = ids(locale);
  const sameAs = [
    client.socials.facebook,
    client.socials.instagram,
    client.socials.linkedin,
    client.socials.x,
    client.socials.tiktok,
    client.socials.youtube
  ].filter((url): url is string => url !== null);

  const baseNodes: SchemaNode[] = [
    {
      '@type': 'Organization',
      '@id': id.org,
      name: 'DIOP Stratégies Internationales',
      legalName: client.legalName,
      email: client.email,
      telephone: client.phone,
      url: BASE_URL,
      sameAs
    },
    {
      '@type': 'Person',
      '@id': id.person,
      name: client.name,
      jobTitle: locale === 'fr' ? "Architecte d'affaires" : 'Business Architect',
      worksFor: { '@id': id.org },
      sameAs
    },
    {
      '@type': 'WebSite',
      '@id': id.website,
      url: BASE_URL,
      name: client.name,
      inLanguage: langTag(locale),
      publisher: { '@id': id.org }
    }
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': includeServices ? [...baseNodes, ...buildServicesNodes(locale)] : baseNodes
  };
}

export function buildSchemaJsonLd(locale: Locale, options?: { includeServices?: boolean }): string {
  return JSON.stringify(buildSchemaGraph(locale, options));
}

// ─────────────────────────────────────────────────────────────────────────────
// Sprint 6 — extended builders (Brief v3 §6 SEO On-Page Schema markup)
// ─────────────────────────────────────────────────────────────────────────────

export interface FaqItem {
  /** Plain text question. HTML stripped. */
  question: string;
  /** Plain text answer. Multi-paragraph allowed (`\n\n` preserved). */
  answer: string;
}

/**
 * Build a FAQPage node. Used on /faq (full catalog), programme LPs (programme
 * FAQ subset), and /conferences (B2B FAQ).
 *
 * The `routeKey` anchors the @id to the canonical route URL so multiple FAQPage
 * nodes across the site never collide in Google's index.
 *
 * `mainEntity` items get a deterministic order — Google uses the first N
 * questions for the rich result, so callers should pre-sort by importance.
 */
export function buildFaqPageNode(
  locale: Locale,
  items: FaqItem[],
  routeKey: RouteKey
): SchemaFAQPage {
  const id = ids(locale);
  return {
    '@type': 'FAQPage',
    '@id': `${id.routePath(routeKey)}#faq`,
    inLanguage: langTag(locale),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: clean(item.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: clean(item.answer)
      }
    }))
  };
}

export interface BookInput {
  /** Book title — required. */
  title: string;
  /** Optional short pitch (1-2 sentences). */
  description?: string;
  /** ISO-8601 date string (e.g. `2026-09-15`). Omit while pre-launch. */
  datePublished?: string;
  /** ISBN-13 (preferred) or ISBN-10. Omit while pre-launch. */
  isbn?: string;
  /** Cover image URL — absolute preferred. */
  image?: string;
  /** Format. Defaults to `EBook` if author hasn't decided. */
  bookFormat?: 'EBook' | 'Paperback' | 'Hardcover' | 'AudiobookFormat';
  /** Sales URL (Shopify, Amazon, etc.). */
  url?: string;
}

/**
 * Build a Book node. Author is auto-linked to the global Person @id (Jonas)
 * and publisher to the Organization @id (DIOP). Designed to be safe in
 * pre-launch state — only `title` is required ; date/ISBN can be filled in
 * later without breaking the schema.
 */
export function buildBookNode(locale: Locale, book: BookInput): SchemaBook {
  const id = ids(locale);
  const node: SchemaBook = {
    '@type': 'Book',
    '@id': `${id.routePath('livre')}#book`,
    name: book.title,
    author: { '@id': id.person },
    inLanguage: langTag(locale),
    publisher: { '@id': id.org }
  };

  if (book.bookFormat) {
    node.bookFormat = `https://schema.org/${book.bookFormat}` as NonNullable<
      SchemaBook['bookFormat']
    >;
  }
  if (book.isbn) node.isbn = book.isbn;
  if (book.datePublished) node.datePublished = book.datePublished;
  if (book.description) node.description = clean(book.description);
  if (book.url) node.url = book.url;

  return node;
}

export type EventLocation =
  | {
      mode: 'offline';
      name: string;
      city?: string;
      region?: string;
      country?: string;
    }
  | {
      mode: 'online';
      url: string;
    }
  | {
      mode: 'mixed';
      name: string;
      city?: string;
      region?: string;
      country?: string;
      onlineUrl: string;
    };

export interface EventInput {
  /** Stable slug used inside the @id (one per upcoming event). */
  slug: string;
  name: string;
  description?: string;
  /** ISO-8601 with timezone preferred (e.g. `2026-11-04T09:00:00-05:00`). */
  startDate: string;
  endDate?: string;
  location: EventLocation;
  /** Offer URL (Eventbrite, custom landing, etc.). Omit if not yet wired. */
  offerUrl?: string;
  /** Defaults to `InStock` ; flip to `SoldOut` post-fill. */
  availability?: 'InStock' | 'SoldOut' | 'PreOrder';
  price?: string;
  priceCurrency?: string;
  /** Defaults to `EventScheduled`. */
  status?:
    | 'EventScheduled'
    | 'EventPostponed'
    | 'EventCancelled'
    | 'EventMovedOnline'
    | 'EventRescheduled';
}

/**
 * Build an Event node. Organizer + performer both link to the global Person
 * (Jonas leads + performs every mastermind/séminaire). Offers omitted entirely
 * when no purchase URL is known yet — Google penalizes empty Offer nodes
 * harder than missing ones.
 */
export function buildEventNode(locale: Locale, event: EventInput): SchemaEvent {
  const id = ids(locale);
  const eventStatus = event.status ?? 'EventScheduled';
  const attendanceMode =
    event.location.mode === 'online'
      ? 'OnlineEventAttendanceMode'
      : event.location.mode === 'mixed'
        ? 'MixedEventAttendanceMode'
        : 'OfflineEventAttendanceMode';

  const node: SchemaEvent = {
    '@type': 'Event',
    '@id': `${id.routePath('evenements')}#event-${event.slug}`,
    name: event.name,
    startDate: event.startDate,
    eventStatus: `https://schema.org/${eventStatus}` as SchemaEvent['eventStatus'],
    eventAttendanceMode:
      `https://schema.org/${attendanceMode}` as SchemaEvent['eventAttendanceMode'],
    location:
      event.location.mode === 'online'
        ? { '@type': 'VirtualLocation', url: event.location.url }
        : {
            '@type': 'Place',
            name: event.location.name,
            address: {
              '@type': 'PostalAddress',
              ...(event.location.city ? { addressLocality: event.location.city } : {}),
              ...(event.location.region ? { addressRegion: event.location.region } : {}),
              ...(event.location.country ? { addressCountry: event.location.country } : {})
            }
          },
    organizer: { '@id': id.person },
    performer: { '@id': id.person },
    inLanguage: langTag(locale)
  };

  if (event.endDate) node.endDate = event.endDate;
  if (event.description) node.description = clean(event.description);
  if (event.offerUrl) {
    node.offers = {
      '@type': 'Offer',
      url: event.offerUrl,
      availability: `https://schema.org/${event.availability ?? 'InStock'}` as NonNullable<
        SchemaEvent['offers']
      >['availability']
    };
    if (event.price) node.offers.price = event.price;
    if (event.priceCurrency) node.offers.priceCurrency = event.priceCurrency;
  }

  return node;
}

export interface PodcastSeriesInput {
  name: string;
  description?: string;
  /** Optional RSS feed URL. */
  webFeed?: string;
}

export interface PodcastEpisodeInput {
  slug: string;
  name: string;
  description?: string;
  /** ISO-8601 publish date. */
  datePublished: string;
  /** Optional ISO-8601 duration (e.g. `PT45M`). */
  duration?: string;
  episodeNumber?: number;
  /** Episode landing URL (Spotify/Apple/YouTube). */
  url?: string;
}

/**
 * Build the PodcastSeries umbrella node. Returns it alongside an empty episode
 * array if no episodes wired yet (coming_soon scenario). Series @id is stable
 * across episodes for proper graph linking.
 */
export function buildPodcastSeriesNode(
  locale: Locale,
  series: PodcastSeriesInput
): SchemaPodcastSeries {
  const id = ids(locale);
  const node: SchemaPodcastSeries = {
    '@type': 'PodcastSeries',
    '@id': `${id.routePath('podcast')}#series`,
    name: series.name,
    url: id.routePath('podcast'),
    author: { '@id': id.person },
    inLanguage: langTag(locale)
  };
  if (series.description) node.description = clean(series.description);
  if (series.webFeed) node.webFeed = series.webFeed;
  return node;
}

export function buildPodcastEpisodeNode(
  locale: Locale,
  episode: PodcastEpisodeInput
): SchemaPodcastEpisode {
  const id = ids(locale);
  const node: SchemaPodcastEpisode = {
    '@type': 'PodcastEpisode',
    '@id': `${id.routePath('podcast')}#episode-${episode.slug}`,
    name: episode.name,
    datePublished: episode.datePublished,
    inLanguage: langTag(locale),
    partOfSeries: { '@id': `${id.routePath('podcast')}#series` }
  };
  if (episode.description) node.description = clean(episode.description);
  if (episode.url) node.url = episode.url;
  if (episode.episodeNumber !== undefined) node.episodeNumber = episode.episodeNumber;
  if (episode.duration) node.duration = episode.duration;
  return node;
}

export interface ArticleInput {
  /** Stable slug (used in @id). */
  slug: string;
  /** Required — h1 of the article. */
  headline: string;
  description?: string;
  /** ISO-8601 publish date. */
  datePublished: string;
  /** ISO-8601 last-modified date. */
  dateModified?: string;
  /** Hero image absolute URL. */
  image?: string;
  /** Article hub category. */
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
  /** Variant for stricter SERP eligibility (`BlogPosting` for blog hub). */
  variant?: 'Article' | 'BlogPosting' | 'NewsArticle';
}

/**
 * Build an Article node. Article URL is derived from `ressources` route +
 * slug — adjust if the GHL Blog headless integration (Sprint 5) ends up on a
 * different mount point.
 */
export function buildArticleNode(locale: Locale, article: ArticleInput): SchemaArticle {
  const id = ids(locale);
  const articleUrl = `${id.routePath('ressources')}/${article.slug}`;
  const node: SchemaArticle = {
    '@type': article.variant ?? 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: article.headline,
    datePublished: article.datePublished,
    author: { '@id': id.person },
    publisher: { '@id': id.org },
    inLanguage: langTag(locale),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${articleUrl}#webpage` },
    url: articleUrl
  };
  if (article.description) node.description = clean(article.description);
  if (article.dateModified) node.dateModified = article.dateModified;
  if (article.image) node.image = article.image;
  if (article.articleSection) node.articleSection = article.articleSection;
  if (article.keywords && article.keywords.length > 0) node.keywords = article.keywords;
  if (article.wordCount !== undefined) node.wordCount = article.wordCount;
  return node;
}

export interface WebPageInput {
  routeKey: RouteKey;
  name: string;
  description?: string;
  /** Variant — defaults to `WebPage`. Use `AboutPage` for /a-propos, etc. */
  variant?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  /** Optional primary image absolute URL. */
  primaryImage?: string;
  /** ISO-8601 publish/modified dates (useful for legal pages). */
  datePublished?: string;
  dateModified?: string;
  /** Anchor `about` to a graph node (e.g. Person @id for /a-propos). */
  aboutNodeId?: string;
  /** Include a breadcrumb node (auto-generated from breadcrumbTrail). */
  breadcrumbTrail?: BreadcrumbCrumb[];
}

export interface BreadcrumbCrumb {
  name: string;
  /** Either an absolute URL or a RouteKey (resolved against current locale). */
  url: string;
}

/**
 * Build a WebPage node (with optional BreadcrumbList). Use this on routes that
 * need extra context beyond the global WebSite node — typically /a-propos
 * (AboutPage), /contact (ContactPage), /services (CollectionPage), and any
 * route with breadcrumb-eligible navigation.
 *
 * Returns 1-2 nodes : always the WebPage, plus a BreadcrumbList when
 * `breadcrumbTrail` is provided.
 */
export function buildWebPageNodes(locale: Locale, input: WebPageInput): SchemaNode[] {
  const id = ids(locale);
  const webPageId = id.routeWebPage(input.routeKey);
  const breadcrumbId = id.routeBreadcrumb(input.routeKey);

  const webPage: SchemaWebPage = {
    '@type': input.variant ?? 'WebPage',
    '@id': webPageId,
    url: id.routePath(input.routeKey),
    name: input.name,
    inLanguage: langTag(locale),
    isPartOf: { '@id': id.website }
  };

  if (input.description) webPage.description = clean(input.description);
  if (input.primaryImage) webPage.primaryImageOfPage = input.primaryImage;
  if (input.datePublished) webPage.datePublished = input.datePublished;
  if (input.dateModified) webPage.dateModified = input.dateModified;
  if (input.aboutNodeId) webPage.about = { '@id': input.aboutNodeId };

  const nodes: SchemaNode[] = [webPage];

  if (input.breadcrumbTrail && input.breadcrumbTrail.length > 0) {
    webPage.breadcrumb = { '@id': breadcrumbId };
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: input.breadcrumbTrail.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url
      }))
    });
  }

  return nodes;
}

// ─────────────────────────────────────────────────────────────────────────────
// Composite graph builders (route-aware)
// ─────────────────────────────────────────────────────────────────────────────

export interface RouteSchemaOptions {
  /** Toggle Service+ItemList nodes (auto-set true for /services routes). */
  includeServices?: boolean;
  /** Inject a FAQPage node (used on /faq, programme LPs, /conferences). */
  faq?: { items: FaqItem[]; routeKey: RouteKey };
  /** Inject a Book node (used on /livre). */
  book?: BookInput;
  /** Inject one or many Event nodes (used on /evenements). */
  events?: EventInput[];
  /** Inject a PodcastSeries + optional episodes (used on /podcast). */
  podcast?: { series: PodcastSeriesInput; episodes?: PodcastEpisodeInput[] };
  /** Inject one or many Article nodes (used on /ressources + article details). */
  articles?: ArticleInput[];
  /** Inject a WebPage (+ optional BreadcrumbList) for the current route. */
  webPage?: WebPageInput;
}

/**
 * Compose a route-specific Schema.org @graph on top of the global base nodes
 * (Organization + Person + WebSite). Always returns a single valid graph —
 * empty option fields are omitted from the result, so adding `book` only on
 * /livre keeps every other route's payload lean.
 *
 * Designed to be called once per route via a route-level `<SchemaScript />`
 * component, OR (Sprint 6 target) once per request inside the Cloudflare
 * Worker's HTMLRewriter SSR pass.
 */
export function buildRouteSchemaGraph(
  locale: Locale,
  options: RouteSchemaOptions = {}
): SchemaGraph {
  const base = buildSchemaGraph(
    locale,
    options.includeServices !== undefined ? { includeServices: options.includeServices } : {}
  );
  const extras: SchemaNode[] = [];

  if (options.faq) {
    extras.push(buildFaqPageNode(locale, options.faq.items, options.faq.routeKey));
  }
  if (options.book) {
    extras.push(buildBookNode(locale, options.book));
  }
  if (options.events) {
    for (const event of options.events) extras.push(buildEventNode(locale, event));
  }
  if (options.podcast) {
    extras.push(buildPodcastSeriesNode(locale, options.podcast.series));
    if (options.podcast.episodes) {
      for (const ep of options.podcast.episodes) {
        extras.push(buildPodcastEpisodeNode(locale, ep));
      }
    }
  }
  if (options.articles) {
    for (const article of options.articles) extras.push(buildArticleNode(locale, article));
  }
  if (options.webPage) {
    extras.push(...buildWebPageNodes(locale, options.webPage));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [...base['@graph'], ...extras]
  };
}

export function buildRouteSchemaJsonLd(locale: Locale, options?: RouteSchemaOptions): string {
  return JSON.stringify(buildRouteSchemaGraph(locale, options));
}
