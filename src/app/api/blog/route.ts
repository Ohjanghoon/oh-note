import { NextResponse } from "next/server";
import { getPosts, getPostsByTag } from "@/lib/posts";

/** 🍎 GET 요청 핸들러 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  try {
    // "/api/blog?tag=react" 요청(특정 태그 게시글 리턴)
    const tag = searchParams.get("tag");
    if (tag) {
      return NextResponse.json(await getPostsByTag(tag));
    }

    // "/api/blog" 요청(전체 게시글 목록 리턴)
    return NextResponse.json(await getPosts());
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
