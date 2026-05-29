import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { EvenementsBootcampsPage } from '@/components/sections/EvenementsBootcampsPage';

function EvenementsBootcampsRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <EvenementsBootcampsPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/evenements/bootcamps/')({
  component: EvenementsBootcampsRoute
});
