'use client';

import { Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent } from "@/components/ui/card";
  import {Button} from "@/components/ui/button";
  import {Textarea} from "@/components/ui/textarea";
  import {Input} from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
import {  Send   } from 'lucide-react';
import { Avatar, AvatarImage} from "@/components/ui/avatar"
 

  export function CreatePost() {
    return(
       <div className="mx-auto max-w-2xl space-y-4 p-6 ">
            <div>     
                <Card  className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0m p-2 pt-4">
                    {/* key={post.id} */}
                    <CardHeader >
                        <CardTitle className="text-lg leading-snug font-semibold text-balance space-y-4" > 
                            <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={"https://imgs.search.brave.com/4lZ7Gt3q5bs_DrxYuiyR4M14f1oT43bD-R-WMiWRgOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1L2Nm/L2Q3L2E1Y2ZkN2Rl/ZDAwNmYwOGNlMzFk/Y2FkZWFjOGQ4Yjgx/LmpwZw"} />
                            </Avatar>
                            <Label className="text-lg leading-snug font-semibold text-balance" htmlFor="title">Karina</Label>    
                        </div>
                            <Input id="title" placeholder="Post title" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="line-clamp-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                        <Textarea placeholder="Write something." />
                    </CardContent>
                    <CardFooter className="gap-2 justify-end">
                            <Button variant="outline" size="lg">
                                <Send /> Post
                            </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )}
