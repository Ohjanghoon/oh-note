"use client";

// node modules
import { useRef } from "react";

// components
import BackToTopButton from "@/components/common/BackToTopButton";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef}>
      {children}
      <BackToTopButton containerRef={containerRef} />
      {/* <article className="w-full p-6 overflow-scroll md:p-10">
        <section className="w-full max-w-6xl mx-auto px-30"></section>
      </article> */}
    </main>
  );
}
