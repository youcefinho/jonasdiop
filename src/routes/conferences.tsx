import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { ConferencesPage } from '@/components/sections/ConferencesPage';

function ConferencesFR() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <ConferencesPage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/conferences')({
  component: ConferencesFR
});
