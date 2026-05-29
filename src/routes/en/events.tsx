import { createFileRoute, Outlet } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';

function EventsLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Outlet />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/events')({
  component: EventsLayout
});
