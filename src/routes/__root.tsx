import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';
import { destroyLenis, initLenis } from '@/lib/motion/lenis';
import { buildSchemaJsonLd } from '@/lib/seo/schema';

function RootLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  useEffect(() => {
    const scriptId = 'schema-org-graph';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    const includeServices = pathname.startsWith('/services') || pathname.startsWith('/en/services');
    script.textContent = buildSchemaJsonLd(locale, { includeServices });
  }, [locale, pathname]);

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
