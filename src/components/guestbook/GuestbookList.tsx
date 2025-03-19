import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// types
import { Guestbook } from "@/types/guestbookTypes";

// components
import Emoji from "@/components/guestbook/Emoji";
import { LoadingSpinner } from "@/components/common/Loading";

function GuestbookList({ guestbooks }: { guestbooks: Guestbook[] | null }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const guestbookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (guestbooks === null) return; // 아직 데이터가 로드되지 않음

    if (guestbookRef.current) {
      // 페이지 로드 시 최하단으로 스크롤 이동
      guestbookRef.current.scrollTop = guestbookRef.current.scrollHeight;
    }
    setIsLoading(false);
  }, [guestbooks]);
  return (
    <motion.div
      suppressHydrationWarning
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="scrollbar-hide min-h-[45vh] flex-grow overflow-y-auto rounded-xl"
      ref={guestbookRef}
    >
      <div className="relative flex h-full flex-col items-start gap-2 md:w-full">
        {isLoading ? (
          <LoadingSpinner />
        ) : guestbooks && guestbooks.length > 0 ? (
          guestbooks.map((guestbook) => (
            <div
              key={guestbook.id}
              className="bg-bg-subtle flex items-start gap-3 rounded-xl border-black/20 p-2 backdrop-blur-lg dark:border-white/30 dark:bg-white/10"
            >
              <div className="bg-bg-subtle-hover dark:bg-bg-subtle h-10 w-10 min-w-10 rounded-xl p-1">
                <Emoji emoji={guestbook.emoji} />
              </div>
              <div className="w-auto max-w-full">
                <div className="flex flex-row items-start justify-between gap-10">
                  <span className="text-dark font-bold">
                    {guestbook.nickname
                      ? guestbook.nickname
                      : `익명 ${guestbook.id}`}
                  </span>
                  <span className="text-3xs text-primary-light">
                    {guestbook.createdAt}
                  </span>
                </div>
                <p className="w-full max-w-full pr-5 md:whitespace-pre-wrap">
                  {guestbook.content.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))
        ) : (
          // 방명록이 없을 때 표시할 메시지
          <p className="text-center text-gray-500 dark:text-gray-400">
            아직 방명록이 없습니다.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default GuestbookList;
