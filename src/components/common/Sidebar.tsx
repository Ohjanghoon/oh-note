"use client";

// node modules
import React, { useEffect, useState } from "react";

// icons
import { RiPushpinFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import TagList from "@/components/blog/TagList";
import { IoIosArrowForward } from "react-icons/io";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // 사이드바 확장
  const [isPinnedDesktop, setIsPinnedDesktop] = useState(false); // 사이드바 고정
  const [isPinnedMobile, setIsPinnedMobile] = useState(false); // 사이드바 고정

  useEffect(() => {
    document.body.style.overflow = isPinnedMobile ? "hidden" : "auto";
  }, [isPinnedMobile]);
  return (
    <aside className={`left_sidebar-aside z-1`}>
      <div
        className={`border-border hidden h-[calc(100vh-3.25rem)] space-y-2 border-r shadow-lg transition-[width,opacity,background-color,color,border-color] duration-300 ${isOpen || isPinnedDesktop ? "bg-bg-subtle w-58" : "bg-bg-subtle/80 w-19"} fixed top-14 z-50 lg:block`}
        onMouseEnter={() => !isPinnedDesktop && setIsOpen(true)}
        onMouseLeave={() => !isPinnedDesktop && setIsOpen(false)}
      >
        <DesktopSidebarMenu
          isOpen={isOpen}
          isPinned={isPinnedDesktop}
          toggleSidebar={() => setIsPinnedDesktop((prev) => !prev)}
        />
      </div>
      <div
        className={`border-border bg-bg-subtle dark:bg-bg-subtle block w-full border-b transition-[background-color,color,border-color] duration-100 ease-linear ${isPinnedMobile ? "h-[calc(100vh-3.25rem)]" : "h-12"} fixed top-13 z-10 lg:hidden`}
      >
        <MobileSidebarMenu
          isPinned={isPinnedMobile}
          toggleSidebar={() => setIsPinnedMobile((prev) => !prev)}
        />
      </div>
    </aside>
  );
}

function DesktopSidebarMenu({
  isOpen,
  isPinned,
  toggleSidebar,
}: {
  isOpen: boolean;
  isPinned: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      <div className="sidebar-toggle_btn-wrapper">
        <button
          className={`toggle_btn group absolute top-3 left-5 z-10 flex h-9 w-9 items-center justify-center p-2 hover:scale-105`}
          onClick={toggleSidebar}
        >
          <span className="text-foreground text-xl">
            {!isOpen ? (
              <GiHamburgerMenu />
            ) : (
              <RiPushpinFill
                className={`transition-[rotate] duration-300 ${
                  isPinned ? "text-primary rotate-0" : "-rotate-45"
                }`}
              />
            )}
          </span>
        </button>
      </div>
      <div
        className={`mt-20 h-full px-7 transition-[display,opacity] duration-100 ease-in ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <TagList />
      </div>
    </>
  );
}

function MobileSidebarMenu({
  isPinned,
  toggleSidebar,
}: {
  isPinned: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div className="h-full w-full">
      <div className="py-3" onClick={toggleSidebar}>
        <p className="flex items-center justify-between px-5 sm:px-5 md:px-10">
          <span>Menu</span>
          <span>
            <IoIosArrowForward
              className={`${isPinned ? "rotate-90" : "rotate-0"}`}
            />
          </span>
        </p>
      </div>
      <div
        className={`mt-7 h-full px-4 md:px-8 ${isPinned ? "pointer-events-auto block opacity-100" : "pointer-events-none hidden opacity-0"}`}
      >
        <TagList toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default Sidebar;
