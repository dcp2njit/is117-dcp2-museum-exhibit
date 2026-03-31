# Sprint 1 — Section File Split

## Header

- **Goal:** Break the 507-line `editorial-home-sections.tsx` monolith into
  four focused section files plus a shared-helpers file, with zero visual or
  behavioural change.
- **Spec sections:** Design Goals 2; Architecture → File Split
- **Prerequisite:** Sprint 0 committed (token consolidation)
- **Expected test count:** Existing count + 0 new (pure structural refactor)

## Available Assets

| Asset                                                     | Signature / Location                                                                                                                                                                                                                                                                                                                        | How this sprint uses it                   |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `components/content/home/editorial-home-sections.tsx`     | 4 exported functions: `OpeningSection`, `ChronologySection`, `ReadingModelSection`, `ScenesSection`; 9 private helpers: `HomeSectionSplit`, `HomePanelSplit`, `OpeningSignalCard`, `HeroVisualLink`, `EditorialRouteLink`, `ChronologyCard`, `CompanionRouteLink`, `MosaicEntry`, `getScenesEntrySpanClass`; 1 const: `mosaicVariantStyles` | Source file to decompose                  |
| `components/content/home/editorial-home.tsx`              | Imports `{ ChronologySection, OpeningSection, ReadingModelSection, ScenesSection }` from `./editorial-home-sections`                                                                                                                                                                                                                        | Update import paths                       |
| `components/content/home/home-design-system.tsx`          | Exports `homeTokens`, `HomeEyebrow`, `HomeInsightCard`, `HomeRouteAction`, `homePillStyles`, `homeEyebrowStyles`                                                                                                                                                                                                                            | Consumed by all section files — no change |
| `tests/app/homepage.test.tsx`                             | Existing homepage unit tests                                                                                                                                                                                                                                                                                                                | Must pass without modification            |
| `tests/browser/homepage-breakpoints.spec.ts` (if present) | Existing Playwright tests                                                                                                                                                                                                                                                                                                                   | Must pass without modification            |

## Dependency Map

Before splitting, establish which private helpers are used by which sections:

| Helper                    | Used by                                        |
| ------------------------- | ---------------------------------------------- |
| `HomeSectionSplit`        | `ChronologySection`, `ReadingModelSection`     |
| `HomePanelSplit`          | `OpeningSection`, `ChronologySection`          |
| `OpeningSignalCard`       | `OpeningSection` only                          |
| `HeroVisualLink`          | `OpeningSection` only                          |
| `EditorialRouteLink`      | `OpeningSection` only                          |
| `ChronologyCard`          | `ChronologySection` only                       |
| `CompanionRouteLink`      | `ReadingModelSection` only                     |
| `MosaicEntry`             | `ScenesSection` only                           |
| `getScenesEntrySpanClass` | `ScenesSection` only                           |
| `mosaicVariantStyles`     | `MosaicEntry` (therefore `ScenesSection` only) |

**Decision:** `HomeSectionSplit` and `HomePanelSplit` are used by multiple
sections → they go in `home-shared.tsx`. Everything else is private to its
section file.

## Tasks

### 1. Create `home-shared.tsx`

Create `components/content/home/home-shared.tsx` containing:

- `HomeSectionSplit` component (currently lines 72–90)
- `HomePanelSplit` component (currently lines 93–112)

Both are internal helpers, so export them as named exports for cross-section
use, but they are not part of the public API.

```ts
// components/content/home/home-shared.tsx
import { cn } from "@/lib/utils";

export function HomeSectionSplit({ … }) { … }
export function HomePanelSplit({ … }) { … }
```

**Verify:**

```bash
npx tsc --noEmit
```

### 2. Create `opening-section.tsx`

Create `components/content/home/opening-section.tsx` containing:

- `OpeningSignalCard` (private)
- `HeroVisualLink` (private)
- `EditorialRouteLink` (private)
- `OpeningSection` (exported)

Imports:

