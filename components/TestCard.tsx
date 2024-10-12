"use client"
import { handleTestPayment } from "@/actions/testPayment";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import React, { useState } from "react";
import RewardTopUsers from "./ui/Buttons/RewardTopUsers";
import AuthModal from "./AuthModal";
import { deductTheCharityAmmount } from "@/actions/contestActions";

interface TestCardProps {
  title: string;
  description: string;
  imageUrl: string;
  questions: number;
  duration: number; // in minutes
  type: string;
  isPremium: boolean;
  premiumAccess: boolean;
  testId: number;
  userId: number;
  fee: any;
  paidUsers: number;
  isContest: boolean;
  isAdmin: boolean;
  totalFee: number;
  threshold: number;
  onClick: () => void;
}

const TestCard: React.FC<TestCardProps> = ({
  imageUrl,
  paidUsers,
  fee,
  totalFee,
  testId,
  userId,
  premiumAccess,
  isPremium,
  title,
  questions,
  duration,
  isAdmin,
  isContest,
  threshold,
  type,
  onClick,
}) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  async function makePayment() {
    const testFee = fee * 1000000000;
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey!,
        toPubkey: new PublicKey(
          "2KeovpYvrgpziaDsq8nbNMP4mc48VNBVXb5arbqrg9Cq"
        ),
        lamports: testFee,
      })
    );
    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext();
    const signature = await sendTransaction(transaction, connection, {
      minContextSlot,
    });
    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature,
    });
  }

  const handleTestPaymentClick = async () => {
    try {
      if(!publicKey){
        return alert("Please connect your wallet first")
      }
      await makePayment();
      const charityAmmount = fee / 10;
      await deductTheCharityAmmount(charityAmmount);
      const response = await handleTestPayment(userId, testId);
      if (response?.success) {
        alert("Payment successful. You can start the test now. User status updated.");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  const handleButtonClick = () => {
    if (userId === undefined) {
      console.log(userId, "userId is :")
      setIsAuthModalOpen(true);
    } else if (isPremium && !premiumAccess) {
      handleTestPaymentClick();
    } else {
      onClick();
    }
  };


  
  return (
    <>
      <div className="relative flex flex-col justify-between border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-sm w-full cursor-pointer overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        ></div>

        {/* Overlay for content */}
        <div className="relative z-10 bg-gradient-to-t from-black to-transparent p-4 h-full flex flex-col justify-between">
          {/* Test Title and Bounty */}
          <div>
            <h2 className="text-lg font-bold text-white">{title}</h2>
            {isPremium ? (
              <span className="mt-2 inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Bounty: {fee * paidUsers} SOL
              </span>
            ): isContest ? (
              <span className="mt-2 inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {threshold}
              </span>
            ): null}
          </div>

          {/* Questions, Duration */}
          <div className="text-gray-200 mt-4">
            <p className="text-sm">
              <span className="font-bold text-green-400">Questions:</span> {questions}
            </p>
            <p className="text-sm">
              <span className="font-bold text-green-400">Duration:</span> {duration} minutes
            </p>
          </div>

          {/* Button to Pay/Start */}
          <div className="mt-6">
            {paidUsers < 20 ? (
              <div>
                {isPremium && premiumAccess ? (
                  <button
                    className="bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 transition-colors"
                    onClick={handleButtonClick}
                  >
                    Start Test
                  </button>
                ) :
                  isContest && threshold < 0.01 ? (
                    <button
                      className="bg-gray-600 text-white py-2 px-4 rounded-md shadow hover:bg-gray-700 transition-colors"
                    >
                      threshold: {threshold}
                    </button>
                  ) : isContest && threshold == 0.01 ? (
                    <button
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow hover:bg-yellow-600 transition-colors"
                    onClick={handleButtonClick}
                    >
                      Start Test
                    </button>
                  )
                :
                !isPremium ? (
                  <button
                    className="bg-gray-600 text-white py-2 px-4 rounded-md shadow hover:bg-gray-700 transition-colors"
                    onClick={handleButtonClick}
                  >
                    Start Test
                  </button>
                ) : isPremium && !premiumAccess ? (
                  <button
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow hover:bg-yellow-600 transition-colors"
                    onClick={handleButtonClick}
                  >
                    Pay SOL
                  </button>
                ): null}
              </div>
            ): 
              <div>
                {
                  isPremium && isAdmin && totalFee != 0 ? (
                    <RewardTopUsers testId={testId}/>
                  ) : isPremium && totalFee === 0 && paidUsers > 0 ?   
                  <button
                    className="bg-gray-600 text-white py-2 px-4 rounded-md shadow hover:bg-gray-700 transition-colors"
                  >
                    Bounty Sent
                  </button>
                  : null
                }
              </div>
            }
          </div>
        </div>
      </div>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default TestCard;
