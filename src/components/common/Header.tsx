import React from "react";
import Link from "next/link";

// components
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="root-header">
      {/* Logo 영역 */}
      <div className="header-logo justify-self-start">
        <Link href="/" className="flex items-center justify-center gap-3">
          <img src="/logo_oh-note.png" alt="oh-note logo" className="h-8 w-8" />
          <h5 className="font-extrabold tracking-tight">oh-note</h5>
        </Link>
      </div>
      {/* Nav 영역 */}
      <div className="header-nav justify-self-center">
        <Navigation />
      </div>
      {/* Settings 영역 */}
      <div className="header-settings justify-self-end">Settings</div>
    </header>
  );
}

export default Header;
