"use client";

// node modules
import { motion } from "framer-motion";
import React, { useState } from "react";

// icons
import { RiPushpinFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import TagList from "@/components/blog/TagList";

// import TagList from "../blog/TagList";

function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(true); // 사이드바 확장
  const [isPinned, setIsPinned] = useState(true); // 사이드바 고정

  const toggleSidebar = () => setIsPinned((prev) => !prev);

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      className={`left_sidebar-aside border-border hidden h-[calc(100vh-4rem)] space-y-2 border-r shadow-lg transition-[width,opacity,background-color,color] duration-200 ${isOpen || isPinned ? "bg-bg-subtle w-58" : "bg-bg-subtle/80 w-19"} top-16 z-50 lg:fixed lg:block`}
      onMouseEnter={() => !isPinned && setIsOpen(true)}
      onMouseLeave={() => !isPinned && setIsOpen(false)}
    >
      {/* 토글 버튼 (고정 기능 추가) */}
      <div className="sidebar-toggle_btn-wrapper">
        <button
          className={`toggle_btn group absolute top-3 left-5 z-10 flex h-9 w-9 items-center justify-center p-2 hover:scale-105`}
          onClick={toggleSidebar}
        >
          <span className="text-xl">
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

      <TagList isOpen={isOpen} />
    </motion.aside>
  );
}

export default LeftSidebar;
