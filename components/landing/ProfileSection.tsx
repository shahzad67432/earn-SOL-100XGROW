import React from 'react';
import { motion } from 'framer-motion';
import { User, CreditCard, Zap, Shield, BarChart2, ArrowRight } from 'lucide-react';

const ProfileDashboardSection: React.FC = () => {
  const features = [
    { icon: <CreditCard className="w-5 h-5 md:w-6 md:h-6" />, title: "Payment History", description: "Track all your earnings in one place." },
    { icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, title: "Fast Transactions", description: "Experience lightning-fast SOL-based transactions." },
    { icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, title: "Secure Wallet", description: "Connect your SOL wallet for safe and easy transfers." },
    { icon: <BarChart2 className="w-5 h-5 md:w-6 md:h-6" />, title: "Performance Metrics", description: "View your quiz and blogs earnings" },
  ];

  return (
    <section className="py-12 md:py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-green-950 mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Personal Dashboard
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-green-100 opacity-50 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16"></div>
              <div className="relative z-10">
                <User className="w-12 h-12 md:w-16 md:h-16 text-green-600 mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-semibold text-green-950 mb-3 md:mb-4">Profile Dashboard</h3>
                <p className="text-green-800 mb-4 md:mb-6 text-sm md:text-base">
                  Your all-in-one hub for managing earnings, tracking performance, and handling transactions with ease.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={feature.title}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="bg-green-100 rounded-full p-1.5 md:p-2 mr-3 md:mr-4 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-950 text-sm md:text-base">{feature.title}</h4>
                        <p className="text-green-800 text-xs md:text-sm">{feature.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-green-600 text-white rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-green-500 opacity-50 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">SOL-Based Transactions</h3>
                <p className="text-base md:text-lg mb-6 md:mb-8">
                  Experience the future of digital transactions with blazing-fast and cost-effective blockchain technology of Solana.
                </p>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                    <span className="text-sm md:text-base">Lightning-fast transaction speeds</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                    <span className="text-sm md:text-base">Secure and transparent</span>
                  </li>
                  <li className="flex items-center">
                    <CreditCard className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                    <span className="text-sm md:text-base">Low transaction fees</span>
                  </li>
                </ul>
                <motion.a 
                  href="#connect-wallet"
                  className="inline-flex items-center bg-white text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-green-50 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect Your SOL Wallet <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDashboardSection;