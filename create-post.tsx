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
import { Controller, useForm } from "react-hook-form";
 import { type Post, type Name, type ProfPic, type PostInput, postInputSchema } from "../schema";
 import { zodResolver } from "@hookform/resolvers/zod"
 import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"
import {z} from "zod"


  export function PostForm() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postInputSchema),
    defaultValues: {title:"", body:""}
  })

  const form=useForm({
    resolver: zodResolver(postInputSchema),
    defaultValues: {title:"", body:""}
  })
   const onSubmit = (data: z.infer<typeof postInputSchema>) => {
   
  };
    return(
        <div className="mx-auto max-w-2xl space-y-4 p-6 ">
            <div>     
                <Card  className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0m p-2 pt-4">
                    <CardTitle className="text-lg leading-snug font-semibold text-balance space-y-4" > 
                            <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={"https://imgs.search.brave.com/4lZ7Gt3q5bs_DrxYuiyR4M14f1oT43bD-R-WMiWRgOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1L2Nm/L2Q3L2E1Y2ZkN2Rl/ZDAwNmYwOGNlMzFk/Y2FkZWFjOGQ4Yjgx/LmpwZw"} />
                            </Avatar>
                            <Label className="text-lg leading-snug font-semibold text-balance" htmlFor="title">Karina</Label>    
                            </div>
                        </CardTitle>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller
                            control={form.control}
                            name="title"
                            render={({field, fieldState})=>(
                                <Field data-invalid={fieldState.invalid}>
                                    {/* <FieldLabel htmlFor="title"> title</FieldLabel> */}
                                    <Input {...field} autoComplete="off" id="title" placeholder="Post title"/>
                                    {/* <FieldDescription>Between 5 and 50 characters.</FieldDescription> */}
                                    <FieldError>{fieldState.error?.message}</FieldError>
                                </Field>
                            )}
                            />
                            <Controller
                            control={form.control}
                            name="title"
                            render={({field, fieldState})=>(
                                <Field data-invalid={fieldState.invalid}>
                                <div className="flex items-center justify-between">
                                    {/* <FieldLabel htmlFor="body">Message</FieldLabel> */}
                                     {/* <span className="text-muted-foreground text-xs">0/500</span> */}
                                </div>
                                <Textarea
                                    id="body"
                                    placeholder="whats on your mind"
                                    className="min-h-[120px]"
                                />
                                <FieldError>{fieldState.error?.message}</FieldError>
                                <FieldDescription>
                                    {/* wla ako maisip pa  */}
                                </FieldDescription>
                                </Field>
                            )}
                            />
                            <CardFooter className="gap-2 justify-end">
                            <Button type="submit" variant="outline" size="lg">
                                <Send /> Post
                            </Button>
                            </CardFooter>
                        </FieldGroup>
                    </form>

                </Card>
            </div>
        </div>
    )}
