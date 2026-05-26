import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { CookieBanner } from '@/components/consent/CookieBanner';
import { CookieSettingsModal } from '@/components/consent/CookieSettingsModal';
import { NotFoundPage } from '@/components/sections/NotFoundPage';
import { CookieConsentProvider } from '@/lib/consent/CookieConsentContext';
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
        <CookieConsentProvider>
          <Outlet />
          <CookieBanner />
          <CookieSettingsModal />
        </CookieConsentProvider>
      </LanguageProvider>
    </html>
  );
}

function NotFoundLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  return (
    <html lang={locale === 'en' ? 'en' : 'fr-CA'}>
      <LanguageProvider locale={locale}>
        <CookieConsentProvider>
          <NotFoundPage />
          <CookieBanner />
          <CookieSettingsModal />
        </CookieConsentProvider>
      </LanguageProvider>
    </html>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundLayout
});
