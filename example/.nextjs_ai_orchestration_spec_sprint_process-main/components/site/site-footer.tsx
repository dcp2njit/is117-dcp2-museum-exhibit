import Link from "next/link";

import {
  HomeEyebrow,
  homeTokens,
} from "@/components/content/home/home-design-system";
import {
  footerNavigation,
  footerQuickLinks,
  footerReturnSignals,
  type SiteNavigationLink,
} from "@/lib/site-navigation";
import { cn } from "@/lib/utils";

const footerBorderClassName = homeTokens.border;
const footerLinkClassName =
  "text-[0.94rem] font-semibold leading-6 text-(--ink-84) no-underline nav-link";

function FooterLinkList({
  links,
  variant = "plain",
}: {
  links: SiteNavigationLink[];
  variant?: "plain" | "ruled";
}) {
  return (
    <div className={variant === "ruled" ? "grid gap-2" : "grid gap-1.5"}>
      {links.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            variant === "ruled"
              ? [
                  "py-3 text-[0.98rem] font-semibold leading-6 text-(--ink-84) no-underline nav-link",
                  index === 0 && "first:border-t-0 first:pt-0",
                  index > 0 && ["border-t", footerBorderClassName],
                ]
              : footerLinkClassName
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <div
        className={cn(
          homeTokens.frame,
          "border-t",
          footerBorderClassName,
          "pt-8 sm:pt-10"
        )}
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(17rem,0.74fr)_minmax(13rem,0.5fr)] lg:items-start lg:gap-6">
          <div className="space-y-3 lg:pr-6">
            <HomeEyebrow scale="section">Continue</HomeEyebrow>
            <h2 className="max-w-[8.8ch] font-(family-name:--font-display) text-[2.18rem] leading-[0.92] tracking-[-0.05em] text-foreground sm:text-[2.56rem]">
              Leave with the whole argument intact.
            </h2>
            <p className="max-w-[31ch] text-(--ink-72) text-[0.98rem] leading-7 sm:text-[1rem] sm:leading-7.25">
              The quickest return is still the seven-era pass. Use papers for
              proof, cast pages for motive, and the guide when the modern
              chapters turn technical.
            </p>
          </div>

          <aside
            aria-label="Quick return links"
            className={cn(
              "grid gap-3 self-start border-t",
              footerBorderClassName,
              "pt-5 sm:pt-6 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0"
            )}
          >
            <HomeEyebrow scale="section">Quick return</HomeEyebrow>
            <p className="max-w-[13ch] font-(family-name:--font-display) text-[1.48rem] leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[1.7rem]">
              Return by sequence, proof, or cast.
            </p>
            <FooterLinkList links={footerQuickLinks} variant="ruled" />
          </aside>

          <div
            className={cn(
              "grid gap-2.5 self-start border-t",
              footerBorderClassName,
              "pt-5 sm:pt-6 lg:border-t-0 lg:border-l lg:pl-5 lg:pt-0"
            )}
          >
            <HomeEyebrow scale="section">What stays in view</HomeEyebrow>
            <div className="grid gap-2.5">
              {footerReturnSignals.map((item) => (
                <div
                  key={item.eyebrow}
                  className={cn(
                    "border-t",
                    footerBorderClassName,
                    "pt-3 first:border-t-0 first:pt-0"
                  )}
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--accent-strong)">
                    {item.eyebrow}
                  </p>
                  <p className="mt-1 text-[0.88rem] leading-5.75 text-(--ink-72)">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "footer-grid mt-6 grid gap-0 border-t",
            footerBorderClassName,
            "lg:grid-cols-3 lg:gap-0"
          )}
        >
          {footerNavigation.map((section, index) => (
            <section
              key={section.title}
              className={cn(
                "border-b",
                footerBorderClassName,
                "py-3.5 sm:py-4 lg:border-b-0 lg:px-5 lg:py-4 lg:first:pl-0 lg:last:pr-0 lg:not-first:border-l"
              )}
            >
              <div className="flex items-baseline gap-3">
                <HomeEyebrow scale="section">{`0${index + 1}`}</HomeEyebrow>
                <p className="font-(family-name:--font-display) text-[1.38rem] leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[1.48rem]">
                  {section.title}
                </p>
              </div>
              <p className="mt-1.5 max-w-[34ch] text-(--ink-70) text-[0.86rem] leading-6 sm:text-[0.9rem]">
                {section.description}
              </p>
              <div className="mt-2.5">
                <FooterLinkList links={section.links} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </footer>
  );
}
