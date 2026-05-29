import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { EvenementsBootcampsPage } from '@/components/sections/EvenementsBootcampsPage';

function EventsBootcampsRoute() {
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

export const Route = createFileRoute('/en/events/bootcamps/')({
  component: EventsBootcampsRoute
});
