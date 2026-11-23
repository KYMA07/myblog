'use client';

import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchNames, useFetchAvatar } from "../hooks/useFetchUser";
import { PostListSkeleton } from "./posts-list-skeleton";
import { PostsCard } from "./posts-card";

export function PostList() {
  const {
    data: postData,
    isLoading: postLoading,
    isError: postError,
  } = useFetchPosts();

  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useFetchNames();

  const {
    data: picData,
    isLoading: picLoading,
    isError: picError,
  } = useFetchAvatar();

  if (postLoading || userLoading ||picLoading) return <PostListSkeleton />;

  if (postError || userError ||picError) return <p>Error loading posts.</p>;

  if (!userData || !postData ||!picData) return null;

  const usersMap = new Map(
  userData.map((user) => [user.id, user])
);
const picMap = new Map(
  picData.map((avatar) => [avatar.id, avatar])
);

return (
  <div className="space-y-4">
    {postData.map((post) => (
      <PostsCard
        key={post.id}
        post={post}
        name={usersMap.get(post.id)}
        avatar={
        picMap.get(post.id) ?? {
            albumId: 0,
            id: 0,
            title: "Default avatar",
            url: "/default-avatar.png",
            thumbnailUrl: "/default-avatar.png",
        }
        }
      />
    ))}
  </div>
);
}//fuckin name br
