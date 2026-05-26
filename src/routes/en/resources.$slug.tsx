import { createFileRoute, notFound } from '@tanstack/react-router';
import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { getArticle } from '@/lib/content/getArticle';

function ArticleDetailRouteEn() {
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

export const Route = createFileRoute('/en/resources/$slug')({
  loader: async ({ params }) => {
    const article = await getArticle(params.slug, 'en');
    if (article === null) {
      throw notFound();
    }
    return { article };
  },
  component: ArticleDetailRouteEn
});
