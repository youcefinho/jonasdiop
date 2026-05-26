import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { CookieBanner } from '@/components/consent/CookieBanner';
import { CookieSettingsModal } from '@/components/consent/CookieSettingsModal';
import { LegalPage } from '@/components/sections/LegalPage';
import { conditionsUtilisationCopy } from '@/data/copy/conditions-utilisation';
import { mentionsLegalesCopy } from '@/data/copy/mentions-legales';
import { politiqueConfidentialiteCopy } from '@/data/copy/politique-confidentialite';
import { CookieConsentProvider } from '@/lib/consent/CookieConsentContext';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', async () => {
  const actual =
    await vi.importActual<typeof import('@tanstack/react-router')>('@tanstack/react-router');
  return {
    ...actual,
    Link: ({
      to,
      children,
      ...rest
    }: {
      to: string;
      children: ReactNode;
      [k: string]: unknown;
    }) => (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  };
});

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

// vitest-axe 0.1.0 targets Vitest 2/3 types ; Vitest 4 moved to @vitest/expect.
// Cast each assertion until vitest-axe ships Vitest-4-compatible types.

describe('a11y — Sprint 6 legal pages', () => {
  for (const locale of ['fr', 'en'] as const) {
    it(`LegalPage / mentions-legales has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <LegalPage copy={mentionsLegalesCopy} />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`LegalPage / politique-confidentialite has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <LegalPage copy={politiqueConfidentialiteCopy} />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`LegalPage / conditions-utilisation has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <LegalPage copy={conditionsUtilisationCopy} />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });
  }
});

describe('a11y — Sprint 6 cookie consent', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });

  for (const locale of ['fr', 'en'] as const) {
    it(`CookieBanner has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <CookieConsentProvider>
            <CookieBanner />
          </CookieConsentProvider>
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`CookieSettingsModal (open) has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <CookieConsentProvider>
            <CookieBanner />
            <CookieSettingsModal />
          </CookieConsentProvider>
        </LanguageProvider>
      );
      const customizeLabel = locale === 'fr' ? 'Personnaliser' : 'Customize';
      fireEvent.click(screen.getByText(customizeLabel));
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });
  }
});
