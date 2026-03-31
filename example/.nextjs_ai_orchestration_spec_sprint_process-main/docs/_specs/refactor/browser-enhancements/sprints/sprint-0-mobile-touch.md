# Sprint 0 — Mobile & Touch

## Header

- **Goal:** Make interactions device-aware. Hover effects only fire on
  pointer devices. Touch devices get clean tap feedback. The era carousel
  respects touch gestures. Safe-area insets protect content on notched
  iPhones. Dialog scroll-chaining is prevented.
- **Spec sections:** Design Goals 1, 5
- **Prerequisite:** None (first sprint)
- **Expected test count:** Existing count + 0 new (CSS-only changes)

## Available Assets

| Asset                    | Location                   | Current State                                                                                   |
| ------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------- |
| `app/globals.css`        | ~185 lines of authored CSS | Has `prefers-reduced-motion`, no hover/pointer queries, no safe-area, no tap-highlight          |
| `home-design-system.tsx` | L17                        | `hoverLift: "transition hover:-translate-y-0.5 hover:border-(--ink-18)"` — fires on all devices |
| `chronology-section.tsx` | L84                        | Era carousel: `overflow-x-auto scroll-smooth` — no `touch-action`, no `overscroll-behavior`     |
| `opening-section.tsx`    | L50, L59                   | Hero images: `group-hover:scale-[1.02]` — sticks on mobile                                      |
| `dialog.tsx`             | L29                        | `DialogContent` — no `overscroll-behavior: contain`                                             |
| `editorial-home.tsx`     | L30                        | `<main className="px-4 ...">` — no safe-area padding                                            |
| `site-footer.tsx`        | L69                        | `<footer className="px-4 pb-8 ...">` — no safe-area bottom                                      |
| `layout.tsx`             | L38                        | `<html>` — no `viewport-fit=cover` meta                                                         |
| `site-header.tsx`        | L34, L52                   | Nav links with `hover:text-(--accent-strong)` — fires on touch                                  |

## Tasks

### 1. Add hover-only and touch media queries to `globals.css`

Add after the existing `@media (prefers-reduced-motion: reduce)` block:

```css
/* Disable hover effects on touch-only devices to prevent sticky states */
@media (hover: none) {
  .hover-lift {
    transform: none !important;
  }
}

/* Clean tap feedback on touch devices */
@media (pointer: coarse) {
  a,
  button,
  [role="button"] {
    -webkit-tap-highlight-color: transparent;
  }
}
```

**Browser support:** `hover: none` — Chrome 38+, Safari 9+, Firefox 64+.
`pointer: coarse` — same. `-webkit-tap-highlight-color` — all WebKit/Blink.
Zero risk.

### 2. Move `hoverLift` to a CSS class with hover-media guard

In `app/globals.css`, add a new utility class:

```css
.hover-lift {
  transition:
    transform 150ms ease,
    border-color 150ms ease;
}
@media (hover: hover) and (pointer: fine) {
  .hover-lift:hover {
    transform: translateY(-0.125rem);
    border-color: var(--ink-18);
  }
}
@media (prefers-reduced-motion: reduce) {
  .hover-lift:hover {
    transform: none;
  }
}
```

Users who prefer reduced motion still see the border-color change on hover
but not the upward translate, matching the QA expectation in Sprint 4.

Then in `home-design-system.tsx`, change the `hoverLift` token from the
inline Tailwind classes to the CSS class name:

**Old:**

```ts
hoverLift: "transition hover:-translate-y-0.5 hover:border-(--ink-18)",
```

**New:**

```ts
hoverLift: "hover-lift",
```

This ensures hover effects never fire on touch devices. The CSS class
approach is necessary because Tailwind's `hover:` variant doesn't support
media-query scoping out of the box.

**Verify:** On desktop, cards still lift on hover. On mobile (or with Chrome
DevTools touch emulation), cards do not stick in a hovered state.

### 3. Guard hero image scale on hover

