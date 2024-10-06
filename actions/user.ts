"use server"

import { getServerSession } from "next-auth";
import { getPostViews } from "./postsData";
import { sendPayment } from "./payout";
import { Connection, PublicKey } from "@solana/web3.js";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getValidAccessToken } from "@/lib/actions";


export const addUser = async (userName: string, email: string)=>{
    try{
        const user = await prisma.user.create({
            data: {
                name: userName,
                email: email,
            },
        })
        return user;
    }catch(err){
        console.error('Error adding user:', err);
    }
}
export const getUser = async (email: string)=>{
    try{
        const user = await prisma.user.findUnique({
            where:{
                email: email,
            }
        })
        console.log("user", user)
        return user;
    }catch(err){
        console.error('Error getting user:', err);
    }
}

export const addPostAction = async (urlToFetchViews: string, postTitle: string, postUrl: string, email: string, imageUrl: string) => {
    const user = await getUser(email);
    if (!user) {
        return {
            success: false,
            message: "User not found"
        };
    }
    
    try {
        const newPost = await prisma.post.create({
            data: {
                urlToFetchViews,
                postUrl,
                title: postTitle,
                imageUrl,
                userId: user.id,
            }
        });
        console.log(`Post added: ${newPost.id}`);
        return {
            newPost,
            success: true,
            message: "Post added successfully"
        };
    } catch (error) {
        console.error('Error adding post:', error);
        return {
            success: false,
            message: "Error adding post to database"
        };
    }
};


export const getViewsAndAddUserPostViews = async(email: string)=>{
    let views = 0;
    const user = await getUser(email);
    console.log("user", user)
    const posts = await prisma.post.findMany({
        where:{
            userId: user?.id,
        }
    })
    const token = await getValidAccessToken()
    posts.map(async (post)=>{
        const urlToFetchViews = post.urlToFetchViews
        const postView = await getPostViews(urlToFetchViews, token)
        views += postView;
    })
    try {
        const user = await getUser(email);
        await prisma.user.update({
            where: { id: user?.id },
            data: {
                views: views 
            }
        });
        console.log(`Total views for user: ${views}`);
        return views;
    } catch (error) {
        console.error('Error updating views:', error);
        return 0;
    }
}



