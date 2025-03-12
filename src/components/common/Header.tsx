"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import Navigation from "./Navigation";
import SearchButton from "@/components/ui/SearchButton";
import ThemeButton from "@/components/common/ThemeButton";
import ImageConvert from "@/components/ui/ImageConvert";

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  const scrollStyleFunction = () => {
    setIsScroll(window.scrollY > 40);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollStyleFunction);
  }, []);
  return (
    <header
      className={`root-header border-border fixed flex h-18 items-center justify-between gap-x-10 px-10 py-2 transition-[background-color] duration-300 ${isScroll ? "bg-background border-b-1" : "bg-transparent"}`}
    >
      {/* <header
      className={`root-header border-border fixed flex h-18 items-center justify-between gap-x-10 px-10 py-2 transition-all duration-200 ${isScroll ? "bg-background border-b-1" : "bg-transparent"}`}
    > */}
      {/* Logo 영역 */}
      <div className="header-logo justify-self-start">
        {/* <GiHamburgerMenu className="text-xl" /> */}
        <Link href="/" className="flex items-center justify-center gap-3">
          {/* <img src="/assets/logo-oh-note.webp" alt="logo" className="w-8 h-8" /> */}
          <ImageConvert
            props={{
              width: 10,
              height: 10,
              src: "/assets/logo/logo_light.ico",
              alt: "logo",
              styleClassName: "h-10 w-10 rounded-lg",
            }}
          />
          {/* <img
            src="/assets/logo/logo_dark.ico"
            alt="logo"
            className="hidden w-10 h-8 rounded-lg dark:block"
          /> */}

          <h5 className="font-bold tracking-tight">oh-note</h5>
        </Link>
      </div>
      {/* Nav 영역 */}
      <div className="header-nav flex items-center gap-2 justify-self-end">
        <Navigation />
        <SearchButton />
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
