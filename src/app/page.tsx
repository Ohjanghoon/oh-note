import Tag from "@/components/Tag";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/blog";

export default async function Blog() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section className="main-section">
      <div>
        {/* 제목 영역 */}
        <h2 className="relative inline-block font-extrabold">
          Home
          <span className="from-accent-primary absolute bottom-1 left-0 -z-10 h-[10px] w-full rounded-full bg-gradient-to-r"></span>
        </h2>
      </div>
      <p className="mt-2 text-sm">개발 블로그 포스팅 공간입니다.</p>
      <PostCard posts={posts} />
      <Tag />
    </section>
  );
}
