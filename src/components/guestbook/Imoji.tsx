import { IconType } from "react-icons";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { BsEmojiSmileFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { FaSadCry, FaSurprise } from "react-icons/fa";
import { FaFaceGrinHearts, FaFaceLaughSquint } from "react-icons/fa6";

interface Imoji {
  name: string;
  styleClassName: string;
  icon: IconType;
}

const imojiList: Imoji[] = [
  {
    name: "thumbsup",
    styleClassName: "text-2xl text-amber-400",
    icon: BsFillHandThumbsUpFill,
  },
  {
    name: "smile",
    styleClassName: "text-primary rounded-[50%] bg-background text-2xl",
    icon: BsEmojiSmileFill,
  },
  {
    name: "cry",
    styleClassName: "rounded-[50%] bg-background text-2xl text-sky-400",
    icon: FaSadCry,
  },
  {
    name: "surprise",
    styleClassName: "rounded-[50%] bg-background   text-2xl text-indigo-500",
    icon: FaSurprise,
  },
  {
    name: "lovely",
    styleClassName: "rounded-[50%] bg-white text-2xl text-red-500",
    icon: FaFaceGrinHearts,
  },
  {
    name: "happy",
    styleClassName: "rounded-[50%] bg-bg-dark text-2xl text-yellow-400",
    icon: FaFaceLaughSquint,
  },
];

function Imoji({ imoji }: { imoji: string }) {
  const selectedImoji = imojiList.find((i) => i.name === imoji);

  if (!selectedImoji) return null;
  const Icon = selectedImoji.icon;
  return (
    <div className="bg-background/50 flex h-10 w-11 items-center justify-center rounded-full border border-white/10 p-2 shadow-lg shadow-black/10 backdrop-blur-3xl">
      <Icon className={selectedImoji.styleClassName} />
    </div>
  );
}

export default Imoji;
