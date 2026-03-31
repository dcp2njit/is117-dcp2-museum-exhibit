import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const erasSlugs = [
    "precursors-to-machine-intelligence",
    "computation-information-field-formation",
    "symbolic-optimism-and-early-ai-programs",
    "knowledge-systems-critique-and-the-first-ai-winter",
    "statistical-learning-and-network-revival",
    "deep-learning-breakthroughs",
    "foundation-models-and-generative-ai",
  ];

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/people-and-institutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reading-maps/intellectual-lineage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/embeddings-latent-space-and-llm-math`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const eraRoutes: MetadataRoute.Sitemap = erasSlugs.map((slug) => ({
    url: `${baseUrl}/eras/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...eraRoutes];
}
