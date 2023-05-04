import { NextRequest, NextResponse } from "next/server";

import db, { articles } from "@/db";
import { ArticleRepository } from "@/repositories/article-repository";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") ?? undefined;

  try {
    const articles = await ArticleRepository.query(query);
    return new Response(
      JSON.stringify({
        data: {
          articles,
        },
        error: null,
      })
    );
  } catch (error) {
    return new Response(JSON.stringify({ error, data: null }), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const json = await request.json();

  try {
    const insertedArticles = await db
      .insert(articles)
      .values({ ...json, createdAt: new Date(), updatedAt: new Date() })
      .returning({ insertedId: articles.id });

    return new Response(
      JSON.stringify({
        data: {
          article: {
            ...json,
            id: insertedArticles[0].insertedId,
          },
        },
        error: null,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error, data: null }), { status: 500 });
  }
}
