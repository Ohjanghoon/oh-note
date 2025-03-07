import TagList from "@/components/TagList";
import PostCardList from "@/components/PostCardList";
import TitleHeader from "@/components/common/TitleHeader";

export default async function Home() {
  return (
    <section className="main-section">
      <TitleHeader title="Oh-note" description="개인 블로그입니다." />
      {/* <PostCard posts={posts} /> */}
    </section>
  );
}
