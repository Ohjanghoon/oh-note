function GridBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-100 h-[60vh] w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-60"></div>
      <div className="to-background absolute inset-0 -z-99 h-[60vh] w-full bg-gradient-to-b from-transparent to-90% opacity-30"></div>
    </>
    // <div className="absolute inset-0 -z-100 h-[60vh] w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
  );
}

export default GridBackground;
