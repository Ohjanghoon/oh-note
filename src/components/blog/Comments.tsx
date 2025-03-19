"use client";

import { useEffect, useRef } from "react";

// contexts
import { useTheme } from "@/contexts/ThemeContext";

function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const initTheme = theme === "light" ? "github-light" : "github-dark";

    if (!commentsRef.current) return;
    if (commentsRef.current.querySelector("script")) return;

    // 새로운 Utterances 스크립트 추가
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "Ohjanghoon/oh-note-comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comments");
    script.setAttribute("theme", initTheme);
    script.setAttribute("crossorigin", "anonymous");

    commentsRef.current.insertAdjacentElement("beforeend", script);
  }, [theme]);

  useEffect(() => {
    const utterancesTheme = theme === "light" ? "github-light" : "github-dark";
    const iframe =
      document.querySelector<HTMLIFrameElement>(".utterances-frame");

    if (document.querySelector(".utterances-frame")) {
      if (!iframe) {
        return;
      }

      iframe.contentWindow?.postMessage(
        { type: "set-theme", theme: utterancesTheme },
        "https://utteranc.es",
      );
    }
  }, [theme]);

  return (
    <div
      ref={commentsRef}
      className="comments-container relative min-h-[269px] px-2 md:px-10"
    ></div>
  );
}

export default Comments;
