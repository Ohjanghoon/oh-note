"use client";

import { useEffect, useRef, useState } from "react";

// components
import Emoji, { emojiList } from "@/components/guestbook/Emoji";
import ImageConvert from "@/components/ui/ImageConvert";

function EmojiBox() {
  // 선택된 이모지 상태
  const [selectedEmoji, setSelectedEmoji] = useState<string>("heart");
  // 이모지 박스 열림 상태
  const [isEmojiboxOpen, setIsEmojiboxOpen] = useState<boolean>(false);

  const emojiBoxRef = useRef<HTMLDivElement | null>(null);

  /** 이모지 선택 제어 */
  const handleEmoji = (e: string) => {
    setSelectedEmoji(e);
    setIsEmojiboxOpen(false);
  };

  /** 이모지 박스 영역 감지에 따른 박스 제어 */
  const handleClickOutside = (e: MouseEvent) => {
    if (
      emojiBoxRef.current &&
      !emojiBoxRef.current.contains(e.target as Node)
    ) {
      setIsEmojiboxOpen(false);
    }
  };
  // 외부 클릭 감지하여 이모지 박스 닫기
  useEffect(() => {
    if (isEmojiboxOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEmojiboxOpen]);
  return (
    <div className="emoji-container" ref={emojiBoxRef}>
      <button
        key={selectedEmoji}
        onClick={() => setIsEmojiboxOpen((prev) => !prev)}
        className={`emoji_select-btn duraion-300 bg-bg-subtle flex h-8 w-8 items-center justify-center rounded-full border border-black/10 p-1 backdrop-blur-3xl transition-[scale] md:h-10 md:w-10 dark:border-white/10 ${!isEmojiboxOpen && "hover:scale-105"} `}
      >
        <Emoji emoji={selectedEmoji} />
      </button>

      <div
        className={`emoji_select-container transition-opacity duration-300 ${isEmojiboxOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="emoji_select_box bg-bg-light/95 border-muted absolute -top-24 left-0 rounded-xl border-[0.5px] px-3 py-2 shadow-xs shadow-black/40 dark:shadow-white/40">
          <div className="grid grid-cols-8 gap-3">
            {emojiList.map((emoji) => {
              return (
                <button
                  key={emoji.name}
                  onClick={() => handleEmoji(emoji.name)}
                  className="emoji_select-btn duraion-300 h-8 w-8 transition-[scale] hover:scale-110"
                >
                  <Emoji emoji={emoji.name} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmojiBox;
