import { ModalInterception } from "@/components/ModalInterception";
import { ArticleCreateForm } from "@/components/ArticleForm";

import { headers } from 'next/headers';

export default async function ModalNewArticles() {
  return ( 
    <ModalInterception>
      <div className="text-2xl">New Article</div>
      <ArticleCreateForm />
    </ModalInterception>
  );
}
