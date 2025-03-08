"use client"; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from "react";

// icons
import { TbArrowBigUpLineFilled } from "react-icons/tb";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollVisibleFunction = () => {
      if (window.scrollY > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollVisibleFunction);

    return () => {
      window.removeEventListener("scroll", scrollVisibleFunction);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={backToTop}
      className={`back_to_top-btn text-primary ring-primary overflow-hidden rounded-full ring-2 transition-[opacity,scale] duration-300 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      } hover:bg-primary hover:text-text-light hover:scale-105`}
    >
      <TbArrowBigUpLineFilled className="p-1 text-4xl font-extrabold" />
    </button>
  );
}

export default BackToTopButton;
