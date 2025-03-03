import Category from "@/components/Category";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/posts";

export default async function Blog() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1>Blog</h1>
      <PostCard posts={posts} />
      <Category />
    </div>
  );
}
