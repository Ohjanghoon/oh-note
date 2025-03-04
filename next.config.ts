import type { NextConfig } from "next";

// mdx config
import nextMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
