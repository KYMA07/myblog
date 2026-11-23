import { Lateef } from "next/font/google";
import {z} from "zod";

export type PostInput = z.infer<typeof postSchema>
export const postInput =z.object(
    {
        title:z.string(),
        body: z.string()
    }
)

export type Post = z.infer<typeof postSchema>
export const postSchema = postInput.extend({
    userId: z.number(),
    id: z.number(),

})

export type Name = z.infer<typeof nameSchema>
export const nameSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.email(),
    address:z.object({
        street:z.string(),
        suite: z.string(),
        city: z.string(),
        zipcode: z.number(),
        geo: z.object({
            lat: z.number(),
            lng : z.number()   
        })
    }),
    phone:z.number(),
    website:z.string(),
    company:z.object({
        name:z.string(),
        catchphrase:z.string(),
        bs:z.string()
    }),
})


export type ProfPic = z.infer<typeof avatarSchema>
export const avatarSchema = z.object({
    albumId: z.number(),
    id: z.number(),
    title: z.string(),
    url:z.httpUrl(),
    thumbnailUrl:z.httpUrl()
    })
