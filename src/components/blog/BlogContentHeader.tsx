// types
import { PostMetadata } from "@/types/postTypes";

// icons
import { MdAccessTime } from "react-icons/md";

function BlogContentHeader({ props }: { props: PostMetadata }) {
  const { title, publishDate, tags, thumbnailUrl } = props;

  return (
    <header className="blog-content-header mx-auto w-full max-w-screen-md justify-center space-y-10">
      <BlogContentTitle title={title} publishDate={publishDate} tags={tags} />
      <BlogContentImage thumbnailUrl={thumbnailUrl} />
    </header>
  );
}

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
    <div className="title-container border-muted space-y-5 border-b pb-5 text-center">
      {/* <p className="font-extrabold text-accent-primary">category</p> */}
      <h2 className="font-extrabold">{title}</h2>
      <p className="text-text-dark-secondary flex items-center justify-center gap-1 text-sm font-semibold">
        <MdAccessTime />
        <span>{new Date(publishDate).toDateString()}</span>
      </p>
    </div>
  );
}

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

export default BlogContentHeader;

{
  /* <div className="from-accent-primary/50 absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b via-[#4cc3ff]/30 to-transparent"></div> */
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
