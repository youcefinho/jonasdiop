import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { FAQPage } from '@/components/sections/FAQPage';
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

describe('FAQPage — hero', () => {
  it('renders H1 (FR)', () => {
    render(<FAQPage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Questions fréquentes');
  });

  it('renders H1 (EN)', () => {
    render(<FAQPage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Frequently asked questions');
  });
});

describe('FAQPage — 5 categories', () => {
  it('renders all 5 category h2 (FR)', () => {
    const { container } = render(<FAQPage />, { wrapper: wrapper('fr') });
    const h2s = Array.from(container.querySelectorAll('h2')).map((el) => el.textContent ?? '');
    expect(h2s.some((t) => /Avant de s.engager/i.test(t))).toBe(true);
    expect(h2s.some((t) => /Formats d.accompagnement/i.test(t))).toBe(true);
    expect(h2s.some((t) => /Investissement/i.test(t))).toBe(true);
    expect(h2s.some((t) => /Résultats.*garanties/i.test(t))).toBe(true);
    expect(h2s.some((t) => /Logistique/i.test(t))).toBe(true);
  });
});

describe('FAQPage — accordion items', () => {
  it('renders 14 details elements total (sum of items across 5 categories)', () => {
    const { container } = render(<FAQPage />, { wrapper: wrapper('fr') });
    const details = container.querySelectorAll('details');
    expect(details.length).toBe(14);
  });

  it('renders some verbatim brief questions', () => {
    render(<FAQPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Pour qui sont conçus vos programmes/i)).toBeInTheDocument();
    expect(screen.getByText(/Quels sont vos tarifs/i)).toBeInTheDocument();
    expect(screen.getByText(/Offrez-vous une garantie de résultats/i)).toBeInTheDocument();
  });

  it('answer text appears inside details/summary structure', () => {
    const { container } = render(<FAQPage />, { wrapper: wrapper('fr') });
    const summaries = container.querySelectorAll('summary');
    expect(summaries.length).toBeGreaterThanOrEqual(14);
  });
});

describe('FAQPage — finalCta', () => {
  it('renders final CTA "Réserver un appel" (FR)', () => {
    render(<FAQPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Réserver un appel')).toBeInTheDocument();
  });

  it('final CTA links to /contact', () => {
    const { container } = render(<FAQPage />, { wrapper: wrapper('fr') });
    const contactLinks = container.querySelectorAll('a[href="/contact"]');
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });
});
