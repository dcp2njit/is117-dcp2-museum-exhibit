# Sprint 1 — Chronology Visual Enrichment & Breathing Room

## Header

- **Goal:** Wire era images into chronology cards, add a full-bleed section
  divider between Chronology and Reading Model, replace the duplicate Ada
  Lovelace portrait in Opening, and surface the "branch and return" concept
  earlier. This sprint transforms the page from a text wall into a visual
  exhibition.
- **Spec sections:** Design goals 1, 3, 4, 5, 6; Architecture (Chronology Card
  Updates, Visual Divider, Opening Section Amendments)
- **Prerequisite:** Sprint 0 (all images generated and committed)

## Available Assets

| Asset                             | Location                                                 | Current State                                                                               |
| --------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `EraLink` type                    | `lib/content/homepage.ts` line 35                        | `{ href, label, description }` — no image field                                             |
| `ChronologyCard` component        | `components/content/home/chronology-section.tsx` line 20 | Renders text-only era card (eyebrow, title, description). No image support.                 |
| `ChronologySection` component     | `components/content/home/chronology-section.tsx` line 43 | Receives `eraLinks: EraLink[]` and maps to `ChronologyCard`.                                |
| `EditorialHome` orchestrator      | `components/content/home/editorial-home.tsx`             | Renders Opening → Chronology → ReadingModel → Scenes sequentially. No section dividers.     |
| `FocalImage` component            | `components/media/focal-image.tsx`                       | Wraps `next/image` with focal-point data and basePath handling. Used site-wide.             |
| `homepage.md` chronology.eras     | `docs/content/site/homepage.md` lines ~99–131            | 7 era entries with `href`, `label`, `description`. No `imageRef`.                           |
| `homepage.md` opening.heroVisuals | `docs/content/site/homepage.md` lines ~18–32             | 3 hero visuals; first uses `historical:lovelace-analytical-engine` (duplicate).             |
| Era images                        | `public/media/generated/era-{1–7}-*.png`                 | Generated in Sprint 0. 7 landscape images.                                                  |
| Section divider image             | `public/media/generated/section-divider-chronology.webp` | Generated in Sprint 0.                                                                      |
| `resolveImageRef()` function      | `lib/content/homepage.ts` line 238                       | Resolves `collection:slug` to `{ imageAlt, imageUrl }` from narrative registry              |
| `parseEditorialEntry()`           | `lib/content/homepage.ts` line 375                       | Already handles optional `imageRef` — returns image fields when present. Pattern to follow. |

## Tasks

### 1. Add era images to narrative registry

Create a new `generated` collection in `lib/narrative-data.ts` for the
AI-generated era illustrations. Each entry maps a slug to a local image path
and alt text.

**Add to `lib/narrative-data.ts`:**

```typescript
export type GeneratedIllustration = {
  slug: string;
  imageUrl: string;
  imageAlt: string;
};

export const generatedIllustrations: GeneratedIllustration[] = [
  {
    slug: "era-1-precursors",
    imageUrl: "/media/generated/era-1-precursors.webp",
    imageAlt:
      "Illustration of mechanical computation origins — gears, analytical engine components, and mathematical notation.",
  },
  {
    slug: "era-2-field-formation",
    imageUrl: "/media/generated/era-2-field-formation.webp",
    imageAlt:
      "Illustration of computation and information theory — circuit diagrams, Turing machine tape, and flow diagrams.",
  },
  {
    slug: "era-3-symbolic-programs",
    imageUrl: "/media/generated/era-3-symbolic-programs.webp",
    imageAlt:
      "Illustration of early symbolic AI — logic trees on a chalkboard, punch cards, and a 1960s mainframe terminal.",
  },
  {
    slug: "era-4-expert-systems",
    imageUrl: "/media/generated/era-4-expert-systems.webp",
    imageAlt:
      "Illustration of expert systems and the first AI winter — decision trees fading into shadow.",
  },
  {
    slug: "era-5-statistical-revival",
    imageUrl: "/media/generated/era-5-statistical-revival.webp",
    imageAlt:
      "Illustration of statistical learning revival — neural network diagrams with glowing weighted connections.",
  },
  {
    slug: "era-6-deep-learning",
    imageUrl: "/media/generated/era-6-deep-learning.webp",
    imageAlt:
      "Illustration of the deep learning revolution — stacked neural network layers and transformer attention patterns.",
  },
  {
    slug: "era-7-foundation-models",
    imageUrl: "/media/generated/era-7-foundation-models.webp",
    imageAlt:
      "Illustration of foundation models — token embeddings radiating outward with human silhouettes at chat interfaces.",
  },
];
```

**Verify:**

```bash
npm run typecheck
```

### 2. Register generated collection in homepage.ts

Add the `generated` collection to the `narrativeRegistry` so `resolveImageRef`
can resolve `generated:era-1-precursors` etc.

**Changes to `lib/content/homepage.ts`:**

Import:

```typescript
import { generatedIllustrations } from "@/lib/narrative-data";
```

