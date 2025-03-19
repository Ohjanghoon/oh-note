import fs from "fs";
import path from "path";

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
