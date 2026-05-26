import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { EvenementsPage } from '@/components/sections/EvenementsPage';

function EvenementsRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <EvenementsPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/evenements')({
  component: EvenementsRoute
});
