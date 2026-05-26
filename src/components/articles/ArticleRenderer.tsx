import { defaultSchema } from 'hast-util-sanitize';
import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import type { Article } from '@/lib/content/types';

interface ArticleRendererProps {
  article: Article;
}

/**
 * Strict allow-list for the sanitize step.
 *
 * Cross-Intralys "client autonomy" hardening : even if Jonas publishes crude
 * markdown in GHL admin (or pastes HTML from Word, or includes <script>),
 * rehype-sanitize strips everything outside this whitelist before the
 * components map below renders the surviving nodes.
 *
 * Allowed : structural headings, paragraphs, lists, links, basic inline marks,
 * blockquotes, code blocks, GFM tables, horizontal rules, hr. No images
 * inside markdown body (cover image is rendered separately, controlled by us).
 * No `style`, no `class`, no `id` — DA classes are added at the components
 * map level.
 */
const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [
    'h2',
    'h3',
    'h4',
    'p',
    'em',
    'strong',
    'a',
    'ul',
    'ol',
    'li',
    'blockquote',
    'code',
    'pre',
    'hr',
    'br',
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'del'
  ],
  attributes: {
    ...defaultSchema.attributes,
    a: ['href', 'title'],
    code: ['className'],
    pre: ['className'],
    th: ['align', 'colSpan', 'rowSpan'],
    td: ['align', 'colSpan', 'rowSpan']
  }
};

/**
 * Components map enforcing DA Platinum Executive Authority on every rendered
 * markdown element. Headings collapse h1 → h2 (the article H1 is already
 * rendered in the header) ; links open external URLs in new tabs with rel=noopener.
 */
const componentsMap: Components = {
  h1: ({ children }) => (
    <h2 className="text-h2 text-primary font-display text-balance mt-2xl mb-md">{children}</h2>
  ),
  h2: ({ children }) => (
    <h2 className="text-h2 text-primary font-display text-balance mt-2xl mb-md">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-h3 text-primary font-display text-balance mt-xl mb-sm">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-body-lg text-primary font-display font-medium text-balance mt-lg mb-sm">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-body text-silver opacity-85 text-pretty leading-relaxed">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href !== undefined && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="text-gold hover:underline underline-offset-2 transition-colors duration-base"
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => (
    <strong className="text-primary font-display font-medium">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="flex flex-col gap-2 list-disc marker:text-gold/70 pl-md">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="flex flex-col gap-2 list-decimal marker:text-gold/70 pl-md">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-body text-silver opacity-85 text-pretty leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gold/40 pl-md py-sm my-md text-body text-silver opacity-90 italic text-pretty">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.startsWith('language-') ?? false;
    if (isBlock) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="px-1.5 py-0.5 rounded bg-elevated text-gold/90 text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="p-md bg-elevated border border-silver/15 rounded-lg overflow-x-auto text-sm font-mono text-silver">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-silver/15 my-xl" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-md">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children, align }) => (
    <th
      className="text-left px-sm py-2 border-b-2 border-gold/30 text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
      {...(align && { style: { textAlign: align } })}
    >
      {children}
    </th>
  ),
  td: ({ children, align }) => (
    <td
      className="px-sm py-2 border-b border-silver/10 text-body text-silver opacity-85"
      {...(align && { style: { textAlign: align } })}
    >
      {children}
    </td>
  ),
  del: ({ children }) => <del className="text-silver/40 line-through">{children}</del>
};

/**
 * ArticleRenderer — blindé renderer enforcing DA Platinum Executive Authority.
 *
 * Cross-Intralys "client autonomy" pattern : even if Jonas publishes crude
 * markdown in his GHL admin (random font sizes, inline colors, broken layouts,
 * <script>, inline styles), this component sanitizes via rehype-sanitize with
 * a strict allow-list and forces DA classes on every surviving element.
 *
 * Pipeline : raw markdown → remark-parse → remark-gfm (tables, strikethrough)
 *         → rehype → rehype-sanitize (allow-list) → React via components map.
 *
 * No raw HTML allowed in the source. No `style` / `class` / `id` attributes
 * survive sanitization. Links open external URLs in new tabs with rel=noopener.
 */
export function ArticleRenderer({ article }: ArticleRendererProps) {
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

      {/* Body — sanitized markdown with forced DA components */}
      <div data-article-body className="max-w-[65ch] mx-auto w-full flex flex-col gap-md">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[[rehypeSanitize, sanitizeSchema]]}
          components={componentsMap}
        >
          {article.bodyMarkdown}
        </ReactMarkdown>
      </div>
    </article>
  );
}
