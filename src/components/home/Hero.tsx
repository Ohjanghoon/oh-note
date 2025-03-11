"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// store
import { RootState } from "@/store/store";

// types
import { PostMetadata } from "@/types/postTypes";

// components
import Carousel from "@/components/ui/Carousel";
import PostCard from "@/components/home/PostCard";

// icons
import { FaFire } from "react-icons/fa6";
import { RiSignpostFill } from "react-icons/ri";

function Hero() {
  const [recentPosts, setRecentPosts] = useState<PostMetadata[]>([]);

  const { posts, status, error } = useSelector(
    (state: RootState) => state.post,
  );

  useEffect(() => {
    if (posts.length > 0) {
      setRecentPosts(posts.slice(0, 5));
    }
  }, [posts]);

  return (
    <>
      <HeroSection />
      <RecentPostsSection recentPosts={recentPosts} />

      {/* <SearchBar /> */}
    </>
  );
}

/** Hero Banner 영역 */
function HeroSection() {
  return (
    <section className="home-hero mx-auto flex items-end justify-between">
      <div className="hero-image_wrapper order-2 h-full">
        <img
          src="/assets/logo_text.png"
          alt=""
          className="mx-auto h-80 opacity-5"
        />
      </div>
      {/* 히어로 섹션 */}
      <div className="hero-heading_container flex h-full flex-col items-start justify-end">
        {/* <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-[60px] tracking-tight text-transparent"> */}
        <h1 className="heading_container-title text-6xl tracking-tight">
          oh-note
        </h1>
        <p className="heading_container-subtle text-text-dark-secondary mt-2 text-lg">
          개발 기록과 학습한 내용을 정리하는 개인 블로그 공간입니다. <br />
          Next.js & TailwindCSS 기반으로 제작되었습니다.
        </p>
        <Link
          href="/blog"
          className="heading_container-link bg-primary text-text-light mt-5 rounded-lg px-6 py-3 font-semibold shadow-lg transition hover:bg-blue-500"
        >
          Go to Blog →
        </Link>
      </div>
    </section>
  );
}

function RecentPostsSection({ recentPosts }: { recentPosts: PostMetadata[] }) {
  return (
    <section className="home-recent_posts mx-auto">
      <h4 className="recent_posts-title flex items-center gap-2 font-bold">
        <RiSignpostFill className="text-primary" /> 최신 게시글
      </h4>
      <div className="recent_posts-carousel_container mt-5 grid grid-cols-1 gap-5">
        <Carousel>
          {recentPosts.map((post) => {
            return <PostCard post={post} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}

// function RecentPosts({ recentPosts }: { recentPosts: PostMetadata[] }) {
//   return (
//     <section className="mx-auto">
//       <h2 className="flex items-center gap-2 text-3xl font-bold">
//         <RiSignpostFill className="text-success" /> 최신 게시글
//       </h2>
//       <div className="mt-5">
//         {recentPosts.map((post) => (
//           <a href={`/blog/${post.slug}`} key={post.slug} className="group">
//             <div className="img_wrapper relative mx-auto h-full w-full max-w-screen-lg overflow-hidden rounded-2xl">
//               <img src={post.thumbnailUrl} alt="" className="" />
//               <div className="absolute top-0 left-0 h-full w-full bg-black/60 backdrop-blur-xs transition-all duration-200">
//                 <div className="text-text-light absolute bottom-10 left-10">
//                   <h2 className="font-extrabold">{post.title}</h2>
//                   <p className="mt-2 text-sm">{parseDate(post.publishDate)}</p>
//                 </div>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// function SearchBar() {
//   return (
//     <div className="relative mx-auto max-w-lg">
//       <input
//         type="text"
//         placeholder="검색어를 입력하세요..."
//         className="w-full rounded-lg border p-3 pl-10 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//       />
//       <span className="absolute top-3 left-3 text-gray-400">🔍</span>
//     </div>
//   );
// }

export default Hero;
