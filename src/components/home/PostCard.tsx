"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// types
import { PostMetadata } from "@/types/postTypes";

// utils
import { formatRelativeDate } from "@/utils/utls";

// icons
import { MdAccessTime } from "react-icons/md";

function PostCard({ post }: { post: PostMetadata }) {
  const [formattingDate, setFormattingDate] = useState<string>("");
  const [thumbTag, setThumbTag] = useState<string>("");

  useEffect(() => {
    setFormattingDate(formatRelativeDate(post.publishDate));
    setThumbTag(post.tags.length > 0 ? post.tags[0] : "");
  }, [post.publishDate]);

  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className="post_card-link"
    >
      <div className="post_card-container group flex items-center gap-5">
        <div className="post_card-img_wrapper max-w-screen-sm overflow-hidden rounded-2xl">
          <img
            src={post.thumbnailUrl}
            alt="Post Thumbnail"
            className="post_card-image h-full w-full transition-[scale] duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="post_card-content space-y-2">
          <p className="post_card-tag ring-primary text-primary inline-block rounded-full px-2 text-xs ring-1">
            {thumbTag}
          </p>
          <h4 className="post_card-title font-bold tracking-tight">
            {post.title}
          </h4>
          <p className="text-text-dark-secondary"> {post.description}</p>
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
