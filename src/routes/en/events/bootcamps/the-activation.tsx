import { createFileRoute } from '@tanstack/react-router';
import { TheActivationPage } from '@/components/sections/bootcamps/TheActivationPage';

function TheActivationEnRoute() {
  return <TheActivationPage />;
}

export const Route = createFileRoute('/en/events/bootcamps/the-activation')({
  component: TheActivationEnRoute
});
