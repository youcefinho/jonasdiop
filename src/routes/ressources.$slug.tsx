import { createFileRoute, notFound } from '@tanstack/react-router';
import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { getArticle } from '@/lib/content/getArticle';

function ArticleDetailRoute() {
  const { article } = Route.useLoaderData();
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <ArticleRenderer article={article} />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/ressources/$slug')({
  loader: async ({ params }) => {
    const article = await getArticle(params.slug, 'fr');
    if (article === null) {
      throw notFound();
    }
    return { article };
  },
  component: ArticleDetailRoute
});
