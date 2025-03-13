"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

// store
import { RootState } from "@/store/store";

// types
import { PostMetadata } from "@/types/postTypes";

// icons
import { FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

function SearchModal({ onClose }: { onClose: (isOpen: boolean) => void }) {
  const [searchTermKeyword, setSearchTermKeyword] = useState("");
  const { posts } = useSelector((state: RootState) => state.post);

  /** 모달창 닫기 */
  const onModalClose = () => {
    onClose(false);
    document.body.style.overflow = "auto";
  };

  /** 검색어가 변경될 때만 필터링 실행 */
  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTermKeyword.toLowerCase()),
    );
  }, [searchTermKeyword, posts]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onModalClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <section
      className="search_modal bg-bg-darker/40 fixed inset-0 z-100 flex h-screen w-full justify-center p-5 backdrop-blur-lg md:items-center"
      onClick={onModalClose}
    >
      <div
        className="search_modal-container bg-background grid h-140 w-full max-w-screen-sm grid-rows-[0.5fr_5.5fr] rounded-xl pb-5 ring-[0.2px] md:max-h-170 md:max-w-screen-md md:pt-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search_modal-input_container border-muted flex w-full items-center gap-2 border-b-1 px-5 md:px-10 md:py-2">
          <FiSearch className="text-text-muted text-2xl" />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="w-full md:py-2"
            onChange={(e) => setSearchTermKeyword(e.target.value)}
          />
          <button
            className="text-text-muted hover:bg-muted/10 rounded-md p-1 text-xs shadow-sm ring-1"
            onClick={onModalClose}
          >
            ESC
          </button>
        </div>
        <section className="search_modal-section h-full overflow-auto px-5 py-5 md:px-10">
          <SearchPosts
            filteredPosts={filteredPosts}
            onModalClose={onModalClose}
          />
        </section>
      </div>
    </section>
  );
}

function SearchPosts({
  filteredPosts,
  onModalClose,
}: {
  filteredPosts: PostMetadata[];
  onModalClose: () => void;
}) {
  return (
    <ul className="space-y-3">
      {filteredPosts.length > 0 &&
        filteredPosts.map((post) => {
          const { slug, title, description, tags } = post;
          return (
            <li
              key={slug}
              className="group bg-bg-subtle hover:bg-bg-subtle-hover rounded-xl"
            >
              <Link href={`/blog/${slug}`} onClick={onModalClose}>
                <div className="flex w-full items-center gap-1 p-5">
                  <div className="w-full space-y-3">
                    <h6 className="line-clamp-2 overflow-ellipsis">{title}</h6>
                    <p className="text-text-dark-muted">{description}</p>
                    <div className="flex items-center gap-2">
                      {tags.length > 0 &&
                        tags.map((tag) => {
                          return (
                            <span
                              key={tag}
                              className="ring-ring dark:ring-primary bg-muted/10 text-primary-light rounded-full px-2 py-0.5 text-xs ring-1"
                            >
                              {tag}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                  <button className="group-hover:text-link-light rounded-full p-1 text-xl font-extrabold transition-[background-color,font-size] duration-300 ease-in-out group-hover:text-2xl">
                    <IoIosArrowForward />
                  </button>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
export default SearchModal;
