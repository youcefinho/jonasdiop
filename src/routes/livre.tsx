import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { LivrePage } from '@/components/sections/LivrePage';

function LivreRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <LivrePage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/livre')({
  component: LivreRoute
});
