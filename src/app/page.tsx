import Image from 'next/image'
import { sql } from "@vercel/postgres";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const { rows } = await sql`SELECT (1+1)`;
  return (
    <main>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(rows)}</pre>
    </main>
  )
}
