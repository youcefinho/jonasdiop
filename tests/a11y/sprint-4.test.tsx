import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { LPConsultationsTemplate } from '@/components/sections/LPConsultationsTemplate';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { consultationsPriveesCopy } from '@/data/copy/services-consultations-privees';
import { gamechangerScalingCopy } from '@/data/copy/services-gamechanger-scaling';
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

describe('a11y — Sprint 4 LP templates', () => {
  for (const locale of ['fr', 'en'] as const) {
    it(`LPProgramTemplate (Gamechanger) has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <LPProgramTemplate copy={gamechangerScalingCopy} />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`LPConsultationsTemplate has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <LPConsultationsTemplate copy={consultationsPriveesCopy} />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });
  }
});
