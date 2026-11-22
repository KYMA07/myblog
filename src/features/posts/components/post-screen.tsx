"use client";

import { PostList } from "./post-list";

export function PostsScreen() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4">
      <PostList />
    </div>
  );
}