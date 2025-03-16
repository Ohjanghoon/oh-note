import { supabase } from "@/server/supabase";
import { Guestbook } from "@/types/guestbookTypes";

// utils
import { formatDateTime } from "@/utils/utils";

/** 모든 방명록 글 가져오기 */
export async function selectGuestbook(): Promise<Guestbook[]> {
  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .order("createdAt", { ascending: true });

  if (error) {
    console.error("Error fetching guestbook:", error);
    return [];
  }
  return (
    data?.map((entry) => ({
      id: entry.id,
      nickname: entry.nickname ?? "익명 " + entry.id,
      content: entry.content,
      createdAt: formatDateTime(entry.createdAt),
      emoji: entry.emoji,
    })) || []
  );
}

/** 방명록 추가하기 */
export async function insertGuestbook(guestbook: {
  nickname: string | null;
  content: string;
  emoji: string;
}): Promise<Guestbook | null> {
  const { data, error } = await supabase
    .from("guestbook")
    .insert([guestbook])
    .select("*")
    .single();

  if (error) {
    console.error("Error inserting guestbook:", error);
    return null;
  }

  const returnGuestbook: Guestbook = {
    id: data.id,
    nickname: guestbook.nickname ?? `익명 ${data.id}`,
    content: guestbook.content,
    createdAt: formatDateTime(data.createdAt),
    emoji: guestbook.emoji,
  };
  return returnGuestbook;
}
