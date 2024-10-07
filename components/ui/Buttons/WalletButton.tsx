"use client"
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react'
import '@solana/wallet-adapter-react-ui/styles.css';
import { motion } from 'framer-motion';

const WalletButton = () => {
  const { publicKey } = useWallet();

  const buttonStyle = `
    bg-gradient-to-r from-green-400 to-green-600
    hover:from-green-500 hover:to-green-700
    text-white font-bold py-2 px-4 rounded-md
    shadow-md hover:shadow-lg
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
  `;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {publicKey ? (
        <WalletDisconnectButton className={buttonStyle} />
      ) : (
        <WalletMultiButton className={buttonStyle} />
      )}
    </motion.div>
  )
}

export default WalletButton;