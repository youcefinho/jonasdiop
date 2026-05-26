import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths()
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
