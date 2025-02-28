import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX(nextConfig);
