import { Suspense } from "react";

import { ModalUpdateArticle, ModalUpdateArticleLoading } from "@/components/ModalUpdateArticle";
import { ArticleRepository } from "@/repositories/article-repository";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<ModalUpdateArticleLoading isOpen />}>
      {/* @ts-expect-error Server Component */}
      <ModalWrapper id={params.id} />
    </Suspense>
  );
}

async function ModalWrapper({ id }: { id: PageProps["params"]["id"] }) {
  const article = await ArticleRepository.findById(+id);

  return <ModalUpdateArticle isOpen article={article} />;
}
