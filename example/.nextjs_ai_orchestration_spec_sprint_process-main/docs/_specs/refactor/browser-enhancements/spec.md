# Browser-Specific Enhancements — Spec

> **Status:** Complete

## Problem Statement

The homepage passed A− quality after the browser-polish work package. All
repeating patterns are DRY, headings use `text-wrap: balance`, reduced-motion
is respected, and keyboard focus rings exist globally.

What's missing is the next layer: **browser-specific progressive enhancements**
that take advantage of modern CSS capabilities. The site currently treats every
browser and device identically — no touch/hover awareness, no safe-area
handling, no typography fine-tuning, no scroll-driven animations, no container
queries, and no `@supports` gating for any feature.

### Evidence

| Gap                                                      | Impact                                                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| No `@media (hover: hover)` / `(pointer: coarse)`         | Hover effects stick on mobile; users see translate/scale on first tap then again on second |
| No `-webkit-tap-highlight-color`                         | Default blue tap flash on every link in Safari/Chrome mobile                               |
| No `touch-action: pan-x` on era carousel                 | Vertical scroll interference during horizontal swipes                                      |
| No `overscroll-behavior` on carousel or dialog           | Mac trackpad back-swipe triggered from carousel; scroll chains behind dialog               |
| No `env(safe-area-inset-*)`                              | Content clips behind notch/Dynamic Island/home bar on modern iPhones                       |
| No `font-optical-sizing: auto`                           | Bodoni Moda hairlines vanish at small sizes; variable font axes unused                     |
| No `hanging-punctuation`                                 | Pull quotes and headings not optically aligned at left edge                                |
| No `text-underline-offset` / `text-decoration-thickness` | Link underlines use browser defaults (thick, tight)                                        |
| No `:has()` usage                                        | No sibling-aware hover effects (e.g. dim other cards when one is hovered)                  |
| No scroll-driven animations                              | Below-fold sections appear instantly with no entrance reveal                               |
| No `@starting-style`                                     | Dialog and tooltip snap into view with no CSS entrance animation                           |
| No `@container` queries                                  | Cards use viewport breakpoints even when card width varies independently                   |
| No `subgrid`                                             | Footer columns and route-link rows don't align across siblings                             |
| No `oklch` color-space gradients                         | Warm-to-dark gradients band in sRGB; mid-tones go muddy                                    |
| No `prefers-contrast: more`                              | Low-opacity ink tokens (0.70) are not boosted for high-contrast users                      |
| No `@supports` gating anywhere                           | Backdrop-filter, content-visibility used without safety checks                             |
| No `-webkit-backdrop-filter` fallback                    | Existing `backdrop-blur-sm` invisible on older Safari                                      |

### What Is Not Broken

- All DRY consolidation from browser-polish (gradient tokens, `hoverLift`,
  `HomeEyebrow`, scrollbar tokens)
- `prefers-reduced-motion`, `text-wrap: balance/pretty`, `scrollbar-gutter`,
  `content-visibility`, focus-visible rings
- Server component architecture, FocalImage pipeline, token system
- Semantic HTML, heading hierarchy, section IDs, alt text

---

## Design Goals

1. **Device-aware interaction.** Hover effects only fire on devices with a
   pointing device (`hover: hover`). Touch devices get clean tap feedback
   instead. Carousels respect touch gestures. Safe areas respected on
   all modern mobile hardware.

2. **Typographic refinement.** Bodoni Moda uses optical sizing. Pull quotes
   and headings use hanging punctuation. Link underlines are refined with
   offset and thickness controls.

3. **Visual depth through progressive enhancement.** Scroll-driven entrance
   animations, `:has()`-powered card spotlighting, `@starting-style` modal
   reveals, and oklch gradients — all gated behind `@supports` so
   non-supporting browsers see the current (already good) experience.

4. **Intrinsic layout.** Container queries let cards adapt to their actual
   width, not the viewport. Subgrid aligns sibling content across grid
   columns. Both are gated with `@supports`.

