import type { MDXComponents } from "mdx/types";

import BlogHeader from "@/components/BlogHeader";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BlogHeader,
    ...components,
  };
}
