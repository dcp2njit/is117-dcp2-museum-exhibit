# Browser Polish & DRY Cleanup — Spec

> **Status:** Complete

## Problem Statement

A second audit of the homepage (March 2026, post-refactor) confirmed the
codebase reached A− quality. The remaining gaps fall into three buckets:

1. **DRY violations** — eyebrow styling duplicated inline instead of using
   `HomeEyebrow`, repeated hover patterns, gradient strings, and raw RGBA in
   the scrollbar utility class.
2. **Missing browser features** — no `prefers-reduced-motion` support, no
   `text-wrap: balance` on headings globally, no `scrollbar-gutter: stable`,
   no `content-visibility: auto` for below-fold sections.
3. **Accessibility gaps** — navigation links (header, footer, cards) lack
   `focus-visible` keyboard rings even though the `Button` component has them.

### Evidence

| Issue                                                     | Metric                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| Inline eyebrow patterns bypassing `HomeEyebrow`           | 6 sites across 4 files                                       |
| Repeated `hover:-translate-y-0.5 hover:border-(--ink-18)` | 4+ card types                                                |
| Hardcoded gradients (not tokenized)                       | 5 unique gradient strings, 7 uses                            |
| `.scrollbar-thin` uses raw `rgba()` instead of tokens     | 2 occurrences                                                |
| `text-balance` applied ad-hoc per heading                 | ~10 manual sites; no global rule                             |
| `prefers-reduced-motion` support                          | 0 — all animations unrestricted                              |
| `scrollbar-gutter: stable`                                | absent                                                       |
| `content-visibility: auto` on below-fold sections         | absent                                                       |
| Nav links without `focus-visible` ring                    | header (3 eyebrows + 2 navs), footer (all links), card links |
| `text-wrap: pretty` on `<p>`                              | ✓ already global                                             |
| `text-wrap: balance` on headings                          | ✗ only per-element, inconsistent                             |

### What Is Not Broken

These should not be touched:

- Server component architecture (zero unnecessary `"use client"`)
- `FocalImage` pipeline with priority, sizes, dominant-color placeholders
- CVA variant patterns, `cn()` usage, Radix `asChild` composition
- Semantic HTML, heading hierarchy, section IDs, image alt text
- Token system (CSS custom properties + `homeTokens` object)
- `sitemap.ts`, `robots.ts`, error boundaries, shared era layout

---

## Design Goals

1. **Single source for every repeating pattern.** Inline eyebrow styling
   consolidated into `HomeEyebrow`. Hover card pattern tokenized. Gradients
   tokenized as CSS custom properties. Scrollbar class uses existing tokens.

2. **Progressive enhancement with browser features.** `text-wrap: balance` on
   all headings, `prefers-reduced-motion` media query, `scrollbar-gutter`,
   and `content-visibility` are added as progressive enhancements — they
   improve experience in supporting browsers and do nothing in older ones.

3. **Keyboard navigation parity.** Every interactive element (links, buttons,
   cards) gets a visible `focus-visible` ring matching the existing accent
   colour ring used by `Button`.

4. **Zero visual regression.** All changes are structural or progressive
   enhancement. The rendered page looks identical in current browsers.

---

## Architecture

### Gradient Tokens (globals.css)

New CSS custom properties for repeated gradient values:

```css
:root {
  /* gradient tokens */
  --gradient-warm-panel: linear-gradient(
    180deg,
    rgba(251, 246, 240, 0.98),
    rgba(244, 236, 228, 0.94)
  );
  --gradient-warm-card: linear-gradient(
    180deg,
    var(--surface-warm-98),
    rgba(248, 242, 236, 0.92)
  );
  --gradient-warm-feature: linear-gradient(
    180deg,
    var(--surface-warm-98),
    rgba(247, 241, 234, 0.9)
  );
  --gradient-warm-support: linear-gradient(
    180deg,
    var(--surface-warm-92),
    rgba(248, 243, 237, 0.82)
  );
  --gradient-dark-reading: linear-gradient(
    180deg,
    rgba(69, 31, 24, 0.99),
    rgba(28, 19, 15, 0.99)
  );
  --gradient-image-overlay: linear-gradient(
    180deg,
    transparent,
    rgba(17, 12, 8, 0.88)
  );
}
```

### Hover Token (homeTokens)

```ts
hoverLift: "transition hover:-translate-y-0.5 hover:border-(--ink-18)",
```

### Eyebrow Consolidation

Replace all 6 inline `font-semibold uppercase tracking-[…]` eyebrow patterns
with `<HomeEyebrow>` (or `homeEyebrowStyles()` where a `<p>` wrapper is
already present and only the class is needed).

Sites:

- `opening-section.tsx` L112 — opening eyebrow (uses `style` prop for font size)
- `opening-section.tsx` L142 — public AI card eyebrow
- `reading-model-section.tsx` L52 — section heading eyebrow
- `site-footer.tsx` L98 — return signal eyebrow
- `site-header.tsx` L12, L26, L44 — "Story-led reference", "Browse", "Start with"

### Focus Ring System (globals.css)

A reusable focus ring applied to all `<a>` elements via `@layer base`:

```css
@layer base {
  a {
    color: inherit;
  }
  a:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--background),
      0 0 0 4px var(--accent);
    border-radius: 0.25rem;
  }
}
```

### Browser Feature Layer (globals.css)

```css
/* Balance all headings */
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

/* Respect motion preferences */
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

/* Reserve scrollbar space to prevent layout shift */
html {
  scrollbar-gutter: stable;
}

/* Skip rendering below-fold sections until scrolled */
section:nth-of-type(n + 2) {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}
```

---

## Testing Strategy

| Category                       | Count    | Description                                  |
| ------------------------------ | -------- | -------------------------------------------- |
| Existing vitest (homepage)     | 1        | Confirms section rendering — must stay green |
| Existing Playwright (homepage) | ~6       | Breakpoint + layout tests — must stay green  |
| Production build               | 16 pages | All must build without error                 |
| Type check                     | 0 errors | `npx tsc --noEmit` clean                     |

No new test files. All changes are either CSS-only or mechanical DRY
consolidation that the existing test suite covers.

---

## Sprint Plan

| Sprint | Name                  | Goal                                                                                                      |
| ------ | --------------------- | --------------------------------------------------------------------------------------------------------- |
| 0      | DRY Consolidation     | Tokenize gradients, consolidate inline eyebrows to `HomeEyebrow`, extract hover token, fix scrollbar RGBA |
| 1      | Browser CSS Features  | Add `text-wrap: balance`, `prefers-reduced-motion`, `scrollbar-gutter`, `content-visibility`              |
| 2      | Accessibility & Focus | Add `focus-visible` rings to all interactive elements; audit keyboard navigation                          |
| 3      | QA Pass               | Full audit against all 4 design goals; document deviations                                                |

---

## Future Considerations (Out of Scope)

- **`color-mix()` token simplification** — Could replace ~27 RGBA variables
  with 3 base colours + `color-mix()`. Deferred until Safari 16.4+ share
  exceeds 90%.
- **`light-dark()` for dark mode** — Structural prep for a dark theme.
  Deferred until dark mode is a product requirement.
- **View Transitions API** — Page-to-page morphing. Chrome-only today.
  Deferred until cross-browser.
- **`@container` queries** — Could replace media-query breakpoints for the
  chronology carousel. Deferred unless the component is reused at different
  widths.
- **CSS Subgrid** — Hero support grid could benefit. Deferred until support
  exceeds 85%.
