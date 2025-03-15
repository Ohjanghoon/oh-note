import React, { useState } from "react";

function GuestbookInputBox() {
  const MAX_TEXT_INPUT_LENGTH = 200;
  const [textLength, setTextLength] = useState<number>(0);

  return (
    <div className="guestbook_write_input-container w-full space-y-1">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="닉네임 (선택)"
          className="focus:ring-primary border-input-border duraion-300 placeholder:text-text-dark-muted focus:bg-bg-subtle w-full max-w-30 rounded-lg border px-1.5 py-1 text-sm transition-colors duration-300 focus:ring-2"
        />
        <button className="bg-primary text-text-light border-primary flex items-center justify-center gap-2 rounded-lg border p-1.5 text-sm">
          <span className="hidden md:inline">남기기</span>
          <span>↵</span>
        </button>
      </div>
      <textarea
        placeholder="여러분의 소중한 방명록을 남겨주세요."
        className="border-input-border duraion-300 placeholder:text-text-dark-muted scrollbar-hide h-auto min-h-[20px] w-full resize-none overflow-y-auto border-b p-1 text-sm"
        onChange={(e) => setTextLength(e.target.value.length)}
      ></textarea>
      <div className="text-end text-xs">
        <span
          className={`${textLength > MAX_TEXT_INPUT_LENGTH ? "text-error" : "text-primary"}`}
        >
          {textLength}
        </span>
        <span> / {MAX_TEXT_INPUT_LENGTH}</span>
      </div>
    </div>
  );
}

export default GuestbookInputBox;
