# Curatorial Enrichment — Spec

> **Status:** Planned

## Problem Statement

A curatorial audit of the 11-page site reveals that content coverage is heavily
skewed toward Era 7 (Foundation Models and Generative AI). The most important
figures in AI history — Turing, McCarthy, Minsky, Hinton — have no profile
entries. Eras 2–6 are "faceless hallways": text-only sections with no
portrait-backed NarrativeCards and no source-object anchors. Institutions
outside Era 7 are absent entirely. Two institution images use external CDN URLs
that will break in static export. Minor issues include a plural "Guides" label
for a single guide, an unused component, and no visual timeline on the Reading
Maps page.

### Evidence Table

| #   | Problem                                                     | Evidence                                                  | Impact                                                  |
| --- | ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| 1   | People coverage lopsided (7/8 profiles are Era 7)           | `peopleProfiles` array: Babbage (Era 1) + 7 × Era 7       | Eras 2–6 feel unpopulated; canonical AI figures missing |
| 2   | Historical anchors stop at Era 2                            | `historicalAnchors` array: 4 entries, all Era 1–2         | Eras 3–7 have zero source-object grounding              |
| 3   | Institutions only cover Era 7                               | `institutionProfiles` array: OpenAI, DeepMind, Anthropic  | No Bell Labs, MIT AI Lab, or DARPA representation       |
| 4   | External image URLs for DeepMind and Anthropic              | `lh3.googleusercontent.com`, `cdn.prod.website-files.com` | Will rot or break in static export                      |
| 5   | "Guides" navigation label is plural but only 1 guide exists | Site header nav and homepage                              | Sets false expectation of multiple guides               |
| 6   | `home-sequence-chart.tsx` is unused dead code               | No imports reference the component                        | Code hygiene; confuses contributors                     |
| 7   | No visual timeline on Reading Maps page                     | `reading-maps/intellectual-lineage/` has text only        | Missing the era-flow overview that would orient readers |

### What Is Working

- Era 7 coverage is comprehensive and well-curated.
- Existing portraits and generated illustrations are consistently high quality.
- The NarrativeProfile / HistoricalAnchor / GeneratedIllustration type system
  is clean and extensible.
- Image pipeline (`scripts/optimize-images.mjs`) handles JPG/PNG → WebP
  automatically.

---

## Design Goals

1. **Give every era at least one portrait-backed person profile.** Fill the
   "faceless hallway" gap so Eras 2–6 each have a key figure with a real
   photograph.

2. **Add historical anchors for Eras 3, 5, 6, and 7.** The Lighthill Report,
   backpropagation paper, ImageNet moment, and Transformer paper are the
   obvious source objects.

3. **Add institution profiles for Eras 2–5.** Bell Labs, MIT AI Lab (CSAIL),
   and DARPA/SRI cover the institutional landscape before the modern
   tech-company era.

4. **Eliminate all external image URLs.** Replace the DeepMind and Anthropic
   CDN URLs with locally served WebP files.

5. **Fix "Guides" singular/plural.** Change navigation label to "Guide" (or
   add a second guide in a future sprint).

6. **Remove dead code.** Delete `home-sequence-chart.tsx`.

7. **Add a Mermaid era-flow timeline** to the Reading Maps intellectual-lineage
   page.

---

## Available Assets (Pre-Acquired)

All images below are already downloaded, converted to WebP, and verified in the
repository. No further image acquisition is needed.

### New People Portraits (`public/media/wikimedia/`)

| File                     | Subject           | Era   | License                    | Resolution               |
| ------------------------ | ----------------- | ----- | -------------------------- | ------------------------ |
| `alan-turing.webp`       | Alan Turing       | Era 2 | Public domain              | 864×1194 → WebP          |
| `john-mccarthy.webp`     | John McCarthy     | Era 3 | CC BY-SA 2.0               | 960px wide → WebP        |
| `marvin-minsky.webp`     | Marvin Minsky     | Era 3 | CC BY 3.0                  | 960px wide → WebP        |
| `herbert-simon.webp`     | Herbert Simon     | Era 3 | Fair use (Carnegie Mellon) | 960px wide → WebP        |
| `edward-feigenbaum.webp` | Edward Feigenbaum | Era 4 | CC BY-SA 3.0               | 960px wide → WebP        |
| `frank-rosenblatt.webp`  | Frank Rosenblatt  | Era 5 | Public domain              | 350×455 → WebP           |
| `geoffrey-hinton.webp`   | Geoffrey Hinton   | Era 6 | CC BY 2.0                  | 960px wide → WebP        |
| `yann-lecun.webp`        | Yann LeCun        | Era 6 | CC BY-SA 4.0               | 960px wide → WebP        |
| `yoshua-bengio.webp`     | Yoshua Bengio     | Era 6 | CC BY-SA 4.0               | 960px wide → WebP        |
| `allen-newell.webp`      | Allen Newell      | Era 3 | Fair use (CMU)             | 360×273 → WebP (low-res) |

