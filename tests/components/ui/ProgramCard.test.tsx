import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ProgramCard } from '@/components/ui/ProgramCard';
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

describe('ProgramCard', () => {
  const baseProps = {
    href: '/services/test',
    eyebrow: { fr: 'Eyebrow FR', en: 'Eyebrow EN' },
    title: { fr: 'Titre FR', en: 'Title EN' },
    description: { fr: 'Description FR', en: 'Description EN' }
  };

  it('renders title and description in FR', () => {
    render(<ProgramCard variant="groupe" {...baseProps} />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Titre FR')).toBeInTheDocument();
    expect(screen.getByText('Description FR')).toBeInTheDocument();
  });

  it('renders title and description in EN', () => {
    render(<ProgramCard variant="groupe" {...baseProps} />, { wrapper: wrapper('en') });
    expect(screen.getByText('Title EN')).toBeInTheDocument();
    expect(screen.getByText('Description EN')).toBeInTheDocument();
  });

  it('groupe variant uses silver border class', () => {
    const { container } = render(<ProgramCard variant="groupe" {...baseProps} />, {
      wrapper: wrapper('fr')
    });
    expect(container.querySelector('a')?.className).toContain('border-silver');
  });

  it('accompagnement variant uses gold border class', () => {
    const { container } = render(<ProgramCard variant="accompagnement" {...baseProps} />, {
      wrapper: wrapper('fr')
    });
    expect(container.querySelector('a')?.className).toContain('border-gold');
  });

  it('accompagnement CTA says "Postuler" in FR', () => {
    render(<ProgramCard variant="accompagnement" {...baseProps} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Postuler/i)).toBeInTheDocument();
  });

  it('non-accompagnement CTA says "En savoir plus" in FR', () => {
    render(<ProgramCard variant="formation" {...baseProps} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/En savoir plus/i)).toBeInTheDocument();
  });

  it('href is forwarded', () => {
    const { container } = render(<ProgramCard variant="groupe" {...baseProps} />, {
      wrapper: wrapper('fr')
    });
    expect(container.querySelector('a')?.getAttribute('href')).toBe('/services/test');
  });
});
