import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { AuthProvider } from "@/lib/auth-context";
import { Toaster } from "sonner";
import ClientRoot from './ClientRoot';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konmashi - AI-Powered Content Marketing Platform",
  description: "Amplify your content creation with Konmashi's AI-powered platform. Generate, schedule, and publish content across multiple social media platforms with superhuman efficiency.",
  keywords: ["AI content marketing", "social media automation", "content generation", "brand management", "multi-platform publishing"],
  authors: [{ name: "Konmashi Team" }],
  openGraph: {
    title: "Konmashi - AI-Powered Content Marketing Platform",
    description: "Amplify your content creation with AI-powered tools for creators, businesses, and agencies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
