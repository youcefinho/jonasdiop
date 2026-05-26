import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import type { Article } from '@/lib/content/types';

const sampleArticle: Article = {
  id: 'art-001',
  slug: 'pourquoi-cdt-fonctionne',
  locale: 'fr',
  title: 'Pourquoi la CDT™ fonctionne quand les frameworks classiques échouent.',
  excerpt: 'Trois piliers, une seule méthode. Voici ce qui fait la différence.',
  bodyMarkdown:
    "La plupart des entrepreneurs essaient de scaler sans toucher à leur architecture. Résultat : plus de chiffre d'affaires, mais aussi plus de chaos.\n\nLa CDT™ part d'un constat simple : votre architecture détermine 80% de votre trajectoire. Le reste, c'est de l'exécution.\n\nVoici comment on s'y prend.",
  publishedAt: '2026-06-01T10:00:00.000Z',
  updatedAt: null,
  author: { name: 'Jonas Diop', title: "Architecte d'affaires" },
  category: { id: 'architecture', label: 'Architecture' },
  coverImage: null,
  readingMinutes: 4,
  source: 'ghl'
};

describe('ArticleRenderer — blindé render forcing DA', () => {
  it('renders article title as H1', () => {
    render(<ArticleRenderer article={sampleArticle} />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('CDT');
  });

  it('renders category label', () => {
    render(<ArticleRenderer article={sampleArticle} />);
    expect(screen.getByText('Architecture')).toBeInTheDocument();
  });

  it('renders excerpt', () => {
    render(<ArticleRenderer article={sampleArticle} />);
    expect(screen.getByText(/Trois piliers/)).toBeInTheDocument();
  });

  it('renders author name', () => {
    render(<ArticleRenderer article={sampleArticle} />);
    expect(screen.getByText('Jonas Diop')).toBeInTheDocument();
  });

  it('renders reading time (FR locale)', () => {
    render(<ArticleRenderer article={sampleArticle} />);
    expect(screen.getByText(/4 min de lecture/)).toBeInTheDocument();
  });

  it('renders reading time (EN locale)', () => {
    render(<ArticleRenderer article={{ ...sampleArticle, locale: 'en' }} />);
    expect(screen.getByText(/4 min read/)).toBeInTheDocument();
  });

  it('renders bodyMarkdown split into 3 paragraphs', () => {
    const { container } = render(<ArticleRenderer article={sampleArticle} />);
    const body = container.querySelector('[data-article-body]');
    expect(body?.querySelectorAll('p').length).toBe(3);
  });

  it('renders <time> element with ISO datetime attr', () => {
    const { container } = render(<ArticleRenderer article={sampleArticle} />);
    const time = container.querySelector('time');
    expect(time?.getAttribute('datetime')).toBe('2026-06-01T10:00:00.000Z');
  });

  it('renders cover image when present', () => {
    const { container } = render(
      <ArticleRenderer
        article={{
          ...sampleArticle,
          coverImage: { url: 'https://example.com/cover.webp', alt: 'Cover' }
        }}
      />
    );
    const img = container.querySelector('img[alt="Cover"]');
    expect(img).toBeInTheDocument();
  });
});
