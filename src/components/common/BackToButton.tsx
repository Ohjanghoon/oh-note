"use client";

import { useEffect, useState } from "react";

// icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function BackToButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollVisibleFunction = () => {
      if (window.scrollY > 160) {
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

  const backToBottom = () => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={backToTop}
        className={`back_to_top-btn text-text-dark-secondary ring-muted overflow-hidden rounded-lg shadow ring-1 transition-[opacity,scale] duration-300 ${isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <IoIosArrowUp className="p-1 text-3xl font-extrabold" />
      </button>
      <button
        onClick={backToBottom}
        className={`back_to_top-btn text-text-dark-secondary ring-muted overflow-hidden rounded-lg ring-1 transition-[opacity,scale] duration-300 ${isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <IoIosArrowDown className="p-1 text-3xl font-extrabold" />
      </button>
    </div>
  );
}

export default BackToButton;
