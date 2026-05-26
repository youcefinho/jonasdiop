import { clientConfig } from '@/config/clientConfig';
import { ROUTES } from '@/config/routes';
import { programmes } from '@/data/programmes';
import { ta } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/types';

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

type SchemaNode =
  | SchemaOrganization
  | SchemaPerson
  | SchemaWebSite
  | SchemaService
  | SchemaItemList;

export interface SchemaGraph {
  '@context': 'https://schema.org';
  '@graph': SchemaNode[];
}

/**
 * Build Service schema nodes (6 programmes) + ItemList catalog.
 * No price/offers — qualification call pattern (Jonas Diop 20-50K range).
 * Sprint 6 : will be injected via worker HTMLRewriter SSR.
 */
export function buildServicesNodes(locale: Locale): SchemaNode[] {
  const { site } = clientConfig;
  const baseUrl = site.productionUrl;
  const orgId = `${baseUrl}#org`;

  const serviceTypeMap: Record<string, string> = {
    groupe: 'Group Program',
    formation: 'Training',
    accompagnement: '1:1 Advisory'
  };

  const services: SchemaService[] = programmes.map((p) => ({
    '@type': 'Service',
    '@id': `${baseUrl}${ROUTES[p.hrefKey][locale]}#service`,
    name: ta(p.name, locale) as string,
    description: ta(p.description, locale) as string,
    url: `${baseUrl}${ROUTES[p.hrefKey][locale]}`,
    provider: { '@id': orgId },
    serviceType: serviceTypeMap[p.variant] ?? '1:1 Advisory',
    areaServed: ['CA-QC', 'CA', 'Worldwide']
  }));

  const itemList: SchemaItemList = {
    '@type': 'ItemList',
    '@id': `${baseUrl}${ROUTES.services[locale]}#itemlist`,
    name: locale === 'fr' ? 'Catalogue des programmes' : 'Programs catalog',
    numberOfItems: programmes.length,
    itemListElement: programmes.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: { '@id': `${baseUrl}${ROUTES[p.hrefKey][locale]}#service` }
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
  const { client, site } = clientConfig;
  const baseUrl = site.productionUrl;
  const orgId = `${baseUrl}#org`;
  const personId = `${baseUrl}#jonas`;
  const websiteId = `${baseUrl}#website`;
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
      '@id': orgId,
      name: 'DIOP Stratégies Internationales',
      legalName: client.legalName,
      email: client.email,
      telephone: client.phone,
      url: baseUrl,
      sameAs
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: client.name,
      jobTitle: locale === 'fr' ? "Architecte d'affaires" : 'Business Architect',
      worksFor: { '@id': orgId },
      sameAs
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: baseUrl,
      name: client.name,
      inLanguage: locale === 'fr' ? 'fr-CA' : 'en',
      publisher: { '@id': orgId }
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
