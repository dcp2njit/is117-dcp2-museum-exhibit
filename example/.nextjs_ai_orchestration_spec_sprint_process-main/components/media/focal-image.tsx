import Image, { type ImageProps } from "next/image";

import { getImageFocusData } from "@/lib/image-focus";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function prefixSrc(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src === "string" && src.startsWith("/") && basePath) {
    return `${basePath}${src}`;
  }
  return src;
}

type FocalImageProps = ImageProps & {
  applySuggestedFit?: boolean;
};

export function FocalImage({
  alt,
  src,
  style,
  applySuggestedFit = true,
  ...props
}: FocalImageProps) {
  const focusKey = typeof src === "string" ? src : undefined;
  const focusData = focusKey ? getImageFocusData(focusKey) : undefined;

  return (
    <Image
      {...props}
      alt={alt}
      src={prefixSrc(src)}
      style={
        focusData
          ? {
              objectFit: applySuggestedFit ? focusData.suggestedFit : undefined,
              objectPosition: focusData.objectPosition,
              ...style,
            }
          : style
      }
    />
  );
}
