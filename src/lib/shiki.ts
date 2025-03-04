import { createHighlighter } from "shiki";

/**
 * 코드 하이라이팅을 수행하는 함수
 * @param code - 하이라이팅할 코드 문자열
 * @param lang - 코드의 언어 (예: "javascript", "tsx" 등)
 * @returns HTML 형태로 변환된 코드 문자열
 */
export async function highlightCode(code: string, lang: string) {
  const highlighter = await createHighlighter({
    themes: [
      "slack-dark",
      "nord",
      "min-light",
      "github-light-default",
      "aurora-x",
      "one-dark-pro",
      "one-light",
      "github-light",
      "solarized-light",
    ],
    langs: [lang],
  });

  return highlighter.codeToHtml(code, {
    themes: {
      light: "solarized-light",
      dark: "nord",
    },
    lang,
    // defaultColor: "light",
    cssVariablePrefix: "--shiki-",
  });
}
