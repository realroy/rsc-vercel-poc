import { and, or, like, isNull, desc, eq } from "drizzle-orm";

import db, { type Article, articles } from "@/db";

export class ArticleRepository {
  static async query(query?: string) {
    if (query) {
      return db
        .select()
        .from(articles)
        .where(
          and(
            or(
              like(articles.title, `%${query}%`),
              like(articles.body, `%${query}%`)
            ),
            isNull(articles.deletedAt)
          )
        )
        .orderBy(desc(articles.createdAt));
    }

    return db
      .select()
      .from(articles)
      .where(isNull(articles.deletedAt))
      .orderBy(desc(articles.createdAt));
  }
  
  static async findById(id: Article["id"]) {
    const [article] = await db
      .select()
      .from(articles)
      .where(eq(articles.id, id))
      .limit(1);

    return article;
  }
}