In `opening-section.tsx`, the hero images at L50 and L59 use
`group-hover:scale-[1.02]`. These need a CSS-based guard since we can't
scope Tailwind's `group-hover:` to pointer devices.

Add to `globals.css`:

```css
@media (hover: none) {
  .group:hover .hover-scale-guard {
    transform: none !important;
  }
}
```

Then add `hover-scale-guard` to the className of the two `FocalImage`
elements in `opening-section.tsx` alongside the existing
`group-hover:scale-[1.02]`.

### 4. Add `touch-action` and `overscroll-behavior` to the era carousel

In `chronology-section.tsx` at L84, the era card scroller div has:

```
className="-mx-4 flex snap-x gap-3 overflow-x-auto scroll-smooth ..."
```

Add a CSS utility in `globals.css`:

```css
.carousel-touch {
  touch-action: pan-x;
  overscroll-behavior-x: contain;
}
```

Then add `carousel-touch` to the carousel div's className.

**Why:** `touch-action: pan-x` prevents vertical scroll interference during
horizontal swipes. `overscroll-behavior-x: contain` prevents Mac trackpad
back-navigation and keeps scroll contained within the carousel.

### 5. Add `overscroll-behavior: contain` to Dialog

In `dialog.tsx`, add to the `DialogContent` className string:

```
"overscroll-behavior-contain"
```

Or add to globals.css and use the class. This prevents users from
accidentally scrolling the page behind an open modal.

Add CSS utility if needed (Tailwind v4 may not have this utility):

```css
.overscroll-contain {
  overscroll-behavior: contain;
}
```

### 6. Add safe-area inset support

In `app/layout.tsx`, the `<html>` element needs the viewport meta tag updated
to include `viewport-fit=cover`. Check if Next.js sets this automatically or
if we need to add it via metadata.

In `app/globals.css`, add safe-area padding:

```css
@supports (padding: env(safe-area-inset-left)) {
  .site-frame {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
  footer {
    padding-bottom: max(2rem, env(safe-area-inset-bottom));
  }
}
```

**Why:** On iPhones with the Dynamic Island or home bar, content can clip
behind system chrome. `env(safe-area-inset-*)` reserves space for these
hardware features.

**Verify:** In Safari responsive design mode or on a physical iPhone, content
doesn't clip behind the notch or home bar.

### 7. Guard `hover:text-*` on header and footer nav links

The header (`site-header.tsx` L34, L52) and footer (`site-footer.tsx` L8,
L53) use `hover:text-(--accent-strong)` on navigation links. Tailwind's
`hover:` variant fires on touch devices, causing the color to stick after
tap.

Add hover-guarded link styles in `app/globals.css`:

```css
.nav-link {
  transition: color 150ms ease;
}
@media (hover: hover) and (pointer: fine) {
  .nav-link:hover {
    color: var(--accent-strong);
  }
}
```

Then replace `hover:text-(--accent-strong)` with the `nav-link` class on
all navigation links in `site-header.tsx` and `site-footer.tsx`.

**Verify:** On mobile (touch emulation), tapping a nav link should not leave
it in a contrasting color state.

## Completion Checklist

- [ ] `@media (hover: none)` block added to globals.css
- [ ] `@media (pointer: coarse)` tap-highlight rule added
- [ ] `.hover-lift` CSS class with `@media (hover: hover)` guard
- [ ] `homeTokens.hoverLift` updated to `"hover-lift"`
- [ ] Hero image `group-hover:scale` guarded with `hover-scale-guard`
- [ ] `.carousel-touch` class with `touch-action` + `overscroll-behavior-x`
- [ ] Carousel div has `carousel-touch` class
- [ ] `.overscroll-contain` on `DialogContent`
- [ ] Safe-area `@supports` block in globals.css
- [ ] `viewport-fit=cover` in viewport meta
- [ ] `.nav-link` CSS class with hover-media guard in globals.css
- [ ] `hover:text-(--accent-strong)` replaced with `nav-link` in site-header and site-footer
- [ ] `prefers-reduced-motion` override on `.hover-lift` (transform: none)
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run build` succeeds
