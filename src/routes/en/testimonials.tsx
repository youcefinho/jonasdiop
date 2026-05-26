import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { TemoignagesPage } from '@/components/sections/TemoignagesPage';

function TestimonialsRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <TemoignagesPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/testimonials')({
  component: TestimonialsRoute
});
