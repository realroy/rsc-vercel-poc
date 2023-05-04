import { eq } from "drizzle-orm";

import db, { type Article, articles } from "@/db";

export class ArticleRepository {
  static async findById(id: Article["id"]) {
    const [article] = await db
      .select()
      .from(articles)
      .where(eq(articles.id, id))
      .limit(1);

    return article;
  }
}
