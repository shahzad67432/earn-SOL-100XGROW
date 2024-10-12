"use server"
import prisma from "@/lib/prisma"

export const createTest = async ({
    title,
    description: desc,
    duration,
    questions,
    threshold,
    type,
    imageUrl
}:any) => {
    try{
        const durationValue = parseInt(duration)
        await prisma.test.create({
            data:{
                title,
                description: desc,
                duration: durationValue,
                questions,
                threshold,
                isContest: true,
                type,
                imageUrl
            }
        })
        return {
            success: true,
            message: "Test created successfully"
        };
    }catch(e){
        console.log(e,"test not created 500");
        return {
            success: false,
            message: "Test not created"
        }
    }
}

export const deductTheCharityAmmount = async(charityAmmount: number)=>{
    try{
        await prisma.test.updateMany({
            where:{
                isContest: true,
            },
            data:{
                threshold: {
                    increment: charityAmmount
                }
            }
        })
        return {
            success: true,
            message: "Charity amount deducted successfully"
        }
    }catch (e) {
        console.log(e,"charity amount not deducted 500");
        return {
            success: false,
            message: "Charity amount not deducted"
        }
    }
}