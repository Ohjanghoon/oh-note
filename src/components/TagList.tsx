"use client";

import { getTags } from "@/store/slices/blogTagSlice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TagList() {
  const dispatch = useDispatch<AppDispatch>();
  const { tags, status, error } = useSelector((state: RootState) => {
    return state.tag;
  });

  const searchParams = useSearchParams();
  const searchTag = searchParams.get("tag");

  useEffect(() => {
    dispatch(getTags());
  }, [searchTag, dispatch]);

  return (
    <div>
      Tags
      <nav className="flex flex-row flex-wrap gap-2">
        {tags.map((tag: string) => {
          const href = searchTag === tag ? "/blog" : `/blog?tag=${tag}`;
          return (
            <Link href={href} key={tag}>
              <span
                className={`ring-accent-primary rounded-full px-2 py-[3px] text-xs ring-1 transition-colors duration-300 ${searchTag === tag ? "bg-accent-primary text-white" : ""}`}
              >
                {tag}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default TagList;
