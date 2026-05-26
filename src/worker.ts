/**
 * Cloudflare Worker entry — pass-through to SPA assets.
 *
 * Sprint 6 chose client-side Schema.org + meta injection (via __root.tsx
 * useEffect on locale/pathname change) rather than HTMLRewriter. Reason :
 * client-side keeps the worker stateless and lets TanStack Router own
 * meta lifecycle. Revisit if SEO crawlers need SSR meta in JS-disabled
 * mode (Googlebot handles client-side fine since 2019).
 *
 * Sprint 6B (pending H8/H9) will add :
 *   - /api/contact   → POST GHL contacts/upsert
 *   - /api/newsletter → POST GHL custom field upsert + tag
 *   - /api/webhooks/ghl-blog → KV invalidation on publish/edit/delete
 *
 * Sprint 8 may add 301 redirects from legacy jonasdiop.com URLs once
 * H5 mapping is provided by Jonas.
 */

interface Env {
  ASSETS: Fetcher;
  ARTICLE_CACHE?: KVNamespace;
  ENVIRONMENT?: 'staging' | 'production';
  GHL_LOCATION_ID?: string;
  GHL_TRACKING_ID?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  }
} satisfies ExportedHandler<Env>;
