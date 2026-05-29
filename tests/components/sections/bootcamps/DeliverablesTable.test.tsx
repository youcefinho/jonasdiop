import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { DeliverablesTable } from '@/components/sections/bootcamps/DeliverablesTable';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@/hooks/useMaskReveal', () => ({
  useMaskReveal: () => ({ style: { transform: 'translateY(0%)', transition: '', willChange: '' } })
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider locale="fr">{children}</LanguageProvider>
);

const buildItems = (n: number) =>
  Array.from({ length: n }, (_, i) => ({
    n: i + 1,
    name: `Livrable ${i + 1}`,
    description: `Description du livrable ${i + 1}`
  }));

describe('DeliverablesTable — smoke', () => {
  it('renders without throwing', () => {
    expect(() =>
      render(
        <DeliverablesTable
          eyebrow="Livrables"
          headline="Ce que tu obtiens"
          subtitle="Concrètement"
          items={buildItems(9)}
        />,
        { wrapper }
      )
    ).not.toThrow();
  });

  it('renders 9 rows for AAOO bootcamp', () => {
    const { container } = render(
      <DeliverablesTable eyebrow="x" headline="Headline" subtitle="" items={buildItems(9)} />,
      { wrapper }
    );
    expect(container.querySelectorAll('tbody > tr').length).toBe(9);
  });

  it('renders 10 rows for Edge bootcamp', () => {
    const { container } = render(
      <DeliverablesTable eyebrow="x" headline="Headline" subtitle="" items={buildItems(10)} />,
      { wrapper }
    );
    expect(container.querySelectorAll('tbody > tr').length).toBe(10);
  });

  it('renders 12 rows for Activation bootcamp', () => {
    const { container } = render(
      <DeliverablesTable eyebrow="x" headline="Headline" subtitle="" items={buildItems(12)} />,
      { wrapper }
    );
    expect(container.querySelectorAll('tbody > tr').length).toBe(12);
  });
});

describe('DeliverablesTable — a11y', () => {
  it('uses semantic <table> with caption (sr-only) + thead scope=col', () => {
    const { container } = render(
      <DeliverablesTable eyebrow="x" headline="Mon caption" subtitle="" items={buildItems(3)} />,
      { wrapper }
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.querySelector('caption')?.textContent).toBe('Mon caption');
    const ths = table?.querySelectorAll('thead th[scope="col"]');
    expect(ths?.length).toBe(3);
  });

  it('renders custom column labels (FR)', () => {
    const { container } = render(
      <DeliverablesTable
        eyebrow="x"
        headline="h"
        subtitle=""
        items={buildItems(1)}
        columnNumberLabel="N°"
        columnNameLabel="Nom du livrable"
        columnDescriptionLabel="Détail"
      />,
      { wrapper }
    );
    expect(container.textContent).toContain('Nom du livrable');
    expect(container.textContent).toContain('Détail');
  });

  it('renders deliverable numbers padded (01, 02, …)', () => {
    const { container } = render(
      <DeliverablesTable eyebrow="x" headline="h" subtitle="" items={buildItems(2)} />,
      { wrapper }
    );
    expect(container.textContent).toMatch(/01/);
    expect(container.textContent).toMatch(/02/);
  });

  it('section aria-label = eyebrow', () => {
    const { container } = render(
      <DeliverablesTable eyebrow="Eyebrow text" headline="h" subtitle="" items={buildItems(1)} />,
      { wrapper }
    );
    expect(container.querySelector('section')?.getAttribute('aria-label')).toBe('Eyebrow text');
  });
});
