import { FiInfo } from "react-icons/fi";
import { PiWarning, PiCheckCircle, PiLightbulb } from "react-icons/pi";
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";

import { BiCommentError } from "react-icons/bi";

type CalloutType =
  | "info"
  | "warn"
  | "success"
  | "err"
  | "tip"
  | "pin"
  | "quote";

const typeList = [
  {
    name: "info",
    icon: FiInfo,
    textColor: "text-blue-600 dark:text-blue-300",
    bgColor:
      "bg-blue-400/10 dark:bg-blue-400/5 border-blue-400 dark:border-blue-400/40",
  },
  {
    name: "warn",
    icon: PiWarning,
    textColor: "text-yellow-600 dark:text-yellow-400",
    bgColor:
      "bg-yellow-300/10 dark:bg-yellow-400/5 border-yellow-400 dark:border-yellow-400/40",
  },
  {
    name: "success",
    icon: PiCheckCircle,
    textColor: "text-green-600 dark:text-green-400",
    bgColor:
      "bg-green-300/10 dark:bg-green-400/5 border-green-400 dark:border-green-400/40",
  },
  {
    name: "err",
    icon: BiCommentError,
    textColor: "text-red-500 dark:text-red-400",
    bgColor:
      "bg-red-300/10 dark:bg-red-400/5 border-red-400 dark:border-red-400/40",
  },
  {
    name: "tip",
    icon: PiLightbulb,
    textColor: "text-purple-500 dark:text-purple-400",
    bgColor:
      "bg-purple-300/10 dark:bg-purple-400/5 border-purple-400 dark:border-purple-400/40",
  },
  {
    name: "quest",
    icon: BsQuestionCircle,
    textColor: "text-[#ff964f] dark:text-[#ff964f]",
    bgColor:
      "bg-[#ff964f]/10 dark:bg-[#ff964f]/5 border-[#ff964f] dark:border-[#ff964f]/40",
  },

  {
    name: "quote",
    icon: BsChatDots,
    textColor: "text-gray-500 dark:text-gray-400",
    bgColor:
      "bg-gray-300/10 dark:bg-gray-400/5 border-gray-400 dark:border-gray-400/40",
  },
];

function Callout({ type, children }: { type: CalloutType; children: string }) {
  const selectedType = typeList.find((t) => t.name === type);
  if (!selectedType) return null;
  const Icon = selectedType.icon;
  return (
    <div
      className={`callout-container ${selectedType?.bgColor} my-3 flex items-start gap-2 rounded-lg border-1 p-3 text-[16px]`}
    >
      <div className="pt-1">
        <Icon
          className={`callout-icon ${selectedType?.textColor} min-w-7 text-[17px]`}
        />
      </div>
      <div className={`callout-content text-text-dark-secondary font-medium`}>
        {children}
      </div>
    </div>
  );
}

export default Callout;
