export type SocialLink = {
  label: string;
  href: string;
};

export type NarrativeProfile = {
  slug: string;
  name: string;
  era: string;
  kind: "person" | "institution";
  role: string;
  summary: string;
  story: string;
  officialUrl: string;
  officialLabel: string;
  imageUrl?: string;
  imageAlt?: string;
  socialLinks?: SocialLink[];
  sourceRecord: string;
};

export type HistoricalAnchor = {
  slug: string;
  era: string;
  title: string;
  summary: string;
  officialUrl: string;
  officialLabel: string;
  imageUrl?: string;
  imageAlt?: string;
  sourceRecord: string;
};

export const peopleProfiles: NarrativeProfile[] = [
  {
    slug: "charles-babbage",
    name: "Charles Babbage",
    era: "Era 1",
    kind: "person",
    role: "Mechanical computation pioneer",
    summary:
      "Babbage designed the Analytical Engine, the machine Lovelace saw could manipulate symbols beyond arithmetic.",
    story:
      "His engineering vision becomes the physical substrate for the precursor era.",
    officialUrl: "https://www.britannica.com/biography/Charles-Babbage",
    officialLabel: "Britannica biography",
    imageUrl: "/media/wikimedia/charles-babbage.webp",
    imageAlt: "Wikimedia Commons portrait of Charles Babbage.",
    socialLinks: [],
    sourceRecord: "",
  },
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
  {
    slug: "claude-shannon",
    name: "Claude Shannon",
    era: "Era 2",
    kind: "person",
    role: "Father of information theory",
    summary:
      "Shannon linked Boolean logic to electrical circuits and founded information theory, giving the field a formal language for communication, signals, and uncertainty.",
    story:
      "He makes the period legible as engineering, not only theory. Without information theory, the Dartmouth generation cannot measure or communicate what their machines process.",
    officialUrl: "https://www.britannica.com/biography/Claude-Shannon",
    officialLabel: "Britannica biography",
    imageUrl: "/media/wikimedia/claude-shannon.webp",
    imageAlt: "Wikimedia Commons portrait of Claude Shannon.",
    socialLinks: [],
    sourceRecord: "",
  },
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
    imageAlt:
      "Photograph of John McCarthy at Stanford, Wikimedia Commons, CC BY-SA 2.0.",
    socialLinks: [],
    sourceRecord: "",
  },
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
    imageAlt:
      "Photograph of Herbert Simon, Carnegie Mellon University archives.",
    socialLinks: [],
    sourceRecord: "",
  },
  {
    slug: "allen-newell",
    name: "Allen Newell",
    era: "Era 3",
    kind: "person",
    role: "Co-creator of Logic Theorist and pioneer of cognitive architectures",
    summary:
      "Newell (with Simon) built Logic Theorist and the General Problem Solver, then spent decades trying to unify AI under a single theory of cognition.",
    story:
      "He represents the ambition to make AI a true science of mind — not just a bag of tricks but a unified architecture. That ambition shaped and then haunted the symbolic tradition.",
    officialUrl: "https://www.britannica.com/biography/Allen-Newell",
    officialLabel: "Britannica biography",
    imageUrl: "/media/wikimedia/allen-newell.webp",
    imageAlt:
      "Photograph of Allen Newell, Carnegie Mellon University archives.",
    socialLinks: [],
    sourceRecord: "",
  },
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
    officialUrl:
      "https://www.britannica.com/biography/Edward-Albert-Feigenbaum",
    officialLabel: "Britannica biography",
    imageUrl: "/media/wikimedia/edward-feigenbaum.webp",
    imageAlt:
      "Photograph of Edward Feigenbaum, Wikimedia Commons, CC BY-SA 3.0.",
    socialLinks: [],
    sourceRecord: "",
  },
  {
    slug: "marvin-minsky-era4",
    name: "Marvin Minsky",
    era: "Era 4",
    kind: "person",
    role: "Co-author of the Perceptrons critique and MIT AI Lab leader",
    summary:
      "Minsky and Papert's 1969 'Perceptrons' demonstrated limits of single-layer networks, redirecting AI funding away from neural approaches for over a decade.",
    story:
      "His critique of neural networks is one of the most consequential acts in AI history — it shaped which research got funded and which got starved, setting the stage for the first AI winter.",
    officialUrl: "https://www.britannica.com/biography/Marvin-Minsky",
    officialLabel: "Britannica biography",
    imageUrl: "/media/wikimedia/marvin-minsky.webp",
    imageAlt: "Photograph of Marvin Minsky, Wikimedia Commons, CC BY 3.0.",
    socialLinks: [],
    sourceRecord: "",
  },
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
    imageAlt:
      "Photograph of Geoffrey Hinton at UBC, Wikimedia Commons, CC BY 2.0.",
    socialLinks: [],
    sourceRecord: "",
  },
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
  {
    slug: "andrej-karpathy",
    name: "Andrej Karpathy",
    era: "Era 7",
    kind: "person",
    role: "Public technical educator and frontier-model researcher",
    summary:
      "Karpathy makes the modern AI stack legible to a broad audience while still sitting inside the frontier-model research world.",
    story:
      "He is historically useful because Era 7 is not only about building systems. It is also about who explains them, teaches them, and makes them memorable for the public.",
    officialUrl: "https://karpathy.ai/",
    officialLabel: "Official site",
    imageUrl: "/media/wikimedia/andrej-karpathy.webp",
    imageAlt: "Wikimedia Commons portrait of Andrej Karpathy.",
    socialLinks: [
      { label: "X", href: "https://twitter.com/karpathy" },
      { label: "GitHub", href: "https://github.com/karpathy" },
      { label: "YouTube", href: "https://www.youtube.com/@AndrejKarpathy" },
    ],
    sourceRecord: "docs/content/media/records/andrej-karpathy-portrait.md",
  },
  {
    slug: "ilya-sutskever",
    name: "Ilya Sutskever",
    era: "Era 7",
    kind: "person",
    role: "Research-lineage figure connecting deep learning, OpenAI, and SSI",
    summary:
      "Sutskever anchors the line from the deep-learning revival into large-model scaling and the later SSI safety-capability framing.",
    story:
      "He matters because the current era is shaped by researcher movement and institution-building, not only by product releases.",
    officialUrl: "https://ssi.inc/",
    officialLabel: "SSI mission page",
    imageUrl: "/media/wikimedia/ilya-sutskever.webp",
    imageAlt: "Wikimedia Commons portrait crop of Ilya Sutskever.",
    sourceRecord: "docs/content/media/records/ilya-sutskever-portrait.md",
  },
  {
    slug: "demis-hassabis",
    name: "Demis Hassabis",
    era: "Era 7",
    kind: "person",
    role: "Leader of the science-and-general-systems branch of modern AI",
    summary:
      "Hassabis keeps the current era broader than chat by tying it to DeepMind, AlphaFold, and long-horizon general AI research.",
    story:
      "He helps the site teach that the public era includes scientific discovery, model architecture, and institution-building alongside assistants and search.",
    officialUrl: "https://deepmind.google/about/",
    officialLabel: "Google DeepMind about",
    imageUrl: "/media/wikimedia/demis-hassabis.webp",
    imageAlt: "Wikimedia Commons portrait of Demis Hassabis.",
    sourceRecord: "docs/content/media/records/demis-hassabis-portrait.md",
  },
  {
    slug: "sam-altman",
    name: "Sam Altman",
    era: "Era 7",
    kind: "person",
    role: "Executive figure for public deployment and AGI framing",
    summary:
      "Altman makes deployment legible as a historical choice made by institutions rather than as an automatic consequence of model capability.",
    story:
      "His role helps teach the transition from research system to public infrastructure, with governance claims attached from the start.",
    officialUrl: "https://openai.com/about/",
    officialLabel: "OpenAI about",
    imageUrl: "/media/wikimedia/sam-altman.webp",
    imageAlt: "Wikimedia Commons portrait of Sam Altman.",
    sourceRecord: "docs/content/media/records/sam-altman-portrait.md",
  },
  {
    slug: "dario-amodei",
    name: "Dario Amodei",
    era: "Era 7",
    kind: "person",
    role: "Safety-and-scaling leader at a frontier-model company",
    summary:
      "Amodei helps connect responsible scaling, constitutional AI, and frontier-model institution building.",
    story:
      "He matters because safety in Era 7 is not only a critique from outside the labs. It is also part of how some labs narrate themselves.",
    officialUrl: "https://www.anthropic.com/company",
    officialLabel: "Anthropic company",
    imageUrl: "/media/wikimedia/dario-amodei.webp",
    imageAlt: "Wikimedia Commons portrait of Dario Amodei.",
    sourceRecord: "docs/content/media/records/dario-amodei-portrait.md",
  },
  {
    slug: "eliezer-yudkowsky",
    name: "Eliezer Yudkowsky",
    era: "Era 7",
    kind: "person",
    role: "Pre-LLM alignment and existential-risk figure",
    summary:
      "Yudkowsky keeps the current era tied to older alignment and instrumental-convergence arguments that still shape safety vocabulary.",
    story:
      "He helps show that the safety thread did not begin with ChatGPT. It arrives with its own institutions, research agenda, and public rhetoric.",
    officialUrl: "https://intelligence.org/people/eliezer-yudkowsky/",
    officialLabel: "MIRI profile",
    imageUrl: "/media/wikimedia/eliezer-yudkowsky.webp",
    imageAlt: "Wikimedia Commons portrait of Eliezer Yudkowsky.",
    sourceRecord: "docs/content/media/records/eliezer-yudkowsky-portrait.md",
  },
];

