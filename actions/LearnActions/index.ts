"use server"

import prisma from "@/lib/prisma"

export const getLearningContent = async () =>{
    try{
        const learn = await prisma.learn.findMany({})
        console.log(learn)
        return {
            learn,
            success: true
        }
    }catch(e){
        return {success: false}
    }
}

export const getPerPostLearningContent = async (id: number) =>{
    try{
        const learn = await prisma.learn.findUnique({
            where:{
                id: id
            }
        })
        console.log(learn)
        return {
            learn,
            success: true
        }
    }catch(e){
        return {success: false}
    }
}