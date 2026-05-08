"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  getActiveNavigationItem,
  getThemeClass,
  isActivePath,
  primaryNavigation,
  siteConfig,
} from "@/lib/site";

const pageSignals: Record<string, { title: string; message: string }> = {
  "/": {
    title: "Entry room",
    message: "Start here for the exhibit overview, route logic, and the jump points into each gallery.",
  },
  "/eras/early-web-aesthetics": {
    title: "Gallery 01",
    message: "DIY pages, badges, guestbooks, and personal publishing cultures anchor the exhibit's first room.",
  },
  "/eras/platform-standardization": {
    title: "Gallery 02",
    message: "This room tracks the shift from handmade pages to standardized interface systems and template logic.",
  },
  "/eras/algorithmic-influence": {
    title: "Gallery 03",
    message: "Feed surfaces, metrics, and platform incentives reshape how design is composed and consumed here.",
  },
  "/eras/subcultures-and-anti-design": {
    title: "Gallery 04",
    message: "The final gallery follows remix, refusal, and subcultural aesthetics that push back on smooth optimization.",
  },
  "/sources": {
    title: "Archive room",
    message: "Use this dossier to inspect citations, provenance notes, and licensing context for exhibit materials.",
  },
};

export function SiteSidebar() {
  const pathname = usePathname();
  const themeClass = getThemeClass(pathname);
  const activeItem = getActiveNavigationItem(pathname);
  const status = pageSignals[activeItem.href] ?? pageSignals["/"];

  return (
    <aside aria-label="Exhibit navigation" className={`site-sidebar ${themeClass}`.trim()}>
      <section className="site-sidebar__panel site-sidebar__brand-panel">
        <p className="site-sidebar__eyebrow">Archive launcher</p>
        <p className="site-sidebar__copy">{siteConfig.description}</p>
        <p className="site-sidebar__signal">Four eras. One source archive.</p>
      </section>

      <nav className="site-sidebar__panel" aria-label="Primary navigation">
        <p className="site-sidebar__eyebrow">Navigation.exe</p>
        <ul className="site-nav site-nav--stack">
          {primaryNavigation.map((item, index) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <li className="site-nav__item" key={item.href}>
                <Link className={isActive ? "site-nav__link is-active" : "site-nav__link"} href={item.href}>
                  <span className="site-nav__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="site-nav__label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="site-sidebar__panel site-sidebar__status">
        <p className="site-sidebar__eyebrow">Current location</p>
        <p className="site-sidebar__status-route">{activeItem.label}</p>
        <h2 className="site-sidebar__status-title">{status.title}</h2>
        <p className="site-sidebar__status-copy">{status.message}</p>
      </section>
    </aside>
  );
}