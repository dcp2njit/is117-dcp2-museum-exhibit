"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { siteConfig } from "@/lib/site";
import {
  homeSectionNavigation,
  mainNavigation,
  pageSectionNavigation,
  type HeaderNavigationItem,
} from "@/lib/site-navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const siteTagline =
  "Seven eras, key papers, institutions, and a clear bridge into the math.";

function normalizeHash(hash: string) {
  if (!hash) {
    return "";
  }

  return hash.startsWith("#") ? hash : `#${hash}`;
}

function isNavigationItemActive(
  item: HeaderNavigationItem,
  pathname: string,
  hash: string
) {
  const normalizedHash = normalizeHash(hash);

  if (pathname === "/" && item.match.homeHashes?.includes(normalizedHash)) {
    return true;
  }

  if (item.match.exactPathnames?.includes(pathname)) {
    return true;
  }

  return (
    item.match.pathnamePrefixes?.some((prefix) =>
      pathname.startsWith(prefix)
    ) ?? false
  );
}

function NavigationRow({
  items,
  pathname,
  hash,
  variant,
  ariaLabel,
  onItemSelect,
}: {
  items: HeaderNavigationItem[];
  pathname: string;
  hash: string;
  variant: "primary" | "secondary";
  ariaLabel: string;
  onItemSelect?: () => void;
}) {
  const navClassName = variant === "primary" ? "site-nav" : "site-subnav";
  const linkClassName =
    variant === "primary" ? "site-nav__link" : "site-subnav__link";
  const activeClassName =
    variant === "primary"
      ? "site-nav__link--active"
      : "site-subnav__link--active";

  return (
    <nav aria-label={ariaLabel} className={navClassName}>
      {items.map((item) => {
        const isActive = isNavigationItemActive(item, pathname, hash);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemSelect}
            aria-current={
              isActive
                ? variant === "primary"
                  ? "page"
                  : "location"
                : undefined
            }
            className={cn(linkClassName, isActive && activeClassName)}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function PageSectionNav({
  items,
  activeHash,
  onItemSelect,
}: {
  items: { href: string; label: string }[];
  activeHash: string;
  onItemSelect?: () => void;
}) {
  const normalizedHash = normalizeHash(activeHash);

  return (
    <div className="site-header__subnavblock">
      <p className="site-nav__label">On this page</p>
      <nav aria-label="Page sections" className="site-subnav">
        {items.map((item) => {
          const itemHash = item.href.includes("#")
            ? `#${item.href.split("#")[1]}`
            : "";
          const isActive = normalizedHash === itemHash;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemSelect}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "site-subnav__link",
                isActive && "site-subnav__link--active"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, [pathname]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const activePrimaryItem =
    mainNavigation.find((item) =>
      isNavigationItemActive(item, pathname, hash)
    ) ?? mainNavigation[0];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__mobilebar">
          <div className="site-header__mobilebrand">
            <p className="site-header__eyebrow">Story-led reference</p>
            <Link href="/" className="site-brand site-brand--compact">
              {siteConfig.name}
            </Link>
          </div>

          <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="site-header__menu-trigger"
                aria-label="Open navigation menu"
              >
                <Menu className="site-header__menu-icon" aria-hidden="true" />
                <span>Menu</span>
              </button>
            </DialogTrigger>

            <DialogContent
              className={cn(
                "site-header__menu-dialog",
                "left-auto top-[calc(env(safe-area-inset-top,0px)+4.9rem)] right-4 translate-x-0 translate-y-0 p-0 sm:right-6"
              )}
            >
              <DialogHeader className="site-header__menu-header">
                <DialogTitle className="site-header__menu-title">
                  Site navigation
                </DialogTitle>
                <DialogDescription className="site-header__menu-description sr-only">
                  Choose a main route and return to the page immediately.
                </DialogDescription>
                <p className="site-header__menu-current">
                  Current destination: {activePrimaryItem.label}
                </p>
              </DialogHeader>

              <div className="site-header__menu-body">
                <div className="site-header__menu-block">
                  <p className="site-nav__label">Main navigation</p>
                  <NavigationRow
                    items={mainNavigation}
                    pathname={pathname}
                    hash={hash}
                    variant="primary"
                    ariaLabel="Main navigation"
                    onItemSelect={closeMobileMenu}
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="site-header__desktop">
          <div className="site-header__top">
            <div className="site-header__brandlock">
              <p className="site-header__eyebrow">Story-led reference</p>
              <Link href="/" className="site-brand">
                {siteConfig.name}
              </Link>
              <p className="site-tagline">{siteTagline}</p>
            </div>

            <div className="site-header__navblock">
              <p className="site-nav__label">Main navigation</p>
              <NavigationRow
                items={mainNavigation}
                pathname={pathname}
                hash={hash}
                variant="primary"
                ariaLabel="Main navigation"
              />
            </div>
          </div>

          {pathname === "/" ? (
            <div className="site-header__subnavblock">
              <p className="site-nav__label">On this page</p>
              <NavigationRow
                items={homeSectionNavigation}
                pathname={pathname}
                hash={hash}
                variant="secondary"
                ariaLabel="Homepage sections"
              />
            </div>
          ) : pageSectionNavigation[pathname] ? (
            <PageSectionNav
              items={pageSectionNavigation[pathname]}
              activeHash={hash}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}
