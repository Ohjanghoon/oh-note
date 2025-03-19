"use client";

// node modules
import Link from "next/link";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// types
import { PostMetadata } from "@/types/postTypes";

// store
import { RootState } from "@/store/store";

// icons
import { MdAccessTime } from "react-icons/md";
import { IoClose } from "react-icons/io5";

// components
import ImageConvert from "../ui/ImageConvert";
import { formatDate } from "@/utils/utils";

/** PostCardList 컴포넌트 */
function PostCardList({ tag: searchTag }: { tag: string }) {
  const { posts } = useSelector((state: RootState) => state.post);

  // 이미 불러온 posts에서 태그별 필터링
  const filteredPosts = searchTag
    ? posts.filter((post) => post.tags.includes(searchTag))
    : posts;

  return (
    <>
      <div className={`mb-3`}>
        {searchTag ? (
          <span className="flex items-center gap-2">
            Filter Tag:
            <Link href={"/blog"}>
              <button className="ring-primary bg-muted/10 text-primary-light flex max-w-full shrink-0 items-center gap-2 rounded-full px-2 py-0.5 text-xs ring-1">
                <span>{searchTag}</span>
                <IoClose />
              </button>
            </Link>
          </span>
        ) : (
          <span className="ring-ring bg-muted/50 text-text-dark-secondary rounded-md px-2 py-0.5 ring-1">
            All Posts
          </span>
        )}
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
        className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:gap-y-7 lg:grid-cols-3"
      >
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </motion.ul>
    </>
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
    <figure className="postcard-img_wraaper relative h-full max-h-64 w-full overflow-hidden rounded-xl">
      <ImageConvert
        props={{
          width: 1366,
          height: 768,
          src: thumbnailUrl,
          alt: "post-thumbnail",
          styleClassName:
            "h-full w-full object-cover object-center transition-[scale] max-h-64 duration-300 ease-in-out group-hover:scale-105",
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
    <div className="postcard-content flex h-full flex-col justify-between space-y-2 px-1">
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
    <div className="postcard-footer text-text-muted flex w-full flex-col gap-2 px-1 py-2 text-xs">
      <p className="flex items-center gap-1">
        <MdAccessTime />
        <span>{formatDate(publishDate)}</span>
      </p>
      {tags?.length > 0 && (
        <div className="scrollbar-hide flex w-full items-center gap-1 truncate overflow-x-auto px-0.5 py-2 whitespace-nowrap">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="ring-ring bg-muted/10 text-primary-light max-w-full shrink-0 rounded-full px-2 py-0.5 text-xs ring-1"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && <span>...</span>}
        </div>
      )}
    </div>
  );
}

export default PostCardList;
