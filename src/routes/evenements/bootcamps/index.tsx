import { createFileRoute } from '@tanstack/react-router';
import { EvenementsBootcampsPage } from '@/components/sections/EvenementsBootcampsPage';

function EvenementsBootcampsRoute() {
  return <EvenementsBootcampsPage />;
}

export const Route = createFileRoute('/evenements/bootcamps/')({
  component: EvenementsBootcampsRoute
});
