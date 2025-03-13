"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// types
import { PostMetadata } from "@/types/postTypes";

// utils
import { formatRelativeDate } from "@/utils/utls";

// icons
import { MdAccessTime } from "react-icons/md";

// components
import ImageConvert from "../ui/ImageConvert";

function PostCard({ post }: { post: PostMetadata }) {
  const { title, description, publishDate, thumbnailUrl, tags } = post;
  const [formattingDate, setFormattingDate] = useState<string>("");
  const [thumbTag, setThumbTag] = useState<string>("");

  useEffect(() => {
    setFormattingDate(formatRelativeDate(publishDate));
    setThumbTag(tags.length > 0 ? tags[0] : "");
  }, [publishDate, tags]);

  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className="post_card-link z-1"
    >
      <div className="post_card-container group bg-background dark:bg-background flex flex-col items-center transition-[background-color] duration-300 md:flex-row md:gap-5">
        <div className="post_card-img_wrapper w-full max-w-screen-sm p-2">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <ImageConvert
              props={{
                width: 1366,
                height: 768,
                src: thumbnailUrl,
                alt: "Post Thumbnail",
                styleClassName:
                  "post_card-image h-full w-full transition-[scale] duration-300 ease-in-out group-hover:scale-105 rounded-2xl",
              }}
            />
          </div>
        </div>
        <div className="post_card-content h-full w-full space-y-2 p-3">
          <p className="post_card-tag ring-primary text-primary inline-block rounded-full px-2 text-xs ring-1">
            {thumbTag}
          </p>
          <h4 className="post_card-title font-bold tracking-tight">{title}</h4>
          <p className="text-text-dark-secondary"> {description}</p>
          <p className="post_card-publishDate flex items-center gap-1">
            <MdAccessTime />
            {formattingDate}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
