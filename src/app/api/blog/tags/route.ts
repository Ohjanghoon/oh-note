import { NextResponse } from "next/server";
import { getPosts } from "../route";

// types
import { Tag } from "@/types/postTypes";

/** 블로그 게시글 태그 가져오기 */
async function getTags(): Promise<Tag[]> {
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
/** 🍎 GET 요청 핸들러 */
export async function GET(req: Request) {
  // "/api/blog/tags" 요청(태그 목록 리턴)
  return NextResponse.json(await getTags());
}
