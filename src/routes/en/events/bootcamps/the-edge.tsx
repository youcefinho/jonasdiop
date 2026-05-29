import { createFileRoute } from '@tanstack/react-router';
import { TheEdgePage } from '@/components/sections/bootcamps/TheEdgePage';

function TheEdgeEnRoute() {
  return <TheEdgePage />;
}

export const Route = createFileRoute('/en/events/bootcamps/the-edge')({
  component: TheEdgeEnRoute
});
