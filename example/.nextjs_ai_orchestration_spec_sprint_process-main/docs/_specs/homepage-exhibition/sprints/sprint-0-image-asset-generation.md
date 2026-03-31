# Sprint 0 — Image Asset Generation & Pipeline

## Header

- **Goal:** Generate all era illustrations and the section divider image using
  the `eai` CLI tool. Localize external images referenced on the homepage.
  Update the image focus map. This sprint is pure asset preparation — no
  component code changes.
- **Spec sections:** Design goals 1, 2, 6; Architecture (Image Asset Pipeline)
- **Prerequisite:** None

## Available Assets

| Asset                              | Location                          | Current State                                                                                                                                     |
| ---------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eai` CLI tool                     | `/Users/kwilliams/.local/bin/eai` | EverydayAI CLI with `image` command (gpt-image-1 model). Supports `--size`, `--quality`, `-o` output path, `--no-enhance`.                        |
| `public/media/generated/`          | public/media/generated/           | Contains 1 file: `latent-space-landscape-v1.webp`                                                                                                 |
| `public/media/wikimedia/`          | public/media/wikimedia/           | Contains 10 portrait photos (Ada Lovelace, Babbage, Shannon, Boole, etc.)                                                                         |
| `scripts/generate-image-focus.mjs` | scripts/                          | Generates `lib/generated/image-focus-map.ts` with focal-point data for all images in `public/media/`                                              |
| `lib/generated/image-focus-map.ts` | lib/generated/                    | Current focus map; needs regeneration after new images are added                                                                                  |
| `lib/narrative-data.ts`            | lib/                              | Contains `institutionProfiles` with external `imageUrl` for OpenAI (ctfassets CDN) and `historicalAnchors` with external `imageUrl` for Dartmouth |
| `docs/content/site/homepage.md`    | docs/content/site/                | References `institution:openai` (external, broken on mobile) and `historical:dartmouth-proposal` (external)                                       |

## External Images To Localize

| imageRef                        | Current URL                                                                                                                               | Problem                                                      |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `institution:openai`            | `https://images.ctfassets.net/kftzwdyauwt9/7fnM7WwfGlji0mE0t8DefO/cc161016b8d84fd6d789b06c92416544/stangel-openAI-offices-2022-1714.webp` | Broken on mobile (naturalWidth: 0). External CDN dependency. |
| `historical:dartmouth-proposal` | `https://home.dartmouth.edu/sites/home/files/styles/media_grid_landscape/public/2022-10/artificial-intelligence.png`                      | External institutional URL. Could rot without warning.       |

**Resolution:** Generate replacement images locally using `eai image` rather
than downloading copyrighted external images. The OpenAI office image is a
third-party photo; the Dartmouth image is from their institutional site. Both
should be replaced with original AI-generated illustrations that evoke the same
historical moments without copyright concerns.

## Tasks

### 1. Generate Era 1 image: Precursors to Machine Intelligence

A warm-toned illustration depicting the dawn of mechanical reasoning — gears,
analytical engine components, handwritten mathematical notation, and the idea
of formalizing thought.

```bash
eai image "A warm-toned historical illustration of mechanical computation origins. Victorian-era brass gears and analytical engine components arranged on aged parchment alongside handwritten mathematical notation. The scene evokes Babbage and Lovelace's vision of mechanized reasoning. Muted warm palette: cream, amber, deep brown. Museum exhibition quality, detailed, atmospheric." --size 1536x1024 --quality high -o public/media/generated/era-1-precursors.webp
```

**Verify:** `ls -la public/media/generated/era-1-precursors.webp`

### 2. Generate Era 2 image: Field Formation

The moment AI becomes a named field — Turing, Shannon, information theory
diagrams, the conceptual bridge from logic to computation.

```bash
eai image "A warm-toned illustration of computation and information theory circa 1940s-1950s. Circuit diagrams, Turing machine tape fragments, and information-theoretic flow diagrams overlaid on graph paper. A sense of intellectual breakthrough: abstract mathematical ideas becoming engineering blueprints. Muted warm palette: cream, ochre, slate gray. Museum exhibition quality, detailed." --size 1536x1024 --quality high -o public/media/generated/era-2-field-formation.webp
```

