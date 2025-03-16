import { supabase } from "@/server/supabase";
import { Guestbook } from "@/types/guestbookTypes";

// utils
import { formatDateTime } from "@/utils/utils";

/** 모든 방명록 글 가져오기 */
export async function selectGuestbook(): Promise<Guestbook[]> {
  const { data } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    data?.map((entry) => ({
      id: entry.id,
      nickname: entry.nickname,
      content: entry.content,
      createdAt: formatDateTime(entry.created_at),
      emoji: entry.imoji,
    })) || []
  );
}
