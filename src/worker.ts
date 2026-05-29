/**
 * Cloudflare Worker entry — API router + SPA pass-through.
 *
 * Sprint 6 chose client-side Schema.org + meta injection (via __root.tsx
 * useEffect on locale/pathname change) rather than HTMLRewriter. Reason :
 * client-side keeps the worker stateless and lets TanStack Router own
 * meta lifecycle. Revisit if SEO crawlers need SSR meta in JS-disabled
 * mode (Googlebot handles client-side fine since 2019).
 *
 * Sprint 3.5 (pre-launch waitlist):
 *   - POST /api/waitlist → handleWaitlist (Trilogie bootcamps email capture)
 *
 * Sprint 6B (pending H8/H9) will add :
 *   - /api/contact   → POST GHL contacts/upsert
 *   - /api/newsletter → POST GHL custom field upsert + tag
 *   - /api/webhooks/ghl-blog → KV invalidation on publish/edit/delete
 *
 * Sprint 8 may add 301 redirects from legacy jonasdiop.com URLs once
 * H5 mapping is provided by Jonas.
 *
 * Routing contract:
 *   - /api/waitlist  → waitlist handler (KV write)
 *   - /api/*         → 404 (other API paths reserved for future sprints)
 *   - everything else → SPA assets (TanStack Router takes over)
 */

import { handleWaitlist } from './worker/api-waitlist';
import type { Env } from './worker/types';

export type { Env };

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/waitlist') {
      return handleWaitlist(request, env);
    }

    if (url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ ok: false, error: 'not_found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store'
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
} satisfies ExportedHandler<Env>;
