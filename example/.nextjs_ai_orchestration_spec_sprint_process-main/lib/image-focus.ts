import {
  imageFocusMap,
  type ImageFocusData,
} from "@/lib/generated/image-focus-map";

export function getImageFocusData(source?: string): ImageFocusData | undefined {
  if (!source) {
    return undefined;
  }

  return imageFocusMap[source];
}

export function getSuggestedImageFit(
  source?: string
): ImageFocusData["suggestedFit"] | undefined {
  return getImageFocusData(source)?.suggestedFit;
}
