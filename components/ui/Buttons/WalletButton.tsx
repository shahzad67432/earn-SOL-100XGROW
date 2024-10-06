"use client"
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react'
import '@solana/wallet-adapter-react-ui/styles.css'; // Import default styles first
import styles from './WalletButton.module.css'; // Create this CSS module file

const WalletButton = () => {
  const { publicKey } = useWallet();

  return (
    <div>
      <div className="">
        {publicKey ? (
          <WalletDisconnectButton className={styles.walletButton} />
        ) : (
          <WalletMultiButton className={styles.walletButton} />
        )}
      </div>
    </div>
  )
}

export default WalletButton