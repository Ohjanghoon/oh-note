"use client";

import { useCallback, useEffect, useState } from "react";

// icons
import { FiSearch } from "react-icons/fi";

// components
import { useSearchModal } from "@/contexts/SearchModalContext";

function SearchButton() {
  const { openSearchModal, setSearchTab } = useSearchModal();

  const [shortcut, setShortcut] = useState<string>("");

  /** 키 다운 이벤트 분기처리를 위한 OS 종류 확인 */
  function checkOS() {
    if (typeof window === "undefined")
      return { isWindows: false, isMac: false };

    const isWindows = navigator.platform.toUpperCase().includes("WIN");
    const isMac = navigator.platform.toUpperCase().includes("MAC");

    return { isWindows, isMac };
  }

  const onModalOpen = useCallback(() => {
    openSearchModal();
    setSearchTab("post");
    document.body.style.overflow = "hidden";
  }, [openSearchModal, setSearchTab]);

  useEffect(() => {
    const { isMac, isWindows } = checkOS();

    if (isMac) setShortcut("⌘ + K");
    if (isWindows) setShortcut("Ctrl + K");

    const handleSearchKeydown = (event: KeyboardEvent) => {
      if (
        (isMac && event.metaKey && event.key === "k") ||
        (isWindows && event.ctrlKey && event.key === "k")
      ) {
        onModalOpen();
      }
    };

    window.addEventListener("keydown", handleSearchKeydown);

    return () => {
      window.removeEventListener("keydown", handleSearchKeydown);
    };
  }, [onModalOpen]);

  return (
    <>
      <button
        className="search_btn md:bg-bg-muted/40 md:ring-text-muted/60 md:text-text-dark-muted flex items-center justify-between gap-2 px-2 py-1.5 md:w-48 md:rounded-lg md:ring-1"
        onClick={onModalOpen}
      >
        <div className="search_btn-text flex items-center gap-1">
          <FiSearch className="text-xl md:text-base" />
          <span className="hidden justify-self-start md:inline">Search...</span>
        </div>
        <span className="search_btn-key hidden text-xs md:inline">
          {shortcut}
        </span>
      </button>
    </>
  );
}

export default SearchButton;
