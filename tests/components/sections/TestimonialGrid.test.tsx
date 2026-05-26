import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
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

describe('TestimonialGrid', () => {
  it('renders 3 testimonial shells', () => {
    const { container } = render(<TestimonialGrid />, { wrapper: wrapper('fr') });
    expect(container.querySelectorAll('article').length).toBe(3);
  });

  it('renders eyebrow + H2 in FR', () => {
    render(<TestimonialGrid />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Ils ont appliqué CDT™/i)).toBeInTheDocument();
    expect(screen.getByText(/857 entrepreneurs ont déjà ajouté un zéro/i)).toBeInTheDocument();
  });

  it('renders EN content', () => {
    render(<TestimonialGrid />, { wrapper: wrapper('en') });
    expect(screen.getByText(/They applied CDT™/i)).toBeInTheDocument();
    expect(screen.getByText(/857 entrepreneurs have already added a zero/i)).toBeInTheDocument();
  });

  it('renders disclaimer + bottom link', () => {
    render(<TestimonialGrid />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Portraits et témoignages illustratifs/i)).toBeInTheDocument();
    expect(screen.getByText(/Voir tous les témoignages/i)).toBeInTheDocument();
  });

  it('focal testimonial card has gold ring (Marc Lefebvre centerElevated=true)', () => {
    const { container } = render(<TestimonialGrid />, { wrapper: wrapper('fr') });
    const articles = container.querySelectorAll('article');
    expect(articles[1]?.className).toContain('ring-gold');
    expect(articles[0]?.className).toContain('ring-silver');
    expect(articles[2]?.className).toContain('ring-silver');
  });
});
