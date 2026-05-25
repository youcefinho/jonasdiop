import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { FooterRich } from '@/components/layout/FooterRich';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, className }: { to: string; children: ReactNode; className?: string }) => (
    <a href={to} className={className}>
      {children}
    </a>
  )
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('FooterRich', () => {
  it('renders logo wordmark', () => {
    render(<FooterRich />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/JONAS DIOP/i)).toBeInTheDocument();
  });

  it('renders 4 column headings (FR)', () => {
    render(<FooterRich />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Architecte d'affaires/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Programmes/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Ressources/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact & légal/i)).toBeInTheDocument();
  });

  it('renders 6 program links in Programmes column', () => {
    render(<FooterRich />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Gamechanger Scaling')).toBeInTheDocument();
    expect(screen.getByText('The Shift')).toBeInTheDocument();
    expect(screen.getByText('Cash & Scale™')).toBeInTheDocument();
    expect(screen.getByText('Consultations Privées')).toBeInTheDocument();
  });

  it('renders contact info (email + phone + location)', () => {
    render(<FooterRich />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/contact@jonasdiop.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Montréal & Worldwide/i)).toBeInTheDocument();
  });

  it('renders copyright with legal name', () => {
    render(<FooterRich />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/DIOP Stratégies Internationales Inc/i)).toBeInTheDocument();
  });

  it('renders Intralys credit', () => {
    render(<FooterRich />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Intralys/i)).toBeInTheDocument();
  });

  it('renders EN content when locale en', () => {
    render(<FooterRich />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Business architect/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact & legal/i)).toBeInTheDocument();
  });
});
