"use server"
import prisma from "@/lib/prisma";
import { getUser } from "./user";
import { Connection, PublicKey } from "@solana/web3.js";

export const payUserForViews = async ( email : string) => {
    // Fetch the user based on the email
    const user = await getUser(email);
    if (!user) {
        console.log("User not found", user);
        return {
            success: false,
            message: "User not found"
        };
    }

    // Calculate the number of views to pay for
    const paidViews = user.views - user.previous_views;
    if (paidViews <= 10000) {
        console.log("No new views to process or no of views are less then 10k", paidViews, user.views, user.previous_views);
        return {
            success: false,
            message: "No new views to process/ les than 10k views"
        };
    }

    // Calculate the earnings (assuming 0.000001 per view)
    const earning = paidViews * 0.000001;

    try {
        // Update the user's previous_views and create a new Earning record
        await prisma.$transaction([
            // Update the user's previous_views field
            prisma.user.update({
                where: { id: user.id },
                data: {
                    previous_views: user.views // Set to the current views
                }
            }),

            // Create a new Earning entry for the user
            prisma.earning.create({
                data: {
                    userId: user.id,
                    title: `${paidViews} views earning`,
                    totalEarnings: earning
                }
            })
        ]);

        console.log(`Payment sent successfully for ${paidViews} views`);
        return {
            success: true,
            message: "Payment sent successfully"
        };
    } catch (err) {
        console.error('Error updating user views and sending payment', err);
        return {
            success: false,
            message: "Error updating user views and sending payment"
        };
    }
}
