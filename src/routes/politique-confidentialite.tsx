import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { LegalPage } from '@/components/sections/LegalPage';
import { politiqueConfidentialiteCopy } from '@/data/copy/politique-confidentialite';

function PolitiqueConfidentialiteRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <LegalPage copy={politiqueConfidentialiteCopy} />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/politique-confidentialite')({
  component: PolitiqueConfidentialiteRoute
});