**Verify:** `ls -la public/media/generated/era-2-field-formation.webp`

### 3. Generate Era 3 image: Symbolic Programs

The optimistic early AI era — symbolic logic, theorem proving, the Logic
Theorist and GPS programs.

```bash
eai image "A warm-toned illustration of early symbolic artificial intelligence. Formal logic trees branching on a chalkboard, punch cards fanned out, and a 1960s mainframe terminal glowing softly. The mood is intellectual optimism: the first programs that reason. Muted warm palette: cream, forest green accents, warm brown. Museum exhibition quality, detailed." --size 1536x1024 --quality high -o public/media/generated/era-3-symbolic-programs.webp
```

**Verify:** `ls -la public/media/generated/era-3-symbolic-programs.webp`

### 4. Generate Era 4 image: Expert Systems & First AI Winter

Knowledge systems, growing critique, and the cooling of confidence.

```bash
eai image "A warm-toned illustration representing the first AI winter and expert systems era. A decision tree diagram with some branches fading into shadow. Rule-based flowcharts on yellowed paper, with edges curling. A sense of ambition meeting limits: confident systems encountering the world's complexity. Muted warm palette: parchment, rust, cool gray shadows. Museum exhibition quality, atmospheric." --size 1536x1024 --quality high -o public/media/generated/era-4-expert-systems.webp
```

**Verify:** `ls -la public/media/generated/era-4-expert-systems.webp`

### 5. Generate Era 5 image: Statistical Revival

Backpropagation, probability, and the return of neural networks.

```bash
eai image "A warm-toned illustration of statistical learning and neural network revival. Layered neural network diagrams with weighted connections glowing amber. Probability distribution curves, gradient descent arrows descending a loss landscape. The mood is renewal: ideas once abandoned finding new ground. Muted warm palette: cream, copper, deep teal accents. Museum exhibition quality, detailed." --size 1536x1024 --quality high -o public/media/generated/era-5-statistical-revival.webp
```

**Verify:** `ls -la public/media/generated/era-5-statistical-revival.webp`

### 6. Generate Era 6 image: Deep Learning Breakthroughs

ImageNet, GPUs, deep architectures, the transformer turning point.

```bash
eai image "A warm-toned illustration of the deep learning revolution. Stacked neural network layers rendered as translucent horizontal planes with data flowing downward. On one side, a grid of image classification thumbnails. On the other, the attention mechanism pattern of a transformer architecture. The mood is scale and power. Muted warm palette: cream, electric amber, deep charcoal. Museum exhibition quality, detailed." --size 1536x1024 --quality high -o public/media/generated/era-6-deep-learning.webp
```

**Verify:** `ls -la public/media/generated/era-6-deep-learning.webp`

### 7. Generate Era 7 image: Foundation Models & Generative AI

Public deployment, foundation models, the current horizon.

```bash
eai image "A warm-toned illustration of the foundation model and generative AI era. A large language model visualization: concentric rings of token embeddings radiating outward, with human silhouettes at the periphery interacting through chat interfaces. Multimodal streams (text, image, audio) converging into a central latent space. The mood is public encounter with intelligence. Muted warm palette: cream, warm white, burnt sienna accents, deep navy. Museum exhibition quality." --size 1536x1024 --quality high -o public/media/generated/era-7-foundation-models.webp
```

**Verify:** `ls -la public/media/generated/era-7-foundation-models.webp`

### 8. Generate section divider image

A full-bleed atmospheric image to create breathing room between Chronology
and Reading Model sections.

```bash
eai image "A wide atmospheric landscape representing the passage of intellectual time. Abstract flowing lines suggesting a timeline or river of ideas moving from left to right, transitioning from warm amber tones on the left to cooler slate tones on the right. Minimal, contemplative, museum-quality. No text, no figures. Warm gradient: cream, gold, slate, deep blue-gray." --size 1536x1024 --quality high -o public/media/generated/section-divider-chronology.webp
```

