import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DeepLearningBreakthroughsPage from "@/app/eras/deep-learning-breakthroughs/page";
import StatisticalLearningAndNetworkRevivalPage from "@/app/eras/statistical-learning-and-network-revival/page";

describe("modern ML expansion", () => {
  it("renders Era 5 with the statistical turn and adjacent-era navigation", () => {
    render(<StatisticalLearningAndNetworkRevivalPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /statistical learning and network revival/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /back to era 4: knowledge systems, critique, and the first ai winter/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /continue to era 6: deep learning breakthroughs/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/statistics change what counts as progress/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/two strands of the revival era/i)
    ).toBeInTheDocument();
  });

  it("renders Era 6 with transformer handoff language and backward navigation", () => {
    render(<DeepLearningBreakthroughsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /deep learning breakthroughs/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /back to era 5: statistical learning and network revival/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/deep learning is not just neural networks again/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /follow the transformer handoff through the paper trail/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /the transformer shift is the clearest direct bridge into the next era/i
      )
    ).toBeInTheDocument();
  });
});
