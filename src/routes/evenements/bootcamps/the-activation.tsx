import { createFileRoute } from '@tanstack/react-router';
import { TheActivationPage } from '@/components/sections/bootcamps/TheActivationPage';

function TheActivationRoute() {
  return <TheActivationPage />;
}

export const Route = createFileRoute('/evenements/bootcamps/the-activation')({
  component: TheActivationRoute
});
