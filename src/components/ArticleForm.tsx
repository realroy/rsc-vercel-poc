"use client";

import { useRouter } from "next/navigation";

import type { Article } from "@/db";
import type { ComponentPropsWithoutRef } from "react";
import { useCreateArticle, useUpdateArticle } from "@/hooks";

export type ArticleFormData = {
  id?: Article["id"];
  title: Article["title"];
  body: Article["body"];
};

export type ArticleFormProps = Omit<
  ComponentPropsWithoutRef<"form">,
  "onSubmit"
> & {
  article?: Article;
  isLoading?: boolean;
  onSubmit?: (data: ArticleFormData) => Promise<unknown>;
};

export function ArticleForm({
  article,
  onSubmit,
  isLoading,
  ...props
}: ArticleFormProps) {
  const router = useRouter();

  const isSubmitDisabled = (!onSubmit || isLoading) ?? false;

  return (
    <form
      {...props}
      onSubmit={async (e) => {
        e.preventDefault();
        if (!onSubmit) {
          return;
        }

        const formData = new FormData(e.currentTarget);

        try {
          await onSubmit({
            id: +(formData.get("articleId") ?? NaN) || undefined,
            title: formData.get("title") as string,
            body: formData.get("body") as string,
          });

          router.push("/articles");
        } catch (error) {
          alert(JSON.stringify(error));
        }
      }}
    >
      <input type="hidden" name="articleId" defaultValue={article?.id} />
      <p className="py-1">
        <label htmlFor="title" className="text-md">Title</label>
        <input
          type="text"
          name="title"
          className="bg-slate-100 w-full"
          required
          disabled={isLoading}
          defaultValue={article?.title ?? ""}
        />
      </p>
      <p className="py-1">
        <label htmlFor="title" className="text-md">Body</label>
        <textarea
          className="bg-slate-100 w-full"
          name="body"
          cols={30}
          rows={10}
          disabled={isLoading}
          defaultValue={article?.body ?? ""}
        ></textarea>
      </p>
      <input
        type="submit"
        value="Submit"
        disabled={isSubmitDisabled}
        className="disabled:cursor-not-allowed bg-slate-100 py-2 px-4"
      />
    </form>
  );
}

export function ArticleCreateForm() {
  const { createArticle } = useCreateArticle();

  return (
    <div>
      <ArticleForm onSubmit={createArticle} />
    </div>
  );
}

export function ArticleUpdateForm({ article }: { article: Article }) {
  const { updateArticle } = useUpdateArticle();

  return <ArticleForm article={article} onSubmit={updateArticle} />;
}
