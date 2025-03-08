import type { MDXComponents } from "mdx/types";

import BlogContentHeader from "@/components/blog/BlogContentHeader";
import CodeBlock from "@/components/mdx/CodeBlock";
import BlogWrapper from "@/components/blog//BlogWrapper";
import * as Heading from "@/components/mdx/Heading";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log("🤔 MDXComponents 실행", new Date().toLocaleString());
  return {
    BlogHeader: BlogContentHeader,
    code: CodeBlock,
    wrapper: (props) => <BlogWrapper {...props} />,
  };
}
