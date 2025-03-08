// types
import { PostMetadata } from "@/types/postTypes";
import { parseDate } from "@/utils/utls";
import Link from "next/link";

// icons
import { MdAccessTime } from "react-icons/md";
import BlogWritter from "./BlogWritter";

function BlogContentHeader({ props }: { props: PostMetadata }) {
  const { title, publishDate, tags, thumbnailUrl } = props;

  return (
    <header className="blog-content-header mx-auto w-full max-w-screen-md space-y-10">
      <BlogContentTitle title={title} publishDate={publishDate} tags={tags} />
      <BlogContentImage thumbnailUrl={thumbnailUrl} />
      <BlogContentBackground thumbnailUrl={thumbnailUrl} />
    </header>
  );
}

/** 블로그 콘텐츠 주제목 컴포넌트 */
function BlogContentTitle({
  title,
  publishDate,
  tags,
}: {
  title: string;
  publishDate: string;
  tags: string[];
}) {
  return (
    <div className="title-container space-y-3">
      <p className="text-link-default text-lg font-bold">
        <Link href={"/blog"}> /blog</Link>
      </p>
      <h2 className="title text-text-dark leading-tight font-extrabold">
        {title}
      </h2>

      <div className="text-text-dark-secondary flex items-center gap-4 text-sm">
        <BlogWritter />

        <p className="flex items-center gap-0.5 text-sm">
          <MdAccessTime className="h-5 w-5" />
          <span>{parseDate(publishDate)}</span>
        </p>
      </div>
    </div>
  );
}

/** 블로그 콘텐츠 썸네일 컴포넌트 */
function BlogContentImage({ thumbnailUrl }: { thumbnailUrl: string }) {
  return (
    <div className="mx-auto h-120 w-full overflow-hidden">
      <img
        src={thumbnailUrl}
        className="h-full w-full rounded-3xl object-cover object-center"
      />
    </div>
  );
}

/** 블로그 콘텐츠 백그라운드 컴포넌트 */
function BlogContentBackground({ thumbnailUrl }: { thumbnailUrl: string }) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
        className={`absolute top-0 left-0 -z-10 h-[50vh] w-full bg-cover bg-center bg-no-repeat`}
      ></div>
      <div className="from-background via-background/80 to-background/70 absolute top-0 left-0 -z-9 h-[50vh] w-full bg-gradient-to-t backdrop-blur-md"></div>
    </>
  );
}

export default BlogContentHeader;

{
}

// {tags.length > 0 && (
//   <div className="space-x-3">
//     <span className="text-xs text-gray-700">Tags</span>
//     <div className="inline space-x-0.5">
//       {tags.map((tag) => {
//         return (
//           <span
//             key={tag}
//             className="ring-ring bg-background rounded-full px-2 py-0.25 text-sm font-medium ring-[0.4px]"
//           >
//             {tag}
//           </span>
//         );
//       })}
//     </div>
//   </div>
// )}
