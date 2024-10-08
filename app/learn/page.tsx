// pages/test/[type].tsx  
import LearnPage from "@/components/learn/LearnPage";  
import React from "react";  

const Learn = () => {  
  return (  
    <div className="min-h-screen bg-green-50">  
      <div className="max-w-7xl mx-auto p-4 flex">  
        <div className="w-[220px] mt-8 rounded-xl p-4 border-2 h-fit bg-white shadow-md">  
          <h1 className="text-lg font-semibold pb-6">Learning Paths</h1>  
          <div className="space-y-4">  
            {/* Beginner Section */}  
            <div className="bg-green-200 p-4 rounded-md">  
              <h2 className="text-md font-semibold mb-2">Beginner</h2>  
              <div className="space-y-2">  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-200">  
                  Consensus  
                </div>  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-200">  
                  Mining  
                </div>  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-200">  
                  Development  
                </div>  
              </div>  
            </div>  
            {/* Intermediate Section */}  
            <div className="bg-green-100 p-4 rounded-md">  
              <h2 className="text-md font-semibold mb-2">Intermediate</h2>  
              <div className="space-y-2">  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-100">  
                  Rust  
                </div>  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-100">  
                  Frameworks  
                </div>  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-100">  
                  APIs  
                </div>  
              </div>  
            </div>  
            {/* Advanced Section */}  
            <div className="bg-green-50 p-4 rounded-md">  
              <h2 className="text-md font-semibold mb-2">Advanced</h2>  
              <div className="space-y-2">  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-50">  
                  Smart Contracts  
                </div>  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-50">  
                  Security  
                </div>  
                <div className="bg-white p-2 rounded-md shadow-sm border border-green-50">  
                  Scalability  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
        <div className="flex-1">  
          {/* Welcome message */}  
          <div className="relative p-8 container mx-auto">  
            <img   
                src="https://www.bytetree.com/content/images/2023/12/2023-12-14-solana-banner.jpg"
                alt="Welcome Image"  
                className="w-[1200px] h-[300px] rounded-xl object-cover"  
            />  
          </div>  

          {/* Render the two test categories */}  
          <h1 className="text-3xl font-semibold mt-8 pl-8 opacity-65">Beginner Guide</h1>  
          <div className="pl-12 py-6">  
            <LearnPage type="Beginner" />
          </div>
          
          <h1 className="text-3xl font-semibold mt-8 pl-8 opacity-65">Intermediate Guide</h1>  
          <div className="pl-12 py-6">  
            <LearnPage type="Intermediate" />  
          </div>  

          <h1 className="text-3xl font-semibold mt-8 pl-8 opacity-65">Advanced Guide</h1>  
          <div className="pl-12 py-6">  
            <LearnPage type="Advanced" />  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Learn;