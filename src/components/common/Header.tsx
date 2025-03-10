"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import Navigation from "./Navigation";
import SearchButton from "../ui/SearchButton";
import ThemeButton from "../ui/ThemeButton";

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
      className={`root-header border-border fixed flex items-center justify-between gap-x-10 px-10 backdrop-blur-sm transition-all duration-300 ${isScroll ? "bg-background border-b-1 py-1" : "bg-transparent py-3"}`}
    >
      {/* Logo 영역 */}
      <div className="header-logo justify-self-start">
        <Link href="/" className="flex items-center justify-center gap-3">
          <img src="/assets/logo-oh-note.webp" alt="logo" className="h-8 w-8" />
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
