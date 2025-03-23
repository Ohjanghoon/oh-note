"use clinet";

import React, { useEffect, useState } from "react";

// lib
import { deleteLikes, insertLikes, selectLikes } from "@/lib/supabase/likes";
import { usePathname } from "next/navigation";

// hooks
import useClientToken from "@/hooks/useClientToken";

// icons
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

function LikesBtn({ styleClassName }: { styleClassName: string }) {
  const clientToken = useClientToken();
  const pathname = usePathname();
  const postId = pathname.split("/").pop() || "";

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikes = async () => {
    if (!clientToken) return;

    if (isLiked) {
      const { success } = await deleteLikes(postId, clientToken);
      if (success) {
        setIsLiked(false);
        setLikes((prev) => prev - 1);
      }
    } else {
      const { success } = await insertLikes(postId, clientToken);
      if (success) {
        setIsLiked(true);
        setLikes((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (!clientToken) return;

    async function getLikes() {
      try {
        const { count, liked } = await selectLikes(postId, clientToken);
        setLikes(count);
        setIsLiked(liked);
      } catch (error) {
        console.error(error);
      }
    }
    getLikes();
  }, [clientToken]);

  return (
    <button
      className={`border-primary text-primary flex items-center justify-center gap-3 border-1 transition-[box-shadow] duration-300 hover:shadow-sm ${styleClassName}`}
      onClick={handleLikes}
    >
      <span className="text-lg">
        {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
      </span>
      {likes}
    </button>
  );
}

export default LikesBtn;
