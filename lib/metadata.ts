import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export function buildPageMetadata(title: string, description: string): Metadata {
  const fullTitle = title === siteConfig.title ? siteConfig.title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
  };
}