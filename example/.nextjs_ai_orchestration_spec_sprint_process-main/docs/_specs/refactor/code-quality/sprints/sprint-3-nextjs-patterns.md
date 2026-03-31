# Sprint 3 — Next.js Patterns

## Header

- **Goal:** Add missing Next.js App Router infrastructure — shared era layout,
  error boundaries, sitemap, robots — and simplify `OpeningSection` props.
- **Spec sections:** Design Goal 5; Architecture → Next.js Patterns
- **Prerequisite:** Sprint 2 committed (className consistency)
- **Expected test count:** Existing count + 1 new (`tests/app/sitemap.test.ts`)

## Available Assets

| Asset                                         | Signature / Location                                                                                                                                                          | How this sprint uses it                                                                            |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `app/layout.tsx`                              | Root layout with `<SiteHeader />`, `{children}`, `<SiteFooter />`                                                                                                             | Unchanged — add nested layouts below                                                               |
| `app/eras/*/page.tsx` (7 files)               | Each wraps content in `<main className="page-shell exemplar-shell"><article className="hero-panel exemplar-panel chapter-theme chapter-theme--{modifier}">…</article></main>` | Extract shared wrapper into `app/eras/layout.tsx`; each page provides only the `<article>` content |
| `lib/site.ts`                                 | `siteConfig.name`, `siteConfig.title`, `siteConfig.description`                                                                                                               | Used in sitemap metadata                                                                           |
| `lib/content/homepage.ts`                     | `getHomePageContent()` returns `HomePageContent` with nested `opening` field containing all 10 props currently drilled into `OpeningSection`                                  | Simplify to pass `opening` object directly                                                         |
| `components/content/home/opening-section.tsx` | `OpeningSection` with 10 individual props                                                                                                                                     | Refactor to accept typed `HomePageContent['opening']` object                                       |
| `components/content/home/editorial-home.tsx`  | Calls `getHomePageContent()` and spreads fields into section components                                                                                                       | Simplify prop passing                                                                              |
| Era theme modifiers                           | `precursor`, `formation`, `symbolic`, `winter`, `statistical`, `breakthrough`, `foundation`                                                                                   | Needed for shared layout to apply correct theme class                                              |

## Tasks

### 1. Create shared era layout `app/eras/layout.tsx`

This layout wraps all era pages with the common `<main>` shell:

```tsx
// app/eras/layout.tsx
export default function ErasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="page-shell exemplar-shell">{children}</main>;
}
```

Note: The `<article>` with its era-specific `chapter-theme--*` class stays in
each page, since the theme modifier varies per era. Only the `<main>` wrapper
is shared.

**Verify:**

```bash
npx tsc --noEmit
```

### 2. Update all 7 era pages to remove `<main>` wrapper

In each era page, remove the outer `<main className="page-shell exemplar-shell">`
and its closing `</main>`, leaving the `<article>` as the top-level element:

Files to update:

- `app/eras/precursors-to-machine-intelligence/page.tsx`
- `app/eras/computation-information-field-formation/page.tsx`
- `app/eras/symbolic-optimism-and-early-ai-programs/page.tsx`
- `app/eras/knowledge-systems-critique-and-the-first-ai-winter/page.tsx`
- `app/eras/statistical-learning-and-network-revival/page.tsx`
- `app/eras/deep-learning-breakthroughs/page.tsx`
- `app/eras/foundation-models-and-generative-ai/page.tsx`

Each page changes from:

```tsx
return (
  <main className="page-shell exemplar-shell">
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--precursor">
      …
    </article>
  </main>
);
```

To:

```tsx
return (
  <article className="hero-panel exemplar-panel chapter-theme chapter-theme--precursor">
    …
  </article>
);
```

**Verify:**

```bash
npx tsc --noEmit
npm run build
```

### 3. Create root error boundary `app/error.tsx`

```tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-(family-name:--font-display) text-2xl tracking-tight text-foreground">
          Something went wrong
        </h2>
        <p className="mt-3 text-(--ink-72) text-sm leading-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center rounded-md bg-[rgba(34,24,18,0.94)] px-5 py-3 text-sm font-semibold text-white hover:bg-(--accent-strong)"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
```

**Verify:**

```bash
npx tsc --noEmit
```

### 4. Create era-specific error boundary `app/eras/error.tsx`

