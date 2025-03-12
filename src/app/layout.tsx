import type { Metadata } from "next";

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
    <html lang="en" className={`antialiased`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
