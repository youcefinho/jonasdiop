import { clientConfig } from '@/config/clientConfig';
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

type SchemaNode = SchemaOrganization | SchemaPerson | SchemaWebSite;

export interface SchemaGraph {
  '@context': 'https://schema.org';
  '@graph': SchemaNode[];
}

/**
 * Build Schema.org @graph for Jonas Diop site.
 * Nodes : Organization (DIOP Stratégies Internationales) + Person (Jonas) + WebSite (locale-aware).
 * Sprint 6 : will be injected via worker HTMLRewriter SSR. Sprint 2 : client-render in __root.tsx head.
 */
export function buildSchemaGraph(locale: Locale): SchemaGraph {
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

  return {
    '@context': 'https://schema.org',
    '@graph': [
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
    ]
  };
}

export function buildSchemaJsonLd(locale: Locale): string {
  return JSON.stringify(buildSchemaGraph(locale));
}
