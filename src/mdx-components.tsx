import type { MDXComponents } from "mdx/types";

import BlogContentHeader from "@/components/BlogContentHeader";
import CodeBlock from "./components/mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BlogHeader: BlogContentHeader,
    code: CodeBlock,
    ...components,
  };
}
