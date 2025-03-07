import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      {/* Logo 영역 */}
      <div className="main-header_logo justify-self-start">
        <Link href="/" className="flex items-center justify-center gap-3">
          <img src="/logo_oh-note.png" alt="oh-note logo" className="h-8 w-8" />
          <h5 className="font-extrabold tracking-tight">oh-note</h5>
        </Link>
      </div>
      {/* Nav 영역 */}
      <div className="main-header_nav justify-self-center">
        <Navigation />
      </div>
      {/* Settings 영역 */}
      <div className="main-header_settings justify-self-end">Settings</div>
    </header>
  );
};

export default Header;
