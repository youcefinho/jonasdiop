import { createFileRoute } from '@tanstack/react-router';
import { EvenementsPage } from '@/components/sections/EvenementsPage';

/**
 * /evenements (exact) — renders the parent EvenementsPage hub inside the
 * EvenementsLayout (which provides Navbar + main + FooterRich).
 */
function EvenementsIndexRoute() {
  return <EvenementsPage />;
}

export const Route = createFileRoute('/evenements/')({
  component: EvenementsIndexRoute
});
