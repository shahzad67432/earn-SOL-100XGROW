import React from 'react';
import Link from 'next/link';

const LandingPage2: React.FC = () => {
  return (
    <div className="bg-green-50 text-green-950 min-h-screen">
      {/* Previous sections (Hero and Features) remain the same */}

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard
              number={1}
              title="Connect Wallet"
              description="Link your Solana wallet to start earning and participating."
            />
            <StepCard
              number={2}
              title="Learn & Quiz"
              description="Explore courses and take quizzes to earn Solana rewards."
            />
            <StepCard
              number={3}
              title="Compete & Earn"
              description="Join contests and climb the leaderboard for bigger prizes."
            />
            <StepCard
              number={4}
              title="Share & Grow"
              description="Write blogs, earn from views, and build your reputation."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="100xSolana has been a game-changer for me. I've learned so much about Solana and earned rewards along the way!"
              author="Alice K."
            />
            <TestimonialCard
              quote="The premium tests are challenging but rewarding. It's a great way to prove your skills and earn SOL."
              author="Bob M."
            />
            <TestimonialCard
              quote="I love the community aspect. Reading and writing blogs has expanded my knowledge and network in the Solana ecosystem."
              author="Charlie D."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to 100x Your Solana Knowledge?</h2>
          <p className="text-xl mb-8">Join our community of learners and earners today!</p>
          <Link href="/signup" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-100 transition duration-300">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

const StepCard: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const TestimonialCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-semibold text-right">- {author}</p>
    </div>
  );
};

export default LandingPage2;