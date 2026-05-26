import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { FAQPage } from '@/components/sections/FAQPage';

function FAQRouteEn() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <FAQPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/faq')({
  component: FAQRouteEn
});
