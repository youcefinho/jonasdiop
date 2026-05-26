import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { LegalPage } from '@/components/sections/LegalPage';
import { conditionsUtilisationCopy } from '@/data/copy/conditions-utilisation';
import { mentionsLegalesCopy } from '@/data/copy/mentions-legales';
import { politiqueConfidentialiteCopy } from '@/data/copy/politique-confidentialite';
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

const wrapper =
  (locale: 'fr' | 'en') =>
  ({ children }: { children: ReactNode }) => (
    <LanguageProvider locale={locale}>{children}</LanguageProvider>
  );

describe('LegalPage — mentions-legales', () => {
  it('renders H1 (FR)', () => {
    render(<LegalPage copy={mentionsLegalesCopy} />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Mentions légales');
  });

  it('renders H1 (EN)', () => {
    render(<LegalPage copy={mentionsLegalesCopy} />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Legal notice');
  });

  it('renders 8 section h2 (mentions-legales has 8 sections)', () => {
    const { container } = render(<LegalPage copy={mentionsLegalesCopy} />, {
      wrapper: wrapper('fr')
    });
    const h2s = container.querySelectorAll('section[id] h2');
    expect(h2s.length).toBe(mentionsLegalesCopy.sections.length);
  });

  it('renders TOC ordered list with one anchor per section', () => {
    const { container } = render(<LegalPage copy={mentionsLegalesCopy} />, {
      wrapper: wrapper('fr')
    });
    const toc = container.querySelector('ol[data-legal-toc]');
    expect(toc?.querySelectorAll('a').length).toBe(mentionsLegalesCopy.sections.length);
  });

  it('TOC anchors point to section ids', () => {
    const { container } = render(<LegalPage copy={mentionsLegalesCopy} />, {
      wrapper: wrapper('fr')
    });
    expect(container.querySelector('a[href="#editeur"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="#hebergeur"]')).toBeInTheDocument();
  });

  it('renders **bold** copy as <strong>', () => {
    const { container } = render(<LegalPage copy={mentionsLegalesCopy} />, {
      wrapper: wrapper('fr')
    });
    const strongs = container.querySelectorAll('[data-legal-body] strong');
    expect(strongs.length).toBeGreaterThan(0);
  });

  it('renders lastUpdate footer when present', () => {
    render(<LegalPage copy={mentionsLegalesCopy} />, { wrapper: wrapper('fr') });
    expect(screen.getByText(/Mise à jour\s*:/i)).toBeInTheDocument();
  });
});

describe('LegalPage — politique-confidentialite', () => {
  it('renders H1 (FR)', () => {
    render(<LegalPage copy={politiqueConfidentialiteCopy} />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Politique de confidentialité');
  });

  it('renders H1 (EN)', () => {
    render(<LegalPage copy={politiqueConfidentialiteCopy} />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Privacy policy');
  });

  it('renders all sections as h2', () => {
    const { container } = render(<LegalPage copy={politiqueConfidentialiteCopy} />, {
      wrapper: wrapper('fr')
    });
    const h2s = container.querySelectorAll('section[id] h2');
    expect(h2s.length).toBe(politiqueConfidentialiteCopy.sections.length);
  });
});

describe('LegalPage — conditions-utilisation', () => {
  it('renders H1 (FR)', () => {
    render(<LegalPage copy={conditionsUtilisationCopy} />, { wrapper: wrapper('fr') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain("Conditions générales d'utilisation");
  });

  it('renders H1 (EN)', () => {
    render(<LegalPage copy={conditionsUtilisationCopy} />, { wrapper: wrapper('en') });
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('General terms of use');
  });

  it('renders all sections as h2', () => {
    const { container } = render(<LegalPage copy={conditionsUtilisationCopy} />, {
      wrapper: wrapper('fr')
    });
    const h2s = container.querySelectorAll('section[id] h2');
    expect(h2s.length).toBe(conditionsUtilisationCopy.sections.length);
  });
});

describe('LegalPage — XSS safety', () => {
  it('escapes HTML in body before bold substitution', () => {
    const malicious = {
      hero: {
        eyebrow: { fr: 'Test', en: 'Test' },
        h1: { fr: 'Test', en: 'Test' },
        sub: { fr: 'Test', en: 'Test' }
      },
      sections: [
        {
          id: 'xss-test',
          title: { fr: 'XSS', en: 'XSS' },
          body: {
            fr: '<script>alert(1)</script> Plain text **bold**',
            en: '<script>alert(1)</script> Plain text **bold**'
          }
        }
      ]
    } as const;
    const { container } = render(<LegalPage copy={malicious} />, { wrapper: wrapper('fr') });
    // Raw <script> tag must NOT be parsed as DOM
    expect(container.querySelector('script')).toBeNull();
    // The escaped text should be visible
    expect(container.textContent).toContain('<script>alert(1)</script>');
    // <strong> from **bold** still renders
    expect(container.querySelector('strong')?.textContent).toBe('bold');
  });
});
