import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { PodcastPage } from '@/components/sections/PodcastPage';

function PodcastRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <PodcastPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/podcast')({
  component: PodcastRoute
});
