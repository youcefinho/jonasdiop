import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
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
vi.mock('@/hooks/useSmoothScroll', () => ({
  useSmoothScroll: () => vi.fn()
}));
vi.mock('@/hooks/useCountUp', () => ({
  useCountUp: (value: number) => value
}));

// vitest-axe 0.1.0 targets Vitest 2/3 types (namespace Vi); Vitest 4 moved to @vitest/expect.
// Pending vitest-axe Vitest-4-compatible types, we cast each assertion.

describe('a11y — Hero + TrustBand', () => {
  it('Hero has no axe violations (FR)', async () => {
    const { container } = render(
      <LanguageProvider locale="fr">
        <Hero />
      </LanguageProvider>
    );
    const results = await axe(container);
    // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
    (expect(results) as any).toHaveNoViolations();
  });

  it('Hero has no axe violations (EN)', async () => {
    const { container } = render(
      <LanguageProvider locale="en">
        <Hero />
      </LanguageProvider>
    );
    const results = await axe(container);
    // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
    (expect(results) as any).toHaveNoViolations();
  });

  it('TrustBand has no axe violations (FR)', async () => {
    const { container } = render(
      <LanguageProvider locale="fr">
        <TrustBand />
      </LanguageProvider>
    );
    const results = await axe(container);
    // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
    (expect(results) as any).toHaveNoViolations();
  });
});
