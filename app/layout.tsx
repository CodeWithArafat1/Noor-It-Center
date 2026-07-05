// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure the primary font
const inter = Inter({ subsets: ["latin"] });

// Set up default SEO metadata for Noor It Center
export const metadata: Metadata = {
  title: "Noor It Center | High Converting Web Solutions",
  description: "We build high-converting Shopify stores and digital solutions for modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased`}>
       <Navbar/>
        
        <main className="flex flex-col w-full min-h-screen">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}