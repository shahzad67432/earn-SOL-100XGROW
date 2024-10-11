import TestPage from "@/components/TestPage";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto p-4">
        {/* Welcome message */}
        <div className="relative container mx-auto">
          <img
            src="https://img.freepik.com/free-vector/vr-metaverse-isometric-colored-composition_1284-68383.jpg?t=st=1728048075~exp=1728051675~hmac=0810878f334452e56e86e60801219421e363f8e60417625a21afae1bb10241cb&w=2000"
            alt="Welcome Image"
            className="w-full h-[200px] sm:h-[300px] rounded-xl object-cover"
          />
          {/* Uncomment and adjust if you want to add the welcome text overlay
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg text-center">
              Welcome to SOLANA Quiz
            </h2>
          </div>
          */}
        </div>

        {/* Render the two test categories */}
        <h1 className="text-2xl sm:text-3xl font-semibold mt-6 sm:mt-8 px-4 sm:px-8 opacity-65">Premium Tests</h1>
        <TestPage type="premium" />

        <h1 className="text-2xl sm:text-3xl font-semibold mt-6 sm:mt-8 px-4 sm:px-8 opacity-65">Basic Tests</h1>
        <TestPage type="basic" />
      </div>
    </div>
  );
};

export default Page;