"use client";

import { motion } from "framer-motion";

function GridBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 1, ease: "easeInOut" },
      }}
      className="opacity absolute inset-0 z-1 h-[75vh] w-full bg-[linear-gradient(to_right,#2b7fff25_1px,transparent_1px),linear-gradient(to_bottom,#2b7fff25_1px,transparent_1px)] bg-[size:40px_40px]"
      style={{
        WebkitMaskImage:
          "linear-gradient(-10deg, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0))",

        maskImage:
          "linear-gradient(-10deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1),rgba(0, 0, 0, 0))",
      }}
    ></motion.div>
  );
}

export default GridBackground;
