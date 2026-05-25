import { Outlet, createFileRoute } from '@tanstack/react-router';

function EnLayout() {
  return <Outlet />;
}

export const Route = createFileRoute('/en')({
  component: EnLayout
});
