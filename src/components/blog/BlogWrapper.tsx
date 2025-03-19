"use client";

import { motion } from "framer-motion";
// import TableOfContents from "./BlogContentToc";

function BlogWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className="blog_content_container"
    >
      {children}

      {/* TOC 사이드바 */}
      {/* <aside className="blog-content__toc-list invisible fixed top-83 right-10 h-96 w-64 overflow-y-auto rounded-2xl shadow-lg ring-[0.4px] ring-gray-300 backdrop-blur-2xl lg:visible">
        <TableOfContents />
      </aside> */}
    </motion.div>
  );
}

export default BlogWrapper;
