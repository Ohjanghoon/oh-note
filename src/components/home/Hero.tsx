"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// store
import { RootState } from "@/store/store";

// types
import { PostMetadata } from "@/types/postTypes";

// components
import Carousel from "@/components/ui/Carousel";
import PostCard from "@/components/home/PostCard";
// import ImageConvert from "../ui/ImageConvert";

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
    // <div className="relative z-10 hero-section"></div>
    <>
      <HeroSection />
      <RecentPostsSection recentPosts={recentPosts} />
    </>
  );
}

/** Hero Banner 영역 */
function HeroSection() {
  return (
    <section className="home-hero flex items-center justify-center">
      {/* <div className="absolute hero-image_wrapper bottom-1/2 left-1/2 translate-y-1/6 md:translate-y-1/3">
        <ImageConvert
          props={{
            width: 411,
            height: 302,
            src: "/assets/logo_text.png",
            alt: "logo_text",
            styleClassName:
              "w-full sm:h-40 md:h-55 lg:h-60 xl:h-70 opacity-2.5 dark:opacity-1 ",
          }}
        />
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.8,
            duration: 1.3,
            ease: "easeInOut",
          },
        }}
        className="hero-heading_container relative mx-auto flex h-full flex-col items-center justify-center px-0 md:mx-0 md:px-20"
      >
        {/* <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-[60px] tracking-tight text-transparent"> */}
        <h1 className="heading_container-title text-7xl tracking-tight sm:text-7xl md:text-8xl lg:text-8xl 2xl:text-9xl">
          oh-note<span className="text-primary">.</span>
        </h1>
        <p className="heading_container-subtle text-text-dark-secondary mt-2 md:text-[16px]">
          개발 기록과 학습한 내용을 정리하는 개인 블로그 공간입니다.
        </p>
        <p className="heading_container-subtle text-text-dark-secondary md:text-[16px]">
          Next.js & TailwindCSS 기반으로 제작되었습니다.
        </p>
        <Link
          href="/blog"
          className="heading_container-link text-text-light mt-10 rounded-lg bg-gradient-to-br from-[#6175f4] to-[#06e0e0] px-6 py-3 text-[16px] font-semibold shadow-lg transition-[scale] duration-300 hover:scale-102"
        >
          Go to Blog →
        </Link>
      </motion.div>
    </section>
  );
}

function RecentPostsSection({ recentPosts }: { recentPosts: PostMetadata[] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      className="home-recent_posts"
    >
      <section className="recent_posts-grid col-span-12">
        <h4 className="recent_posts-title flex items-center gap-2 px-2 font-bold">
          <RiSignpostFill className="text-primary" /> 최신 게시글
        </h4>
        <div className="recent_posts-carousel_container mt-5 grid grid-cols-1 gap-5">
          <Carousel>
            {recentPosts.map((post) => {
              return <PostCard post={post} key={post.slug} />;
            })}
          </Carousel>
        </div>
      </section>
    </motion.section>
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
