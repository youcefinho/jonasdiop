import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AnArmyOfOnePage } from '@/components/sections/bootcamps/AnArmyOfOnePage';
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

// Bootcamp #1 of the Trilogie — VSL longue 17 sections.
// Mode pré-lancement: Stripe non câblé, capture email visuel, no fake testimonials.

describe('AnArmyOfOnePage — smoke + a11y', () => {
  it('renders without throwing (FR)', () => {
    expect(() => render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') })).not.toThrow();
  });

  it('renders exactly 1 H1 (FR)', () => {
    render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('renders exactly 1 H1 (EN)', () => {
    render(<AnArmyOfOnePage />, { wrapper: wrapper('en') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

describe('AnArmyOfOnePage — sticky bar', () => {
  it('renders BootcampStickyBar with 20 places + 997$ launch price (FR)', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    const sticky = container.querySelector('aside.sticky');
    expect(sticky).toBeInTheDocument();
    expect(sticky?.textContent).toContain('20');
    expect(sticky?.textContent).toContain('997');
  });
});

describe('AnArmyOfOnePage — mirror checklist 10 items (verbatim PDF §5)', () => {
  it('renders 10 mirror checklist items', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="bootcamp-mirror"]');
    expect(list?.querySelectorAll('li').length).toBe(10);
  });
});

describe('AnArmyOfOnePage — deliverables 9 items', () => {
  it('renders 9 deliverable rows in the table', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    const tables = container.querySelectorAll('table');
    // DeliverablesTable lives in this page — its tbody has 9 rows
    const tbodyWith9 = Array.from(tables).find(
      (t) => t.querySelectorAll('tbody > tr').length === 9
    );
    expect(tbodyWith9).toBeTruthy();
  });
});

describe('AnArmyOfOnePage — bonus list 6 items', () => {
  it('renders 6 bonus cards', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="bootcamp-bonus"]');
    expect(list?.querySelectorAll('li').length).toBe(6);
  });
});

describe('AnArmyOfOnePage — value & price table', () => {
  it('renders price launch 997$ and regular price line-through', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    // Multiple 997$ in sticky + value-price, plus 1 497$ regular.
    expect(container.textContent).toContain('997');
    expect(container.textContent).toContain('1 497');
  });

  it('renders 7 value composition rows', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    // ValuePriceTable dl with valueRows + last row valueTotal => 7 valueRows + 1 total
    const dls = container.querySelectorAll('dl');
    const matching = Array.from(dls).find((dl) => dl.querySelectorAll('dt').length === 8);
    expect(matching).toBeTruthy();
  });
});

describe('AnArmyOfOnePage — FAQ 8 details items', () => {
  it('renders 8 <details> entries', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    const details = container.querySelectorAll('details');
    expect(details.length).toBe(8);
  });
});

describe('AnArmyOfOnePage — TrilogieFooterCrossLink', () => {
  it('renders 3 trilogie cards in the cross-link footer', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="trilogie-crosslink"]');
    expect(list?.querySelectorAll('li').length).toBe(3);
  });

  it('current bootcamp card has aria-current="page"', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    const current = container.querySelector(
      '[data-card-group="trilogie-crosslink"] [aria-current="page"]'
    );
    expect(current).toBeInTheDocument();
    expect(current?.textContent).toContain('An Army of One');
  });
});

describe('AnArmyOfOnePage — Schema.org @graph', () => {
  it('injects Schema.org script with WebPage + Event + Course + FAQ + Breadcrumb', async () => {
    render(<AnArmyOfOnePage />, { wrapper: wrapper('fr') });
    await new Promise((r) => setTimeout(r, 10));
    const script = document.getElementById('schema-org-bootcamp-aaoo') as HTMLScriptElement | null;
    expect(script).toBeInTheDocument();
    const txt = script?.textContent ?? '';
    expect(txt).toContain('WebPage');
    expect(txt).toContain('Event');
    expect(txt).toContain('Course');
    expect(txt).toContain('FAQPage');
    expect(txt).toContain('BreadcrumbList');
  });
});

describe('AnArmyOfOnePage — EN locale renders EN copy', () => {
  it('renders EN sticky CTA label ("Be notified" / "Subscribe")', () => {
    const { container } = render(<AnArmyOfOnePage />, { wrapper: wrapper('en') });
    const sticky = container.querySelector('aside.sticky');
    expect(sticky?.textContent ?? '').toMatch(/notified|subscribe|reserve/i);
  });
});
