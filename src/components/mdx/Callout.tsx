import { FiInfo } from "react-icons/fi";
import {
  PiWarning,
  PiCheckCircle,
  PiLightbulb,
  PiMapPin,
} from "react-icons/pi";
import { BiCommentError } from "react-icons/bi";

const typeList = [
  {
    name: "info",
    icon: FiInfo,
    textColor: "text-blue-600 dark:text-blue-300",
    bgColor: "bg-blue-400/10 dark:bg-blue-400/5 border-blue-400",
  },
  {
    name: "warn",
    icon: PiWarning,
    textColor: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-300/10 dark:bg-yellow-400/5 border-yellow-400",
  },
  {
    name: "success",
    icon: PiCheckCircle,
    textColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-300/10 dark:bg-green-400/5 border-green-400",
  },
  {
    name: "err",
    icon: BiCommentError,
    textColor: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-300/10 dark:bg-red-400/5 border-red-400",
  },
  {
    name: "tip",
    icon: PiLightbulb,
    textColor: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-300/10 dark:bg-purple-400/5 border-purple-400",
  },
  {
    name: "pin",
    icon: PiMapPin,
    textColor: "text-[#e31ea1] dark:text-[#f244b8]",
    bgColor: "bg-[#e31ea1]/10 dark:bg-[#e31ea1]/5 border-[#e31ea1]",
  },
];

function Callout({ type, children }: { type: string; children: string }) {
  const selectedType = typeList.find((t) => t.name === type);
  if (!selectedType) return null;
  const Icon = selectedType.icon;
  return (
    <div
      className={`callout-container ${selectedType?.bgColor} my-3 flex items-center gap-2 rounded-lg border-1 p-3 text-[16px]`}
    >
      <Icon
        className={`callout-icon ${selectedType?.textColor} min-w-7 text-[17px]`}
      />
      <div className={`callout-content ${selectedType?.textColor}`}>
        {children}
      </div>
    </div>
  );
}

export default Callout;
