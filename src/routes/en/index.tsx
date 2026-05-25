import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
import { VslPlaceholderSection } from '@/components/sections/VslPlaceholderSection';

function HomeEN() {
  return (
    <main>
      <Hero />
      <VslPlaceholderSection id="methodologie" />
      <TrustBand />
    </main>
  );
}

export const Route = createFileRoute('/en/')({
  component: HomeEN
});
