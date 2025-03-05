// components
import PostCardList from "@/components/PostCardList";

export default function Blog() {
  return (
    <section className="main-section">
      <div className="pt-14">
        {/* 제목 영역 */}
        <h2 className="relative inline-block font-extrabold">
          Blog
          <span className="from-accent-primary absolute bottom-1 left-0 -z-10 h-[10px] w-full rounded-full bg-gradient-to-r"></span>
        </h2>
        <p className="mt-2 text-sm">개발 블로그 포스팅 공간입니다.</p>
      </div>
      <PostCardList />
    </section>
  );
}
