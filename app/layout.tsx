import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";
import { Provider } from "./Provider";
import WalletProviderWrapper from "@/components/walletProvider";
import { Appbar } from "@/components/Header";
import Footer from "@/components/Footer";


const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "100xsol",
  description: "sol learning plus earning decentralized app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
      <WalletProviderWrapper>
        <Provider>
          <Appbar/>
          {children}  
          <Footer/>  
        </Provider>
      </WalletProviderWrapper>
      </body>
    </html>
  );
}
