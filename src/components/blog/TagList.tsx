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

function TagList({ isOpen }: { isOpen: boolean }) {
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

    console.log("scrollTop: " + scrollTop);
    setShowToptShadow(scrollTop > 10);
    setShowBottomShadow(scrollTop + clientHeight < scrollHeight);
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
    <div
      className={`sidebar-tag_container mt-20 h-full min-w-[175px] px-7 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="tag_title text-text-dark-secondary flex items-center justify-between px-2 text-lg">
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
        {/* 왼쪽 그림자 (showLeftShadow가 true일 때만 보이도록 처리) */}

        <div
          className={`from-bg-dark/8 pointer-events-none absolute top-0 left-0 h-7 w-full bg-gradient-to-b to-transparent py-1 transition-opacity duration-300 ${showToptShadow ? "opacity-100" : "opacity-0"}`}
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
                  className={`hover:bg-bg-subtle-hover flex w-full items-center justify-between rounded-lg p-3 text-[13px] transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground"}`}
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
          className={`from-bg-dark/8 pointer-events-none absolute bottom-0 left-0 h-7 w-full bg-gradient-to-t to-transparent py-1 transition-opacity duration-300 ${showBottomShadow ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  );
}

export default TagList;
