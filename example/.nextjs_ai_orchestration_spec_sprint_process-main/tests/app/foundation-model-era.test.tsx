import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DeepLearningBreakthroughsPage from "@/app/eras/deep-learning-breakthroughs/page";
import FoundationModelsAndGenerativeAiPage from "@/app/eras/foundation-models-and-generative-ai/page";

describe("foundation model era", () => {
  it("extends Era 6 navigation forward into the final Era 7 route", () => {
    render(<DeepLearningBreakthroughsPage />);

    expect(
      screen.getByRole("link", {
        name: /continue to era 7: foundation models and generative ai/i,
      })
    ).toBeInTheDocument();
  });

  it("renders Era 7 with LLM, embeddings, latent space, and final-era continuity", () => {
    render(<FoundationModelsAndGenerativeAiPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /foundation models and generative ai/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /back to era 6: deep learning breakthroughs/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /llm fluency is not the same thing as settled understanding/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /embeddings and latent space are the modern bridge from data to meaning/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /why researchers still say we do not fully understand how llms work/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /^large language models$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /^vector embeddings$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /^latent space$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /^mechanistic interpretability$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /^instrumental convergence$/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("heading", {
        level: 3,
        name: /^andrej karpathy$/i,
      }).length
    ).toBeGreaterThan(1);
    expect(
      screen.getAllByRole("heading", {
        level: 3,
        name: /^sam altman$/i,
      }).length
    ).toBeGreaterThan(1);
    expect(
      screen.getAllByRole("heading", {
        level: 3,
        name: /^dario amodei$/i,
      }).length
    ).toBeGreaterThan(1);
    expect(
      screen.getAllByRole("heading", {
        level: 3,
        name: /^eliezer yudkowsky$/i,
      }).length
    ).toBeGreaterThan(1);
    expect(
      screen.getAllByRole("heading", {
        level: 3,
        name: /^anthropic$/i,
      }).length
    ).toBeGreaterThan(1);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /portraits and institutions in the public ai era/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /browse people and institutions/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /official site/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /^x$/i }).length
    ).toBeGreaterThan(0);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(2);

    expect(
      screen.getAllByText(
        /transformers make llms possible, embeddings support retrieval, latent space explains learned internal structure/i
      ).length
    ).toBeGreaterThan(0);
  });
});
