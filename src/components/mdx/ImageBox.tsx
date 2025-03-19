import Zoom from "react-medium-image-zoom";

type ImageBoxProps = React.ImgHTMLAttributes<HTMLImageElement>;

// components
import Image from "next/image";

function ImageBox({ src, alt, about }: ImageBoxProps) {
  return (
    <Zoom a11yNameButtonUnzoom="true">
      <Image
        src={src || "/assets/images/default_image.png"}
        alt={alt ?? "MDX Image"}
        width={0}
        height={0}
        sizes="100vw"
        about={about || "oh-note image"}
        style={{ width: "auto", height: "auto", maxHeight: "50vh" }}
        loading="lazy"
        className="my-2 rounded-lg"
      />
    </Zoom>
  );
}

export default ImageBox;
