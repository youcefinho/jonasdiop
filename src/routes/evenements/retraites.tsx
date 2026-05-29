import { createFileRoute } from '@tanstack/react-router';
import { RetraitesPage } from '@/components/sections/RetraitesPage';

function RetraitesRoute() {
  return <RetraitesPage />;
}

export const Route = createFileRoute('/evenements/retraites')({
  component: RetraitesRoute
});
