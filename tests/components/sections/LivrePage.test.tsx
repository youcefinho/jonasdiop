import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { LivrePage } from '@/components/sections/LivrePage';
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

describe('LivrePage — hero', () => {
  it('renders H1 (FR)', () => {
    render(<LivrePage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Architecture');
  });

  it('renders H1 (EN)', () => {
    render(<LivrePage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Business Architecture');
  });
});

describe('LivrePage — sommaire 7 chapters', () => {
  it('renders 7 chapter cards', () => {
    const { container } = render(<LivrePage />, { wrapper: wrapper('fr') });
    const list = container.querySelector('ol[data-chapters-list]');
    expect(list?.querySelectorAll('li').length).toBe(7);
  });

  it('renders 7 chapter numbers (01 → 07)', () => {
    render(<LivrePage />, { wrapper: wrapper('fr') });
    for (let i = 1; i <= 7; i++) {
      const num = String(i).padStart(2, '0');
      expect(screen.getByText(num)).toBeInTheDocument();
    }
  });

  it('renders Pilier 1/2/3 chapter titles (FR)', () => {
    render(<LivrePage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Pilier 1.*Architecture de l.offre/i)).toBeInTheDocument();
    expect(screen.getByText(/Pilier 2.*Architecture de l.équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Pilier 3.*Compression des systèmes/i)).toBeInTheDocument();
  });
});

describe('LivrePage — format 3 items', () => {
  it('renders Print / Ebook / Audiobook formats', () => {
    render(<LivrePage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Print')).toBeInTheDocument();
    expect(screen.getByText('Ebook')).toBeInTheDocument();
    expect(screen.getByText('Audiobook')).toBeInTheDocument();
  });
});

describe('LivrePage — waitlist email capture mockup', () => {
  it('renders disabled email input', () => {
    const { container } = render(<LivrePage />, { wrapper: wrapper('fr') });
    const input = container.querySelector('input[name="email"]');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('renders disabled submit button', () => {
    const { container } = render(<LivrePage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  it('renders submit label (FR)', () => {
    render(<LivrePage />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/M.inscrire sur la liste d.attente/i)).toBeInTheDocument();
  });
});

describe('LivrePage — finalCta', () => {
  it('renders final CTA "Rejoindre la liste d\'attente" (FR)', () => {
    render(<LivrePage />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Rejoindre la liste d.attente/i).length).toBeGreaterThanOrEqual(1);
  });
});
