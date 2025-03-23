// components
import LikesBtn from "@/components/blog/LikesBtn";

import { FaRegShareFromSquare } from "react-icons/fa6";

function BlogContentButtons() {
  const url = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("클립보드에 URL이 복사되었습니다!");
  };

  return (
    <div className="likes-container mx-auto flex w-full max-w-screen-md items-center justify-center gap-5 py-20">
      <LikesBtn styleClassName="rounded-full px-5 py-3" />
      <div className="border-border h-6 border-[0.5px]"></div>
      <button
        className="text-text-dark-secondary border-text-dark-secondary flex items-center justify-center gap-3 rounded-full border-1 px-4 py-3 transition-[box-shadow] duration-300 hover:shadow-sm"
        onClick={copyToClipboard}
      >
        <FaRegShareFromSquare />
        share
      </button>
    </div>
  );
}

export default BlogContentButtons;
