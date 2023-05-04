import { InferModel } from 'drizzle-orm';
import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

const timestamps = {
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
  deletedAt: timestamp('deleted_at'),
}

export const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  title: varchar('title'),
  body: text('body'),
  ...timestamps
});

export type Article =  InferModel<typeof articles, 'select'>;
export type CreateArticle =  InferModel<typeof articles, 'insert'>;