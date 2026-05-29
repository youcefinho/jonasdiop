import { createFileRoute } from '@tanstack/react-router';
import { AnArmyOfOnePage } from '@/components/sections/bootcamps/AnArmyOfOnePage';

function AnArmyOfOneEnRoute() {
  return <AnArmyOfOnePage />;
}

export const Route = createFileRoute('/en/events/bootcamps/an-army-of-one')({
  component: AnArmyOfOneEnRoute
});
