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

  useEffect(() => {
    highlightCode(code, language).then(setHighlightedCode);
  }, [code, language]);

  return (
    <div
      data-language={language}
      className="w-full overflow-x-scroll rounded-md"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}
