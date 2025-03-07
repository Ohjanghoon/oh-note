import TagList from "@/components/blog/TagList";
import PostCardList from "@/components/blog/PostCardList";
import TitleHeader from "@/components/common/TitleHeader";

export default async function Home() {
  return (
    <section className="home-section">
      <header className="home__header">
        <TitleHeader title="Oh-note" description="개인 블로그입니다." />
      </header>
      {/* <PostCard posts={posts} /> */}
    </section>
  );
}
