import type { Article } from "@/db";

export function useCreateArticle() {
  return {
    async createArticle(data: Partial<Article>) {
      const res = await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();

      return json?.data?.article as Article;
    },
  };
}


