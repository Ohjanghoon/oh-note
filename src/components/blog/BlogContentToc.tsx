"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
  level: number;
}

function BlogContentToc() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const postArticle = document.querySelector(".blog-content-article");
    if (!postArticle) return;

    const headings = postArticle.querySelectorAll("h2, h3, h4");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      // id가 없는 경우 추가
      if (!heading.id) {
        heading.id = heading.textContent?.replace(/\s+/g, "-") || "";
      }

      const level = parseInt(heading.tagName.replace("H", ""), 10);

      tocItems.push({
        id: heading.id,
        label: heading.textContent || "",
        level,
      });
    });

    setToc(tocItems);

    // Intersection Observer 적용
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null, // viewport 기준
        rootMargin: "0px 0px -80% 0px",
        threshold: 0.1, // 10% 이상 보이면 감지
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const handleClick = (id: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: "smooth",
      });

      // URL 변경 없이 히스토리만 갱신
      history.replaceState(null, "", `#${id}`);

      setActiveId(id);
    }
  };
  return (
    <nav className="toc_nav h-full max-h-80 overflow-auto xl:max-h-full">
      <ul>
        {toc.map((item, index) => {
          return (
            <Link
              href={`#${item.id}`}
              key={index}
              onClick={(e) => handleClick(item.id, e)}
            >
              <li
                className={`toc_item group px-4 py-1.5 xl:border-l-3 xl:px-2 xl:py-1 ${activeId === item.id ? "xl:text-primary xl:border-primary" : "xl:hover:text-primary xl:hover:border-primary border-transparent"}`}
              >
                <span style={{ paddingLeft: `${(item.level - 1) * 8}px` }}>
                  {item.label}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default BlogContentToc;
