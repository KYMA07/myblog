'use client';

import { Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent } from "@/components/ui/card";
  import {Button} from "@/components/ui/button";
import { ThumbsUp, MessageCircle, SquareArrowUpRightExit   } from 'lucide-react';
import { PostList } from "./posts-list";

  export function PostsScreen() {
    return(
       <div className="mx-auto max-w-2xl space-y-2 p-4">
            <PostList/>
        </div>
    )}
