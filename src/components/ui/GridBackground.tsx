function GridBackground() {
  return (
    <div
      className="opacity absolute inset-0 z-1 h-screen w-full bg-[linear-gradient(to_right,#2b7fff15_1px,transparent_1px),linear-gradient(to_bottom,#2b7fff15_1px,transparent_1px)] bg-[size:40px_40px]"
      style={{
        WebkitMaskImage:
          "linear-gradient(-10deg, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0))",

        maskImage:
          "linear-gradient(-10deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1),rgba(0, 0, 0, 0))",
      }}
    ></div>
  );
}

export default GridBackground;
