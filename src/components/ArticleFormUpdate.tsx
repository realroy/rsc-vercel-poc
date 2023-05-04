"use client";

import { useUpdateArticle } from "@/hooks/useUpdateArticle";

import { ArticleForm } from "./ArticleForm";

import type { Article } from "@/db";
import type { ArticleFormNewProps } from "./ArticleFormNew";

export type ArticleFormUpdateProps = ArticleFormNewProps & {
  article: Article;
};

export function ArticleFormUpdate({
  article,
  onError,
  onSuccess,
}: ArticleFormUpdateProps) {
  const { updateArticle } = useUpdateArticle();

  return (
    <ArticleForm
      article={article}
      onSubmit={async (data) => {
        try {
          const updatedArticle = await updateArticle(data);
          onSuccess?.(updatedArticle);
        } catch {
          onError?.(new Error("Failed to update article"));
        }
      }}
    />
  );
}
