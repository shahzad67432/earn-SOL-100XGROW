"use server"
import prisma from "@/lib/prisma";
import { sendPayment } from "./payout";
import { getUser } from "./user";
import { Connection, PublicKey } from "@solana/web3.js";

export const sendPerEarningAction = async ({publicKey, email, prize, earningId}:{publicKey: string, email: string, prize: any, earningId: number})=>{
    console.log("publickey from server: " + JSON.stringify(publicKey))
    const connection = new Connection("https://api.devnet.solana.com")
    const user = await getUser(email);
    if(!user){
        console.log("User not found", user)
        return;
    };
    try{
        const signature = await sendPayment(connection, publicKey, prize)
        await prisma.earning.delete({
            where: { id: earningId },
        });
        console.log(`payement sent to user for its earning`);
        {signature && console.log(signature)}
        return signature;
    }catch(err){
        console.error('Error updating user earning: and sending payment', err);
    }
}