"use server"
import prisma from "@/lib/prisma"

export const getTest = async (id: number)=>{
    const test = await prisma.test.findUnique({
        where:{
            id: id
        },
        select:{
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            duration: true,
            type: true,
            questions: true,
            totalFee: true,
            fee: true,
            bountyAmount: true,
            isPremium: true,
            isContest: true,
            paidUsers: true,
        }
    })
    return test;
}
export const getTests = async ()=>{
    const tests = await prisma.test.findMany({
        select:{
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            duration: true,
            type: true,
            questions: true,
            totalFee: true,
            fee: true,
            bountyAmount: true,
            isPremium: true,
            isContest: true,
            paidUsers: true,
            threshold: true,
        }
    })
    return tests;
}