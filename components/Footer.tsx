"use client"
import React from 'react';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/lib/data/testData';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const path = usePathname()
  if(path == '/login' || path == '/signup') {
    return null;
  }

  return (
    <footer className="bg-gradient-to-b from-green-100 to-green-200 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-4 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Link href="/" className="text-4xl font-bold text-green-800">
                100xsol
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-green-700 mb-6"
            >
              Empowering the next generation of Solana developers.
            </motion.p>
          </div>

          {/* Footer Links */}
          {FOOTER_LINKS.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-semibold text-green-800 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.link} className="text-green-700 hover:text-green-900 transition-colors duration-300">
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
            <h3 className="text-xl font-semibold text-green-800 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {FOOTER_CONTACT_INFO.links.map((link, idx) => (
                <li key={idx} className="flex items-center text-green-700">
                  <span className="font-medium mr-2">{link.label}:</span>
                  <span>{link.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center space-x-6 mb-10"
        >
          <Link href="https://facebook.com" className="text-green-700 hover:text-green-900 transition-colors duration-300">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href="https://instagram.com" className="text-green-700 hover:text-green-900 transition-colors duration-300">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="https://twitter.com" className="text-green-700 hover:text-green-900 transition-colors duration-300">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href="https://youtube.com" className="text-green-700 hover:text-green-900 transition-colors duration-300">
            <Youtube className="w-6 h-6" />
          </Link>
          <Link href="https://linkedin.com" className="text-green-700 hover:text-green-900 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </Link>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-green-700 border-t border-green-300 pt-6"
        >
          <p>&copy; 2024 100xGrow | All rights reserved</p>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
    </footer>
  );
}

export default Footer;