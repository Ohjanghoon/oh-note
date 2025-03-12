import type { Metadata } from "next";

// fonts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// styles
import "@/styles/globals.css";

// components
import ClientLayout from "@/components/common/ClientLayout";

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
        className={`${GeistSans.className} ${GeistMono.className} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
