"use client";

import { PostMetadata } from "@/types/postTypes";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineViewModule, MdOutlineViewList } from "react-icons/md";

interface Props {
  posts: PostMetadata[];
}

const PostCard: React.FC<Props> = ({ posts }) => {
  const [viewMode, setViewMode] = useState("gallery");
  return (
    <>
      <div className="text-end py-2 ">
        <button
          className={`rounded-[50%] p-1 text-2xl text-text-dark-primary hover:rounded-lg transition-all duration-200 ${
            viewMode === "gallery" ? "bg-[#798897]/20" : ""
          }`}
          onClick={() => setViewMode("gallery")}
        >
          <MdOutlineViewModule />
        </button>
        <button
          className={`rounded-[50%] p-1 text-2xl text-text-dark-primary hover:rounded-lg transition-all duration-200 ${
            viewMode === "list" ? "bg-[#798897]/20" : ""
          }`}
          onClick={() => setViewMode("list")}
        >
          <MdOutlineViewList />
        </button>
      </div>
      <ul
        className={`grid grid-cols-1 ${
          viewMode === "gallery" ? "md:grid-cols-3" : "md:grid-cols-1"
        } gap-6`}
      >
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/${post.slug}`}>
              <li
                className={`grid rounded-2xl w-full bg-light-secondary overflow-hidden shadow-lg group hover:scale-102 ring-ring-DEFAULT ring-[0.4px] transition duration-300 ${
                  viewMode === "gallery"
                    ? "flex-col gird-cols-1 h-[320px] md:h-[320px]"
                    : "flex-row grid-cols-[3fr_1fr] h-[140px] md:h-[180px]"
                }
                `}
              >
                <img
                  src={post.thumbnailUrl}
                  alt=""
                  className={`h-[230px] w-full object-cover object-center order-2`}
                />
                <div
                  className={`p-2 ${
                    viewMode === "gallery" ? "order-2" : "order-1"
                  }`}
                >
                  <h5 className="line-clamp-1 overflow-hidden text-ellipsis ">
                    {post.title}
                  </h5>
                  <p className="text-xs text-text-dark-secondary mt-1">
                    {post.publishDate}
                  </p>
                  <div className="flex items-center gap-1">
                    {post.categories &&
                      post.categories.map((category) => {
                        return (
                          <span
                            key={category}
                            className="text-xs bg-accent-primary/30 px-2 py-1 rounded-full"
                          >
                            {category}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default PostCard;
