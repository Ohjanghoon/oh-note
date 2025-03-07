"use client";

// node modules
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// types
import { PostMetadata } from "@/types/postTypes";

// store
import { AppDispatch, RootState } from "@/store/store";
import { getPosts } from "@/store/slices/blogPostSlice";

// icons
import {
  MdOutlineViewModule,
  MdOutlineViewList,
  MdAccessTime,
  MdGridView,
} from "react-icons/md";
import { useParams, useSearchParams } from "next/navigation";

function PostCardList() {
  const dispatch = useDispatch<AppDispatch>();

  const searchParams = useSearchParams();
  const searchTag = searchParams.get("tag");

  const { posts, status, error } = useSelector(
    (state: RootState) => state.post,
  );

  useEffect(() => {
    if (searchTag) {
      dispatch(getPosts(searchTag));
    } else {
      dispatch(getPosts());
    }
  }, [searchTag, dispatch]);

  const [viewMode, setViewMode] = useState("gallery");
  return (
    <div className="postcard-list">
      {/* <div className="py-2 text-end">
        <button
          className={`text-text-dark-primary rounded-[50%] p-[0.4rem] text-xl transition-all duration-200 hover:rounded-lg ${
            viewMode === "gallery" ? "bg-[#798897]/20" : ""
          }`}
          onClick={() => setViewMode("gallery")}
        >
          <MdGridView />
        </button>
        <button
          className={`text-text-dark-primary rounded-[50%] p-1 text-2xl transition-all duration-200 hover:rounded-lg ${
            viewMode === "list" ? "bg-[#798897]/20" : ""
          }`}
          onClick={() => setViewMode("list")}
        >
          <MdOutlineViewList />
        </button>
      </div> */}
      <ul className={"grid grid-cols-3 gap-x-5 gap-y-10"}>
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <li
                className={`postcard group w-full space-y-4 overflow-hidden rounded-xl`}
              >
                <div className="postcard-img_wraaper relative order-2 h-44 w-full overflow-hidden rounded-xl">
                  <img
                    src={post.thumbnailUrl}
                    alt=""
                    loading="eager"
                    className={`h-full w-full object-cover object-center transition-[scale] duration-300 ease-in-out group-hover:scale-105`}
                  />
                </div>
                <div
                  className={`postcard-container flex h-full flex-col justify-between space-y-1 p-1 align-top ${
                    viewMode === "gallery" ? "order-2" : "order-1"
                  }`}
                >
                  <div className="postcard-container-content space-y-2">
                    <h6 className="postcard-container-content-header group-hover:text-link-hover line-clamp-1 overflow-hidden text-ellipsis transition-colors duration-300">
                      {post.title}
                    </h6>
                    <p className="postcard-container-content-article text-text-muted line-clamp-2 h-16 overflow-hidden text-sm font-medium text-ellipsis">
                      <span>{post.description}</span>
                    </p>
                  </div>
                  <div className="postcard-container-footer text-text-dark-secondary flex items-center justify-between gap-2 text-xs">
                    <span className="flex items-center gap-1">
                      <MdAccessTime />
                      {new Date(post.publishDate).toDateString()}
                    </span>
                    {post.tags?.length > 0 && (
                      <div className="space-x-1">
                        {post.tags.map((tag) => {
                          return (
                            <span
                              key={tag}
                              className="bg-muted/10 ring-ring text-primary-light rounded-full px-2 py-[1px] text-xs ring-1"
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* <div className="flex items-center gap-1">
                      {post.tags &&
                        post.tags.map((category) => {
                          return (
                            <span
                              key={category}
                              className="bg-accent-primary/30 rounded-full px-2 py-[1px] text-xs"
                            >
                              {category}
                            </span>
                          );
                        })}
                    </div> */}
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default PostCardList;
