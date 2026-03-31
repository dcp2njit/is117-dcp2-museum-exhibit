# Sprint 3 — Layout & Color

## Header

- **Goal:** Introduce container queries for card-level responsive design,
  subgrid for cross-row alignment in multi-column layouts, oklch gradients
  for smoother color transitions, and `@supports` gating for the existing
  `backdrop-filter` usage.
- **Spec sections:** Design Goals 4
- **Prerequisite:** Sprint 2 committed (visual effects)
- **Expected test count:** Existing count + 0 new (CSS-only, gated behind
  `@supports`)

## Available Assets

| Asset                       | Location      | Current State                                                                                    |
| --------------------------- | ------------- | ------------------------------------------------------------------------------------------------ | --- | -------------------- | ------- | -------------------------------------------------------------------------------- | --- | ----------------- | -------- | ------------------------------------------------------------------------------------- |
| `app/globals.css`           | Full CSS file | 6 gradient tokens using `linear-gradient()` with sRGB hex colors. No `@container`, no `subgrid`. |
| `chronology-section.tsx`    | L17–L30       | `ChronologyCard` — fixed sizing, no container containment.                                       |
| `reading-model-section.tsx` | L17–L25       | `CompanionRouteLink` — prose sizing, no container query.                                         |
| `home-design-system.tsx`    | L44–L65       | `MosaicEntry` variants use fixed text sizes based on variant prop.                               |     | `scenes-section.tsx` | Various | Mosaic grid using `MosaicEntry` — cells vary in width. No container containment. |     | `site-footer.tsx` | L69–L129 | 3-column grid layout with `grid-cols-3`. Children have independent padding/alignment. |
| `dialog.tsx`                | L18           | `DialogOverlay` uses `backdrop-blur-sm` — no `@supports` gate.                                   |

## Tasks

### 1. Container queries on ChronologyCard

In `chronology-section.tsx`, add `@container` containment to the era card
wrapper:

```tsx
// On the scrolling container or an inner wrapper per card:
className = "@container/era-card";
```

In `app/globals.css`:

```css
@container era-card (min-width: 18rem) {
  /* Increase type scale when the card has room */
}

@container era-card (max-width: 14rem) {
  /* Tighten padding/spacing on narrow cards */
}
```

**Why:** Container queries let each card adapt independently to its own
width, rather than relying on the viewport width. This is more robust for
the horizontally-scrolling carousel where card width varies with viewport
size.

**Browser support:** Chrome 105+, Safari 16+, Firefox 110+. Very wide
support — can be used directly without `@supports`.

### 2. Container query on CompanionRouteLink

In `reading-model-section.tsx`, add `@container` containment to the reading
companion card wrapper:

```tsx
className = "@container/reading-card";
```

Add CSS to adjust layout between narrow and wide states.

**Sizing tokens to adjust:** font-size, gap, padding.

### 3. Container query on MosaicEntry

In `components/content/home/scenes-section.tsx`, the mosaic entries use
fixed text sizes based on the `variant` prop in `MosaicEntry`. Add
`@container` containment to each mosaic cell wrapper:

```tsx
className = "@container/mosaic-cell";
```

In `app/globals.css`:

```css
@container mosaic-cell (min-width: 24rem) {
  /* Increase heading/body scale for wide mosaic cells */
}
@container mosaic-cell (max-width: 16rem) {
  /* Reduce padding and font-size for narrow cells */
}
```

**Why:** The mosaic grid has cells of varying widths (1×1, 2×1, etc.).
Container queries let each cell adapt its typography to its actual size,
rather than using the variant prop for fixed sizing.

**Browser support:** Chrome 105+, Safari 16+, Firefox 110+.

### 4. Subgrid for footer column alignment

In `site-footer.tsx`, the 3-column grid has children with independent row
heights. Subgrid enables cross-column row alignment.

```css
@supports (grid-template-rows: subgrid) {
  .footer-grid > * {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
  }
}
```

**Prerequisite:** Add a `footer-grid` class (or use an appropriate selector)
to the footer grid container in `site-footer.tsx`.

**Why:** Subgrid lets column children share row tracks, so headings and link
lists align across columns even when content lengths differ.

**Browser support:** Chrome 117+, Safari 16+, Firefox 71+. Gate with
`@supports` for graceful degradation — non-supporting browsers keep the
current independent-height layout.

### 5. oklch gradient tokens

Replace the 6 sRGB gradient tokens in `app/globals.css` with oklch
equivalents, gated behind `@supports`:

```css
@supports (background: linear-gradient(in oklch, red, blue)) {
  :root {
    --gradient-warm-panel: linear-gradient(
      145deg,
      oklch(98% 0.01 75),
      oklch(96% 0.015 55)
    );
    --gradient-warm-card: linear-gradient(
      145deg,
      oklch(97% 0.012 70),
      oklch(95% 0.018 50)
    );
    /* …remaining four gradients converted to oklch */
  }
}
```

**Why:** oklch gradients produce perceptually uniform transitions without
the muddy gray midpoints common in sRGB linear-gradient. The warm and dark
gradients in the design system will appear smoother and more vibrant.

**How to convert:** Use the existing hex values as a reference and convert
to oklch using a color tool. The key properties are:

- L (lightness): 0–100%
- C (chroma): 0–0.4 (higher = more saturated)
- H (hue angle): 0–360°

**Browser support:** Chrome 111+, Safari 15.4+, Firefox 113+. Gate with
`@supports` — non-supporting browsers use the existing hex-based gradients.

### 6. `@supports` gate on backdrop-filter

`dialog.tsx` L18 uses `backdrop-blur-sm`, which Tailwind expands to
`backdrop-filter: blur(4px)`. Gate this behind `@supports`:

In `app/globals.css`:

```css
@supports not (backdrop-filter: blur(4px)) {
  [data-slot="dialog-overlay"] {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
```

**Why:** Provides a solid fallback for the rare browser that doesn't support
backdrop-filter. The overlay gets a darker background instead of the blur
effect.

**Browser support:** `backdrop-filter` is supported in Chrome 76+, Safari 9+,
Firefox 103+. This is mostly a robustness measure for older clients.

**Implementation note:** Verify during implementation that Tailwind v4's
`backdrop-blur-sm` emits both `-webkit-backdrop-filter` and `backdrop-filter`.
If it does not, add the prefixed property manually in the same rule. Older
Safari versions (9–14) require the `-webkit-` prefix.

## Completion Checklist

- [ ] `@container/era-card` containment + responsive rules for ChronologyCard
- [ ] `@container/reading-card` containment + responsive rules for CompanionRouteLink
- [ ] `@container/mosaic-cell` containment + responsive rules for MosaicEntry
- [ ] `subgrid` alignment in footer with `@supports` gate
- [ ] oklch gradient token overrides with `@supports` gate (gradient interpolation test)
- [ ] `@supports` fallback for `backdrop-filter` on dialog overlay
- [ ] Verify `-webkit-backdrop-filter` prefix emitted by Tailwind
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run build` succeeds
- [ ] Visual check: resize chronology cards → layout adapts fluidly
- [ ] Visual check: compare gradients in Chrome DevTools oklch mode
- [ ] Visual check: footer columns align across rows
