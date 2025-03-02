"use client"; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const BackToTopButton: React.FC<Props> = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollVisibleFunction = () => {
      if (scrollContainer.scrollTop > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollContainer.addEventListener("scroll", scrollVisibleFunction);

    return () => {
      scrollContainer.removeEventListener("scroll", scrollVisibleFunction);
    };
  });

  const backToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={backToTop}
      className={`absolute bottom-5 right-5 text-accent-primary transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaCircleArrowUp className="text-4xl" />
    </button>
  );
};

export default BackToTopButton;
