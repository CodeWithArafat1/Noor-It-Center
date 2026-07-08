// src/app/layout.tsx

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure the primary font
import { Hind_Siliguri, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const hind = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla",
});

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
      <body className={`${inter.variable} ${hind.variable} min-h-screen bg-white text-slate-900 antialiased`}>
       <Navbar/>
        
        <main className="flex flex-col w-full min-h-screen">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}