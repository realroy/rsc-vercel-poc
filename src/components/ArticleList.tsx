"use client";

import type { Article } from "@/db";
import { useArticles } from "@/hooks/useArticles";
import { useDeleteArticle } from "@/hooks/useDeleteArticle";

import { ArticleItem } from "./ArticleItem";

export type ArticleListProps = {};

export default function ArticleList({}: ArticleListProps) {
  const { articles } = useArticles({});
  const { deleteArticle } = useDeleteArticle();
  return (
    <div>
      {articles?.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickDelete={async (id) => {
            try {
              await deleteArticle(id);
            } catch (error) {
              alert((error as Error).message);
            }
          }}
        />
      ))}
    </div>
  );
}
