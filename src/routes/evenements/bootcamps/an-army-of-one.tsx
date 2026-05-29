import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { AnArmyOfOnePage } from '@/components/sections/bootcamps/AnArmyOfOnePage';

function AnArmyOfOneRoute() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <AnArmyOfOnePage />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/evenements/bootcamps/an-army-of-one')({
  component: AnArmyOfOneRoute
});
