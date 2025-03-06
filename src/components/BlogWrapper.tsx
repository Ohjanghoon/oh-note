"use client";

import TableOfContents from "./BlogContentToc";

function BlogWrapper({ children }) {
  return (
    <div className="blog-content-container">
      <main>{children}</main>

      {/* TOC 사이드바 */}
      <aside className="invisible fixed top-17 right-10 mt-66 max-h-96 w-64 overflow-y-auto rounded-2xl shadow-lg ring-[0.4px] ring-gray-300 backdrop-blur-2xl lg:visible">
        <TableOfContents />
      </aside>
    </div>
  );
}

export default BlogWrapper;
