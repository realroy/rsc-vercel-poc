import { desc, isNull } from "drizzle-orm";

import { ArticleItem } from "@/components";
import db, { articles } from "@/db";

export default async function ArticlesPage() {
  const articleItems = await db
    .select()
    .from(articles)
    .where(isNull(articles.deletedAt))
    .orderBy(desc(articles.createdAt));

  return (
    <div className="mt-4">
      {articleItems.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}
