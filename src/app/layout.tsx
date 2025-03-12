import type { Metadata } from "next";

// fonts
import { Roboto } from "next/font/google";

// styles
import "@/styles/globals.css";

// components
import ClientLayout from "@/components/common/ClientLayout";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
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
      <body className={`${roboto.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
