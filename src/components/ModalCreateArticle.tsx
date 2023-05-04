"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Modal } from "./Modal";
import { ArticleFormNew } from "./ArticleFormNew";

export function ModalCreateArticle({ isOpen }: { isOpen: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(isOpen);

  return (
    <Modal
      isOpened={open}
      onClose={() => {
        router.back();
        setOpen(false);
      }}
    >
      <div className="text-2xl">New Article</div>
      <ArticleFormNew
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
