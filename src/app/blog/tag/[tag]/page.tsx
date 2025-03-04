import PostCard from "@/components/PostCard";
import { getTags, getPostsByTag } from "@/lib/blog";
import { notFound } from "next/navigation";

export default async function Tag({ params }: { params: { tag: string } }) {
  const { tag } = params;
  const categories = await getTags();
  // 404 if the category does not exist
  if (categories.indexOf(tag) == -1) notFound();

  const posts = await getPostsByTag({ tag });

  return (
    <section>
      <h1>tag: {tag}</h1>
      <PostCard posts={posts} />
    </section>
  );
}
