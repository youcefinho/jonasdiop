import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, className }: { to: string; children: ReactNode; className?: string }) => (
    <a href={to} className={className}>
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

describe('FinalCTASection', () => {
  it('renders FR eyebrow + H2 + sub + CTA', () => {
    render(<FinalCTASection />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Prochaine étape/i)).toBeInTheDocument();
    expect(screen.getByText(/Prêt à ajouter un zéro/i)).toBeInTheDocument();
    expect(screen.getByText(/Appel de qualification gratuit/i)).toBeInTheDocument();
    expect(screen.getByText(/Réserver mon appel/i)).toBeInTheDocument();
  });

  it('renders EN content', () => {
    render(<FinalCTASection />, { wrapper: wrapper('en') });
    expect(screen.getByText(/Next step/i)).toBeInTheDocument();
    expect(screen.getByText(/Ready to add a zero/i)).toBeInTheDocument();
    expect(screen.getByText(/Free qualification call/i)).toBeInTheDocument();
    expect(screen.getByText(/Book my call/i)).toBeInTheDocument();
  });

  it('CTA href points to /contact (FR)', () => {
    const { container } = render(<FinalCTASection />, { wrapper: wrapper('fr') });
    const link = container.querySelector('a[href="/contact"]');
    expect(link).toBeInTheDocument();
  });
});
