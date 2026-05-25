import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';
import { destroyLenis, initLenis } from '@/lib/motion/lenis';

function RootLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <html lang={locale === 'en' ? 'en' : 'fr-CA'}>
      <LanguageProvider locale={locale}>
        <Outlet />
      </LanguageProvider>
    </html>
  );
}

export const Route = createRootRoute({
  component: RootLayout
});
