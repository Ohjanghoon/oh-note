"use client";

import { useEffect, useState } from "react";

// types
import { Guestbook } from "@/types/guestbookTypes";

// lib
import { selectGuestbook } from "@/lib/supabase/guestbook";

// components
import TitleHeader from "@/components/common/TitleHeader";
import GuestbookWrite from "@/components/guestbook/GuestbookWrite";
import GuestbookList from "@/components/guestbook/GuestbookList";
import { supabase } from "@/server/supabase";
import { RealtimePostgresInsertPayload } from "@supabase/supabase-js";
import { formatDateTime } from "@/utils/utils";

function GuestBook() {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    const fetchGuestbook = async () => {
      try {
        // API 요청
        const data = await selectGuestbook();
        console.log(data);
        if (data) setGuestbooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGuestbook();

    /** Supabase Realtime 구독 설정 => 데이터가 추가되면 자동 반영 */
    const subscription = supabase
      .channel("guestbook")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "guestbook" },
        (payload: RealtimePostgresInsertPayload<Guestbook>) => {
          const newGuestbook = {
            id: payload.new.id,
            nickname: payload.new.nickname,
            content: payload.new.content,
            emoji: payload.new.emoji,
            createdAt: formatDateTime(payload.new.createdAt || "9999-99-99"),
          };
          setGuestbooks((prev) => [...prev, newGuestbook]);
        },
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="guestbook-container">
      <header className="guestbook-header">
        <TitleHeader
          title="Guestbook"
          description="방명록을 자유롭게 남겨주세요."
        />
      </header>
      <section className="guestbook-section">
        <section className="guestbook-board ring-ring bg-primary/10 relative flex flex-col gap-8 rounded-xl p-3 ring-1 dark:bg-[#1F2937]">
          <GuestbookList guestbooks={guestbooks} />
          <GuestbookWrite />
        </section>
      </section>
    </div>
  );
}

export default GuestBook;
