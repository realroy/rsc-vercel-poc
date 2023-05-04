import type { Article } from "@/db";

export function useCreateArticle() {
  return {
    createArticle(data: Partial<Article>) {
      return fetch('/api/articles', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}

export function useUpdateArticle() {
  return {
    updateArticle(data: Partial<Article>) {
      return fetch(`/api/articles/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}