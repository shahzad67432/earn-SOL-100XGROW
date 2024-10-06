"use server"
require('dotenv').config();
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";

export const sendPayment = async (connection: Connection, publicKey: string, amountToSend: number) => {
  const LAMPORTS_PER_SOL = 1000000000;
  
  
  //@ts-ignore
  const ADMIN_KEY_PAIR_STRING = process.env.ADMIN_KEY_PAIR;
  if (!ADMIN_KEY_PAIR_STRING) {
    throw new Error("AdminKeypair environment variable not set");
  }
  
  const ADMIN_KEY_PAIR_ARRAY = ADMIN_KEY_PAIR_STRING.split(',').map(Number);
  
  // Ensure the array has the correct length (64 bytes)
  if (ADMIN_KEY_PAIR_ARRAY.length !== 64) {
    throw new Error("AdminKeypair must be 64 bytes long");
  }
  const AdminKeypair = Keypair.fromSecretKey(Uint8Array.from(ADMIN_KEY_PAIR_ARRAY));

  
  const AdminPublicKey = new PublicKey("87WhJkcm11yX5WsRw6mYDodayg6oFBr69rfFpZh4uxE9");
  const userPublicKey = new PublicKey(publicKey)
  console.log(userPublicKey, "userPublicKey")
  const amount = amountToSend * LAMPORTS_PER_SOL;
  console.log("publicKey: ", publicKey?.toString(), "Admin Public Key: ", AdminPublicKey.toString());
  if (!publicKey) {
    alert("Please connect your wallet");
    return;
  }
  
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: AdminPublicKey,
      toPubkey: userPublicKey,
      lamports: amount,
    })
  );

  try {
    console.log("connection: ",connection, "send Transaction :")
    const signature = await sendAndConfirmTransaction(connection, transaction, [AdminKeypair]);
    console.log("Payment sent successfully", signature);
    return signature;
  } catch (error) {
    console.error("Error sending transaction:", error);
    alert("Failed to send payment. Please check your connection and try again.");
  }
};
