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
import { Label } from "@/components/ui/label";
 import type { Post, Name, ProfPic } from "../schema";
 import {AvatarAnimated} from "@/components/avatar-stack-animate-1"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AvatarStack } from "@/components/kibo-ui/avatar-stack";
// should prob fetc avatar and usernames 
// avatar and username or crud???

interface postCardProps{
    post:Post,
    name?:Name,
    avatar:ProfPic
}
  export function PostsCard({post,name, avatar}: postCardProps) {
    const like = Math.floor(Math.random() * 100) + 1;   
    return(
       <div className="mx-auto max-w-2xl space-y-4 p-4">
            <div>     
                <Card  className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0 p-2 pt-6">
                     {/* key={post.id}  */}
                    <CardHeader className="gap-2 " >
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={avatar.url} alt={name?.username ?? "User"} />
                            </Avatar>
                            <Label className="text-lg leading-snug font-semibold text-balance" htmlFor="title">{name?.username}</Label>    
                        </div>
                        <CardTitle className="text-lg leading-snug font-semibold text-balance"> {post.title} </CardTitle>
                    </CardHeader>
                    <CardContent className="line-clamp-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                           {post.body} 
                    </CardContent>
                    <CardFooter className="gap-2 justify-end">
                            <Button variant="outline" size="sm">
                                <ThumbsUp /> like {like}
                            </Button>
                            <AvatarAnimated/>
                            <Button variant="outline" size="sm">
                                <MessageCircle /> comment
                            </Button>
                            <Button variant="outline" size="sm">
                                <SquareArrowUpRightExit /> Share
                            </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )}


//<3 uhbubhuhb
