import { readdir } from "fs/promises";
import path from "path";

// types
import { PostMetadata } from "@/types/postTypes";
import { Tag } from "@/types/postTypes";

/** 모든 블로그 게시글 가져오기 */
export async function getPosts(): Promise<PostMetadata[]> {
  const postPath = path.resolve(process.cwd(), "src", "app", "blog", "(posts)");

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/app/blog/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  // 최신 순으로 정렬
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

/** 특정 태그의 게시글 가져오기 */
export async function getPostsByTag(tag: string): Promise<PostMetadata[]> {
  const posts = await getPosts();

  const lowerCaseTag = tag.toLowerCase();

  return posts.filter((post) => {
    if (!post.tags) return false;

    const lowerCaseTags = new Set(post.tags.map((t) => t.toLowerCase()));
    return lowerCaseTags.has(lowerCaseTag);
  });
}

/** 블로그 게시글 태그 가져오기 */
export async function getTags(): Promise<Tag[]> {
  const posts = await getPosts();

  // 태그별 개수를 저장할 Map 생성
  const tagMap = new Map<string, number>();

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    }
  });

  const allCount = posts.length;

  return [
    { tagName: "All", count: allCount },
    ...Array.from(tagMap, ([tagName, count]) => ({ tagName, count })),
  ];
}
