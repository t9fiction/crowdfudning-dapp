import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/config'
import AppKitProvider from '@/context'

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Crowd Funding Dapp",
  description:
    "A simple crowd funding dapp on Sepolia chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <AppKitProvider initialState={initialState}>{children}</AppKitProvider>
      </body>
    </html>
  );
}