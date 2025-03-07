import { PostMetadata } from "@/types/postTypes";

async function BlogContentHeader({
  title,
  publishDate,
  thumbnailUrl,
  tags,
}: PostMetadata) {
  console.log("여기로??");
  return (
    <>
      <header className="mx-auto flex w-full max-w-screen-md flex-col justify-center gap-8">
        <div className="text-center">
          {/* <p className="font-extrabold text-accent-primary">category</p> */}
          <h2 className="align-middle font-extrabold">{title}</h2>
          <div className="mt-3 space-y-3">
            <p className="space-x-3">
              <span className="text-xs text-gray-700">Published</span>
              <span className="text-sm font-medium">
                {new Date(publishDate).toDateString()}
              </span>
            </p>
            {tags.length > 0 && (
              <div className="space-x-3">
                <span className="text-xs text-gray-700">Tags</span>
                <div className="inline space-x-0.5">
                  {tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="ring-ring bg-background rounded-full px-2 py-0.25 text-sm font-medium ring-[0.4px]"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mx-auto h-120 w-full overflow-hidden">
          <img
            src={thumbnailUrl}
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </div>
      </header>
      {/* <div className="from-accent-primary/50 absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b via-[#4cc3ff]/30 to-transparent"></div> */}
    </>
  );
}

export default BlogContentHeader;
