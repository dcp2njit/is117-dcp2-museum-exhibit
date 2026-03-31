# Sprint 2 — Navigation Simplification & QA

## Header

- **Goal:** Trim the Scenes section from 5 to 3 entries, slim the Reading
  Model section by removing redundant introductory framing, reduce the
  page's overall heading count to ≤ 26, and run a full QA pass confirming
  all curatorial issues are resolved across both viewports.
- **Spec sections:** Design goals 3, 4, 5, 7; Architecture (Scenes Section
  Simplification, Reading Model Section Slimming)
- **Prerequisite:** Sprint 1 (chronology visuals wired, section divider
  placed, opening updated)

## Available Assets

| Asset                           | Location                                            | Current State                                                                                               |
| ------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `homepage.md` scenes.entries    | `docs/content/site/homepage.md` lines ~165–198      | 5 entries: 1 feature, 3 support, 1 strip. Two entries duplicate destinations already in Opening/Chronology. |
| `ScenesSection` component       | `components/content/home/scenes-section.tsx`        | Renders feature entry + grid of support entries. Grid layout uses `getScenesEntrySpanClass` for xl spans.   |
| `ReadingModelSection` component | `components/content/home/reading-model-section.tsx` | Dark panel with heading/signals/CTA on left, prompt block + companion routes on right.                      |
| `homepage.md` readingModel      | `docs/content/site/homepage.md` lines ~133–163      | 2 signals, 1 CTA, prompt block with 4 prompts, 4 companion routes.                                          |
| `selectFeatureEntry()`          | `lib/content/homepage.ts` line 393                  | Splits entries into `{ feature, supports }` based on `variant: "feature"`.                                  |
| `EditorialEntry` type           | `lib/content/homepage.ts`                           | Has `variant: "feature" \| "support" \| "strip" \| "rail"`.                                                 |
| Heading count baseline          | DOM audit                                           | 37 `<h*>` elements at desktop 1440 px. Target: ≤ 26.                                                        |

## Scenes Entries Analysis

| #   | Entry                                               | Destination                                    | Also Reachable From                                       | Keep?                                                               |
| --- | --------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | "The machine question comes first" (feature)        | `/eras/precursors-to-machine-intelligence`     | Opening primaryRoutes[0], Chronology era[0]               | **Keep** — the feature visual with Lovelace image makes it distinct |
| 2   | "Read the decisive texts"                           | `/reading-maps/intellectual-lineage`           | Opening primaryRoutes[1], ReadingModel companionRoutes[1] | **Keep** — unique entry point to reading maps                       |
| 3   | "The field is built by people and labs"             | `/people-and-institutions`                     | Opening primaryRoutes[2], ReadingModel companionRoutes[2] | **Remove** — triplicated                                            |
| 4   | "Modern AI still rests on a small amount of math"   | `/guides/embeddings-latent-space-and-llm-math` | ReadingModel companionRoutes[3]                           | **Remove** — duplicated, niche audience                             |
| 5   | "Institutions turn AI into a public system" (strip) | `/people-and-institutions`                     | Same as entry 3 (identical destination!)                  | **Remove** — literal duplicate of entry 3                           |

**Result:** Keep entries 1 and 2. Need one more for a 3-entry section.
Replace with a genuinely new route — the most natural candidate is
a direct link to the middle of the chronology (e.g., Era 4 or Era 5) that
gives returning visitors a shortcut past the precursors.

## Tasks

### 1. Trim Scenes entries in homepage.md

Remove entries 3, 4, and 5. Add one new entry pointing to the statistical
revival era (Era 5) as a "midpoint entry" for visitors who already know the
early history.

**New `docs/content/site/homepage.md` scenes.entries:**

```yaml
scenes:
  heading:
    eyebrow: Entry scenes
    title: Enter through scenes and texts
    description: The chronology stays central, but these routes let you begin with an origin scene, a paper trail, or a midpoint shortcut.
  entries:
    - href: /eras/precursors-to-machine-intelligence
      eyebrow: Story arc
      title: The machine question comes first.
      description: "Before AI has a field name, Boole, Babbage, Lovelace, and Turing force the harder question: can reasoning be formalized, mechanized, and executed?"
      imageRef: historical:lovelace-analytical-engine
      variant: feature
    - href: /reading-maps/intellectual-lineage
      eyebrow: Key papers
      title: Read the decisive texts.
      description: Follow the argument from Boole and Turing through transformers, RLHF, and interpretability in the documents that set each turn.
      variant: support
    - href: /eras/statistical-learning-and-network-revival
      eyebrow: Midpoint entry
      title: Skip to the neural revival.
      description: If you already know the precursor and symbolic eras, start where backpropagation and statistical learning change the game.
      variant: support
```

Note the updated heading: "scenes and texts" instead of "scenes, texts, and
institutions" — shorter, matches the reduced scope.

**Verify:**

```bash
npm run build
```

### 2. Adjust Scenes grid layout for 3 entries

With only 2 support entries instead of 4, the grid is simpler. Update
`ScenesSection` layout if needed.

**Changes to `components/content/home/scenes-section.tsx`:**

The `rightClassName` grid currently uses `sm:grid-cols-2 xl:grid-cols-3`.
With only 2 entries, change to `sm:grid-cols-2 xl:grid-cols-2` to prevent
an orphan column.

Also simplify `getScenesEntrySpanClass` — with no strip variant, it can
return a single span class:

```typescript
function getScenesEntrySpanClass(_entry: EditorialEntry, _index: number) {
  return "xl:col-span-1";
}
```

