"use client";

import { ReactNode, useEffect, useState } from "react";
import BlogContentToc from "@/components/blog/BlogContentToc";

// icons
import { IoIosArrowForward } from "react-icons/io";

function BlogContentArticle({ children }: { children: ReactNode }) {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isTOCOpen, setIsTOCOpen] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="blog_content-main_container mx-auto flex flex-col items-start justify-end lg:max-w-screen-md xl:flex-row 2xl:max-w-screen-lg">
      <article className="blog-content-article order-2 w-full xl:order-1 xl:flex-1">
        {children}
      </article>

      <aside
        className={`blog_content-toc_container border-border order-1 w-full overflow-hidden rounded-lg border-[1.5px] xl:absolute xl:right-15 xl:order-2 xl:w-auto xl:min-w-60 xl:rounded-none xl:border-0 xl:pt-10 ${isSticky && "xl:fixed xl:top-40"} `}
      >
        <header className="blog_content-toc_header bg-primary/10 flex w-full items-center justify-between rounded-t-lg px-4 py-2 xl:w-auto xl:px-2">
          <p className="toc_title font-bold">On this page</p>
          <button
            className="toc_fold_btn"
            onClick={() => setIsTOCOpen((prev) => !prev)}
          >
            <IoIosArrowForward
              className={`transition-transform duration-300 ${isTOCOpen ? "rotate-90" : "rotate-0"}`}
            />
          </button>
        </header>
        {isTOCOpen && <BlogContentToc />}
      </aside>
    </div>
  );
}

export default BlogContentArticle;
