"use client";

import Link from "next/link";

import type { Article } from "@/db";

export type ArticleItemProps = {
  article: Article;
  onClickDelete: (id: Article["id"]) => Promise<void>;
};

export function ArticleItem({ article, onClickDelete }: ArticleItemProps) {
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
          onClick={async (e) => {
            await onClickDelete(article.id);
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
