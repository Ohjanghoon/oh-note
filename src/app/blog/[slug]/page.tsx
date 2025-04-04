import { PostMetadata } from "@/types/postTypes";
import fs from "fs";
import path from "path";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postModule = await import(`@/content/${slug}.mdx`);
  const metadata: PostMetadata = await postModule.metadata;

  return {
    title: `${metadata.title} | oh-note`,
    description: metadata.description,
    keywords: metadata.tags,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://oh-note.vercel.app/blog/${metadata.slug}`,
      images: [
        {
          url: metadata.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: `${metadata.title} thumbnail`,
        },
      ],
    },
    category: "Technology",
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <Post />
    </>
  );
}

export function generateStaticParams() {
  const postPath = path.join(process.cwd(), "src", "content");
  const filenames = fs.readdirSync(postPath);

  return filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

export const dynamicParams = false;
