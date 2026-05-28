import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { RessourcesPage } from '@/components/sections/RessourcesPage';
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

describe('RessourcesPage — hero', () => {
  it('renders H1 (FR)', () => {
    render(<RessourcesPage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Articles');
  });

  it('renders H1 (EN)', () => {
    render(<RessourcesPage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Articles');
  });
});

describe('RessourcesPage — articles empty state', () => {
  it('renders empty state placeholder (GHL Blog Sprint 6 wire pending)', () => {
    const { container } = render(<RessourcesPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('[data-articles-empty]')).toBeInTheDocument();
    expect(screen.getByText(/premiers articles arrivent/i)).toBeInTheDocument();
  });
});

describe('RessourcesPage — 5 categories', () => {
  it('renders 5 category cards', () => {
    const { container } = render(<RessourcesPage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('ul[data-categories-list]');
    expect(list?.querySelectorAll('li').length).toBe(5);
  });

  it('renders all category labels (FR)', () => {
    render(<RessourcesPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Architecture')).toBeInTheDocument();
    expect(screen.getByText('Scaling')).toBeInTheDocument();
    expect(screen.getByText('Closing')).toBeInTheDocument();
    expect(screen.getByText('Cash flow')).toBeInTheDocument();
    expect(screen.getByText('Mindset')).toBeInTheDocument();
  });
});

describe('RessourcesPage — frameworks shells (pending validation)', () => {
  it('hides the frameworks list while no shells are published', () => {
    const { container } = render(<RessourcesPage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('ul[data-frameworks-list]');
    expect(list).toBeNull();
  });
});

describe('RessourcesPage — newsletter capture mockup', () => {
  it('renders 4 newsletter benefits', () => {
    const { container } = render(<RessourcesPage />, { wrapper: wrapper('fr') });
    const benefits = container.querySelector('ul[data-newsletter-benefits]');
    expect(benefits?.querySelectorAll('li').length).toBe(4);
  });

  it('renders disabled email input + submit', () => {
    const { container } = render(<RessourcesPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('input[name="email"]')).toBeDisabled();
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('renders subscribe label (FR)', () => {
    render(<RessourcesPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/S.abonner aux insights mensuels/i)).toBeInTheDocument();
  });
});

describe('RessourcesPage — finalCta', () => {
  it('renders final CTA "S\'abonner" (FR)', () => {
    render(<RessourcesPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/S.abonner/i).length).toBeGreaterThanOrEqual(1);
  });
});
