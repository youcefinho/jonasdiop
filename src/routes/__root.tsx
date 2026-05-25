import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { localeFromPath } from '@/lib/i18n/translations';

function RootLayout() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

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