```tsx
"use client";

import Link from "next/link";

export default function ErasError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-(family-name:--font-display) text-2xl tracking-tight text-foreground">
          This era couldn&apos;t load
        </h2>
        <p className="mt-3 text-(--ink-72) text-sm leading-6">
          {error.message ||
            "An unexpected error occurred while loading this era."}
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-md bg-[rgba(34,24,18,0.94)] px-5 py-3 text-sm font-semibold text-white hover:bg-(--accent-strong)"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-sm font-semibold text-(--accent-strong) hover:underline"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

**Verify:**

```bash
npx tsc --noEmit
```

### 5. Create `app/sitemap.ts`

Generate a static sitemap listing all known routes:

```ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const erasSlugs = [
    "precursors-to-machine-intelligence",
    "computation-information-field-formation",
    "symbolic-optimism-and-early-ai-programs",
    "knowledge-systems-critique-and-the-first-ai-winter",
    "statistical-learning-and-network-revival",
    "deep-learning-breakthroughs",
    "foundation-models-and-generative-ai",
  ];

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/people-and-institutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reading-maps/intellectual-lineage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/embeddings-latent-space-and-llm-math`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const eraRoutes: MetadataRoute.Sitemap = erasSlugs.map((slug) => ({
    url: `${baseUrl}/eras/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...eraRoutes];
}
```

**Verify:**

```bash
npx tsc --noEmit
```

### 6. Create `app/robots.ts`

```ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

**Verify:**

```bash
npx tsc --noEmit
```

### 7. Simplify `OpeningSection` props

Refactor `OpeningSection` to accept a single typed object instead of 10
individual props.

In `opening-section.tsx`:

```tsx
// Before
export function OpeningSection({
  openingTypeScale,
  openingEyebrow,
  heroTitleLines,
  openingDeck,
  openingSignals,
  heroFeature,
  heroSupports,
  publicAiCard,
  primaryRoutes,
  startCard,
}: { … 10 individual type declarations … }) {

// After
import type { HomePageContent } from "@/lib/content/homepage";
import type { CSSProperties } from "react";

type OpeningSectionProps = HomePageContent["opening"] & {
  openingTypeScale: CSSProperties;
};

export function OpeningSection({
  eyebrow,
  titleLines,
  deck,
  signals,
  heroFeature,
  heroSupports,
  publicAiCard,
  primaryRoutes,
  startCard,
  openingTypeScale,
}: OpeningSectionProps) {
```

Update the JSX body to use the shorter field names (e.g.,
`openingEyebrow` → `eyebrow`, `heroTitleLines` → `titleLines`,
`openingDeck` → `deck`, `openingSignals` → `signals`).

In `editorial-home.tsx`, simplify the call site:

```tsx
// Before
<OpeningSection
  openingTypeScale={openingTypeScale}
  openingEyebrow={homepage.opening.eyebrow}
  heroTitleLines={homepage.opening.titleLines}
  openingDeck={homepage.opening.deck}
  openingSignals={homepage.opening.signals}
  heroFeature={homepage.opening.heroFeature}
  heroSupports={homepage.opening.heroSupports}
  publicAiCard={homepage.opening.publicAiCard}
  primaryRoutes={homepage.opening.primaryRoutes}
  startCard={homepage.opening.startCard}
/>

// After
<OpeningSection
  {...homepage.opening}
  openingTypeScale={openingTypeScale}
/>
```

**Verify:**

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
```

### 8. Add sitemap test

Create `tests/app/sitemap.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("includes all known routes", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    expect(urls).toContain(expect.stringMatching(/\/$/));
    expect(urls).toContain(expect.stringContaining("/people-and-institutions"));
    expect(urls).toContain(
      expect.stringContaining("/eras/precursors-to-machine-intelligence")
    );
    expect(urls).toContain(
      expect.stringContaining("/eras/foundation-models-and-generative-ai")
    );
    expect(entries.length).toBeGreaterThanOrEqual(11);
  });
});
```

**Verify:**

```bash
npx vitest run tests/app/sitemap.test.ts
npx tsc --noEmit
npm run build
```

## Completion Checklist

- [ ] `app/eras/layout.tsx` created — wraps all era pages with `<main>` shell
- [ ] All 7 era pages updated — `<main>` wrapper removed
- [ ] `app/error.tsx` created — root error boundary
- [ ] `app/eras/error.tsx` created — era-specific error boundary
- [ ] `app/sitemap.ts` created — lists all 11+ routes
- [ ] `app/robots.ts` created — allows all, sitemap reference
- [ ] `OpeningSection` refactored — accepts typed object instead of 10 props
- [ ] `editorial-home.tsx` updated — uses spread for opening props
- [ ] `tests/app/sitemap.test.ts` created and passing
- [ ] All existing tests pass without modification
- [ ] Production build succeeds

## QA Deviations

- **Sitemap test assertions** — Plan used `expect.stringMatching()` inside `toContain()` which doesn't work with Vitest's array matching for primitives. Switched to `.some()` boolean assertions. Functionally equivalent.
- **Era page indentation** — After removing `<main>` wrappers, the content indentation is 2 spaces deeper than necessary (was indented for the removed wrapper). Cosmetic only; no functional impact.
