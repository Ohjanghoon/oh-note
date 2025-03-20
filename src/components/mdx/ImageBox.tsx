import Zoom from "react-medium-image-zoom";

type ImageBoxProps = React.ImgHTMLAttributes<HTMLImageElement>;

// components
import Image from "next/image";

function ImageBox({ src, alt, about }: ImageBoxProps) {
  const validSrc =
    src && src.trim() !== "" ? src : "/assets/images/default_image.png";

  return (
    <Zoom>
      <Image
        priority
        src={validSrc}
        alt={alt ?? "MDX Image"}
        width={0}
        height={0}
        sizes="100vw"
        about={about || "oh-note image"}
        style={{ width: "auto", height: "auto", maxHeight: "50vh" }}
        className="my-2 rounded-sm"
      />
    </Zoom>
  );
}

export default ImageBox;
