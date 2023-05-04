'use client'

import { useArticles } from "@/hooks/useArticles";
import { useState, type ComponentPropsWithRef } from "react";

export type ArticleSearchProps = ComponentPropsWithRef<"form"> & {
  query?: string;
};

export function ArticleSearch({
  query: initialQuery,
  ...props
}: ArticleSearchProps) {
  const [query, setQuery] = useState(initialQuery)
  const { isLoading } = useArticles({ query })
  
  return (
    <form
      {...props}
      className="py-4"
    >
      <input
        type="search"
        name="query"
        value={query}
        onChange={(e) => {
          e.preventDefault()
          setQuery(e.currentTarget.value.trim())
        }}
        disabled={isLoading}
        className="bg-slate-100 w-full rounded-md p-2"
      />
    </form>
  );
}
