"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// store
import { getTags } from "@/store/slices/blogTagSlice";
import { AppDispatch, RootState } from "@/store/store";

// icons
import { Tag } from "@/types/postTypes";

interface TagProps extends Tag {
  href: string;
  isSelected: boolean;
}

function TagList() {
  const dispatch = useDispatch<AppDispatch>();
  const { tags } = useSelector((state: RootState) => state.tag);

  const searchParams = useSearchParams();
  const searchTag = searchParams.get("tag");

  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setShowLeftShadow(scrollLeft > 0);
    setShowRightShadow(scrollLeft + clientWidth < scrollWidth);
  };

  return (
    <div className="relative w-full">
      {/* 왼쪽 그림자 (showLeftShadow가 true일 때만 보이도록 처리) */}
      {showLeftShadow && (
        <div className="from-primary-light/20 l pointer-events-none absolute top-0 left-0 h-full w-5 bg-gradient-to-r to-transparent py-1"></div>
      )}

      {/* 스크롤 가능한 태그 리스트 */}
      <nav
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="blog-tag_list scrollbar-hide flex w-full items-center gap-1 overflow-x-auto p-1 whitespace-nowrap"
      >
        {tags.map((tag: Tag) => {
          const { tagName, count } = tag;
          const href =
            tagName.toLowerCase() === "all" ? "/blog" : `/blog?tag=${tagName}`;
          const isSelected =
            tagName.toLowerCase() === "all"
              ? !searchTag
              : tagName.toLowerCase() === searchTag?.toLowerCase();
          return (
            <TagLink
              props={{ tagName, count, href, isSelected }}
              key={tag.tagName}
            />
          );
        })}
      </nav>

      {/* 오른쪽 그림자 (showRightShadow가 true일 때만 보이도록 처리) */}
      {showRightShadow && (
        <div className="from-bg-dark/20 pointer-events-none absolute top-0 right-0 h-full w-15 bg-gradient-to-l to-transparent py-1"></div>
      )}
    </div>
  );
}

function TagLink({ props }: { props: TagProps }) {
  const { tagName, count, href, isSelected } = props;
  return (
    <Link
      href={href}
      className={`tag_link border-primary hover:bg-link-light group hover:text-text-light inline-flex max-w-full items-center justify-center gap-1 rounded-full border-1 px-3 py-1 ${
        isSelected ? "bg-primary text-text-light pointer-events-none" : ""
      }`}
    >
      <span>{tagName}</span>
      <span
        className={`text-primary-darken group-hover:text-text-light text-xs ${
          isSelected ? "text-text-light" : ""
        }`}
      >
        {count}
      </span>
    </Link>
  );
}

export default TagList;
