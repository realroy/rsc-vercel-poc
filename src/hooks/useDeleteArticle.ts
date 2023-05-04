import { useMutation } from "@tanstack/react-query";

import { Article } from "@/db";

export function useDeleteArticle() {
  const { mutateAsync, ...rest } = useMutation({
    mutationFn: async (id: Article['id']) => {
      const res = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error('Something went wrong')

      const json = await res.json()

      return json
    },
  });

  return {
    ...rest,
    deleteArticle(id: Article['id']) {
      return mutateAsync(id)
    },
  };
}
