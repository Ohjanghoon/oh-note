import PostCard from "@/components/PostCard";
import { getPosts } from "@/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h1>HOME</h1>
      <PostCard posts={posts} />
    </div>
  );
}
