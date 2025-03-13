"use client";

import { useEffect, useState } from "react";

// components
import TitleHeader from "@/components/common/TitleHeader";
import { Guestbook } from "@/types/guestbookTypes";
import { selectGuestbook } from "@/lib/supabase/guestbook";

// icons
import { FaThumbsUp, FaSadCry, FaSurprise } from "react-icons/fa";

import { BsFillHandThumbsUpFill, BsEmojiSmileFill } from "react-icons/bs";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { FaFaceLaughSquint } from "react-icons/fa6";
import Imoji from "@/components/guestbook/Imoji";

function GuestBook() {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    const fetchGuestbook = async () => {
      try {
        // API 요청
        const data = await selectGuestbook();
        console.log(data);
        // if (data) setGuestbooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGuestbook();
  }, []);
  return (
    <section className="guestbook">
      <header className="guestbook-header">
        <TitleHeader
          title="Guest book"
          description="방명록을 자유롭게 남겨주세요."
        />
      </header>
      {/* <section className="guestbook-section">
        <div className="p-5 shadow-lg ring-ring bg-background rounded-3xl ring-1 backdrop-blur-2xl">
          {guestbooks.map((guestbook) => {
            return (
              <div key={guestbook.id} className="guestbook-item">
                <p>{guestbook.nickname}</p>
                <p>{guestbook.content}</p>
              </div>
            );
          })}
        </div>
      </section> */}
      <section className="guestbook-section bg-primary/20 rounded-3xl p-10">
        <div className="relative rounded-3xl border border-white/10 bg-white/30 p-8 shadow-lg ring-1 shadow-black/10 ring-white/20 backdrop-blur-xl">
          <div className="space-y-6">
            {guestbooks.map((guestbook) => (
              <div
                key={guestbook.id}
                className="guestbook-item relative flex items-start gap-3"
              >
                <Imoji imoji={guestbook.imoji} />
                <div className="w-full overflow-hidden rounded-lg">
                  <div className="flex items-center">
                    <span className="px-1 font-semibold tracking-wide">
                      {guestbook.nickname}
                    </span>
                    <span>{guestbook.createAt}</span>
                  </div>
                  <p className="text-md bg-bg-subtle text-text-dark-secondary mt-1 min-h-10 rounded-lg border border-white/15 p-2 leading-relaxed break-all shadow-md shadow-black/10 backdrop-blur-2xl">
                    {guestbook.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default GuestBook;
