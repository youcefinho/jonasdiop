import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MobileNavDrawer } from '@/components/layout/MobileNavDrawer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({
    to,
    children,
    className,
    onClick
  }: {
    to: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
  }) => (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  )
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('MobileNavDrawer', () => {
  it('renders trigger button with FR aria-label', () => {
    render(<MobileNavDrawer />, { wrapper: wrapper('fr') });
    expect(screen.getByLabelText(/Ouvrir le menu/i)).toBeInTheDocument();
  });

  it('drawer is closed initially (aria-expanded=false on trigger)', () => {
    render(<MobileNavDrawer />, { wrapper: wrapper('fr') });
    const trigger = screen.getByLabelText(/Ouvrir le menu/i);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('click on trigger opens drawer (aria-expanded=true)', () => {
    render(<MobileNavDrawer />, { wrapper: wrapper('fr') });
    const trigger = screen.getByLabelText(/Ouvrir le menu/i);
    fireEvent.click(trigger);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
  });

  it('clicking close button closes drawer', () => {
    render(<MobileNavDrawer />, { wrapper: wrapper('fr') });
    const trigger = screen.getByLabelText(/Ouvrir le menu/i);
    fireEvent.click(trigger);
    const closeBtn = screen.getByLabelText(/Fermer le menu/i);
    fireEvent.click(closeBtn);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('Escape key closes drawer when open', () => {
    render(<MobileNavDrawer />, { wrapper: wrapper('fr') });
    const trigger = screen.getByLabelText(/Ouvrir le menu/i);
    fireEvent.click(trigger);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('renders brief v3 sitemap onglets when open (FR)', () => {
    render(<MobileNavDrawer />, { wrapper: wrapper('fr') });
    fireEvent.click(screen.getByLabelText(/Ouvrir le menu/i));
    expect(screen.getByText('Programmes')).toBeInTheDocument();
    expect(screen.getByText('Conférences')).toBeInTheDocument();
    expect(screen.getByText('Livres')).toBeInTheDocument();
    expect(screen.getByText('Événements')).toBeInTheDocument();
    expect(screen.getByText('Ressources')).toBeInTheDocument();
    expect(screen.getByText('À propos')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders 3 intent group headings (FR)', () => {
    render(<MobileNavDrawer />, { wrapper: wrapper('fr') });
    fireEvent.click(screen.getByLabelText(/Ouvrir le menu/i));
    expect(screen.getByText('Travailler avec moi')).toBeInTheDocument();
    expect(screen.getByText(/Apprendre.*s'inspirer/i)).toBeInTheDocument();
    expect(screen.getByText('Découvrir')).toBeInTheDocument();
  });
});
