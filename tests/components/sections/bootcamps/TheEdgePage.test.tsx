import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TheEdgePage } from '@/components/sections/bootcamps/TheEdgePage';
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

// Bootcamp #2 of the Trilogie — application requise, 15 places, 1497$ launch.
// Anti-cannibalisation §5: "Soumettre mon application" CTA reserved for this sub-page.

describe('TheEdgePage — smoke + a11y', () => {
  it('renders without throwing (FR)', () => {
    expect(() => render(<TheEdgePage />, { wrapper: wrapper('fr') })).not.toThrow();
  });

  it('renders exactly 1 H1 (FR)', () => {
    render(<TheEdgePage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('renders exactly 1 H1 (EN)', () => {
    render(<TheEdgePage />, { wrapper: wrapper('en') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

describe('TheEdgePage — sticky bar 15 places + 1 497$ launch', () => {
  it('renders BootcampStickyBar with 15 places + launch price', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    const sticky = container.querySelector('aside.sticky');
    expect(sticky).toBeInTheDocument();
    expect(sticky?.textContent).toContain('15');
    expect(sticky?.textContent).toContain('1 497');
  });
});

describe('TheEdgePage — mirror checklist 10 items', () => {
  it('renders 10 mirror items', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="bootcamp-mirror"]');
    expect(list?.querySelectorAll('li').length).toBe(10);
  });
});

describe('TheEdgePage — deliverables 10 items', () => {
  it('renders 10 deliverable rows', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    const tables = container.querySelectorAll('table');
    const tbodyWith10 = Array.from(tables).find(
      (t) => t.querySelectorAll('tbody > tr').length === 10
    );
    expect(tbodyWith10).toBeTruthy();
  });
});

describe('TheEdgePage — bonus list 6 items', () => {
  it('renders 6 bonus cards', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="bootcamp-bonus"]');
    expect(list?.querySelectorAll('li').length).toBe(6);
  });
});

describe('TheEdgePage — value & price (1 497$ launch / 1 997$ regular)', () => {
  it('renders prices verbatim (FR)', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    expect(container.textContent).toContain('1 497');
    expect(container.textContent).toContain('1 997');
  });
});

describe('TheEdgePage — application form shell anchor', () => {
  it('exposes #edge-application scroll target for hero CTA', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('#edge-application')).toBeInTheDocument();
  });

  it('renders the application form shell with disabled fieldset', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    // The disabled fieldset is somewhere on the page once Edge form shell renders
    const anyDisabled = container.querySelector('fieldset[disabled]');
    expect(anyDisabled).toBeInTheDocument();
  });
});

describe('TheEdgePage — FAQ 6 details items', () => {
  it('renders 6 FAQ <details> entries (page has objections + FAQ = 11 total)', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    // Both objections (5) and FAQ (6) use native <details>. Total = 11.
    const details = container.querySelectorAll('details');
    expect(details.length).toBe(11);
  });
});

describe('TheEdgePage — TrilogieFooterCrossLink', () => {
  it('renders 3 trilogie cards', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="trilogie-crosslink"]');
    expect(list?.querySelectorAll('li').length).toBe(3);
  });

  it('current bootcamp is The Edge with aria-current="page"', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('fr') });
    const current = container.querySelector(
      '[data-card-group="trilogie-crosslink"] [aria-current="page"]'
    );
    expect(current?.textContent).toContain('The Edge');
  });
});

describe('TheEdgePage — Schema.org graph + FAQ', () => {
  it('injects Schema.org script with WebPage + Event + Course', async () => {
    render(<TheEdgePage />, { wrapper: wrapper('fr') });
    await new Promise((r) => setTimeout(r, 10));
    const script = document.getElementById('schema-org-the-edge') as HTMLScriptElement | null;
    expect(script).toBeInTheDocument();
    const txt = script?.textContent ?? '';
    expect(txt).toContain('WebPage');
    expect(txt).toContain('Event');
    expect(txt).toContain('Course');
  });

  it('injects FAQPage schema separately', async () => {
    render(<TheEdgePage />, { wrapper: wrapper('fr') });
    await new Promise((r) => setTimeout(r, 10));
    const faq = document.getElementById('schema-org-faq-evenements-bootcamp-the-edge');
    expect(faq).toBeInTheDocument();
    expect(faq?.textContent).toContain('FAQPage');
  });
});

describe('TheEdgePage — EN locale renders EN copy', () => {
  it('renders EN sticky CTA label', () => {
    const { container } = render(<TheEdgePage />, { wrapper: wrapper('en') });
    const sticky = container.querySelector('aside.sticky');
    expect(sticky?.textContent ?? '').toMatch(/application|submit|notify/i);
  });
});
