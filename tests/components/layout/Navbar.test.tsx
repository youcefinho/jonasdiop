import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Navbar } from '@/components/layout/Navbar';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({
    to,
    children,
    className,
    role,
    tabIndex,
    onClick,
    'aria-label': ariaLabel
  }: {
    to: string;
    children: ReactNode;
    className?: string;
    role?: string;
    tabIndex?: number;
    onClick?: () => void;
    'aria-label'?: string;
  }) => (
    <a
      href={to}
      className={className}
      role={role}
      tabIndex={tabIndex}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('Navbar', () => {
  it('renders logo wordmark', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/JONAS DIOP/i)).toBeInTheDocument();
  });

  it('renders brief v3 sitemap onglets (FR)', () => {
    // Both desktop nav AND mobile drawer aside render same labels (drawer hidden via translate),
    // so getAllByText returns multiple — verify >= 1 for each.
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/À propos/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Programmes/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Événements/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Livres/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Conférences/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Ressources/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders "Réserver mon appel" CTA', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    expect(screen.getAllByText(/Réserver mon appel/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders EN nav labels when locale en', () => {
    render(<Navbar />, { wrapper: wrapper('en') });
    expect(screen.getAllByText(/About/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Programs/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Events/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Books/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Speaking/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Resources/i).length).toBeGreaterThanOrEqual(1);
  });

  it('has aria-label "Navigation principale" (FR)', () => {
    const { container } = render(<Navbar />, { wrapper: wrapper('fr') });
    const nav = container.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Navigation principale');
  });

  it('Événements dropdown exposes 4 Bootcamps Trilogie sub-items (FR)', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    // Open the Événements dropdown — click the trigger button (label "Événements")
    // Two buttons match "Événements" — desktop NavbarDropdown (aria-haspopup=menu)
    // and mobile drawer accordion. Scope to the desktop dropdown trigger.
    const trigger = screen
      .getAllByRole('button', { name: /Événements/i })
      .find((b) => b.getAttribute('aria-haspopup') === 'menu');
    if (!trigger) throw new Error('Desktop Événements dropdown trigger not found');
    fireEvent.click(trigger);

    // 4 Bootcamps Trilogie sub-items
    expect(screen.getByRole('menuitem', { name: /Vue d'ensemble.*Trilogie/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /An Army of One/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /The Edge/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /The Activation/i })).toBeInTheDocument();

    // Retraites + Masterclass kept as anchors
    expect(screen.getByRole('menuitem', { name: /Retraites/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Masterclass/i })).toBeInTheDocument();
  });

  it('Bootcamps sub-items point to real Trilogie routes (not anchors)', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    // Two buttons match "Événements" — desktop NavbarDropdown (aria-haspopup=menu)
    // and mobile drawer accordion. Scope to the desktop dropdown trigger.
    const trigger = screen
      .getAllByRole('button', { name: /Événements/i })
      .find((b) => b.getAttribute('aria-haspopup') === 'menu');
    if (!trigger) throw new Error('Desktop Événements dropdown trigger not found');
    fireEvent.click(trigger);

    expect(
      screen.getByRole('menuitem', { name: /Vue d'ensemble.*Trilogie/i }).getAttribute('href')
    ).toBe('/evenements/bootcamps');
    expect(screen.getByRole('menuitem', { name: /An Army of One/i }).getAttribute('href')).toBe(
      '/evenements/bootcamps/an-army-of-one'
    );
    expect(screen.getByRole('menuitem', { name: /The Edge/i }).getAttribute('href')).toBe(
      '/evenements/bootcamps/the-edge'
    );
    expect(screen.getByRole('menuitem', { name: /The Activation/i }).getAttribute('href')).toBe(
      '/evenements/bootcamps/the-activation'
    );
  });

  it('legacy single-Bootcamps anchor (#bootcamps) is removed', () => {
    render(<Navbar />, { wrapper: wrapper('fr') });
    // Two buttons match "Événements" — desktop NavbarDropdown (aria-haspopup=menu)
    // and mobile drawer accordion. Scope to the desktop dropdown trigger.
    const trigger = screen
      .getAllByRole('button', { name: /Événements/i })
      .find((b) => b.getAttribute('aria-haspopup') === 'menu');
    if (!trigger) throw new Error('Desktop Événements dropdown trigger not found');
    fireEvent.click(trigger);

    // No menuitem should still link to the stale #bootcamps anchor
    const menuItems = screen.getAllByRole('menuitem');
    for (const item of menuItems) {
      expect(item.getAttribute('href')).not.toBe('/evenements#bootcamps');
    }
  });

  it('EN locale exposes Bootcamps sub-routes under /en/events/bootcamps', () => {
    render(<Navbar />, { wrapper: wrapper('en') });
    const trigger = screen
      .getAllByRole('button', { name: /Events/i })
      .find((b) => b.getAttribute('aria-haspopup') === 'menu');
    if (!trigger) throw new Error('Desktop Events dropdown trigger not found');
    fireEvent.click(trigger);

    expect(screen.getByRole('menuitem', { name: /Overview.*Trilogy/i }).getAttribute('href')).toBe(
      '/en/events/bootcamps'
    );
    expect(screen.getByRole('menuitem', { name: /An Army of One/i }).getAttribute('href')).toBe(
      '/en/events/bootcamps/an-army-of-one'
    );
  });
});
