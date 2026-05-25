import { createFileRoute, Link } from '@tanstack/react-router';
import { useT } from '@/lib/i18n/useT';

function HomeEN() {
  const { locale } = useT();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-md p-md">
      <p className="text-eyebrow uppercase tracking-widest text-silver">
        Setup OK · Sprint 0
      </p>
      <h1 className="text-hero text-primary text-balance">
        Jonas Diop — Business Architect
      </h1>
      <p className="text-body-lg text-secondary text-pretty max-w-content">
        Stack B Intralys initialized. Current locale: {locale}
      </p>
      <Link
        to="/"
        className="text-eyebrow uppercase tracking-widest text-gold underline-offset-4 hover:underline"
      >
        ← Retour FR
      </Link>
    </main>
  );
}

export const Route = createFileRoute('/en/')({
  component: HomeEN
});
