import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex items-center px-4 md:px-6">
        <h1>
          <a href="/" className="flex items-center justify-center gap-3">
            <img
              src="/logo_oh-note.png"
              alt="oh-note logo"
              width={36}
              height={36}
            />
            <h5 className="font-extrabold">oh-note</h5>
          </a>
        </h1>
      </div>
    </header>
  );
};

export default Header;
