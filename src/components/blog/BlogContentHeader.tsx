"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// types
import { PostMetadata } from "@/types/postTypes";
import { formatDate } from "@/utils/utils";

// icons
import { MdAccessTime } from "react-icons/md";
// import { useRouter } from "next/navigation";

// components
import ImageConvert from "@/components/ui/ImageConvert";
import Link from "next/link";
import Callout from "../mdx/Callout";

function BlogContentHeader({ props }: { props: PostMetadata }) {
  const { title, publishDate, tags, thumbnailUrl, description } = props;

  return (
    <header className="blog_content-header mx-auto w-full space-y-10 lg:max-w-screen-md 2xl:max-w-screen-lg">
      <BlogContentTitle title={title} publishDate={publishDate} tags={tags} />
      <BlogContentImage thumbnailUrl={thumbnailUrl} />
      <Callout type="quote">{description}</Callout>
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
  // const router = useRouter();

  // const goBack = (e: MouseEvent) => {
  //   e.preventDefault();
  //   if (document.referrer && document.referrer.includes("/blog")) {
  //     router.back(); // 이전 블로그 페이지로 이동 (스크롤 위치 유지 가능)
  //   } else {
  //     router.push("/blog"); // 블로그 목록 페이지로 이동
  //   }
  // };
  return (
    <div className="title-container relative z-1 space-y-10 px-1">
      {/* <button
        className="text-text-dark-secondary hover:text-primary-darken text-semibold"
        onClick={(e) => goBack(e)}
      >
        ← Go to Blog
      </button> */}
      <div className="space-y-3">
        <div>
          <p className="text-text-dark-secondary flex items-center gap-0.5">
            <span>
              <MdAccessTime />
            </span>
            <span>{formatDate(publishDate)}</span>
          </p>
          <h3 className="title text-text-dark leading-tight font-extrabold md:text-[40px]">
            {title}
          </h3>
        </div>

        <div className="text-text-dark-secondary flex flex-col gap-5 md:flex-row md:items-center">
          <BlogWritter />
          <span className="hidden md:inline">|</span>
          <BlogContentTags tags={tags} />
        </div>
      </div>
    </div>
  );
}

function BlogWritter() {
  return (
    <Link
      href={"https://github.com/Ohjanghoon"}
      className="inline-flex cursor-pointer items-center gap-2"
    >
      <ImageConvert
        props={{
          width: 20,
          height: 20,
          src: "/assets/icons/profile-avatar.png",
          alt: "profile-avatar",
          styleClassName: "h-8 w-8 rounded-full",
        }}
      />
      <label htmlFor="profile-avatar" className="cursor-pointer">
        <div className="flex flex-col -space-y-1 text-sm">
          <span>dev-oh</span>
          <span className="text-link-pressed">@github</span>
        </div>
      </label>
    </Link>
  );
}

/** 블로그 콘텐츠 썸네일 컴포넌트 */
function BlogContentImage({ thumbnailUrl }: { thumbnailUrl: string }) {
  return (
    <div className="relative z-1 h-auto w-full overflow-hidden lg:max-h-130 lg:max-w-screen-md 2xl:max-h-160 2xl:max-w-screen-lg">
      <Zoom>
        <ImageConvert
          props={{
            width: 1366,
            height: 768,
            src: thumbnailUrl,
            alt: "post-thumbnail",
            styleClassName:
              "h-full w-full rounded-xl object-cover object-center ",
          }}
        />
      </Zoom>
    </div>
  );
}

/** 블로그 콘텐츠 백그라운드 컴포넌트 */
function BlogContentBackground({ thumbnailUrl }: { thumbnailUrl: string }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${thumbnailUrl || "/assets/images/default_image.png"})`,
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
        className={`absolute top-0 left-0 z-0 h-[60vh] w-full bg-cover bg-center bg-no-repeat opacity-60 blur-3xl`}
      ></div>
    </>
  );
}

function BlogContentTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-x-2 sm:items-center">
      <span>Tags</span>
      <div className="inline-flex w-full flex-wrap items-center gap-1.5 break-keep">
        {tags.map((tag) => {
          return (
            <Link
              href={`/blog?tag=${tag}`}
              key={tag}
              className="ring-primary bg-link-light/20 hover:bg-primary-hover/40 rounded-full px-2 py-1 text-xs font-medium ring-1 transition-[background-color] duration-300"
            >
              {tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BlogContentHeader;
