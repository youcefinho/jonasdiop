import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { LivrePage } from '@/components/sections/LivrePage';

function BookRoute() {
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

export const Route = createFileRoute('/en/book')({
  component: BookRoute
});
