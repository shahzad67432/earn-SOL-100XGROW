import React from 'react';
import Link from 'next/link';

const LandingPage1: React.FC = () => {
  return (
    <div className="bg-green-50 text-green-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to 100xSolana</h1>
          <p className="text-xl mb-8">Learn, Earn, and Grow with Solana</p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Get Started
            </Link>
            <Link href="/learn" className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-100 transition duration-300">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose 100xSolana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Learn and Earn"
              description="Participate in quizzes and earn Solana while expanding your knowledge."
              icon="📚"
            />
            <FeatureCard
              title="Premium Tests"
              description="Take premium tests for higher rewards and prove your expertise."
              icon="🏆"
            />
            <FeatureCard
              title="Community Blogs"
              description="Share your insights, earn from views, and learn from others."
              icon="✍️"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LandingPage1;