"use server"
import prisma from "@/lib/prisma";

// Handle test payment and user premium access
export const handleTestPayment = async (userId: number, testId: number) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        const test = await prisma.test.findUnique({ where: { id: testId } });
        if(!test?.fee) return {message: "test not found", success: false}
        if (!test?.isPremium && !user) {
            return {message: "payment unsuccessful", success: false}
        }
        await prisma.user.update({
            where: { id: userId },
            data: { premiumAccess: true }
        });

        await prisma.test.update({
            where: { id: testId },
            data: { totalFee: {
                increment: test?.fee,
            },
                paidUsers:{
                    increment: 1
                }
            }
        });

        return { success: true, message: "Payment successful. Premium access granted." };
    } catch (error) {
        console.error("Error handling test payment:", error);
    }
};