export const institutionProfiles: NarrativeProfile[] = [
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
    imageAlt:
      "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL) building, Wikimedia Commons, CC BY 2.0.",
    socialLinks: [],
    sourceRecord: "",
  },
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
  {
    slug: "openai",
    name: "OpenAI",
    era: "Era 7",
    kind: "institution",
    role: "Research-and-deployment institution behind the public AI turn",
    summary:
      "OpenAI matters because it turns frontier-model capability into mass public interface and product infrastructure.",
    story:
      "This is one of the clearest cases where deployment itself becomes a historical fact, not merely a technical consequence.",
    officialUrl: "https://openai.com/about/",
    officialLabel: "OpenAI about",
    imageUrl: "/media/generated/openai-public-ai.webp",
    imageAlt:
      "Illustration of a modern AI research office at dusk representing the public AI deployment era.",
    socialLinks: [
      { label: "X", href: "https://x.com/OpenAI" },
      { label: "YouTube", href: "https://www.youtube.com/OpenAI" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/openai" },
      { label: "GitHub", href: "https://github.com/openai" },
      { label: "Instagram", href: "https://www.instagram.com/openai/" },
    ],
    sourceRecord: "docs/content/media/records/openai-institution-image.md",
  },
  {
    slug: "google-deepmind",
    name: "Google DeepMind",
    era: "Era 7",
    kind: "institution",
    role: "Science, models, and responsibility at frontier scale",
    summary:
      "Google DeepMind keeps the modern story broader than chat by foregrounding AlphaFold, Gemini, and the Brain/DeepMind merger.",
    story:
      "It gives the site a way to teach the current era through science, infrastructure, and institutional continuity as well as through assistants.",
    officialUrl: "https://deepmind.google/about/",
    officialLabel: "Google DeepMind about",
    imageUrl: "/media/wikimedia/deepmind-social.webp",
    imageAlt: "Google DeepMind official about-page social image.",
    socialLinks: [
      { label: "X", href: "https://x.com/googledeepmind" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/googledeepmind",
      },
      { label: "YouTube", href: "https://www.youtube.com/@googledeepmind" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/googledeepmind/",
      },
      { label: "GitHub", href: "https://github.com/google-deepmind" },
    ],
    sourceRecord:
      "docs/content/media/records/google-deepmind-institution-image.md",
  },
  {
    slug: "anthropic",
    name: "Anthropic",
    era: "Era 7",
    kind: "institution",
    role: "Safety-first frontier-model company",
    summary:
      "Anthropic matters because reliability, interpretability, and steerability are part of the company narrative, not only part of the critique around it.",
    story:
      "It helps the site teach that safety becomes organizational posture as well as technical work during the public foundation-model era.",
    officialUrl: "https://www.anthropic.com/company",
    officialLabel: "Anthropic company",
    imageUrl: "/media/wikimedia/anthropic-social.webp",
    imageAlt: "Anthropic official company social image.",
    socialLinks: [
      { label: "X", href: "https://x.com/AnthropicAI" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/anthropicresearch",
      },
      { label: "YouTube", href: "https://www.youtube.com/@anthropic-ai" },
    ],
    sourceRecord: "docs/content/media/records/anthropic-institution-image.md",
  },
];

