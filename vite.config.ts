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
          return undefined;
        }
      }
    }
  }
});
