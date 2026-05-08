"use client";

import { useEffect, useState } from "react";

type SectionNavItem = {
  id: string;
  label: string;
};

type SectionNavProps = {
  items: SectionNavItem[];
  label: string;
  className?: string;
};

export function SectionNav({ items, label, className }: SectionNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) {
      return undefined;
    }

    const updateActiveSection = () => {
      const targetLine = window.innerHeight * 0.32;
      let nextActiveId = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        const sectionContainsTarget = bounds.top <= targetLine && bounds.bottom >= targetLine;
        const distance = Math.abs(bounds.top - targetLine);

        if (sectionContainsTarget) {
          nextActiveId = section.id;
          closestDistance = -1;
          return;
        }

        if (closestDistance !== -1 && distance < closestDistance) {
          closestDistance = distance;
          nextActiveId = section.id;
        }
      });

      setActiveId(nextActiveId);
    };

    updateActiveSection();

    let frameId = 0;

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveSection();
      });
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label={label} className={className ? `section-nav ${className}` : "section-nav"}>
      <p className="section-nav__eyebrow">{label}</p>
      <ul className="section-nav__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              aria-current={item.id === activeId ? "true" : undefined}
              className={item.id === activeId ? "section-nav__link is-active" : "section-nav__link"}
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}