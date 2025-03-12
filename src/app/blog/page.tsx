// components
import PostCardList from "@/components/blog/PostCardList";
import TagList from "@/components/blog/TagList";
import TitleHeader from "@/components/common/TitleHeader";

export default function Blog() {
  return (
    <section className="blog">
      <header className="blog-header">
        <TitleHeader
          title="Blog"
          description="개발하며 배운 지식을 기록하는 블로그 공간입니다."
        />
      </header>
      <section className="blog-section">
        <TagList />
        <PostCardList />
      </section>
    </section>
  );
}