- `HomePanelSplit` from `./home-shared`
- `HomeEyebrow`, `homeTokens`, `homePillStyles` from `./home-design-system`
- Types from `@/lib/content/homepage`
- `FocalImage` from `@/components/media/focal-image`
- `Button`, `Panel`, `SectionHeading` from `@/components/ui`
- `cn` from `@/lib/utils`
- `Link` from `next/link`
- `ArrowRight` from `lucide-react`

**Verify:**

```bash
npx tsc --noEmit
```

### 3. Create `chronology-section.tsx`

Create `components/content/home/chronology-section.tsx` containing:

- `ChronologyCard` (private)
- `ChronologySection` (exported)

Imports:

- `HomeSectionSplit`, `HomePanelSplit` from `./home-shared`
- `HomeEyebrow`, `HomeInsightCard`, `homeTokens` from `./home-design-system`
- Types from `@/lib/content/homepage`
- `Panel`, `SectionHeading` from `@/components/ui`
- `cn` from `@/lib/utils`
- `Link` from `next/link`

**Verify:**

```bash
npx tsc --noEmit
```

### 4. Create `reading-model-section.tsx`

Create `components/content/home/reading-model-section.tsx` containing:

- `CompanionRouteLink` (private)
- `ReadingModelSection` (exported)

Imports:

- `HomeSectionSplit` from `./home-shared`
- `HomeEyebrow`, `HomeRouteAction`, `homeTokens`, `homePillStyles` from `./home-design-system`
- Types from `@/lib/content/homepage`
- `Button`, `SectionHeading` from `@/components/ui`
- `cn` from `@/lib/utils`
- `Link` from `next/link`
- `ArrowRight` from `lucide-react`

**Verify:**

```bash
npx tsc --noEmit
```

### 5. Create `scenes-section.tsx`

Create `components/content/home/scenes-section.tsx` containing:

- `mosaicVariantStyles` (private const)
- `MosaicEntry` (private)
- `getScenesEntrySpanClass` (private)
- `ScenesSection` (exported)

Imports:

- `HomeEyebrow`, `HomeRouteAction`, `homeTokens` from `./home-design-system`
- Types from `@/lib/content/homepage`
- `FocalImage` from `@/components/media/focal-image`
- `Panel`, `SectionHeading` from `@/components/ui`
- `cn` from `@/lib/utils`
- `Link` from `next/link`

**Verify:**

```bash
npx tsc --noEmit
```

### 6. Update imports in `editorial-home.tsx`

Change the single import:

```ts
// Before
import {
  ChronologySection,
  OpeningSection,
  ReadingModelSection,
  ScenesSection,
} from "@/components/content/home/editorial-home-sections";

// After
import { OpeningSection } from "@/components/content/home/opening-section";
import { ChronologySection } from "@/components/content/home/chronology-section";
import { ReadingModelSection } from "@/components/content/home/reading-model-section";
import { ScenesSection } from "@/components/content/home/scenes-section";
```

**Verify:**

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
```

### 7. Delete the monolith

Remove `components/content/home/editorial-home-sections.tsx`.

Confirm no other files import from it:

```bash
grep -rn 'editorial-home-sections' --include='*.tsx' --include='*.ts'
```

Expected: zero results.

**Verify:**

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
npm run build
```

## Completion Checklist

- [ ] `home-shared.tsx` created with `HomeSectionSplit` and `HomePanelSplit`
- [ ] `opening-section.tsx` created with `OpeningSection` + 3 private helpers
- [ ] `chronology-section.tsx` created with `ChronologySection` + 1 private helper
- [ ] `reading-model-section.tsx` created with `ReadingModelSection` + 1 private helper
- [ ] `scenes-section.tsx` created with `ScenesSection` + 2 private helpers + `mosaicVariantStyles`
- [ ] `editorial-home.tsx` imports updated to new file paths
- [ ] `editorial-home-sections.tsx` deleted
- [ ] No file imports from deleted path (grep confirms)
- [ ] All existing tests pass without modification
- [ ] Production build succeeds

## QA Deviations

No deviations. All 7 tasks completed as planned: 5 new files created, imports updated, monolith deleted. File list matches spec exactly.
