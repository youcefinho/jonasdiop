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

  it('renders 5 desktop nav links (FR)', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Méthodologie/i)).toBeInTheDocument();
    expect(screen.getByText(/Programmes/i)).toBeInTheDocument();
    expect(screen.getByText(/À propos/i)).toBeInTheDocument();
    expect(screen.getByText(/Ressources/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('renders Consultation CTA', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Consultation/i)).toBeInTheDocument();
  });

  it('renders EN nav labels when locale en', () => {
    render(<Navbar />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Methodology/i)).toBeInTheDocument();
    expect(screen.getByText(/Programs/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Resources/i)).toBeInTheDocument();
  });

  it('has aria-label "Navigation principale" (FR)', () => {
    const { container } = render(<Navbar />, { wrapper: wrapper('fr') });
    const nav = container.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Navigation principale');
  });
});
