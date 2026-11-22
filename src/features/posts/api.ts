import { api } from "@/lib/axios";
import type { Post, PostInput } from "@/features/posts/schema";

export async function getPosts(): Promise<Post[]> {
  const { data } = await api.get<Post[]>("/posts", { params: { _limit: 10 } });
  return data;
}

export async function createPost(input: PostInput): Promise<Post> {
  const { data } = await api.post<Post>("/posts", { ...input, userId: 1 });
  return data;
}

export async function updatePost(id: number, input: Partial<PostInput>): Promise<Post> {
  const { data } = await api.patch<Post>(`/posts/${id}`, input);
  return data;
}

export async function deletePost(id: number): Promise<void> {
  await api.delete(`/posts/${id}`);
}