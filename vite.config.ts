import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * Async-load the main stylesheet so it doesn't block the first paint.
 * Perf Vague 3 : Lighthouse audit identified the Tailwind v4 compiled CSS
 * bundle as the dominant render-blocking resource (~575ms LCP cost).
 *
 * Pattern : <link rel="preload" as="style" onload="rel=stylesheet"> + <noscript>
 * fallback. Combined with inline critical CSS in index.html, this lets the
 * page paint dark+themed immediately while the full stylesheet loads in
 * parallel — utility classes apply once the async CSS finishes.
 *
 * Apply 'build' only — dev server keeps the regular sync stylesheet for HMR.
 */
function asyncMainCss(): Plugin {
  return {
    name: 'async-main-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(
          /<link\s+rel="stylesheet"([^>]*)>/g,
          (_match, attrs) =>
            `<link rel="preload" as="style"${attrs} onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet"${attrs}></noscript>`
        );
      }
    }
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    asyncMainCss()
  ],
  esbuild: {
    pure: ['console.log', 'console.debug', 'console.info', 'console.trace']
  },
  build: {
    target: ['es2022', 'edge100', 'firefox100', 'chrome100', 'safari16'],
    cssMinify: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react';
          }
          if (id.includes('node_modules/@tanstack/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/motion')) {
            return 'motion';
          }
          // Markdown + sanitize stack — only used by ArticleRenderer on
          // /ressources/:slug routes. Isolating ensures the +35kB-gzip cost
          // is paid only when an article detail page is visited.
          if (
            id.includes('node_modules/react-markdown') ||
            id.includes('node_modules/remark-') ||
            id.includes('node_modules/rehype-') ||
            id.includes('node_modules/unified') ||
            id.includes('node_modules/mdast-') ||
            id.includes('node_modules/micromark') ||
            id.includes('node_modules/hast-') ||
            id.includes('node_modules/vfile') ||
            id.includes('node_modules/bail') ||
            id.includes('node_modules/trough') ||
            id.includes('node_modules/property-information') ||
            id.includes('node_modules/space-separated-tokens') ||
            id.includes('node_modules/comma-separated-tokens') ||
            id.includes('node_modules/ccount') ||
            id.includes('node_modules/character-entities') ||
            id.includes('node_modules/decode-named-character-reference') ||
            id.includes('node_modules/escape-string-regexp') ||
            id.includes('node_modules/longest-streak') ||
            id.includes('node_modules/markdown-table') ||
            id.includes('node_modules/zwitch') ||
            id.includes('node_modules/devlop')
          ) {
            return 'markdown';
          }
          // Sentry SDK — keep separate so error-boundary fallback works without
          // bloating the main bundle for non-error pages.
          if (id.includes('node_modules/@sentry')) {
            return 'sentry';
          }
          return undefined;
        }
      }
    }
  }
});
