# Sprint 2 — Visual Effects

## Header

- **Goal:** Add four progressively-enhanced visual effects: `:has()`-powered
  card spotlighting on the chronology grid, scroll-driven entrance animations
  on below-fold sections, a scroll-driven progress indicator on the era
  carousel, and `@starting-style` entrance transitions for the Dialog and
  Tooltip components.
- **Spec sections:** Design Goals 3
- **Prerequisite:** Sprint 1 committed (typography)
- **Expected test count:** Existing count + 0 new (CSS-only, gated behind
  `@supports`)

## Available Assets

| Asset                    | Location      | Current State                                                                                       |
| ------------------------ | ------------- | --------------------------------------------------------------------------------------------------- |
| `app/globals.css`        | Full CSS file | No `:has()`, no `@starting-style`, no scroll-driven animations                                      |
| `chronology-section.tsx` | L84–L89       | Era card scroller: 7 cards in a flex/grid. No sibling-aware hover.                                  |
| `editorial-home.tsx`     | L36–L60       | Three `.content-auto` wrappers around below-fold sections. No entrance animation.                   |
| `dialog.tsx`             | L23–L37       | `DialogContent` — positioned fixed, no entrance transition. `DialogOverlay` has `backdrop-blur-sm`. |
| `tooltip.tsx`            | L31–L37       | `TooltipContent` — no entrance animation.                                                           |

## Tasks

### 1. `:has()` card spotlight on chronology grid

Add to `app/globals.css`:

```css
@supports selector(:has(*)) {
  #home-chronology a {
    transition: opacity 300ms ease;
  }
  @media (hover: hover) {
    #home-chronology :has(a:hover) a:not(:hover) {
      opacity: 0.6;
    }
  }
}
```

**Why:** When hovering one era card, the other six dim — creating a spotlight
effect that focuses attention on the hovered card. This is a cinematic touch
that makes the editorial design feel curated.

**How it works:** `:has(a:hover)` targets the parent container when any
child link is hovered. Then `a:not(:hover)` selects all the non-hovered
siblings. Setting `opacity: 0.6` dims them.

**Browser support:** Chrome 105+, Safari 15.4+, Firefox 121+. Fully
progressive — non-supporting browsers see the current hover behavior
(lift + border change) without dimming siblings.

**Hover gating:** The opacity-dimming rule is nested inside
`@media (hover: hover)` so it only fires on pointer devices. On touch
devices, tapping a card won't dim its siblings — consistent with Design
Goal 1.

**Verify:** Hover any era card in the chronology section. All other cards
should subtly dim. Moving to a different card should smoothly transfer the
spotlight. On mobile (touch emulation), tapping a card should NOT dim siblings.

### 2. Scroll-driven entrance animations for below-fold sections

Add to `app/globals.css`:

```css
@supports (animation-timeline: view()) {
  @keyframes section-reveal {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .content-auto {
    animation: section-reveal linear both;
    animation-timeline: view();
    animation-range: entry 5% entry 30%;
  }
}
```

**Why:** The three below-fold sections (Chronology, Reading Model, Scenes)
currently appear instantly as content-visibility reveals them. With
scroll-driven animations, they fade and slide up as they enter the viewport —
no JavaScript, no IntersectionObserver, pure CSS.

**How it works:** `animation-timeline: view()` ties the animation progress to
the element's visibility in the viewport. `animation-range: entry 5% entry 30%`
means the animation runs from 5% visible to 30% visible, completing the
reveal quickly as the user scrolls.

**Integration:** The `.content-auto` class in `editorial-home.tsx` already
wraps each below-fold section. The CSS targets this same class, so no TSX
changes are needed.

**Browser support:** Chrome 115+, Safari 18+, Firefox — behind flag as of
early 2026. Progressive — non-supporting browsers see instant appearance
(current behavior).

**Interaction with reduced-motion:** The existing `prefers-reduced-motion`
block sets `animation-duration: 0.01ms !important`, which effectively
disables these animations for users who prefer reduced motion.

**Verify:** Scroll down the homepage slowly. Each section should fade up
into view. The opening section (above fold) should NOT animate since it
doesn't have the `.content-auto` class.

### 3. `@starting-style` entrance for DialogContent

Add to `app/globals.css` **without** an `@supports` gate:

