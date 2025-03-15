"use client";

// components
import EmojiBox from "@/components/guestbook/EmojiBox";

// icons
// import { SlPencil } from "react-icons/sl";
import { FaRegPaperPlane } from "react-icons/fa";
import GuestbookInputBox from "./GuestbookInputBox";

function GuestbookWrite() {
  return (
    <div className="guestbook_write-container border-border bg-bg-light row-span-1 mx-auto w-full rounded-xl p-2.5 shadow-xl backdrop-blur-lg md:p-3">
      <section className="flex h-full min-h-10 items-start gap-2 md:gap-5">
        <EmojiBox />
        <GuestbookInputBox />
      </section>
    </div>
  );
}

export default GuestbookWrite;
