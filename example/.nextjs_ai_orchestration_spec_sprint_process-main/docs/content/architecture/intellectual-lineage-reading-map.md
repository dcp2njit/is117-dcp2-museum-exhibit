# Intellectual Lineage Reading Map

## Purpose

This document gives a compact reading map of key papers and texts by era so the
site's chronology can be traced through the documents that most clearly show the
intellectual lineage.

It is not a full bibliography. It is a teaching-first map of the minimum texts
that most clearly explain how one era leads into the next.

## How To Use This Map

- read down the main chronology to trace the dominant technical lineage
- use the safety and interpretability thread to follow the parallel argument
  about alignment, opacity, and control
- treat early entries as key texts when the period predates modern conference
  paper culture

## Era 1: Precursors To Machine Intelligence

- George Boole, `An Investigation of the Laws of Thought` (1854)
  Why it matters: gives the lineage its strongest early account of reasoning as
  symbolic structure.
- Ada Lovelace, `Notes` on the Analytical Engine (1843)
  Why it matters: sharpens the difference between executing procedure and making
  stronger claims about machine thought.

## Era 2: Computation, Information, And Field Formation

- Alan Turing, `On Computable Numbers, with an Application to the
Entscheidungsproblem` (1936)
  Why it matters: gives the chronology its precise theory of computation.
- Warren McCulloch and Walter Pitts, `A Logical Calculus of the Ideas Immanent
in Nervous Activity` (1943)
  Why it matters: creates the neural-computational bridge.
- Claude Shannon, `A Mathematical Theory of Communication` (1948)
  Why it matters: formalizes information as part of the era's technical
  vocabulary.
- Alan Turing, `Computing Machinery and Intelligence` (1950)
  Why it matters: turns machine intelligence into a sharper research question.
- Dartmouth proposal, `A Proposal for the Dartmouth Summer Research Project on
Artificial Intelligence` (1955)
  Why it matters: names and consolidates the field.

## Era 3: Symbolic Optimism And Early AI Programs

- Allen Newell and Herbert A. Simon, `The Logic Theory Machine` (1956)
  Why it matters: shows that formal reasoning can be operationalized in a
  program.
- John McCarthy, `Recursive Functions of Symbolic Expressions and Their
Computation by Machine, Part I` (1960)
  Why it matters: helps establish LISP and symbolic AI as working research
  infrastructure.
- J. A. Robinson, `A Machine-Oriented Logic Based on the Resolution Principle`
  (1965)
  Why it matters: deepens the theorem-proving lineage.

## Era 4: Knowledge Systems, Critique, And The First AI Winter

- Edward A. Feigenbaum, Bruce G. Buchanan, and Joshua Lederberg, DENDRAL papers
  (late 1960s to 1970s)
  Why it matters: make knowledge-based AI look genuinely useful in bounded
  domains.
- Edward H. Shortliffe, `Computer-Based Medical Consultations: MYCIN` (1976)
  Why it matters: the clearest expert-systems anchor in medicine.
- James Lighthill, `Artificial Intelligence: A General Survey` (1973)
  Why it matters: the most durable public critique of broad symbolic ambitions.

## Era 5: Statistical Learning And Network Revival

- David E. Rumelhart, Geoffrey E. Hinton, and Ronald J. Williams,
  `Learning Representations by Back-Propagating Errors` (1986)
  Why it matters: reopens serious multi-layer neural learning.
- Yoshua Bengio, Rejean Ducharme, Pascal Vincent, and Christian Jauvin,
  `A Neural Probabilistic Language Model` (2003)
  Why it matters: ties language modeling to learned distributed representations.
- Geoffrey Hinton, Simon Osindero, and Yee-Whye Teh,
  `A Fast Learning Algorithm for Deep Belief Nets` (2006)
  Why it matters: helps make deep architectures technically credible again.

## Era 6: Deep Learning Breakthroughs

- Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton,
  `ImageNet Classification with Deep Convolutional Neural Networks` (2012)
  Why it matters: the benchmark breakthrough that makes deep learning look
  dominant.
- Yann LeCun, Yoshua Bengio, and Geoffrey Hinton, `Deep Learning` (2015)
  Why it matters: the clearest review text for the era's representation-learning
  frame.
- Ashish Vaswani et al., `Attention Is All You Need` (2017)
  Why it matters: the decisive transformer turning point.
- Alec Radford et al., `Language Models are Unsupervised Multitask Learners`
  (2019)
  Why it matters: shows the immediate runway from transformers to general-purpose
  language-model behavior.

## Era 7: Foundation Models And Generative AI

- Tom B. Brown et al., `Language Models are Few-Shot Learners` (2020)
  Why it matters: GPT-3 makes scale look like a general interface to capability.
- Rishi Bommasani et al., `On the Opportunities and Risks of Foundation Models`
  (2021)
  Why it matters: gives the strongest early frame for the era's name and scope.
- John Jumper et al., `Highly Accurate Protein Structure Prediction with
AlphaFold` (2021)
  Why it matters: keeps the modern period broader than chat.
- Long Ouyang et al., `Training Language Models to Follow Instructions with
Human Feedback` (2022)
  Why it matters: explains the instruction-following and RLHF turn behind public
  assistants.
- Yuntian Bai et al., `Constitutional AI: Harmlessness from AI Feedback` (2022)
  Why it matters: represents a strong safety-and-governance thread within the
  current era.

## Safety And Interpretability Thread

- Eliezer Yudkowsky, `Artificial Intelligence as a Positive and Negative Factor
in Global Risk` (2008)
  Why it matters: one of the clearest early statements of advanced-AI risk in a
  form that later readers can still trace.
- Stephen M. Omohundro, `The Basic AI Drives` (2008)
  Why it matters: crystallizes the instrumental-convergence argument behind later
  paperclip-maximizer teaching.
- Nelson Elhage et al., `A Mathematical Framework for Transformer Circuits`
  (2021)
  Why it matters: launches a concrete mechanistic-interpretability program for
  transformers.
- Catherine Olsson et al., `In-Context Learning and Induction Heads` (2022)
  Why it matters: shows how specific transformer mechanisms can be studied rather
  than treated as pure black boxes.
- Samuel Marks, Can Rager, Eric J. Michaud, and collaborators,
  `Towards Monosemanticity` (2023) and `Scaling Monosemanticity` (2024)
  Why it matters: make the attempt to extract human-interpretable features from
  large models central to the current interpretability story.

## Open Current-Era Question

Why do many historians and researchers say we still do not fully understand how
LLMs work?

- because benchmark performance and deployment have advanced faster than
  mechanistic reverse engineering
- because large models often use distributed internal representations that are
  hard to map cleanly to human concepts
- because asking a model to explain itself is not the same as understanding the
  internal mechanism that produced the behavior

## Source Basis

- [Pre-Shannon To Dartmouth](../../_research/topics/pre-shannon-to-dartmouth.md)
- [Post-Dartmouth To First AI Winter](../../_research/topics/post-dartmouth-to-first-ai-winter.md)
- [Statistical Learning Through Transformers](../../_research/topics/statistical-learning-through-transformers.md)
- [Foundation Models, Public AI, And The 2026 Surface](../../_research/topics/foundation-models-public-ai-and-2026-surface.md)
