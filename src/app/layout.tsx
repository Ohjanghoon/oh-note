import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

// styles
import "@/styles/globals.css";

// components
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "oh-note 블로그",
  description: "프론트엔드 개발자의 공부 기록 블로그입니다.",
  keywords: "Next.js, React, TypeScript, Frontend, 개발 블로그, MDX 블로그",
  openGraph: {
    title: "oh-note 블로그",
    description: "프론트엔드 개발자의 공부 기록 블로그입니다.",
    url: "https://oh-note.vercel.app",
    images: [
      {
        url: "/assets/logo/logo_light.svg",
        width: 1200,
        height: 630,
        alt: "oh-note logo",
      },
    ],
  },
  verification: {
    google: "ONvPsH0vX1CDngTKU17U0G1Zar7x5PuwWp-pat-jTjs",
  },
  category: "Technology",
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
