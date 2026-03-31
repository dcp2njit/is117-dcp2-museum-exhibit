export const siteConfig = {
  name: "Algorithmic Aesthetics",
  title: "Algorithmic Aesthetics",
  description:
    "A curated digital museum exhibit tracing how online culture reshaped graphic design across four eras.",
};

const repoName = "is117-dcp2-museum-exhibit";

export const siteBasePath = process.env.GITHUB_ACTIONS === "true" ? `/${repoName}` : "";

export function withSiteBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//") || !siteBasePath) {
    return path;
  }

  return path.startsWith(siteBasePath) ? path : `${siteBasePath}${path}`;
}

export const primaryNavigation = [
  { href: "/", label: "Overview" },
  { href: "/eras/early-web-aesthetics", label: "Early Web" },
  { href: "/eras/platform-standardization", label: "Platform" },
  { href: "/eras/algorithmic-influence", label: "Algorithmic" },
  { href: "/eras/subcultures-and-anti-design", label: "Subcultures" },
  { href: "/sources", label: "Sources" },
] as const;