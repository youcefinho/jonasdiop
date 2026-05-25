import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { StatNumber } from '@/components/ui/StatNumber';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useCountUp', () => ({
  useCountUp: (value: number) => value
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('StatNumber', () => {
  it('renders value + suffix in gold giant', () => {
    render(
      <StatNumber value={857} suffix="+" label={{ fr: 'Entrepreneurs', en: 'Entrepreneurs' }} />,
      {
        wrapper: wrapper('fr')
      }
    );
    expect(screen.getByText('857+')).toBeInTheDocument();
    expect(screen.getByText('857+').className).toContain('text-gold');
  });

  it('renders FR label when locale is fr', () => {
    render(<StatNumber value={31} suffix="M$+" label={{ fr: 'Généré', en: 'Generated' }} />, {
      wrapper: wrapper('fr')
    });
    expect(screen.getByText('Généré')).toBeInTheDocument();
  });

  it('renders EN label when locale is en', () => {
    render(<StatNumber value={15} suffix=" ANS" label={{ fr: 'Expérience', en: 'Experience' }} />, {
      wrapper: wrapper('en')
    });
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('applies label styles (uppercase tracking-widest silver)', () => {
    render(<StatNumber value={1} suffix="" label={{ fr: 'X', en: 'X' }} />, {
      wrapper: wrapper('fr')
    });
    const labelEl = screen.getByText('X');
    expect(labelEl.className).toContain('uppercase');
    expect(labelEl.className).toContain('tracking-widest');
  });
});
