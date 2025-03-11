import TagList from "@/components/blog/TagList";
import PostCardList from "@/components/blog/PostCardList";
import TitleHeader from "@/components/common/TitleHeader";
import GridBackground from "@/components/ui/GridBackground";
import Hero from "@/components/home/Hero";

export default async function Home() {
  return (
    <section className="home">
      <GridBackground />
      <Hero />
    </section>
  );
}
