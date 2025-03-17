"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// store
import { RootState } from "@/store/store";

// contexts
import { useSearchModal } from "@/contexts/SearchModalContext";

// types
import { Tag } from "@/types/postTypes";
import { FiSearch } from "react-icons/fi";

function TagList() {
  const { openSearchModal, setSearchTab } = useSearchModal();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTag = searchParams.get("tag") || "All";

  const { tags } = useSelector((state: RootState) => state.tag);
  const [tagList, setTagList] = useState<Tag[]>([]);

  const [showToptShadow, setShowToptShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(true);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } =
      scrollContainerRef.current;

    setShowToptShadow(scrollTop > 10);
    setShowBottomShadow(scrollTop + clientHeight + 10 < scrollHeight);
  };

  function onSearchModalOpen() {
    openSearchModal();
    setSearchTab("tag");
    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    if (!tags.length) return;

    const sliceTagList = [...tags].toSorted((a, b) => b.count - a.count);

    setTagList(sliceTagList);
  }, [tags]);

  return (
    <div className="sidebar-tag_container">
      <div className="tag_title text-text-dark-secondary flex min-w-[175px] items-center justify-between px-2 text-lg">
        <span>Tags</span>
        <button
          className="search_tag_btn ring-text-muted/60 text-text-dark-muted hover:bg-bg-muted/50 flex items-center justify-center rounded-lg p-1 ring-1 transition-[background-color] duration-300"
          onClick={onSearchModalOpen}
        >
          <span>
            <FiSearch className="text-xl md:text-base" />
          </span>
        </button>
      </div>
      <div className="bg-bg-muted mt-2 h-[0.5px] w-full"></div>
      <div className="tag_list relative mt-4">
        <div
          className={`top_shadow from-bg-dark/8 pointer-events-none absolute top-0 left-0 h-7 w-full bg-gradient-to-b to-transparent py-1 transition-opacity duration-500 ${showToptShadow ? "opacity-100" : "opacity-0"}`}
        ></div>

        <ul
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="scrollbar-hide max-h-150 overflow-y-auto"
        >
          {tagList?.map((tag) => {
            const src =
              tag.tagName === "All" ? "/blog" : `/blog?tag=${tag.tagName}`;
            const isActive =
              pathName === "/blog" &&
              searchTag?.toLowerCase() === tag.tagName.toLowerCase();
            return (
              <Link
                key={tag.tagName}
                href={src}
                className={`${isActive ? "pointer-events-none" : "pointer-events-auto"}`}
              >
                <li
                  className={`hover:bg-bg-subtle-hover z-1 flex min-w-[175px] items-center justify-between rounded-lg px-2 py-3 text-[13px] transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground"}`}
                >
                  <span>
                    {tag.tagName === "All" ? "전체 게시글 보기" : tag.tagName}
                  </span>
                  <span>{tag.count}</span>
                </li>
              </Link>
            );
          })}
          {tagList.length >= 10 && <li className="px-1 py-5"></li>}
        </ul>

        <div
          className={`bottom_shadow from-bg-dark/8 pointer-events-none absolute bottom-0 left-0 h-7 w-full bg-gradient-to-t to-transparent py-1 transition-opacity duration-500 ${showBottomShadow ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  );
}

export default TagList;
