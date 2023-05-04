import Image from 'next/image'
import { sql } from "@vercel/postgres";
import { Inter } from 'next/font/google'
import db, { articles } from '@/db';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const res = await db.select().from(articles)
  return (
    <main>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(res)}</pre>
    </main>
  )
}
