import { createFileRoute, Outlet } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';

/**
 * /evenements layout — provides Navbar + main wrapper + FooterRich for
 * the entire /evenements/* subtree (parent index + bootcamps + retraites +
 * masterclass). Renders <Outlet /> so child routes can mount.
 *
 * Without this Outlet, children were silently dropped and the URL
 * `/evenements/retraites` etc. rendered the parent layout with no body —
 * which the user perceived as "the 3 pages are identical" because every
 * sub-route showed the same parent skeleton.
 */
function EvenementsLayout() {
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

export const Route = createFileRoute('/evenements')({
  component: EvenementsLayout
});
