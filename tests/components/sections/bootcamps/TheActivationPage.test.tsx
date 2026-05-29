import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TheActivationPage } from '@/components/sections/bootcamps/TheActivationPage';
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

// Bootcamp #3 of the Trilogie — performance humaine, IOS/ESD/ECO, 20 places, 1497$.

describe('TheActivationPage — smoke + a11y', () => {
  it('renders without throwing (FR)', () => {
    expect(() => render(<TheActivationPage />, { wrapper: wrapper('fr') })).not.toThrow();
  });

  it('renders exactly 1 H1 (FR)', () => {
    render(<TheActivationPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('renders exactly 1 H1 (EN)', () => {
    render(<TheActivationPage />, { wrapper: wrapper('en') });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

describe('TheActivationPage — sticky bar 20 places + 1 497$ launch', () => {
  it('renders BootcampStickyBar with 20 places + launch price', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    const sticky = container.querySelector('aside.sticky');
    expect(sticky).toBeInTheDocument();
    expect(sticky?.textContent).toContain('20');
    expect(sticky?.textContent).toContain('1 497');
  });
});

describe('TheActivationPage — mirror checklist 10 items', () => {
  it('renders 10 mirror items', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="bootcamp-mirror"]');
    expect(list?.querySelectorAll('li').length).toBe(10);
  });
});

describe('TheActivationPage — deliverables 12 items', () => {
  it('renders 12 deliverable rows', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    const tables = container.querySelectorAll('table');
    const tbodyWith12 = Array.from(tables).find(
      (t) => t.querySelectorAll('tbody > tr').length === 12
    );
    expect(tbodyWith12).toBeTruthy();
  });
});

describe('TheActivationPage — bonus list 6 items', () => {
  it('renders 6 bonus cards', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="bootcamp-bonus"]');
    expect(list?.querySelectorAll('li').length).toBe(6);
  });
});

describe('TheActivationPage — value & price', () => {
  it('renders 1 497$ launch + 1 997$ regular (FR)', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    expect(container.textContent).toContain('1 497');
    expect(container.textContent).toContain('1 997');
  });
});

describe('TheActivationPage — FAQ 6 details items', () => {
  it('renders 6 native <details> entries', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    const details = container.querySelectorAll('details');
    expect(details.length).toBe(6);
  });
});

describe('TheActivationPage — TrilogieFooterCrossLink', () => {
  it('renders 3 trilogie cards', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('[data-card-group="trilogie-crosslink"]');
    expect(list?.querySelectorAll('li').length).toBe(3);
  });

  it('current bootcamp is The Activation with aria-current="page"', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('fr') });
    const current = container.querySelector(
      '[data-card-group="trilogie-crosslink"] [aria-current="page"]'
    );
    expect(current?.textContent).toContain('The Activation');
  });
});

describe('TheActivationPage — Schema.org WebPage + Event + Course + FAQ', () => {
  it('injects Schema.org route script', async () => {
    render(<TheActivationPage />, { wrapper: wrapper('fr') });
    await new Promise((r) => setTimeout(r, 10));
    const script = document.getElementById(
      'schema-org-route-the-activation'
    ) as HTMLScriptElement | null;
    expect(script).toBeInTheDocument();
    const txt = script?.textContent ?? '';
    expect(txt).toContain('WebPage');
    expect(txt).toContain('Event');
    expect(txt).toContain('Course');
  });

  it('injects FAQPage schema script', async () => {
    render(<TheActivationPage />, { wrapper: wrapper('fr') });
    await new Promise((r) => setTimeout(r, 10));
    const faq = document.getElementById('schema-org-faq-evenements-bootcamp-the-activation');
    expect(faq).toBeInTheDocument();
    expect(faq?.textContent).toContain('FAQPage');
  });
});

describe('TheActivationPage — EN locale renders EN copy', () => {
  it('renders EN sticky CTA label', () => {
    const { container } = render(<TheActivationPage />, { wrapper: wrapper('en') });
    const sticky = container.querySelector('aside.sticky');
    expect(sticky?.textContent ?? '').toMatch(/notified|subscribe|reserve/i);
  });
});
