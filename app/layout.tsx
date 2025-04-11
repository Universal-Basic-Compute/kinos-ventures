import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiChat from "@/components/AiChat";
// Add ReactMarkdown and remark-gfm to package.json:
// npm install react-markdown remark-gfm

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KinOS Ventures - AI-Driven Innovation Across Verticals",
  description: "KinOS Ventures accelerates AI-driven innovation across multiple verticals with our unified KinOS engine technology.",
  keywords: "KinOS, AI, artificial intelligence, ventures, technology, innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <AiChat />
      </body>
    </html>
  );
}
