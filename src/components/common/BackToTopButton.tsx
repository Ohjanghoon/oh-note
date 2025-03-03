"use client"; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const BackToTopButton: React.FC<Props> = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollVisibleFunction = () => {
      if (window.scrollY > 20) {
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
    <>
      <button
        onClick={backToTop}
        className={`fixed bottom-5 right-5 text-accent-primary transition-[opacity_scale] duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hover:scale-105`}
      >
        <FaCircleArrowUp className="text-4xl bg-primary rounded-[50%]" />
      </button>
    </>
  );
};

export default BackToTopButton;
