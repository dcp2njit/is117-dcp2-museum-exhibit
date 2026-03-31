import type { Metadata } from "next";

import { EraChapter } from "@/components/content/era-chapter";
import { getEraBySlug, getSourcesByIds } from "@/lib/content/queries";
import { buildPageMetadata } from "@/lib/metadata";

const era = getEraBySlug("algorithmic-influence");

export const metadata: Metadata = buildPageMetadata(era.title, era.lede);

export default function AlgorithmicInfluencePage() {
  return <EraChapter era={era} references={getSourcesByIds(era.referenceIds)} />;
}