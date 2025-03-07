"use client";

// node modules
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
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
  const { tags, status, error } = useSelector((state: RootState) => {
    return state.tag;
  });

  const searchParams = useSearchParams();
  const searchTag = searchParams.get("tag");

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <nav className="tag-wrapper flex w-full items-center gap-2 overflow-x-auto p-1 whitespace-nowrap">
      {tags.map((tag: Tag) => {
        const { tagName, count } = tag;
        const href =
          tagName.toLowerCase() === "all" ? "/blog" : `/blog?tag=${tagName}`;
        const isSelected =
          tagName.toLowerCase() === "all"
            ? !searchTag
            : tagName.toLowerCase() === searchTag?.toLowerCase();
        return (
          <Tag props={{ tagName, count, href, isSelected }} key={tag.tagName} />
        );
      })}
    </nav>
  );
}

function Tag({ props }: { props: TagProps }) {
  const { tagName, count, href, isSelected } = props;
  return (
    <Link
      href={href}
      className={`border-primary flex max-w-full items-center justify-center gap-1 rounded-full border-1 px-3 py-1 transition-colors duration-200 ${isSelected ? "bg-primary text-text-light pointer-events-none" : "hover:bg-link-light hover:text-text-light"}`}
    >
      <span>{tagName}</span>
      <span className="text-sm">({count})</span>
    </Link>
  );
}

export default TagList;
