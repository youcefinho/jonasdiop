import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
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

describe('ProgramsGrid', () => {
  it('renders 6 program cards', () => {
    const { container } = render(<ProgramsGrid />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Gamechanger Scaling')).toBeInTheDocument();
    expect(screen.getByText('The Shift')).toBeInTheDocument();
    expect(screen.getByText('Master Closing')).toBeInTheDocument();
    expect(screen.getByText('Focus & Flow')).toBeInTheDocument();
    expect(screen.getByText('Cash & Scale™')).toBeInTheDocument();
    expect(screen.getByText('Consultations Privées')).toBeInTheDocument();
    expect(
      container.querySelectorAll('article, a[href^="/services/"]').length
    ).toBeGreaterThanOrEqual(6);
  });

  it('renders eyebrow + H2 + sub in FR', () => {
    render(<ProgramsGrid />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Nos programmes/i)).toBeInTheDocument();
    expect(screen.getByText(/Écosystèmes complets/i)).toBeInTheDocument();
  });

  it('renders EN H2 when locale en', () => {
    render(<ProgramsGrid />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Complete coaching ecosystems/i)).toBeInTheDocument();
  });

  it('renders bottom link to /services', () => {
    render(<ProgramsGrid />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Voir tous les programmes en détail/i)).toBeInTheDocument();
  });
});
