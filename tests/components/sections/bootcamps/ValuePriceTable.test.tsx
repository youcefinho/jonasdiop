import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ValuePriceTable } from '@/components/sections/bootcamps/ValuePriceTable';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale="fr">{children}</LanguageProvider>
);

const baseProps = {
  eyebrow: 'Récap valeur',
  headline: 'Valeur totale du bootcamp',
  valueRows: [
    { label: '3 jours immersifs', value: '3 997$' },
    { label: '9 livrables', value: '2 994$' },
    { label: '6 bonus', value: '2 000$' }
  ],
  valueTotal: '8 991$',
  priceLaunch: '997$ CAD',
  priceRegular: '1 497$ CAD',
  paymentOptions: ['Comptant', '3x sans frais'],
  ctaPrimaryLabel: 'Sois notifié de la cohorte',
  preLaunchNote: 'Inscriptions à venir — early-bird'
} as const;

describe('ValuePriceTable — smoke', () => {
  it('renders without throwing', () => {
    expect(() => render(<ValuePriceTable {...baseProps} />, { wrapper })).not.toThrow();
  });

  it('renders headline as H2', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(container.querySelector('h2')?.textContent).toContain('Valeur totale du bootcamp');
  });

  it('renders all value rows', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(container.textContent).toContain('3 jours immersifs');
    expect(container.textContent).toContain('3 997$');
    expect(container.textContent).toContain('9 livrables');
    expect(container.textContent).toContain('6 bonus');
  });

  it('renders launch price (gold) + regular price (line-through)', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(container.textContent).toContain('997$ CAD');
    expect(container.textContent).toContain('1 497$ CAD');
    expect(container.querySelector('.line-through')).toBeInTheDocument();
  });

  it('renders value total', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(container.textContent).toContain('8 991$');
  });

  it('renders payment options as list', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    const list = container.querySelector('ul');
    expect(list?.querySelectorAll('li').length).toBeGreaterThanOrEqual(2);
    expect(container.textContent).toContain('Comptant');
    expect(container.textContent).toContain('3x sans frais');
  });

  it('renders pre-launch note when provided', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(container.textContent).toContain('Inscriptions à venir');
  });
});

describe('ValuePriceTable — CTA interaction', () => {
  it('renders primary CTA with passed label', () => {
    render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(screen.getByRole('button', { name: /Sois notifié de la cohorte/i })).toBeInTheDocument();
  });

  it('calls onCtaPrimaryClick on click', () => {
    const onPrimary = vi.fn();
    render(<ValuePriceTable {...baseProps} onCtaPrimaryClick={onPrimary} />, { wrapper });
    fireEvent.click(screen.getByRole('button', { name: /Sois notifié/i }));
    expect(onPrimary).toHaveBeenCalledOnce();
  });

  it('renders secondary CTA only when label provided', () => {
    const onSecondary = vi.fn();
    render(
      <ValuePriceTable
        {...baseProps}
        ctaSecondaryLabel="Poser une question"
        onCtaSecondaryClick={onSecondary}
      />,
      { wrapper }
    );
    const btn = screen.getByRole('button', { name: /Poser une question/i });
    fireEvent.click(btn);
    expect(onSecondary).toHaveBeenCalledOnce();
  });

  it('omits secondary CTA when label not provided', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    const buttons = container.querySelectorAll('button');
    // Only 1 button (primary) when no secondary label
    expect(buttons.length).toBe(1);
  });
});

describe('ValuePriceTable — a11y', () => {
  it('section aria-label falls back to headline', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(container.querySelector('section')?.getAttribute('aria-label')).toBe(
      'Valeur totale du bootcamp'
    );
  });

  it('primary CTA has aria-label = ctaPrimaryLabel', () => {
    render(<ValuePriceTable {...baseProps} />, { wrapper });
    const btn = screen.getByRole('button');
    expect(btn.getAttribute('aria-label')).toBe('Sois notifié de la cohorte');
  });

  it('uses semantic <dl> for value composition', () => {
    const { container } = render(<ValuePriceTable {...baseProps} />, { wrapper });
    expect(container.querySelector('dl')).toBeInTheDocument();
  });
});
