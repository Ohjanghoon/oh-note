import { NextResponse } from "next/server";
import { getTags } from "@/lib/posts";

/** 🍎 GET 요청 핸들러 */
export async function GET() {
  try {
    // "/api/blog/tags" 요청(태그 목록 리턴)
    return NextResponse.json(await getTags());
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
