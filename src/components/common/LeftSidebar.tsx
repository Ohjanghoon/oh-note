"use client";

// node modules
import { useState } from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

// icons
import { MdOutlineHome, MdOutlineCategory, MdSettings } from "react-icons/md";
import { RiPushpinFill } from "react-icons/ri";
import TagList from "../TagList";
import Link from "next/link";

const LeftSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // 사이드바 확장
  const [isPinned, setIsPinned] = useState(true); // 사이드바 고정

  const toggleSidebar = () => setIsPinned((prev) => !prev);

  return (
    <aside
      className={`fixed z-10 h-screen space-y-2 rounded-r-3xl border-r border-gray-300 bg-gray-300/50 py-12 shadow-lg transition-all duration-200 ease-in ${
        isPinned ? "" : ""
      } ${isOpen || isPinned ? "w-60 min-w-60" : "w-18 min-w-18"}`}
      onMouseEnter={() => !isPinned && setIsOpen(true)}
      onMouseLeave={() => !isPinned && setIsOpen(false)}
    >
      {/* 토글 버튼 (고정 기능 추가) */}
      {isOpen && (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="group absolute top-3 right-3 rounded-full bg-gray-200 p-2 shadow-md transition hover:scale-110"
                onClick={toggleSidebar}
              >
                <RiPushpinFill
                  className={`group-hover:text-accent-primary transition group-hover:scale-110 ${
                    isPinned ? "text-accent-primary -rotate-45" : ""
                  }`}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent
              className="rounded-lg bg-black/70 p-1 text-gray-100"
              side="bottom"
              align="start"
              sideOffset={6}
            >
              <p className="text-2xs">사이드바 {isPinned ? "닫기" : "고정"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {/* <div className="flex items-center p-4 border-b-[1px]">
        <a href="/" className="flex items-center justify-center gap-3">
          <img
            src="/logo_oh-note.png"
            alt="oh-note logo"
            width={36}
            height={36}
            className="hover:brightness-100 hover:invert-0;"
          />
          <h5 className={`font-extrabold ${isOpen ? "visible" : "hidden"}`}>
            oh-note
          </h5>
        </a>
      </div> */}
      {/* 사이드바 메뉴 */}
      <nav className="flex w-full flex-col items-start px-4">
        <NavItem
          icon={<MdOutlineHome />}
          label="Home"
          isOpen={isOpen || isPinned}
          path="/"
        />
        <NavItem
          icon={<MdOutlineCategory />}
          label="Blog"
          isOpen={isOpen || isPinned}
          path="/blog"
        />
        <NavItem
          icon={<MdSettings />}
          label="Settings"
          isOpen={isOpen || isPinned}
          path="/"
        />
        <TagList />
      </nav>
    </aside>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  path: string;
  isOpen: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, isOpen, path }) => (
  <Link href={path} className="w-full cursor-pointer">
    <div className="my-2 flex items-center rounded-lg p-1 transition hover:bg-gray-300">
      <span className="text-accent-primary bg-icon-bg rounded-[50%] p-1 text-2xl">
        {icon}
      </span>
      {isOpen && <span className="ml-3 text-sm font-medium">{label}</span>}
    </div>
  </Link>
);

export default LeftSidebar;
