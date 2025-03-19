"use client";

import { useState, useEffect } from "react";

// lib
import { highlightCode } from "@/lib/shiki";

// icons
import { FaCopy, FaCheck } from "react-icons/fa6";

interface CodeBlockProps {
  children: string;
  lang?: string;
  file?: string;
}
export default function CodeBlock({
  children,
  lang = "text",
  file,
}: CodeBlockProps) {
  // const lang = className?.split("lang-")[1] || "";
  const code = children?.toString() || "";

  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [copyIcon, setCopyIcon] = useState<string>("copy");

  useEffect(() => {
    highlightCode(code, lang).then((html) => {
      // ✅ `data-title` 속성 읽기
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      // const preElement = tempDiv.querySelector("pre");
      // const extractedTitle = preElement?.getAttribute("data-title") || "";
      // setTitle(extractedTitle);
      setHighlightedCode(html);
    });
  }, [code, lang]);

  const copyToClipboard = async () => {
    try {
      if (!navigator.clipboard) {
        fallbackCopy(); // iOS 대응용 대체 함수 호출
        setCopyIcon("copied");
        setTimeout(() => {
          setCopyIcon("copy");
        }, 1500);
        return;
      }

      setCopyIcon("copied");
      await navigator.clipboard.writeText(children);

      setTimeout(() => {
        setCopyIcon("copy");
      }, 1500);
    } catch (err) {
      console.error("Clipboard API 실패, execCommand 대체 사용", err);
      fallbackCopy(); // 대체 복사 방법 실행
    }
  };

  // iOS 15 버전 이상 지원을 위한 대체 복사 방법
  const fallbackCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = children;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <div className="code_container relative my-2 w-full overflow-hidden rounded-lg">
      <div className="bg-bg-subtle-hover text-text-dark-secondary flex min-h-8 items-center justify-between rounded-t-lg px-4 py-2 text-xs">
        <div>
          <span className="text-text-muted mr-5 italic">{lang}</span>
          {file && <span>{file}</span>}
        </div>
        <button
          onClick={copyToClipboard}
          className="text-2xs w-14 rounded-lg px-0.5 py-1 ring-1 dark:text-[#b5becd] dark:ring-[#5f748e]"
        >
          {copyIcon === "copy" ? (
            <span className="inline-flex items-center gap-1">
              <FaCopy /> copy
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <FaCheck /> copied
            </span>
          )}
        </button>
      </div>

      <div className="relative w-full">
        <div
          className="code_block"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </div>
  );
}
