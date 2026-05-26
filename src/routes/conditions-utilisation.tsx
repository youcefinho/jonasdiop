import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { LegalPage } from '@/components/sections/LegalPage';
import { conditionsUtilisationCopy } from '@/data/copy/conditions-utilisation';

function ConditionsUtilisationRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <LegalPage copy={conditionsUtilisationCopy} />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/conditions-utilisation')({
  component: ConditionsUtilisationRoute
});