```css
[data-slot="dialog-content"] {
  transition:
    opacity 200ms ease,
    transform 200ms ease,
    display 200ms allow-discrete;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

@starting-style {
  [data-slot="dialog-content"] {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
}

[data-slot="dialog-overlay"] {
  transition:
    opacity 200ms ease,
    display 200ms allow-discrete;
  opacity: 1;
}

@starting-style {
  [data-slot="dialog-overlay"] {
    opacity: 0;
  }
}
```

> **Why no `@supports` gate?** `@starting-style` is an at-rule, not a
> selector or property. CSS `@supports` can only test properties
> (`@supports (prop: val)`) or selectors (`@supports selector(…)`). There
> is no valid `@supports` test for at-rule support. This is safe because
> non-supporting browsers simply ignore the unknown `@starting-style`
> at-rule, and the `transition` properties on their own are harmless —
> elements appear instantly, which is the current behavior.

**Prerequisite:** Add `data-slot="dialog-content"` to `DialogContent` and
`data-slot="dialog-overlay"` to `DialogOverlay` in `dialog.tsx` so the CSS
can target them without leaking into other fixed-position elements.

**Why:** Currently the dialog snaps into view instantly. `@starting-style`
defines the initial style before the element enters the render tree, enabling
pure-CSS entrance transitions without JavaScript animation libraries.

**How it works:** When Radix mounts the dialog content, `@starting-style`
applies `opacity: 0; scale(0.96)`, then the `transition` property animates
to the final state. `allow-discrete` enables the `display: none → block`
transition.

**Browser support:** Chrome 117+, Safari 17.5+, Firefox — behind flag.
Progressive — non-supporting browsers see instant appearance (current
behavior).

### 4. `@starting-style` entrance for TooltipContent

Add alongside the dialog rules (ungated, same rationale as Task 3):

```css
[data-slot="tooltip-content"] {
  transition:
    opacity 150ms ease,
    transform 150ms ease,
    display 150ms allow-discrete;
  opacity: 1;
  transform: translateY(0);
}

@starting-style {
  [data-slot="tooltip-content"] {
    opacity: 0;
    transform: translateY(4px);
  }
}
```

**Prerequisite:** Add `data-slot="tooltip-content"` to the
`TooltipPrimitive.Content` element in `tooltip.tsx`.

**Why:** Tooltips currently snap into view. A subtle slide-up with fade
gives them a polished feel.

### 5. Scroll-driven progress indicator on era carousel

Add to `app/globals.css`:

```css
@supports (animation-timeline: scroll()) {
  .carousel-progress {
    height: 2px;
    background: var(--accent-strong);
    transform-origin: left;
    animation: grow-progress linear both;
    animation-timeline: scroll(nearest inline);
  }
  @keyframes grow-progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
}
```

In `chronology-section.tsx`, add a `<div className="carousel-progress" />`
as the last child of the scrolling container (after the era cards).

**Why:** The era carousel has 7 cards but no visual indication of scroll
position. A thin progress bar that grows as the user scrolls provides
spatial orientation — especially on touch devices where scrollbar visibility
is transient.

**How it works:** `animation-timeline: scroll(nearest inline)` ties the
animation to the horizontal scroll position of the nearest scrollable
ancestor. `scaleX(0)` → `scaleX(1)` grows the bar from left to right.

**Browser support:** Same as scroll-driven animations (Chrome 115+,
Safari 18+). The `@supports` gate ensures non-supporting browsers see no
progress bar — the carousel works fine without it.

**Verify:** Scroll the era carousel horizontally. A thin accent-colored bar
should grow from left to right tracking scroll position.

## Completion Checklist

- [ ] `:has()` spotlight rule in globals.css with `@supports` + hover gate
- [ ] `section-reveal` keyframes and scroll-driven animation on `.content-auto`
- [ ] `data-slot` attributes added to DialogContent, DialogOverlay, TooltipContent
- [ ] `@starting-style` entrance for dialog (ungated — opacity + scale)
- [ ] `@starting-style` entrance for tooltip (ungated — opacity + translateY)
- [ ] `carousel-progress` bar with `animation-timeline: scroll()`
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run build` succeeds
- [ ] Visual check: hover era cards → siblings dim (pointer devices only)
- [ ] Visual check: scroll homepage → sections fade in
- [ ] Visual check: open dialog → fades + scales in
- [ ] Visual check: scroll carousel → progress bar grows
