import { ModalInterception, ArticleCreateForm } from "@/components";

export default async function ModalNewArticles() {
  return (
    <ModalInterception>
      <div className="text-2xl">New Article</div>
      <ArticleCreateForm />
    </ModalInterception>
  );
}
