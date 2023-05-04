import db, { articles } from "@/db";

import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const json = await request.json();

  try {
    await db
      .update(articles)
      .set({ ...json, updatedAt: new Date() })
      .where(eq(articles.id, +params.id))

    NextResponse.json(
      {
        error: null,
        data: {
          article: {
            id: params.id,
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ error, data: null }, { status: 500 });
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await db
      .update(articles)
      .set({ deletedAt: new Date() })
      .where(eq(articles.id, +params.id))

    NextResponse.json(
      {
        error: null,
        data: {
          articleId: params.id,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ error, data: null }, { status: 500 });
  }
}
