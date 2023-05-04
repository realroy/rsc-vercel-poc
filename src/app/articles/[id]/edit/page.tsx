import { Suspense } from 'react';

import { ArticleRepository } from '@/repositories/article-repository';
import { ArticleForm } from "@/components/ArticleForm"

import type { Article } from '@/db'
import { ArticleFormUpdate } from '@/components/ArticleFormUpdate';

type PageArticlesEditProps = {
  params: {
    id: string
  }
}

export default async function PageArticlesEdit({ params }: PageArticlesEditProps) {
  return (
    <main>
      <h1>Edit {params.id}</h1>
      <Suspense fallback={<ArticleForm isLoading />}>
        {/* @ts-expect-error Server Component */}
        <ArticleFormWrapper articleId={+params.id} />
      </Suspense>
    </main>
  )
}

type ArticleFormWrapperProps = {
  articleId: Article['id']
}

async function ArticleFormWrapper({ articleId }: ArticleFormWrapperProps) {
  const article = await ArticleRepository.findById(articleId)

  return <ArticleFormUpdate article={article} /> 
}