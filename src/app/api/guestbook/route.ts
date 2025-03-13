import { NextResponse } from "next/server";

import { selectGuestbook } from "@/lib/supabase/guestbook";

export async function GET() {
  try {
    // "/api/guestbook" 요청(방명록 목록 리턴)
    return NextResponse.json(await selectGuestbook());
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
