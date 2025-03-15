import ImageConvert from "../ui/ImageConvert";

interface Emoji {
  name: string;
  styleClassName: string;
  iconSrc: string;
}

export const emojiList: Emoji[] = [
  {
    name: "smile",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/1_smile.svg",
  },
  {
    name: "silly",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/2_silly.svg",
  },
  {
    name: "hug",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/3_hug.svg",
  },
  {
    name: "love",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/4_love.svg",
  },
  {
    name: "cry",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/5_cry.svg",
  },
  {
    name: "monocle",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/6_monocle.svg",
  },
  {
    name: "party",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/7_party.svg",
  },
  {
    name: "star",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/8_star.svg",
  },
  {
    name: "surprise",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/9_surprise.svg",
  },
  {
    name: "thumbsup",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/10_thumbsup.svg",
  },

  {
    name: "clap",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/11_clap.svg",
  },
  {
    name: "biceps",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/12_biceps.svg",
  },
  {
    name: "heart",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/13_blue_heart.svg",
  },
  {
    name: "ghost",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/14_ghost.svg",
  },
  {
    name: "alien",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/15_alien.svg",
  },
  {
    name: "robot",
    styleClassName: "",
    iconSrc: "/assets/icons/emoji/16_robot.svg",
  },
];

function Emoji({ emoji }: { emoji: string }) {
  const selectedEmoji = emojiList.find((e) => e.name === emoji);

  if (!selectedEmoji) return null;

  return (
    <ImageConvert
      props={{
        width: 40,
        height: 40,
        src: selectedEmoji.iconSrc,
        alt: selectedEmoji.name,
        styleClassName: "w-full h-full",
      }}
    />
  );
}

export default Emoji;
