import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MirrorChecklistSection } from '@/components/sections/bootcamps/MirrorChecklistSection';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale="fr">{children}</LanguageProvider>
);

const tenItems = Array.from({ length: 10 }, (_, i) => `Item miroir ${i + 1}`);

describe('MirrorChecklistSection — smoke', () => {
  it('renders without throwing', () => {
    expect(() =>
      render(
        <MirrorChecklistSection
          eyebrow="Le miroir"
          headline="Est-ce que c’est toi ?"
          items={tenItems}
          transitionPhrase="Phrase transition"
        />,
        { wrapper }
      )
    ).not.toThrow();
  });

  it('renders all items from props (10)', () => {
    const { container } = render(
      <MirrorChecklistSection
        eyebrow="Le miroir"
        headline="Est-ce que c’est toi ?"
        items={tenItems}
        transitionPhrase="Phrase transition"
      />,
      { wrapper }
    );
    const list = container.querySelector('[data-card-group="bootcamp-mirror"]');
    expect(list?.querySelectorAll('li').length).toBe(10);
  });

  it('renders headline as H2 (semantic)', () => {
    const { container } = render(
      <MirrorChecklistSection
        eyebrow="x"
        headline="Mirror headline"
        items={tenItems}
        transitionPhrase=""
      />,
      { wrapper }
    );
    const h2 = container.querySelector('h2');
    expect(h2?.textContent).toContain('Mirror headline');
  });

  it('section has aria-label = eyebrow', () => {
    const { container } = render(
      <MirrorChecklistSection
        eyebrow="Le miroir"
        headline="h"
        items={tenItems}
        transitionPhrase=""
      />,
      { wrapper }
    );
    expect(container.querySelector('section')?.getAttribute('aria-label')).toBe('Le miroir');
  });

  it('uses semantic <ul> + <li> for items', () => {
    const { container } = render(
      <MirrorChecklistSection eyebrow="x" headline="h" items={tenItems} transitionPhrase="" />,
      { wrapper }
    );
    expect(container.querySelector('ul[data-card-group="bootcamp-mirror"]')).toBeInTheDocument();
  });

  it('omits transition paragraph when empty', () => {
    const { container } = render(
      <MirrorChecklistSection eyebrow="x" headline="h" items={tenItems} transitionPhrase="" />,
      { wrapper }
    );
    // The italic paragraph below is conditional on transitionPhrase
    const italics = container.querySelectorAll('p.italic');
    expect(italics.length).toBe(0);
  });

  it('renders transition phrase when provided', () => {
    const { container } = render(
      <MirrorChecklistSection
        eyebrow="x"
        headline="h"
        items={tenItems}
        transitionPhrase="Si 4 cases résonnent…"
      />,
      { wrapper }
    );
    expect(container.textContent).toContain('Si 4 cases résonnent');
  });

  it('renders 0 items gracefully (empty list)', () => {
    const { container } = render(
      <MirrorChecklistSection eyebrow="x" headline="h" items={[]} transitionPhrase="" />,
      { wrapper }
    );
    const list = container.querySelector('[data-card-group="bootcamp-mirror"]');
    expect(list?.querySelectorAll('li').length).toBe(0);
  });
});
