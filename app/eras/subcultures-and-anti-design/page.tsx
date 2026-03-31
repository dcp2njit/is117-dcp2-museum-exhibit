import type { Metadata } from "next";

import { EraChapter } from "@/components/content/era-chapter";
import { getEraBySlug, getSourcesByIds } from "@/lib/content/queries";
import { buildPageMetadata } from "@/lib/metadata";

const era = getEraBySlug("subcultures-and-anti-design");

export const metadata: Metadata = buildPageMetadata(era.title, era.lede);

export default function SubculturesPage() {
  return <EraChapter era={era} references={getSourcesByIds(era.referenceIds)} />;
}