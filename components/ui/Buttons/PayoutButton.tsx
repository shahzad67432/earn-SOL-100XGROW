"use client"
import { payUserForViews } from '@/actions/viewsEarning';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

const PayoutButton = () => {
    const {publicKey} = useWallet();
    const [response, setResponse] = useState<null | string>();
    const [loading, setLoading] = useState(false);
    const [amountToSend, setAmountToSend] = useState(0.005);
    const connection = new Connection("https://api.devnet.solana.com");
    const {data: session} = useSession();
    const email = session?.user?.email || "shaa1891640@gmail.com";
    const handlePayment = async () => {
        if (!publicKey) {
          alert("Please connect your wallet.");
          return;
        }
        setLoading(true);
        try {
          // const signature = await sendPayment(connection, publicKey, amountToSend);
          const signature = await payUserForViews(email);
          {
            signature && console.log("Payment successful:", signature);
          }
          setResponse("Success");
          setTimeout(() => {}, 8000);
          setResponse(null);
        } catch (error) {
          console.error("Failed to send payment:", error);
          setResponse("Failed");
        } finally {
          setLoading(false);
        }
      };
  return (
    <div>
        <button
            className="text-sm font-semibold text-[#512da8] flex justify-center items-center hover:text-white w-full h-full"
            onClick={(e) => handlePayment()}
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : response
              ? response
              : `Payout: ${amountToSend} SOL`}
        </button>
    </div>
  )
}

export default PayoutButton