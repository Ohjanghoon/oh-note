import React from "react";

function GradientBackground() {
  return (
    <>
      <div className="gradient-background visible absolute top-0 left-0 -z-50 h-[40vh] w-full overflow-hidden bg-[linear-gradient(135deg,#62a1f780,#62a1f7,#62a1f780,#62a1f7,#62a1f780)] opacity-20 blur-3xl dark:invisible"></div>
      {/* <div className="ring-ring absolute top-40 left-30 -z-50 h-30 w-30 rotate-55 rounded-full bg-transparent shadow-lg ring-[0.2px] blur-xs backdrop-blur-3xl"></div>
      <div className="ring-ring absolute top-30 right-15 -z-50 h-15 w-15 rotate-55 rounded-full bg-transparent shadow-lg ring-[0.4px] blur-xs backdrop-blur-3xl"></div> */}
      {/* <div className="absolute w-20 h-20 bg-transparent rounded-full shadow-lg bottom-20 left-25 -rotate-25 blur-xs backdrop-blur-3xl"></div> */}
    </>
  );
}

export default GradientBackground;
