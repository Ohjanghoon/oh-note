import { PostMetadata } from "@/types/postTypes";

async function BlogHeader({
  title,
  publishDate,
  thumbnailUrl,
  categories,
}: PostMetadata) {
  console.log("여기로??");
  return (
    <div className={`h-52 w-full space-y-6 bg-emerald-500 p-3`}>
      <div className="border-b-2">
        <h4 className="py-4 align-middle font-extrabold">{title}</h4>
        <div className="flex items-center">
          <p className="text-sm font-light">
            <span>{new Date(publishDate).toLocaleDateString()}</span>
          </p>
        </div>
      </div>
      <div className="h-[520px] w-full overflow-hidden p-5">
        <img
          src={thumbnailUrl}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>
    </div>
  );
}

export default BlogHeader;
