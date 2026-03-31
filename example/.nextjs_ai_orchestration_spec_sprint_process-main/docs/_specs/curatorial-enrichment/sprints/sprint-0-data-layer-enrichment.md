# Sprint 0 — Data Layer Enrichment

> **Spec:** `docs/_specs/curatorial-enrichment/spec.md`
> **Scope:** Add all new narrative profiles, institution profiles, and
> historical anchors to `lib/narrative-data.ts`. Fix external image URLs.
> **No component or page changes in this sprint.**

---

## Pre-flight

```bash
# Verify all required image assets exist
ls public/media/wikimedia/{alan-turing,john-mccarthy,marvin-minsky,herbert-simon,edward-feigenbaum,frank-rosenblatt,geoffrey-hinton,yann-lecun,yoshua-bengio,bell-labs,mit-csail,darpa-hq,deepmind-social,anthropic-social}.webp
ls public/media/generated/{lighthill-report,backpropagation-paper,imagenet-moment,transformer-paper}.webp
```

---

## Task 1 — Add Alan Turing profile (Era 2)

**File:** `lib/narrative-data.ts` → `peopleProfiles` array

Add after the `charles-babbage` entry:

```ts
{
  slug: "alan-turing",
  name: "Alan Turing",
  era: "Era 2",
  kind: "person",
  role: "Computability theorist and wartime codebreaker",
  summary:
    "Turing formalized the concept of computation itself and asked whether machines could think, giving the field its foundational question.",
  story:
    "He connects the mathematical precursors to the institutional birth of AI. Without the Turing machine and the Turing test, the Dartmouth generation has no shared vocabulary.",
  officialUrl: "https://www.britannica.com/biography/Alan-Turing",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/alan-turing.webp",
  imageAlt: "Photograph of Alan Turing aged 16, Wikimedia Commons.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'alan-turing'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 2 — Add John McCarthy profile (Era 3)

Add to `peopleProfiles` after Turing:

```ts
{
  slug: "john-mccarthy",
  name: "John McCarthy",
  era: "Era 3",
  kind: "person",
  role: "Coined 'artificial intelligence' and led symbolic AI research",
  summary:
    "McCarthy named the field, organized the Dartmouth conference, and created LISP — the language that defined symbolic AI for decades.",
  story:
    "He is the bridge between the field-formation moment and the symbolic optimism era. Without McCarthy there is no Dartmouth, no LISP, and no institutional identity for AI research.",
  officialUrl: "https://www.britannica.com/biography/John-McCarthy",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/john-mccarthy.webp",
  imageAlt: "Photograph of John McCarthy at Stanford, Wikimedia Commons, CC BY-SA 2.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'john-mccarthy'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 3 — Add Marvin Minsky profile (Era 3)

Add to `peopleProfiles` after McCarthy:

```ts
{
  slug: "marvin-minsky",
  name: "Marvin Minsky",
  era: "Era 3",
  kind: "person",
  role: "Co-founder of MIT AI Lab and theorist of mind and machines",
  summary:
    "Minsky built the institutional home for AI at MIT and wrote 'The Society of Mind,' shaping how a generation thought about intelligence as emergent computation.",
  story:
    "He represents the institutional confidence of the symbolic era and co-authored (with Papert) the critique of perceptrons that shaped the field's trajectory for 15 years.",
  officialUrl: "https://www.britannica.com/biography/Marvin-Minsky",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/marvin-minsky.webp",
  imageAlt: "Photograph of Marvin Minsky, Wikimedia Commons, CC BY 3.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'marvin-minsky'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 4 — Add Herbert Simon profile (Era 3)

Add to `peopleProfiles` after Minsky:

```ts
{
  slug: "herbert-simon",
  name: "Herbert Simon",
  era: "Era 3",
  kind: "person",
  role: "Nobel laureate and co-creator of early AI programs",
  summary:
    "Simon (with Newell) built Logic Theorist and GPS — the first programs that proved theorems and solved problems, demonstrating that machines could reason.",
  story:
    "He brings the cognitive-science thread into the AI narrative: the claim that human thinking is itself information processing, and that programs can model it.",
  officialUrl: "https://www.britannica.com/biography/Herbert-A-Simon",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/herbert-simon.webp",
  imageAlt: "Photograph of Herbert Simon, Carnegie Mellon University archives.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'herbert-simon'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 5 — Add Edward Feigenbaum profile (Era 4)

Add to `peopleProfiles` after Simon:

```ts
{
  slug: "edward-feigenbaum",
  name: "Edward Feigenbaum",
  era: "Era 4",
  kind: "person",
  role: "Father of expert systems",
  summary:
    "Feigenbaum pioneered knowledge engineering and expert systems, turning AI from general-purpose ambition into domain-specific industrial tools.",
  story:
    "He is the key figure for understanding why AI pivoted from general intelligence claims to narrow, commercially viable expert systems — and why that pivot eventually hit a wall.",
  officialUrl: "https://www.britannica.com/biography/Edward-Albert-Feigenbaum",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/edward-feigenbaum.webp",
  imageAlt: "Photograph of Edward Feigenbaum, Wikimedia Commons, CC BY-SA 3.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'edward-feigenbaum'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 6 — Add Frank Rosenblatt profile (Era 5)

Add to `peopleProfiles` after Feigenbaum:

```ts
{
  slug: "frank-rosenblatt",
  name: "Frank Rosenblatt",
  era: "Era 5",
  kind: "person",
  role: "Inventor of the Perceptron",
  summary:
    "Rosenblatt built the first trainable neural network, the Perceptron, in 1958 — the ancestor of every modern deep learning system.",
  story:
    "His work was marginalized by the Minsky-Papert critique but vindicated by the statistical revival. He is the human bridge between the symbolic era's suppression of neural approaches and their eventual triumph.",
  officialUrl: "https://www.britannica.com/biography/Frank-Rosenblatt",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/frank-rosenblatt.webp",
  imageAlt: "Photograph of Frank Rosenblatt, public domain.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'frank-rosenblatt'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 7 — Add Geoffrey Hinton profile (Era 6)

Add to `peopleProfiles` after Rosenblatt:

```ts
{
  slug: "geoffrey-hinton",
  name: "Geoffrey Hinton",
  era: "Era 6",
  kind: "person",
  role: "Pioneer of deep learning and 2024 Nobel laureate",
  summary:
    "Hinton co-invented backpropagation for neural networks, championed deep learning through decades of skepticism, and demonstrated that neural networks could outperform all alternatives at scale.",
  story:
    "He is the human thread connecting the statistical revival (Era 5) to the deep learning breakthroughs (Era 6) to the foundation model era (Era 7). His 2024 Nobel Prize in Physics validated deep learning as fundamental science.",
  officialUrl: "https://www.britannica.com/biography/Geoffrey-Hinton",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/geoffrey-hinton.webp",
  imageAlt: "Photograph of Geoffrey Hinton at UBC, Wikimedia Commons, CC BY 2.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'geoffrey-hinton'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 8 — Add Yann LeCun profile (Era 6)

Add to `peopleProfiles` after Hinton:

```ts
{
  slug: "yann-lecun",
  name: "Yann LeCun",
  era: "Era 6",
  kind: "person",
  role: "Inventor of convolutional neural networks",
  summary:
    "LeCun designed ConvNets for image recognition, proved that deep architectures could learn useful representations from raw data, and led Meta AI.",
  story:
    "He is part of the 'deep learning trinity' with Hinton and Bengio. His work on convolutional networks is the direct ancestor of the computer vision revolution that made the ImageNet moment possible.",
  officialUrl: "https://www.britannica.com/biography/Yann-LeCun",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/yann-lecun.webp",
  imageAlt: "Photograph of Yann LeCun, Wikimedia Commons, CC BY-SA 4.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'yann-lecun'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 9 — Add Yoshua Bengio profile (Era 6)

Add to `peopleProfiles` after LeCun:

```ts
{
  slug: "yoshua-bengio",
  name: "Yoshua Bengio",
  era: "Era 6",
  kind: "person",
  role: "Deep learning theorist and attention mechanism pioneer",
  summary:
    "Bengio's work on language models, attention mechanisms, and representation learning laid the theoretical groundwork for the Transformer architecture and modern NLP.",
  story:
    "He completes the deep learning trinity and brings the safety-and-governance thread: alongside his technical work, Bengio has become one of the most prominent voices calling for AI regulation.",
  officialUrl: "https://www.britannica.com/biography/Yoshua-Bengio",
  officialLabel: "Britannica biography",
  imageUrl: "/media/wikimedia/yoshua-bengio.webp",
  imageAlt: "Photograph of Yoshua Bengio, Wikimedia Commons, CC BY-SA 4.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { peopleProfiles } from './lib/narrative-data'; const t = peopleProfiles.find(p => p.slug === 'yoshua-bengio'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 10 — Add Bell Labs institution profile (Era 2)

**File:** `lib/narrative-data.ts` → `institutionProfiles` array

Add at the beginning of the array (before OpenAI):

```ts
{
  slug: "bell-labs",
  name: "Bell Labs",
  era: "Era 2",
  kind: "institution",
  role: "Information theory birthplace and computing research hub",
  summary:
    "Bell Labs gave the world information theory (Shannon), the transistor, and early computing machines — the technical substrate on which AI was built.",
  story:
    "It teaches students that AI did not emerge from computer science departments alone. The field's preconditions were created in industrial research labs with broad mandates.",
  officialUrl: "https://www.bell-labs.com/about/history/",
  officialLabel: "Bell Labs history",
  imageUrl: "/media/wikimedia/bell-labs.webp",
  imageAlt: "Bell Labs Holmdel Complex, Wikimedia Commons, CC BY-SA 3.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { institutionProfiles } from './lib/narrative-data'; const t = institutionProfiles.find(p => p.slug === 'bell-labs'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 11 — Add MIT AI Lab institution profile (Era 3)

Add after Bell Labs:

```ts
{
  slug: "mit-ai-lab",
  name: "MIT AI Laboratory",
  era: "Era 3",
  kind: "institution",
  role: "Home of symbolic AI and hacker culture",
  summary:
    "The MIT AI Lab (now CSAIL) was the institutional home of Minsky, McCarthy, and a generation of researchers who believed intelligence could be programmed in symbolic logic.",
  story:
    "It represents the institutional confidence of the symbolic era — and the culture of open exploration (hacker ethic, LISP machines) that defined early AI research.",
  officialUrl: "https://www.csail.mit.edu/about",
  officialLabel: "MIT CSAIL about",
  imageUrl: "/media/wikimedia/mit-csail.webp",
  imageAlt: "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL) building, Wikimedia Commons, CC BY 2.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { institutionProfiles } from './lib/narrative-data'; const t = institutionProfiles.find(p => p.slug === 'mit-ai-lab'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 12 — Add DARPA institution profile (Era 5)

Add after MIT AI Lab:

```ts
{
  slug: "darpa",
  name: "DARPA",
  era: "Era 5",
  kind: "institution",
  role: "Federal R&D funder that sustained AI through winters",
  summary:
    "DARPA funded AI research when no one else would — from early speech recognition to autonomous vehicles — keeping the field alive through its winters.",
  story:
    "It teaches that government funding and military interest were structural preconditions for AI's survival. The field did not run on curiosity alone.",
  officialUrl: "https://www.darpa.mil/about/about-darpa",
  officialLabel: "DARPA about",
  imageUrl: "/media/wikimedia/darpa-hq.webp",
  imageAlt: "DARPA headquarters building, Wikimedia Commons, CC BY-SA 3.0.",
  socialLinks: [],
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { institutionProfiles } from './lib/narrative-data'; const t = institutionProfiles.find(p => p.slug === 'darpa'); console.log(t ? 'OK: ' + t.name + ' / ' + t.era : 'MISSING')"
```

---

## Task 13 — Fix DeepMind external image URL

**File:** `lib/narrative-data.ts` → `institutionProfiles` → `google-deepmind`

Replace:

```ts
imageUrl:
  "https://lh3.googleusercontent.com/IKFFuhFkZzhLkWnElU90rLqcyTzNc0awe-ivw6S1nt9tVovfLLE4e4dlESx3p06fJPAz-rUUPLmB9VuBX_UV1h9C-AwRY6uBSErjz2gVhuGXed1jxg=w1200-h630-n-nu-rw",
```

With:

```ts
imageUrl: "/media/wikimedia/deepmind-social.webp",
```

**Verify:**

```bash
npx tsx -e "import { institutionProfiles } from './lib/narrative-data'; const t = institutionProfiles.find(p => p.slug === 'google-deepmind'); console.log(t?.imageUrl?.startsWith('/media/') ? 'OK: local path' : 'FAIL: still external')"
```

---

## Task 14 — Fix Anthropic external image URL

Replace:

```ts
imageUrl:
  "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/68309ab48369f7ad9b4a40e1_open-graph.jpg",
```

With:

```ts
imageUrl: "/media/wikimedia/anthropic-social.webp",
```

**Verify:**

```bash
npx tsx -e "import { institutionProfiles } from './lib/narrative-data'; const t = institutionProfiles.find(p => p.slug === 'anthropic'); console.log(t?.imageUrl?.startsWith('/media/') ? 'OK: local path' : 'FAIL: still external')"
```

---

## Task 15 — Add Lighthill Report historical anchor (Era 4)

**File:** `lib/narrative-data.ts` → `historicalAnchors` array

Add after the `boole-to-turing` entry:

```ts
{
  slug: "lighthill-report",
  era: "Era 4",
  title: "The Lighthill Report and the first AI winter",
  summary:
    "James Lighthill's 1973 report to the British Science Research Council declared that AI had failed to deliver on its promises, triggering funding cuts across the UK and casting doubt worldwide.",
  officialUrl: "https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/overview.htm",
  officialLabel: "Lighthill Report archive",
  imageUrl: "/media/generated/lighthill-report.webp",
  imageAlt: "Illustration of the 1973 Lighthill Report, a formal British government document that triggered the first AI winter.",
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { historicalAnchors } from './lib/narrative-data'; const t = historicalAnchors.find(a => a.slug === 'lighthill-report'); console.log(t ? 'OK: ' + t.title : 'MISSING')"
```

---

## Task 16 — Add Backpropagation paper historical anchor (Era 5)

```ts
{
  slug: "backpropagation-paper",
  era: "Era 5",
  title: "Learning representations by back-propagating errors",
  summary:
    "Rumelhart, Hinton, and Williams published the modern formulation of backpropagation in 1986, giving neural networks a practical training algorithm and reigniting interest after the AI winter.",
  officialUrl: "https://www.nature.com/articles/323533a0",
  officialLabel: "Nature 1986 paper",
  imageUrl: "/media/generated/backpropagation-paper.webp",
  imageAlt: "Illustration of the 1986 backpropagation paper showing neural network diagrams with forward and backward arrows.",
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { historicalAnchors } from './lib/narrative-data'; const t = historicalAnchors.find(a => a.slug === 'backpropagation-paper'); console.log(t ? 'OK: ' + t.title : 'MISSING')"
```

---

## Task 17 — Add ImageNet moment historical anchor (Era 6)

```ts
{
  slug: "imagenet-moment",
  era: "Era 6",
  title: "The ImageNet moment — AlexNet proves deep learning at scale",
  summary:
    "In 2012, Krizhevsky, Sutskever, and Hinton's AlexNet crushed the ImageNet competition by 10+ percentage points using a deep convolutional neural network trained on GPUs, proving that depth and data beat handcrafted features.",
  officialUrl: "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
  officialLabel: "NeurIPS 2012 paper",
  imageUrl: "/media/generated/imagenet-moment.webp",
  imageAlt: "Illustration of the 2012 ImageNet breakthrough showing classified images with confidence scores and neural network architecture.",
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { historicalAnchors } from './lib/narrative-data'; const t = historicalAnchors.find(a => a.slug === 'imagenet-moment'); console.log(t ? 'OK: ' + t.title : 'MISSING')"
```

---

## Task 18 — Add Transformer paper historical anchor (Era 7)

```ts
{
  slug: "transformer-paper",
  era: "Era 7",
  title: "Attention Is All You Need — the Transformer architecture",
  summary:
    "Vaswani et al. introduced the Transformer in 2017, replacing recurrence with self-attention and enabling the parallelism that made GPT, BERT, and every modern foundation model possible.",
  officialUrl: "https://arxiv.org/abs/1706.03762",
  officialLabel: "arXiv paper",
  imageUrl: "/media/generated/transformer-paper.webp",
  imageAlt: "Illustration of the Transformer architecture from the 2017 'Attention Is All You Need' paper.",
  sourceRecord: "",
},
```

**Verify:**

```bash
npx tsx -e "import { historicalAnchors } from './lib/narrative-data'; const t = historicalAnchors.find(a => a.slug === 'transformer-paper'); console.log(t ? 'OK: ' + t.title : 'MISSING')"
```

---

## Task 19 — Add generated illustrations for new anchors

**File:** `lib/narrative-data.ts` → `generatedIllustrations` array

Add four entries at the end of the array:

```ts
{
  slug: "lighthill-report",
  imageUrl: "/media/generated/lighthill-report.webp",
  imageAlt: "Illustration of the 1973 Lighthill Report on artificial intelligence.",
},
{
  slug: "backpropagation-paper",
  imageUrl: "/media/generated/backpropagation-paper.webp",
  imageAlt: "Illustration of the 1986 backpropagation paper with neural network diagrams.",
},
{
  slug: "imagenet-moment",
  imageUrl: "/media/generated/imagenet-moment.webp",
  imageAlt: "Illustration of the 2012 ImageNet/AlexNet breakthrough in computer vision.",
},
{
  slug: "transformer-paper",
  imageUrl: "/media/generated/transformer-paper.webp",
  imageAlt: "Illustration of the 2017 Transformer architecture paper.",
},
```

**Verify:**

```bash
npx tsx -e "import { generatedIllustrations } from './lib/narrative-data'; console.log('Total illustrations:', generatedIllustrations.length); const expected = ['lighthill-report','backpropagation-paper','imagenet-moment','transformer-paper']; expected.forEach(s => { const f = generatedIllustrations.find(i => i.slug === s); console.log(f ? 'OK: ' + s : 'MISSING: ' + s); })"
```

---

## Final Verification

```bash
# TypeScript compiles
npx tsc --noEmit

# No external URLs remain in narrative-data
grep -c 'https://' lib/narrative-data.ts | awk '{if ($1 > 0) print "WARNING: external URLs still present"; else print "OK: no external URLs in image fields"}'

# Build succeeds
npm run build

# Tests pass
npm run test
```
