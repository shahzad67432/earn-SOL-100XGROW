"use server"
import prisma from "@/lib/prisma"

export const getEarning = async (userId: number) => {
    const totalViews = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            views: true,
        },
    });

    if (!totalViews) return { success: false };

    const earnings = await prisma.earning.findMany({
        where: {
            userId: userId,  // Update here to use userId
        },
    });

    if (!earnings || earnings.length === 0) return { success: true, earnings: [] };

    let totalEarning = 0.0;
    earnings.forEach((er) => {
        totalEarning += er.totalEarnings;
    });

    let blogsEarning = 0;
    if (totalViews.views >= 5000) {  // Fix views check
        blogsEarning = totalEarning - totalViews.views * 0.00001;
    }

    return {
        success: true,
        totalEarning,
        earnings,
        blogsEarning,
        totalViews: totalViews.views,
    };
};

export const getUserBlogs = async(userId: number)=>{
    const posts = await prisma.post.findMany({
        where:{
            userId: userId
        }
    })
    return posts
}

export const getAllPosts = async()=>{
    const posts = await prisma.post.findMany({})
    return posts;
}