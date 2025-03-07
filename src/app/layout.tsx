import type { Metadata } from "next";

// fonts
import { Geist, Geist_Mono } from "next/font/google";

// styles
import "./globals.css";

// components
import Header from "@/components/common/Header";
import ClientLayout from "@/components/common/ClientLayout";
import GradientBackground from "@/components/ui/GradientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "oh-note 개발 블로그",
  description: "안녕하세요! 개발자 oh의 개인 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="root-container">
          <GradientBackground />
          <Header />
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
