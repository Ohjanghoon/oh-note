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
import ImageConvert from "../ui/ImageConvert";

// icons
// import { FaFire } from "react-icons/fa6";
import { RiSignpostFill } from "react-icons/ri";

function Hero() {
  const [recentPosts, setRecentPosts] = useState<PostMetadata[]>([]);

  const { posts } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (posts.length > 0) {
      setRecentPosts(posts.slice(0, 5));
    }
  }, [posts]);

  return (
    <div className="hero-section relative z-10">
      <HeroSection />
      <RecentPostsSection recentPosts={recentPosts} />

      {/* <SearchBar /> */}
    </div>
  );
}

/** Hero Banner 영역 */
function HeroSection() {
  return (
    <section className="home-hero mx-auto flex flex-col justify-between gap-10 md:flex-row md:items-end md:gap-0">
      <div className="hero-image_wrapper mx-auto md:order-2 md:mx-0">
        <ImageConvert
          props={{
            width: 411,
            height: 302,
            src: "/assets/logo_text.png",
            alt: "logo_text",
            styleClassName: "mx-auto w-full h-60 md:h-80 opacity-5 ",
          }}
        />
      </div>
      <div className="hero-heading_container mx-auto flex h-full flex-col items-start justify-end md:mx-0">
        {/* <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-[60px] tracking-tight text-transparent"> */}
        <h1 className="heading_container-title text-text-dark tracking-tight md:text-6xl">
          oh-note
        </h1>
        <p className="heading_container-subtle text-text-dark-secondary mt-2 md:text-[16px]">
          개발 기록과 학습한 내용을 정리하는 개인 블로그 공간입니다. <br />
          Next.js & TailwindCSS 기반으로 제작되었습니다.
        </p>
        <Link
          href="/blog"
          className="heading_container-link bg-primary text-text-light mt-5 rounded-lg px-6 py-3 font-semibold shadow-lg hover:bg-blue-500"
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
      <h5 className="recent_posts-title flex items-center gap-2 font-bold">
        <RiSignpostFill className="text-primary" /> 최신 게시글
      </h5>
      <div className="recent_posts-carousel_container mt-5 grid grid-cols-1 gap-5">
        <Carousel>
          {recentPosts.map((post) => {
            return <PostCard post={post} key={post.slug} />;
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
//             <div className="relative w-full h-full max-w-screen-lg mx-auto overflow-hidden img_wrapper rounded-2xl">
//               <img src={post.thumbnailUrl} alt="" className="" />
//               <div className="absolute top-0 left-0 w-full h-full transition-all duration-200 bg-black/60 backdrop-blur-xs">
//                 <div className="absolute text-text-light bottom-10 left-10">
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
//     <div className="relative max-w-lg mx-auto">
//       <input
//         type="text"
//         placeholder="검색어를 입력하세요..."
//         className="w-full p-3 pl-10 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//       />
//       <span className="absolute text-gray-400 top-3 left-3">🔍</span>
//     </div>
//   );
// }

export default Hero;
