import React from "react";

function GradientBackground({ styleClassName }: { styleClassName: string }) {
  return (
    <>
      <div
        className={`gradient-background visible absolute overflow-hidden bg-[linear-gradient(180deg,#62a1f780,#62a1f7,#62a1f780,#62a1f7,var(--color-background))] transition-none dark:opacity-20 ${styleClassName}`}
      ></div>
      {/* <div className="ring-ring absolute top-40 left-30 -z-50 h-30 w-30 rotate-55 rounded-full bg-transparent shadow-lg ring-[0.2px] blur-xs backdrop-blur-3xl"></div>
      <div className="ring-ring absolute top-30 right-15 -z-50 h-15 w-15 rotate-55 rounded-full bg-transparent shadow-lg ring-[0.4px] blur-xs backdrop-blur-3xl"></div> */}
      {/* <div className="absolute w-20 h-20 bg-transparent rounded-full shadow-lg bottom-20 left-25 -rotate-25 blur-xs backdrop-blur-3xl"></div> */}
    </>
  );
}

export default GradientBackground;
