import { describe, expect, it } from 'vitest';
import { buildSchemaGraph, buildSchemaJsonLd } from '@/lib/seo/schema';

describe('buildSchemaGraph', () => {
  it('returns @context schema.org + @graph array with 3 nodes', () => {
    const graph = buildSchemaGraph('fr');
    expect(graph['@context']).toBe('https://schema.org');
    expect(Array.isArray(graph['@graph'])).toBe(true);
    expect(graph['@graph'].length).toBe(3);
  });

  it('@graph contains Organization + Person + WebSite types', () => {
    const graph = buildSchemaGraph('fr');
    const types = graph['@graph'].map((n) => n['@type']);
    expect(types).toContain('Organization');
    expect(types).toContain('Person');
    expect(types).toContain('WebSite');
  });

  it('Person jobTitle is FR when locale is fr', () => {
    const graph = buildSchemaGraph('fr');
    const person = graph['@graph'].find((n) => n['@type'] === 'Person');
    expect(person && 'jobTitle' in person ? person.jobTitle : '').toMatch(/Architecte/i);
  });

  it('Person jobTitle is EN when locale is en', () => {
    const graph = buildSchemaGraph('en');
    const person = graph['@graph'].find((n) => n['@type'] === 'Person');
    expect(person && 'jobTitle' in person ? person.jobTitle : '').toMatch(/Business Architect/i);
  });

  it('WebSite inLanguage is fr-CA when locale is fr', () => {
    const graph = buildSchemaGraph('fr');
    const site = graph['@graph'].find((n) => n['@type'] === 'WebSite');
    expect(site && 'inLanguage' in site ? site.inLanguage : '').toBe('fr-CA');
  });

  it('sameAs filters null social URLs', () => {
    const graph = buildSchemaGraph('fr');
    const org = graph['@graph'].find((n) => n['@type'] === 'Organization');
    const sameAs = org && 'sameAs' in org ? org.sameAs : [];
    expect(sameAs.every((url) => typeof url === 'string')).toBe(true);
    expect(sameAs.length).toBeGreaterThan(0);
  });

  it('buildSchemaJsonLd returns valid JSON string parseable', () => {
    const jsonLd = buildSchemaJsonLd('fr');
    expect(typeof jsonLd).toBe('string');
    expect(() => JSON.parse(jsonLd)).not.toThrow();
    const parsed = JSON.parse(jsonLd);
    expect(parsed['@context']).toBe('https://schema.org');
  });
});
