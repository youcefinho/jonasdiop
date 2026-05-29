import { createFileRoute, notFound } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import {
  type LivreSousPageData,
  LivreSousPageTemplate,
  livreSousPageDemoData
} from '@/components/sections/LivreSousPageTemplate';

/**
 * /livre/$slug — shell pour sous-page d'un livre spécifique.
 *
 * Brief v3 §3.7 mentionne « sous-page par livre » avec même structure adaptée.
 * À ce stade, un seul livre est en préparation : "manuel-architecture".
 * Le loader mappe le slug à un payload statique. Plus tard, ce sera un
 * fetch vers GHL Blog API ou KV cache (pattern intralys-client-autonomy).
 *
 * Slugs reconnus :
 *  - "manuel-architecture" → livreSousPageDemoData
 *  - tout autre slug → 404
 */

const LIVRE_REGISTRY: Record<string, LivreSousPageData> = {
  'manuel-architecture': livreSousPageDemoData
};

function LivreDetailRoute() {
  const { livre } = Route.useLoaderData();
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <LivreSousPageTemplate data={livre} />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/livre/$slug')({
  loader: ({ params }) => {
    const livre = LIVRE_REGISTRY[params.slug];
    if (!livre) {
      throw notFound();
    }
    return { livre };
  },
  component: LivreDetailRoute
});
