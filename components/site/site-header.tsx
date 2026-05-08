"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getActiveNavigationItem, getThemeClass, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const themeClass = getThemeClass(pathname);
  const activeLabel = getActiveNavigationItem(pathname).label;

  return (
    <header className={`site-header ${themeClass}`.trim()}>
      <div className="shell shell--wide site-header__inner">
        <div className="site-header__masthead">
          <p className="site-header__eyebrow">Artist-run digital exhibition</p>
          <Link className="site-header__brand" href="/">
            {siteConfig.name}
          </Link>
        </div>
        <p className="site-header__signal">Now viewing: {activeLabel}</p>
      </div>
    </header>
  );
}
