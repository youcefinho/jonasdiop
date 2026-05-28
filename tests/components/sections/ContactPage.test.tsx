import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ContactPage } from '@/components/sections/ContactPage';
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

describe('ContactPage — hero', () => {
  it('renders H1 from copy.hero.h1 (FR)', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Parlons de votre architecture');
  });

  it('renders H1 from copy.hero.h1 (EN)', () => {
    render(<ContactPage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Let');
    expect(h1.textContent).toContain('architecture');
  });

  it('renders 30-minute qualification call mention', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/30 minutes/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('ContactPage — howItWorks 3 steps', () => {
  it('renders 3 step numbers', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders 3 step titles (FR)', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Réservez')).toBeInTheDocument();
    expect(screen.getByText('Pré-call qualification')).toBeInTheDocument();
    expect(screen.getByText('Décision mutuelle')).toBeInTheDocument();
  });

  it('renders 3 step titles (EN)', () => {
    render(<ContactPage />, { wrapper: wrapper('en') });
    expect(screen.getByText('Book')).toBeInTheDocument();
    expect(screen.getByText('Pre-call qualification')).toBeInTheDocument();
    expect(screen.getByText('Mutual decision')).toBeInTheDocument();
  });
});

describe('ContactPage — callExplore 5 items', () => {
  it('renders 5 exploration items', () => {
    const { container } = render(<ContactPage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('ul[data-call-explore-list]');
    expect(list).toBeInTheDocument();
    expect(list?.querySelectorAll('li').length).toBe(5);
  });
});

describe('ContactPage — notForWho disqualif', () => {
  it('renders 4 disqualif items', () => {
    const { container } = render(<ContactPage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('ul[data-disqualif-list]');
    expect(list?.querySelectorAll('li').length).toBe(4);
  });
});

describe('ContactPage — form mockup', () => {
  it('renders 4 input/select/textarea fields plus submit button', () => {
    const { container } = render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('input[name="name"]')).toBeInTheDocument();
    expect(container.querySelector('input[name="email"]')).toBeInTheDocument();
    expect(container.querySelector('input[name="phone"]')).toBeInTheDocument();
    expect(container.querySelector('select[name="revenueRange"]')).toBeInTheDocument();
    expect(container.querySelector('textarea[name="message"]')).toBeInTheDocument();
  });

  it('inputs are disabled (Sprint 6 wire pending)', () => {
    const { container } = render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('input[name="name"]')).toBeDisabled();
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('renders submit label (FR)', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Envoyer le message')).toBeInTheDocument();
  });

  it('renders 5 revenue range options (under 100K → 1M+)', () => {
    const { container } = render(<ContactPage />, { wrapper: wrapper('fr') });
    const select = container.querySelector('select[name="revenueRange"]');
    expect(select?.querySelectorAll('option').length).toBe(5);
  });
});

describe('ContactPage — calendly placeholder', () => {
  it('renders Calendly placeholder card', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Calendly/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('ContactPage — contactAlternatives 3 items', () => {
  it('renders email coordinate', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('contact@jonasdiop.com')).toBeInTheDocument();
  });

  it('renders phone coordinate', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('+1 438 356 7746')).toBeInTheDocument();
  });

  it('renders territory coordinate', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Montréal.*Worldwide/i)).toBeInTheDocument();
  });

  it('renders 24-48h response time (FR)', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/24-48h/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('ContactPage — finalCta', () => {
  it('renders final CTA gold button label (FR)', () => {
    render(<ContactPage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Réserver l.appel de qualification/i).length).toBeGreaterThanOrEqual(
      1
    );
  });
});
