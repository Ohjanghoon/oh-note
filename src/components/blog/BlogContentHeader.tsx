"use client";

import { MouseEvent } from "react";

// types
import { PostMetadata } from "@/types/postTypes";
import { formatDate } from "@/utils/utls";
import Link from "next/link";

// icons
import { MdAccessTime } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";

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
  const goBack = (e: MouseEvent) => {
    e.preventDefault();
    history.back();
  };
  return (
    <div className="title-container space-y-3 px-1">
      {/* <Link
        href={"/blog"}
        onClick={(e) => goBack(e)}
        className="flex items-center gap-1"
      >
        <IoIosArrowRoundBack />
        Back
      </Link> */}
      <p className="text-primary text-semibold hover:text-blue-500">
        <button onClick={(e) => goBack(e)}> ← Back to blog</button>
      </p>
      <h2 className="title text-text-dark leading-tight font-extrabold">
        {title}
      </h2>

      <div className="text-text-dark-secondary flex items-center gap-4 text-sm">
        <BlogWritter />

        <p className="flex items-center gap-0.5 text-sm">
          <MdAccessTime className="h-5 w-5" />
          <span>{formatDate(publishDate)}</span>
        </p>
      </div>
    </div>
  );
}

function BlogWritter() {
  return (
    <div className="inline-flex items-center gap-0.5">
      <img
        id="profile-avatar"
        src="/assets/profile-avatar.webp"
        alt="profile-avatar"
        className="h-5 w-5 rounded-full"
      />
      <label htmlFor="profile-avatar">dev-oh</label>
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
        className={`absolute top-0 left-0 -z-10 h-[60vh] w-full bg-cover bg-center bg-no-repeat`}
      ></div>
      <div className="from-background via-background/90 to-background/60 absolute top-0 left-0 -z-9 h-[60vh] w-full bg-gradient-to-t backdrop-blur-sm"></div>
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
