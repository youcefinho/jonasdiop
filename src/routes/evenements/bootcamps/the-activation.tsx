import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { TheActivationPage } from '@/components/sections/bootcamps/TheActivationPage';

function TheActivationRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <TheActivationPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/evenements/bootcamps/the-activation')({
  component: TheActivationRoute
});
