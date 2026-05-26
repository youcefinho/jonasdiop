import type { Article } from '@/lib/content/types';

interface ArticleRendererProps {
  article: Article;
}

/**
 * ArticleRenderer — blindé renderer enforcing DA Platinum Executive Authority.
 *
 * Cross-Intralys "client autonomy" pattern : even if Jonas publishes crude
 * markdown in his GHL admin (random font sizes, inline colors, broken layouts),
 * this component forces the canonical Silver Platinum typography on render.
 *
 * Strategies of blindage applied :
 *   - Typography forced via Tailwind classes on h1-h6 / p / ul / ol / blockquote
 *   - max-w-[65ch] container for readability
 *   - Gold accent for blockquotes + first-letter optional drop-cap
 *   - No inline style honored — markdown body is sanitized to a strict subset
 *     before render (Sprint 6 : real markdown → React via remark/rehype with
 *     custom allow-list ; Sprint 5 stub : naive paragraph split)
 *
 * Stub : Sprint 5 renders bodyMarkdown as paragraph-split text only (no full
 * markdown parsing yet). Sprint 6 will pull in remark/rehype with strict
 * allow-list (h1-h6, p, em, strong, a, ul, ol, li, blockquote, code, pre).
 */
export function ArticleRenderer({ article }: ArticleRendererProps) {
  const paragraphs = article.bodyMarkdown.split('\n\n').filter((p) => p.trim().length > 0);

  return (
    <article
      data-article-renderer
      className="max-w-content mx-auto px-md py-2xl flex flex-col gap-lg"
    >
      {/* Header */}
      <header className="flex flex-col gap-md max-w-[65ch] mx-auto w-full">
        {article.category && (
          <p className="text-eyebrow uppercase tracking-widest text-gold/70 font-display text-xs">
            {article.category.label}
          </p>
        )}
        <h1 className="text-hero text-primary font-display text-balance">{article.title}</h1>
        <p className="text-body-lg text-silver opacity-80 text-pretty">{article.excerpt}</p>
        <div className="flex items-center gap-md text-sm text-silver/60 mt-sm pt-sm border-t border-silver/10">
          <span className="text-body text-primary font-display font-medium">
            {article.author.name}
          </span>
          <time dateTime={article.publishedAt} className="text-silver/50">
            {new Date(article.publishedAt).toLocaleDateString(
              article.locale === 'fr' ? 'fr-CA' : 'en-CA',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </time>
          <span aria-hidden="true" className="text-silver/30">
            ·
          </span>
          <span className="text-silver/50">
            {article.readingMinutes} {article.locale === 'fr' ? 'min de lecture' : 'min read'}
          </span>
        </div>
      </header>

      {/* Cover image (optional) */}
      {article.coverImage && (
        <figure className="max-w-default mx-auto w-full">
          <img
            src={article.coverImage.url}
            alt={article.coverImage.alt}
            className="w-full h-auto rounded-lg border border-silver/15"
            loading="lazy"
          />
        </figure>
      )}

      {/* Body — forced typography paragraphs */}
      <div data-article-body className="max-w-[65ch] mx-auto w-full flex flex-col gap-md">
        {paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-body text-silver opacity-85 text-pretty leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
