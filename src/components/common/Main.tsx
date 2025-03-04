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
  console.log("2");
  return (
    <main ref={containerRef}>
      {children}
      <BackToTopButton containerRef={containerRef} />
      {/* <article className="w-full overflow-scroll p-6 md:p-10">
        <section className="mx-auto w-full max-w-6xl px-30"></section>
      </article> */}
    </main>
  );
}
