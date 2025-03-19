"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useRef } from "react";

function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const addUtterances = () => {
    if (!commentsRef.current) return;

    // 기존 스크립트 제거 (재렌더링을 위한 과정)
    commentsRef.current.innerHTML = "";

    // 새로운 Utterances 스크립트 추가
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "Ohjanghoon/oh-note-comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comments");
    script.setAttribute(
      "theme",
      theme === "light" ? "github-light" : "github-dark",
    );
    script.setAttribute("crossorigin", "anonymous");

    commentsRef.current.appendChild(script);
  };

  useEffect(() => {
    // setTimeout을 사용하여 DOM이 완전히 로드된 후 실행
    const timer = setTimeout(() => {
      addUtterances();
    }, 10);

    return () => clearTimeout(timer); // 클린업 함수 추가
  }, [theme]);

  return <div ref={commentsRef} />;
}

export default Comments;
