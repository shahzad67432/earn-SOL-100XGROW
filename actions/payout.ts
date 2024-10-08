import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";

export const sendPayment = async (connection: Connection, recipientPublicKey: string, amountToSend: number) => {
  const LAMPORTS_PER_SOL = 1000000000;

  // Use a more secure method to retrieve the admin keypair
  const adminKeypair = getAdminKeypair();

  const adminPublicKey = new PublicKey("87WhJkcm11yX5WsRw6mYDodayg6oFBr69rfFpZh4uxE9");
  const recipientPubKey = new PublicKey(recipientPublicKey);
  const amount = amountToSend * LAMPORTS_PER_SOL;

  console.log("Recipient Public Key:", recipientPublicKey, "Admin Public Key:", adminPublicKey.toString());

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: adminPublicKey,
      toPubkey: recipientPubKey,
      lamports: amount,
    })
  );

  try {
    const signature = await sendAndConfirmTransaction(connection, transaction, [adminKeypair]);
    console.log("Payment sent successfully", signature);
    return signature;
  } catch (error) {
    console.error("Error sending transaction:", error);
    throw new Error("Failed to send payment. Please check your connection and try again.");
  }
};

function getAdminKeypair(): Keypair {
  const adminKeyPairString = process.env.ADMIN_KEY_PAIR;
  if (!adminKeyPairString) {
    throw new Error("ADMIN_KEY_PAIR environment variable is not set");
  }

  try {
    const adminKeyPairArray = Uint8Array.from(Buffer.from(adminKeyPairString, 'base64'));
    return Keypair.fromSecretKey(adminKeyPairArray);
  } catch (error) {
    console.error("Error parsing admin keypair:", error);
    throw new Error("Invalid ADMIN_KEY_PAIR format");
  }
}