import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
import { VslPlaceholderSection } from '@/components/sections/VslPlaceholderSection';

function HomeFR() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <VslPlaceholderSection id="methodologie" />
    </main>
  );
}

export const Route = createFileRoute('/')({
  component: HomeFR
});
