import { createFileRoute } from '@tanstack/react-router';
import { EvenementsPage } from '@/components/sections/EvenementsPage';

function EventsIndexRoute() {
  return <EvenementsPage />;
}

export const Route = createFileRoute('/en/events/')({
  component: EventsIndexRoute
});
