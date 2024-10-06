import React from 'react';
import Link from 'next/link';

const LandingPage3: React.FC = () => {
  return (
    <div className="bg-green-50 text-green-950 min-h-screen">
      {/* Previous sections remain the same */}

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard number="10,000+" label="Active Learners" />
            <StatCard number="500k+" label="SOL Distributed" />
            <StatCard number="1,000+" label="Quizzes Available" />
            <StatCard number="5,000+" label="Community Blogs" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQItem 
              question="How do I start earning SOL?" 
              answer="Connect your Solana wallet, complete quizzes, participate in contests, and write engaging blogs to start earning SOL rewards."
            />
            <FAQItem 
              question="Are the quizzes difficult?" 
              answer="We offer quizzes at various difficulty levels, from beginner to advanced. You can choose the level that suits your knowledge and skills."
            />
            <FAQItem 
              question="How often are new quizzes added?" 
              answer="We add new quizzes weekly to keep the content fresh and cover the latest developments in the Solana ecosystem."
            />
            <FAQItem 
              question="Can I withdraw my earnings anytime?" 
              answer="Yes, you can withdraw your SOL earnings to your connected wallet at any time, subject to a small minimum withdrawal amount."
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest updates, new quizzes, and Solana ecosystem news.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button 
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer note: Assuming you have a separate Footer component */}
      <footer className="bg-green-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 100xSolana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const StatCard: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-lg">{label}</div>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default LandingPage3;