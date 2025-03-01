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

const LeftSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // 사이드바 확장
  const [isPinned, setIsPinned] = useState(true); // 사이드바 고정

  const toggleSidebar = () => setIsPinned((prev) => !prev);

  return (
    <aside
      className={`relative h-full bg-secondary border-r border-gray-200 transition-all duration-300 ease-in-out shadow-lg rounded-r-3xl 
      ${isOpen || isPinned ? "min-w-60 w-60" : "min-w-16 w-16"}`}
      onMouseEnter={() => !isPinned && setIsOpen(true)}
      onMouseLeave={() => !isPinned && setIsOpen(false)}
    >
      {/* 토글 버튼 (고정 기능 추가) */}
      {isOpen && (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="absolute top-3 right-3  bg-gray-200 p-2 rounded-full shadow-md hover:scale-110 transition group"
                onClick={toggleSidebar}
              >
                <RiPushpinFill
                  className={`transition group-hover:scale-110 group-hover:text-accent-primary ${
                    isPinned ? "-rotate-45 text-accent-primary" : ""
                  }`}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent
              className="text-gray-100 p-1 rounded-lg bg-black/70"
              side="bottom"
              align="start"
              sideOffset={6}
            >
              <p className="text-2xs">사이드바 {isPinned ? "닫기" : "열기"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {/* 사이드바 메뉴 */}
      <nav className="flex flex-col items-start px-4 py-12">
        <NavItem
          icon={<MdOutlineHome />}
          label="Home"
          isOpen={isOpen || isPinned}
        />
        <NavItem
          icon={<MdOutlineCategory />}
          label="Categories"
          isOpen={isOpen || isPinned}
        />
        <NavItem
          icon={<MdSettings />}
          label="Settings"
          isOpen={isOpen || isPinned}
        />
      </nav>
    </aside>
  );
};

type NavItemProps = { icon: React.ReactNode; label: string; isOpen: boolean };

const NavItem: React.FC<NavItemProps> = ({ icon, label, isOpen }) => (
  <div className="flex items-center w-full p-2 my-1 rounded-lg hover:bg-gray-200 transition">
    <span className="text-xl">{icon}</span>
    {isOpen && <span className="ml-3 text-md font-medium">{label}</span>}
  </div>
);

export default LeftSidebar;
