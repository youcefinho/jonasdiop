import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { TheEdgePage } from '@/components/sections/bootcamps/TheEdgePage';

function TheEdgeRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <TheEdgePage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/events/bootcamps/the-edge')({
  component: TheEdgeRoute
});
