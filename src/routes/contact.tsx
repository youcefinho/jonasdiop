import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { ContactPage } from '@/components/sections/ContactPage';

function ContactRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <ContactPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/contact')({
  component: ContactRoute
});
