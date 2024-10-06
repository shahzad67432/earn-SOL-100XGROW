"use client"
import { useRouter } from "next/navigation";
import { sendPayment } from "@/actions/payout";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LoginButton } from "@/components/LoginButton";

export default function Home() {
  const router = useRouter();
  const {publicKey, sendTransaction} = useWallet();
  const connection = useConnection();
  return (
    <>
      <div onClick={()=>{router.push('/dashboard')}} className="flex flex-col justify-center items-center font-bold text-3xl text-red-700 w-full h-screen">
        <h1 className="hover:shadow-md hover:text-6xl cursor-pointer rounded-md">
          Landing page
        </h1>
        <p className="text-pink-600">
          Earn <span className="text-red-700">SOLANA </span>/ micro payemnts through writting blogs.
        </p>
        <LoginButton/>
        <div>
        </div>
      </div>
      <button onClick={()=>{
        
      }}>
        Payout
      </button>
    </>
  );
}
