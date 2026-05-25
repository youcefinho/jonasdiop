/**
 * Cloudflare Worker entry — Sprint 0 minimal.
 * Sprint 6 : ajoutera HTMLRewriter SSR meta + Schema.org @graph injection.
 * Sprint 8 : ajoutera worker redirects 301 pour migration SEO.
 */

interface Env {
  ASSETS: Fetcher;
  ENVIRONMENT?: 'staging' | 'production';
  GHL_LOCATION_ID?: string;
  GHL_TRACKING_ID?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Sprint 6 : HTMLRewriter SSR meta injection ici
    // Sprint 6 : Schema.org @graph injection ici
    // Sprint 8 : worker redirects 301 ici

    // Sprint 0 : passthrough vers assets SPA
    return env.ASSETS.fetch(request);
  }
} satisfies ExportedHandler<Env>;
