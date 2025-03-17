"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// store
import { RootState } from "@/store/store";

// types
import { PostMetadata, Tag } from "@/types/postTypes";

// icons
import { FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

interface SearchModalProps {
  searchTab?: "post" | "tag";
  onClose: (isOpen: boolean) => void;
}

const tabList = [
  {
    label: "Posts",
    value: "post",
    styleClassName: "ring-primary text-primary",
    active: "bg-primary/20 dark:bg-primary/20",
  },
  {
    label: "Tags",
    value: "tag",
    styleClassName: "ring-[#e31ea1] text-[#e31ea1]",
    active: "bg-[#e31ea1]/20 dark:bg-tag-point1/20",
  },
];

function SearchModal({ searchTab = "post", onClose }: SearchModalProps) {
  const [searchTermKeyword, setSearchTermKeyword] = useState("");
  const [searchTabValue, setSearchTabValue] = useState<string>(searchTab);

  const { posts } = useSelector((state: RootState) => state.post);
  const { tags } = useSelector((state: RootState) => state.tag);
  console.log(tags);
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
  console.log("filterdPosts: " + filteredPosts);

  const filteredTags = useMemo(() => {
    return tags.filter((tag) =>
      tag.tagName.toLocaleLowerCase().includes(searchTermKeyword.toLowerCase()),
    );
  }, [searchTermKeyword, tags]);
  console.log("filteredTags", filteredTags);
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
      className="search_modal bg-bg-darker/80 fixed inset-0 z-[1000] flex h-screen w-full justify-center p-5 md:items-center"
      onClick={onModalClose}
    >
      <div
        className="search_modal-container bg-background grid h-140 w-full max-w-screen-sm grid-rows-[0.5fr_5.5fr] rounded-xl pt-2 pb-5 ring-[0.2px] md:max-h-170 md:max-w-screen-md"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="search_modal-header px-5 md:px-10">
          <div className="header-tab_container space-x-2 py-2">
            {tabList.map((tab) => {
              return (
                <button
                  key={tab.value}
                  className={`rounded-md p-1 text-xs ring-1 ${tab.styleClassName} ${tab.value === searchTabValue ? tab.active : "bg-transparent"}`}
                  onClick={() => setSearchTabValue(tab.value)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="header-input_container border-muted flex w-full items-center gap-2 border-b-1 py-2">
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
        </header>

        <section className="search_modal-section h-full overflow-auto px-5 py-5 md:px-10">
          {searchTabValue === "post" ? (
            <SearchPosts
              filteredPosts={filteredPosts}
              onModalClose={onModalClose}
            />
          ) : (
            <SearchTags
              filteredTags={filteredTags}
              onModalClose={onModalClose}
            />
          )}
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
    <div className="filtered_posts-container space-y-3">
      <p className="px-2">
        <span>검색된 게시글 수 : </span>
        <span className="font-bold">{filteredPosts.length}</span>
      </p>
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
                      <h6 className="line-clamp-2 overflow-ellipsis">
                        {title}
                      </h6>
                      <p className="text-text-dark-muted">{description}</p>
                      <div className="flex items-center gap-2">
                        {tags.length > 0 &&
                          tags.map((tag) => {
                            return (
                              <span
                                key={tag}
                                className="ring-ring bg-muted/10 text-primary-light rounded-full px-2 py-0.5 text-xs ring-1"
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
    </div>
  );
}

function SearchTags({
  filteredTags,
  onModalClose,
}: {
  filteredTags: Tag[];
  onModalClose: () => void;
}) {
  return (
    <div className="filtered_posts-container space-y-3">
      <p className="px-2">
        <span>검색된 태그 수 : </span>
        <span className="font-bold">{filteredTags.length}</span>
      </p>
      <ul className="flex flex-wrap gap-3">
        {filteredTags.length > 0 &&
          filteredTags.map((tag) => {
            const { tagName, count } = tag;
            return (
              <li
                key={tagName}
                className="group bg-bg-subtle hover:bg-bg-subtle-hover rounded-md"
              >
                <Link href={`/blog?tag=${tagName}`} onClick={onModalClose}>
                  <div className="flex items-center gap-1.5 p-2">
                    <span className="text-xs md:text-sm">{tagName}</span>
                    <span className="text-primary text-xs">{count}</span>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default SearchModal;
