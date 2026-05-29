import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { MasterclassPage } from '@/components/sections/MasterclassPage';

function MasterclassRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <MasterclassPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/events/masterclass')({
  component: MasterclassRoute
});
