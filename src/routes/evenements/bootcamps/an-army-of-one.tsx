import { createFileRoute } from '@tanstack/react-router';
import { AnArmyOfOnePage } from '@/components/sections/bootcamps/AnArmyOfOnePage';

function AnArmyOfOneRoute() {
  return <AnArmyOfOnePage />;
}

export const Route = createFileRoute('/evenements/bootcamps/an-army-of-one')({
  component: AnArmyOfOneRoute
});
