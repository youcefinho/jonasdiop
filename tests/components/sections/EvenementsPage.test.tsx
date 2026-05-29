import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { EvenementsPage } from '@/components/sections/EvenementsPage';
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

// Brief v3 §3.5 — 8 sections page Événements parent.
// Brief v3 §3.6 — sous-pages event template.

describe('EvenementsPage — hero', () => {
  it('renders H1 (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Game Changer');
  });

  it('renders H1 (EN)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Game Changer');
  });
});

describe('EvenementsPage — pourquoi présentiel 4 bénéfices', () => {
  it('renders 4 benefit cards', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const grid = container.querySelector('[data-card-group="evenements-benefices"]');
    expect(grid?.querySelectorAll('article').length).toBe(4);
  });

  it('renders 4 numerals (01 → 04)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    // Numerals are repeated as both FiligraneNumber decoration + benefice index.
    expect(screen.getAllByText('01').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('02').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('03').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('04').length).toBeGreaterThanOrEqual(1);
  });
});

describe('EvenementsPage — types 3 cards anchored', () => {
  it('renders 3 type cards', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const grid = container.querySelector('[data-card-group="evenements-types"]');
    expect(grid?.querySelectorAll('article').length).toBe(3);
  });

  it('renders anchor ids #bootcamps #retraites #masterclass', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('#bootcamps')).toBeInTheDocument();
    expect(container.querySelector('#retraites')).toBeInTheDocument();
    expect(container.querySelector('#masterclass')).toBeInTheDocument();
  });
});

describe('EvenementsPage — calendrier fallback capture email (no events)', () => {
  it('renders fallback eyebrow (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Aucun événement programmé/i)).toBeInTheDocument();
  });

  it('renders disabled email input', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const input = container.querySelector('input[name="email"]');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('exposes capture form data-attribute for CTA scroll-to target', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('[data-events-capture-form]')).toBeInTheDocument();
  });
});

describe('EvenementsPage — galerie placeholders', () => {
  it('renders 6 photo placeholders + 1 aftermovie placeholder', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Photo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Photo 6/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Aftermovie/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('EvenementsPage — faq 5 logistics items', () => {
  it('renders 5 native <details> entries', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const details = container.querySelectorAll('details');
    expect(details.length).toBe(5);
  });
});

describe('EvenementsPage — finalCta dual', () => {
  it('renders primary CTA "Voir les événements programmés" (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Voir les événements programmés/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders secondary CTA "Être informé en priorité" (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Être informé en priorité/i)).toBeInTheDocument();
  });
});

describe('EvenementsPage — calendrier scroll anchor', () => {
  it('exposes id="calendrier" target for hero CTA scroll-to', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('#calendrier')).toBeInTheDocument();
  });
});
