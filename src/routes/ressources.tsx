import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { RessourcesPage } from '@/components/sections/RessourcesPage';

function RessourcesRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <RessourcesPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/ressources')({
  component: RessourcesRoute
});
