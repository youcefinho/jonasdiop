import { createFileRoute } from '@tanstack/react-router';
import { RetraitesPage } from '@/components/sections/RetraitesPage';

function RetreatsRoute() {
  return <RetraitesPage />;
}

export const Route = createFileRoute('/en/events/retreats')({
  component: RetreatsRoute
});
