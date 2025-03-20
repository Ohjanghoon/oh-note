"use client";

import Image from "next/image";

interface ImageProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  styleClassName?: string;
}

function ImageConvert({ props }: { props: ImageProps }) {
  const { width, height, src, alt, styleClassName } = props;
  return (
    <Image
      width={width}
      height={height}
      src={src || "/assets/images/default_image.png"}
      alt={alt}
      className={`${styleClassName}`}
      loading="lazy"
      quality={100}
    />
  );
}

export default ImageConvert;
