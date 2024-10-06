"use client";

import { CheckFeature } from "@/components/CheckFeature";
import { LoginButton } from "@/components/LoginButton";
import GoogleAuthButton from "@/components/ui/Buttons/GoogleAuthButton";

export default function Login() {
    
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
                        OAuth For Blog Auttomation
                    </div>
                    <p className="font-thin flex justify-center items-center pt-4 px-12">
                        For your blog automation the only thing neccessary is your signin, Unlock the power of automated blogging, Streamline your content, amplify your reach
                    </p>
                    <div className="pt-20 mx-8">
                        <GoogleAuthButton/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}