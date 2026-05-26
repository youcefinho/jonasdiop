import { describe, expect, it } from 'vitest';
import { buildSchemaGraph, buildSchemaJsonLd, buildServicesNodes } from '@/lib/seo/schema';

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

  it('includeServices=false → @graph has only Org+Person+WebSite (3 nodes)', () => {
    const graph = buildSchemaGraph('fr', { includeServices: false });
    expect(graph['@graph'].length).toBe(3);
  });

  it('includeServices=true → @graph has 10 nodes (3 base + 6 services + 1 itemlist)', () => {
    const graph = buildSchemaGraph('fr', { includeServices: true });
    expect(graph['@graph'].length).toBe(10);
  });
});

describe('buildServicesNodes', () => {
  it('returns 6 Service + 1 ItemList', () => {
    const nodes = buildServicesNodes('fr');
    const services = nodes.filter((n) => n['@type'] === 'Service');
    const itemLists = nodes.filter((n) => n['@type'] === 'ItemList');
    expect(services.length).toBe(6);
    expect(itemLists.length).toBe(1);
  });

  it('Service nodes have provider linked to Organization @id', () => {
    const graph = buildSchemaGraph('fr', { includeServices: true });
    const services = graph['@graph'].filter((n) => n['@type'] === 'Service');
    expect(services.every((s) => 'provider' in s && s.provider['@id'].endsWith('#org'))).toBe(true);
  });

  it('ItemList itemListElement positions are 1-6', () => {
    const nodes = buildServicesNodes('fr');
    const itemList = nodes.find((n) => n['@type'] === 'ItemList');
    expect(
      itemList && 'itemListElement' in itemList
        ? itemList.itemListElement.map((i) => i.position)
        : []
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Service nodes have areaServed CA-QC + CA + Worldwide', () => {
    const nodes = buildServicesNodes('fr');
    const services = nodes.filter((n) => n['@type'] === 'Service');
    expect(
      services.every(
        (s) =>
          'areaServed' in s &&
          s.areaServed.includes('CA-QC') &&
          s.areaServed.includes('CA') &&
          s.areaServed.includes('Worldwide')
      )
    ).toBe(true);
  });

  it('serviceType maps correctly to programme variant', () => {
    const nodes = buildServicesNodes('fr');
    const services = nodes.filter((n) => n['@type'] === 'Service');
    const groupeServices = services.filter(
      (s) => 'serviceType' in s && s.serviceType === 'Group Program'
    );
    const trainingServices = services.filter(
      (s) => 'serviceType' in s && s.serviceType === 'Training'
    );
    const advisoryServices = services.filter(
      (s) => 'serviceType' in s && s.serviceType === '1:1 Advisory'
    );
    // 2 groupe + 3 formation + 1 accompagnement
    expect(groupeServices.length).toBe(2);
    expect(trainingServices.length).toBe(3);
    expect(advisoryServices.length).toBe(1);
  });

  it('Service @id and url use correct locale path for EN', () => {
    const nodes = buildServicesNodes('en');
    const services = nodes.filter((n) => n['@type'] === 'Service');
    expect(services.every((s) => 'url' in s && s.url.includes('/en/services/'))).toBe(true);
  });

  it('ItemList name is locale-aware', () => {
    const nodesFr = buildServicesNodes('fr');
    const nodesEn = buildServicesNodes('en');
    const itemListFr = nodesFr.find((n) => n['@type'] === 'ItemList');
    const itemListEn = nodesEn.find((n) => n['@type'] === 'ItemList');
    expect(itemListFr && 'name' in itemListFr ? itemListFr.name : '').toBe(
      'Catalogue des programmes'
    );
    expect(itemListEn && 'name' in itemListEn ? itemListEn.name : '').toBe('Programs catalog');
  });

  it('Service nodes have no offers/price fields (qualification call pattern)', () => {
    const nodes = buildServicesNodes('fr');
    const services = nodes.filter((n) => n['@type'] === 'Service');
    expect(services.every((s) => !('offers' in s) && !('price' in s))).toBe(true);
  });
});
