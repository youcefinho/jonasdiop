import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
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
vi.mock('@/hooks/useCountUp', () => ({ useCountUp: (value: number) => value }));
vi.mock('@/hooks/useSmoothScroll', () => ({ useSmoothScroll: () => vi.fn() }));

// vitest-axe 0.1.0 targets Vitest 2/3 types (namespace Vi); Vitest 4 moved to @vitest/expect.
// Pending vitest-axe Vitest-4-compatible types, we cast each assertion.

describe('a11y — Sprint 2 sections', () => {
  for (const locale of ['fr', 'en'] as const) {
    it(`Navbar has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <Navbar />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`ProgramsGrid has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <ProgramsGrid />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`TestimonialGrid has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <TestimonialGrid />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`FinalCTASection has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <FinalCTASection />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`FooterRich has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <FooterRich />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });
  }
});
