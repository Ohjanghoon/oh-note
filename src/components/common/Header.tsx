"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import Navigation from "./Navigation";
import SearchButton from "@/components/ui/SearchButton";
import ThemeButton from "@/components/common/ThemeButton";
import ImageConvert from "@/components/ui/ImageConvert";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";

function Header() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollStyleFunction = () => {
    setIsScroll(window.scrollY > 40);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollStyleFunction);
  }, []);
  return (
    <header
      className={`root-header fixed flex h-18 items-center justify-between gap-x-10 border-b-1 px-5 py-1 transition-[background-color,border-color] duration-300 md:px-10 md:py-2 ${isMenuOpen || isScroll ? "bg-background border-border" : "border-transparent bg-transparent"}`}
    >
      {/* <header
      className={`root-header border-border fixed flex h-18 items-center justify-between gap-x-10 px-10 py-2 transition-all duration-200 ${isScroll ? "bg-background border-b-1" : "bg-transparent"}`}
    > */}
      {/* Logo 영역 */}
      <div className="header-logo flex gap-3 justify-self-start">
        <Link href="/" className="flex items-center justify-center gap-3">
          {/* <img src="/assets/logo-oh-note.webp" alt="logo" className="w-8 h-8" /> */}
          <ImageConvert
            props={{
              width: 10,
              height: 10,
              src: "/assets/logo/logo_light.ico",
              alt: "logo",
              styleClassName: "md:h-10 md:w-10 h-8 w-8 rounded-lg",
            }}
          />
          {/* <img
            src="/assets/logo/logo_dark.ico"
            alt="logo"
            className="hidden w-10 h-8 rounded-lg dark:block"
          /> */}

          <h5 className="hidden font-bold tracking-tight md:block">oh-note</h5>
        </Link>
      </div>
      {/* PC Nav 영역 */}
      <div className="header-nav hidden items-center gap-2 justify-self-end md:flex">
        <DesktopNav />
      </div>
      {/* Mobile Nav 영역 */}
      <div className="header-mobile-nav flex items-center gap-5 md:hidden">
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <>
      <Navigation toggleMenu={() => {}} />
      <SearchButton />
      <ThemeButton />
    </>
  );
}

function MobileNav({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <>
      <SearchButton />
      <button onClick={toggleMenu} className="text-xl">
        {isMenuOpen ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
      </button>

      <div
        className={`${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"} bg-bg-subtle fixed top-18 left-0 h-[calc(100vh-4.5rem)] w-full space-y-10 px-5 transition-[opacity,background-color] duration-300`}
      >
        <Navigation toggleMenu={toggleMenu} />
        <div className="space-y-3 p-2.5">
          <h6>Switch Theme</h6>
          <ThemeButton />
        </div>
      </div>
    </>
  );
}

export default Header;
