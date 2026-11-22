import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { ThumbsUp, MessageCircle, SquareArrowUpRightExit } from "lucide-react";
import type { Post } from "@/features/posts/schema";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>{post.body}</CardContent>
      <CardFooter>
        <CardAction>
          <button><ThumbsUp /> like</button>
          <button><MessageCircle /> comment</button>
          <button><SquareArrowUpRightExit /> Share</button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}