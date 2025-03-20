import type { MDXComponents } from "mdx/types";

import BlogContentHeader from "@/components/blog/BlogContentHeader";
import CodeBlock from "@/components/mdx/CodeBlock";
import BlogWrapper from "@/components/blog//BlogWrapper";
import Callout from "@/components/mdx/Callout";
import ImageBox from "@/components/mdx/ImageBox";
import BlogContentArticle from "@/components/blog/BlogContentArticle";
// import * as Heading from "@/components/mdx/Heading";

export function useMDXComponents(): MDXComponents {
  return {
    BlogHeader: BlogContentHeader,
    BlogArticle: BlogContentArticle,
    Callout: Callout,
    CodeBlock: CodeBlock,
    a: (props) => <a target="_blank" {...props} />,
    ImageBox: ImageBox,
    wrapper: (props) => <BlogWrapper {...props} />,
  };
}
