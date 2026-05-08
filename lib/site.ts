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

function normalizePath(pathname: string | null | undefined) {
  if (!pathname) {
    return "/";
  }

  return pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function isActivePath(pathname: string | null | undefined, href: string) {
  return normalizePath(pathname) === normalizePath(href);
}

export function getActiveNavigationItem(pathname: string | null | undefined) {
  return primaryNavigation.find((item) => isActivePath(pathname, item.href)) ?? primaryNavigation[0];
}

export function getThemeClass(pathname: string | null | undefined) {
  const activeItem = getActiveNavigationItem(pathname);

  switch (activeItem.href) {
    case "/eras/early-web-aesthetics":
      return "theme--early-web-aesthetics";
    case "/eras/platform-standardization":
      return "theme--platform-standardization";
    case "/eras/algorithmic-influence":
      return "theme--algorithmic-influence";
    case "/eras/subcultures-and-anti-design":
      return "theme--subcultures-and-anti-design";
    default:
      return "";
  }
}