export const historicalAnchors: HistoricalAnchor[] = [
  {
    slug: "dartmouth-proposal",
    era: "Era 2",
    title: "Dartmouth proposal and naming moment",
    summary:
      "The 1956 Dartmouth Summer Research Project brought together the researchers who named artificial intelligence as a field, marking the moment when scattered threads of computation, logic, and learning became a shared research agenda.",
    officialUrl:
      "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
    officialLabel: "Dartmouth history page",
    imageUrl: "/media/generated/dartmouth-proposal.webp",
    imageAlt:
      "Illustration of the 1956 Dartmouth Summer Research Project where AI was named as a field.",
    sourceRecord: "docs/content/media/records/dartmouth-proposal-image.md",
  },
  {
    slug: "shannon-theseus",
    era: "Era 2",
    title: "Claude Shannon and the Theseus machine story",
    summary:
      "Claude Shannon built Theseus, a maze-solving electromechanical mouse, in 1950 — one of the earliest physical demonstrations that a machine could appear to learn from experience.",
    officialUrl:
      "http://belllabs-site-claude-shannon.s3-website-us-east-1.amazonaws.com/",
    officialLabel: "Bell Labs historical material",
    imageUrl: "/media/generated/shannon-theseus-maze.webp",
    imageAlt:
      "Reconstruction of Claude Shannon's Theseus maze-solving automaton with aluminum walls and electromagnetic relays.",
    sourceRecord: "docs/content/media/records/shannon-theseus-image.md",
  },
  {
    slug: "lovelace-analytical-engine",
    era: "Era 1",
    title: "Lovelace and the Analytical Engine",
    summary:
      "Ada Lovelace's 1843 notes on Babbage's Analytical Engine contain the first published discussion of what a general-purpose computing machine could and could not do — including her famous caution that the Engine 'has no pretensions to originate anything.'",
    officialUrl: "https://www.fourmilab.ch/babbage/sketch.html",
    officialLabel: "Lovelace and Menabrea notes",
    imageUrl: "/media/wikimedia/ada-lovelace.webp",
    imageAlt: "Wikimedia Commons portrait of Ada Lovelace.",
    sourceRecord:
      "docs/content/media/records/lovelace-analytical-engine-story-card.md",
  },
  {
    slug: "boole-to-turing",
    era: "Era 1",
    title: "Boole to Turing logical runway",
    summary:
      "George Boole's 1854 'Laws of Thought' turned reasoning into symbolic algebra. That formal structure became the foundation for Turing's theory of computation and every logic-based AI system that followed.",
    officialUrl: "https://archive.org/details/investigationofl00bool",
    officialLabel: "Boole source archive",
    imageUrl: "/media/wikimedia/george-boole.webp",
    imageAlt: "Wikimedia Commons portrait of George Boole.",
    sourceRecord: "docs/content/media/records/boole-to-turing-story-card.md",
  },
  {
    slug: "lighthill-report",
    era: "Era 4",
    title: "The Lighthill Report and the first AI winter",
    summary:
      "James Lighthill's 1973 report to the British Science Research Council declared that AI had failed to deliver on its promises, triggering funding cuts across the UK and casting doubt worldwide.",
    officialUrl:
      "https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/overview.htm",
    officialLabel: "Lighthill Report archive",
    imageUrl: "/media/generated/lighthill-report.webp",
    imageAlt:
      "Illustration of the 1973 Lighthill Report, a formal British government document that triggered the first AI winter.",
    sourceRecord: "",
  },
  {
    slug: "backpropagation-paper",
    era: "Era 5",
    title: "Learning representations by back-propagating errors",
    summary:
      "Rumelhart, Hinton, and Williams published the modern formulation of backpropagation in 1986, giving neural networks a practical training algorithm and reigniting interest after the AI winter.",
    officialUrl: "https://www.nature.com/articles/323533a0",
    officialLabel: "Nature 1986 paper",
    imageUrl: "/media/generated/backpropagation-paper.webp",
    imageAlt:
      "Illustration of the 1986 backpropagation paper showing neural network diagrams with forward and backward arrows.",
    sourceRecord: "",
  },
  {
    slug: "imagenet-moment",
    era: "Era 6",
    title: "The ImageNet moment — AlexNet proves deep learning at scale",
    summary:
      "In 2012, Krizhevsky, Sutskever, and Hinton's AlexNet crushed the ImageNet competition by 10+ percentage points using a deep convolutional neural network trained on GPUs, proving that depth and data beat handcrafted features.",
    officialUrl:
      "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
    officialLabel: "NeurIPS 2012 paper",
    imageUrl: "/media/generated/imagenet-moment.webp",
    imageAlt:
      "Illustration of the 2012 ImageNet breakthrough showing classified images with confidence scores and neural network architecture.",
    sourceRecord: "",
  },
  {
    slug: "transformer-paper",
    era: "Era 7",
    title: "Attention Is All You Need — the Transformer architecture",
    summary:
      "Vaswani et al. introduced the Transformer in 2017, replacing recurrence with self-attention and enabling the parallelism that made GPT, BERT, and every modern foundation model possible.",
    officialUrl: "https://arxiv.org/abs/1706.03762",
    officialLabel: "arXiv paper",
    imageUrl: "/media/generated/transformer-paper.webp",
    imageAlt:
      "Illustration of the Transformer architecture from the 2017 'Attention Is All You Need' paper.",
    sourceRecord: "",
  },
];

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
  {
    slug: "lighthill-report",
    imageUrl: "/media/generated/lighthill-report.webp",
    imageAlt:
      "Illustration of the 1973 Lighthill Report on artificial intelligence.",
  },
  {
    slug: "backpropagation-paper",
    imageUrl: "/media/generated/backpropagation-paper.webp",
    imageAlt:
      "Illustration of the 1986 backpropagation paper with neural network diagrams.",
  },
  {
    slug: "imagenet-moment",
    imageUrl: "/media/generated/imagenet-moment.webp",
    imageAlt:
      "Illustration of the 2012 ImageNet/AlexNet breakthrough in computer vision.",
  },
  {
    slug: "transformer-paper",
    imageUrl: "/media/generated/transformer-paper.webp",
    imageAlt: "Illustration of the 2017 Transformer architecture paper.",
  },
];
