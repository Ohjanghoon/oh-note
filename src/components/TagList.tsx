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
import { MdOutlineClose } from "react-icons/md";

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
          const isSelected = searchTag === tag;
          return (
            <Link href={href} key={tag}>
              <div
                className={`ring-accent-primary flex items-center gap-1 rounded-full px-2 py-[3px] text-xs ring-1 ${isSelected ? "bg-accent-primary text-white" : ""}`}
              >
                <span>{tag}</span>
                {isSelected && <MdOutlineClose />}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default TagList;
