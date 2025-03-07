// components
import PostCardList from "@/components/PostCardList";
import TitleHeader from "@/components/common/TitleHeader";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="main-section">
      <TitleHeader
        title="Blog"
        description="개발하며 배운 지식을 기록하는 블로그 공간입니다."
      />
      <PostCardList />
    </section>
  );
}
