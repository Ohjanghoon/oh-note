// types
import { supabase } from "@/server/supabase";

/** 좋아요 조회 */
export async function selectLikes(
  postId: string,
  clientToken?: string | null,
): Promise<{ count: number; liked: boolean }> {
  const { data, count, error } = await supabase
    .from("likes")
    .select("*", { count: "exact" })
    .eq("postId", postId);

  if (error) {
    console.error("Error fetching likes", error);
    return { count: 0, liked: false };
  }

  const liked = clientToken
    ? data?.some((like) => like.clientToken === clientToken)
    : false;

  return { count: count || 0, liked: liked };
}

/** 좋아요 추가 */
export async function insertLikes(
  postId: string,
  clientToken: string,
): Promise<{ success: boolean }> {
  const { error } = await supabase
    .from("likes")
    .insert([{ postId, clientToken }]);

  if (error) {
    console.error("Error inserting likes", error);
    return { success: false };
  }

  return { success: true };
}

/** 좋아요 삭제 */
export async function deleteLikes(
  postId: string,
  clientToken: string,
): Promise<{ success: boolean }> {
  const { data, error } = await supabase
    .from("likes")
    .delete()
    .eq("postId", postId)
    .eq("clientToken", clientToken);

  if (error) {
    console.error("Error deleting likes", error);
    return { success: false };
  }

  return { success: true };
}
