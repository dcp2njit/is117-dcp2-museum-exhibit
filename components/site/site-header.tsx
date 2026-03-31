"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNavigation, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const themeClass = getThemeClass(pathname);

  return (
    <header className={`site-header ${themeClass}`.trim()}>
      <div className="shell shell--wide site-header__inner">
        <div>
          <p className="site-header__eyebrow">Artist-run digital exhibition</p>
          <Link className="site-header__brand" href="/">
            {siteConfig.name}
          </Link>
        </div>
        <nav aria-label="Primary" className="site-nav">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              className={isActivePath(pathname, item.href) ? "site-nav__link is-active" : "site-nav__link"}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getThemeClass(pathname: string) {
  if (pathname.startsWith("/eras/early-web-aesthetics")) {
    return "theme--early";
  }

  if (pathname.startsWith("/eras/platform-standardization")) {
    return "theme--platform";
  }

  if (pathname.startsWith("/eras/algorithmic-influence")) {
    return "theme--algorithmic";
  }

  if (pathname.startsWith("/eras/subcultures-and-anti-design")) {
    return "theme--subcultures";
  }

  return "";
}