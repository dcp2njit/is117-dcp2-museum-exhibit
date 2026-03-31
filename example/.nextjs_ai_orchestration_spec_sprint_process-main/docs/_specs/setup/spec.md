# UI Framework Setup

> **Status:** Reference — architectural rules implemented as part of site-foundation

## Objective

Establish a DRY development framework using Tailwind, shadcn-style components,
and Radix primitives so future pages stop building route-specific UI systems in
global CSS.

## Architectural Rules

1. `components/ui/*` is the shared design-system layer.
   These components may depend on Radix, Tailwind utility classes, CVA, and
   `lib/utils.ts`, but they must not depend on site content models or page-level
   narrative data.

2. `components/content/*` is the composition layer.
   These components may use `components/ui/*` plus domain data to express site
   patterns such as chapter heroes, reading maps, and documentary cards.

3. `app/*` routes are orchestration only.
   Routes should compose content and UI primitives. They should not become the
   home for one-off visual systems that could be shared elsewhere.

4. Global CSS is for tokens and broad document rules.
   Keep `app/globals.css` focused on variables, typography, resets, and truly
   shared layout rules. Route-specific visual systems should be expressed in the
   component layer with Tailwind utilities and CVA variants.

## Pattern Model

This framework uses a small set of clean, repeatable patterns:

1. Adapter pattern:
   Every Radix primitive is wrapped in `components/ui/*` so the rest of the app
   depends on local interfaces rather than third-party APIs directly.

2. Strategy pattern:
   Visual variation is expressed through CVA variants such as `variant` and
   `size` instead of duplicated component files.

3. Composite pattern:
   Compound components like `Card`, `Dialog`, and `Accordion` expose reusable
   subparts so larger editorial surfaces can be assembled without rewriting the
   same structure.

4. Template pattern:
   Shared shells such as `Panel` and `SectionHeading` provide the standard frame
   for pages while still allowing page-level content to vary.

## shadcn Contract

The repository should keep a `components.json` file so future shadcn additions
use the same aliases and Tailwind entrypoint.

Required conventions:

1. Add new reusable primitives through `components/ui/*`.
2. Re-export reusable primitives from `components/ui/index.ts`.
3. Put helper functions in `lib/utils.ts` or another generic `lib/*` module.
4. Prefer semantic wrappers around repeated layout patterns before adding more
   global classes.

## Radix Baseline

The minimum shared Radix layer should include:

1. `Slot` for polymorphic components.
2. `Dialog` for overlays and structured modal interactions.
3. `Tooltip` for small explanatory affordances.
4. `Separator` for shared visual rhythm.
5. `Accordion` for dense but readable collapsible content.

## Implementation Guidance

When building new pages:

1. Start with `Panel`, `Card`, `Button`, and `SectionHeading`.
2. Reach for Radix wrappers when the interaction has focus management or ARIA
   complexity.
3. Extract recurring page patterns into `components/ui/*` or
   `components/content/*` once they appear twice.
4. Do not introduce new route-specific class systems when a component variant
   or shared primitive can express the same idea.