Update the registry:

```typescript
const narrativeRegistry = {
  historical: historicalAnchors,
  institution: institutionProfiles,
  person: peopleProfiles,
  generated: generatedIllustrations,
} as const;
```

**Verify:**

```bash
npm run typecheck
```

### 3. Extend EraLink type with optional image fields

Add optional `imageUrl` and `imageAlt` fields to the `EraLink` type.

**Changes to `lib/content/homepage.ts`:**

```typescript
export type EraLink = {
  href: string;
  label: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
};
```

**Verify:**

```bash
npm run typecheck
```

### 4. Update era link parser to handle optional imageRef

Modify the era-link parsing function in `lib/content/homepage.ts` to resolve
an optional `imageRef` field, following the same pattern used by
`parseEditorialEntry`.

Find where era links are parsed (look for the function that creates `EraLink`
objects). Add:

```typescript
const imageRef = record.imageRef;
const imageFields =
  typeof imageRef === "string" ? resolveImageRef(imageRef, label) : {};

return {
  href: expectString(record, "href", label),
  label: expectString(record, "label", label),
  description: expectString(record, "description", label),
  ...imageFields,
};
```

**Verify:**

```bash
npm run typecheck
npm run test
```

### 5. Add imageRef to chronology eras in homepage.md

Add `imageRef` to each era entry in `docs/content/site/homepage.md`:

```yaml
eras:
  - href: /eras/precursors-to-machine-intelligence
    label: "Era 1: Precursors"
    description: Logic, automation, and the first serious claim that reasoning might be mechanized.
    imageRef: generated:era-1-precursors
  - href: /eras/computation-information-field-formation
    label: "Era 2: Field Formation"
    description: Turing, Shannon, and the framework that makes AI legible as a field.
    imageRef: generated:era-2-field-formation
  - href: /eras/symbolic-optimism-and-early-ai-programs
    label: "Era 3: Symbolic Programs"
    description: The first surge of symbolic ambition, theorem proving, and programmed reasoning.
    imageRef: generated:era-3-symbolic-programs
  - href: /eras/knowledge-systems-critique-and-the-first-ai-winter
    label: "Era 4: Expert Systems Winter"
    description: Expert systems, critique, and the first major contraction in confidence.
    imageRef: generated:era-4-expert-systems
  - href: /eras/statistical-learning-and-network-revival
    label: "Era 5: Statistical Revival"
    description: Backpropagation, probabilistic methods, and the return of learned representations.
    imageRef: generated:era-5-statistical-revival
  - href: /eras/deep-learning-breakthroughs
    label: "Era 6: Deep Learning"
    description: ImageNet, deep learning consolidation, and the transformer turning point.
    imageRef: generated:era-6-deep-learning
  - href: /eras/foundation-models-and-generative-ai
    label: "Era 7: Foundation Models"
    description: Public deployment, embeddings infrastructure, multimodality, and the 2026 horizon.
    imageRef: generated:era-7-foundation-models
```

**Verify:**

```bash
npm run build
```

Build must succeed — this confirms all `imageRef` values resolve through
the narrative registry.

### 6. Update ChronologyCard to render images

Modify `components/content/home/chronology-section.tsx` to accept and render
the optional image.

**Changes to `ChronologyCard`:**

```tsx
import { FocalImage } from "@/components/media/focal-image";

function ChronologyCard({
  href,
  label,
  description,
  imageUrl,
  imageAlt,
}: EraLink) {
  const [eraNumber, eraTitle] = label.split(": ");

  return (
    <Link
      href={href}
      className={cn(
        "@container/era-card group min-w-68 snap-start rounded-[1.45rem] border border-(--ink-10) bg-[image:var(--gradient-warm-card)] p-0 overflow-hidden hover:bg-white sm:min-w-0 xl:h-full xl:min-w-0 xl:rounded-none xl:border-0 xl:bg-(--surface-warm-97) xl:p-0 xl:hover:translate-y-0 xl:hover:bg-white",
        homeTokens.hoverLift
      )}
    >
      {imageUrl && imageAlt && (
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <FocalImage
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-5 sm:p-6 xl:p-6">
        <HomeEyebrow>{eraNumber}</HomeEyebrow>
        <h3 className="mt-3 font-(family-name:--font-display) text-[1.38rem] leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[1.5rem] xl:text-[1.22rem]">
          {eraTitle}
        </h3>
        <p className="mt-3 max-w-[30ch] text-(--ink-74) text-sm leading-6.5 sm:text-[0.96rem] sm:leading-6.75 xl:max-w-none xl:text-[0.88rem] xl:leading-6">
          {description}
        </p>
      </div>
    </Link>
  );
}
```

Key changes:

- Import `FocalImage`
- Add `imageUrl` and `imageAlt` to destructured props
- Wrap card in `overflow-hidden`, move padding from outer card to inner `<div>`
- Add `aspect-[3/2]` image container above text
- Add hover scale effect on image

