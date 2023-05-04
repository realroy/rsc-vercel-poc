import { desc, isNull } from "drizzle-orm";

import db, { articles } from "@/db";
import ArticleList from "@/components/ArticleList";

function getArticles() {
  return db
    .select()
    .from(articles)
    .where(isNull(articles.deletedAt))
    .orderBy(desc(articles.createdAt));
}

export default async function ArticlesPage() {
  const articleItems = await getArticles()

  return (
    <ArticleList articles={articleItems} />
  );
}
