"use client";

import TableOfContents from "./BlogContentToc";

function BlogWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="blog-content">
      {children}

      {/* TOC 사이드바 */}
      <aside className="blog-content__toc-list invisible fixed top-83 right-10 h-96 w-64 overflow-y-auto rounded-2xl shadow-lg ring-[0.4px] ring-gray-300 backdrop-blur-2xl lg:visible">
        <TableOfContents />
      </aside>
    </section>
  );
}

export default BlogWrapper;
