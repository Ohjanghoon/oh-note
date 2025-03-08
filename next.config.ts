import { NextConfig } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

// mdx config
import nextMDX from "@next/mdx";

// // MDX 구성 및 rehype-pretty-code 설정
// const options = {
//   keepBackground: true,
//   theme: {
//     dark: "slack-dark",
//     light: "slack-dark",
//   },

//   defaultLang: "javascript", // 기본 언어 설정
// };
// rehype-pretty-code 설정
const options = {
  theme: "one-dark-pro",
  defaultLang: "plaintext",
  keepBackground: true, // 배경색 유지
};

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config, { isServer }) {
    // MDX와 관련된 Webpack 설정 수정
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
          },
        },
        {
          loader: "@mdx-js/loader",
          options: {
            rehypePlugins: [
              [rehypePrettyCode, rehypePrism, rehypeCodeTitles, options], // rehype-pretty-code 설정
            ],
          },
        },
      ],
    });
    return config;
  },
};

// MDX 처리에 nextMDX 추가
const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
