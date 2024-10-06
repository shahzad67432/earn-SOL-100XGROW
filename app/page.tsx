"use client"
import { useRouter } from "next/navigation";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import LandingPage1 from "@/components/landing/Section1";
import LandingPage2 from "@/components/landing/Section2";
import LandingPage3 from "@/components/landing/Section3";
import HeroSection from "@/components/landing/HeroSection1";
import HowItWorksQuizzes from "@/components/landing/HowItWorksSection";
import HowItWorksBlogs from "@/components/landing/HowItWorksSection2";
import HowItWorksQuizzes11 from "@/components/landing/HowItWorksSection11";
import LeaderboardSection from "@/components/landing/LeaderBoardSection";
import LearnSection from "@/components/landing/LearnSection";
import ProfileDashboardSection from "@/components/landing/ProfileSection";
import HIWS from "@/components/landing/HIWS";

export default function Home() {
  return (
    <>
      <div className="bg-green-50">
        <HeroSection/>
        <HowItWorksQuizzes11/>
        <LeaderboardSection/>
        <LearnSection/>
        <ProfileDashboardSection/>
      </div>
    </>
  );
}
