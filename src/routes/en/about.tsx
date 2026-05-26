import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { AboutPage } from '@/components/sections/AboutPage';

function AboutENRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <AboutPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/about')({
  component: AboutENRoute
});
