"use client";

import type { Article } from "@/db";
import Link from "next/link";
import { MouseEventHandler } from "react";

export type ArticleItemProps = {
  article: Article;
};

export function ArticleItem({ article }: ArticleItemProps) {
  const handleClickDelete: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    try {
      await fetch(`/api/articles/${article.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <article className="border-b py-4">
      <h3 className="text-ellipsis text-xl">{article.title}</h3>
      <p className="line-clamp-3 text-md mt-2">{article.body}</p>
      <div className="flex mt-4 justify-end space-x-2">
        <Link href={`/articles/${article.id}/edit`}>
          <button className="border p-2 text-sm" type="button">
            Edit
          </button>
        </Link>
        <button
          className="border p-2 text-sm"
          type="button"
          onClick={handleClickDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
