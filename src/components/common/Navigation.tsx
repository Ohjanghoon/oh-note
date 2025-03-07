"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

// icons
import { FaExternalLinkAlt } from "react-icons/fa";

interface Navigation {
  name: string;
  path: string;
  isBlank: boolean;
  icon?: JSX.Element;
}

const NavList: Navigation[] = [
  {
    name: "Home",
    path: "/",
    isBlank: false,
  },
  {
    name: "Blog",
    path: "/blog",
    isBlank: false,
  },
  {
    name: "Guestbook",
    path: "/guestbook",
    isBlank: false,
  },
  {
    name: "Portfolio",
    path: "https://dev-oh.web.app",
    isBlank: true,
    icon: <FaExternalLinkAlt />,
  },
];

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav_wrapper ring-ring flex items-center justify-center gap-10 rounded-xl bg-transparent px-8 py-2 shadow-md backdrop-blur-xl">
      {NavList.map((nav) => {
        // 현재 경로에 따른 active 상태 설정
        const isActive =
          nav.path === "/" ? pathname === "/" : pathname.startsWith(nav.path);
        return (
          <Link
            href={nav.path}
            target={nav.isBlank ? "_blank" : undefined}
            rel={nav.isBlank ? "noopener noreferrer" : undefined}
            key={nav.name}
            className={`${isActive ? "pointer-events-none font-semibold" : "text-text-dark-secondary"} hover:text-text-dark flex items-center gap-1 p-2 duration-200 hover:transition-all`}
          >
            {nav.name}
            {nav.icon && <span className="text-2xs">{nav.icon}</span>}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
