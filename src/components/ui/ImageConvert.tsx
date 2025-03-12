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
      src={src || "/assets/images/default_image.webp"}
      alt={alt}
      className={`${styleClassName}`}
    />
  );
}

export default ImageConvert;
