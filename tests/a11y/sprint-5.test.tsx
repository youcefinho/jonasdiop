import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import { ContactPage } from '@/components/sections/ContactPage';
import { EvenementsPage } from '@/components/sections/EvenementsPage';
import { FAQPage } from '@/components/sections/FAQPage';
import { LivrePage } from '@/components/sections/LivrePage';
import { PodcastPageLive, PodcastPageWaitlist } from '@/components/sections/PodcastPage';
import { RessourcesPage } from '@/components/sections/RessourcesPage';
import { TemoignagesPage } from '@/components/sections/TemoignagesPage';
import type { Article } from '@/lib/content/types';
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

// vitest-axe 0.1.0 targets Vitest 2/3 types (namespace Vi); Vitest 4 moved to @vitest/expect.
// Pending vitest-axe Vitest-4-compatible types, we cast each assertion.

describe('a11y — Sprint 5 secondary pages', () => {
  for (const locale of ['fr', 'en'] as const) {
    it(`ContactPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <ContactPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`FAQPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <FAQPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`TemoignagesPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <TemoignagesPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`LivrePage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <LivrePage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`EvenementsPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <EvenementsPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`PodcastPageLive (Scenario A) has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <PodcastPageLive />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`PodcastPageWaitlist (Scenario B) has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <PodcastPageWaitlist />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`RessourcesPage has 0 axe violations (${locale})`, async () => {
      const { container } = render(
        <LanguageProvider locale={locale}>
          <RessourcesPage />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });

    it(`ArticleRenderer has 0 axe violations (${locale})`, async () => {
      const sample: Article = {
        id: 'art-001',
        slug: 'pourquoi-cdt-fonctionne',
        locale,
        title: locale === 'fr' ? 'Pourquoi la CDT™ fonctionne.' : 'Why CDT™ works.',
        excerpt:
          locale === 'fr' ? 'Trois piliers, une seule méthode.' : 'Three pillars, one method.',
        bodyMarkdown:
          locale === 'fr'
            ? 'Architecture, leviers, exécution.\n\nVoici la méthode.'
            : 'Architecture, leverage, execution.\n\nHere is the method.',
        publishedAt: '2026-06-01T10:00:00.000Z',
        updatedAt: null,
        author: { name: 'Jonas Diop' },
        category: {
          id: 'architecture',
          label: locale === 'fr' ? 'Architecture' : 'Architecture'
        },
        coverImage: null,
        readingMinutes: 3,
        source: 'ghl'
      };
      const { container } = render(
        <LanguageProvider locale={locale}>
          <ArticleRenderer article={sample} />
        </LanguageProvider>
      );
      const results = await axe(container);
      // biome-ignore lint/suspicious/noExplicitAny: vitest-axe types incompatible with Vitest 4
      (expect(results) as any).toHaveNoViolations();
    });
  }
});
