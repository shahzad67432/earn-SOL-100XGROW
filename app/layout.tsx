import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./Provider";
import WalletProviderWrapper from "@/components/walletProvider";
import { Appbar } from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
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
