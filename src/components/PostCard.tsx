"use client";

import { PostMetadata } from "@/types/postTypes";
import Link from "next/link";
import { useState } from "react";

import {
  MdOutlineViewModule,
  MdOutlineViewList,
  MdAccessTime,
} from "react-icons/md";

interface Props {
  posts: PostMetadata[];
}

const PostCard: React.FC<Props> = ({ posts }) => {
  const [viewMode, setViewMode] = useState("gallery");
  return (
    <>
      <div className="py-2 text-end">
        <button
          className={`text-text-dark-primary rounded-[50%] p-1 text-2xl transition-all duration-200 hover:rounded-lg ${
            viewMode === "gallery" ? "bg-[#798897]/20" : ""
          }`}
          onClick={() => setViewMode("gallery")}
        >
          <MdOutlineViewModule />
        </button>
        <button
          className={`text-text-dark-primary rounded-[50%] p-1 text-2xl transition-all duration-200 hover:rounded-lg ${
            viewMode === "list" ? "bg-[#798897]/20" : ""
          }`}
          onClick={() => setViewMode("list")}
        >
          <MdOutlineViewList />
        </button>
      </div>
      <ul
        className={`grid grid-cols-1 ${
          viewMode === "gallery" ? "md:grid-cols-2" : "md:grid-cols-1"
        } gap-6`}
      >
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <li
                className={`bg-card group ring-ring grid w-full grid-rows-[2fr_1.2fr] overflow-hidden rounded-md p-2 shadow-sm ring-[0.2px] ${
                  viewMode === "gallery"
                    ? "h-[480px] flex-col"
                    : "h-[140px] flex-row md:h-[180px]"
                } `}
              >
                <div className="order-2 h-full w-full overflow-hidden rounded-sm">
                  <img
                    src={post.thumbnailUrl}
                    alt=""
                    width={1200}
                    height={630}
                    className={`h-full w-full object-cover object-center transition-[scale] duration-300 group-hover:scale-105`}
                  />
                </div>
                <div
                  className={`mt-1 flex h-full flex-col justify-between space-y-1 p-2 align-top ${
                    viewMode === "gallery" ? "order-2" : "order-1"
                  }`}
                >
                  <div>
                    <h5 className="line-clamp-1 overflow-hidden text-ellipsis">
                      {post.title}
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, vel.
                    </p>
                  </div>
                  <div className="flex items-center justify-between justify-self-end">
                    <p className="text-text-dark-secondary inline-flex items-center gap-1 text-xs">
                      <MdAccessTime />

                      {post.publishDate}
                    </p>
                    <div className="flex items-center gap-1">
                      {post.categories &&
                        post.categories.map((category) => {
                          return (
                            <span
                              key={category}
                              className="bg-accent-primary/30 rounded-full px-2 py-[1px] text-xs"
                            >
                              {category}
                            </span>
                          );
                        })}
                    </div>
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
