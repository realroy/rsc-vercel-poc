"use client";

import { useState } from "react";

import type { Article } from "@/db";
import { ArticleItem } from "./ArticleItem";

export type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles: initialArticles }: ArticleListProps) {
  const [articles, setArticles] = useState(initialArticles)
  
  return (
    <div className="mt-4">
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickDelete={async (id) => {
            const prevArticles = articles
            
            try {
              setArticles(articles => articles.filter(article => article.id !== id))
              await fetch(`/api/articles/${id}`, {
                method: "DELETE",
              });
  
            } catch (error) {
              setArticles(prevArticles)
              alert((error as Error).message);
            }
          }}
        />
      ))}
    </div>
  );
}
