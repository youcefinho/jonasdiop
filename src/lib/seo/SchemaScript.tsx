import { type ReactElement, useEffect } from 'react';
import type { Locale } from '@/lib/i18n/types';
import { buildRouteSchemaJsonLd, type RouteSchemaOptions, type SchemaGraph } from './schema';

interface SchemaScriptProps {
  /** Current locale — typically `useT().locale` or `localeFromPath(pathname)`. */
  readonly locale: Locale;
  /** Route-specific schema injection options (faq, book, events, podcast, etc.). */
  readonly options?: RouteSchemaOptions;
  /**
   * Override / extend the auto-built graph. When provided, the component
   * serializes `graph` instead of calling `buildRouteSchemaJsonLd`. Useful for
   * tests, custom assemblies, or routes that compose nodes across multiple
   * data sources (e.g. /ressources hub with hand-curated article list).
   */
  readonly graph?: SchemaGraph;
  /**
   * DOM id for the injected `<script>` tag. Defaults to `schema-org-route`.
   * Each route should inject under a unique id when composing multiple
   * scripts ; the global Organization+Person+WebSite script lives at
   * `schema-org-graph` (managed by `__root.tsx`).
   */
  readonly id?: string;
}

/**
 * Inject a route-specific `<script type="application/ld+json">` into the
 * document head. Idempotent — updates the existing tag when props change so
 * locale switches and navigation between routes don't leak stale graphs.
 *
 * SSR migration path (Sprint 6 target) : when the Cloudflare Worker grows an
 * HTMLRewriter pass for SEO meta, this component becomes a no-op on initial
 * paint (the server already injected the graph) and only fires on client-side
 * navigation. Until then it covers crawlers that execute JS (Googlebot
 * modern, Bingbot) ; static crawlers (Twitter/Facebook OG, GPTBot) still need
 * SSR — document the gap in the route's `meta.title` until Sprint 6 lands.
 *
 * Usage (in any page component) :
 * ```tsx
 * <SchemaScript
 *   locale={locale}
 *   options={{
 *     faq: { items: faqItems, routeKey: 'faq' },
 *     webPage: { routeKey: 'faq', name: faqCopy.hero.h1[locale] }
 *   }}
 * />
 * ```
 */
export function SchemaScript({
  locale,
  options,
  graph,
  id = 'schema-org-route'
}: SchemaScriptProps): null {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = graph ? JSON.stringify(graph) : buildRouteSchemaJsonLd(locale, options);

    // Cleanup on unmount — prevents the FAQ graph from leaking into /contact
    // when the user navigates away (the global Org+Person+WebSite script stays
    // mounted, only the route-specific one is removed).
    return () => {
      const stale = document.getElementById(id);
      if (stale) stale.remove();
    };
  }, [locale, options, graph, id]);

  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Convenience pre-bound wrappers per route — strict typing, zero boilerplate
// at call sites. Each wrapper enforces the schema variants Brief v3 §6 expects
// for that route and pre-fills the `webPage.routeKey` so callers can't pass
// the wrong RouteKey by accident.
// ─────────────────────────────────────────────────────────────────────────────

interface FaqRouteSchemaProps {
  readonly locale: Locale;
  readonly items: ReadonlyArray<{ readonly question: string; readonly answer: string }>;
  /** Defaults to `'faq'`. Use `'conferences'` for the B2B FAQ embedded there,
   * or any programme route key for LP-specific FAQ sub-sections. */
  readonly routeKey?: import('@/config/routes').RouteKey;
}

/** Drop-in wrapper for any page rendering a FAQ block. */
export function FaqSchemaScript({
  locale,
  items,
  routeKey = 'faq'
}: FaqRouteSchemaProps): ReactElement {
  return (
    <SchemaScript
      locale={locale}
      id={`schema-org-faq-${routeKey}`}
      options={{
        faq: {
          items: items.map((i) => ({ question: i.question, answer: i.answer })),
          routeKey
        }
      }}
    />
  );
}
