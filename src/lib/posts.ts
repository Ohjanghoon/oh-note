// import { readdir } from "fs/promises";
import path from "path";
import fs from "fs";

// lib
import { selectLikes } from "@/lib/supabase/likes";

// types
import { PostMetadata } from "@/types/postTypes";
import { Tag } from "@/types/postTypes";

interface PostType extends PostMetadata {
  likes: number;
}

/** 모든 블로그 게시글 가져오기 */
export async function getPosts(): Promise<PostType[]> {
  const postPath = path.resolve(process.cwd(), "src", "content");

  const filenames = fs.readdirSync(postPath);

  // 이전 코드(디렉토리 기준으로 slug 추출)
  // const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
  //   (dirent) => dirent.isDirectory(),

  const slugs = filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      name: file.replace(".mdx", ""),
    }));

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/content/${name}.mdx`);
      const { count: likes } = await selectLikes(name);
      return { slug: name, likes, ...metadata };
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
