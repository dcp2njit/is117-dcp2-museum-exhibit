import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import KnowledgeSystemsCritiqueAndFirstAiWinterPage from "@/app/eras/knowledge-systems-critique-and-the-first-ai-winter/page";
import SymbolicOptimismAndEarlyAiProgramsPage from "@/app/eras/symbolic-optimism-and-early-ai-programs/page";

describe("mid-century expansion", () => {
  it("renders Era 3 with bidirectional chronology links and symbolic-context guidance", () => {
    render(<SymbolicOptimismAndEarlyAiProgramsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /symbolic optimism and early ai programs/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /back to era 2: computation, information, and field formation/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /continue to era 4: knowledge systems, critique, and the first ai winter/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /symbolic ai was a real technical program, not a historical punchline/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/early ai was not only theorem proving/i)
    ).toBeInTheDocument();
  });

  it("renders Era 4 with first-winter causality and adjacent-era navigation", () => {
    render(<KnowledgeSystemsCritiqueAndFirstAiWinterPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /knowledge systems, critique, and the first ai winter/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /back to era 3: symbolic optimism and early ai programs/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /expert systems count as progress even inside a narrowing field/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/era 5 is the methodological answer to this winter/i)
    ).toBeInTheDocument();
  });
});
