import { useQuery } from "@tanstack/react-query";
import {Post, postSchema} from "@/features/posts/schema";
import {getPosts} from "@/features/posts/api";
import { queryKey, POSTS_QUERY_KEYS } from "@/features/posts/constant";

export function useFetchPosts(){
  return useQuery({
    queryKey: POSTS_QUERY_KEYS.all,
    queryFn: getPosts,
    staleTime: Infinity,
  });
}
// ddue whatr the furk is wrong with ya
