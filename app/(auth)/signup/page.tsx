"use client";

import { addUser } from "@/actions/user";
import { CheckFeature } from "@/components/CheckFeature";
import { LoginButton } from "@/components/LoginButton";
import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const handleClick = async ()=>{
      try{
        await addUser(name, email);
        console.log("user added")
      }catch(e){
        alert("error adding ttthe user")
        console.log("error adding the user")
      }
    }
    return <div> 
        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl pb-4">
                    Join millions worldwide who automate their work using Zapier.
                    </div>
                    <div className="pb-6 pt-4">
                        <CheckFeature label={"Easy setup, no coding required"} />
                    </div>
                    <div className="pb-6">
                        <CheckFeature label={"Free forever for core features"} />
                    </div>
                    <CheckFeature label={"14-day trial of premium features & apps"} />

                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                    <div className="flex justify-center text-2xl font-bold ">
                        Sign Up
                    </div>
                    <p className="font-thin flex justify-center items-center pt-4 px-12">
                        Solana
                    </p>
                    <div className="pt-4 flex flex-col px-12">
                        <label htmlFor="">Name</label>
                        <input className="border-2 border-blue-500 rounded-lg p-2" type="text" onChange={(e)=>{setName(e.target.value)}}/>
                        <label htmlFor="">Email</label>
                        <input className="border-2 border-blue-500 rounded-lg p-2 mb-4" type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <button className="rounded-lg text-xl p-4 bg-blue-500 text-white" onClick={()=>{handleClick()}}>
                          Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}