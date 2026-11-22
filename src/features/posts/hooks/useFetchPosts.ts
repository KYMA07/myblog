import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/features/posts/api";
import { postKeys } from "@/features/posts/constants";

export function usePosts() {
  return useQuery({
    queryKey: postKeys.all,
    queryFn: getPosts,
    staleTime: Infinity,
  });
}