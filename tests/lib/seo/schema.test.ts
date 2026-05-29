import { describe, expect, it } from 'vitest';
import {
  buildCourseNode,
  buildEventNode,
  buildRouteSchemaGraph,
  buildSchemaGraph,
  buildSchemaJsonLd,
  buildServicesNodes,
  courseSchema,
  eventSchema
} from '@/lib/seo/schema';

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

// ────────────────────────────────────────────────────────────────────────────
// Sprint 6 — Trilogie bootcamps : Event + Course schema (eventSchema /
// courseSchema declarative aliases pointing at buildEventNode/buildCourseNode)
// ────────────────────────────────────────────────────────────────────────────

describe('buildEventNode (Trilogie bootcamp pre-launch contract)', () => {
  const baseEvent = {
    slug: 'an-army-of-one',
    routeKeyForId: 'evenements-bootcamp-an-army-of-one' as const,
    name: 'An Army of One™ — Bootcamp 3 jours',
    startDate: '2027-03-15T09:00:00-05:00',
    location: {
      mode: 'mixed' as const,
      name: 'Montréal',
      city: 'Montréal',
      region: 'QC',
      country: 'CA',
      onlineUrl: 'https://jonasdiop.com/evenements/bootcamps/an-army-of-one'
    },
    price: '997',
    priceCurrency: 'CAD'
  };

  it('emits Event @type with @id anchored to bootcamp sub-page when routeKeyForId set', () => {
    const node = buildEventNode('fr', baseEvent);
    expect(node['@type']).toBe('Event');
    expect(node['@id']).toMatch(/\/evenements\/bootcamps\/an-army-of-one#event-an-army-of-one$/);
  });

  it('falls back to /evenements anchor when routeKeyForId is absent', () => {
    const { routeKeyForId, ...noAnchorEvent } = baseEvent;
    expect(routeKeyForId).toBe('evenements-bootcamp-an-army-of-one');
    const node = buildEventNode('fr', noAnchorEvent);
    expect(node['@id']).toMatch(/\/evenements#event-an-army-of-one$/);
  });

  it('organizer defaults to Organization @id (#org), performer to Person @id (#jonas)', () => {
    const node = buildEventNode('fr', baseEvent);
    expect(node.organizer['@id']).toMatch(/#org$/);
    expect(node.performer?.['@id']).toMatch(/#jonas$/);
  });

  it('emits Offer with PreOrder availability when price set without offerUrl', () => {
    const node = buildEventNode('fr', baseEvent);
    expect(node.offers).toBeDefined();
    expect(node.offers?.availability).toBe('https://schema.org/PreOrder');
    expect(node.offers?.price).toBe('997');
    expect(node.offers?.priceCurrency).toBe('CAD');
    expect(node.offers?.url).toBeUndefined();
  });

  it('emits Offer with InStock + url when offerUrl provided', () => {
    const node = buildEventNode('fr', {
      ...baseEvent,
      offerUrl: 'https://stripe.com/pay/aaoo'
    });
    expect(node.offers?.availability).toBe('https://schema.org/InStock');
    expect(node.offers?.url).toBe('https://stripe.com/pay/aaoo');
  });

  it('omits Offer entirely when neither price nor offerUrl provided', () => {
    const { price, priceCurrency, ...noOfferEvent } = baseEvent;
    expect(price).toBe('997');
    expect(priceCurrency).toBe('CAD');
    const node = buildEventNode('fr', noOfferEvent);
    expect(node.offers).toBeUndefined();
  });

  it('mixed location renders Place + Montréal address (not VirtualLocation)', () => {
    const node = buildEventNode('fr', baseEvent);
    expect(node.location).toMatchObject({
      '@type': 'Place',
      name: 'Montréal',
      address: { addressLocality: 'Montréal', addressRegion: 'QC', addressCountry: 'CA' }
    });
  });

  it('eventAttendanceMode resolves OfflineEventAttendanceMode for mode=offline', () => {
    const node = buildEventNode('fr', {
      ...baseEvent,
      location: { mode: 'offline', name: 'Montréal', city: 'Montréal' }
    });
    expect(node.eventAttendanceMode).toBe('https://schema.org/OfflineEventAttendanceMode');
  });

  it('eventSchema export is the same function as buildEventNode', () => {
    expect(eventSchema).toBe(buildEventNode);
  });
});

describe('buildCourseNode (Trilogie bootcamp Course rich-result lane)', () => {
  const baseCourse = {
    slug: 'an-army-of-one',
    routeKey: 'evenements-bootcamp-an-army-of-one' as const,
    name: "An Army of One™ — Bootcamp système d'exécution",
    description: 'Bootcamp 3 jours · méthode RISE™',
    about: "Système d'exécution",
    instance: {
      mode: 'Blended' as const,
      workload: 'P3D',
      eventSlug: 'an-army-of-one',
      eventRouteKey: 'evenements-bootcamp-an-army-of-one' as const
    },
    offer: { price: '997', priceCurrency: 'CAD' }
  };

  it('emits Course @type with @id anchored to the route', () => {
    const node = buildCourseNode('fr', baseCourse);
    expect(node['@type']).toBe('Course');
    expect(node['@id']).toMatch(/\/evenements\/bootcamps\/an-army-of-one#course-an-army-of-one$/);
  });

  it('provider is the Organization (DIOP Stratégies Internationales)', () => {
    const node = buildCourseNode('fr', baseCourse);
    expect(node.provider['@type']).toBe('Organization');
    expect(node.provider['@id']).toMatch(/#org$/);
    expect(node.provider.name).toBe('DIOP Stratégies Internationales');
  });

  it('instructor defaults to the Person @id (Jonas)', () => {
    const node = buildCourseNode('fr', baseCourse);
    expect(node.instructor?.['@id']).toMatch(/#jonas$/);
  });

  it('educationalLevel defaults to Intermediate', () => {
    const node = buildCourseNode('fr', baseCourse);
    expect(node.educationalLevel).toBe('Intermediate');
  });

  it('inLanguage maps fr → fr-CA and en → en', () => {
    expect(buildCourseNode('fr', baseCourse).inLanguage).toBe('fr-CA');
    expect(buildCourseNode('en', baseCourse).inLanguage).toBe('en');
  });

  it('hasCourseInstance cross-links to matching Event @id when eventSlug provided', () => {
    const node = buildCourseNode('fr', baseCourse);
    expect(node.hasCourseInstance).toBeDefined();
    expect(node.hasCourseInstance?.courseMode).toBe('Blended');
    expect(node.hasCourseInstance?.courseWorkload).toBe('P3D');
    expect(node.hasCourseInstance?.instanceOf?.['@id']).toMatch(
      /\/evenements\/bootcamps\/an-army-of-one#event-an-army-of-one$/
    );
  });

  it('emits Offer with PreOrder + CAD when price set without url', () => {
    const node = buildCourseNode('fr', baseCourse);
    expect(node.offers).toBeDefined();
    expect(node.offers?.availability).toBe('https://schema.org/PreOrder');
    expect(node.offers?.price).toBe('997');
    expect(node.offers?.priceCurrency).toBe('CAD');
    expect(node.offers?.category).toBe('Bootcamp');
  });

  it('emits Offer with InStock when offer.url is provided', () => {
    const node = buildCourseNode('fr', {
      ...baseCourse,
      offer: { ...baseCourse.offer, url: 'https://stripe.com/pay/aaoo' }
    });
    expect(node.offers?.availability).toBe('https://schema.org/InStock');
    expect(node.offers?.url).toBe('https://stripe.com/pay/aaoo');
  });

  it('omits hasCourseInstance entirely when instance field absent', () => {
    const { instance, ...noInstance } = baseCourse;
    expect(instance).toBeDefined();
    const node = buildCourseNode('fr', noInstance);
    expect(node.hasCourseInstance).toBeUndefined();
  });

  it('courseSchema export is the same function as buildCourseNode', () => {
    expect(courseSchema).toBe(buildCourseNode);
  });
});

describe('buildRouteSchemaGraph composes Trilogie bootcamp graph (WebPage + Event + Course + FAQ + Breadcrumb)', () => {
  const trilogieOptions = {
    webPage: {
      routeKey: 'evenements-bootcamp-an-army-of-one' as const,
      name: 'An Army of One™',
      description: 'Bootcamp 3 jours',
      breadcrumbTrail: [
        { name: 'Accueil', url: '/' },
        { name: 'Événements', url: '/evenements' },
        { name: 'An Army of One™', url: '/evenements/bootcamps/an-army-of-one' }
      ]
    },
    events: [
      {
        slug: 'an-army-of-one',
        routeKeyForId: 'evenements-bootcamp-an-army-of-one' as const,
        name: 'An Army of One™',
        startDate: '2027-03-15T09:00:00-05:00',
        location: {
          mode: 'mixed' as const,
          name: 'Montréal',
          city: 'Montréal',
          country: 'CA',
          onlineUrl: 'https://jonasdiop.com/evenements/bootcamps/an-army-of-one'
        },
        price: '997',
        priceCurrency: 'CAD'
      }
    ],
    courses: [
      {
        slug: 'an-army-of-one',
        routeKey: 'evenements-bootcamp-an-army-of-one' as const,
        name: "An Army of One™ — Bootcamp système d'exécution",
        instance: { mode: 'Blended' as const, workload: 'P3D', eventSlug: 'an-army-of-one' },
        offer: { price: '997', priceCurrency: 'CAD' }
      }
    ],
    faq: {
      routeKey: 'evenements-bootcamp-an-army-of-one' as const,
      items: [{ question: 'Pour qui ?', answer: 'Entrepreneurs solos.' }]
    }
  };

  it('graph contains base 3 nodes + WebPage + Breadcrumb + Event + Course + FAQPage (= 8)', () => {
    const graph = buildRouteSchemaGraph('fr', trilogieOptions);
    const types = graph['@graph'].map((n) => n['@type']);
    expect(types).toContain('Organization');
    expect(types).toContain('Person');
    expect(types).toContain('WebSite');
    expect(types).toContain('WebPage');
    expect(types).toContain('BreadcrumbList');
    expect(types).toContain('Event');
    expect(types).toContain('Course');
    expect(types).toContain('FAQPage');
    expect(graph['@graph'].length).toBe(8);
  });

  it('Course.hasCourseInstance.instanceOf @id matches Event @id (cross-linked)', () => {
    const graph = buildRouteSchemaGraph('fr', trilogieOptions);
    const event = graph['@graph'].find((n) => n['@type'] === 'Event');
    const course = graph['@graph'].find((n) => n['@type'] === 'Course');
    const eventId = event && '@id' in event ? event['@id'] : '';
    const instanceOfId =
      course && 'hasCourseInstance' in course && course.hasCourseInstance?.instanceOf
        ? course.hasCourseInstance.instanceOf['@id']
        : '';
    expect(eventId).toBeTruthy();
    expect(instanceOfId).toBe(eventId);
  });

  it('serialized JSON-LD parses cleanly and round-trips @context schema.org', () => {
    const jsonLd = JSON.stringify(buildRouteSchemaGraph('fr', trilogieOptions));
    const parsed = JSON.parse(jsonLd);
    expect(parsed['@context']).toBe('https://schema.org');
    expect(parsed['@graph']).toHaveLength(8);
  });
});
