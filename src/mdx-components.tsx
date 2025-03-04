import type { MDXComponents } from "mdx/types";

import BlogHeader from "@/components/BlogHeader";
import CodeBlock from "./components/mdx/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BlogHeader,
    code: CodeBlock,
    ...components,
  };
}
