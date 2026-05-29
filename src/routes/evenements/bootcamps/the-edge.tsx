import { createFileRoute } from '@tanstack/react-router';
import { TheEdgePage } from '@/components/sections/bootcamps/TheEdgePage';

function TheEdgeRoute() {
  return <TheEdgePage />;
}

export const Route = createFileRoute('/evenements/bootcamps/the-edge')({
  component: TheEdgeRoute
});
