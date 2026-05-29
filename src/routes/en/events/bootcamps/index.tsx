import { createFileRoute } from '@tanstack/react-router';
import { EvenementsBootcampsPage } from '@/components/sections/EvenementsBootcampsPage';

function EventsBootcampsRoute() {
  return <EvenementsBootcampsPage />;
}

export const Route = createFileRoute('/en/events/bootcamps/')({
  component: EventsBootcampsRoute
});
