CREATE TABLE IF NOT EXISTS "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"body" text,
	"created_at" timestamp,
	"updated_at" timestamp,
	"deleted_at" timestamp
);
