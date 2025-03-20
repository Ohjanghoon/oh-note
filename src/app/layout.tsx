import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

// styles
import "@/styles/globals.css";

// components
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "oh-note 개발 블로그",
  description: "안녕하세요! 개발자 oh의 개인 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body>
        <Analytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
