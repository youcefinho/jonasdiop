import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { RessourcesPage } from '@/components/sections/RessourcesPage';

function ResourcesRoute() {
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

export const Route = createFileRoute('/en/resources')({
  component: ResourcesRoute
});
