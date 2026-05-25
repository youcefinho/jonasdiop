import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TrustBand } from '@/components/sections/TrustBand';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useCountUp', () => ({
  useCountUp: (value: number) => value
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('TrustBand', () => {
  it('renders three StatNumber values', () => {
    render(<TrustBand />, { wrapper: wrapper('fr') });
    expect(screen.getByText('857+')).toBeInTheDocument();
    expect(screen.getByText('31M$+')).toBeInTheDocument();
    expect(screen.getByText('15 ANS')).toBeInTheDocument();
  });

  it('renders FR labels by default', () => {
    render(<TrustBand />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Entrepreneurs accompagnés/i)).toBeInTheDocument();
    expect(screen.getByText(/Généré pour nos clients/i)).toBeInTheDocument();
    expect(screen.getByText(/D'expertise stratégique/i)).toBeInTheDocument();
  });

  it('renders EN labels when locale is en', () => {
    render(<TrustBand />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Entrepreneurs guided/i)).toBeInTheDocument();
    expect(screen.getByText(/Generated for our clients/i)).toBeInTheDocument();
    expect(screen.getByText(/Of strategic expertise/i)).toBeInTheDocument();
  });

  it('has region role with aria-label', () => {
    render(<TrustBand />, { wrapper: wrapper('fr') });
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('aria-label', 'Chiffres clés');
  });
});
