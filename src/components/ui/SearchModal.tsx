"use client";

import { useEffect } from "react";

function SearchModal({ onClose }: { onClose: (isOpen: boolean) => void }) {
  function onModalClose() {
    onClose(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("검색 모달창 닫기");
        onModalClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div
      className="bg-bg-dark/20 fixed inset-0 z-100 flex h-screen w-full items-center justify-center"
      onClick={onModalClose}
    >
      <div
        className="bg-background h-1/2 w-full max-w-screen-sm rounded-xl p-3"
        onClick={(e) => e.stopPropagation()}
      >
        Search
      </div>
    </div>
  );
}

export default SearchModal;
