import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { BootcampsAlternativeNudge } from '@/components/sections/BootcampsAlternativeNudge';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, ...rest }: { to: string; children: ReactNode; [k: string]: unknown }) => (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}));

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

// Anti-cannibalisation brief v3 §5 — micro-section discrète sur Home.
// Restrictions visuelles : pas de CTAPill, H2 dégradé en H3 visual, eyebrow
// silver/60 (pas gold), CTA = ghost text-link gold, padding réduit.

describe('BootcampsAlternativeNudge — smoke + a11y', () => {
  it('renders without throwing (FR)', () => {
    expect(() => render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') })).not.toThrow();
  });

  it('renders FR copy verbatim (title + body)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    expect(container.textContent).toContain('Format court');
    expect(container.textContent).toContain('bootcamp tactique');
    expect(container.textContent).toContain('RISE');
    expect(container.textContent).toContain('997');
  });

  it('renders EN copy verbatim when locale=en', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('en') });
    expect(container.textContent).toContain('Short format');
    expect(container.textContent).toContain('tactical bootcamp');
    expect(container.textContent).toContain('RISE');
    expect(container.textContent).toContain('997');
  });

  it('renders H2 with H3 visual class (dégradé per anti-cannibalisation)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    const h2 = container.querySelector('h2');
    expect(h2).toBeInTheDocument();
    expect(h2?.className).toMatch(/text-h3/);
  });

  it('section has aria-label = eyebrow text', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    const section = container.querySelector('section');
    expect(section?.getAttribute('aria-label')).toContain('Format court');
  });
});

describe('BootcampsAlternativeNudge — anti-cannibalisation visual constraints (brief v3 §5)', () => {
  it('CTA is a ghost text-link (NOT a CTAPill button)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    // CTAPill renders as a button or styled anchor — here the CTA must be a plain <a> with gold text
    const cta = container.querySelector('a');
    expect(cta).toBeInTheDocument();
    expect(cta?.className).toMatch(/text-gold/);
    // Must NOT have CTAPill signature classes (gold-primary / silver-secondary background pill)
    expect(cta?.className).not.toMatch(/linear-gradient|gold-primary|silver-secondary/);
  });

  it('does NOT contain a <button> element (CTAPill renders <button>)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    expect(container.querySelector('button')).toBeNull();
  });

  it('CTA links to /evenements/bootcamps (FR hub)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    const cta = container.querySelector('a');
    expect(cta?.getAttribute('href')).toBe('/evenements/bootcamps');
  });

  it('CTA links to /en/events/bootcamps (EN hub)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('en') });
    const cta = container.querySelector('a');
    expect(cta?.getAttribute('href')).toBe('/en/events/bootcamps');
  });

  it('section uses py-xl (reduced padding, not py-2xl like full sections)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    const section = container.querySelector('section');
    expect(section?.className).toMatch(/py-xl/);
    expect(section?.className).not.toMatch(/py-2xl/);
  });

  it('does NOT use MaskRevealHeading or FiligraneNumber (signature blocks)', () => {
    const { container } = render(<BootcampsAlternativeNudge />, { wrapper: wrapper('fr') });
    // FiligraneNumber renders a large numerical decorative span
    expect(container.querySelector('[data-filigrane-number]')).toBeNull();
    // No StaggerReveal wrapper class either
    expect(container.querySelector('[data-stagger-reveal]')).toBeNull();
  });
});
