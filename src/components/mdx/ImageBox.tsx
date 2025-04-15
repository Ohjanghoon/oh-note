import Zoom from "react-medium-image-zoom";

interface ImageBoxProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  refTitle?: string;
  refUrl?: string;
}

// components
import Image from "next/image";
import Link from "next/link";

function ImageBox({ src, alt, about, refTitle, refUrl }: ImageBoxProps) {
  const validSrc =
    src && src.trim() !== "" ? src : "/assets/images/default_image.png";

  return (
    <div>
      <Zoom>
        <Image
          priority
          src={validSrc}
          alt={alt ?? "MDX Image"}
          width={0}
          height={0}
          sizes="100vw"
          about={about || "oh-note image"}
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "50vh",
            maxWidth: "50vw",
          }}
          className="my-2 rounded-sm"
        />
      </Zoom>
      {refTitle && refUrl && (
        <div className="text-text-muted text-xs">
          <span>[이미지 출처] </span>
          <Link href={refUrl} target="_blank" className="text-text-muted">
            {refTitle}
          </Link>
        </div>
      )}
    </div>
  );
}

export default ImageBox;
