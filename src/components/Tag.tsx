import { getTags } from "@/lib/blog";
import Link from "next/link";

async function Tag() {
  const tags = await getTags();
  console.log(tags);

  return (
    <div>
      <nav>
        {tags.map((tag: string) => {
          return (
            <Link href={`/blog/tag/${tag}`} key={tag}>
              {tag}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Tag;
