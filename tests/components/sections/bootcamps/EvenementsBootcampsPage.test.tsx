import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { EvenementsBootcampsPage } from '@/components/sections/EvenementsBootcampsPage';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, ...rest }: { to: string; children: ReactNode; [k: string]: unknown }) => (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}));

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

afterEach(() => {
  document.head.innerHTML = '';
});

// Brief v3 §3.6 — Trilogie HUB /evenements/bootcamps with 7 numbered sections.
// Anti-cannibalisation (§5) : 3 primary CTAs to sub-pages + 1 secondary to /contact.

describe('EvenementsBootcampsPage — smoke + a11y', () => {
  it('renders without throwing (FR)', () => {
    expect(() => render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') })).not.toThrow();
  });

  it('renders exactly 1 H1 (FR)', () => {
    render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('renders exactly 1 H1 (EN)', () => {
    render(<EvenementsBootcampsPage />, { wrapper: wrapper('en') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

describe('EvenementsBootcampsPage — pourquoi 3 pillars', () => {
  it('renders 3 pillar cards (FR)', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const grid = container.querySelector('[data-card-group="trilogie-pourquoi"]');
    expect(grid?.querySelectorAll('article').length).toBe(3);
  });
});

describe('EvenementsBootcampsPage — tableau comparatif 3 rows', () => {
  it('renders 3 table rows (one per bootcamp) — desktop', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const tbody = container.querySelector('table tbody');
    expect(tbody?.querySelectorAll('tr').length).toBe(3);
  });

  it('renders 3 mobile cards stacked (md-)', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const mobileList = container.querySelector('ul.md\\:hidden');
    expect(mobileList?.querySelectorAll('li').length).toBe(3);
  });
});

describe('EvenementsBootcampsPage — 3 product cards anchor', () => {
  it('renders 3 cards', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const grid = container.querySelector('[data-card-group="trilogie-cartes"]');
    expect(grid?.querySelectorAll('li').length).toBe(3);
  });

  it('exposes #trilogie-cartes scroll anchor for hero CTA', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('#trilogie-cartes')).toBeInTheDocument();
  });

  it('cards point to the 3 real Trilogie sub-routes (FR)', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const links = container.querySelectorAll('[data-card-group="trilogie-cartes"] a');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/evenements/bootcamps/an-army-of-one',
        '/evenements/bootcamps/the-edge',
        '/evenements/bootcamps/the-activation'
      ])
    );
  });

  it('cards point to /en/events/bootcamps/* routes (EN)', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('en') });
    const links = container.querySelectorAll('[data-card-group="trilogie-cartes"] a');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/en/events/bootcamps/an-army-of-one',
        '/en/events/bootcamps/the-edge',
        '/en/events/bootcamps/the-activation'
      ])
    );
  });
});

describe('EvenementsBootcampsPage — RISE 4 piliers', () => {
  it('renders 4 pillar items (R/I/S/E)', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const grid = container.querySelector('[data-card-group="rise-piliers"]');
    expect(grid?.querySelectorAll('li').length).toBe(4);
  });
});

describe('EvenementsBootcampsPage — credibilite 3 stats', () => {
  it('renders 3 stat tiles', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const dl = container.querySelector('section dl.grid');
    expect(dl).toBeInTheDocument();
    // grid sm:grid-cols-3 stats
    const stats = container.querySelectorAll('section dl.sm\\:grid-cols-3 > div');
    expect(stats.length).toBe(3);
  });
});

describe('EvenementsBootcampsPage — finalCta anti-cannibalisation', () => {
  it('renders 3 primary CTAs to sub-pages (FR)', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    // Primary CTAs all link to the 3 bootcamp sub-routes — count unique sub-page hrefs
    const allLinks = Array.from(container.querySelectorAll('a'));
    const subPageHrefs = new Set(
      allLinks
        .map((a) => a.getAttribute('href') ?? '')
        .filter((h) =>
          /^\/evenements\/bootcamps\/(an-army-of-one|the-edge|the-activation)$/.test(h)
        )
    );
    expect(subPageHrefs.size).toBe(3);
  });

  it('renders secondary CTA to /contact (anti-cannibalisation §5)', () => {
    const { container } = render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    const secondaryLinks = Array.from(container.querySelectorAll('a')).filter(
      (a) => a.getAttribute('href') === '/contact'
    );
    expect(secondaryLinks.length).toBeGreaterThanOrEqual(1);
  });
});

describe('EvenementsBootcampsPage — Schema.org WebPage', () => {
  it('injects schema-org-route script with WebPage node', async () => {
    render(<EvenementsBootcampsPage />, { wrapper: wrapper('fr') });
    // Wait for useEffect (SchemaScript injects to head)
    await new Promise((r) => setTimeout(r, 10));
    const script = document.getElementById('schema-org-route') as HTMLScriptElement | null;
    expect(script).toBeInTheDocument();
    expect(script?.type).toBe('application/ld+json');
    expect(script?.textContent).toContain('WebPage');
  });
});
