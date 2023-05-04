import type { Article } from "@/db";

export type GetArticlesOptions = {
  query?: string;
};

export async function getArticles({ query }: GetArticlesOptions) {
  const url = new URL("/api/articles");
  if (query) {
    url.searchParams.set("query", query);
  }

  const res = await fetch(url.toString());
  const json = await res.json();

  if (!res.ok) throw new Error(json?.error?.message ?? "Something went wrong");

  return json?.data?.articles as Article[];
}
