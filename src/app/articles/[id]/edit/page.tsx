import { eq } from 'drizzle-orm';
import { Suspense } from 'react';

import db, { articles } from "@/db"
import { ArticleForm, ArticleUpdateForm } from "@/components"

import type { Article } from '@/db'

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
  const [article,] = await db.select().from(articles).where(eq(articles.id, articleId)).limit(1)

  return <ArticleUpdateForm article={article} />
}