"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { usePosts } from "@/features/posts/hooks/useFetchPosts";
import { PostCard } from "./post-card";

export function PostList() {
  const { data, isPending, isError } = usePosts();

  if (isPending) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }
  if (isError) return <p>Could not load posts.</p>;
  if (data.length === 0) return <p>No posts yet.</p>;

  return (
    <div className="space-y-4">
      {data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}