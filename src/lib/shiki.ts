import { createHighlighter } from "shiki";

/**
 * 코드 하이라이팅을 수행하는 함수
 * @param code - 하이라이팅할 코드 문자열
 * @param lang - 코드의 언어 (예: "javascript", "tsx" 등)
 * @returns HTML 형태로 변환된 코드 문자열
 */
export async function highlightCode(code: string, lang: string) {
  console.log("🤔 skiki highlightCode 실행", new Date().toLocaleString());

  const highlighter = await createHighlighter({
    themes: ["one-dark-pro", "nord"],
    langs: [lang],
  });

  return highlighter.codeToHtml(code, {
    themes: {
      light: "one-dark-pro",
      dark: "nord",
    },
    lang,
    // defaultColor: "light",
    cssVariablePrefix: "--shiki-",
  });
}
