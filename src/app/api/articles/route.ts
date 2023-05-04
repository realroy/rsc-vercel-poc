import { NextRequest, NextResponse } from "next/server";

import db, { articles } from "@/db";

export async function POST(request: NextRequest) {
  const json = await request.json();

  try {
    const insertedArticles = await db
      .insert(articles)
      .values(json)
      .returning({ insertedId: articles.id });

    NextResponse.json(
      {
        error: null,
        data: {
          articleIds: insertedArticles.map(({ insertedId }) => insertedId),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    NextResponse.json({ error, data: null }, { status: 500 });
  }
}
