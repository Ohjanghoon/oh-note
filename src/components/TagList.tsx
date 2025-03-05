"use client";

import { getTags } from "@/store/slices/blogTagSlice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TagList() {
  const dispatch = useDispatch<AppDispatch>();
  const { tags, status, error } = useSelector((state: RootState) => {
    return state.tag;
  });

  console.log("tags ===>", tags);
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <div>
      Tags
      <nav className="flex flex-row flex-wrap gap-2">
        {tags.map((tag: string) => {
          return (
            <Link href={`/blog?tag=${tag}`} key={tag}>
              <span className="ring-ring rounded-full px-2 py-[3px] text-xs ring-1 transition-colors duration-300 hover:bg-gray-400">
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
