import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CookieBanner } from '@/components/consent/CookieBanner';
import { CookieSettingsModal } from '@/components/consent/CookieSettingsModal';
import { CookieConsentProvider } from '@/lib/consent/CookieConsentContext';
import { CONSENT_STORAGE_KEY } from '@/lib/consent/types';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, ...rest }: { to: string; children: ReactNode; [k: string]: unknown }) => (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}));

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

const renderWithProvider = (locale: 'fr' | 'en' = 'fr') =>
  render(
    <LanguageProvider locale={locale}>
      <CookieConsentProvider>
        <CookieBanner />
        <CookieSettingsModal />
      </CookieConsentProvider>
    </LanguageProvider>
  );

describe('CookieBanner — initial render', () => {
  it('renders banner when no consent stored (FR)', () => {
    const { container } = renderWithProvider('fr');
    expect(container.querySelector('[data-cookie-banner]')).toBeInTheDocument();
    expect(screen.getByText(/Cookies & Loi 25/)).toBeInTheDocument();
  });

  it('renders banner when no consent stored (EN)', () => {
    const { container } = renderWithProvider('en');
    expect(container.querySelector('[data-cookie-banner]')).toBeInTheDocument();
    expect(screen.getByText(/Cookies & Act 25/)).toBeInTheDocument();
  });

  it('does NOT render banner when valid consent stored', () => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: 1,
        categories: { necessary: true, analytics: true, marketing: false },
        decidedAt: new Date().toISOString()
      })
    );
    const { container } = renderWithProvider('fr');
    expect(container.querySelector('[data-cookie-banner]')).toBeNull();
  });

  it('renders 3 action buttons (Refuser / Personnaliser / Tout accepter)', () => {
    renderWithProvider('fr');
    expect(screen.getByText('Refuser')).toBeInTheDocument();
    expect(screen.getByText('Personnaliser')).toBeInTheDocument();
    expect(screen.getByText('Tout accepter')).toBeInTheDocument();
  });
});

describe('CookieBanner — actions', () => {
  it('Accept all stores ACCEPT_ALL and hides banner', () => {
    const { container } = renderWithProvider('fr');
    fireEvent.click(screen.getByText('Tout accepter'));
    expect(container.querySelector('[data-cookie-banner]')).toBeNull();
    const stored = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? '{}');
    expect(stored.categories.analytics).toBe(true);
    expect(stored.categories.marketing).toBe(true);
  });

  it('Refuse stores REJECT_ALL (necessary only) and hides banner', () => {
    const { container } = renderWithProvider('fr');
    fireEvent.click(screen.getByText('Refuser'));
    expect(container.querySelector('[data-cookie-banner]')).toBeNull();
    const stored = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? '{}');
    expect(stored.categories.necessary).toBe(true);
    expect(stored.categories.analytics).toBe(false);
    expect(stored.categories.marketing).toBe(false);
  });

  it('Customize opens settings modal and hides banner', () => {
    const { container } = renderWithProvider('fr');
    fireEvent.click(screen.getByText('Personnaliser'));
    expect(container.querySelector('[data-cookie-banner]')).toBeNull();
    expect(container.querySelector('[data-cookie-settings-modal]')).toBeInTheDocument();
  });
});

describe('CookieBanner — dialog accessibility', () => {
  it('uses role="dialog" with aria-labelledby + aria-describedby', () => {
    const { container } = renderWithProvider('fr');
    const dialog = container.querySelector('[data-cookie-banner]');
    expect(dialog?.getAttribute('role')).toBe('dialog');
    expect(dialog?.getAttribute('aria-labelledby')).toBe('cookie-banner-title');
    expect(dialog?.getAttribute('aria-describedby')).toBe('cookie-banner-body');
  });
});
