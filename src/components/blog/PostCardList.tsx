"use client";

// node modules
import Link from "next/link";

import { useSelector } from "react-redux";

// types
import { PostMetadata } from "@/types/postTypes";

// store
import { RootState } from "@/store/store";

// icons
import { MdAccessTime } from "react-icons/md";

// components
import ImageConvert from "../ui/ImageConvert";
import { formatDate } from "@/utils/utls";

/** PostCardList 컴포넌트 */
function PostCardList({ tag: searchTag }: { tag: string }) {
  const { posts } = useSelector((state: RootState) => state.post);

  // 이미 불러온 posts에서 태그별 필터링
  const filteredPosts = searchTag
    ? posts.filter((post) => post.tags.includes(searchTag))
    : posts;

  return (
    <ul className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-y-12">
      {filteredPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ul>
  );
}

/** PostCard 컴포넌트 */
function PostCard({ post }: { post: PostMetadata }) {
  const { slug, thumbnailUrl, title, description, publishDate, tags } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <li className="postcard_container group w-full space-y-3 overflow-hidden">
        <PostCardImage thumbnailUrl={thumbnailUrl} />
        <PostCardContent title={title} description={description} />
        <PostCardFooter publishDate={publishDate} tags={tags} />
      </li>
    </Link>
  );
}

/** PostCardImage 컴포넌트 */
function PostCardImage({ thumbnailUrl }: { thumbnailUrl: string }) {
  return (
    <figure className="postcard-img_wraaper relative w-full overflow-hidden rounded-xl">
      <ImageConvert
        props={{
          width: 1366,
          height: 768,
          src: thumbnailUrl,
          alt: "post-thumbnail",
          styleClassName:
            "h-full w-full object-cover object-center transition-[scale] duration-300 ease-in-out group-hover:scale-105",
        }}
      />
    </figure>
  );
}

/** PostCardContent 컴포넌트 */
function PostCardContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="postcard-content flex h-full flex-col justify-between space-y-2 p-1">
      <h6 className="postcard-content-header group-hover:text-link-hover text-text-dark line-clamp-1 overflow-hidden text-[20px] font-bold text-ellipsis group-hover:transition-colors group-hover:duration-300">
        {title}
      </h6>
      <p className="postcard-content-article text-text-muted line-clamp-2 h-10 overflow-hidden text-sm font-medium text-ellipsis">
        {description}
      </p>
    </div>
  );
}

/** PostCardFooter 컴포넌트 */
function PostCardFooter({
  publishDate,
  tags,
}: {
  publishDate: string;
  tags: string[];
}) {
  return (
    <div className="postcard-footer text-text-muted flex justify-between gap-2 p-1 text-xs sm:flex-row sm:items-center">
      <span className="flex items-center gap-1">
        <MdAccessTime />
        <span>{formatDate(publishDate)}</span>
      </span>
      {tags?.length > 0 && (
        <div className="space-x-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted/10 ring-ring text-primary-light rounded-full px-2 py-0.25 text-xs ring-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostCardList;
