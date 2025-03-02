"use client";

import BackToTopButton from "@/components/common/BackToTopButton";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // 🔹 현재 경로 가져오기

  useEffect(() => {
    const scrollContainer = containerRef.current;

    if (scrollContainer && pathname !== "/") {
      scrollContainer.scrollTop = 0; // 🔹 즉시 최상단 이동
      scrollContainer.style.scrollBehavior = "auto"; // 🔹 스크롤 애니메이션 제거
    }
  }, [pathname]);

  return (
    <main>
      <article ref={containerRef}>
        <section className="h-[200vh]">{children}</section>
        <BackToTopButton containerRef={containerRef} />
      </article>
    </main>
  );
}
