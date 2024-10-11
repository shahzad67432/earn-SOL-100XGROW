"use client"
import React from 'react';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/lib/data/testData';
import Link from 'next/link';
import { Youtube, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const path = usePathname()
  if(path == '/login' || path == '/signup') {
    return null;
  }

  return (
    <footer className="bg-gradient-to-b from-green-100 to-green-200 pt-12 md:pt-20 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <Link href="/" className="text-3xl md:text-4xl font-bold text-green-800 mb-4 inline-block">
              100xsol
            </Link>
            <p className="text-green-700 mb-6 text-sm md:text-base">
              Learn and Earna with 100XSOL community.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <Link href="https://www.youtube.com/@Learnwithshahzad-sp5dx" className="text-green-700 hover:text-green-900 transition-colors duration-300">
                <Youtube className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/shahzad-ali-225893298/" className="text-green-700 hover:text-green-900 transition-colors duration-300">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
          </motion.div>

          {/* Footer Links */}
          {FOOTER_LINKS.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.link} className="text-green-700 hover:text-green-900 transition-colors duration-300 text-sm md:text-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3">Contact Us</h3>
            <ul className="space-y-2">
              {FOOTER_CONTACT_INFO.links.map((link, idx) => (
                <li key={idx} className="flex items-center text-green-700 text-sm md:text-base">
                  <span className="font-medium mr-2">{link.label}:</span>
                  <span>{link.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-green-700 border-t border-green-300 pt-6 text-sm md:text-base"
        >
          <p>&copy; 2024 100XSOL | All rights reserved</p>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
    </footer>
  );
}

export default Footer;