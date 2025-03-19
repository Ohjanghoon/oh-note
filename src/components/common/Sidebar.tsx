"use client";

// node modules
import { motion } from "framer-motion";
import React, { useState } from "react";

// icons
import { RiPushpinFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import TagList from "@/components/blog/TagList";
import { IoIosArrowForward } from "react-icons/io";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // 사이드바 확장
  const [isPinned, setIsPinned] = useState(false); // 사이드바 고정

  const toggleSidebar = () => {
    if (isPinned) {
      setIsPinned(false);
      document.body.style.overflow = "auto";
    } else {
      setIsPinned(true);
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      className={`left_sidebar-aside z-1`}
    >
      <div
        className={`border-border hidden h-[calc(100vh-4rem)] space-y-2 border-r shadow-lg transition-[width,opacity,background-color,color,border-color] duration-300 ${isOpen || isPinned ? "bg-bg-subtle w-58" : "bg-bg-subtle/80 w-19"} fixed top-16 z-50 lg:block`}
        onMouseEnter={() => !isPinned && setIsOpen(true)}
        onMouseLeave={() => !isPinned && setIsOpen(false)}
      >
        <DesktopSidebarMenu
          isOpen={isOpen}
          isPinned={isPinned}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <div
        className={`border-border bg-bg-subtle block w-full border-b transition-[background-color,color,border-color] duration-300 ease-linear ${isPinned ? "h-[calc(100vh-4rem)]" : "h-12"} fixed top-16 z-10 lg:hidden`}
      >
        <MobileSidebarMenu isPinned={isPinned} toggleSidebar={toggleSidebar} />
      </div>
    </motion.aside>
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
        <TagList />
      </div>
    </div>
  );
}

export default Sidebar;
