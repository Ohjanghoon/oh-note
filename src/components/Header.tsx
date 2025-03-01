import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="px-4 md:px-6 flex items-center">
        <h1>
          <a href="/" className="flex items-center justify-center gap-3">
            <img
              src="/logo_oh-note.png"
              alt="oh-note logo"
              width={36}
              height={36}
              className="hover:brightness-100 hover:invert-0;"
            />
            <h4 className="font-extrabold">oh-note</h4>
          </a>
        </h1>
      </div>
    </header>
  );
};

export default Header;
