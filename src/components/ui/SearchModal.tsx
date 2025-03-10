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
        console.log("검색 모달창 닫기");
        onModalClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <section
      className="search_modal bg-bg-dark/20 fixed inset-0 z-100 flex h-screen w-full items-center justify-center p-5"
      onClick={onModalClose}
    >
      <div
        className="search_modal-container bg-background grid h-full w-full max-w-screen-sm grid-rows-[0.5fr_5.5fr] rounded-xl p-5 md:max-h-120 md:max-w-screen-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search_modal-input_container flex w-full items-center gap-2 border-b-1">
          <FiSearch className="text-text-muted text-2xl" />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="w-full rounded-xl py-2"
            onChange={(e) => setSearchTermKeyword(e.target.value)}
          />
          <button
            className="text-text-muted hover:bg-muted/10 rounded-md p-1 text-xs shadow-sm ring-1"
            onClick={onModalClose}
          >
            ESC
          </button>
        </div>
        <section className="search_modal-section h-full overflow-auto p-5">
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
  console.log("filteredPosts ===> ", filteredPosts);
  return (
    <ul className="space-y-3">
      {filteredPosts.length > 0 &&
        filteredPosts.map((post) => {
          const { slug, title, description, tags } = post;
          return (
            <li
              key={slug}
              className="group bg-bg-subtle rounded-xl hover:bg-[#e8e7e3]"
            >
              <Link href={`/blog/${slug}`} onClick={onModalClose}>
                <div className="flex w-full items-center gap-1 p-5">
                  <div className="w-full">
                    <h6 className="">{title}</h6>
                    <p>{description}</p>
                    <p>{tags}</p>
                  </div>
                  <button className="group-hover:bg-link-light group-hover:text-text-light rounded-full p-1 font-extrabold">
                    <IoIosArrowForward className="text-xl" />
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
