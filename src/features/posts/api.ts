import {api} from "@/lib/axios";
import { Post, PostInput, Name, ProfPic } from "./schema";

export async function getPosts(): Promise<Post[]> {
    const { data } = await api.get<Post[]>("/posts", { params: { _limit: 10 } }); 
    return data;
    
}

export async function createPosts(input:PostInput): Promise<Post> {
    const { data } = await api.post<Post>("/posts", {...input, userId: 1}); 
    return data;
    
}

export async function updatePost(id: number, input: Partial<PostInput>): Promise<Post> {
  const { data } = await api.patch<Post>(`/posts/${id}`, input);
  return data;
}

export async function deletePosts(id:number): Promise<void> {
    await api.delete(`/posts/${id}`);

}

export async function getName(): Promise<Name[]> {
    const { data } = await api.get<Name[]>("/users", { params: { _limit: 10 } }); 
    return data;
    
}

export async function getAvatar(): Promise<ProfPic[]> {
    const { data } = await api.get<ProfPic[]>("/photos", { params: { _limit: 10 } }); 
    return data;
    
}
