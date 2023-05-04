import db, { articles } from "@/db";

import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const json = await request.json();

  try {
    const [{ updatedCreatedAt: createdAt, updatedUpdatedAt: updatedAt },] = await db
      .update(articles)
      .set({ ...json, updatedAt: new Date() })
      .where(eq(articles.id, +params.id))
      .returning({
        updatedCreatedAt: articles.createdAt,
        updatedUpdatedAt: articles.updatedAt,
      });

    return NextResponse.json(
      {
        error: null,
        data: {
          article: {
            ...json,
            updatedAt,
            createdAt,
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ error, data: null });
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
      .where(eq(articles.id, +params.id));

    return NextResponse.json({
      error: null,
      data: {
        article: {
          id: params.id,
        },
      },
    });
  } catch (error) {
    return NextResponse.json({ error, data: null }, { status: 500 });
  }
}
