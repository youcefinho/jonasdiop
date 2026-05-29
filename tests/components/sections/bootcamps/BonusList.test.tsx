import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { BonusList } from '@/components/sections/bootcamps/BonusList';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale="fr">{children}</LanguageProvider>
);

const sixBonuses = Array.from({ length: 6 }, (_, i) => ({
  name: `Bonus ${i + 1}`,
  description: `Description bonus ${i + 1}`,
  value: `${(i + 1) * 100}$`
}));

describe('BonusList — smoke', () => {
  it('renders without throwing', () => {
    expect(() =>
      render(<BonusList headline="Bonus inclus" items={sixBonuses} />, { wrapper })
    ).not.toThrow();
  });

  it('renders 6 bonus cards', () => {
    const { container } = render(<BonusList headline="h" items={sixBonuses} />, { wrapper });
    const list = container.querySelector('[data-card-group="bootcamp-bonus"]');
    expect(list?.querySelectorAll('li').length).toBe(6);
  });

  it('renders each bonus name, description and value', () => {
    const { container } = render(<BonusList headline="h" items={sixBonuses} />, { wrapper });
    expect(container.textContent).toContain('Bonus 1');
    expect(container.textContent).toContain('Description bonus 1');
    expect(container.textContent).toContain('100$');
    expect(container.textContent).toContain('Bonus 6');
    expect(container.textContent).toContain('600$');
  });

  it('renders headline as H2', () => {
    const { container } = render(<BonusList headline="Bonus inclus" items={sixBonuses} />, {
      wrapper
    });
    expect(container.querySelector('h2')?.textContent).toContain('Bonus inclus');
  });

  it('each bonus uses H3 for name (a11y heading hierarchy)', () => {
    const { container } = render(<BonusList headline="h" items={sixBonuses} />, { wrapper });
    expect(container.querySelectorAll('h3').length).toBe(6);
  });
});

describe('BonusList — a11y', () => {
  it('value pill has descriptive aria-label combining label + value', () => {
    const { container } = render(
      <BonusList
        headline="h"
        items={[{ name: 'N', description: 'D', value: '997$' }]}
        valueLabel="Valeur"
      />,
      { wrapper }
    );
    const pill = container.querySelector('[role="note"]');
    expect(pill?.getAttribute('aria-label')).toBe('Valeur — 997$');
  });

  it('uses custom valueLabel when provided', () => {
    const { container } = render(
      <BonusList
        headline="h"
        items={[{ name: 'N', description: 'D', value: '500$' }]}
        valueLabel="Value (EN)"
      />,
      { wrapper }
    );
    expect(container.textContent).toContain('Value (EN)');
  });

  it('default valueLabel is "Valeur" (FR)', () => {
    const { container } = render(
      <BonusList headline="h" items={[{ name: 'N', description: 'D', value: '500$' }]} />,
      { wrapper }
    );
    expect(container.textContent).toContain('Valeur');
  });

  it('section aria-label = headline', () => {
    const { container } = render(<BonusList headline="Bonus inclus" items={sixBonuses} />, {
      wrapper
    });
    expect(container.querySelector('section')?.getAttribute('aria-label')).toBe('Bonus inclus');
  });
});
