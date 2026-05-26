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

describe('EvenementsPage — hero', () => {
  it('renders H1 (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Masterminds');
  });

  it('renders H1 (EN)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Exclusive masterminds');
  });
});

describe('EvenementsPage — formatType 4 specs', () => {
  it('renders 4 spec dt/dd pairs', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const specs = container.querySelector('dl[data-event-specs]');
    expect(specs?.querySelectorAll('dt').length).toBe(4);
    expect(specs?.querySelectorAll('dd').length).toBe(4);
  });

  it('renders Durée + Participants + Lieux + Langue labels (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Durée')).toBeInTheDocument();
    expect(screen.getByText('Participants')).toBeInTheDocument();
    expect(screen.getByText('Lieux')).toBeInTheDocument();
    expect(screen.getByText('Langue')).toBeInTheDocument();
  });
});

describe('EvenementsPage — programme 4 agenda items', () => {
  it('renders 4 programme cards', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const grid = container.querySelector('[data-programme-grid]');
    expect(grid?.querySelectorAll('article').length).toBe(4);
  });

  it('renders 4 step numbers (01 → 04)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });
});

describe('EvenementsPage — calendrier empty state', () => {
  it('renders empty state message (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Aucun événement annoncé/i)).toBeInTheDocument();
  });
});

describe('EvenementsPage — capture form mockup', () => {
  it('renders disabled email input', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    const input = container.querySelector('input[name="email"]');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });
});

describe('EvenementsPage — finalCta dual', () => {
  it('renders primary CTA "Notifications événements" (FR)', () => {
    render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Notifications événements/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders secondary CTA "Discuter de ma candidature" linking to /contact', () => {
    const { container } = render(<EvenementsPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Discuter de ma candidature/i)).toBeInTheDocument();
    expect(container.querySelectorAll('a[href="/contact"]').length).toBeGreaterThanOrEqual(1);
  });
});