**Verify:**

```bash
npm run typecheck
npm run build
```

### 7. Create HomeSectionDivider component

Create a lightweight divider component in the home design system.

**Add to `components/content/home/home-design-system.tsx`** (or create a
separate `section-divider.tsx` if the file is already large):

```tsx
import { FocalImage } from "@/components/media/focal-image";

export function HomeSectionDivider({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8">
      <div className="relative aspect-[4/1] w-full overflow-hidden sm:aspect-[5/1]">
        <FocalImage
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
```

The negative margins make it full-bleed within the `main` container's
padding. The aspect ratio keeps it cinematic (wide and short).

**Verify:**

```bash
npm run typecheck
```

### 8. Insert section divider in EditorialHome

Add the `HomeSectionDivider` between Chronology and Reading Model in
`components/content/home/editorial-home.tsx`.

**Changes:**

```tsx
import { HomeSectionDivider } from "@/components/content/home/home-design-system";

// ... in the JSX, between Chronology and ReadingModel:
        <div className="content-auto">
          <ChronologySection ... />
        </div>
        <HomeSectionDivider
          imageUrl="/media/generated/section-divider-chronology.webp"
          imageAlt="Visual transition between the chronology and reading model sections."
        />
        <div className="content-auto">
          <ReadingModelSection ... />
        </div>
```

**Verify:**

```bash
npm run typecheck
npm run build
```

### 9. Replace duplicate Ada Lovelace portrait in Opening

In `docs/content/site/homepage.md`, the feature hero visual uses
`historical:lovelace-analytical-engine` (Ada Lovelace portrait). The same
image also appears in the Scenes section. Replace the Opening feature visual
with Charles Babbage, who is the natural companion figure and avoids
duplication.

**Change in `docs/content/site/homepage.md`, opening.heroVisuals[0]:**

Option A — use a different person from the existing wikimedia library:

```yaml
heroVisuals:
  - href: /eras/precursors-to-machine-intelligence
    eyebrow: Precursors
    title: Babbage designs the engine that Lovelace imagines programming
    imageRef: person:charles-babbage
```

This requires adding a `charles-babbage` entry to `peopleProfiles` in
`lib/narrative-data.ts`:

```typescript
{
  slug: "charles-babbage",
  name: "Charles Babbage",
  era: "Era 1",
  kind: "person",
  role: "Mechanical computation pioneer",
  summary: "Babbage designed the Analytical Engine, the machine Lovelace saw could manipulate symbols beyond arithmetic.",
  story: "His engineering vision becomes the physical substrate for the precursor era.",
  officialUrl: "https://www.britannica.com/biography/Charles-Babbage",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/charles-babbage.webp",
  imageAlt: "Wikimedia Commons portrait of Charles Babbage.",
  socialLinks: [],
  sourceRecord: "",
},
```

Note: `charles-babbage.webp` already exists in `public/media/wikimedia/`.

**Verify:**

```bash
npm run build
```

Build succeeds, confirming the new imageRef resolves.

### 10. Add "branch and return" signal to Opening

Surface the core reading model concept earlier on the page by updating one of
the existing Opening signal cards.

**Change in `docs/content/site/homepage.md`, opening.signals[1]:**

```yaml
- eyebrow: Branch with intent
  title: Branch when curiosity peaks.
  description: Follow documents, cast pages, and guides for proof, then return to the era sequence. The chronology always waits.
```

This is a content-only change — the component already renders two signal cards.
The updated description now includes the "return" concept without requiring
the visitor to scroll to the Reading Model section.

**Verify:**

```bash
npm run build
```

### 11. Run full quality suite

```bash
npm run format
npm run typecheck
npm run lint
npm run test
npm run build
```

All must pass.

### 12. Visual verification with Playwright screenshots

Take before/after screenshots to confirm the visual transformation.

```bash
npx playwright test tests/browser/ --update-snapshots
```

Compare page height, image count, and visual density at 1440 px and 390 px
viewports.

**Verify:** Era cards now show images. Section divider appears between
Chronology and Reading Model. Ada Lovelace is not duplicated.

## Completion Checklist

- [ ] `generatedIllustrations` array added to `lib/narrative-data.ts`
- [ ] `generated` collection registered in `narrativeRegistry`
- [ ] `EraLink` type has optional `imageUrl` and `imageAlt`
- [ ] Era link parser resolves optional `imageRef`
- [ ] All 7 eras in `homepage.md` have `imageRef` fields
- [ ] `ChronologyCard` renders `FocalImage` when image data is present
- [ ] `HomeSectionDivider` component created
- [ ] Section divider placed between Chronology and Reading Model in `EditorialHome`
- [ ] Opening hero visual uses Babbage instead of duplicate Lovelace
- [ ] `charles-babbage` entry added to `peopleProfiles`
- [ ] Opening signal card updated with "branch and return" concept
- [ ] All quality checks pass (format, typecheck, lint, test, build)
- [ ] Playwright screenshots show era images and section divider
