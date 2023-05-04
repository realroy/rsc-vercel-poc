import type { Article } from "@/db";

export function useUpdateArticle() {
  return {
    async updateArticle(data: Partial<Article>) {
      const res = await fetch(`/api/articles/${data.id}`, {
        method: "PUT",
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