import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Navbar } from '@/components/layout/Navbar';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({
    to,
    children,
    className,
    'aria-label': ariaLabel
  }: {
    to: string;
    children: ReactNode;
    className?: string;
    'aria-label'?: string;
  }) => (
    <a href={to} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  )
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('Navbar', () => {
  it('renders logo wordmark', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/JONAS DIOP/i)).toBeInTheDocument();
  });

  it('renders brief v3 sitemap onglets (FR)', () => {
    // Both desktop nav AND mobile drawer aside render same labels (drawer hidden via translate),
    // so getAllByText returns multiple — verify >= 1 for each.
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/À propos/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Programmes/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Événements/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Livres/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Conférences/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Ressources/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders "Réserver mon appel" CTA', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Réserver mon appel/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders EN nav labels when locale en', () => {
    render(<Navbar />, { wrapper: wrapper('en') });
    expect(screen.getAllByText(/About/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Programs/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Events/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Books/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Speaking/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Resources/i).length).toBeGreaterThanOrEqual(1);
  });

  it('has aria-label "Navigation principale" (FR)', () => {
    const { container } = render(<Navbar />, { wrapper: wrapper('fr') });
    const nav = container.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Navigation principale');
  });
});
