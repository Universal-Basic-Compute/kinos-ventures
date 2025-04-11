'use client';

import Image from "next/image";
import { useState } from "react";

type ResourceImageProps = {
  src: string;
  alt: string;
  fallbackSrc: string;
  fill?: boolean;
  className?: string;
  width?: number;
  height?: number;
};

export default function ResourceImage({
  src,
  alt,
  fallbackSrc,
  fill = false,
  className = "",
  width,
  height
}: ResourceImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
