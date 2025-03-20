"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// contexts
import { useTheme } from "@/contexts/ThemeContext";

function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const giscusTheme = theme === "light" ? "light" : "dark_dimmed";
    if (!commentsRef.current) return;
    if (commentsRef.current.querySelector("script")) return;

    // 새로운 Utterances 스크립트 추가
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "Ohjanghoon/oh-note-comments");
    script.setAttribute("data-repo-id", "R_kgDOOLGeFg");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_kwDOOLGeFs4CoQza");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", giscusTheme);
    script.setAttribute("data-lang", "ko");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    commentsRef.current.insertAdjacentElement("beforeend", script);
  }, [theme]);

  useEffect(() => {
    const giscusTheme = theme === "light" ? "light" : "dark_dimmed";
    const iframe = document.querySelector<HTMLIFrameElement>(".giscus-frame");

    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      "https://giscus.app",
    );
  }, [theme]);

  return (
    <div className="comments-container border-border mx-auto max-w-screen-md rounded-lg border-[0.2px] bg-[#F5F8FA]/50 shadow-md dark:bg-[#1C2128]">
      <div className="border-border bg-bg-subtle flex items-center gap-5 rounded-t-lg border-b-[0.5px] px-3 pt-1 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-sky-400"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
          <div className="bg-primary h-2.5 w-2.5 rounded-full"></div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="border-border rounded-t-lg border-1 border-b-0 bg-[#F5F8FA] px-5 py-2 dark:bg-[#1C2128]">
            <span className="text-xs">반응과 댓글은 큰 힘이 됩니다 💪</span>
          </div>

          <Link href={"/guestbook"}>
            <button className="bg-primary text-text-light rounded-md px-2 py-1.5 text-xs">
              방명록 남기기 →
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={commentsRef}
        className="comments_iframe-wrapper relative mt-10 px-3 pb-3"
      ></div>
    </div>
  );
}

export default Comments;
