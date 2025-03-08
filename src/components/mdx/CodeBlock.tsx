"use client";

import { useState, useEffect, ComponentPropsWithoutRef } from "react";
import { highlightCode } from "@/lib/shiki";

export default function CodeBlock({
  className,
  children,
}: ComponentPropsWithoutRef<"code">) {
  const language = className?.split("language-")[1] || "";
  const code = children?.toString() || "";

  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    console.log("🤔 CodeBlock 실행", new Date().toLocaleString());

    highlightCode(code, language).then((html) => {
      // ✅ `data-title` 속성 읽기
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const preElement = tempDiv.querySelector("pre");
      const extractedTitle = preElement?.getAttribute("data-title") || "";
      setTitle(extractedTitle);
      setHighlightedCode(html);
    });
  }, [code, language]);

  return (
    <pre
      data-language={language}
      className="w-full overflow-x-scroll rounded-md py-5"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}
