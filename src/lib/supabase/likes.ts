// types
import { supabase } from "@/server/supabase";
import { Likes } from "@/types/likesTypes";

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
