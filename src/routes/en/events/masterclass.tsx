import { createFileRoute } from '@tanstack/react-router';
import { MasterclassPage } from '@/components/sections/MasterclassPage';

function MasterclassRoute() {
  return <MasterclassPage />;
}

export const Route = createFileRoute('/en/events/masterclass')({
  component: MasterclassRoute
});
