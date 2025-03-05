import { PostMetadata } from "@/types/postTypes";

async function BlogContentHeader({
  title,
  publishDate,
  thumbnailUrl,
  categories,
}: PostMetadata) {
  console.log("여기로??");
  return (
    <>
      <header className="mx-auto flex w-full flex-col justify-center gap-8 pt-[4.3rem]">
        <div className="text-center">
          <p className="text-accent-primary font-extrabold">category</p>
          <h1 className="align-middle font-extrabold">{title}</h1>
          <div className="mt-3 space-y-3">
            <p className="space-x-3">
              <span className="text-xs text-gray-700">Published</span>
              <span className="text-sm font-medium">
                {new Date(publishDate).toDateString()}
              </span>
            </p>
            <div className="space-x-3">
              <span className="text-xs text-gray-700">Tags</span>
              <div className="inline space-x-0.5">
                {categories.map((cat) => {
                  return (
                    <span
                      key={cat}
                      className="ring-ring bg-background rounded-full px-2 py-[1.4px] text-sm font-medium ring-[0.4px]"
                    >
                      {cat}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-120 w-full overflow-hidden">
          <img
            src={thumbnailUrl}
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </div>
      </header>
      <div className="from-accent-primary/50 absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b via-[#4cc3ff]/30 to-transparent"></div>
    </>
  );
}

export default BlogContentHeader;
