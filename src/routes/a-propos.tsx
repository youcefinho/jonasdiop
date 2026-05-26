import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { AboutPage } from '@/components/sections/AboutPage';

function AboutFRRoute() {
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

export const Route = createFileRoute('/a-propos')({
  component: AboutFRRoute
});
