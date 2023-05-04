import { Suspense } from "react";
import { dehydrate } from "@tanstack/query-core";

import ArticleList from "@/components/ArticleList";
import { ArticleSearch } from "@/components/ArticleSearch";
import getQueryClient from "@/app/getQueryClient";
import { getArticles } from "@/apis/getArticles";
import { ARTICLES_QUERY_KEY } from "@/hooks/useArticles";
import { Hydrate } from "@/components/Hydrate";

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams?.query;
  const queryClient = getQueryClient();
  console.log('q', queryClient.prefetchQuery)
  // await queryClient.prefetchQuery({
  //   queryKey: [ARTICLES_QUERY_KEY],
  //   queryFn: () => getArticles({ query }),
  // });
  const dehydratedState = dehydrate(queryClient, {
    shouldDehydrateQuery: () => true,
  });

  return (
    <Hydrate state={dehydratedState}>
      <ArticleSearch query={query} />
      <div className="border-b"></div>
      {/* <ArticleListWrapper query={query} /> */}
    </Hydrate>
  );
}

export async function ArticleListWrapper({ query }: { query?: string }) {


  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Hydrate>
        <ArticleList />
      </Hydrate>
    </Suspense>
  );
}
