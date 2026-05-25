import { createFileRoute, Link } from '@tanstack/react-router';
import { useT } from '@/lib/i18n/useT';

function HomeFR() {
  const { t, locale } = useT();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-md p-md">
      <p className="text-eyebrow uppercase tracking-widest text-silver">
        {t({ fr: 'Setup OK · Sprint 0', en: 'Setup OK · Sprint 0' })}
      </p>
      <h1 className="text-hero text-primary text-balance">
        {t({ fr: "Jonas Diop — Architecte d'affaires", en: 'Jonas Diop — Business Architect' })}
      </h1>
      <p className="text-body-lg text-secondary text-pretty max-w-content">
        {t({
          fr: 'Stack B Intralys initialisée. Locale actuelle : ' + locale,
          en: 'Stack B Intralys initialized. Current locale: ' + locale
        })}
      </p>
      <Link
        to="/en"
        className="text-eyebrow uppercase tracking-widest text-gold underline-offset-4 hover:underline"
      >
        {t({ fr: '→ Switch to English', en: '→ Switch to English' })}
      </Link>
    </main>
  );
}

export const Route = createFileRoute('/')({
  component: HomeFR
});
