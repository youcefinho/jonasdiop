import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { NotFoundPage } from '@/components/sections/NotFoundPage';
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

describe('NotFoundPage — 404 fallback', () => {
  it('renders H1 "Page introuvable" (FR)', () => {
    render(<NotFoundPage />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Page introuvable');
  });

  it('renders H1 "Page not found" (EN)', () => {
    render(<NotFoundPage />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Page not found');
  });

  it('renders 404 filigrane number', () => {
    render(<NotFoundPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders dual CTAs (home + services)', () => {
    const { container } = render(<NotFoundPage />, { wrapper: wrapper('fr') });
    expect(container.querySelector('a[href="/"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/services"]')).toBeInTheDocument();
  });

  it('renders 4 useful links (CDT™ / About / Contact / FAQ)', () => {
    const { container } = render(<NotFoundPage />, { wrapper: wrapper('fr') });
    const nav = container.querySelector('nav[data-not-found-nav]');
    expect(nav?.querySelectorAll('li').length).toBe(4);
  });

  it('renders useful link labels (FR)', () => {
    render(<NotFoundPage />, { wrapper: wrapper('fr') });
    expect(screen.getByText('Méthodologie CDT™')).toBeInTheDocument();
    expect(screen.getByText('À propos')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('renders useful link labels (EN) pointing to /en/ routes', () => {
    const { container } = render(<NotFoundPage />, { wrapper: wrapper('en') });
    expect(container.querySelector('a[href="/en"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/en/services"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/en/about"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/en/faq"]')).toBeInTheDocument();
  });

  it('section has aria-label "Page introuvable" (FR)', () => {
    const { container } = render(<NotFoundPage />, { wrapper: wrapper('fr') });
    const section = container.querySelector('[data-not-found-page]');
    expect(section?.getAttribute('aria-label')).toBe('Page introuvable');
  });
});
