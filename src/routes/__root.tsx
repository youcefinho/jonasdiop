import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { CookieBanner } from '@/components/consent/CookieBanner';
import { CookieSettingsModal } from '@/components/consent/CookieSettingsModal';
import { MobileSignatureBar } from '@/components/layout/MobileSignatureBar';
import { StickyFloatingCTA } from '@/components/layout/StickyFloatingCTA';
import { NotFoundPage } from '@/components/sections/NotFoundPage';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { CookieConsentProvider } from '@/lib/consent/CookieConsentContext';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';
import { destroyLenis, initLenis } from '@/lib/motion/lenis';
import { applyPageMeta, resolvePageMeta } from '@/lib/seo/pageMeta';
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

  // Per-route document title + description + og + canonical + hreflang.
  // Reads each route's copy.meta via the central registry — dynamic-imported
  // so per-route copy stays in its own chunk (zero entry-bundle cost).
  useEffect(() => {
    let cancelled = false;
    void resolvePageMeta(pathname).then((meta) => {
      if (!cancelled) applyPageMeta(meta);
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  // The <html> element is the real document root from index.html — never
  // emit it as JSX (mounting it inside <div id="root"> produces a nested
  // <html> which is invalid HTML and triggers React hydration errors that
  // cascade into <nav>/<main>/<footer>/<div> nesting warnings). The
  // document.documentElement.lang attribute is kept in sync by applyPageMeta
  // on each pathname change.
  return (
    <LanguageProvider locale={locale}>
      <CookieConsentProvider>
        <GrainOverlay />
        <ScrollProgressBar />
        <Outlet />
        <MobileSignatureBar />
        <StickyFloatingCTA />
        <CookieBanner />
        <CookieSettingsModal />
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

function NotFoundLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  return (
    <LanguageProvider locale={locale}>
      <CookieConsentProvider>
        <GrainOverlay />
        <ScrollProgressBar />
        <NotFoundPage />
        <CookieBanner />
        <CookieSettingsModal />
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundLayout
});
