"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
  level: number;
}

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
}

const BlogContentToc = () => {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    const postArticle = document.querySelector(".blog-content-article");
    if (!postArticle) return;

    const headings = postArticle.querySelectorAll("h1, h2, h3");
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
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
  }, []);

  const handleClick = (id: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // 네비게이션 높이 고려
        behavior: "smooth",
      });

      // URL 변경 없이 히스토리만 갱신
      history.replaceState(null, "", `#${id}`);
    }
  };
  return (
    <nav className="h-full border-gray-300 p-7">
      <p className="border-b-[1px] border-slate-400 py-2 font-extrabold">
        On this page
      </p>
      <ul className="mt-2 space-y-1">
        {toc.map((item, index) => (
          <li key={index} className={`pl-${(item.level - 1) * 4}`}>
            <button
              className="text-accent-primary hover:font-semibold"
              onClick={(e) => handleClick(item.id, e)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogContentToc;
