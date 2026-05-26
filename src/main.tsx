import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './lib/fonts';
import { RootErrorBoundary } from './components/error/RootErrorBoundary';
import { initSentry } from './lib/monitoring/sentry';
import { router } from './router';

initSentry();

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element missing — check index.html');

createRoot(rootEl).render(
  <StrictMode>
    <RootErrorBoundary>
      <RouterProvider router={router} />
    </RootErrorBoundary>
  </StrictMode>
);