### New Institution Images (`public/media/wikimedia/`)

| File             | Subject                   | License      |
| ---------------- | ------------------------- | ------------ |
| `bell-labs.webp` | Bell Labs Holmdel Complex | CC BY-SA 3.0 |
| `mit-csail.webp` | MIT CSAIL building        | CC BY 2.0    |
| `darpa-hq.webp`  | DARPA headquarters        | CC BY-SA 3.0 |

### Localized External Images (`public/media/wikimedia/`)

| File                    | Replaces                         | Notes                        |
| ----------------------- | -------------------------------- | ---------------------------- |
| `deepmind-social.webp`  | `lh3.googleusercontent.com/...`  | Google DeepMind social image |
| `anthropic-social.webp` | `cdn.prod.website-files.com/...` | Anthropic social image       |

### New Generated Illustrations (`public/media/generated/`)

| File                         | Historical Anchor                    | Era   |
| ---------------------------- | ------------------------------------ | ----- |
| `lighthill-report.webp`      | 1973 Lighthill Report                | Era 4 |
| `backpropagation-paper.webp` | 1986 Backpropagation paper           | Era 5 |
| `imagenet-moment.webp`       | 2012 ImageNet / AlexNet breakthrough | Era 6 |
| `transformer-paper.webp`     | 2017 "Attention Is All You Need"     | Era 7 |

---

## Architecture

### Sprint Structure

The work is organized into three sprints:

**Sprint 0 — Data Layer Enrichment**
Add all new people profiles, institution profiles, and historical anchors to
`lib/narrative-data.ts`. Fix the two external image URLs. This sprint touches
only the data file and requires no component or page changes.

**Sprint 1 — People & Institutions Page + Era Pages Integration**
Wire the new profiles into the People & Institutions index page and into the
relevant era chapter pages. Ensure each era page surfaces its associated
people and historical anchors through the existing NarrativeCard component.

**Sprint 2 — Cleanup, Timeline, and QA**
Remove `home-sequence-chart.tsx`. Fix "Guides" → "Guide" in navigation. Add
a Mermaid-rendered era-flow timeline to the Reading Maps page. Run full test
suite and build verification.

### Files Changed

| Sprint | Files                                                                                                                                  |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 0      | `lib/narrative-data.ts`                                                                                                                |
| 1      | `app/people-and-institutions/page.tsx`, `app/eras/*/page.tsx` (7 files)                                                                |
| 2      | `components/content/home/home-sequence-chart.tsx` (delete), `lib/site-navigation.ts`, `app/reading-maps/intellectual-lineage/page.tsx` |

### Constraints

- No new dependencies. The Mermaid timeline will use a static rendered SVG via
  the existing `renderMermaidDiagram` tool, not a client-side library.
- All images are already acquired and optimized — no runtime image fetching.
- The existing NarrativeCard component is sufficient; no new components.
- Each sprint must pass `npm run build` and the existing test suite.

---

## Scorecard (Post-Implementation Targets)

| Dimension                                       | Current               | Target                     |
| ----------------------------------------------- | --------------------- | -------------------------- |
| People coverage (eras with ≥1 portrait)         | 2/7 (Era 1, 7)        | 7/7                        |
| Historical anchors (eras with ≥1 anchor)        | 2/7 (Era 1, 2)        | 6/7 (Era 1–7 except Era 3) |
| Institution coverage (eras with ≥1 institution) | 1/7 (Era 7)           | 4/7 (Era 2, 3–4, 5, 7)     |
| External image URLs                             | 2                     | 0                          |
| Dead code files                                 | 1                     | 0                          |
| Navigation label accuracy                       | "Guides" (misleading) | "Guide" (accurate)         |
| Reading Maps visual timeline                    | None                  | Mermaid SVG diagram        |
