import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { toHaveNoViolations } from 'vitest-axe/matchers';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

expect.extend({ toHaveNoViolations });

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));
vi.mock('@/hooks/useSmoothScroll', () => ({
  useSmoothScroll: () => vi.fn()
}));
vi.mock('@/hooks/useCountUp', () => ({
  useCountUp: (value: number) => value
}));

describe('a11y — Hero + TrustBand', () => {
  it('Hero has no axe violations (FR)', async () => {
    const { container } = render(
      <LanguageProvider locale="fr">
        <Hero />
      </LanguageProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Hero has no axe violations (EN)', async () => {
    const { container } = render(
      <LanguageProvider locale="en">
        <Hero />
      </LanguageProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('TrustBand has no axe violations (FR)', async () => {
    const { container } = render(
      <LanguageProvider locale="fr">
        <TrustBand />
      </LanguageProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
