import type { Metadata, Viewport } from "next";
import { Space_Mono, Teko } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SiteSidebar } from "@/components/site/site-sidebar";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const displayFont = Teko({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const bodyFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const uiFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} ${uiFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-frame">
          <SiteHeader />
          <div className="site-workspace">
            <SiteSidebar />
            <div className="site-stage">{children}</div>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}