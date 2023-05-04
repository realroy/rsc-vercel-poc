"use client";

import { useQuery } from "@tanstack/react-query";

import { getArticles } from "@/apis/getArticles";

export const ARTICLES_QUERY_KEY = "ARTICLES";

export type UseArticlesProps = {
  query?: string;
};

export function useArticles({ query }: UseArticlesProps) {
  const { data, ...restQuery } = useQuery({
    queryKey: [ARTICLES_QUERY_KEY, query],
    queryFn: () => getArticles({ query }),
  });

  return {
    articles: data,
    ...restQuery,
  };
}
