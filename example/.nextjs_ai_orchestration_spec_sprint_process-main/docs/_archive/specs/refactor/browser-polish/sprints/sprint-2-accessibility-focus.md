# Sprint 2 — Accessibility & Focus States

## Header

- **Goal:** Add `focus-visible` keyboard focus rings to all interactive
  elements (navigation links, card links, footer links) so keyboard users
  have the same visual feedback that mouse users get from hover states.
- **Spec sections:** Design Goals 3; Architecture → Focus Ring System
- **Prerequisite:** Sprint 1 committed (browser CSS features)
- **Expected test count:** Existing count + 0 new

## Available Assets

| Asset                       | Location                                         | Current State                                                                                                                      |
| --------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `app/globals.css`           | `@layer base { a { color: inherit; } }` at ~L114 | Existing base layer for link resets — extend with focus ring                                                                       |
| `components/ui/button.tsx`  | L8                                               | Already has `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2` |
| `components/ui/dialog.tsx`  | L35                                              | Close button has `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]`                        |
| `site-header.tsx`           | L37, L55                                         | Nav links: `<Link>` with hover state, no focus ring                                                                                |
| `site-footer.tsx`           | L50–L57                                          | `FooterLinkList` links: no focus ring                                                                                              |
| `opening-section.tsx`       | L38, L76, L139                                   | `HeroVisualLink`, `EditorialRouteLink`, `publicAiCard` link: no focus ring                                                         |
| `chronology-section.tsx`    | L14                                              | `ChronologyCard`: no focus ring                                                                                                    |
| `reading-model-section.tsx` | L16                                              | `CompanionRouteLink`: no focus ring                                                                                                |
| `scenes-section.tsx`        | L22                                              | `MosaicEntry`: no focus ring                                                                                                       |

## Tasks

### 1. Add global `focus-visible` ring for `<a>` elements

In `app/globals.css`, extend the existing `@layer base` block:

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

This uses a double `box-shadow` ring (inner ring matches background colour,
outer ring is the accent). This matches the `ring-2 ring-offset-2` pattern
used by `Button` but expressed in CSS rather than Tailwind, so it applies to
all `<a>` elements universally.

**Why `box-shadow` instead of `outline`:** `box-shadow` respects
`border-radius`, which matters for rounded card links. `outline` does not
follow rounded corners in all browsers.

**Why not per-component:** Adding `focus-visible:…` to every link component
individually would add the same 3-class string to ~12 sites. A single CSS
rule is DRYer and ensures future links automatically get the ring.

**Verify:** Tab through the page. Every link should show a 2px accent ring
with a 2px gap (filled with background colour).

### 2. Override ring style for dark-background cards

Links inside dark panels (reading model section, dark card in opening) have
a dark background. The default ring uses `var(--background)` as the offset
colour, which is light — this works. But if we want the inner offset to match
the card background, we'd need per-section overrides.

**Decision:** The light offset ring on dark cards actually provides _better_
contrast for keyboard visibility. No override needed. Document in QA
deviations if the visual pairing feels off during manual testing.

### 3. Verify `Button` focus ring is not doubled

The `Button` component already has its own `focus-visible` classes. Since
buttons render as `<button>` (not `<a>`), the CSS rule targets only `<a>`.
When `Button` is used with `asChild` and wraps a `<Link>` (which renders as
`<a>`), the Tailwind focus-visible classes on the button will apply. The CSS
rule also applies, but `box-shadow` and `ring` are the same visual — they
won't stack visibly.

**Verify:** Tab to a `Button asChild` + `Link` combo (e.g., the "Begin
reading" CTA in opening section). Confirm only one ring appears.

### 4. Ensure rounded card links get appropriate ring radius

Large card links with `rounded-2xl` (chronology cards, mosaic entries, hero
visual links) should show a ring that follows the card's rounded shape. The
global `border-radius: 0.25rem` on the focus ring works for text links but
is too small for cards.

**Option A (simple):** Accept `0.25rem` for all — the ring will be slightly
inside the card's visual radius. This is standard practice (GitHub, Notion,
etc. all do this).

**Option B (precise):** Add a `.focus-ring-rounded` utility class:

```css
a.focus-ring-rounded:focus-visible {
  border-radius: 1rem;
}
```

And apply in the Tailwind `className` for card-shaped links.

**Decision:** Use Option A. The `0.25rem` ring is fine — it's visible and
consistent. Over-matching border radii is diminishing returns. If it looks
wrong during QA, switch to Option B.

## Completion Checklist

- [ ] `a:focus-visible` rule added to `@layer base` in globals.css
- [ ] Tab-key navigation tested across all sections
- [ ] Header nav links show focus ring
- [ ] Footer links show focus ring
- [ ] Hero visual links show focus ring
- [ ] Chronology cards show focus ring
- [ ] Reading model companion links show focus ring
- [ ] Scene mosaic entries show focus ring
- [ ] `Button asChild` + `Link` combos show exactly one ring (not doubled)
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run build` — 16 pages

## QA Deviations

_(Populated during implementation)_
