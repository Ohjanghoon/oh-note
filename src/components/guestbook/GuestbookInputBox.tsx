import React, { useState } from "react";
import { LoadingSpinner } from "../common/Loading";
import { insertGuestbook } from "@/lib/supabase/guestbook";

import { FaRegPaperPlane } from "react-icons/fa";

function GuestbookInputBox({ selectedEmoji }: { selectedEmoji: string }) {
  const MAX_TEXT_INPUT_LENGTH = 200;
  const [isMaxLength, setIsMaxLength] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const tempContent = e.target.value;
    setContent(tempContent);
    setIsMaxLength(tempContent.length > MAX_TEXT_INPUT_LENGTH);
  };

  const handleSubmit = async () => {
    if (!content || isMaxLength) return alert("내용을 확인해주세요.");

    setIsSubmitting(true);
    const tempGuestbook = {
      nickname,
      content,
      emoji: selectedEmoji,
    };

    try {
      const newGuestbook = await insertGuestbook(tempGuestbook);

      if (newGuestbook) {
        setNickname(null);
        setContent("");
      }
    } catch (error) {
      console.error("방명록 저장 실패:", error);
      alert("방명록 저장 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="guestbook_write_input-container w-full space-y-1">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="닉네임 (선택)"
          className="write_nickname focus:ring-primary border-input-border duraion-300 placeholder:text-text-dark-muted focus:bg-bg-subtle w-full max-w-30 rounded-lg border px-1.5 py-1 text-sm transition-colors duration-300 focus:ring-2"
          value={nickname ?? ""}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button
          className="write_submit_btn bg-primary text-text-light border-primary flex h-8 min-w-8 items-center justify-center gap-2 rounded-lg border p-1.5 text-sm md:h-[30px] md:min-w-22"
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? (
            <div className="h-3 w-3">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <span className="hidden md:inline">남기기</span>
              <span>
                <FaRegPaperPlane />
              </span>
            </>
          )}
        </button>
      </div>
      <textarea
        placeholder="여러분의 소중한 방명록을 남겨주세요."
        className="write_content border-input-border duraion-300 placeholder:text-text-dark-muted scrollbar-hide h-auto min-h-[20px] w-full resize-none overflow-y-auto border-b p-1 text-sm"
        value={content}
        onChange={handleContent}
      ></textarea>
      <div
        className={`text-end text-xs ${isMaxLength ? "animate-horizontal-vibration" : ""}`}
      >
        <span className={`${isMaxLength ? "text-error" : "text-primary"}`}>
          {content.length}
        </span>
        <span> / {MAX_TEXT_INPUT_LENGTH}</span>
      </div>
    </div>
  );
}

export default GuestbookInputBox;
