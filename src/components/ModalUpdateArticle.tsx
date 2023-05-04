"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Modal } from "./Modal";
import { ArticleFormUpdate } from "./ArticleFormUpdate";

import type { Article } from "@/db";
import { ArticleForm } from "./ArticleForm";

export type ModalEditArticleProps = {
  isOpen: boolean;
  article: Article;
};

export function ModalUpdateArticle({ isOpen, article }: ModalEditArticleProps) {
  const router = useRouter();
  const [open, setOpen] = useState(isOpen);

  return (
    <Modal
      isOpened={open}
      onClose={() => {
        router.back();
      }}
    >
      <div className="text-2xl">Edit Article</div>
      <ArticleFormUpdate
        article={article}
        onError={(error) => {
          alert(error.message);
        }}
        onSuccess={(newArticle) => {
          router.back();
        }}
      />
    </Modal>
  );
}

export function ModalUpdateArticleLoading({ isOpen }: Pick<ModalEditArticleProps, 'isOpen'>) {
  const router = useRouter();
  const [open, setOpen] = useState(isOpen);

  return (
    <Modal
      isOpened={open}
      onClose={() => {
        router.back();
      }}
    >
      <div className="text-2xl">Edit Article</div>
      <ArticleForm isLoading />
    </Modal>
  );
}