**Verify:** `ls -la public/media/generated/section-divider-chronology.webp`

### 9. Generate replacement for Dartmouth external image

Replace the external Dartmouth institutional image with an original
illustration of the Dartmouth moment.

```bash
eai image "A warm-toned historical illustration of the 1956 Dartmouth Summer Research Project on Artificial Intelligence. A New England campus building in summer, with a small group of academics gathered around a seminar table visible through an open window. Mathematical notation and the typed proposal document visible on the table. The mood is intellectual ambition: the moment a field gets its name. Muted warm palette: cream, sage green, warm brown. Museum exhibition quality." --size 1536x1024 --quality high -o public/media/generated/dartmouth-proposal.webp
```

**Verify:** `ls -la public/media/generated/dartmouth-proposal.webp`

### 10. Generate replacement for OpenAI external image

Replace the broken external OpenAI office photo with an original illustration
representing OpenAI's role in the public AI turn.

```bash
eai image "A warm-toned illustration representing OpenAI and the public AI deployment era. A modern glass-walled research office seen at dusk, with screens showing chat interfaces, model dashboards, and deployment metrics. The mood is consequential: frontier AI meeting the public for the first time. Muted warm palette: cream, steel blue, warm amber from interior lighting. Museum exhibition quality." --size 1536x1024 --quality high -o public/media/generated/openai-public-ai.webp
```

**Verify:** `ls -la public/media/generated/openai-public-ai.webp`

### 11. Update narrative-data.ts: Replace external image URLs

Change the `imageUrl` entries for `institution:openai` and
`historical:dartmouth-proposal` to point to the new local images.

**Changes to `lib/narrative-data.ts`:**

In the `institutionProfiles` array, `openai` entry:

```typescript
// Before:
imageUrl: "https://images.ctfassets.net/kftzwdyauwt9/7fnM7WwfGlji0mE0t8DefO/cc161016b8d84fd6d789b06c92416544/stangel-openAI-offices-2022-1714.webp?w=1920&q=90&fm=webp",
// After:
imageUrl: "/media/generated/openai-public-ai.webp",
```

In the `historicalAnchors` array, `dartmouth-proposal` entry:

```typescript
// Before:
imageUrl: "https://home.dartmouth.edu/sites/home/files/styles/media_grid_landscape/public/2022-10/artificial-intelligence.png?h=e70e10e6&itok=127Ti6t3",
// After:
imageUrl: "/media/generated/dartmouth-proposal.webp",
```

**Verify:**

```bash
grep -n "https://" lib/narrative-data.ts | grep -i "imageUrl"
```

Should return zero matches for imageUrl lines with `https://` in the
OpenAI and Dartmouth entries. (Other institution entries like Google DeepMind
and Anthropic retain their external URLs since they are not used on the
homepage — those are addressed in a separate workstream if needed.)

### 12. Regenerate image focus map

Run the image focus generation script to pick up all new images.

```bash
node scripts/generate-image-focus.mjs
```

**Verify:**

```bash
grep "era-1-precursors" lib/generated/image-focus-map.ts
grep "section-divider" lib/generated/image-focus-map.ts
grep "dartmouth-proposal" lib/generated/image-focus-map.ts
grep "openai-public-ai" lib/generated/image-focus-map.ts
```

All four greps should return matches.

### 13. Run format and quality checks

```bash
npm run format
npm run typecheck
npm run lint
npm run test
npm run build
```

All must pass. The build confirms that no code references a missing image.

## Completion Checklist

- [ ] 7 era images generated in `public/media/generated/` (era-1 through era-7)
- [ ] 1 section divider image generated in `public/media/generated/`
- [ ] 1 Dartmouth replacement image generated in `public/media/generated/`
- [ ] 1 OpenAI replacement image generated in `public/media/generated/`
- [ ] `lib/narrative-data.ts` updated: OpenAI imageUrl points to local file
- [ ] `lib/narrative-data.ts` updated: Dartmouth imageUrl points to local file
- [ ] `lib/generated/image-focus-map.ts` regenerated with all new images
- [ ] `npm run format` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run test` passes
- [ ] `npm run build` succeeds
