import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TemoignagesPage } from '@/components/sections/TemoignagesPage';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, ...rest }: { to: string; children: ReactNode; [k: string]: unknown }) => (
    <a href={to} {...rest}>
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

describe('TemoignagesPage — hero', () => {
  it('renders H1 (FR)', () => {
    render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('857 entrepreneurs');
  });

  it('renders H1 (EN)', () => {
    render(<TemoignagesPage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('857 entrepreneurs');
  });
});

describe('TemoignagesPage — methodology', () => {
  it('renders methodology body (no "best of" filtering)', () => {
    render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Pas de filtrage/i)).toBeInTheDocument();
  });
});

describe('TemoignagesPage — filters', () => {
  it('renders 3 disabled filter selects', () => {
    const { container } = render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    const selects = container.querySelectorAll('select');
    expect(selects.length).toBe(3);
    for (const sel of selects) {
      expect(sel).toBeDisabled();
    }
  });
});

describe('TemoignagesPage — grid 3 shells', () => {
  it('renders 3 shell cards', () => {
    const { container } = render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    const shells = container.querySelectorAll('[data-shell-card]');
    expect(shells.length).toBe(3);
  });

  it('renders 3 programme labels (Gamechanger, The Shift, Consultations Privées)', () => {
    render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText('Gamechanger Scaling').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('The Shift').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Consultations Privées').length).toBeGreaterThanOrEqual(1);
  });
});

describe('TemoignagesPage — disclaimer', () => {
  it('renders publication-pending disclaimer (FR)', () => {
    render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Témoignages clients en attente/i)).toBeInTheDocument();
  });
});

describe('TemoignagesPage — finalCta', () => {
  it('renders final CTA "Réserver l\'appel de qualification" (FR)', () => {
    render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Réserver l.appel/i).length).toBeGreaterThanOrEqual(1);
  });

  it('final CTA links to /contact', () => {
    const { container } = render(<TemoignagesPage />, { wrapper: wrapper('fr') });
    expect(container.querySelectorAll('a[href="/contact"]').length).toBeGreaterThanOrEqual(1);
  });
});
