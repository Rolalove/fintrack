import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const public_Sans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Wallet Ledger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${public_Sans.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
