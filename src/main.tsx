import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './lib/fonts';
import { router } from './router';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element missing — check index.html');

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
