# Sprint 2 — className Consistency

## Header

- **Goal:** Eliminate all template-literal className construction across the
  codebase and standardise on `cn()` for every conditional or dynamic
  className. Ensure `cn()` is the only pattern for className composition.
- **Spec sections:** Design Goal 3
- **Prerequisite:** Sprint 1 committed (section file split)
- **Expected test count:** Existing count + 0 new (pure refactor)

## Available Assets

| Asset                                            | Signature / Location                                                                                              | How this sprint uses it                                                          |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `lib/utils.ts`                                   | `export function cn(...inputs: ClassValue[])` — wraps `clsx` + `twMerge`                                          | Single className composition utility                                             |
| `components/content/narrative-card.tsx`          | 1 template-literal className: ``className={`content-card content-card--story narrative-card${…}`}``               | Convert to `cn()`                                                                |
| `components/content/chapter/chapter-section.tsx` | 1 template-literal: ``className={`exemplar-section chapter-section${prose ? " chapter-section--prose" : ""}`}``   | Convert to `cn()`                                                                |
| `components/content/chapter/editorial-aside.tsx` | 1 template-literal: ``className={`editorial-aside callout-panel callout-panel--aside editorial-aside--${tone}`}`` | Convert to `cn()`                                                                |
| `components/site/site-footer.tsx`                | 6 template-literal className constructions in `FooterLinkList` and footer section layout                          | Convert to `cn()`                                                                |
| New section files from Sprint 1                  | `opening-section.tsx`, `chronology-section.tsx`, `reading-model-section.tsx`, `scenes-section.tsx`                | Audit for any remaining template-literal patterns carried over from the monolith |

## Tasks

### 1. Convert `narrative-card.tsx`

Replace the template-literal className on the root element with `cn()`:

```tsx
// Before
className={`content-card content-card--story narrative-card${imageUrl ? "" : " narrative-card--textual"}${effectiveImageFit === "contain" ? " narrative-card--contain" : ""}${className ? ` ${className}` : ""}`}

// After
className={cn(
  "content-card content-card--story narrative-card",
  !imageUrl && "narrative-card--textual",
  effectiveImageFit === "contain" && "narrative-card--contain",
  className
)}
```

Add `import { cn } from "@/lib/utils";` if not already present.

**Verify:**

```bash
npx tsc --noEmit
```

### 2. Convert `chapter-section.tsx`

```tsx
// Before
className={`exemplar-section chapter-section${prose ? " chapter-section--prose" : ""}`}

// After
className={cn("exemplar-section chapter-section", prose && "chapter-section--prose")}
```

Add `import { cn } from "@/lib/utils";`.

**Verify:**

```bash
npx tsc --noEmit
```

### 3. Convert `editorial-aside.tsx`

```tsx
// Before
className={`editorial-aside callout-panel callout-panel--aside editorial-aside--${tone}`}

// After
className={cn("editorial-aside callout-panel callout-panel--aside", `editorial-aside--${tone}`)}
```

Add `import { cn } from "@/lib/utils";`.

Note: the `tone` interpolation remains as a template fragment inside `cn()`
because the value is a dynamic variant suffix, not a conditional.

**Verify:**

```bash
npx tsc --noEmit
```

### 4. Convert `site-footer.tsx`

The footer has 6 template-literal classNames. Convert each to `cn()`:

Key patterns to convert:

```tsx
// Example: FooterLinkList ruled variant
// Before
className={
  variant === "ruled"
    ? `py-3 text-[0.98rem] … ${index === 0 ? "first:border-t-0 first:pt-0" : ""} ${index > 0 ? `border-t ${footerBorderClassName}` : ""}`
    : footerLinkClassName
}

// After
className={cn(
  variant === "ruled"
    ? [
        "py-3 text-[0.98rem] font-semibold leading-6 text-(--ink-84) no-underline hover:text-(--accent-strong)",
        index === 0 && "first:border-t-0 first:pt-0",
        index > 0 && ["border-t", footerBorderClassName],
      ]
    : footerLinkClassName
)}
```

Apply the same conversion to every template-literal className in the footer
layout sections (the aside, the three-column nav grid, etc.).

Ensure `cn` is imported (footer already imports from the home design system;
add the utils import if missing).

**Verify:**

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
```

### 5. Audit Sprint 1 section files

Read each of the four new section files from Sprint 1 and confirm that no
template-literal classNames were carried over from the monolith. If any
exist, convert them to `cn()`.

Also verify that every `cn()` usage is idiomatic:

- Boolean conditions use short-circuit: `condition && "class"`
- No unnecessary empty strings: use `undefined` or omit rather than `""`
- Array nesting is flat where possible

**Verify:**

```bash
npx tsc --noEmit
```

### 6. Sweep — confirm zero template-literal classNames remain

```bash
grep -rn 'className={`' \
  --include='*.tsx' \
  components/ app/
```

Expected output: zero lines.

Also confirm that every file that uses conditional classNames imports `cn`:

```bash
grep -rln 'className={cn(' --include='*.tsx' components/ app/ | head -20
```

**Verify:**

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
npm run build
```

## Completion Checklist

- [ ] `narrative-card.tsx` uses `cn()` for all className composition
- [ ] `chapter-section.tsx` uses `cn()` for all className composition
- [ ] `editorial-aside.tsx` uses `cn()` for all className composition
- [ ] `site-footer.tsx` uses `cn()` for all 6 formerly-templated classNames
- [ ] All Sprint 1 section files audited — no template-literal classNames
- [ ] Grep sweep confirms zero `className={\`` in `components/`and`app/`
- [ ] All existing tests pass without modification
- [ ] Production build succeeds

## QA Deviations

- **Extra files converted** — Sprint spec listed 4 files (narrative-card, chapter-section, editorial-aside, site-footer). Implementation also converted `guide-callout.tsx`, `home-sequence-chart.tsx`, `app/layout.tsx`, and `app/people-and-institutions/page.tsx` which were discovered during the sweep. No regressions.
