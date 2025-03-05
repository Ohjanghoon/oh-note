import { readdir } from "fs/promises";
import path from "path";

// types
import { PostMetadata } from "@/types/postTypes";
import { NextResponse } from "next/server";

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
async function getPostsByTag(tag: string): Promise<PostMetadata[]> {
  const posts = await getPosts();

  const lowerCaseTag = tag.toLowerCase();

  return posts.filter(
    (post) =>
      post.categories &&
      post.categories.some((tag) => tag.toLowerCase() === lowerCaseTag),
  );
}

/** 🍎 GET 요청 핸들러 */
export async function GET(req: Request) {
  const { pathname, searchParams } = new URL(req.url);

  try {
    // "/api/blog?tag=react" 요청(특정 태그 게시글 리턴)
    const tag = searchParams.get("tag");
    if (tag) {
      return NextResponse.json(await getPostsByTag(tag));
    }

    // "/api/blog" 요청(전체 게시글 목록 리턴)
    return NextResponse.json(await getPosts());
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
