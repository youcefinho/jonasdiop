import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { RetraitesPage } from '@/components/sections/RetraitesPage';

function RetraitesRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <RetraitesPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/evenements/retraites')({
  component: RetraitesRoute
});