Or remove it entirely and let the grid flow naturally.

**Verify:**

```bash
npm run typecheck
npm run build
```

### 3. Slim Reading Model introductory framing

With the "branch and return" concept now surfaced in the Opening section
(Sprint 1, Task 10), the Reading Model section's heading can be more concise.

**Changes to `docs/content/site/homepage.md` readingModel:**

```yaml
readingModel:
  heading:
    eyebrow: Reading model
    title: Four companion routes.
    description: Chronology is the main line. These routes clarify specific questions as you move through it.
```

This replaces the current heading:

- Old title: "Branch without breaking the argument." (now in Opening)
- Old description: 62 words → new: 17 words

The rest of the Reading Model section (signals, CTA, promptBlock,
companionRoutes) stays unchanged.

**Verify:**

```bash
npm run build
```

### 4. Remove one Reading Model signal card

The Reading Model currently has 2 signal cards. With the core "branch and
return" concept moved to Opening, the "Main line" signal is redundant — it
restates what the compressed heading already says.

**Change in `docs/content/site/homepage.md` readingModel.signals:**

Remove the first signal ("Main line: Chronology carries the argument...").
Keep only:

```yaml
signals:
  - eyebrow: Return rule
    description: Branch to answer one question, then return to the era sequence before the thread breaks.
```

Check that `ReadingModelSection` handles a single-element signals array.
If it maps over the array, a single item is fine. If it destructures
two items, adjust to handle 1–2 items.

**Verify:**

```bash
npm run typecheck
npm run build
```

### 5. Heading audit and reduction

Count headings at this point and identify any remaining excess.

```bash
# Start dev server and count headings via Playwright
npx playwright test tests/browser/ --grep "heading" || true
```

If no heading-count test exists, add a quick assertion:

```typescript
// In the existing homepage test file, add:
const headingCount = await page.locator("h1, h2, h3, h4, h5, h6").count();
expect(headingCount).toBeLessThanOrEqual(26);
```

**Reduction targets if still above 26:**

- Remove `HomeSectionSplit` left-side micro-headings that act as labels
  rather than headings (change `<h*>` to `<p>` with `role="heading"` or
  just a styled `<p>`)
- Merge consecutive eyebrow + title headings into single elements

**Verify:** Heading count ≤ 26.

### 6. Verify no external image URLs on homepage

```bash
grep -n "https://" docs/content/site/homepage.md
```

Should return zero matches on any `imageRef`-related lines. (The
`imageRef` values now all resolve to local files via the narrative registry.)

Also confirm the rendered page has no external images:

```bash
# Quick check in narrative data for homepage-used entries
grep "imageUrl.*https" lib/narrative-data.ts | grep -E "openai|dartmouth"
```

Should return zero matches (replaced in Sprint 0).

**Verify:** Zero external image URLs for homepage content.

### 7. Full visual verification

Run the Playwright homepage test suite at all standard breakpoints:

```bash
npm run test:browser:homepage
```

Additionally, take manual screenshots at 1440 px and 390 px and compare
against the pre-Sprint-0 baseline:

**Checklist for visual review:**

- [ ] Era cards show images (7 visible in chronology)
- [ ] Section divider appears between Chronology and Reading Model
- [ ] Opening uses Babbage portrait (not Ada Lovelace duplicate)
- [ ] Ada Lovelace appears once (in Scenes feature card only)
- [ ] Scenes section has 3 entries (not 5)
- [ ] Reading Model section is visually lighter
- [ ] No broken images at any breakpoint
- [ ] Horizontal scroll on mobile still works for era cards
- [ ] Page height has increased (images add vertical space) but vertical
      rhythm feels more intentional

### 8. Run full quality suite

```bash
npm run format
npm run typecheck
npm run lint
npm run test
npm run build
```

All must pass.

## Completion Checklist

- [ ] Scenes entries reduced from 5 to 3 in `homepage.md`
- [ ] New "midpoint entry" card added for Era 5
- [ ] Scenes heading updated to match reduced scope
- [ ] Scenes grid layout adjusted for 2 support entries
- [ ] Reading Model heading compressed (redundant "branch" concept removed)
- [ ] Reading Model signal cards reduced from 2 to 1
- [ ] Heading count ≤ 26 (verified by DOM audit or test)
- [ ] Zero external image URLs on homepage
- [ ] All quality checks pass (format, typecheck, lint, test, build)
- [ ] Playwright screenshots confirm visual quality at 1440 px and 390 px
- [ ] No images appear more than once on the page
- [ ] Horizontal scroll works on mobile for era cards

## QA Summary (Complete After Implementation)

### Curatorial Issue Resolution

| #   | Issue                            | Status | How Resolved                                                    |
| --- | -------------------------------- | ------ | --------------------------------------------------------------- |
| 1   | Chronology has zero images       |        | 7 era images added to ChronologyCard                            |
| 2   | External images fragile          |        | OpenAI and Dartmouth images replaced with local generated art   |
| 3   | Scenes duplicates destinations   |        | Reduced from 5 to 3 entries; duplicates removed                 |
| 4   | No visual breathing room         |        | Full-bleed section divider between Chronology and Reading Model |
| 5   | Reading Model too late           |        | "Branch and return" concept surfaced in Opening signal card     |
| 6   | Ada Lovelace used twice          |        | Opening now uses Charles Babbage portrait                       |
| 7   | 37 headings (cognitive overload) |        | Heading count reduced to ≤ 26 through section simplification    |
