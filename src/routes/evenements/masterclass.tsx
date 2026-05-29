import { createFileRoute } from '@tanstack/react-router';
import { MasterclassPage } from '@/components/sections/MasterclassPage';

function MasterclassRoute() {
  return <MasterclassPage />;
}

export const Route = createFileRoute('/evenements/masterclass')({
  component: MasterclassRoute
});
