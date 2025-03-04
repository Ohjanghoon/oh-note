import { PostMetadata } from "@/types/postTypes";

async function BlogHeader({
  title,
  publishDate,
  thumbnailUrl,
  categories,
}: PostMetadata) {
  console.log("여기로??");
  return (
    <header className="w-full space-y-6">
      <div className="bg-gradient-to-r from-transparent via-[#4cc3ff]/30 to-transparent py-14 text-center backdrop-blur-2xl">
        <h2 className="py-3 align-middle font-extrabold">{title}</h2>
        <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium">
          <p>{new Date(publishDate).toLocaleDateString()}</p>
          <div className="space-x-2 text-end">
            {categories.map((cat) => {
              return (
                <span
                  key={cat}
                  className="ring-ring rounded-full px-2 py-[2px] font-extralight ring-[0.4px]"
                >
                  {cat}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto h-[520px] max-w-3xl overflow-hidden p-5">
        <img
          src={thumbnailUrl}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>
    </header>
  );
}

export default BlogHeader;