5. **Accessibility beyond the baseline.** `prefers-contrast: more` boosts
   low-opacity tokens. `overscroll-behavior` prevents scroll chaining.
   `@supports` gating on backdrop-filter provides solid fallbacks.

---

## Architecture

### Progressive Enhancement Strategy

Every feature uses one of three gating mechanisms:

```css
/* CSS-level gating */
@supports (property: value) { ... }

/* Media query gating */
@media (hover: hover) and (pointer: fine) { ... }
@media (pointer: coarse) { ... }
@media (prefers-contrast: more) { ... }

/* Ungated at-rules (browser ignores unknown at-rules) */
@starting-style { ... }
```

> **Why isn't `@starting-style` wrapped in `@supports`?** CSS `@supports`
> can only test _properties_ (`@supports (prop: val)`) or _selectors_
> (`@supports selector(…)`). There is no valid test for at-rule support.
> `@starting-style` is safe ungated because non-supporting browsers simply
> ignore the unknown at-rule — elements appear instantly, which is the
> current behavior.

**No feature is required.** Every enhancement degrades to the existing
appearance. The base experience (what shipped after browser-polish) is the
floor, not the ceiling.

### File Scope

| File                                                | Role                                                                         |
| --------------------------------------------------- | ---------------------------------------------------------------------------- |
| `app/globals.css`                                   | All new media queries, `@supports` blocks, utility classes, typography rules |
| `components/content/home/home-design-system.tsx`    | hoverLift token gets `@media` logic (via CSS class), container query setup   |
| `components/content/home/chronology-section.tsx`    | `touch-action`, overscroll, `:has()` spotlight, scroll-driven progress       |
| `components/content/home/opening-section.tsx`       | Hero image `group-hover:scale` guarded by hover media query                  |
| `components/content/home/reading-model-section.tsx` | Container queries on companion route cards                                   |
| `components/content/home/editorial-home.tsx`        | Scroll-driven section reveals on content-auto wrappers                       |
| `components/content/home/scenes-section.tsx`        | Container queries on mosaic entries                                          |
| `components/ui/dialog.tsx`                          | `@starting-style` entrance, `overscroll-behavior: contain`                   |
| `components/ui/tooltip.tsx`                         | `@starting-style` entrance                                                   |
| `components/site/site-header.tsx`                   | Safe-area padding, hover guarding                                            |
| `components/site/site-footer.tsx`                   | Subgrid alignment, safe-area bottom padding                                  |

### Gradient Token Updates

Existing gradient tokens in `:root` will get oklch variants gated behind
`@supports`:

```css
@supports (background: linear-gradient(in oklch, red, blue)) {
  :root {
    --gradient-dark-reading: linear-gradient(
      in oklch,
      oklch(0.28 0.06 30),
      oklch(0.12 0.02 30)
    );
    /* etc. */
  }
}
```

### Container Query Setup

Components that need container queries will get a `container-type: inline-size`
wrapper. The Tailwind `@container` variant handles the responsive rules.

---

## Sprint Plan

| Sprint | Name           | Scope                                                                                                                        |
| ------ | -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 0      | Mobile & Touch | `hover:hover`, `pointer:coarse`, tap highlight, touch-action, overscroll-behavior, safe-area insets, nav-link hover guard    |
| 1      | Typography     | font-optical-sizing, hanging-punctuation, text-decoration refinement, prefers-contrast                                       |
| 2      | Visual Effects | `:has()` spotlight, scroll-driven entrance animations, scroll-driven carousel progress, `@starting-style` for dialog/tooltip |
| 3      | Layout & Color | Container queries, subgrid, oklch gradients, `@supports` gating audit                                                        |
| 4      | QA Pass        | Grep audits, device testing checklist, build verification                                                                    |

---

## Completion Criteria

- `npx tsc --noEmit` clean
- `npx vitest run` — all tests pass
- `npm run build` — all pages built
- Every new feature wrapped in `@supports` or media query
- Zero visual regression on desktop Chrome (the baseline browser)
- Manual testing checklist for Safari, mobile Safari, Firefox
