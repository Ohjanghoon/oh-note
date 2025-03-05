import { NextResponse } from "next/server";
import { getPosts } from "../route";

/** 블로그 게시글 태그 가져오기 */
async function getTags(): Promise<any> {
  const posts = await getPosts();

  // Set으로 변환하여 중복 제거, Array.from()로 다시 배열로 변환
  const tags = Array.from(
    new Set(
      posts.flatMap((post) => post.categories).filter((t) => t !== undefined),
    ),
  );
  return tags;
}
/** 🍎 GET 요청 핸들러 */
export async function GET(req: Request) {
  // "/api/blog/tags" 요청(태그 목록 리턴)
  return NextResponse.json(await getTags());
}
