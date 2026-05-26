import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { LegalPage } from '@/components/sections/LegalPage';
import { mentionsLegalesCopy } from '@/data/copy/mentions-legales';

function LegalNoticeRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <LegalPage copy={mentionsLegalesCopy} />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/legal-notice')({
  component: LegalNoticeRoute
});
