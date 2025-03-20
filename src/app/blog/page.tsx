// components
import PostCardList from "@/components/blog/PostCardList";
// import TagList from "@/components/blog/TagList";
import TitleHeader from "@/components/common/TitleHeader";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ tag: string }>;
}) {
  const params = await searchParams;
  const searchTag = params.tag;

  return (
    <div className="blog_container">
      <header className="blog-header">
        <TitleHeader
          title="Blog"
          description="개발하며 배운 지식을 기록하는 블로그 공간입니다."
        />
      </header>
      <section className="blog-posts">
        <section className="posts-grid">
          {/* <TagList tag={searchTag} /> */}
          <PostCardList tag={searchTag} />
        </section>
      </section>
    </div>
  );
}
