import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Hero } from '@/components/sections/Hero';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));
vi.mock('@/hooks/useSmoothScroll', () => ({
  useSmoothScroll: () => vi.fn()
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('Hero', () => {
  it('renders eyebrow with FR text', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Architecte d'affaires/i)).toBeInTheDocument();
  });

  it('renders FR H1 promise', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Ajouter un zéro');
  });

  it('renders EN H1 when locale is en', () => {
    render(<Hero />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Add a zero');
  });

  it('renders two CTAs (primary gold + secondary silver)', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Prendre rendez-vous/i)).toBeInTheDocument();
    expect(screen.getByText(/Découvrir la méthode CDT/i)).toBeInTheDocument();
  });

  it('renders scroll cue', () => {
    render(<Hero />, { wrapper: wrapper('fr') });
    expect(screen.getByLabelText(/défiler/i)).toBeInTheDocument();
  });
});
