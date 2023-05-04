"use client";

import { useCreateArticle } from "@/hooks/useCreateArticle";
import { ArticleForm } from "./ArticleForm";

import type { Article } from "@/db";

export type ArticleFormNewProps = {
  onSuccess?: (newArticle: Article) => void;
  onError?: (error: Error) => void;
};

export function ArticleFormNew({
  onSuccess,
  onError,
}: ArticleFormNewProps) {
  const { createArticle } = useCreateArticle();

  return (
    <div>
      <ArticleForm
        onSubmit={async (data) => {
          try {
            const createdArticle = await createArticle(data);
            onSuccess?.(createdArticle);
          } catch {
            onError?.(new Error("Failed to create article"));
          }
        }}
      />
    </div>
  );
}