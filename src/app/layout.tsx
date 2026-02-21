import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Greenity Corporation | Innovating Everyday Life",
  description: "Innovating everyday life for a cleaner, greener future. Home lifestyle partner Greenity Corporation Inc.",
  keywords: "Greenity Corporation, Lifestyle, Clean Care, Clean Hat, Clean View, Aikiko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
