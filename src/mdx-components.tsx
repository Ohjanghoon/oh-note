import type { MDXComponents } from "mdx/types";

import BlogContentHeader from "@/components/blog/BlogContentHeader";
import CodeBlock from "@/components/mdx/CodeBlock";
import BlogWrapper from "@/components/blog//BlogWrapper";
import Callout from "@/components/mdx/Callout";
// import * as Heading from "@/components/mdx/Heading";

export function useMDXComponents(): MDXComponents {
  return {
    BlogHeader: BlogContentHeader,
    Callout: Callout,
    CodeBlock: CodeBlock,
    wrapper: (props) => <BlogWrapper {...props} />,
  };
}
