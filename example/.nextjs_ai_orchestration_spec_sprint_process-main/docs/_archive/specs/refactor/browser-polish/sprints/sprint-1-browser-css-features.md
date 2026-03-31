# Sprint 1 — Browser CSS Features

## Header

- **Goal:** Add four progressive-enhancement CSS features: global
  `text-wrap: balance` on headings, `prefers-reduced-motion` media query,
  `scrollbar-gutter: stable`, and `content-visibility: auto` on below-fold
  homepage sections.
- **Spec sections:** Design Goals 2, 4; Architecture → Browser Feature Layer
- **Prerequisite:** Sprint 0 committed (gradient tokens, DRY fixes)
- **Expected test count:** Existing count + 0 new

## Available Assets

| Asset                           | Location                | Current State                                                                                                          |
| ------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `app/globals.css`               | 1394 lines              | Has `p { text-wrap: pretty; }` at L102. No `prefers-reduced-motion`. No `scrollbar-gutter`. No `content-visibility`.   |
| `editorial-home.tsx`            | 57 lines                | Renders `<main>` with 4 child sections: `OpeningSection`, `ChronologySection`, `ReadingModelSection`, `ScenesSection`. |
| `components/content/home/*.tsx` | All section files       | `text-balance` applied per-element on ~10 headings manually. With global rule, these can be removed.                   |
| `.scrollbar-thin`               | `globals.css` L119–L135 | Uses `scroll-smooth` on carousel. Accordion uses `animate-accordion-down/up`.                                          |

## Tasks

### 1. Add `text-wrap: balance` to all headings

In `app/globals.css`, after the existing `p { text-wrap: pretty; }` rule,
add:

```css
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}
```

**Browser support:** Chrome 114+, Safari 17.4+, Firefox 121+. Falls back
gracefully to normal wrapping.

Then remove explicit `text-balance` from every heading element in:

| File                        | Elements with `text-balance`           |
| --------------------------- | -------------------------------------- |
| `chronology-section.tsx`    | L19: `<h3>`                            |
| `reading-model-section.tsx` | L23: `<h3>`, L53: `<h2>`, L76: `<h3>`  |
| `scenes-section.tsx`        | L24: `<h3>` mosaic entry               |
| `site-footer.tsx`           | L74: `<h2>`, L87: `<h3>`, L114: `<h3>` |
| `section-heading.tsx`       | L49: title element                     |

**Exception:** Keep `text-balance` on any element that is NOT a heading tag
(e.g. if it's a `<span>` or `<p>` styled as a heading). Only remove from
actual `<h1>`–`<h4>` elements since the global CSS rule covers them.

**Verify:** All headings still wrap identically (they already had
`text-balance` inline — this just moves the declaration to CSS).

### 2. Add `prefers-reduced-motion` media query

In `app/globals.css`, add after the `::selection` block:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is the standard "nuclear" reduced-motion reset. It disables:

- Accordion open/close animations (`animate-accordion-down/up`)
- Card hover scale transitions (`transition duration-500 group-hover:scale-[1.02]`)
- Hover lift transitions (`transition hover:-translate-y-0.5`)
- Smooth scrolling on the carousel (`scroll-smooth`)

**Browser support:** Universal. `prefers-reduced-motion` is supported in all
modern browsers including Safari 10.1+.

**Verify:** Turn on "Reduce motion" in macOS accessibility settings. Page
should be fully functional with no animations.

### 3. Add `scrollbar-gutter: stable`

In `app/globals.css`, add to the existing `html` rule:

```css
html {
  scrollbar-gutter: stable;
  /* existing background gradients … */
}
```

This reserves space for the vertical scrollbar so page content doesn't shift
when the scrollbar appears or disappears.

**Browser support:** Chrome 101+, Safari 17+, Firefox 110+. Ignored by
browsers that don't support it — zero risk.

**Verify:** Navigate between pages with/without scrollbar. No horizontal
content shift.

### 4. Add `content-visibility: auto` to below-fold sections

This optimisation lets the browser skip rendering sections that are off-screen
until the user scrolls to them.

In `app/globals.css`, add a utility class:

```css
.content-auto {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}
```

Then apply it in `editorial-home.tsx` to the below-fold sections. The
`ChronologySection`, `ReadingModelSection`, and `ScenesSection` wrappers
should get the class. `OpeningSection` is above the fold and should NOT
get it (it's the hero).

**Implementation in editorial-home.tsx:**

Wrap each below-fold section in a container `<div>` with the class, or apply
directly to the section's outermost element. The simplest approach: wrap in
the composition root:

```tsx
<div className="content-auto">
  <ChronologySection ... />
</div>
<div className="content-auto">
  <ReadingModelSection ... />
</div>
<div className="content-auto">
  <ScenesSection ... />
</div>
```

**Browser support:** Chrome 85+, Firefox 125+, Safari 18+. Browsers that
don't support it simply ignore the property — zero risk.

**Verify:** `npm run build` succeeds. Page scrolls normally. Run Lighthouse
and compare paint metrics if desired (optional).

## Completion Checklist

- [ ] `h1, h2, h3, h4 { text-wrap: balance; }` added to globals.css
- [ ] Per-element `text-balance` removed from all `<h1>`–`<h4>` headings
- [ ] `@media (prefers-reduced-motion: reduce)` block added
- [ ] `scrollbar-gutter: stable` added to `html` rule
- [ ] `.content-auto` utility class added to globals.css
- [ ] `content-auto` applied to ChronologySection, ReadingModelSection,
      ScenesSection wrappers in editorial-home.tsx
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run build` — 16 pages
- [ ] Reduced-motion tested (macOS: System Settings → Accessibility → Display → Reduce motion)

## QA Deviations

_(Populated during implementation)_
