import { readdir } from "fs/promises";
import path from "path";
import { PostMetadata } from "./types/postTypes";

export async function getPosts(): Promise<PostMetadata[]> {
  const postPath = path.resolve(process.cwd(), "src", "app", "blog", "(posts)");

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/blog/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getCategories(): Promise<any> {
  const posts = await getPosts();
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories)),
  );

  return categories;
}
export async function getPostsByCategory({
  category,
}: {
  category: string;
}): Promise<PostMetadata[]> {
  const posts = await getPosts();

  // 🔹 입력된 카테고리를 소문자로 변환
  const lowerCaseCategory = category.toLowerCase();

  return posts.filter(
    (post) =>
      post.categories &&
      post.categories.some((cat) => cat.toLowerCase() === lowerCaseCategory),
  );
}
