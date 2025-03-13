import React from "react";

function Loading() {
  return (
    <div className="bg-background/10 absolute top-0 left-0 flex h-screen w-full items-center justify-center space-x-2 backdrop-blur-lg">
      <span className="sr-only">Loading...</span>
      <div className="bg-primary h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
      <div className="bg-primary h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
      <div className="bg-primary h-3 w-3 animate-bounce rounded-full"></div>
    </div>
  );
}

export default Loading;
