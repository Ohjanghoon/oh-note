import type { MDXComponents } from "mdx/types";

import BlogContentHeader from "@/components/blog/BlogContentHeader";
import CodeBlock from "@/components/mdx/CodeBlock";
import BlogWrapper from "@/components/blog//BlogWrapper";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log("MDXComponents 실행");
  return {
    BlogHeader: BlogContentHeader,
    code: CodeBlock,
    wrapper: (props) => <BlogWrapper {...props} />,
  };
}
