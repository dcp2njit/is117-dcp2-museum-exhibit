# Code Quality Refactor — Spec

> **Status:** Complete

## Problem Statement

An architecture audit of the codebase (March 2026) revealed systemic DRY
violations, inconsistent React patterns, and underused Next.js features. The
issues are concentrated in the homepage presentation layer and radiate into
the UI primitives and chapter components.

### Evidence

| Issue                                                                   | Metric                                            |
| ----------------------------------------------------------------------- | ------------------------------------------------- |
| Hardcoded `rgba(43,31,22,…)` values                                     | 43 occurrences across `.tsx`, `.ts`, `.css`       |
| Hardcoded `rgba(255,252,247,…)` surface values                          | 12 occurrences                                    |
| Hardcoded `rgba(58,44,31,…)` muted-text values                          | 6 occurrences                                     |
| `homeTokens.border` / `homeTokens.softBorder` exist but bypassed inline | ~37 of 43 could use the token                     |
| `editorial-home-sections.tsx` monolith                                  | 507 lines, 4 exports + 9 private helpers          |
| Non-standardised border radii                                           | 6 arbitrary values (`1.2rem`–`1.85rem`)           |
| `cn()` imported but not used consistently                               | 14 / 100 className sites use `cn()`               |
| String-template className construction                                  | 9 files use ``className={`…`}`` instead of `cn()` |
| No `loading.tsx` or `error.tsx` anywhere                                | 0 error boundaries                                |
| No shared `app/eras/layout.tsx`                                         | 7 era pages duplicate outer wrapper               |
| No `sitemap.ts` or `robots.ts`                                          | Missing SEO basics                                |
| `OpeningSection` prop count                                             | 10 individual props instead of typed object       |

### What Is Not Broken

The audit also confirmed strong fundamentals:

- 100 % server components for content (only 4 Radix wrappers are client).
- `React.cache` on `getHomePageContent()` — correct deduplication.
- Static metadata exported from every page.
- Font and image optimisation properly configured.
- Semantic HTML and accessibility throughout.
- Barrel exports, CVA variant patterns, and `asChild` Slot composition.
- Markdown-driven data pipeline with typed validation.

The refactor preserves all of these. No data model, routing, or content
changes are in scope.

---

## Design Goals

1. **Single source for every colour.** Every RGBA/hex value used more than
   once lives in a token — either a CSS custom property or a `homeTokens`
   entry. Components reference the token, never the raw value.
2. **One component per file for exported section components.** Each homepage
   section (`OpeningSection`, `ChronologySection`, `ReadingModelSection`,
   `ScenesSection`) becomes its own file. Private helpers stay alongside the
   section that uses them.
3. **Consistent className composition.** All dynamic or conditional className
   construction uses `cn()` from `@/lib/utils`. No raw template-literal
   className strings.
4. **Standardised radius scale.** A small set of named radius tokens replaces
   6 ad-hoc values.
5. **Next.js App Router completeness.** Add `error.tsx`, shared era layout,
   and `sitemap.ts`/`robots.ts`.
6. **Zero visual regression.** Every sprint ends with the same rendered
   output. The refactor is purely structural; no design changes.

---

## Architecture

### Token System (Sprint 0)

Extend `homeTokens` in `components/content/home/home-design-system.tsx` and
CSS custom properties in `app/globals.css`:

```
:root {
  /* existing */
  --surface-border: rgba(68,44,26,0.12);

  /* new colour tokens */
  --ink-12: rgba(43,31,22,0.12);
  --ink-10: rgba(43,31,22,0.1);
  --ink-18: rgba(43,31,22,0.18);
  --ink-72: rgba(43,31,22,0.72);
  --ink-74: rgba(43,31,22,0.74);
  --ink-78: rgba(58,44,31,0.78);
  --ink-84: rgba(43,31,22,0.84);
  --ink-90: rgba(43,31,22,0.9);
  --surface-warm: rgba(255,252,247,0.92);
  --surface-warm-strong: rgba(255,252,247,0.98);
  --surface-warm-light: rgba(255,252,247,0.7);
}
```

Corresponding `homeTokens` entries consume these via Tailwind arbitrary-value
syntax: `border-(--ink-12)`, `text-(--ink-74)`, etc.

A radius scale in `homeTokens`:

```ts
radius: {
  sm: "rounded-[1.2rem]",   // compact cards
  md: "rounded-[1.45rem]",  // mid-size cards
  lg: "rounded-2xl",        // standard cards, panels
  xl: "rounded-[1.75rem]",  // UI primitives (Card, Dialog)
}
```

### File Split (Sprint 1)

```
components/content/home/
├── editorial-home.tsx            ← orchestrator (unchanged)
├── home-design-system.tsx        ← tokens + shared UI helpers
├── opening-section.tsx           ← OpeningSection + its private helpers
├── chronology-section.tsx        ← ChronologySection + helpers
├── reading-model-section.tsx     ← ReadingModelSection + helpers
├── scenes-section.tsx            ← ScenesSection + helpers + mosaicVariantStyles
└── home-shared.tsx               ← HomeSectionSplit, HomePanelSplit (used by multiple sections)
```

`editorial-home-sections.tsx` is deleted once all four section files are
verified.

### className Consistency (Sprint 2)

Every file that currently uses ``className={`…${condition}…`}`` is
converted to use `cn()`. Affected files:

- `components/content/narrative-card.tsx`
- `components/content/chapter/chapter-section.tsx`
- `components/content/chapter/editorial-aside.tsx`
- `components/site/site-footer.tsx`
- All four new section files from Sprint 1

### Next.js Patterns (Sprint 3)

- `app/eras/layout.tsx` — shared era wrapper
- `app/error.tsx` — root error boundary
- `app/eras/error.tsx` — era-specific error boundary
- `app/sitemap.ts` — static sitemap
- `app/robots.ts` — robots config
- Simplify `OpeningSection` props from 10 individual values to a typed object

---

## Testing Strategy

Every sprint's verify step runs:

```bash
npx vitest run tests/app/homepage.test.tsx    # unit tests
npm run test:browser:homepage                  # Playwright breakpoint tests
npx tsc --noEmit                              # type-check
npm run build                                  # production build
```

Visual regression is confirmed by verifying that existing Playwright tests
pass without modification. No new tests are added except for:

- `tests/app/sitemap.test.ts` — confirms sitemap output (Sprint 3)
- Error boundary smoke tests if the existing test harness supports it

---

## Sprint Plan

| Sprint | Name                  | Goal                                                               |
| ------ | --------------------- | ------------------------------------------------------------------ |
| 0      | Token consolidation   | Extract all hardcoded colour and radius values into tokens         |
| 1      | Section file split    | Break 507-line monolith into four section files + shared helpers   |
| 2      | className consistency | Replace all template-literal classNames with `cn()`                |
| 3      | Next.js patterns      | Shared era layout, error boundaries, sitemap, robots, prop cleanup |
| 4      | QA pass               | Full audit of Sprints 0–3 against this spec                        |

---

## Future Considerations (Out of Scope)

- Converting chapter-component BEM classes to Tailwind (different styling
  strategy boundary — needs its own spec).
- Adding `generateMetadata()` to era pages (useful but requires data model
  change to centralise era metadata).
- Adding `loading.tsx` streaming boundaries (not beneficial for static export).
- Memoisation with `React.memo()` (no client components render these sections,
  so memo has no effect in the server component tree).
