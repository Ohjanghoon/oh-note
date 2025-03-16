"use client";

import { useEffect, useRef, useState } from "react";

// types
import { Guestbook } from "@/types/guestbookTypes";

// lib
import { selectGuestbook } from "@/lib/supabase/guestbook";

// components
import TitleHeader from "@/components/common/TitleHeader";
import GuestbookWrite from "@/components/guestbook/GuestbookWrite";
import GuestbookList from "@/components/guestbook/GuestbookList";

function GuestBook() {
  const [guestbooks, setGuestbooks] = useState<Guestbook[] | null>(null);

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
  }, []);

  return (
    <div className="guestbook-container">
      <header className="guestbook-header">
        <TitleHeader
          title="Guestbook"
          description="방명록을 자유롭게 남겨주세요."
        />
      </header>
      {/* <section className="guestbook-section">
        <div className="p-5 shadow-lg ring-ring bg-background rounded-3xl ring-1 backdrop-blur-2xl">
          
        </div>
      </section> */}
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
