import { supabase } from "@/server/supabase";

/** 모든 방명록 글 가져오기 */
export async function selectGuestbook() {
  const { data } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    data?.map((entry) => ({
      id: entry.id,
      nickname: entry.nickname,
      content: entry.content,
      createdAt: entry.created_at,
    })) || []
  );
}
