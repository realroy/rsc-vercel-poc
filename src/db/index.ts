import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";

export * from './schema'

export default drizzle(sql, { logger: true });

