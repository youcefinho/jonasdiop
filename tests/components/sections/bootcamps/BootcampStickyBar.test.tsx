import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { BootcampStickyBar } from '@/components/sections/bootcamps/BootcampStickyBar';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('BootcampStickyBar — smoke', () => {
  it('renders without throwing', () => {
    expect(() =>
      render(
        <BootcampStickyBar
          places={20}
          status="Inscriptions à venir"
          priceLaunch="997$ CAD"
          priceRegular="1 497$ CAD"
          ctaLabel="Sois notifié"
        />,
        { wrapper: wrapper('fr') }
      )
    ).not.toThrow();
  });

  it('renders places, status and prices visible', () => {
    const { container } = render(
      <BootcampStickyBar
        places={20}
        status="Inscriptions à venir"
        priceLaunch="997$ CAD"
        priceRegular="1 497$ CAD"
        ctaLabel="Sois notifié"
      />,
      { wrapper: wrapper('fr') }
    );
    expect(container.textContent).toContain('20');
    expect(container.textContent).toContain('Inscriptions à venir');
    expect(container.textContent).toContain('997$ CAD');
    expect(container.textContent).toContain('1 497$ CAD');
  });

  it('renders CTA button with passed label', () => {
    render(
      <BootcampStickyBar
        places={15}
        status="Cohorte en cours"
        priceLaunch="1 497$"
        ctaLabel="Réserver ma place"
      />,
      { wrapper: wrapper('fr') }
    );
    expect(screen.getByRole('button', { name: /Réserver ma place/i })).toBeInTheDocument();
  });
});

describe('BootcampStickyBar — a11y', () => {
  it('uses semantic <aside> with aria-label (FR default)', () => {
    const { container } = render(
      <BootcampStickyBar places={20} status="x" priceLaunch="997$" ctaLabel="Go" />,
      { wrapper: wrapper('fr') }
    );
    const aside = container.querySelector('aside');
    expect(aside).toBeInTheDocument();
    expect(aside?.getAttribute('aria-label')).toMatch(/Bootcamp/i);
  });

  it('uses aria-label EN when locale en', () => {
    const { container } = render(
      <BootcampStickyBar places={20} status="x" priceLaunch="997$" ctaLabel="Go" />,
      { wrapper: wrapper('en') }
    );
    const aside = container.querySelector('aside');
    expect(aside?.getAttribute('aria-label')).toMatch(/Bootcamp|status|spots/i);
  });

  it('respects ariaLabel prop override (a11y customization)', () => {
    const { container } = render(
      <BootcampStickyBar
        places={20}
        status="x"
        priceLaunch="997$"
        ctaLabel="Go"
        ariaLabel="Custom override"
      />,
      { wrapper: wrapper('fr') }
    );
    expect(container.querySelector('aside')?.getAttribute('aria-label')).toBe('Custom override');
  });

  it('CTA button has aria-label fallback to ctaLabel', () => {
    render(
      <BootcampStickyBar places={20} status="x" priceLaunch="997$" ctaLabel="Sois notifié" />,
      { wrapper: wrapper('fr') }
    );
    const btn = screen.getByRole('button');
    expect(btn.getAttribute('aria-label')).toBe('Sois notifié');
  });

  it('CTA button uses ctaAriaLabel override when provided', () => {
    render(
      <BootcampStickyBar
        places={20}
        status="x"
        priceLaunch="997$"
        ctaLabel="Go"
        ctaAriaLabel="Explicit a11y label"
      />,
      { wrapper: wrapper('fr') }
    );
    expect(screen.getByRole('button').getAttribute('aria-label')).toBe('Explicit a11y label');
  });

  it('places number has sr-only label for screen readers', () => {
    const { container } = render(
      <BootcampStickyBar
        places={20}
        status="x"
        priceLaunch="997$"
        ctaLabel="Go"
        placesLabel="Places restantes"
      />,
      { wrapper: wrapper('fr') }
    );
    const srOnly = container.querySelector('.sr-only');
    expect(srOnly?.textContent).toBe('Places restantes');
  });
});

describe('BootcampStickyBar — interaction', () => {
  it('calls onCtaClick when CTA is clicked', () => {
    const onCta = vi.fn();
    render(
      <BootcampStickyBar
        places={20}
        status="x"
        priceLaunch="997$"
        ctaLabel="Sois notifié"
        onCtaClick={onCta}
      />,
      { wrapper: wrapper('fr') }
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onCta).toHaveBeenCalledOnce();
  });

  it('skips priceRegular when prop is omitted', () => {
    const { container } = render(
      <BootcampStickyBar places={20} status="x" priceLaunch="997$" ctaLabel="Go" />,
      { wrapper: wrapper('fr') }
    );
    expect(container.querySelector('.line-through')).toBeNull();
  });
});
