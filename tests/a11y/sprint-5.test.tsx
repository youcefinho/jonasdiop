import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { ContactPage } from '@/components/sections/ContactPage';
import { EvenementsPage } from '@/components/sections/EvenementsPage';
import { FAQPage } from '@/components/sections/FAQPage';
import { LivrePage } from '@/components/sections/LivrePage';
import { TemoignagesPage } from '@/components/sections/TemoignagesPage';
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

// vitest-axe 0.1.0 targets Vitest 2/3 types (namespace Vi); Vitest 4 moved to @vitest/expect.
// Pending vitest-axe Vitest-4-compatible types, we cast each assertion.

describe('a11y — Sprint 5 secondary pages', () => {
  for (const locale of ['fr', 'en'] as const) {
    it(`ContactPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <ContactPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`FAQPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <FAQPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`TemoignagesPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <TemoignagesPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`LivrePage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <LivrePage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`EvenementsPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <EvenementsPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });
  }
});
