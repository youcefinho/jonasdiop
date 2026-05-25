import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { TestimonialShellCard } from '@/components/ui/TestimonialShellCard';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('TestimonialShellCard', () => {
  it('renders FR placeholder text', () => {
    render(<TestimonialShellCard />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Témoignage à venir/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/En attente d'autorisation client/i)).toBeInTheDocument();
  });

  it('renders EN placeholder text', () => {
    render(<TestimonialShellCard />, { wrapper: wrapper('en') });
    expect(screen.getAllByText(/Testimonial coming soon/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Pending client authorization/i)).toBeInTheDocument();
  });

  it('default variant uses silver border', () => {
    const { container } = render(<TestimonialShellCard />, { wrapper: wrapper('fr') });
    expect(container.querySelector('article')?.className).toContain('border-silver');
  });

  it('centerElevated variant uses gold border', () => {
    const { container } = render(<TestimonialShellCard centerElevated />, {
      wrapper: wrapper('fr')
    });
    expect(container.querySelector('article')?.className).toContain('border-gold');
  });
});
