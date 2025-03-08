"use client";

import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  styleClassName?: string;
}

function PostImage() {
  return <Image src={""} alt="" />;
}

export default PostImage;
