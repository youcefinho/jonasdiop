/**
 * Canonical Article shape — adapter-independent.
 *
 * Adapters (GHL, MDX, Sanity) MUST normalize their source data to this shape.
 * UI components consume Article only — never adapter-specific structures.
 *
 * Cross-Intralys pattern (cf. INTRALYS-CLIENT-AUTONOMY-PATTERN.md).
 */

export type ArticleSource = 'ghl' | 'mdx' | 'sanity';

export type ContentLocale = 'fr' | 'en';

export interface ArticleAuthor {
  readonly name: string;
  readonly title?: string;
  readonly imageUrl?: string;
}

export interface ArticleCategory {
  readonly id: string;
  readonly label: string;
}

export interface Article {
  readonly id: string;
  readonly slug: string;
  readonly locale: ContentLocale;
  readonly title: string;
  readonly excerpt: string;
  /** Markdown source (may be crude — ArticleRenderer enforces DA on render) */
  readonly bodyMarkdown: string;
  readonly publishedAt: string;
  /** ISO 8601 timestamp, or null if draft */
  readonly updatedAt: string | null;
  readonly author: ArticleAuthor;
  readonly category: ArticleCategory | null;
  readonly coverImage: {
    readonly url: string;
    readonly alt: string;
  } | null;
  /** Estimated reading time in minutes — adapter computes from word count if absent */
  readonly readingMinutes: number;
  /** Origin of this article — useful for debugging + analytics */
  readonly source: ArticleSource;
}

/** Subset used in listing pages (hub, related articles). */
export type ArticleListItem = Omit<Article, 'bodyMarkdown'>;

export interface ListArticlesOptions {
  readonly locale: ContentLocale;
  readonly limit?: number;
  readonly offset?: number;
  readonly categoryId?: string;
}

export interface ListArticlesResult {
  readonly items: ReadonlyArray<ArticleListItem>;
  readonly total: number;
  readonly hasMore: boolean;
}
