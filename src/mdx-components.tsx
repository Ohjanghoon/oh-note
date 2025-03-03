import type { MDXComponents } from "mdx/types";
import { Heading } from "./components/heading";
import BlogHeader from "@/components/BlogHeader";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BlogHeader,
    h1: Heading,
    ...components,
  };
}
