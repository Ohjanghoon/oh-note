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
      <article>
        <section>{children}</section>
        <BackToTopButton containerRef={containerRef} />
      </article>
    </main>
  );
}
