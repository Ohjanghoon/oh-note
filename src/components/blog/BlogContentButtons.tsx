// components
import LikesBtn from "@/components/blog/LikesBtn";

function BlogContentButtons() {
  return (
    <div className="likes-container mx-auto flex w-full max-w-screen-md items-center justify-center gap-5 py-20">
      <LikesBtn styleClassName="rounded-full px-5 py-3" />
      <div className="border-border h-6 border-[0.5px]"></div>
      <button className="text-text-dark-secondary border-text-dark-secondary flex items-center justify-center gap-3 rounded-full border-1 px-4 py-3">
        share
      </button>
    </div>
  );
}

export default BlogContentButtons;
