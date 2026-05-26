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

describe('ArticleRenderer — markdown rendering (react-markdown + remark-gfm)', () => {
  it('renders ## h2 from markdown', () => {
    const { container } = render(
      <ArticleRenderer
        article={{ ...sampleArticle, bodyMarkdown: '## Section title\n\nBody paragraph.' }}
      />
    );
    const body = container.querySelector('[data-article-body]');
    expect(body?.querySelector('h2')?.textContent).toBe('Section title');
  });

  it('renders ### h3 from markdown', () => {
    const { container } = render(
      <ArticleRenderer article={{ ...sampleArticle, bodyMarkdown: '### Subhead\n\nBody.' }} />
    );
    const body = container.querySelector('[data-article-body]');
    expect(body?.querySelector('h3')?.textContent).toBe('Subhead');
  });

  it('renders unordered list with 3 items', () => {
    const { container } = render(
      <ArticleRenderer
        article={{ ...sampleArticle, bodyMarkdown: '- Architecture\n- Levier\n- Exécution' }}
      />
    );
    const ul = container.querySelector('[data-article-body] ul');
    expect(ul?.querySelectorAll('li').length).toBe(3);
  });

  it('renders ordered list with 3 items', () => {
    const { container } = render(
      <ArticleRenderer
        article={{ ...sampleArticle, bodyMarkdown: '1. Premier\n2. Deuxième\n3. Troisième' }}
      />
    );
    const ol = container.querySelector('[data-article-body] ol');
    expect(ol?.querySelectorAll('li').length).toBe(3);
  });

  it('renders blockquote', () => {
    const { container } = render(
      <ArticleRenderer
        article={{ ...sampleArticle, bodyMarkdown: '> Architecture détermine 80%.' }}
      />
    );
    const bq = container.querySelector('[data-article-body] blockquote');
    expect(bq?.textContent).toContain('Architecture');
  });

  it('renders **bold** as <strong>', () => {
    const { container } = render(
      <ArticleRenderer article={{ ...sampleArticle, bodyMarkdown: 'Some **bold** word.' }} />
    );
    const strong = container.querySelector('[data-article-body] strong');
    expect(strong?.textContent).toBe('bold');
  });

  it('renders *italic* as <em>', () => {
    const { container } = render(
      <ArticleRenderer article={{ ...sampleArticle, bodyMarkdown: 'Some *italic* word.' }} />
    );
    const em = container.querySelector('[data-article-body] em');
    expect(em?.textContent).toBe('italic');
  });

  it('renders inline `code` as <code>', () => {
    const { container } = render(
      <ArticleRenderer
        article={{ ...sampleArticle, bodyMarkdown: 'Use `getArticle()` to fetch.' }}
      />
    );
    const code = container.querySelector('[data-article-body] code');
    expect(code?.textContent).toBe('getArticle()');
  });

  it('renders external link with rel="noopener noreferrer"', () => {
    const { container } = render(
      <ArticleRenderer
        article={{
          ...sampleArticle,
          bodyMarkdown: 'See [example](https://example.com) for more.'
        }}
      />
    );
    const link = container.querySelector('[data-article-body] a');
    expect(link?.getAttribute('href')).toBe('https://example.com');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(link?.getAttribute('target')).toBe('_blank');
  });

  it('renders GFM table (remark-gfm)', () => {
    const { container } = render(
      <ArticleRenderer
        article={{
          ...sampleArticle,
          bodyMarkdown: '| Col1 | Col2 |\n|------|------|\n| A    | B    |'
        }}
      />
    );
    const table = container.querySelector('[data-article-body] table');
    expect(table?.querySelector('th')?.textContent).toBe('Col1');
    expect(table?.querySelectorAll('td').length).toBe(2);
  });

  it('renders GFM strikethrough (remark-gfm)', () => {
    const { container } = render(
      <ArticleRenderer
        article={{ ...sampleArticle, bodyMarkdown: 'Old way is ~~deprecated~~ now.' }}
      />
    );
    const del = container.querySelector('[data-article-body] del');
    expect(del?.textContent).toBe('deprecated');
  });
});

describe('ArticleRenderer — rehype-sanitize XSS hardening', () => {
  it('strips <script> tags entirely', () => {
    const { container } = render(
      <ArticleRenderer
        article={{
          ...sampleArticle,
          bodyMarkdown: 'Safe text.\n\n<script>alert(1)</script>\n\nMore text.'
        }}
      />
    );
    expect(container.querySelector('script')).toBeNull();
  });

  it('strips onclick handlers from links', () => {
    const { container } = render(
      <ArticleRenderer
        article={{
          ...sampleArticle,
          bodyMarkdown:
            '[Click](https://example.com "title")\n\n<a href="javascript:alert(1)" onclick="alert(1)">XSS</a>'
        }}
      />
    );
    const links = container.querySelectorAll('[data-article-body] a');
    for (const link of links) {
      expect(link.getAttribute('onclick')).toBeNull();
      // javascript: protocol should be filtered out by rehype-sanitize
      expect(link.getAttribute('href')?.startsWith('javascript:')).not.toBe(true);
    }
  });

  it('does NOT honor inline style attributes from authored markdown', () => {
    const { container } = render(
      <ArticleRenderer
        article={{
          ...sampleArticle,
          bodyMarkdown:
            '<p style="color: red; font-size: 96px;">Crude inline style</p>\n\nNormal paragraph.'
        }}
      />
    );
    // No element inside data-article-body carries an inline style attribute.
    // react-markdown ignores raw HTML by default ; rehype-sanitize strips style.
    const body = container.querySelector('[data-article-body]');
    const styled = body?.querySelectorAll('[style]');
    expect(styled?.length ?? 0).toBe(0);
  });

  it('strips <img> tags from body (cover image is owner-controlled, not user)', () => {
    const { container } = render(
      <ArticleRenderer
        article={{
          ...sampleArticle,
          bodyMarkdown:
            'Text.\n\n![alt](https://evil.example.com/track.png "tracker")\n\nMore text.'
        }}
      />
    );
    // No <img> inside data-article-body — only the (absent) cover image renders outside it.
    expect(container.querySelector('[data-article-body] img')).toBeNull();
  });
});
