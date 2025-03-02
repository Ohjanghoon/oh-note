"use client";

import BackToTopButton from "@/components/common/BackToTopButton";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <article ref={containerRef}>
      <h1>HOME</h1>
      <section className="h-[200vh]"></section>
      <BackToTopButton containerRef={containerRef} />
    </article>
  );
}
