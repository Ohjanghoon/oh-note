"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

// icons
// import { FaExternalLinkAlt } from "react-icons/fa";

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
  // {
  //   name: "Portfolio",
  //   path: "https://dev-oh.web.app",
  //   isBlank: true,
  //   icon: <FaExternalLinkAlt />,
  // },
];

function Navigation({ toggleMenu }: { toggleMenu: () => void }) {
  const pathname = usePathname();

  return (
    <nav
      className={`header-nav-wrapper flex flex-col justify-end gap-3 rounded-xl bg-transparent py-2 md:flex-row md:items-center md:px-5`}
    >
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
            className={`${isActive ? "text-primary font-semibold" : "text-text-dark-secondary hover:text-text-dark"} flex items-center gap-1 p-2.5`}
            onClick={toggleMenu}
          >
            {nav.name}
            {nav.icon && <span className="text-xs">{nav.icon}</span>}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
