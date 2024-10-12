"use server"
import prisma from "@/lib/prisma";
import { sendPayment } from "./payout";

export const rewardTopUsers = async (testId: number) => {
    try {
        const test = await prisma.test.findUnique({ where: { id: testId } });
        if(!test?.totalFee)return {success: "false", message: "test id not found"};
        const WinningAmmount = test.totalFee - (test.totalFee / 10);
        const leaderboard = await prisma.leaderboard.findMany({
            where: { testId },
            orderBy: { highestScore: 'desc' },
        });

        const top10PercentCount = Math.ceil(leaderboard.length * 0.1);
        const topUsers = leaderboard.slice(0, top10PercentCount);


        for (const user of topUsers) {
            const userEarning = await prisma.earning.update({
                where: { id: user.userId },
                data: {
                    title: test.title,
                    totalEarnings: {
                        increment: WinningAmmount / top10PercentCount,
                    }
                }
            });
        }

        const deleteTestFee = await prisma.test.update({
            where: { id: testId },
            data: {
                totalFee: 0,
            }
        })
        
        return { success: true, message: "Payments sent to top users." };
    } catch (error) {
        console.error("Error sending payments:", error);
    }
};
