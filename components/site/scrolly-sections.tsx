"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollySectionsProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollySections({ children, className }: ScrollySectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const sections = Array.from(container.querySelectorAll<HTMLElement>("[data-scrolly]"));

    if (sections.length === 0) {
      return undefined;
    }

    container.setAttribute("data-scrolly-ready", "true");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      sections.forEach((section) => {
        section.setAttribute("data-in-view", "true");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.setAttribute("data-in-view", entry.isIntersecting ? "true" : "false");
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: [0.14, 0.32, 0.6],
      },
    );

    sections.forEach((section, index) => {
      section.style.setProperty("--scrolly-index", String(index));
      section.setAttribute("data-in-view", index === 0 ? "true" : "false");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}