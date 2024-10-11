"use client"
import LearnPage from "@/components/learn/LearnPage";
import React, { useState } from "react";

const Learn = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderSection = (title: string, items: string[], bgColor: string) => (
    <div className={`${bgColor} p-4 rounded-md`}>
      <h2 
        className="text-md font-semibold mb-2 cursor-pointer flex justify-between items-center"
        onClick={() => toggleSection(title)}
      >
        {title}
        <span>{activeSection === title ? '▼' : '▶'}</span>
      </h2>
      {activeSection === title && (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className={`bg-white p-2 rounded-md shadow-sm border ${bgColor}`}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto p-4 lg:flex">
        {/* Sidebar */}
        <div className="lg:w-[220px] mb-6 lg:mb-0 lg:mr-6">
          <div className="bg-white rounded-xl p-4 border-2 shadow-md">
            <h1 className="text-lg font-semibold pb-6">Learning Paths</h1>
            <div className="space-y-4">
              {renderSection("Beginner", ["Consensus", "Mining", "Development"], "bg-green-200")}
              {renderSection("Intermediate", ["Rust", "Frameworks", "APIs"], "bg-green-100")}
              {renderSection("Advanced", ["Smart Contracts", "Security", "Scalability"], "bg-green-50")}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Welcome message */}
          <div className="relative container mx-auto mb-6">
            <img 
              src="https://www.bytetree.com/content/images/2023/12/2023-12-14-solana-banner.jpg"
              alt="Welcome Image"
              className="w-full h-[300px] rounded-xl object-cover"
            />
          </div>

          {/* Render the three guide sections */}
          {["Beginner", "Intermediate", "Advanced"].map((type) => (
            <div key={type} className="mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 opacity-65">{type} Guide</h1>
              <div className="pl-4">
                <LearnPage type={type} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;