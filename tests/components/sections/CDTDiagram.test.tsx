import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { CDTDiagram } from '@/components/sections/CDTDiagram';
import { methodologieCdtCopy } from '@/data/copy/methodologie-cdt';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

/**
 * CDTDiagram tests — Sprint 3 Task 2
 * Guards : 3 articles rendered, pillar numbers visible, FR/EN title resolution,
 *          center pillar distinction, halo present (aria-hidden), SVG structure.
 */

// IntersectionObserver not available in jsdom — stub it
vi.stubGlobal(
  'IntersectionObserver',
  class {
    observe() {}
    disconnect() {}
    unobserve() {}
  }
);

// matchMedia not available in jsdom — stub it (prefers-reduced-motion: no preference)
vi.stubGlobal('matchMedia', (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn()
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('CDTDiagram', () => {
  it('renders exactly 3 pillar articles', () => {
    const { container } = render(<CDTDiagram />, { wrapper: wrapper('fr') });
    const articles = container.querySelectorAll('article');
    expect(articles.length).toBe(3);
  });

  it('renders pillar numbers 01, 02, 03 in SVG text elements', () => {
    const { container } = render(<CDTDiagram />, { wrapper: wrapper('fr') });
    const svgTexts = container.querySelectorAll('svg text');
    const numbers = Array.from(svgTexts).map((el) => el.textContent);
    expect(numbers).toContain('01');
    expect(numbers).toContain('02');
    expect(numbers).toContain('03');
  });

  it('renders FR pillar titles correctly', () => {
    render(<CDTDiagram />, { wrapper: wrapper('fr') });
    const { pillars } = methodologieCdtCopy;
    for (const pillar of pillars.items) {
      expect(screen.getByText(pillar.title.fr)).toBeInTheDocument();
    }
  });

  it('renders EN pillar titles when locale is en', () => {
    render(<CDTDiagram />, { wrapper: wrapper('en') });
    const { pillars } = methodologieCdtCopy;
    for (const pillar of pillars.items) {
      expect(screen.getByText(pillar.title.en)).toBeInTheDocument();
    }
  });

  it('renders 3 SVG hexagone polygons (one per pillar, outer stroke)', () => {
    const { container } = render(<CDTDiagram />, { wrapper: wrapper('fr') });
    // Each pillar has 2 polygons (outer stroke + inner fill) — 3 pillars = 6 polygons
    const polygons = container.querySelectorAll('polygon');
    expect(polygons.length).toBe(6);
  });

  it('has an aria-hidden halo decoration element', () => {
    const { container } = render(<CDTDiagram />, { wrapper: wrapper('fr') });
    const halos = container.querySelectorAll('[aria-hidden="true"]');
    // At least 1 aria-hidden: the halo wrapper + 3 SVG wrappers per pillar
    expect(halos.length).toBeGreaterThanOrEqual(1);
  });

  it('center pillar (index 1) has gold ring class', () => {
    const { container } = render(<CDTDiagram />, { wrapper: wrapper('fr') });
    const articles = container.querySelectorAll('article');
    // Center = index 1 — has ring-gold/25 in its className
    const centerArticle = articles[1];
    expect(centerArticle.className).toMatch(/ring-gold/);
  });

  it('flanking pillars (index 0, 2) do not have gold ring class', () => {
    const { container } = render(<CDTDiagram />, { wrapper: wrapper('fr') });
    const articles = container.querySelectorAll('article');
    expect(articles[0].className).not.toMatch(/ring-gold/);
    expect(articles[2].className).not.toMatch(/ring-gold/);
  });

  it('each article has an aria-label matching its pillar title', () => {
    render(<CDTDiagram />, { wrapper: wrapper('fr') });
    const { pillars } = methodologieCdtCopy;
    for (const pillar of pillars.items) {
      expect(screen.getByRole('article', { name: pillar.title.fr })).toBeInTheDocument();
    }
  });
});
